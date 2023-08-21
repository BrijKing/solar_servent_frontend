import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Cookies from "js-cookies";

const LinkForNav = ({ links }) => {
  const { logout } = useAuth();

  const handleLogout = (e) => {
    Cookies.removeItem("UserToken");
    logout();
  };

  return (
    <>
      <div className="flex pr-6">
        {Array.from(links)?.map((i) =>
          i.name !== "logout" ? (
            <>
              <div className={`p-3 ${i.class}`}>
                <Link to={`/${i.path}`}>{i.name}</Link>
              </div>
            </>
          ) : (
            <>
              <div className={`p-3 ${i.class}`}>
                <Link onClick={handleLogout} to="/">
                  {i.name}
                </Link>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};

export default LinkForNav;
