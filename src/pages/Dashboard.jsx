import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="relative h-[100vh] overflow-hidden">
      <NavBar />
      <SideBar />
      <div className="absolute left-[250px] top-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
