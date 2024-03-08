import { useLocation, useNavigate } from "react-router-dom";
import { DetailsModel } from "../../../Models/Details.model";

export default function useNavigateToDetails(detail: DetailsModel) {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToDetail = () => {
    const navigateToPath = `/contentDetails/${detail.id}`;
    if (location.pathname !== navigateToPath) {
      navigate(navigateToPath);
      if (location.pathname.includes(`/contentDetails`)) {
        //en caso de navegar el mismo contentDetails pero posible diferente valor, refrescar para cargar los recursos adecuadamente
        navigate(0);
      }
    } else {
    }
  };

  return {
    navigateToDetail,
  };
}
