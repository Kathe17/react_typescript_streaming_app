import axios from "axios";
import { UsuarioModel } from "../Models/Usuario.model";

export const getUserFromSession = () => {
  const userSessionItem = sessionStorage.getItem("user");
  let user: UsuarioModel | undefined;
  if (userSessionItem && userSessionItem !== null) {
    user = JSON.parse(userSessionItem);
  }
  return user;
};

export const asignarMensajeErrorPeticionesAxios = (error: unknown) => {
  let errorMessage;
  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data.message ?? error.message;
  } else {
    errorMessage = error;
  }
  return errorMessage;
};

export const textoLikeIncludes = (
  data: string,
  searchTerm: string
): boolean => {
  // Asumiendo que se quiere una comparación independiente de mayusculas
  const searchTermLower = searchTerm.toLowerCase();
  const dataLower = data.toLowerCase();

  // Validar si los datos data contienen a searchTerm el termino de búsqueda
  return dataLower.includes(searchTermLower);
};
