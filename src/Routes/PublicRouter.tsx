import React, { useEffect, useContext } from "react";
import { PublicListRouters } from "../Share/Constants";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserFromSession } from "../utils/utils";

export const PublicRouter = ({
  component: Component,
  ...props
}: {
  component: React.ComponentType;
}) => {
  const navigate = useNavigate();
  // const { user } = useContext(UserContext);

  // const validated = JSON.parse(sessionStorage.getItem("validated") ?? "false");

  const user = getUserFromSession();

  const location = useLocation();
  const searchPathToFilterIfExist = PublicListRouters.filter(
    (item) => item.path === location.pathname
  );

  useEffect(() => {
    console.log("USER", user);
    if (user && searchPathToFilterIfExist.length > 0) {
      // navigate("/403");
      navigate("/home");
    }
  }, []);

  if (!user) {
    return <Component {...props} />;
  } else {
    navigate("*");
  }
};
