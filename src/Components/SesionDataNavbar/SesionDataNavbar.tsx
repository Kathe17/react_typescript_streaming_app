import React from "react";
import { getUserFromSession } from "../../utils/utils";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const SesionDataNavbar = () => {
  const navigate = useNavigate();
  const user = getUserFromSession();

  // const
  return (
    <div className="hidden md:flex items-center justify-end space-x-3 w-full h-full">
      <SearchBar />
      <img
        src={user?.imgProfile}
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />
      <Button
        onClick={() => {
          sessionStorage.removeItem("user");

          navigate("/");
        }}
      >
        <p> Cerrar Sesión</p>
      </Button>
    </div>
  );
};

export default SesionDataNavbar;
