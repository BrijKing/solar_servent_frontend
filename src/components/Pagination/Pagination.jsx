import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ onPageChange, totalPage }) {
  console.log(totalPage);
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex justify-end ">
        <li className="p-2">
          <Link className="relative block rounded bg-blue-500 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-blue-900 dark:text-white dark:hover:bg-blue-900 dark:hover:text-white">
            Previous
          </Link>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="pt-2 pl-1">
            <Link
              className="relative block rounded bg-gray-400 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </Link>
          </li>
        ))}
        <li className="p-2">
          <Link className="relative block rounded bg-blue-500 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-blue-900 dark:text-white dark:hover:bg-blue-900 dark:hover:text-white">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
