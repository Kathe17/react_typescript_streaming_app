import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import ContentCategory from "../Views/ContentCategory/ContentCategory";
import ContentDetails from "../Views/ContentDetails/ContentDetails";
import Home from "../Views/Home/Home";
import Login from "../Views/Login/Login";
import About from "../Views/About/About";
import Suscriptions from "../Views/Suscriptions/Suscriptions";
import Contact from "../Views/Contact/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<PublicRouter component={Login} />} />
        <Route path="/home" element={<PrivateRouter component={Home} />} />
        <Route path="/about" element={<PrivateRouter component={About} />} />
        <Route
          path="/suscriptions"
          element={<PrivateRouter component={Suscriptions} />}
        />
        <Route
          path="/contact"
          element={<PrivateRouter component={Contact} />}
        />
        <Route
          path="/contentCategory/:categoryId"
          element={<PrivateRouter component={ContentCategory} />}
        />
        <Route
          path="/contentDetails/:detailId"
          element={<PrivateRouter component={ContentDetails} />}
        />
        {/* <Route path="*" element={<Error404 />} />
        <Route path="/403" element={<Error403 />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
