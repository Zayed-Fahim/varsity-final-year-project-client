import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import school1 from "../../../assets/banner/school-9.jpg";
import school2 from "../../../assets/banner/school-2.jpg";
import school3 from "../../../assets/banner/school-5.jpg";
import school4 from "../../../assets/banner/school-3.jpg";
import school5 from "../../../assets/banner/school-1.jpg";

const Banner = () => {
  const images = [
    {
      src: school1,
      no: 2,
    },
    {
      src: school2,
      no: 2,
    },
    {
      src: school3,
      no: 3,
    },
    {
      src: school4,
      no: 4,
    },
    {
      src: school5,
      no: 5,
    },
  ];
  return (
    <div className="flex justify-center mt-16 z-0">
      <Carousel
        autoPlay={true}
        width="90%"
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        // axis="vertical"
        emulateTouch={true}
        stopOnHover={true}
        interval={4000}
        className="flex justify-center items-center"
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`hover:bg-black hover:bg-opacity-20 ${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0  flex justify-center items-center md:p-3 lg:p-3 xl:p-3 opacity-30 hover:opacity-100  cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <IoIosArrowBack size={35} className=" text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`hover:bg-black hover:bg-opacity-20 ${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center md:p-3 lg:p-3 xl:p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <IoIosArrowForward size={35} className=" text-white" />
            </div>
          );
        }}
      >
        {images.map((image) => {
          return (
            <div key={image.no}>
              <img
                className="lg:max-h-[530px] xl:max-h-[630px] object-cover"
                src={image.src}
                alt=""
              />
              <div className="relative xl:top-6 xl:w-[60%] mx-auto">
                <p className="legend xl:text-2xl">
                  A system that manage all your institutional activities.
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
