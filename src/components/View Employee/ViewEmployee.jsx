import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

import styles from "./ViewEmployee.module.css";
import {
  getAllEmployeeApi,
  searchEmployeeApi,
} from "../../services/EmployeeService";
import CustomTable from "../Table/CustomTable";

const ViewEmployee = () => {
  const [employeeData, setEmployeeData] = useState({});
  const [totalPage, setTotalPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchEmployee, setSearchEmployee] = useState();

  useEffect(() => {
    getAllEmployeeApi(0).then((res) => {
      setTotalPage(res.data.totalPages);
      setEmployeeData(res.data.content);
    });
  }, []);

  useEffect(() => {
    if (currentPage !== 0)
      getAllEmployeeApi(currentPage - 1).then((res) => {
        setEmployeeData(res.data.content);
      });
  }, [currentPage]);

  const handleSearch = (e) => {
    setSearchEmployee(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchEmployeeApi(searchEmployee)
      .then((res) => {
        setEmployeeData(res.data);
      })
      .catch((e) => {
        alert("sorry no Employee found 😔");
        getAllEmployeeApi(0).then((res) => {
          setTotalPage(res.data.totalPages);
          setEmployeeData(res.data.content);
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-end mb-3">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-white sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className=" w-[250px] p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white dark:bg-white dark:text-black"
            placeholder="Search..."
            onChange={handleSearch}
            required
          />
        </div>
      </form>
      {/* <table className={`w-[1000px] border shadow-md ${styles.table}`}>
        <tr className="bg-blue-400 shadow-md">
          <th className="p-4 ">E-mail</th>
          <th className="p-4"> role</th>
        </tr>
        {Array.from(employeeData)?.map((data, index) => {
          return (
            <tr
              key={data.id}
              className={`text-center h-[60px] shadow-md ${
                index % 2 !== 0 ? styles.evenRow : styles.oddRow
              }`}
            >
              <td>{data.email}</td>
              <td>{data.role}</td>
            </tr>
          );
        })}
      </table> */}
      <CustomTable fields={[
          "E-mail",
          "Role"
        ]}
        data={employeeData}/>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ViewEmployee;
