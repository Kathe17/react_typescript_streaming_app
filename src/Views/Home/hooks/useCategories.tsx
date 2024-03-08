import { useEffect, useState } from "react";
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
      setError(asignarMensajeErrorPeticionesAxios(error));
    }
  };

  return {
    categories,
    getCategories,
    error,
  };
}
