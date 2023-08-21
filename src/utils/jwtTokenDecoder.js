import jwt from "jwt-decode";
import Cookies from "js-cookies";
import { Navigate } from "react-router-dom";

const token = Cookies.getItem("UserToken");

function decodeToken(token) {
  try {
    return jwt(token);
  } catch (e) {
    <Navigate to={"/login"} />;
  }
}

export const getNameFromToken = () => {
  if (token) {
    return decodeToken(token).sub;
  }
  return "Guest";
};

export const getAuthorityFromToken = () => {
  if (token) {
    return decodeToken(token).authorities;
  }
  return "";
};

export const handleJwtTokenExpiration = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  if (token) {
    if (decodeToken(token).exp < currentTime) {
      console.log("he he token expired ....., 👍");
      return <Navigate to={"/login"} />;
    }
  }
};
