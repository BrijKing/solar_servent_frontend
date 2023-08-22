import { createContext, useContext, useState } from "react";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Cookies.hasItem("UserToken")
  );
  const navigate = useNavigate();

  const login = (token) => {
    Cookies.setItem("UserToken", token);
    setIsLoggedIn(true);
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setIsLoggedIn(false);
    window.location = "/";
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
