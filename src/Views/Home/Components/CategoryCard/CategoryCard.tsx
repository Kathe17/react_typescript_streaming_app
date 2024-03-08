import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryModel } from "../../../../Models/Category.model";

const CategoryCard = ({ category }: { category: CategoryModel }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-slate-200 bg-opacity-50 w-full h-auto text-center items-center justify-center">
      <button
        className="flex flex-col h-full justify-between items-center"
        onClick={() => {
          navigate(`/contentCategory/${category.id}`);
        }}
      >
        <img src={category.bgImage} alt="" />
        <p className="text-lg font-semibold">{category.nombre}</p>
      </button>
    </div>
  );
};

export default CategoryCard;
