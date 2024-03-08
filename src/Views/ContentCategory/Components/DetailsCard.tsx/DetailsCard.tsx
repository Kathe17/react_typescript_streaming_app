import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DetailsModel } from "../../../../Models/Details.model";
import Button from "../../../../Components/Button/Button";

const DetailsCard = ({ details }: { details: DetailsModel }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-slate-200 bg-opacity-50 w-full mx-2 h-56 text-center items-center justify-center">
      {/* <h2>{details.nombre}</h2> */}
      {/* <p>{details.nombre}</p> */}
      {/* <Link to={`/contentDetails/${details.id}`}>{details.nombre}</Link> */}
      <button
        className="flex flex-col h-full justify-between items-center"
        // onClick={() => {
        //   navigate(`/contentDetails/${details.id}`);
        // }}
      >
        <p>{details.bgImage}</p>
        <img src={details.bgImage} alt="" />
        <p className="text-lg font-semibold">{details.name}</p>
      </button>
    </div>
  );
};

export default DetailsCard;
