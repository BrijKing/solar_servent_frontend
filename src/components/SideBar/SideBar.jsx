import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";

const SideBar = () => {
  return (
    <>
      <div
        className="h-screen relative flex justify-center"
        style={{ backgroundColor: "#002B4A", width: "15rem" }}
      >
        <ProfilePic />
      </div>
    </>
  );
};

export default SideBar;
