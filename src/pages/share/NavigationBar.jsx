import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="flex items-center justify-between bg-slate-900 py-4 shadow-lg px-5 md:px-10 lg:px-16 xl:px-20">
      <div>
        <Link to="/" className="flex items-center">
          <img className="w-14 h-14" src={logo} alt="Logo" />
          <span className="text-4xl font-bold text-[#FB834A]">
            Kruton<span className="text-[#FB834A]">.</span>
          </span>
        </Link>
      </div>
      <ul className="flex items-center gap-7">
        <li className="text-[#FB834A] text-lg font-medium">
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li className="text-[#FB834A] text-lg font-medium">
          <ActiveLink to="/blog">Blog</ActiveLink>
        </li>
        <li className="text-[#FB834A] text-lg font-medium">
          {user ? (
            <Link onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li className="text-[#FB834A] font-medium">
          {user && (
            <img
              title={user?.displayName}
              className="h-16 w-16 rounded-full shadow-blue-200 shadow-md border-[#FB834A] border"
              src={user?.photoURL}
              alt=" User Img 👤"
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
