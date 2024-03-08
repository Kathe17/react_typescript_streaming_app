import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryModel } from "../../../../Models/Category.model";
import Button from "../../../../Components/Button/Button";

const CategoryCard = ({ category }: { category: CategoryModel }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-slate-200 bg-opacity-50 w-full h-auto text-center items-center justify-center">
      {/* <h2>{category.nombre}</h2> */}
      {/* <p>{category.nombre}</p> */}
      {/* <Link to={`/contentCategory/${category.id}`}>{category.nombre}</Link> */}
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
