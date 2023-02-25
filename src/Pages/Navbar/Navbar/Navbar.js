import React from "react";
import { Link, NavLink } from "react-router-dom";
import me from "../../../assets/icon/home-2.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 min-w-full border-2 shadow-lg">
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
                <NavLink>Item 1</NavLink>
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
                <NavLink>Item 3</NavLink>
              </li>
            </ul>
          </div>
          {/* mobile menu end */}
          {/* website logo section */}
          <Link to="/home" className="font-bold text-xl lg:text-2xl">
            আমাদের
            <span className="text-[#FFBE15] ml-2">School</span>
          </Link>
        </div>
        {/* pc menu start */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 px-10">
            <li>
              <Link className="text-[18px] font-bold">Item 1</Link>
            </li>
            <li>
              <Link className="text-[18px] font-bold">Item 3</Link>
            </li>
          </ul>
        </div>
        {/* pc menu end */}
        <div className="navbar-end lg:gap-5">
          {/* notification icon start */}
          <div className="dropdown dropdown-end border-2 border-black rounded-[50%]">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* notification icon end */}
          {/* user icon start */}
          <div className="dropdown dropdown-end border-2 border-black rounded-[50%] avatar online">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={me} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="hover-bordered">
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li className="hover-bordered">
                <Link>Settings</Link>
              </li>
              <li className="hover-bordered">
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
          {/* user icon end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
