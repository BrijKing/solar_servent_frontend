import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="p-4  shadow-lg text-white"
      style={{ backgroundColor: "#001C30", overflow: "hidden" }}
      name="title"
    >
      <div
        className="flex justify-between px-4 items-center"
        style={{ width: "100vw" }}
      >
        <h1 className="text-3xl">
          <Link to="/">Solar Servant</Link>
        </h1>
        <div name="nav" className=" flex">
          <div name="login" className="p-3">
            <Link to="/login">Login</Link>
          </div>
          <p className="p-3">|</p>
          <div name="register" className="p-3" style={{ paddingRight: "35px" }}>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
