import React,{useState} from "react";
import logo from "../Assets/streamVibeLogo.png";
import { FaSearch,FaBell} from 'react-icons/fa';
import { CgMenuRight } from "react-icons/cg";

const menus = [
    "home",
    "movies&show",
    "support",
    "subscriptions"
]

const NavBar = () => {

    const [menu, setMenu] = useState("home");


  return (
    <div className=" py-8 px-20 w-full fixed z-10">
      <nav className=" flex justify-between items-center">
        <div className=" flex items-center gap-1 cursor-pointer">
          <img src={logo} alt="..." className=" md:w-14 w-10" />
          <p className=" md:text-xl">StreamVibe</p>
        </div>
        <div className=" md:flex gap-8 p-2 bg-primary backdrop-blur-3xl shadow-lg border-4 border-gray-800 rounded-md hidden">
            {menus.map((item, index)=>(
                 <li key={index} className={` list-none cursor-pointer px-2 py-3 duration-300  ${menu === item ? "bg-glass rounded-md" : ""}`} onClick={ () => setMenu(item)}>{item}</li>
            ))}
        </div>
        <div className=" md:flex hidden gap-7 ">
            <FaSearch size={20} className=" cursor-pointer"/>
            <FaBell size={20} className=" cursor-pointer"/>
        </div>
        <div className=" px-3 py-3 bg-gray-800 rounded-md border-2 border-gray-500 md:hidden block">
          <CgMenuRight />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
