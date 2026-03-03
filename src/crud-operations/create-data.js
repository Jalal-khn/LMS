"use server";

import prisma from "@/lib/db";
import getSession from "@/app/actions/session";

export default async function CreateData({ age, course, image }) {
  const session = await getSession();

  if (!session?.id) {
    return { error: "Unauthorized" };
  }

  try {
    await prisma.studentInfo.create({
      data: {
        userId: session.id,
        age: Number(age),
        course,
        image,
      },
    });

    return { success: "Enrolled successfully", course };
  } catch (error) {
    return { error: "Already enrolled or error occurred" };
  }
}
