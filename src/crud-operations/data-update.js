"use server"
import prisma from "@/lib/db"
import { redirect } from "next/navigation"

export default async function GetsingleData(id){
   try{
   const data = await prisma.studentInfo.findUnique({
        where:{id}
    })
    return data;
   } catch(error){
     console.error(error);
  return null;
   }
}

export async function UpdataData({id,name,age,course,image}){
  const data = await prisma.studentInfo.update({
    where:{id},
    data:{
        name,
        age: Number(age),
        course,
        image
    }
  })
  redirect("/dashboard")
}