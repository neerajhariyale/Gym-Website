import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen flex items-center justify-around  ">
      <div className="h-6  font-bold text-xl cursor-pointer hover:shadow-2xl mt-5 mb-6">
        <p>GYM LOVER</p>
        <div className="w-16 border-2 border-yellow-500  "></div>
      </div>

      <div className="flex gap-6  mt-5 mb-6">
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-600">
          Home
        </p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-600">
          About
        </p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-600">
          Diet Plan
        </p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-600">
          Membership
        </p>
      </div>
    </div>
  );
};

export default Navbar;
