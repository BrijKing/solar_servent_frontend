import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import MenuItems from "../MenuItems/MenuItems";

const SideBar = () => {
  return (
    <>
      <div
        className="h-screen relative flex justify-center"
        style={{ backgroundColor: "#002B4A", width: "15rem" }}
      >
        <ProfilePic />

        <MenuItems />

      </div>
    </>
  );
};

export default SideBar;
