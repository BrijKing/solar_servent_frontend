// AxiosInstance.js
import axios from "axios";
import Cookies from "js-cookies";
import { handleJwtTokenExpiration } from "./jwtTokenDecoder";
// Import your utility functions

const AxiosInstance = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const isLoggedIn = () => {
    return Cookies.hasItem("UserToken");
  };

  api.interceptors.request.use((config) => {
    return handleJwtTokenExpiration()
      .then(() => {
        if (isLoggedIn()) {
          const userToken = Cookies.getItem("UserToken");
          config.headers["Authorization"] = `Bearer ${userToken}`;
        }
        return config;
      })
      .catch((error) => {
        if (error === "tokenExpired") {
          alert("Your session has expired. Please log in again.");
          // Handle navigation here, e.g., by using React Router or other methods
        }
        return Promise.reject(error);
      });
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      alert("Your session has expired. Please log in again.");
      // Handle navigation here, similar to the request interceptor

      return Promise.reject(error);
    }
  );

  return api;
};

export default AxiosInstance();
