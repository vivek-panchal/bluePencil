import React from 'react'
import { heroImg } from "../assets/index";
const Hero = () => {
  return (
  <div className="relative w-[1240px]  ">
    <div className="w-full  flex sm:flex-col lg:flex-row justify-between bg-hero bg-no-repeat bg-auto bg-right-top items-center mx-auto pr-4 mr-8 mt-[-10]">
        <div className='w-6/12'>
            <h1 className="font-Roboto text-left font-bold text-[40px] leading-[1.2] text-[#091133]">Introduce Your Product Quickly & Effectively</h1>
            <p className="font-Roboto text-[18px] text-left leading-7 text-[#505F98] opacity-70">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
             Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. <br/> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <button
            className="bg-[#111B47] text-white mr-5 my-5 py-[14px] px-[18px] rounded-md content-start font-mullish font-bold
            "
            >Purchase UI Kit</button>
            <button
            className=" text-[#111B47] mx-5 py-[12px] px-[18px] rounded-md font-mullish font-bold  border-2 border-slate-900
            "
            >Learn More</button>
        </div>

          <img src={heroImg} width="480px" height="480px" className='mt-5 mr-[-15px]'/>

      </div>
  </div>
  )
}

export default Hero
