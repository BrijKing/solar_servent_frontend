import React from "react";
import styles from "./CustomTable.module.css";

const CustomTable = ({ fields, data }) => { 
  return (
    <div>
      <table className={`w-[1000px] border shadow-md ${styles.table}`}>
        <thead>
          <tr className="bg-blue-400 shadow-md">
            {Array.from( fields).map((field) => (
              <th className="px-4 py-2">{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from(data)?.map((item, index) => (
            <tr
              key={data.id}
              className={`text-center h-[60px] shadow-md ${
                index % 2 !== 0 ? styles.evenRow : styles.oddRow
              }`}
            >
              {Object.keys(item)?.map((key) => (
                key === "id" ? "" : <td className="border px-4 py-2">{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
