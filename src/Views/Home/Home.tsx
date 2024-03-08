import React, { useContext, useEffect } from "react";
import CategoryCard from "./Components/CategoryCard/CategoryCard";
import Navbar from "../../Components/Navbar/Navbar";
import { getCategoriesApi } from "../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../utils/utils";
import { CategoryContext } from "../../Providers/CategoriesProvider";
import useCategories from "../../Hooks/useCategories";
import Footer from "../../Components/Footer/Footer";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 w-full absolute bottom-14 overflow-y-scroll">
        {categories?.map((category) => (
          <CategoryCard
            key={`CategoryCard_${category.id}`}
            category={category}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
