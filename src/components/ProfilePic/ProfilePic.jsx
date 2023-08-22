import React from "react";
import { getAuthorityFromToken } from "../../utils/jwtTokenDecoder";
import profileImg from "../../Images/profilePic.jpg";
import { useAuth } from "../../contexts/AuthContext";

const ProfilePic = () => {
  const {userName}=useAuth();
  return (
    <div className="absolute w-full flex flex-col items-center">
      <div className="mt-3">
        <img
          src={profileImg}
          alt="profile pic"
          className="rounded-full "
          style={{ width: "90px" }}
        />
      </div>

      <p className="text-white text-xl mt-2 font-semibold">
        {userName}
      </p>
      <p className="text-blue-300">{getAuthorityFromToken()}</p>
    </div>
  );
};

export default ProfilePic;
