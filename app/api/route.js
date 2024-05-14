import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  await connectMongoDB();
  await User.create({ email, password: hashedPassword, role: "user" });
  return NextResponse.json(
    { message: "User Created, Please Login" },
    { status: 201 }
  );
}
