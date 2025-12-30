"use server";
import prisma from "@/lib/db";

export default async function CreateData({ name, age, course, image }) {
  if (!name || !age || !course || !image) {
    return { error: "Please fill all the credentials" };
  }

  try {
    await prisma.StudentInfo.create({
      data: {
        name,
        age: Number(age),
        course,
        image,
      },
    });

    return { success: "Successfully registered",course };
  } catch (error) {
    console.error("Something went wrong:", error);
    return { error: "Sorry for the inconvenience" };
  }
}
