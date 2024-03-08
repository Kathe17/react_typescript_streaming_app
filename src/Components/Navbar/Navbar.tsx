import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { truncate } from "fs";
import { getUserFromSession } from "../../utils/utils";

const Navbar: React.FC = () => {
  // const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();
  const user = getUserFromSession();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="w-10" src="./Assets/Logo.png" alt="" />
        <span className="font-semibold text-xl tracking-tight">
          Streaming App
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Inicio
          </Link>
          <Link
            to="/search"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Buscar
          </Link>
          <Link
            to="/favorites"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Favoritos
          </Link>
        </div>
        <div>
          {/* {user ? ( */}
          {true ? (
            <>
              <span className="inline-block mt-4 lg:mt-0 text-sm text-white mr-4">
                {user?.nombre}
              </span>
              <button
                onClick={() => {
                  // logout();

                  sessionStorage.removeItem("user");

                  navigate("/");
                }}
                className="block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-gray-200 focus:outline-none focus:shadow-outline-gray"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-sm text-white hover:text-gray-200 focus:outline-none focus:shadow-outline-gray"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
