import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/config/db";
import User from "@/lib/models/user";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json()
    const { name, email, phone, password } = body

    // basic validation
    if (!name || !email || !phone || !password) {
      return NextResponse.json({
        success: false,
        message: 'Please fill in all fields.'
      }, { status: 400 })
    }

    // email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Please enter a valid email address.'
      }, { status: 400 });
    }

    // phone number validation (basic)
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json({
        success: false,
        message: 'Phone number must be 10 digits.'
      }, { status: 400 });
    }

    // password validation
    // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   return NextResponse.json({
    //     success: false,
    //     message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.'
    //   }, { status: 400 });
    // }

    // existing user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: 'An account with this email already exists.'
      }, { status: 409 });    //409 conflict
    }

    // password hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword
    });

    return NextResponse.json({
      success: true,
      message: 'Account created successfully. You can now log in.',
      user
    }, { status: 201 });
  } catch (error) {
    console.error('Registration Error: ', error)
    return NextResponse.json({
      success: false,
      message: 'Something went wrong while creating your account. Please try again later.',
      error: error.message
    }, { status: 500 })
  }
}