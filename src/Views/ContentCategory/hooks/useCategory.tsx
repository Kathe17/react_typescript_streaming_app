import { useEffect, useState } from "react";
import { CategoryModel } from "../../../Models/Category.model";
import { getCategoriesApi } from "../../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../../utils/utils";

export default function useCategory() {
  const [error, setError] = useState<string>();

  const [category, setCategory] = useState<CategoryModel>();

  const getCategory = async (categoryId: number) => {
    try {
      const responseGetCategories = await getCategoriesApi({
        categoryId: categoryId,
      });
      setCategory(responseGetCategories.data?.[0]);
    } catch (error) {
      setError(asignarMensajeErrorPeticionesAxios(error));
    }
  };

  return {
    category,
    getCategory,
    error,
  };
}
