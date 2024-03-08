import { Request, Response } from "express";
import { movieDetails } from "../../db/db";

export const getDetails = async (req: Request, res: Response) => {
  const { categoryId, detailId } = req.query;
  let resDetails = movieDetails;

  if (detailId && typeof detailId === "string") {
    resDetails = [];
    const detailIdNumber = parseInt(detailId);
    if (!isNaN(detailIdNumber)) {
      resDetails = movieDetails.filter((detail) => {
        return detail.id === detailIdNumber;
      });
    }
  }
  if (categoryId && typeof categoryId === "string") {
    resDetails = [];
    const categoryIdNumber = parseInt(categoryId);
    if (!isNaN(categoryIdNumber)) {
      resDetails = movieDetails.filter((detail) => {
        return detail.categories.includes(categoryIdNumber);
      });
    }
  }
  return res.json(resDetails);
};
