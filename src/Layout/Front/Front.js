import React from "react";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";
import student from "../../assets/icon/student.png";
import guest from "../../assets/icon/guest.png";

const Front = () => {
  return (
    <div className="container mx-auto min-h-screen lg:py-12 py-6">
      <div className="lg:max-w-[850px] lg:min-h-[870px] max-h-max mx-auto border-2 border-[#FFBE15] border-opacity-20 rounded-xl">
        <div className="lg:ml-3 lg:mt-3 ml-2 mt-2">
          <Link to="/" className="font-bold text-xl lg:text-2xl">
            আমাদের <br />
            <span className="text-[#FFBE15] ml-10">School</span>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-16 my-[68px] lg:my-28">
          <div className="lg:text-6xl text-4xl font-bold leading-normal lg:leading-relaxed">
            <h1 className="text-[#FFBE15] text-center lg:text-left lg:w-[660px]">
              Welcome Here.
            </h1>
            <h1 className="text-center lg:text-left lg:w-[660px]">
              Continue to the system As....
            </h1>
          </div>
          <div className="flex flex-row lg:flex-row lg:flex-nowrap flex-wrap justify-center items-center gap-16 lg:gap-28 ">
            <div className="hover:shadow-lg hover:shadow-black hover:rounded-xl">
              <Link
                to="student-login"
                className="bg-[#FFBE15] h-[150px] w-[150px] grid place-items-center rounded-lg"
              >
                <img className="h-[70px]" src={student} alt="student" />
                <h1 className="text-2xl font-bold">Student</h1>
              </Link>
            </div>
            <div className="hover:shadow-lg hover:shadow-black hover:rounded-xl">
              <Link
                to="/teacher-login"
                className="bg-[#FFBE15] h-[150px] w-[150px] grid place-items-center rounded-lg"
              >
                <GiTeacher fill="text-black" size={70} />
                <h1 className="text-2xl font-bold">Teacher</h1>
              </Link>
            </div>
            <div className="hover:shadow-lg hover:shadow-black hover:rounded-xl">
              <Link
                to="/home"
                className="bg-[#FFBE15] h-[150px] w-[150px] grid place-items-center rounded-lg"
              >
                <img className="h-[70px]" src={guest} alt="guest" />
                <h1 className="text-2xl font-bold">Guest</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
