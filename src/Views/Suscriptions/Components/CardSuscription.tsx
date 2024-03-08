import React from "react";
import { IoIosCheckmark } from "react-icons/io";

interface Props {
  customBg: string;
  customText: string;
  cost: string;
  tipoSuscripcion: string;
}

const CardSuscription = ({
  customBg,
  customText,
  cost,
  tipoSuscripcion,
}: Props) => {
  return (
    <button
      onClick={() =>
        alert(
          `Por favor comunicate con nuestro equipo comercial para adquirir la suscripcion: ${tipoSuscripcion} con un valor de: $${cost}`
        )
      }
      className={`flex flex-col ${customBg} w-1/5 h-5/6 rounded-tl-large rounded-br-large justify-start items-center pt-4`}
    >
      <div className="flex flex-col bg-white w-11/12 h-5/6 rounded-tl-large rounded-br-large justify-evenly items-center">
        <p className={`${customText} text-xl font-bold`}>$ {cost}</p>
        <div className="divide-y divide-dashed w-11/12 outline-4">
          <p className="flex text-xs text-justify">
            <IoIosCheckmark size={50} /> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Placeat, pariatur.
          </p>
          <p className="flex text-xs text-justify">
            <IoIosCheckmark size={50} /> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Placeat, pariatur.
          </p>
          <p className="flex text-xs text-justify">
            <IoIosCheckmark size={50} /> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Placeat, pariatur.
          </p>
        </div>
      </div>
      <div className="flex justify-start w-11/12 py-4">
        <div className="w-auto bg-white pl-2 pr-4 rounded-md">
          <p>{tipoSuscripcion}</p>
        </div>
      </div>
    </button>
  );
};

export default CardSuscription;
