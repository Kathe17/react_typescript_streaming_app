import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "./Components/CategoryCard/CategoryCard";
import Navbar from "../../Components/Navbar/Navbar";
import { getCategoriesApi } from "../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../utils/utils";
import { CategoryModel } from "../../Models/Category.model";
import { categorias } from "../../db/db";
import { CategoryContext } from "../../Providers/CategoriesProvider";

const Home = () => {
  const { categories, setCategories } = useContext(CategoryContext);

  const getCategories = async () => {
    try {
      const responseGetCategories = await getCategoriesApi();
      setCategories(responseGetCategories.data);
    } catch (error) {
      alert(asignarMensajeErrorPeticionesAxios(error));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

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
