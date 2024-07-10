import React, { useState } from "react";
import logo from "../Assets/streamVibeLogo.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const menus = ["home", "movies&shows", "support", "subscriptions"];

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState("home");
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className=" py-5 md:px-20 px-5 w-full fixed z-10">
      <nav className=" flex justify-between items-center">
        <div className=" flex items-center gap-1 cursor-pointer">
          <img src={logo} alt="..." className=" md:w-14 w-10" />
          <p className=" md:text-xl">StreamVibe</p>
        </div>
        <div className=" md:flex gap-8 p-2 bg-primary backdrop-blur-3xl shadow-lg border-4 border-gray-800 rounded-md hidden">
          {menus.map((item, index) => (
            <NavLink
              key={index}
              to={`/${item}`}
              className={({ isActive }) =>
                `list-none cursor-pointer px-2 py-3 duration-300 ${
                  isActive ? "bg-glass rounded-md" : ""
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
        <div className=" md:flex hidden gap-7 ">
          <FaSearch size={20} className=" cursor-pointer" />
          <FaBell size={20} className=" cursor-pointer" />
        </div>

        {/* hamburger menu for mobile view */}
        <div
          className=" px-3 py-3 bg-gray-800 rounded-md border-2 border-gray-500 md:hidden block"
          onClick={toggleMenu}
        >
          {openMenu?  <RxCross2/>:<CgMenuRight />}
        </div>
       
      </nav>
      {openMenu && (
          <div className=" mt-5 md:hidden gap-5 p-2 bg-primary backdrop-blur-3xl shadow-lg border-4 border-gray-800 rounded-md flex flex-col items-center">
            {menus.map((item, index) => (
              <NavLink
                key={index}
                to={`/${item}`}
                className={({ isActive }) =>
                  `list-none cursor-pointer px-2 py-3 duration-300 ${
                    isActive ? "bg-glass rounded-md" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}
    </div>
  );
};

export default NavBar;
