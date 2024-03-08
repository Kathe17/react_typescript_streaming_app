import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import ContentCategory from "../Views/ContentCategory/ContentCategory";
import ContentDetails from "../Views/ContentDetails/ContentDetails";
import Home from "../Views/Home/Home";
import Login from "../Views/Login/Login";
import Button from "../Components/Button/Button";
import LandingPage from "../Views/LandingPage/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<PublicRouter component={LandingPage} />} />
        <Route path="/login" element={<PublicRouter component={Login} />} />
        <Route path="/home" element={<PrivateRouter component={Home} />} />
        <Route
          path="/contentCategory/:categoryId"
          element={<PrivateRouter component={ContentCategory} />}
        />
        <Route
          path="/contentDetails"
          element={<PrivateRouter component={ContentDetails} />}
        />
        {/* <Route path="*" element={<Error404 />} />
        <Route path="/403" element={<Error403 />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
