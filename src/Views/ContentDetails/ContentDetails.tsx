import React from "react";
import { useParams } from "react-router-dom";
import ContentDetailsComponent from "./Components/ContentDetailsComponent";
import LayoutBase from "../../Layouts/LayoutBase";

const ContentDetails = () => {
  const { detailId } = useParams();

  return (
    <LayoutBase>
      <ContentDetailsComponent detailId={detailId} />
    </LayoutBase>
  );
};

export default ContentDetails;
