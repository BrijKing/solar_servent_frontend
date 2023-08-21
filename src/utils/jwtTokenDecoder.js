import jwt from "jwt-decode";
import Cookies from "js-cookies";
import { Navigate } from "react-router-dom";

const decodedToken = jwt(Cookies.getItem("UserToken"));

export const getNameFromToken = () => {
  if (decodedToken) {
    return decodedToken.sub;
  }
  return "Guest";
};

export const getAuthorityFromToken = () => {
  if (decodedToken) {
    return decodedToken.authorities;
  }
  return "";
};

export const handleJwtTokenExpiration = () => {
  const currentTime = Math.floor(Date.now() / 1000);

  if (decodedToken.exp < currentTime) {
    Cookies.removeItem("UserToken");
    return <Navigate to={"/login"} />;
  }
};
