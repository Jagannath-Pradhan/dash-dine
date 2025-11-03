import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/config/db";
import User from "@/lib/models/user";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    // Basic Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    // Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Find User
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "No account found with this email." },
        { status: 404 }
      );
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Incorrect password. Please try again." },
        { status: 401 }
      );
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    // Send Response with Cookie
    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

    // Store JWT in HttpOnly cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong during login. Please try again.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}