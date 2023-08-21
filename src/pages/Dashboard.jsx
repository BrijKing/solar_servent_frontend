import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="relative">
      <NavBar />
      <SideBar />
      <div className="absolute left-[250px] top-[90px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
