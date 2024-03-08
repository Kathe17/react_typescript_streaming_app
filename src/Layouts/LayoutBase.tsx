import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const LayoutBase = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-rose-600 to-indigo-800">
      <Navbar></Navbar>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutBase;
