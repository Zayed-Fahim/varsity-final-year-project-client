import React, { useRef } from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import OurServices from "../Components/OurServices";
import SchoolList from "../Components/SchoolList";

const Home = () => {
  return (
    <div className="container mx-auto" id="home">
      {/* Banner */}
      <Banner />
      {/* about */}
      <About  />
      {/* our services */}
      <OurServices />
      {/* School list */}
      <SchoolList />
      {/* counter of users */}
      {/* contact */}
      <ContactUs />
      {/*  */}
    </div>
  );
};

export default Home;
