import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import SideNavbar from "../../Pages/Navbar/SideNavbar/SideNavbar";
import TopNavbar from "../../Pages/Navbar/TopNavbar/TopNavbar";

const Main = () => {
  return (
    <div>
      <TopNavbar />
      <SideNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
