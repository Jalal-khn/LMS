"use server"
import prisma from "../../lib/db"

export default async function SignUp({name, email, password}){
    if(!name || !email || !password){
        return {error:"fill all the credential"}
    }
    try{
      await prisma.user.create({
        data: {
            name,
            email,
            password
        }
      });
      return {success:"data saved successfully. now you can login to your account"}
    }
    catch(error){
        console.error("something went wrong",error)
        return {error:"error while storing data"}
    }
}

