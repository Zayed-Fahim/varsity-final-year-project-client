import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const SideNavbar = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="drawer drawer-mobile mt-16  w-full min-h-full bg-[#F0F1F3]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side fixed top-0 h-screen w-72 shadow-md">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-[#042954]">
            {/* <!-- Sidebar content here --> */}
            <Link to="/home" className="font-bold text-xl h-16 bg-[#FFBE15]">
              আমাদের <br />
              <span className="text-white ml-10">School</span>
            </Link>
            <li>
              <div>
                <AiOutlineDashboard size={25} className="text-red-500" />
                <Link className="text-white text-xl">Dashboard</Link>
              </div>
            </li>
            <li>
              <div>
                <MdOutlineMiscellaneousServices
                  size={25}
                  className="fill-red-500"
                />
                <Link className="text-white text-xl">Our Service</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
