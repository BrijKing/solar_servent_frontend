import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuItems = () => {
  const links = [
    {
      name: "Add Customer",
      path: "addCustomer",
    },
    {
      name: "View Customers",
      path: "viewCustomer",
    },
    {
      name: "Review Customer",
      path: "reviewCustomer",
    },
    {
      name: "View Employees",
      path: "viewEmployees",
    },
  ];
  return (
    <div className="absolute top-[200px] w-full items-center flex flex-col">
      {links.map((link, index) => (
        <MenuItem key={index} name={link.name} path={link.path} />
      ))}
    </div>
  );
};

export default MenuItems;
