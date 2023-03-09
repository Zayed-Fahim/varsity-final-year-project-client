import React from "react";
import About from "../Components/About";
import ContactUs from "../Components/ContactUs";
import Features from "../Components/Features";
import GoogleMap from "../Components/GoogleMap";
import HomeCarousel from "../Components/HomeCarousel";
import Pricing from "../Components/Pricing";

import SchoolList from "../Components/SchoolList";
import UserCounter from "../Components/UserCounter";

const Home = () => {
  return (
    <div className="" id="home">
      {/* Home Carousel */}
      <HomeCarousel />
      {/* Home Banner */}
      {/* <HomeBanner /> */}
      {/* about */}
      <About />
      {/* features */}
      <Features />
      {/* School list */}
      <SchoolList />
      {/* Pricing */}
      <Pricing />
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
