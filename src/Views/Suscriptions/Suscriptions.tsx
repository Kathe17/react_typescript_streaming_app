import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SuscriptionsComponent from "./Components/SuscriptionsComponent";

const Suscriptions = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-rose-600 to-indigo-800">
      <Navbar></Navbar>
      <SuscriptionsComponent />
      <Footer />
    </div>
  );
};

export default Suscriptions;
