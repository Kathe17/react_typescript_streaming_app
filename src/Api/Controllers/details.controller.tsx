import { Request, Response } from "express";
import { baseUrlDetailsVideos, baseUrlImages } from "../../Share/Constants";
import db from "../../db/db.json";
import { DetailsModel, DetailsModelDB } from "../../Models/Details.model";
import { CategoryModel } from "../../Models/Category.model";
import { textoLikeIncludes } from "../../utils/utils";

export const getDetails = async (req: Request, res: Response) => {
  const { categoryId, detailId, searchTerm } = req.query;
  const movieDetails: DetailsModelDB[] = db.details;
  const categoriesDB = db.categorias;

  let resDetails: DetailsModel[] = movieDetails.map((detail) => {
    return {
      ...detail,
      bgImage: `${baseUrlImages}/Details/bg/${detail.bgImage}`,
      logo: `${baseUrlImages}/Details/logos/${detail.logo}`,
      urlMediaFull: `${baseUrlDetailsVideos}/${detail.urlMediaFull}`,
      categories: detail.categories.map((category) => {
        return categoriesDB.find((categoryDB) => {
          return categoryDB.id === category;
        }) as CategoryModel;
      }),
    };
  });

  let categoryIdNumber: number;
  let detailIdNumber: number;

  if (categoryId || detailId) {
    if (categoryId && typeof categoryId === "string") {
      categoryIdNumber = parseInt(categoryId);
    }

    if (detailId && typeof detailId === "string") {
      detailIdNumber = parseInt(detailId);
    }

    resDetails = resDetails.filter((detail) => {
      return (
        (isNaN(categoryIdNumber) ||
          detail.categories.find((category) => {
            return category.id === categoryIdNumber;
          })) !== undefined &&
        (isNaN(detailIdNumber) || detail.id === detailIdNumber)
      );
    });
  }

  if (searchTerm && typeof searchTerm === "string") {
    resDetails = resDetails.filter((detail) => {
      return (
        detail.categories.find((category) => {
          return textoLikeIncludes(category.nombre, searchTerm);
        }) !== undefined || textoLikeIncludes(detail.name, searchTerm)
      );
    });
  }

  return res.json(resDetails);
};
