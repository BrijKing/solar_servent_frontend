import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LinkForNav from "../NavLink/LinkForNav";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const navbarOptions = !isLoggedIn
    ? [
        {
          id: 1,
          name: "login",
          path: "login",
        },
        {
          id: 2,
          name: "register",
          path: "register",
        },
      ]
    : [
        {
          id: 1,
          name: "dashboard",
          path: "dashboard",
        },
        {
          id: 2,
          name: "logout",
          path: "logout",
        },
      ];

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

        <LinkForNav links={navbarOptions} />
      </div>
    </div>
  );
};

export default NavBar;
