import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-900 py-5 shadow-lg px-5 md:px-10 lg:px-16 xl:px-20">
      <div>
        <Link to="/" className="flex items-center">
          <img className="w-16 h-16" src={logo} alt="Logo" />
          <span className="text-4xl font-bold text-[#FB834A]">
            Kruton<span className="text-[#FB834A]">.</span>
          </span>
        </Link>
      </div>
      <ul className="flex items-center gap-7">
        <li className="text-[#FB834A] font-medium">
          <Link to="/">Home</Link>
        </li>
        <li className="text-[#FB834A] font-medium">
          <Link>Blog</Link>
        </li>
        <li className="text-[#FB834A] font-medium">
          <Link>User Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
