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
        background: `url('${detail.bgImage}') no-repeat `,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col justify-evenly items-start w-2/5 h-5/6">
        <div className="w-full p-2">
          <img className="w-1/5" src={detail.logo} alt="" />
          <div className="flex w-1/6 bg-slate-500 rounded-lg justify-center">
            <p className="text-white">{detail.rating}</p>
          </div>
          <div className="flex items-center">
            <p className="text-white">{detail.releaseDate}</p>
            <VscDebugBreakpointData color="white" />
            <p className="text-white">{detail.duration}</p>
            <VscDebugBreakpointData color="white" />
            {detail.categories.map((category) => (
              <p className="text-white">{category.nombre}.</p>
            ))}
          </div>
        </div>
        <div className="w-full py-4 px-2">
          <p className="text-white">{detail.detailedSypnosis}</p>
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
    </div>
  ) : (
    <p>Categoria no encontrada</p>
  );
};

export default ContentDetailsComponent;
