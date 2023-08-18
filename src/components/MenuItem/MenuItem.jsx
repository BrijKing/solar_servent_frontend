import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ name , path }) => {
  return (
    <div className="text-white">
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default MenuItem;
