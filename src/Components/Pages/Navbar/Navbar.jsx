import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* header title */}
      <div className="flex flex-col items-center justify-center mt-8 text-center">
        <img src={logo} alt="" />
        <p className="text-[#706F6F] font-semibold mt-5 mb-3">
          Journalism Without Fear or Favour
        </p>
        <p className="font-semibold text-[#403F3F]">
          {moment().format("dddd,")}
          <span className="text-[] font-semibold text-[#706F6F]">
            {moment().format(" MMMM DD, YYYY")}
          </span>
        </p>
        <div className="mt-7 mb-1">
          <div className="flex items-center gap-4 bg-[#F3F3F3] rounded-lg p-4 w-full">
          <button className="btn btn-error">Latest</button>
          <Marquee gradient={false} >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
          </div>
        </div>
      </div>

      {/* navigation bar */}
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={(isActive) => (isActive ? "text-green-500" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    isActive ? "text-green-500" : ""
                  }
                >
                  Career
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={(isActive) => (isActive ? "text-green-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                Career
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <FaUserCircle className="text-4xl" />
          ) : (
            <Link to="/login" className="btn">
              Log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
