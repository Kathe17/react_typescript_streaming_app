import { useState } from "react";
import { DetailsModel } from "../Models/Details.model";
import { asignarMensajeErrorPeticionesAxios } from "../utils/utils";
import { getDetailsApi } from "../Services/Details.api";

export default function useDetails() {
  const [error, setError] = useState<string>();

  const [details, setDetails] = useState<DetailsModel[]>([]);

  const clearDetails = () => {
    setDetails([]);
  };

  const getDetails = async ({
    categoryId,
    detailId,
    searchTerm,
  }: getDetailsApiParamsModel) => {
    try {
      const responseGetDetails = await getDetailsApi({
        detailId,
        categoryId,
        searchTerm,
      });
      setDetails(responseGetDetails.data);
    } catch (error) {
      const tempError = asignarMensajeErrorPeticionesAxios(error);
      setError(tempError);
      alert(tempError);
    }
  };

  return {
    details,
    getDetails,
    clearDetails,
    error,
  };
}
