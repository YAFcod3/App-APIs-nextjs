"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ApiResponse, Character } from "../intrefaces/data-ricky";
import Header from "../components/ricky-morty/Header";
import Item from "../components/ricky-morty/Item";
import Pagination from "../components/ricky-morty/Pagination";


const RickyAndMorty = () => {
  const baseUrl = "https://rickandmortyapi.com/api";

  //ROUTER INITIALIZATION
  const router = useRouter();
  // const data = await getData()

  //HOOKS STATE
  const [results, setResults] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [isloading, setIsLoading] = useState<boolean>(false);

  //FETCH
  const getDataFromApi = async () => {
    //  fetch('https://rickandmortyapi.com/api/character')
    // .then(response =>response.json())
    // .then(data =>setResults(data.results))
    // .catch(err =>console.log(err));

    try {
      setIsLoading(true);
      const res = await fetch(`${baseUrl}/character?page=${currentPage}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data: ApiResponse = await res.json();
      // const { results }: { results: Character[] } = data;
      const { results, info } = data;
      console.log(info);
      setTotalPage(info.pages);

      setResults(results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //EFFECT
  useEffect(() => {
    getDataFromApi();
  }, [currentPage]);

  //leyendo datos from api
  console.log(results);

  //CHANGE PAGE
  const handlePageChange = (numero: number): void => {
    if (numero === -1 && currentPage > 1) {
      //verificar si viene por resta y tamb verifcar q no sea la pagina minima
      setCurrentPage(currentPage - 1);
      router.push("/ricky-morty/#ricky-morty");
    } else if (numero === 1 && currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      router.push("/ricky-morty/#ricky-morty");
    }
  };

  return (
    <>
      <Header />

      <div
        id="ricky-morty"
        className=" pt-20 bg-gray-800 flex flex-col justify-center items-center 	"
      >
        {isloading && <h2 className=" text-4xl text-center">Cargando...</h2>}
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-8 ">
          {results?.map((result) => (
            <Item key={result.id} result={result} />
          ))}
          {/* {JSON.stringify(results)} */}
        </div>
      </div>
      {/* pagination */}
      {results.length !==0 && (
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default RickyAndMorty;
