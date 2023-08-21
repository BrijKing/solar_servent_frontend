import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Cookies from "js-cookies";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

const AxiosInstance = () => {
  const isLoggedIn = () => {
    return Cookies.hasItem("UserToken");
  };
  api.interceptors.request.use((config) => {
    if (isLoggedIn) {
      const userToken = Cookies.getItem("UserToken");

      config.headers["Authorization"] = `Bearer ${userToken}`;
    }
    return config;
  });

  return api;
};

export default AxiosInstance();
