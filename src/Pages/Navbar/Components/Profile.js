import React from "react";
import { Link } from "react-router-dom";
import me from "../../../assets/icon/home-2.png";

const Profile = () => {
  return (
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
  );
};

export default Profile;
