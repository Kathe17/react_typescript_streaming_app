import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ContentDetailsComponent from "./Components/ContentDetailsComponent";
import LayoutBase from "../../Layouts/LayoutBase";

const ContentDetails = () => {
  // const { categories } = useContext(CategoryContext);
  const { detailId } = useParams();

  return (
    <LayoutBase>
      <ContentDetailsComponent detailId={detailId} />
    </LayoutBase>
  );
};

export default ContentDetails;
