import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import OurServices from "../Components/OurServices";

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Banner */}
      <Banner />
      {/* about */}
      <About />
      {/* our services */}
      <OurServices />
      {/* counter of users */}
      {/* contact */}
      <ContactUs />
    </div>
  );
};

export default Home;
