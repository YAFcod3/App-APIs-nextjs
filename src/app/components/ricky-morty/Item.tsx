import { Character } from "@/app/intrefaces/data-ricky";
import Link from "next/link";
import React from "react";

interface ItemProps {
  result: Character;
}

const Item = ({ result }: ItemProps) => {
  return (
    <div
      key={result.id}
      className="w-[400px] md:w-[600px] h-[200px] bg-slate-500 rounded-2xl flex  justify-between"
    >
      {/* foto */}
      <img className="cover rounded-s-2xl" src={result.image} alt="" />
      {/* info */}
      <div className="flex flex-col w-full ml-4 mt-4">
        <Link href={`/ricky-morty/${result.id}`}>
          {" "}
          <span className="text-2xl font-bold"> {result.name}</span>
        </Link>
        <span> {result.status}</span>

        <span> {result.species}</span>

        <span> {result.type}</span>
        <span> {result.gender}</span>
        <span> {result.origin?.name}</span>
        {/* <span> {result.location?.name}</span> */}
      </div>
    </div>
  );
};

export default Item;
