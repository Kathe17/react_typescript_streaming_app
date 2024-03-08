import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DetailsModel } from "../../../../Models/Details.model";
import Button from "../../../../Components/Button/Button";

const DetailsCard = ({ details }: { details: DetailsModel }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-slate-200 bg-opacity-50 w-full mx-2 h-56 text-center items-center justify-center">
      <button
        className="flex flex-col h-full justify-between items-center"
        onClick={() => {
          navigate(`/contentDetails/${details.id}`);
        }}
      >
        <img src={details.bgImage} alt="" className="object-fill" />
        <p className="text-lg font-semibold">{details.name}</p>
      </button>
    </div>
  );
};

export default DetailsCard;
