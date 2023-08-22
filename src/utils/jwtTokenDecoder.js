import jwt from "jwt-decode";
import Cookies from "js-cookies";
import { Navigate } from "react-router-dom";

function decodeToken(token) {
  try {
    return jwt(token);
  } catch (e) {
    <Navigate to={"/login"} />;
  }
}

export const getNameFromToken = () => {
  const token = Cookies.getItem("UserToken");
  if (token) {
    return decodeToken(token).sub;
  }
  return "Guest";
};

export const getAuthorityFromToken = () => {
  const token = Cookies.getItem("UserToken");
  if (token) {
    return decodeToken(token).authorities;
  }
  return "";
};

export const handleJwtTokenExpiration = () => {
  const currentTime = Math.floor(Date.now() / 1000);
  const token = Cookies.getItem("UserToken");

  if (token) {
    if (decodeToken(token).exp < currentTime) {
      return <Navigate to={"/login"} />;
    }
  }
};
