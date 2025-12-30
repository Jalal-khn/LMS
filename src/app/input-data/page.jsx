"use client";

import { useState } from "react";
import CreateData from "@/crud-operations/create-data"; 
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function DataEntry() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
 const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!image) {
      setMessage("Please select an image file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "data456"); 
      formData.append("cloud_name", "ddwotttxt");  

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/ddwotttxt/image/upload",
        { method: "POST", body: formData }
      );
      const result = await response.json();

      if (!result.secure_url) {
        setMessage("Image upload failed");
        return;
      }
      const res = await CreateData({
        name,
        age,
        course,
        image: result.secure_url, 
      });

      setMessage(res.error || res.success);
      setName("");
      setAge("");
      setCourse("");
      setImage(null);
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage(error.message || "Something went wrong");
    } 
    if (course === "Web Development"){
      router.push("/web")
    }
    else if (course === "Graphic Designing"){
      router.push("/graphic")
    }
    else if (course === "Basic IT"){
      router.push("/IT")
    }
    else {
      router.push("/dashboard")
    }
  }

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-pink-200 to-purple-300 p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-linear-65 from-purple-500 to-pink-500 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Add Student Information
          </h2>

          <div>
            <label className="block text-gray-300 mb-1 font-medium">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter student name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-medium">Age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              value={age}
              type="number"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter age"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-medium">Course</label>
            <select
              onChange={(e) => setCourse(e.target.value)}
              value={course}
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            >
              <option value="">Select your Course</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Web Development">Web Development</option>
              <option value="APP Development">APP Development</option>
              <option value="Basic IT">Basic IT</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-1 font-medium">Upload Image</label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 file:bg-cyan-600 file:border-0 file:p-2 file:rounded file:text-white cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-lg transition"
          >
            Submit Info
          </button>
         <p className="Text-xl text-black font-bold">Back to <Link className="underline" href="dashboard">Dashboard</Link></p>
          {message && <p className="text-center text-white mt-2">{message}</p>}
        </form>
       
      </div>
    </section>
  );
}
