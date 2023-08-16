import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Feature = ({ title, description, icon }) => {
  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
    //   <div>
    //     <FontAwesomeIcon className="w-full h-9" icon={icon} />
    //   </div>

    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{title}</div>
    //     <p className="text-gray-700 text-base">{description}</p>
    //   </div>
    // </div>

    <div
      className="cards"
      style={{
        padding: "50px 50px",
        display: "flex",
        // justifyContent: "space-between",
      }}
    >
      <div
        className=" card text-2xl"
        style={{
          width: "300px",
          height: "250px",
          background: "#189AB4",
          opacity: "0.9",
          borderRadius: "10px",
        }}
      >
        <div style={{padding:"25% 3%"}}>
          <div style={{fontWeight:""}}>
            <FontAwesomeIcon className="w-full h-9" icon={icon}  />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
