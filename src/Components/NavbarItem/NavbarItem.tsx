import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({
  nameItem,
  to,
  icon,
}: {
  nameItem: string;
  to: string;
  icon?: React.ReactElement;
}) => {
  return (
    <Link
      to={to}
      className="block lg:inline-block lg:mt-0 text-black hover:text-gray-600 p-4"
    >
      <div className="flex items-center text-black hover:text-gray-300">
        {icon}
        {nameItem}
      </div>
    </Link>
  );
};

export default NavbarItem;
