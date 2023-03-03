import React from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import GoogleMap from "../Components/GoogleMap";
import OurServices from "../Components/OurServices";
import SchoolList from "../Components/SchoolList";
import UserCounter from "../Components/UserCounter";

const Home = () => {
  return (
    <div className="" id="home">
      {/* Banner */}
      <Banner />
      {/* about */}
      <About />
      {/* our services */}
      <OurServices />
      {/* School list */}
      <SchoolList />
      {/* counter of users */}
      <UserCounter />
      {/* contact */}
      <ContactUs />
      {/* Google Map */}
      <GoogleMap />
    </div>
  );
};

export default Home;
