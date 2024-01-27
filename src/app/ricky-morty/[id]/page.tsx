import React from "react";
import Image from "next/image";
import { Character } from "@/app/intrefaces/data-ricky";





async function getItem(id: number): Promise<Character> {

  const baseUrl = "https://rickandmortyapi.com/api";
  const res = await fetch(`${baseUrl}/character/${id}`,{ cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}





//!metadata
export async function generateMetadata({
  params: { id },
}: {
  params: { id: number };
}):Promise<{title:string,description:string}> {
  const { name,gender } = await getItem(id);

  return {
    title: name,
    description: `soy ${name} y soy ${gender}`
  };
}



const Item = async ({ params: { id } }: { params: { id: number } }) => {


  const item = await getItem(id);

console.log(item);
  return (
    <>
      <div className=" max-w-5xl md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 ml-auto mx-auto ">
        <div>
        <Image
          src={item.image}
          alt="image"
          width={500}
          height={200}
          className="object-cover"
          // sizes="(max-width: 768px) 100vw, 33vw"
        />
        </div>
        <div className="px-4 flex flex-col gap-3">
          <h2 className="text-4xl font-bold ">{item.name}</h2>
          <span className="text-xl font-thin">{item.gender}</span>
          <span>{item.status}</span>
          <span>{item.species}</span>
          <span>{item.origin?.name}</span>
        </div>
      </div>
    </>
  );
};

export default Item;
