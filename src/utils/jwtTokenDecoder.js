import jwt from "jwt-decode";
import Cookies from "js-cookies";

export const getNameFromToken = () => {
  if (Cookies.hasItem("UserToken")) {
    const token = Cookies.getItem("UserToken");
    const decodedToken = jwt(token);
    return decodedToken.sub;
  }
  return "Guest";
};

export const getAuthorityFromToken = () => {
  if (Cookies.hasItem("UserToken")) {
    const token = Cookies.getItem("UserToken");
    const decodedToken = jwt(token);
    return decodedToken.authorities;
  }
  return "";
};
