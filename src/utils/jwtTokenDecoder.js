import jwt from "jwt-decode";
import Cookies from "js-cookies";
import { Navigate, redirect } from "react-router-dom";

// if(!Cookies.hasItem("UserToken")) return <Navigate to="/login" />
const token = Cookies.getItem("UserToken");

export const getNameFromToken = () => {
  // if(!token) return <Navigate to="/login" />

  if (token) {
    let decodedToken = jwt(token);
    if (decodedToken) {
      return decodedToken.sub;
    }
  }

  return "Guest";
};

export const getAuthorityFromToken = () => {
  // if (!token) return <Navigate to="/login" />;
  // alert(!token)
  let decodedToken = jwt(token);
  if (decodedToken) {
    return decodedToken.authorities;
  }
  return "";
};

export const handleJwtTokenExpiration = () => {
  // if(!token)  return <Navigate to="/login" />
  let decodedToken = jwt(token);
  const currentTime = Math.floor(Date.now() / 1000);

  if (decodedToken.exp < currentTime) {
    Cookies.removeItem("UserToken");
    console.log("ho ho ho ho ho ooooo me nikala");
    return <Navigate to={"/login"} />;
  }
};
