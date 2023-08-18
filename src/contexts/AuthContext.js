import { createContext, useContext, useState } from "react";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const hasToken = Cookies.hasItem("UserToken");
  const [isLoggedIn, setIsLoggedIn] = useState(hasToken);
  const navigate = useNavigate();

  const login = () => {
    hasToken ? setIsLoggedIn(true) : setIsLoggedIn(false);
    navigate("/dashboard");
  };

  const logout = () => {
    Cookies.removeItem("UserToken");
    setIsLoggedIn(false);
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
