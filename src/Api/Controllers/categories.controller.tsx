import { Request, Response } from "express";
import db from "../../db/db.json";
import { baseUrlImages } from "../../Share/Constants";

export const getCategories = async (req: Request, res: Response) => {
  const { categoryId } = req.query;
  const categorias = db.categorias;
  let resCategorias = categorias;

  if (categoryId && typeof categoryId === "string") {
    resCategorias = [];
    const categoryIdNumber = parseInt(categoryId);
    if (!isNaN(categoryIdNumber)) {
      resCategorias = categorias.filter((categoria) => {
        return categoria.id === categoryIdNumber;
      });
    }
  }

  resCategorias = resCategorias.map((categoria) => {
    return {
      ...categoria,
      bgImage: `${baseUrlImages}/Categories/bg/${categoria.bgImage}`,
      logo: `${baseUrlImages}/Categories/logos/${categoria.logo}`,
    };
  });

  return res.json(resCategorias);
};
