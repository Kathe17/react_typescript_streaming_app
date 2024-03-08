import React, { useEffect } from "react";
import useDetails from "../../../Hooks/useDetails";
import { DetailsModel } from "../../../Models/Details.model";
import { VscDebugBreakpointData } from "react-icons/vsc";

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
      <div className="flex flex-col items-center w-2/5 h-full bg-yellow-300">
        <div className="flex flex-col justify-between h-2/3 bg-blue-300 p-2">
          <img className="w-1/5" src={getFirstDetail(details)?.logo} alt="" />
          <div className="flex w-1/6 bg-slate-300 rounded-lg justify-center">
            <p>{getFirstDetail(details)?.rating}</p>
          </div>
          <div className="flex items-center">
            <p>{getFirstDetail(details)?.releaseDate}</p>
            <VscDebugBreakpointData />
            <p>{getFirstDetail(details)?.duration}</p>
            <VscDebugBreakpointData />
            {getFirstDetail(details)?.categories.map((category) => (
              <div>{category.nombre}.</div>
            ))}
          </div>
        </div>
        <p>{getFirstDetail(details)?.synopsis}</p>
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
