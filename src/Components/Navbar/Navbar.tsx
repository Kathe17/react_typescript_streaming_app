import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarItem from "../NavbarItem/NavbarItem";
import { IoHomeOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { GrContact } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";
import SesionDataNavbar from "../SesionDataNavbar/SesionDataNavbar";
import SearchBar from "../SearchBar/Searchbar";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconSize = 20;

  return (
    <nav className="bg-gradient-to-r from-rose-600 to-indigo-800 sticky top-0">
      <div className="w-full px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 w-full sm:w-2/3">
            <div className="w-1/2 sm:w-1/5">
              <a href="#" className="flex items-center py-5 px-2">
                <img src="/Assets/Logo.png" alt="App Icon" className="w-12" />
                <span className="font-bold">Streaming App</span>
              </a>
            </div>
            <div className="hidden w-5/6 md:flex items-center space-x-1">
              <NavbarItem
                to="/home"
                nameItem="Inicio"
                icon={<IoHomeOutline size={iconSize} />}
              />

              <NavbarItem
                to="/about"
                nameItem="Nosotros"
                icon={<FaPeopleGroup size={iconSize} />}
              />
              <NavbarItem
                to="/suscriptions"
                nameItem="Suscripciones"
                icon={<GrMoney size={iconSize} />}
              />
              <NavbarItem
                to="/contact"
                nameItem="Contactanos"
                icon={<MdFavoriteBorder size={iconSize} />}
              />
            </div>
          </div>
          <SesionDataNavbar />
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoIosClose size={iconSize} />
              ) : (
                <GiHamburgerMenu size={iconSize} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block self-center bg-slate-400 bg-opacity-40" : "hidden"
        } md:hidden `}
      >
        <NavbarItem
          to="/home"
          nameItem="Inicio"
          icon={<IoHomeOutline size={iconSize} />}
        />
        <div className="w-11/12 px-2">
          <SearchBar
            onSearch={(searchTerm) => {
              console.log(searchTerm);
            }}
          />
        </div>
        <NavbarItem
          to="/about"
          nameItem="Nosotros"
          icon={<FaPeopleGroup size={iconSize} />}
        />
        <NavbarItem
          to="/suscriptions"
          nameItem="Suscripciones"
          icon={<GrMoney size={iconSize} />}
        />
        <NavbarItem
          to="/contact"
          nameItem="Contactanos"
          icon={<GrContact size={iconSize} />}
        />
        <NavbarItem
          to="/"
          nameItem="Cerrar Sesión"
          icon={<CiLogout size={iconSize} />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
