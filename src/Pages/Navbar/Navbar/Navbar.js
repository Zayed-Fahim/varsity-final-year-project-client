import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);

  return (
    <div className="fixed top-0 min-w-full border border-b-black border-opacity-28 bg-white z-[128]">
      <div className="navbar container mx-auto p-0 m-0">
        <div className="navbar-start">
          {/* mobile menu start */}

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-link text-black lg:hidden">
              <svg
                xmlns="http://www.w3.org/2280/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-white z-[20] max-h-max min-w-max"
            >
              <li className="border-2">
                <Link
                  to="/home"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 0 && scrollPosition <= 210
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="border-2">
                <Link
                  to="/home/#about"
                  onClick={() => {
                    window.scrollTo({ top: 211, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 211 && scrollPosition <= 909
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="border-2">
                <Link
                  to="/home/#features"
                  onClick={() => {
                    window.scrollTo({ top: 910, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 910 && scrollPosition <= 1609
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Know what we provide"
                >
                  Features
                </Link>
              </li>
              <li className="border-2">
                <Link
                  to="/home/#school-list"
                  onClick={() => {
                    window.scrollTo({ top: 1610, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 1610 && scrollPosition <= 2309
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Who use our services"
                >
                  School List
                </Link>
              </li>
              <li className="border-2">
                <Link
                  to="/home/#pricing"
                  onClick={() => {
                    window.scrollTo({ top: 2310, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 2310 && scrollPosition <= 2510
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Contact us for any kind of information"
                >
                  Pricing
                </Link>
              </li>
              <li className="border-2">
                <Link
                  to="/home/blog"
                  // onClick={() => {
                  //   window.scrollTo({ top: 2310, behavior: "smooth" });
                  // }}
                  className="focus:text-[#FFBE15]"
                  title="Contact us for any kind of information"
                >
                  Blog
                </Link>
              </li>
              <li className="border-2">
                <Link
                  to="/home/#contact-us"
                  onClick={() => {
                    window.scrollTo({ top: 2310, behavior: "smooth" });
                  }}
                  className={`${
                    scrollPosition >= 2310 && scrollPosition <= 2510
                      ? "text-[#FFBE15]"
                      : "text-black"
                  }`}
                  title="Contact us for any kind of information"
                >
                  Contact Us
                </Link>
              </li>

              {/* <li tabIndex={0}>
                <Link className="justify-between">
                  Parent
                  <svg
                    className="fill-current rotate-90"
                    xmlns="http://www.w3.org/2280/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L28,6L16,12L28,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 dropdown-bottom">
                  <li className="border-2 w-full">
                    <Link>Submenu 1</Link>
                  </li>
                  <li className="border-2 w-full">
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          {/* mobile menu end */}
          {/* website logo section */}
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to="/home"
            className="font-bold text-xl xl:text-2xl"
            title="Welcome to আমাদের School"
          >
            আমাদের
            <span className="text-[#FFBE15] ml-2">School</span>
          </Link>
        </div>
        {/* pc menu start */}
        <div className="navbar-end hidden lg:flex nav-menu">
          <ul className="flex md:gap-3 lg:gap-5 xl:gap-8">
            <li>
              <Link
                to="/home"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-bold
                 ${
                   scrollPosition >= 20 && scrollPosition <= 627
                     ? "text-[#FFBE15]"
                     : "text-black"
                 }`}
                title="This is Home page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/home/#about"
                onClick={() => {
                  window.scrollTo({ top: 628, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-bold
                 ${
                   scrollPosition >= 628 && scrollPosition <= 1320
                     ? "text-[#FFBE15]"
                     : "text-black"
                 }`}
                title="Know About Us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/home/#features"
                onClick={() => {
                  window.scrollTo({ top: 1328, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-bold ${
                  scrollPosition >= 1328 && scrollPosition <= 2020
                    ? "text-[#FFBE15]"
                    : "text-black"
                }`}
                title="Know what we provide"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/home/#school-list"
                onClick={() => {
                  window.scrollTo({ top: 2028, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-bold ${
                  scrollPosition >= 2028 && scrollPosition <= 2518
                    ? "text-[#FFBE15]"
                    : "text-black"
                }`}
                title="Who use our services"
              >
                School List
              </Link>
            </li>
            <li>
              <Link
                to="/home/#pricing"
                onClick={() => {
                  window.scrollTo({ top: 2728, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-bold ${
                  scrollPosition >= 2519 && scrollPosition <= 3420
                    ? "text-[#FFBE15]"
                    : "text-black"
                }`}
                title="Contact us for any kind of information"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/home/blog"
                className="md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-bold focus:text-[#FFBE15]"
                title="Contact us for any kind of information"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/home/#contact-us"
                onClick={() => {
                  window.scrollTo({ top: 2728, behavior: "smooth" });
                }}
                className={`md:text-[1rem] lg:text-[.85rem] xl:text-[18px] font-bold ${
                  scrollPosition >= 2519 && scrollPosition <= 3420
                    ? "text-[#FFBE15]"
                    : "text-black"
                }`}
                title="Contact us for any kind of information"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* pc menu end */}
      </div>
    </div>
  );
};

export default Navbar;
