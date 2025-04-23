// Handle signup process for a user using POST request for auth
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/UserSchema";
import connectMongoDB from "../../../../config/mongodb";

// Using POST request 
export async function POST(req: Request) {
  try {
    await connectMongoDB();
    const { username, email, password } = await req.json();

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
} // POST
