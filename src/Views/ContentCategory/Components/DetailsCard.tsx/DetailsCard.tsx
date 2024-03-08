import React from "react";
import { useNavigate } from "react-router-dom";
import { DetailsModel } from "../../../../Models/Details.model";

const DetailsCard = ({ details }: { details: DetailsModel }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-slate-200 bg-opacity-50 w-full h-56 items-center justify-center">
      <button
        className="flex flex-col w-full h-full justify-between items-center"
        onClick={() => {
          navigate(`/contentDetails/${details.id}`);
        }}
      >
        <img
          src={details.bgImage}
          alt=""
          className="bg-contain w-full h-full sm:w-[70%]"
        />
        <p className="w-full text-lg font-semibold">{details.name}</p>
      </button>
    </div>
  );
};

export default DetailsCard;
