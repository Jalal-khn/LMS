"use server"
import prisma from "@/lib/db"

export default async function ReadData(){
    try{
      const data = await prisma.studentInfo.findMany();
      return data
    }catch(error){
       return error
    }
}