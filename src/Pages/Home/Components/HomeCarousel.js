import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeCarousel = () => {
  const images = [
    {
      src: "https://i.ibb.co/8MZXH8B/school-9.jpg",
      no: 1,
    },
    {
      src: "https://i.ibb.co/9pJPb7M/school-2.jpg",
      no: 2,
    },
    {
      src: "https://i.ibb.co/KWfcwFP/school-5.jpg",
      no: 3,
    },
    {
      src: "https://i.ibb.co/mGB9j0M/school-3.jpg",
      no: 4,
    },
    {
      src: "https://i.ibb.co/f8MVXgx/school-1.jpg",
      no: 5,
    },
  ];
  const texts = [
    {
      headline: "Welcome to Amader School",
      no: 1,
      bg: "#003966",
      textColor: "#ffffff",
    },
    {
      headline: "Welcome to Amader School",
      no: 2,
      bg: "#40544C",
      textColor: "#ffffff",
    },
    {
      headline: "Welcome to Amader School",
      no: 3,
      bg: "#C7CED2",
      textColor: "#000000",
    },
    {
      headline: "Welcome to Amader School",
      no: 4,
      bg: "#21544A",
      textColor: "#ffffff",
    },
    {
      headline: "Welcome to Amader School",
      no: 5,
      bg: "#C6CED0",
      textColor: "#000000",
    },
  ];

  return (
    <div className="min-h-[50vh] xl:pt-32 xl:pb-16 bg-black bg-opacity-30">
      <div className="container mx-auto grid grid-cols-2 place-items-center">
        <div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch={false}
            stopOnHover={true}
            axis="vertical"
            interval={4000}
          >
            {texts.map((text) => {
              return (
                <div
                  className="xl:min-h-[38.3vh] xl:max-w-[300px] grid place-items-center xl:text-4xl font-extrabold"
                  key={text.no}
                  style={{
                    background: `${text.bg}`,
                    color: `${text.textColor}`,
                  }}
                >
                  <h1>{text.headline}</h1>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div>
          <Carousel
            autoPlay={true}
            width="75%"
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch={false}
            stopOnHover={true}
            axis="vertical"
            interval={4000}
            // renderArrowPrev={(clickHandler, hasPrev) => {
            //   return (
            //     <div
            //       className={`hover:bg-black hover:bg-opacity-20 ${
            //         hasPrev ? "absolute" : "hidden"
            //       } top-0 bottom-0 left-0  flex justify-center items-center md:p-3 lg:p-3 xl:p-3 opacity-30 hover:opacity-100  cursor-pointer z-20`}
            //       onClick={clickHandler}
            //     >
            //       <IoIosArrowBack size={35} className=" text-white" />
            //     </div>
            //   );
            // }}
            // renderArrowNext={(clickHandler, hasNext) => {
            //   return (
            //     <div
            //       className={`hover:bg-black hover:bg-opacity-20 ${
            //         hasNext ? "absolute" : "hidden"
            //       } top-0 bottom-0 right-0 flex justify-center items-center md:p-3 lg:p-3 xl:p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            //       onClick={clickHandler}
            //     >
            //       <IoIosArrowForward size={35} className=" text-white" />
            //     </div>
            //   );
            // }}
          >
            {images.map((image) => {
              return (
                <div className="flex">
                  <div key={image.no} className="min-h[30vh]">
                    <img className="min-h-[30vh]" src={image.src} alt="" />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
