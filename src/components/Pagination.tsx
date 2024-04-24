"use client";

import { useState } from "react";
import { products } from "./ProductsData";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToNextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return (
    <div>
      <div className="flex gap-6 py-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="border border-green-500 rounded bg-slate-300 p-2 flex items-center flex-col">
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-green-600 pt-6">${product.price}</p>
          </div>
        ))}
      </div>
      <div className="py-12 flex items-center justify-center gap-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? "text-slate-500 border-none" : "bg-slate-300 border"} font-bold text-2xl py-1 px-3`}
        >
          ←
        </button>
        <span>
          Page {currentPage}/{totalPages}
        </span>
        <button onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`font-bold text-2xl ${currentPage === totalPages ? "text-slate-500 border-none" : "bg-slate-300 border"} font-bold text-2xl py-1 px-3`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagination;
