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
    <div
      className="w-full h-screen "
      style={{
        background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('/Assets/fondo.jpg') no-repeat `,
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar></Navbar>
      <div className="flex flex-row items-end w-full absolute bottom-0">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
