import { useEffect, useState } from "react";
import { DetailsModel } from "../../../Models/Details.model";
import { getCategoriesApi } from "../../../Services/Categories.api";
import { asignarMensajeErrorPeticionesAxios } from "../../../utils/utils";
import { getDetailsApi } from "../../../Services/Details.api";

export default function useDetails() {
  const [error, setError] = useState<string>();

  const [details, setDetails] = useState<DetailsModel[]>([]);

  const getDetails = async (categoryId?: number, detailId?: number) => {
    try {
      const responseGetDetails = await getDetailsApi({
        detailId: detailId,
        categoryId: categoryId,
      });
      setDetails(responseGetDetails.data);
    } catch (error) {
      setError(asignarMensajeErrorPeticionesAxios(error));
    }
  };

  return {
    details,
    getDetails,
    error,
  };
}
