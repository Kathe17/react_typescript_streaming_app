import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "../../Providers/CategoriesProvider";
import { CategoryModel } from "../../Models/Category.model";
import { getCategoriesApi } from "../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../utils/utils";
import useCategory from "./Hooks/useCategory";
import Navbar from "../../Components/Navbar/Navbar";
import useDetails from "./Hooks/useDetails";
import DetailsCard from "./Components/DetailsCard.tsx/DetailsCard";

const ContentCategory = () => {
  // const { categories } = useContext(CategoryContext);
  const { categoryId } = useParams();

  const { category, getCategory, error: errorCategory } = useCategory();
  const { details, getDetails, error: errorDetails } = useDetails();

  useEffect(() => {
    if (categoryId) {
      const categoryIdNumber = parseInt(categoryId);
      if (!isNaN(categoryIdNumber)) {
        getCategory(categoryIdNumber);
        getDetails(categoryIdNumber);
      }
    }
  }, [categoryId]);

  useEffect(() => {
    if (errorCategory) {
      alert(errorCategory);
    }
  }, [errorCategory]);

  useEffect(() => {
    if (errorDetails) {
      alert(errorDetails);
    }
  }, [errorDetails]);

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
          <div className="flex flex-row justify-evenly w-full absolute bottom-2">
            {details?.map((detail) => (
              <DetailsCard key={category.id} details={detail} />
            ))}
          </div>
        </div>
      ) : (
        // <div>{selectedCategory.nombre}</div>
        <p>Categoria no encontrada</p>
      )}
    </div>
  );
};

export default ContentCategory;
