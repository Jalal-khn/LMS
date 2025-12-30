"use server"
import prisma from "@/lib/db";
import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogIn({ email, password }) {
  if (!email || !password) {
    return { error: "fill all credentials" };
  }

  const User = await prisma.user.findUnique({
    where: { email },
  });

  if (!User) {
    return { error: "user not found" };
  }

  if (User.password !== password) {
    return { error: "wrong password" };
  }
  const SECRET = "mykey"
  const Token = Jwt.sign({id:User.id, email:User.email}, SECRET)

  cookies().set("jalal", Token, {
    httpOnly:true,
    secure:true,
    path:"/"
  });
  throw  redirect("/dashboard")
}


