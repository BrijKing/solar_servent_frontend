import axios from "axios";
import Cookies from "js-cookies";
import { handleJwtTokenExpiration } from "./jwtTokenDecoder";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

const AxiosInstance = () => {
  const isLoggedIn = () => {
    return Cookies.hasItem("UserToken");
  };
  api.interceptors.request.use((config) => {
    handleJwtTokenExpiration();
    if (isLoggedIn) {
      const userToken = Cookies.getItem("UserToken");

      config.headers["Authorization"] = `Bearer ${userToken}`;
    }
    return config;
  });

  return api;
};

export default AxiosInstance();
