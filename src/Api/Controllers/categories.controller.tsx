import { Request, Response } from "express";
import { categorias } from "../../db/db";

export const getCategories = async (req: Request, res: Response) => {
  return res.json(categorias);
};
