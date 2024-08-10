import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="  w-full h-screen mx-auto text-center text-white flex flex-col justify-center items-center my-[-40px]  max-w-[800px]">
      <p className="text-2xl md: 3xl text-[#00df9a] font-bold my-2 ">
        GROWING WITH DATA ANALYTICS.
      </p>
      <p className="font-bold text-5xl md:text-7xl my-2">Grow with Data.</p>
      <div className="flex justify-center text-2xl py-2 font-bold">
        <p>Fast, flexible financing for</p>

        <ReactTyped
          className="mx-2 text-gray-400 "
          strings={["BTB.", "SAAS.", "BTC.", "ECOM."]}
          typeSpeed={110}
          backSpeed={120}
          loop
        />
      </div>
      <p className="font-bold text-xl text-gray-400 ">
        Monitor your analytics to increase revenue for BTB, SAAS, BTC and ECOM
        platforms.
      </p>
      <button className=" bg-[#00df9a] my-3 w-[200px] mx-auto rounded-md py-2 text-black font-bold hover:bg-gray-600 hover:text-[#00df9a] ">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
