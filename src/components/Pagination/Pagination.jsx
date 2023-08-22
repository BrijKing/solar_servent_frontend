import React from "react";

export default function Pagination() {
  const totalPages = 3;
  const handlePageClick = (pageNumber) => {
    console.log(pageNumber);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex justify-end ">
        <li className="p-2">
          <a
            className="relative block rounded bg-blue-500 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-blue-900 dark:text-white dark:hover:bg-blue-900 dark:hover:text-white"
            href="#"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="pt-2 pl-1">
            <a
              className="relative block rounded bg-gray-400 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li className="p-2">
          <a
            className="relative block rounded bg-blue-500 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-blue-900 dark:text-white dark:hover:bg-blue-900 dark:hover:text-white"
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
