import Link from "next/link";
import getSession from "../actions/session";
import DataEntry from "../input-data/page";
import LogOut from "../components/delete";
import Image from "next/image";
import ReadData from "@/crud-operations/read";
import { redirect } from "next/navigation";


export default async function DashboardPage(){
   const Token = await getSession()
   const data = await ReadData();
  
  return (
    <main className="bg-linear-to-r from-pink-200 to-purple-300 h-full p-4">
      <header className="flex justify-between items-center p-4">
      <h1 className="ml-[150px] font-bold text-3xl"><span className="text-red-600">D</span>ashboard</h1>
      <nav className="flex flex-row items-center gap-2">
        <Link className="py-2 px-3 rounded-lg font-bold bg-yellow-400" 
         href="input-data" >Register here</Link>
        <LogOut />
      </nav>
    </header>
    <section>
      <p className="text-center text-2xl font-bold bg-red-600 text-white p-3 m-1.5 rounded-lg">Enrolled Students</p>
    <div className="grid grid-cols-5 gap-3 mx-3">
       {data.map((item) =>
       <div key={item.id} className="flex justify-center flex-col bg-linear-65 from-purple-500 to-pink-500 shadow-sm shadow-black/50 p-2 rounded-md items-center">
        <Image className="h-[200px] w-[150px] rounded-lg object-cover"
        src={item.image} alt=""
        width={1000} height={1000} />
        <h1 className="text-3xl font-bold">{item.name}</h1>
        <p className="text-xl">{item.course}</p>
        <div className="flex justify-between gap-4 mt-1.5 items-center">
          <Link href={`/update/${item.id}`} className="font-bold bg-green-400 rounded-md px-2 py-1 text-white cursor-pointer">Update</Link>
          <button className="font-bold bg-red-600 rounded-md px-2 py-1 text-white">Delete</button>
        </div>
      </div>
     )}
    </div>
    </section>
    </main>
  );
}
