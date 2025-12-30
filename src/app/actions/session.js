"use server"
import Jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function getSession(){
    const cookieStore = cookies()
    const cookie = cookieStore.get("jalal")
    const token = cookie?.value
    const SECRET = "mykey"
if(!token){
    redirect("/login")
}
try{
    Jwt.verify(token, SECRET)
} catch(error){
    redirect("/login")
}
return token
}