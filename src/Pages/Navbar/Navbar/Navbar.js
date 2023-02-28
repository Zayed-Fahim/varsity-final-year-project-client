import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import "./menu";
// import "./menu.css";

const Navbar = () => {
  return (
    <div className="fixed top-0 min-w-full border border-b-black border-opacity-10 bg-white z-[100]">
      <div className="navbar container mx-auto p-0 m-0">
        <div className="navbar-start">
          {/* mobile menu start */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 max-h-max"
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
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
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
            to="/home"
            className="font-bold text-xl xl:text-2xl"
            title="Welcome to আমাদের School"
          >
            আমাদের
            <span className="text-[#FFBE15] ml-2">School</span>
          </Link>
        </div>
        {/* pc menu start */}
        <nav className="navbar-end hidden lg:flex nav-menu">
          <ul className="flex gap-8">
            <li className="about">
              <HashLink
                to="#about"
                className="md:text-[.85rem] lg:text-[1rem] xl:text-[18px] font-bold focus:text-[#FFBE15]"
                title="Know About Us"
              >
                About Us
              </HashLink>
            </li>
            <li className="our-services">
              <HashLink
                to="#our-services"
                className="md:text-[.85rem] lg:text-[1rem] xl:text-[18px] font-bold focus:text-[#FFBE15]"
                title="Know what we provide"
              >
                Our Services
              </HashLink>
            </li>
            <li className="school-list">
              <HashLink
                to="#school-list"
                className="md:text-[.85rem] lg:text-[1rem] xl:text-[18px] font-bold focus:text-[#FFBE15]"
                title="Who use our services"
              >
                School List
              </HashLink>
            </li>
            <li className="contact-us">
              <HashLink
                to="#contact-us"
                className="lg:text-[1rem] xl:text-[18px] font-bold focus:text-[#FFBE15]"
                title="Contact us for any kind of information"
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </nav>
        {/* pc menu end */}
      </div>
    </div>
  );
};

export default Navbar;
