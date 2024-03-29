import axios from "axios";
import { baseApiUrl } from "../Share/Constants";

export const getCategoriesApi = async (
  getCategoriesApiParams?: getCategoriesApiParamsModel
) => {
  return await axios.get(
    baseApiUrl + `/api/categories?${Date().toLocaleString()}`,
    { params: getCategoriesApiParams }
  );
};
