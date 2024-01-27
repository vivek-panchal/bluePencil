import React from 'react'

const Price = () => {
  return (
    <div className='bg-price w-[1216px] h-[600px] text-center flex flex-col justify-center'>
      <div className='mx-auto  '>
      <div className=" w-96 text-center text-slate-900 text-3xl font-medium mt-40 leading-10">A Price To Suit Everyone</div>
      <div className=" w-96 text-center text-slate-500 text-base font-normal font-['Roboto'] leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </div>
      <div className=" w-960 text-center text-blue-950 text-3xl font-medium font-['Roboto'] leading-10 tracking-wide">$40</div>
      <div className=" w-960 text-center text-indigo-900 text-base font-normal font-['Roboto'] leading-relaxed">UI Design Kit</div>
      <div className=" w-960 text-center text-gray-500 text-sm mt-15 font-normal font-['Roboto'] leading-normal">See, One price. Simple.</div>
      <button className="bg-[#111B47] text-white  my-5 w-96px h-80px  py-[4px] px-[18px] rounded-md  font-mullish font-bold "> Purchase Now
      </button>
      </div>
    </div>
  )
}

export default Price
