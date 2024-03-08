import axios from "axios";
import { baseApiUrl } from "../Share/Constants";

export const getCategoriesApi = async () => {
  return await axios.get(
    baseApiUrl + `/api/categories?${Date().toLocaleString()}`
  );
};
