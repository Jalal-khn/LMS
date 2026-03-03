import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import getSession from "../actions/session";
import LogOut from "../components/delete";
import prisma from "@/lib/db";

async function ReadData() {
  return prisma.studentInfo.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
}

export default async function DashboardPage() {
  const session = await getSession();
  if (!session?.id) redirect("/login");
  const data = await ReadData();

  return (
    <main className="bg-linear-to-r from-pink-200 to-purple-300 min-h-screen p-4">
     

      <section>
        <p className="text-center text-2xl font-bold bg-red-600 text-white p-3 m-1.5 rounded-lg">
          Enrolled Courses
        </p>

        <div className="grid grid-cols-5 gap-3 mx-3">
          {data.map((item) => {
            const courseRoute =
              item.course === "Web Development"
                ? "/web"
                : item.course === "Graphic Designing"
                ? "/graphic"
                : item.course === "Basic IT"
                ? "/IT"
                : "/dashboard";

            return (
              <Link key={item.id} href={courseRoute}>
                <div className="flex flex-col items-center bg-linear-65 from-purple-500 to-pink-500 shadow-sm shadow-black/50
                 p-2 rounded-md hover:scale-105 transition cursor-pointer">
                  <Image
                    src={item.image}
                    alt="student"
                    width={150}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <h1 className="text-2xl font-bold mt-2">
                    {item.user?.name || "Unknown User"}
                  </h1>
                  <p className="text-lg">{item.course}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
