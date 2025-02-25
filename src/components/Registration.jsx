import React from "react";
import girl from "../assests/girl.jpg";
import "./Btn1.css";

const Registration = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Background Image */}
      <img src={girl} alt="Workout Girl" className="w-full h-auto object-cover" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <p className="text-3xl sm:text-5xl font-sans tracking-wide text-[#978a7d]">
          BOOK YOUR APPOINTMENT
        </p>
        <p className="text-3xl sm:text-5xl font-sans tracking-wide text-[#897969] mt-4">
          BE READY FOR WORKOUT!
        </p>

        {/* Appointment Button */}
        <button className="mt-6 sm:mt-8 px-6 py-3 text-xl font-sans tracking-wide text-[#f8dbbc] btn1">
          APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default Registration;
