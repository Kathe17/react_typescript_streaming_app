import React from "react";
import ReactPlayer from "react-player";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { DetailsModel } from "../../../Models/Details.model";

interface ModalProps {
  detail: DetailsModel;
  onClose: () => void;
}

const ModalReproductor: React.FC<ModalProps> = ({ detail, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-slate-700 bg-opacity-80 z-50">
      <div className="flex items-end bg-white rounded-lg shadow-lg overflow-hidden w-11/12 h-4/5">
        <p className="absolute top-4 left-[5%] text-white font-bold text-lg">
          {detail.name}
        </p>
        <ReactPlayer
          url={detail.urlMediaFull}
          controls={true}
          width="100%"
          height="100%"
        ></ReactPlayer>
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-900 focus:outline-none"
          onClick={onClose}
        >
          <IoIosCloseCircleOutline size={50} />
        </button>
      </div>
    </div>
  );
};

export default ModalReproductor;
