import React from "react";

interface Props {
  iconCard: React.ReactElement;
  titleCard: string;
  textCard: string;
}

const CardContact = ({ iconCard, titleCard, textCard }: Props) => {
  return (
    <div className="flex flex-col justify-evenly items-center w-52 aspect-square bg-gray-200 rounded-md px-6">
      {iconCard}
      <p className="text-center font-bold">{titleCard}</p>
      <p className="text-center">{textCard}</p>
    </div>
  );
};

export default CardContact;
