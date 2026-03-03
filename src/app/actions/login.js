"use server";

import prisma from "@/lib/db";
import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogIn({ email, password }) {
  if (!email || !password) {
    return { error: "fill all credentials" };
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      studentInfo: true, 
    },
  });

  if (!user) return { error: "user not found" };
  if (user.password !== password) return { error: "wrong password" };

  const token = Jwt.sign(
    { id: user.id, email: user.email },
    "mykey"
  );

  cookies().set("jalal", token, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

 
  if (user.studentInfo) {
    const course = user.studentInfo.course;

   if(course){
    redirect("/graphic")
   } else {
      redirect("/dashboard");
   }

    
  } else{
    redirect("/dashboard")
  }

}
