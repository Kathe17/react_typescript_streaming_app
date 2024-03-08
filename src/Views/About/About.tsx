import React from "react";
import AboutComponent from "./Components/AboutComponent";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-rose-600 to-indigo-800">
      <Navbar></Navbar>
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default About;
