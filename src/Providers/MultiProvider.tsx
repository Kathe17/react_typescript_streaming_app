import React, { ReactElement } from "react";
import { CategoriesProvider } from "./CategoriesProvider";

interface Props {
  children: ReactElement;
}

export function MultiProvider({ children }: Props) {
  return <CategoriesProvider>{children}</CategoriesProvider>;
}
