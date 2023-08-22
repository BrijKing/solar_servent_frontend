import { createContext, useContext, useState } from "react";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
import { getNameFromToken } from "../utils/jwtTokenDecoder";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Cookies.hasItem("UserToken")
  );

  const [userName, setUserName] = useState(getNameFromToken());
  const navigate = useNavigate();

  const login = async (token) => {
    Cookies.setItem("UserToken", token);
    setIsLoggedIn(true);
    setUserName(getNameFromToken());
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setIsLoggedIn(false);
    window.location = "/";
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, setUserName, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
