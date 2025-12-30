"use client"
import SignUp from "@/app/actions/Signup"
import { useState } from "react"

export default function SignupPage(){
   const[name, Setname] = useState("")
   const[email, Setemail] = useState("")
   const[password, Setpassword] = useState("")
   const[message, Setmessage] = useState("")
   const[loading, Setloading] = useState(false)

   async function HandleSubmit(e){
    e.preventDefault();
    Setloading(true)
    const res = await SignUp({name, email, password})
    Setmessage(res.error || res.success)
    Setloading(false)
    Setname("")
    Setemail("")
    Setpassword("")
   }
    return(
        <main>
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
  <form onSubmit={HandleSubmit} 
   className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm">
    <h2 className="text-2xl font-semibold text-white mb-6 text-center">Sign Up</h2>
    
    <div className="mb-4">
      <label className="block text-gray-300 mb-2 text-sm" htmlFor="name">Full Name</label>
      <input onChange={(e)=>Setname(e.target.value)}
      value={name}
       id="name" type="text" placeholder="Enter your name" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-300 mb-2 text-sm" htmlFor="email">Email</label>
      <input onChange={(e)=>Setemail(e.target.value)}
      value={email}
       id="email" type="email" autoComplete="new-email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div className="mb-6">
      <label className="block text-gray-300 mb-2 text-sm" htmlFor="password">Password</label>
      <input onChange={(e)=>Setpassword(e.target.value)}
      value={password}
       id="password" type="password" autoComplete="new-email" placeholder="Enter your password" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <button type="submit" className={`w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 ${
      loading ? "cursor-not-allowed" : "cursor-pointer"
    }`}>{loading ? "saving..." : "create account"}</button>

    <p className="text-gray-400 text-sm mt-4 text-center">Already have an account? <a href="login" className="text-blue-500 hover:underline">Login</a></p>
    {message}
  </form>
  
</div>

        </main>
    )
}