import React from 'react'
import { content1, content2, content3, content4,icon } from "../assets/index";
const Content = () => {
  return (
    <div className='w-[1240px]'>
      <div className="flex container w-[1200px] mx-auto 
      items-center">
        
        <div className="w-6/12">
          
          <h1 className="font-Roboto font-bold text-left text-[40px] leading-[1.8] text-[#091133]">Light, Fast & Powerful</h1>
            <p className="font-Roboto text-[18px] text-left leading-7 text-[#505F98] opacity-70">
            Lorem ipsum dolor sit amet, consectetuer adipiscing <br/> elit. Aenean commodo ligula eget dolor. Aenean <br/> massa. Cum sociis natoque penatibus et magnis dis  parturient, nascetur <br/> 
            mus. Donec quam felis, ultricies nec, pellentesque eu, <br/> quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className='flex  mt-10 '>
                  <div className=" w-64 mr-16 h-36 relative">
                    <div className="Body w-64 text-left top-[82px] absolute text-gray-500 text-xs font-normal font-['Roboto'] ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </div>
                    <div className=" w-64 text-left top-[50px] absolute text-slate-900 text-base font-medium font-['Roboto'] ">Title Goes Here</div>
                    <div className=" w-64 h-9 pr-56 left-0 top-0 relative justify-start items-center inline-flex">
                      <div className=" w-9 h-9 relative flex-col justify-center items-center flex">
                        <img className=" w-9 h-9" src={icon} />
                      </div>
                    </div>
                  </div>
                  <div className=" w-64  h-36 relative">
                    <div className="Body w-64 text-left top-[82px] absolute text-gray-500 text-xs font-normal font-['Roboto'] ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </div>
                    <div className=" w-64 text-left top-[50px] absolute text-slate-900 text-base font-medium font-['Roboto'] ">Title Goes Here</div>
                    <div className=" w-64 h-9 pr-56 left-0 top-0 relative justify-start items-center inline-flex">
                      <div className=" w-9 h-9 relative flex-col justify-center items-center flex">
                        <img className=" w-9 h-9" src={icon} />
                      </div>
                    </div>
                  </div>
                  
            </div>
        </div>
         
        <div className="object-right-bottom object-cover my-10 w-[5/6]">
          <img src={content1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Content
