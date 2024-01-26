import React from 'react';
import { logo } from "../assets/index";
const Navbar = () => {
  return (
  <div className=" bg-opacity-0 lex items-center justify-between mx-auto ">
    <div className="relative w-[1240px] h-[60px] mx-auto flex items-center justify-between ">

        <a href="/" className="cursor-pointer py-7 pr-7">
            <img
            src={logo}
            width="80px"
            height="24px"/>
        </a>

        <ul className="flex space-x-6">
            <li className="text-[#929ECC] font-mullish py-7 ">
            <a href="#">Home</a>
            </li>

            <li className="text-[#929ECC] font-mullish py-7 ">
            <a href="#">About</a>
            </li>

            <li className="text-[#929ECC] font-mullish py-7 h">
            <a href="#">Product</a>
            </li>            
        </ul>

        <div className="flex space-x-6">
            
            <button className=" px-2 font-Roboto text-white bg-[#111B47]  border
            rounded-md text-sm  ">Purchase UI Kit</button>
            <button className="py-3 px-4 font-Roboto rounded-md text-sm 
            bg-[#FFD166] text-lightBlue300 ">Contact Us
            </button>
        </div>


    </div>
  </div>
  );
};

export default Navbar;
