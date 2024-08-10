import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="py-[10rem] px-4 w-full bg-white ">
      <div className=" max-w-[1240px]  mx-auto  grid md:grid-cols-3 gap-8  bg-white ">
        <div className="shadow-xl w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img src={Single} alt="/" className="w-20  mt-[-3rem] mx-auto" />
          <h1 className="py-8 text-2xl font-bold text-center ">Single User</h1>
          <h2 className="text-4xl font-bold text-center ">$149</h2>
          <div className="text-center font-medium">
            <p className="border-b py-2 mx-8 mt-8 ">500GB Storage</p>
            <p className="border-b py-2 mx-8 ">1 User Allowed</p>
            <p className="border-b py-2 mx-8 ">Send up to 2GB</p>
          </div>
          <button className=" bg-[#00df9a] my-6 w-[150px] mx-auto  rounded-md py-[10px] text-black font-bold hover:bg-gray-600 hover:text-[#00df9a] ">
            Start Trial
          </button>
        </div>

        <div className="shadow-xl w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-100">
          <img src={Double} alt="/" className="w-20 mt-[-3rem] mx-auto " />
          <h1 className="py-8 text-2xl font-bold text-center ">Partnership</h1>
          <h2 className="text-4xl font-bold text-center">$199</h2>
          <div className="text-center font-medium">
            <p className="border-b py-2 mx-8 mt-8 ">1TB Storage</p>
            <p className="border-b py-2 mx-8">3 Users Allowed</p>
            <p className="border-b py-2 mx-8">Send up to 10GB</p>
          </div>
          <button className=" text-[#00df9a] bg-black my-3 w-[150px] mx-auto py-[10px] rounded-md font-bold hover:text-black hover:bg-[#00df9a] ">
            Start Trial
          </button>
        </div>

        <div className="shadow-xl w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img src={Triple} alt="/" className=" w-20 mt-[-3rem] mx-auto" />
          <h1 className="py-8 text-2xl font-bold text-center">Group Account</h1>
          <h2 className="text-4xl font-bold text-center">$299</h2>
          <div className="text-center font-medium">
            <p className="border-b py-2 mx-8 mt-8">5TB Storage</p>
            <p className="border-b py-2 mx-8">10 Users Allowed</p>
            <p className="border-b py-2 mx-8">Send up to 20GB</p>
          </div>
          <button className=" bg-[#00df9a] my-6 w-[150px] mx-auto  rounded-md py-[10px] text-black font-bold hover:bg-gray-600 hover:text-[#00df9a]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
