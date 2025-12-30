"use server"
import prisma from "@/lib/db"

export async function CheckEnroll(id){
    const Enrollment = await prisma.studentInfo.findFirst(
        {
            where:{id},
            select:{course:true},
        }
    )
    return Enrollment;
}