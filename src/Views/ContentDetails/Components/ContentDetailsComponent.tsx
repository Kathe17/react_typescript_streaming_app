import React, { useEffect } from "react";
import useDetails from "../../../Hooks/useDetails";
import { DetailsModel } from "../../../Models/Details.model";
import { baseUrlImages } from "../../../Share/Constants";

const ContentDetailsComponent = ({
  detailId,
}: {
  detailId: string | undefined;
}) => {
  const { details, getDetails, error: errorDetails } = useDetails();

  const getFirstDetail = (details: DetailsModel[]) => {
    return details?.[0];
  };

  useEffect(() => {
    if (detailId) {
      const detailIdNumber = parseInt(detailId);
      if (!isNaN(detailIdNumber)) {
        getDetails({ detailId: detailIdNumber });
      }
    }
  }, [detailId]);

  return details.length > 0 ? (
    <div
      className="flex flex-col w-full h-screen justify-center items-start"
      style={{
        background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${
          getFirstDetail(details)?.bgImage
        }') no-repeat `,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col w-2/5 h-full bg-yellow-300">
        <img
          className="h-2/5"
          src={`${baseUrlImages}${getFirstDetail(details)?.logo}`}
          alt=""
        />
        {getFirstDetail(details)?.bgImage}
      </div>
      {/* <div className="grid grid-cols-4 gap-4 h-5/6">
            {details?.map((detail) => (
              <DetailsCard key={category.id} details={detail} />
            ))}
          </div> */}
      {/* {getFirstDetail(details)?. */}
    </div>
  ) : (
    // <div>{selectedCategory.nombre}</div>
    <p>Categoria no encontrada</p>
  );
};

export default ContentDetailsComponent;
