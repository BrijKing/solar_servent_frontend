import React from "react";
import {
  getNameFromToken,
  getAuthorityFromToken,
} from "../../utils/jwtTokenDecoder";
import profileImg from "../../Images/profilePic.jpg"

const ProfilePic = () => {
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
        {getNameFromToken()}
      </p>
      <p className="text-blue-300">{getAuthorityFromToken()}</p>
    </div>
  );
};

export default ProfilePic;
