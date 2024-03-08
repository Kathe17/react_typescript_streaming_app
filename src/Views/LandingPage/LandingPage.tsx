import React, { useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { getCategoriesApi } from "../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../utils/utils";
import { CategoryContext } from "../../Providers/CategoriesProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Navbar></Navbar> */}

      <Button
        size="large"
        onClick={() => {
          navigate("/login");
        }}
      >
        Iniciar Sesion
      </Button>
    </div>
  );
};

export default LandingPage;
