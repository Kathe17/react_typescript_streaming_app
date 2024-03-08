import { useState } from "react";
import { CategoryModel } from "../../../Models/Category.model";
import { getCategoriesApi } from "../../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../../utils/utils";

export default function useCategory() {
  const [error, setError] = useState<string>();

  const [category, setCategory] = useState<CategoryModel>();

  const getCategory = async ({ categoryId }: getCategoriesApiParamsModel) => {
    try {
      const responseGetCategories = await getCategoriesApi({
        categoryId,
      });
      setCategory(responseGetCategories.data?.[0]);
    } catch (error) {
      const tempError = asignarMensajeErrorPeticionesAxios(error);
      setError(tempError);
      alert(tempError);
    }
  };

  return {
    category,
    getCategory,
    error,
  };
}
