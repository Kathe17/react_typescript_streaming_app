import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "../../Providers/CategoriesProvider";
import { CategoryModel } from "../../Models/Category.model";
import { getCategoriesApi } from "../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../utils/utils";
import useCategory from "./Hooks/useCategory";
import Navbar from "../../Components/Navbar/Navbar";

const ContentCategory = () => {
  // const { categories } = useContext(CategoryContext);
  const { categoryId } = useParams();

  const { category, getCategory, error } = useCategory();

  useEffect(() => {
    if (categoryId) {
      const categoryIdNumber = parseInt(categoryId);
      if (!isNaN(categoryIdNumber)) {
        console.log("categoryIdNumber", categoryIdNumber);
        getCategory(categoryIdNumber);
      }
    }
  }, [categoryId]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  // return <div>ContentCategory</div>;
  return (
    <div>
      <Navbar></Navbar>
      {category ? (
        <div
          className="flex flex-col w-full h-screen justify-center items-center"
          style={{
            background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${category.bgImage}') no-repeat `,
            backgroundSize: "100% 100%",
          }}
        >
          <p>{category.nombre}</p>
        </div>
      ) : (
        // <div>{selectedCategory.nombre}</div>
        <p>Categoria no encontrada</p>
      )}
    </div>
  );
};

export default ContentCategory;
