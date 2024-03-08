import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import CardSuscription from "./CardSuscription";

const SuscriptionsComponent = () => {
  return (
    <div className="w-full h-5/6 flex justify-evenly items-center pt-4 pb-8 overflow-y-scroll">
      <CardSuscription
        customBg={"bg-rose-600"}
        customText="text-green-600"
        cost={"8.99"}
        tipoSuscripcion={"BASIC"}
      />
      <CardSuscription
        customBg={"bg-blue-600"}
        customText="text-blue-600"
        cost={"14.99"}
        tipoSuscripcion={"STANDARD"}
      />
      <CardSuscription
        customBg={"bg-indigo-900"}
        customText="text-indigo-900"
        cost={"24.99"}
        tipoSuscripcion={"PREMIUM"}
      />
    </div>
  );
};

export default SuscriptionsComponent;
