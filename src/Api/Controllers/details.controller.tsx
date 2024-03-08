import { Request, Response } from "express";
import { baseUrlDetailsVideos, baseUrlImages } from "../../Share/Constants";
import db from "../../db/db.json";
import { DetailsModel, DetailsModelDB } from "../../Models/Details.model";
import { CategoryModel } from "../../Models/Category.model";

export const getDetails = async (req: Request, res: Response) => {
  const { categoryId, detailId } = req.query;
  let movieDetails: DetailsModelDB[] = db.details;
  const categoriesDB = db.categorias;

  let resDetails: DetailsModel[] = [];

  let categoryIdNumber: number;
  let detailIdNumber: number;

  if (categoryId || detailId) {
    if (categoryId && typeof categoryId === "string") {
      categoryIdNumber = parseInt(categoryId);
    }

    if (detailId && typeof detailId === "string") {
      detailIdNumber = parseInt(detailId);
    }

    movieDetails = movieDetails.filter((detail) => {
      return (
        (isNaN(categoryIdNumber) ||
          detail.categories.includes(categoryIdNumber)) &&
        (isNaN(detailIdNumber) || detail.id === detailIdNumber)
      );
    });
  } else {
    movieDetails = movieDetails;
  }

  resDetails = movieDetails.map((detail) => {
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

  return res.json(resDetails);
};
