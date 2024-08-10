import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className=" max-w-[1240px] grid  mx-auto md:grid-cols-2 ">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-xl ">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-3xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            architecto impedit consequuntur non repudiandae voluptates ex odit
            voluptate blanditiis dolor voluptas laboriosam, earum aliquid, odio
            inventore quasi eligendi voluptatem necessitatibus.
          </p>
          <button className=" text-[#00df9a] bg-black my-3 w-[200px] mx-auto md:mx-0  rounded-md py-2  font-bold hover:text-black hover:bg-[#00df9a] ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
