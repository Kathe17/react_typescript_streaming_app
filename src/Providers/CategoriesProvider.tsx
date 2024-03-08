import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CategoryModel } from "../Models/Category.model";

interface CategoryContextData {
  categories: CategoryModel[];
  setCategories: Dispatch<SetStateAction<CategoryModel[]>>;
}

export const CategoryContext = createContext<CategoryContextData>({
  categories: [],
  setCategories: () => {},
});

export const CategoriesProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  return (
    // <CategoryContext.Provider value={{ Category, setCategory, logout }}>
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
