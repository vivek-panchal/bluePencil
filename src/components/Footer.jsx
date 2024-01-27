import React from 'react'
import { logo } from "../assets/index";
import {
 
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-1240px h-200 flex flex-col gap-5 bg-[#E7ECFF] py-4 '>
      <div className='w-11/12 h-120px flex mx-auto items-center justify-between '>
        <div className='w-100px h-20px'>
           ©2023 Vivek Panchal
        </div>
        <div>
            <img
                src={logo}
                width="80px"
                height="24px"/>
        </div>
        <div>
              <button className="bg-[#111B47] text-white mr-20 my-5 py-[4px] px-[18px] rounded-md  font-mullish font-bold "> Purchase Now
              </button>
        </div>
      </div>
      <div className='w-11/12 h-120px flex items-center justify-between mx-auto'>
        <div className=' flex text-[#929ECC] space-x-6'>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        
        <div className="text-[#B0B8BC] cursor-pointer text-[23px] mr-12 flex gap-3">
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaTwitter/>
            <FaYoutube/>
          </div>
      </div>
    </div>
  )
}

export default Footer
