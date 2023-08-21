import jwt from "jwt-decode";
import Cookies from "js-cookies";
import { Navigate, redirect } from "react-router-dom";

// if(!Cookies.hasItem("UserToken")) return <Navigate to="/login" />
const token = Cookies.getItem("UserToken");

function decodeToken(token) {
  try {
    return jwt(token);
  } catch (e) {
    alert("Invalid token .🤣");
  }
}

export const getNameFromToken = () => {
  // if(!token) return <Navigate to="/login" />

  if (token) {
    return decodeToken(token).sub;
  }

  return "Guest";
};

export const getAuthorityFromToken = () => {
  // if (!token) return <Navigate to="/login" />;
  // alert(!token)

  if (token) {
    return decodeToken(token).authorities;
  }
  return "";
};

export const handleJwtTokenExpiration = () => {
  // if(!token)  return <Navigate to="/login" />

  const currentTime = Math.floor(Date.now() / 1000);

  if (token) {
    if (decodeToken(token).exp < currentTime) {
      Cookies.removeItem("UserToken");
      console.log("ho ho ho ho ho ooooo me nikala");
      return <Navigate to={"/login"} />;
    }
  }
};
