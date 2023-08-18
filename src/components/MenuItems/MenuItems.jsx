import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuItems = () => {
  const links = [
    {
      name: "Add Customer",
      path: "addCustomer",
    },
    {
      name: "View Customer",
      path: "viewCustomer",
    },
    {
      name: "Buy Customer",
      path: "buyCustomer",
    },
  ];
  return (
    <div className="absolute top-[200px] w-full items-center flex flex-col">
      {links.map((link) => (
        <MenuItem name={link.name} path={link.path} />
      ))}
    </div>
  );
};

export default MenuItems;
