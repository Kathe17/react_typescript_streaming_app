import axios from "axios";
import { baseApiUrl } from "../Share/Constants";

export const getCategoriesApi = async (
  getCategoriesApiParams?: getCategoriesApiParamsModel
) => {
  console.log("getCategoriesApiParams", getCategoriesApiParams);
  console.log("{ params: getCategoriesApiParams }", {
    params: getCategoriesApiParams,
  });
  return await axios.get(
    baseApiUrl + `/api/categories?${Date().toLocaleString()}`,
    { params: getCategoriesApiParams }
  );
};
