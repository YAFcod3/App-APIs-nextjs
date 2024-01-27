"use client";
import React, { useState } from "react";
import { Character } from "../../intrefaces/data-ricky";

interface SearcProps {
  setResults: (results: Character[]) => void;
  setTotalPage(page: number): void;
}




const Search = ({ setResults,setTotalPage }: SearcProps) => {


  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");



  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    
    e.preventDefault();
    
    try {
      const res = await fetch(
        // `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${name}&status=${status}&specie=${specie}&gender=${gender}`
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&specie=${specie}&gender=${gender}`
      );

      if (!res.ok) throw new Error(`Error fetching character`);
      const { info, results } = await res.json();
      setResults(results);
      setTotalPage(info.pages)
    } catch (error) {
      console.log(error);
    }
  };








  return (
    <div className="text-blue-200 mb-20 ">
      <form className="flex gap-4">
        <input
          value={name}
          name="name"
          className="p-2 text-black rounded-lg"
          type="text"
          placeholder="escriba el nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={specie}
          name="specie"
          className="p-2 text-black rounded-lg"
          type="text"
          placeholder="escriba la especie"
          onChange={(e) => setSpecie(e.target.value)}
        />
        <select
          className="p-2 text-black rounded-lg"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select
          className="p-2 text-black rounded-lg"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <option value="female">Female</option>
          <option value="male">male</option>
          <option value="genderless">genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button
          onClick={handleClick}
          className="bg-violet-600 p-2 text-white font-bold rounded-lg"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Search;
