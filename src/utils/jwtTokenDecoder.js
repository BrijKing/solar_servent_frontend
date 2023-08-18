import jwt from "jwt-decode";
import Cookies from "js-cookies";

export const getNameFromToken = () => {
  const token = Cookies.getItem("UserToken");
  const decodedToken = jwt(token);

  return decodedToken.sub;
};

export const getAuthorityFromToken = () => {
  const token = Cookies.getItem("UserToken");
  const decodedToken = jwt(token);

  return decodedToken.authorities;
};
