import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="relative">
      <NavBar />
      <SideBar />
      <div className="absolute left-[400px] top-[200px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
