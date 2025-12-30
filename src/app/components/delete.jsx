"use client"
import DeleteToken from "../actions/logout"


export default function LogOut(){
    return(
        <button onClick={async () => {
            await DeleteToken()
        }}
        className="px-3 py-2 bg-red-600 text-white rounded-lg font-bold">Logout</button>
    )
}