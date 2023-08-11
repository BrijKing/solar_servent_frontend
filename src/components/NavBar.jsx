import React from "react";

const NavBar = () => {
  return (
    <div
      className="p-4 flex justify-between items-center shadow-lg"
      name="title"
    >
      <h1 className="text-3xl">Solar Servant</h1>
      <div name="nav" className=" flex">
        <div name="login" className="p-3">
          Login
        </div>
        <p className="p-3">|</p>
        <div name="register" className="p-3">
          Register
        </div>
      </div>
    </div>
  );
};

export default NavBar;
