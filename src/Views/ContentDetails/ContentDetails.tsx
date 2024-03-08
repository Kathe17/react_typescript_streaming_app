import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useDetails from "../ContentCategory/Hooks/useDetails";
import useCategories from "../../Hooks/useCategories";
import Navbar from "../../Components/Navbar/Navbar";
import { DetailsModel } from "../../Models/Details.model";

const ContentDetails = () => {
  // const { categories } = useContext(CategoryContext);
  const { detailId } = useParams();

  const { categories, getCategories, error: errorCategories } = useCategories();
  const { details, getDetails, error: errorDetails } = useDetails();

  const getFirstDetail = (detail: DetailsModel[]) => {
    return details?.[0];
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (detailId) {
      const detailIdNumber = parseInt(detailId);
      if (!isNaN(detailIdNumber)) {
        getDetails(undefined, detailIdNumber);
      }
    }
  }, [detailId]);

  useEffect(() => {
    if (errorCategories) {
      alert(errorCategories);
    }
  }, [errorCategories]);

  useEffect(() => {
    if (errorDetails) {
      alert(errorDetails);
    }
  }, [errorDetails]);

  // return <div>ContentCategory</div>;
  return (
    <div>
      <Navbar></Navbar>
      {details.length > 0 ? (
        <div
          className="flex flex-col w-full h-screen justify-center items-center"
          style={{
            background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${
              getFirstDetail(details)?.bgImage
            }') no-repeat `,
            backgroundSize: "100% 100%",
          }}
        >
          {/* <div className="grid grid-cols-4 gap-4 h-5/6">
            {details?.map((detail) => (
              <DetailsCard key={category.id} details={detail} />
            ))}
          </div> */}
          {getFirstDetail(details)?.categories.map((category) => {
            return (
              <p
                key={`ContentDetailsCategory_${getFirstDetail(details)?.id}_${
                  category.id
                }`}
              >
                {category.nombre}
              </p>
            );
          })}
        </div>
      ) : (
        // <div>{selectedCategory.nombre}</div>
        <p>Categoria no encontrada</p>
      )}
    </div>
  );
};

export default ContentDetails;
