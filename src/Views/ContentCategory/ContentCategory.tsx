import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutBase from "../../Layouts/LayoutBase";
import ContentCategoryComponent from "./Components/ContentCategoryComponent";

const ContentCategory = () => {
  // const { categories } = useContext(CategoryContext);
  const { categoryId } = useParams();

  return (
    <LayoutBase>
      <ContentCategoryComponent categoryId={categoryId} />
    </LayoutBase>
  );
};

export default ContentCategory;
