import { Request, Response } from "express";
import { categorias } from "../../db/db";

export const getCategories = async (req: Request, res: Response) => {
  const { categoryId } = req.query;
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
  return res.json(resCategorias);
};
