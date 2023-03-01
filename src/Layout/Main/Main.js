import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Navbar from "../../Pages/Navbar/Navbar/Navbar";

const Main = ({ sectionHeight }) => {
  return (
    <div>
      <Navbar sectionHeight={sectionHeight} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
