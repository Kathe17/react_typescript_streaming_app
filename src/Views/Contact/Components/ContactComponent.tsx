import React, { useState } from "react";
import CardContact from "./CardContact";
import { MdPlace } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
interface ContactFormProps {}

const ContactComponent: React.FC<ContactFormProps> = () => {
  const iconSize = 30;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquietud, setInquietud] = useState("");

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setInquietud("");
    alert("Correo enviado satisfactoriamente");
  };

  return (
    <div className="w-full h-4/5 flex justify-end items-center px-8 overflow-y-scroll">
      <div className="absolute left-0 w-2/5 h-3/5 grid grid-cols-2 gap-4 justify-items-end">
        <CardContact
          iconCard={<MdPlace size={iconSize} />}
          titleCard={"Nuestra oficina principal"}
          textCard={"Anduys 94 Broadway St Nueva York, NY 3528"}
        />
        <CardContact
          iconCard={<BsTelephone size={iconSize} />}
          titleCard={"Número de teléfono"}
          textCard={"258 39945 58748"}
        />
        <CardContact
          iconCard={<FaFax size={iconSize} />}
          titleCard={"Fax"}
          textCard={"1-5874248 284"}
        />
        <CardContact
          iconCard={<MdOutlineMailOutline size={iconSize} />}
          titleCard={"Correo"}
          textCard={"streamingapp@gmail.com"}
        />
      </div>
      <div className="flex w-[65%] h-4/5 bg-gradient-to-l from-rose-600 to-indigo-800 justify-end rounded-lg">
        <div className="flex flex-col w-11/12 h-full justify-evenly items-center">
          <p className="text-xl text-white font-bold">Contáctenos</p>
          <Input
            border={false}
            type="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            border={false}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            border={false}
            type="textarea"
            placeholder="Ingrese su inquietud aquí..."
            value={inquietud}
            onChange={(e) => setInquietud(e.target.value)}
          />
          <Button onClick={handleSubmit}>
            <p> Enviar </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
