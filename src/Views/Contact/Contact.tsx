import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ContactComponent from "./Components/ContactComponent";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-rose-600 to-indigo-800">
      <Navbar></Navbar>
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Contact;
