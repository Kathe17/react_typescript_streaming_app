import React from "react";
import FormLogin from "./Components/FormLogin";
import Footer from "../../Components/Footer/Footer";
const Login = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-gradient-to-b from-rose-600 to-indigo-800">
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Login;
