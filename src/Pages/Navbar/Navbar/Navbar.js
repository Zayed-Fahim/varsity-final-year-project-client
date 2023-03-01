import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-128 max-h-max"
            >
              <li>
                <NavLink>About Us</NavLink>
              </li>
              <div className="dropdown-bottom">
                <li tabIndex={0}>
                  <NavLink className="justify-between">
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
                  </NavLink>
                  <ul className="p-2">
                    <li>
                      <NavLink>Submenu 1</NavLink>
                    </li>
                    <li>
                      <NavLink>Submenu 2</NavLink>
                    </li>
                  </ul>
                </li>
              </div>
              <li>
                <NavLink>Our Services</NavLink>
              </li>
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
          <ul className="flex gap-8">
            <li className="">
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`md:text-[.85rem] lg:text-[1rem] xl:text-[18px] font-bold
                 ${
                   scrollPosition >= 0 && scrollPosition <= 627
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
                onClick={() => {
                  window.scrollTo({ top: 628, behavior: "smooth" });
                }}
                className={`md:text-[.85rem] lg:text-[1rem] xl:text-[18px] font-bold
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
                onClick={() => {
                  window.scrollTo({ top: 1328, behavior: "smooth" });
                }}
                className={`md:text-[.85rem] lg:text-[1rem] xl:text-[18px] font-bold ${
                  scrollPosition >= 1328 && scrollPosition <= 2020
                    ? "text-[#FFBE15]"
                    : "text-black"
                }`}
                title="Know what we provide"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 2028, behavior: "smooth" });
                }}
                className={`md:text-[.85rem] lg:text-[1rem] xl:text-[18px] font-bold ${
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
                onClick={() => {
                  window.scrollTo({ top: 2728, behavior: "smooth" });
                }}
                className={`lg:text-[1rem] xl:text-[18px] font-bold ${
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
