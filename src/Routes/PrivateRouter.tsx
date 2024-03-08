import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PrivateListRouters } from "../Share/Constants";
import useIdle from "../Hooks/useIdleTime";
import { getUserFromSession } from "../utils/utils";

export const PrivateRouter = ({
  component: Component,
  ...props
}: {
  component: React.ComponentType;
}) => {
  const navigate = useNavigate();
  const user = getUserFromSession();

  const location = useLocation();
  const searchPathToFilterIfExist = PrivateListRouters.filter(
    (item) => item.path === location.pathname
  );

  const Logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
    alert("Tu sesión fue cerrada por inactividad");
  };

  useIdle({ onIdle: Logout, idleTime: 15 });

  useEffect(() => {
    if (!user && searchPathToFilterIfExist.length > 0) {
      navigate("/login");
    }
  }, []);

  if (user) {
    return <Component {...props} />;
  } else {
    navigate("*");
  }
};
