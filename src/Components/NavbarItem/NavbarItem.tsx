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
    <Link to={to} className="block lg:inline-block lg:mt-0  p-4">
      <div className="flex items-center text-white hover:text-black">
        {icon}
        {nameItem}
      </div>
    </Link>
  );
};

export default NavbarItem;
