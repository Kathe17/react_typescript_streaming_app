import React from "react";
import { getUserFromSession } from "../../utils/utils";
import Button from "../Button/Button";
import useLogin from "../../Views/Login/Hooks/useLogin";
import { useNavigate } from "react-router-dom";

const SesionDataNavbar = () => {
  const navigate = useNavigate();
  const user = getUserFromSession();
  return (
    <div className="hidden md:flex items-center space-x-3">
      <img
        src={user?.imgProfile}
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />
      <Button
        onClick={() => {
          sessionStorage.removeItem("user");

          navigate("/login");
        }}
      >
        <p> Cerrar Sesión</p>
      </Button>
    </div>
  );
};

export default SesionDataNavbar;
