import React, { useEffect } from "react";
import useDetails from "../../../Hooks/useDetails";
import { VscDebugBreakpointData } from "react-icons/vsc";
import Button from "../../../Components/Button/Button";
import ModalReproductor from "./ModalReproductor";
import useHandleOpenClose from "../../../Hooks/useHandleOpenClose";
const ContentDetailsComponent = ({
  detailId,
}: {
  detailId: string | undefined;
}) => {
  const { detail, getDetails, error: errorDetails } = useDetails();

  const { isOpen, handleOpen, handleClose } = useHandleOpenClose();

  useEffect(() => {
    if (detailId) {
      const detailIdNumber = parseInt(detailId);
      if (!isNaN(detailIdNumber)) {
        getDetails({ detailId: detailIdNumber });
      }
    }
  }, [detailId]);

  return detail ? (
    <div
      className="flex flex-col w-full h-screen justify-start items-start"
      style={{
        background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('${detail.bgImage}') no-repeat `,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col justify-evenly items-start w-2/5 h-5/6">
        <div className="w-full p-2">
          <img className="w-1/5" src={detail.logo} alt="" />
          <div className="flex w-1/6 bg-slate-300 rounded-lg justify-center">
            <p>{detail.rating}</p>
          </div>
          <div className="flex items-center">
            <p>{detail.releaseDate}</p>
            <VscDebugBreakpointData />
            <p>{detail.duration}</p>
            <VscDebugBreakpointData />
            {detail.categories.map((category) => (
              <div>{category.nombre}.</div>
            ))}
          </div>
        </div>
        <div className="w-full py-4 px-2">
          <p>{detail.detailedSypnosis}</p>
          <br />
          <Button onClick={handleOpen}>
            <p> Ver </p>
          </Button>
        </div>
      </div>
      {isOpen ? (
        <ModalReproductor
          detail={detail}
          onClose={handleClose}
        ></ModalReproductor>
      ) : null}
      {/* <div className="grid grid-cols-4 gap-4 h-5/6">
            {details?.map((detail) => (
              <DetailsCard key={category.id} details={detail} />
            ))}
          </div> */}
      {/* {detail. */}
    </div>
  ) : (
    // <div>{selectedCategory.nombre}</div>
    <p>Categoria no encontrada</p>
  );
};

export default ContentDetailsComponent;
