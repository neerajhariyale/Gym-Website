import React from "react";
import footerImage from "../assests/wallpaper.jpg";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-11/12 h-auto   flex  flex-col justify-center items-center mx-auto mb-8">
      <div className="w-full object-cover flex border-2 bg-yellow-400">
        <img
          src={footerImage}
          alt=""
          className="object-cover ml-[18%] h-auto"
        />
      </div>

      <p className="text-center mt-8 font-bold text-3xl">GYM LOVER</p>
      <div className="border-2 border-yellow-400 w-24 -ml-16"></div>

      <div className="flex justify-around w-11/12 mt-8  h-48">
        <div className="flex flex-col gap-2">
          <p className="cursor-pointer font-semibold hover:border-b-2 w-24 hover:border-b-gray-600">GYM LOVER </p>
          <p>
            Pushing limits and chasing gains, <br /> the gym is my playground
            where <br /> strength reigns.
          </p>

          <div className="flex gap-4 h-64 w-64 mt-3">
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
            <FaYoutube />
            <MdEmail />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="cursor-pointer font-semibold hover:border-b-2 w-12 hover:border-b-gray-600">Address</h2>
          <div className="flex flex-col ">
            <p><span className="font-bold font"> 
              Branch 1 : </span> <span>C-25, Bittan Market, Bhopal 462016</span>
            </p>
            <p><span className="font-bold">
              Branch 2 :</span> <span>Dk-4, JK Road, Bhopal 462016</span>
            </p>
            <p><span className="font-bold">
              Branch 3 </span>: <span>F-56, Kolar, Bhopal 462016</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="cursor-pointer w-12 font-semibold hover:border-b-2 hover:border-b-gray-600">Support</h2>

          <div >
            <p>Contact</p>
            <p>Login</p>
            <p>Membership</p>
            <p>My Account</p>
          </div>

        </div>
      </div>

      <div className="w-9/12 border-2 border-slate-200 mx-auto "></div>
    </div>

    
  );
};

export default Footer;
