import React from "react";
import girl from "../assests/girl.jpg";
import './Btn1.css';

const Registration = () => {
  return (
    <div className="border-none w-screen">
      <div className='relative w-full '>
        <p className='absolute mt-80 ml-[26rem] font-sans tracking-wide  text-5xl text-[#978a7d] '>BOOK YOUR APPOINTMENT</p>
        <p className='absolute mt-96 ml-[26rem] font-sans tracking-wide text-5xl text-[#897969]'>BE READY FOR WORKOUT !</p>
        <button className='absolute mt-[29rem]  font-sans tracking-wide text-xl text-[#f8dbbc] btn1 '>APPOINTMENT</button> 
        <img src={girl} alt=""  />
      </div>
    </div>
  );
};

export default Registration;
