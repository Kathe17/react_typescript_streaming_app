import React, { useContext } from "react";
import useLogin from "../Hooks/useLogin";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { FiUser } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import Logo from "../../../Components/Logo/Logo";

const FormLogin = () => {
  const iconSize: number = 30;

  const { handleSubmit, email, setEmail, password, setPassword, error } =
    useLogin();
  return (
    <div className="flex flex-col w-1/2 h-1/2 justify-evenly items-center">
      {/* <p>Usuario: {user?.nombre}</p> */}
      <Logo />
      <Input
        icon={<FiUser size={iconSize} color="white" />}
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        icon={<CiLock size={iconSize} color="white" />}
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        <p> Iniciar Sesión</p>
      </Button>
      {/* <button type="submit">Iniciar sesión</button> */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FormLogin;
