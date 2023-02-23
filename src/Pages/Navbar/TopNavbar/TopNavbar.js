import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-72 min-h-20 w-screen z-[100] bg-white shadow-md">
      <div className="flex items-center gap-3 px-10 py-5 w-screen">
        <Link>
          <BsSearch />
        </Link>
        <input
          type="text"
          placeholder="Type here"
          className="outline-none"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
