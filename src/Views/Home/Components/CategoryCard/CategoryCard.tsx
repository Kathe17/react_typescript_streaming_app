import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryModel } from "../../../../Models/Category.model";
import Button from "../../../../Components/Button/Button";

const CategoryCard = ({ category }: { category: CategoryModel }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-slate-200 w-1/5  h-56 m-2 text-center items-center justify-center">
      {/* <h2>{category.nombre}</h2> */}
      {/* <p>{category.nombre}</p> */}
      {/* <Link to={`/contentCategory/${category.id}`}>{category.nombre}</Link> */}
      <button
        onClick={() => {
          navigate(`/contentCategory/${category.id}`);
        }}
      >
        {category.nombre}
      </button>
    </div>
  );
};

export default CategoryCard;
