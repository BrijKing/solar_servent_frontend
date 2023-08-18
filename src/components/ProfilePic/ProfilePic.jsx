import React from "react";

const ProfilePic = () => {
  return (
    <div className="absolute mt-3 ">
      <img
        src="profilePic.jpg"
        alt="profile pic"
        className="rounded-full "
        style={{ width: "90px" }}
      />
    </div>
  );
};

export default ProfilePic;
