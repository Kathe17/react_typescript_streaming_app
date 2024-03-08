import { useState, useContext } from "react";
import axios from "axios";
import { postLoginApi } from "../../../Services/Login.api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { asignarMensajeErrorPeticionesAxios } from "../../../utils/utils";

export default function useLogin() {
  const [email, setEmail] = useState("juanperez@gmail.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState("");

  // const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
    } else if (!regex.test(email)) {
      setError("El correo electrónico no es válido");
    } else {
      try {
        const response = await postLoginApi({
          user: email,
          password: password,
        });
        setError("");
        sessionStorage.setItem("user", JSON.stringify(response.data.user));

        // setUser(response.data.user);
        navigate("/home");
        // Guardar el token en el almacenamiento local o en el contexto
        // Redirigir al usuario a la página de inicio
      } catch (error) {
        // let errorMessage;
        // if (axios.isAxiosError(error)) {
        //   errorMessage = error.response?.data.message;
        //   // Do something with this error...
        // } else {
        //   errorMessage = error;
        // }
        setError(asignarMensajeErrorPeticionesAxios(error));
      }
    }
  };

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    error,
  };
}
