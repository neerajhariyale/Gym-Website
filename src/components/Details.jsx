import React from 'react'
import mainImg from "../assests/main.jpg"
import './Btn.css';

const Details = () => {
  return (
    <div className='border-none'>

      <div className='relative '>
        <p className='absolute mt-48 ml-48 font-sans tracking-wide text-5xl text-[#bb6d4c]' >SHAPE YOUR BODY</p>
        <p className='absolute mt-64 ml-48 font-sans tracking-wide text-3xl text-[#88736e]'>BE STRONG TRAINING HARD</p>
        <button className='absolute mt-80 ml-48 font-sans tracking-wide text-xl text-[#f8dbbc] btn '>GET INFO</button> 
        <img src={mainImg} alt="" className='max-w-full'/>
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default Details
