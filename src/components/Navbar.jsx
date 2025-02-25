import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen flex flex-col md:flex-row items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold cursor-pointer hover:shadow-2xl">
        <p>GYM LOVER</p>
        <div className="w-16 border-2 border-yellow-500 mt-1"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-400 transition-all">Home</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-400 transition-all">About</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-400 transition-all">Diet Plan</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-gray-400 transition-all">Membership</p>
      </div>
    </nav>
  );
};

export default Navbar;
