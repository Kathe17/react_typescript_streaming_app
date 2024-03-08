import axios from "axios";
import { baseApiUrl } from "../Share/Constants";
import { LoginModel } from "../Models/Login.model";

export const postLoginApi = async (data: LoginModel) => {
  return await axios.post(
    baseApiUrl + `/api/login?${Date().toLocaleString()}`,
    data
  );
};
