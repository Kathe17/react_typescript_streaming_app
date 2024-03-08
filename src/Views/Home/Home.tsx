import React, { useContext, useEffect } from "react";
import CategoryCard from "./Components/CategoryCard/CategoryCard";
import Navbar from "../../Components/Navbar/Navbar";
import { getCategoriesApi } from "../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../utils/utils";
import { CategoryContext } from "../../Providers/CategoriesProvider";
import useCategories from "./hooks/useCategories";

const Home = () => {
  const { categories, getCategories, error } = useCategories();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div>
      {/* <nav>
        <Link to="/">Inicio</Link>
        <Link to="/login">Iniciar sesión</Link>
      </nav> */}
      <Navbar></Navbar>
      <div className="flex flex-row">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
