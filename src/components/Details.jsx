import React from 'react';
import mainImg from "../assests/main.jpg";
import './Btn.css';

const Details = () => {
  return (
    <div className='border-none'>
      <div className='relative w-full'>
        <img src={mainImg} alt="" className='w-full h-auto' />
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center px-4 sm:px-8'>
          <p className='font-sans tracking-wide text-3xl sm:text-5xl text-[#bb6d4c]'>SHAPE YOUR BODY</p>
          <p className='mt-4 font-sans tracking-wide text-lg sm:text-3xl text-[#88736e]'>BE STRONG TRAIN HARD</p>
          <button className='mt-6 font-sans tracking-wide text-lg sm:text-xl text-[#f8dbbc] btn px-6 py-2'>GET INFO</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
