import React from "react";
import Icon_1 from "../SmallComponents/ServicesComponents/Icon_1";
import Icon_2 from "../SmallComponents/ServicesComponents/Icon_2";
import Icon_3 from "../SmallComponents/ServicesComponents/Icon_3";
import Icon_4 from "../SmallComponents/ServicesComponents/Icon_4";
import Icon_5 from "../SmallComponents/ServicesComponents/Icon_5";
import Icon_6 from "../SmallComponents/ServicesComponents/Icon_6";
import Icon_7 from "../SmallComponents/ServicesComponents/Icon_7";
import Icon_8 from "../SmallComponents/ServicesComponents/Icon_8";

const Features = () => {
  const services = [
    {
      heading: "Students",
      icon: <Icon_1 />,
      details:
        "With a separate profile for each student, it’s now easier than ever to access student particulars. From daily attendance to grades and teacher advice everything can be accessed under one platform.",
    },
    {
      heading: "Teachers",
      icon: <Icon_2 />,
      details:
        "Our teacher module is designed to save time and focus on what matters the most. From submitting grades to updating the syllabus everything is super easy with Amader School.",
    },
    {
      heading: "Library Management",
      icon: <Icon_3 />,
      details:
        "Managing a library is not boring anymore. Thanks to our library module adding new books, issuing books, as well as can maintain all library activities are now easier than ever.",
    },
    {
      heading: "Parents",
      icon: <Icon_4 />,
      details:
        "Using separate parents’ login it’s now easy to track all the activities of every child. Checking attendance, grades, notice everything can be assessed using Amader School.",
    },
    {
      heading: "Report Card & Transcript",
      icon: <Icon_5 />,
      details:
        "Create transcripts, report cards with a click of a button and store them safely on the cloud. Using a secure database your all-important data are tucked away safely and can be assessed from anywhere & anytime.",
    },
    {
      heading: "Academic Setting",
      icon: <Icon_6 />,
      details:
        "Think about the old ways of adding students to class or adding a whole class itself. Using Amader School you do not have to push the papers anymore. Everything can be done digitally now. You can add class, section, student, teacher, librarian, accountant, and so on through academic settings.",
    },
    {
      heading: "Account Management",
      icon: <Icon_7 />,
      details:
        "The accounts module can easily generate fees, as well as additional income or expense items. You can also collect fees from students and create financial documents while having one hand tied behind your back.",
    },
    {
      heading: "Attendance",
      icon: <Icon_8 />,
      details:
        "Attendance: Amader School introduced a smart attendance system, that can be used to take attendance from both web interfaces and also smartphones.",
    },
  ];
  return (
    <section className="py-10 md:py-14 lg:py-16 xl:py-20" id="our-services">
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold mb-10 md:mb-14 lg:mb-16 xl:mb-20">
        <h1>Features of Amader School management system</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-16 xl:gap-0 place-items-center">
        {services.map((service) => {
          return (
            <div className="w-full h-[320px] md:h-[470px] md:w-[420] lg:h-[470px] lg:w-[400px] xl:h-[460px] xl:w-[380px] flex flex-col items-center gap-3 md:gap-5 lg:gap-5 xl:gap-5 xl:pt-10 px-5 md:px-4 lg:px-3 xl:px-2 xl:border-r xl:border-l border-b border-black">
              <div className="h-24 w-24 grid place-items-center rounded-[50%] bg-[#FFBE15] bg-opacity-50 hover:bg-[none]">
                {service.icon}
              </div>
              <div>
                <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">
                  {service.heading}
                </h1>
              </div>
              <div>
                <p className="xl:text-[18px] text-center">{service.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
