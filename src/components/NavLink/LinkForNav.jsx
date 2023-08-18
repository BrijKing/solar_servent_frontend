import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LinkForNav = ({ links }) => {
  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <>
      <div className="flex pr-6">
        {Array.from(links)?.map((i) =>
          i.path != "logout" ? (
            <>
              <div className="p-3">
                <Link to={`/${i.path}`}>{i.name}</Link>
              </div>
            </>
          ) : (
            <>
              <div className="p-3">
                <Link onClick={handleLogout} to={`/${i.path}`}>
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
