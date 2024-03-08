import { useState } from "react";
import { CategoryModel } from "../../../Models/Category.model";
import { getCategoriesApi } from "../../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../../utils/utils";

export default function useCategories() {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  const [error, setError] = useState<string>();

  const getCategories = async () => {
    try {
      const responseGetCategories = await getCategoriesApi();
      setCategories(responseGetCategories.data);
    } catch (error) {
      const tempError = asignarMensajeErrorPeticionesAxios(error);
      setError(tempError);
      alert(tempError);
    }
  };

  return {
    categories,
    getCategories,
    error,
  };
}
