import React from "react";
import CountUp, { useCountUp } from "react-countup";

const UserCounter = () => {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div
      className="bg-[#FFBE15] lg:h-[400px]  lg:flex-row flex-col gap-5 py-5 lg:py-0 lg:gap-16 grid md:grid-cols-2 
    lg:grid-cols-4 xl:grid-cols-4 place-items-center xl:gap-0 xl:px-20"
    >
      <div className="border-8 border-white h-[200px] w-[200px] rounded-[50%] grid place-content-center">
        <CountUp
          className="text-white text-5xl font-bold text-center"
          end={4}
          enableScrollSpy
        ></CountUp>
        <br />
        <span className="text-sm text-white font-bold grid place-items-center">
          YEARS OF EXPERIENCE
        </span>
      </div>
      <div className="border-8 border-white h-[200px] w-[200px] rounded-[50%] grid place-content-center">
        <CountUp
          className="text-white text-5xl font-bold text-center"
          end={20}
          enableScrollSpy
        ></CountUp>
        <br />
        <span className="text-sm text-white font-bold grid place-items-center">
          SCHOOLS
        </span>
      </div>
      <div className="border-8 border-white h-[200px] w-[200px] rounded-[50%] grid place-content-center">
        <CountUp
          className="text-white text-5xl font-bold text-center"
          end={2000}
          enableScrollSpy
        ></CountUp>
        <br />
        <span className="text-sm text-white font-bold grid place-items-center">
          TEACHERS
        </span>
      </div>
      <div className="border-8 border-white h-[200px] w-[200px] rounded-[50%] grid place-content-center">
        <CountUp
          className="text-white text-5xl font-bold text-center"
          end={6000}
          enableScrollSpy
        ></CountUp>
        <br />
        <span className="text-sm text-white font-bold grid place-items-center">
          STUDENTS
        </span>
      </div>
    </div>
  );
};

export default UserCounter;
