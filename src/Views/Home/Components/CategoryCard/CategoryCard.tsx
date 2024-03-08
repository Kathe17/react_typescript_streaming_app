import React from "react";
import { Link } from "react-router-dom";
import { CategoryModel } from "../../../../Models/Category.model";

const CategoryCard = ({ category }: { category: CategoryModel }) => {
  return (
    <div className="flex bg-slate-200 w-1/5  h-56 m-2 text-center items-center justify-center">
      {/* <h2>{category.nombre}</h2> */}
      {/* <p>{category.nombre}</p> */}
      <Link to={`/category/${category.id}`}>{category.nombre}</Link>
    </div>
  );
};

export default CategoryCard;
