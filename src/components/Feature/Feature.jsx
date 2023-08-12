import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Feature = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <div>
        <FontAwesomeIcon className="w-full h-9" icon={icon} />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
