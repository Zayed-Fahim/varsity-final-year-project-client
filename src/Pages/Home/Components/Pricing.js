import React from "react";
import Icon_1 from "../SmallComponents/Pricing/Icon_1";
import Icon_2 from "../SmallComponents/Pricing/Icon_2";
import Icon_3 from "../SmallComponents/Pricing/Icon_3";

const Pricing = () => {
  const plans = [
    {
      icon: <Icon_1 />,
      heading: "Starter (1-500)",
      subHeading: "All Features Included",
      currency: "BDT",
      amount: "7.0",
      month: "/Month/Student",
      purchase: "PURCHASE",
    },
    {
      icon: <Icon_2 />,
      heading: "Explorer (500-1000)",
      subHeading: "All Features Included",
      currency: "BDT",
      amount: "6.5",
      month: "/Month/Student",
      purchase: "PURCHASE",
    },
    {
      icon: <Icon_3 />,
      heading: "Pro (1000+)",
      subHeading: "All Features Included",
      currency: "BDT",
      amount: "6.0",
      month: "/Month/Student",
      purchase: "PURCHASE",
    },
  ];
  return (
    <div className="mb-10 md:mb-14 lg:mb-16 xl:mb-20" id="pricing">
      <div className="flex flex-col gap-3 md:gap-5 lg:gap-5 xl:gap-5 mb-10 md:mb-14 lg:mb-20 xl:mb-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Price of Amader school management system_
        </h1>
        <h1 className="text-xl lg:text-2xl xl:text-2xl text-center">
          Our Awesome Pricing Plan
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap lg:gap-8 md:gap-8  gap-5 justify-center items-center xl:gap-10">
        {plans.map((plan) => {
          return (
            <div className="w-full h-[400px] md:h-[440px] md:w-[340px] lg:h-[480px] lg:w-[350px] xl:h-[500px] xl:w-[400px] mx-5 xl:mx-0 md:mx-0 lg:mx-0 bg-white hover:shadow-sm hover:shadow-[#ffbe15] lg:hover:scale-105 xl:hover:scale-105 drop-shadow-lg rounded-md">
              <div className="w-full h-[140px] md:w-[340px] md:h-[140px] lg:w-[350px] lg:h-[160px] xl:w-[400px] xl:h-[160px] flex md:flex-wrap lg:flex-nowrap xl:flex-nowrap flex-col gap-2 justify-center items-center bg-[#ffbe15]">
                <div>{plan.icon}</div>
                <div>
                  <h1 className="text-[18px] md:text-[20px] lg:text-[23px] xl:text-[25px] text-black font-bold">
                    {plan.heading}
                  </h1>
                </div>
              </div>
              <div className="h-[260px] md:h-[300px] lg:h-[320px] xl:h-[340px] xl:w-[400px] grid justify-center items-center text-black">
                <p className="relative right-[40px] top-12 md:top-14 lg:right-[45px] lg:top-14 xl:right-[60px] text-2xl lg:text-3xl xl:text-3xl xl:top-16">
                  {plan.currency}
                </p>
                <h1 className="text-[#ffbe15] text-4xl md:text-5xl lg:text-6xl xl:text-6xl">{plan.amount}</h1>
                <p className="relative left-[50px] bottom-12 md:left-[60px] md:bottom-14 lg:left-[75px] lg:bottom-16 xl:left-[80px] md:text-xl lg:text-xl xl:text-xl xl:bottom-16">
                  {plan.month}
                </p>
                <button className="bg-[#ffbe15] py-3 text-xl font-bold hover:bg-opacity-70 rounded-md">
                  {plan.purchase}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
