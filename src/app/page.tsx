"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const router=useRouter()

  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault()

    router.push(`/prediction/${inputVal}`)




  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="shadow-xl bg-white p-4 w-96 h-52 rounded-lg">
        <h1 className="mb-4 font-bold  font-sans text-black text-2xl">Enter your name</h1>

        
        <form className="flex flex-col justify-center items-start gap-4" onSubmit={handleSubmit}>
          <input
          className="text-black py-3 rounded-lg w-[340px] border-2 border-gray-400"
            type="text"
            placeholder="Type your name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className="bg-violet-600  w-[340px] rounded-lg p-2 py-3  text-white " type="submit">Predict data</button>
        </form>
      </div>
    </div>
  );
}
