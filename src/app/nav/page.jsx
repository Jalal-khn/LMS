import Link from "next/link";
import LogOut from "../components/delete";


export default function NavBar(){
    return(
         <header className="flex justify-between items-center p-4">
        <Link href="dashboard" className="ml-[150px] font-bold text-3xl">
          <span className="text-red-600">D</span>ashboard
        </Link>

        <nav className="flex gap-2">
          <Link
            className="py-2 px-3 rounded-lg font-bold bg-yellow-400"
            href="/input-data"
          >
            Enroll here
          </Link>
          <LogOut />
        </nav>
      </header>
    )
}