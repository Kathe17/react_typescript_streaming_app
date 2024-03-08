import { Request, Response } from "express";
import { movieDetails } from "../../db/db";

export const getDetails = async (req: Request, res: Response) => {
  const { detailsId } = req.query;
  let resDetails = movieDetails;

  if (detailsId && typeof detailsId === "string") {
    resDetails = [];
    const detailsIdNumber = parseInt(detailsId);
    if (!isNaN(detailsIdNumber)) {
      resDetails = movieDetails.filter((detail) => {
        return detail.id === detailsIdNumber;
      });
    }
  }
  return res.json(resDetails);
};
