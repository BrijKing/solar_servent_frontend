import React from "react";

export default function Pagination({ setCurrentPage, totalPage, currentPage }) {
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrivous = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex justify-end ">
        <li className="p-2">
          <button
            disabled={currentPage === pageNumbers[0] || currentPage === 0}
            onClick={handlePrivous}
            className="relative block rounded bg-blue-500 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-blue-900 dark:text-white dark:hover:bg-blue-900 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="pt-2 pl-1">
            <button
              className="relative block rounded bg-gray-400 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li className="p-2">
          <button
            disabled={currentPage === pageNumbers.slice(-1)}
            onClick={handleNext}
            className="relative block rounded bg-blue-500 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-blue-900 dark:text-white dark:hover:bg-blue-900 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
