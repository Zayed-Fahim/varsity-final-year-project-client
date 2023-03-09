import React from "react";

const About = () => {
  return (
    <section className="py-10 md:py-14 lg:py-16 xl:pb-20" id="about">
      <div className="container mx-auto grid place-items-center gap-10">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
          <h1>Best School management </h1>
          <h1>system software for digitalizing</h1>
          <h1>school_</h1>
        </div>
        <div className="max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] text-xl md:text-xl lg:text-2xl xl:text-2xl px-5 md:px-0 lg:px-0 xl:px-0">
          <p className="text-center">
            Amader School management system is one of the best school management
            system software for managing any educational institute. Amader
            School management system offers unique sets of features that allow
            managing your school under one platform. With separate users like
            students, teachers, and administrators managing school is now easier
            than ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
