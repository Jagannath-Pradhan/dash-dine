import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/config/db";
import User from "@/lib/models/user";

export async function GET(req) {
  try {
    await connectDB();

    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: No token found" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || "mySecretKey");

    // Fetch user details
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error.name === "JsonWebTokenError"
            ? "Invalid or expired token"
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}