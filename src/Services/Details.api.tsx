import axios from "axios";
import { baseApiUrl } from "../Share/Constants";

export const getDetailsApi = async (
  getDetailsApiParams?: getDetailsApiParamsModel
) => {
  return await axios.get(
    baseApiUrl + `/api/details?${Date().toLocaleString()}`,
    { params: getDetailsApiParams }
  );
};
