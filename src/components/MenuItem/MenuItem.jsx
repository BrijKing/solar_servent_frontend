import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ name, path }) => {
  return (
    <div className="w-full flex justify-center">
      <NavLink to={path} className="flex justify-center w-full" >
        <button className="w-full h-[60px] hover:bg-white hover:text-blue-900 hover:border-blue-900 text-white font-semibold py-2 px-4">
          {name}
        </button>
      </NavLink>
    </div>
  );
};

export default MenuItem;
