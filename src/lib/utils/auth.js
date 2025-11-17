import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import connectDB from "../config/db";
import User from "../models/user";

export async function getServerSession() {
  await connectDB();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.id).select("name email role");

    return user ? { ...user.toObject() } : null;

  } catch (err) {
    return null;
  }
}