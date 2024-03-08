import { useState } from "react";
import { DetailsModel } from "../Models/Details.model";
import { asignarMensajeErrorPeticionesAxios } from "../utils/utils";
import { getDetailsApi } from "../Services/Details.api";

export default function useDetails() {
  const [error, setError] = useState<string>();

  const [details, setDetails] = useState<DetailsModel[]>([]);
  const [detail, setDetail] = useState<DetailsModel>();

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
      //Si filtra por detailId, traiga un solo detail o undefined en caso de que no la encuentre
      if (detailId) {
        setDetail(responseGetDetails.data?.[0]);
      } else {
        //Caso contrario, guarde la lista de details
        setDetails(responseGetDetails.data);
      }
    } catch (error) {
      const tempError = asignarMensajeErrorPeticionesAxios(error);
      setError(tempError);
      alert(tempError);
    }
  };

  return {
    details,
    detail,
    getDetails,
    clearDetails,
    error,
  };
}
