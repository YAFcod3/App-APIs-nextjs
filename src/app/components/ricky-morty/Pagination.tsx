import React from "react";




interface PaginationProps {
  currentPage: number;
  handlePageChange: (numero: number) => void;
}



const Pagination = ({currentPage,handlePageChange}:PaginationProps) => {
  return (
    <div className="flex gap-4 bg-gray-800  justify-center items-center py-20">
      {/* botton - */}
      <button
        className="bg-white p-1 px-4 text-black rounded-md "
        onClick={() => handlePageChange(-1)}
      >
        -
      </button>
      {/* count */}
      <span>{currentPage}</span>
      {/* boton + */}
      <button
        className="bg-white p-1 px-4 text-black rounded-md "
        onClick={() => handlePageChange(+1)}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;
