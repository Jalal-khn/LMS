"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function DeleteToken(){
    cookies().delete("jalal")
    redirect("/login")
}