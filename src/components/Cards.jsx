import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="py-[10rem] px-4 w-full bg-white ">
      <div className=" max-w-[1240px] mx-auto  flex flex-col-3 justify-between bg-white ">
        <div className="shadow-md border-[3px] border-gray-300 items-center justify-center text-center">
          <img src={Single} alt="/" className="w-20" />
          <h1>Single User</h1>
          <h2>$149</h2>
          <p>500GB Storage</p>
          <p>1 User Allowed</p>
          <p>Send up to 2GB</p>
          <button className=" bg-[#00df9a] my-3 w-[150px]  rounded-md py-[10px] text-black font-bold hover:bg-gray-600 hover:text-[#00df9a] ">
            Start Trial
          </button>
        </div>
        <div>
          <img src={Double} alt="/" className="w-20" />
          <h1>Partnership</h1>
          <h2>$199</h2>
          <p>1TB Storage</p>
          <p>3 User Allowed</p>
          <p>Send up to 10GB</p>
          <button className=" text-[#00df9a] bg-black my-3 w-[150px] mx-auto md:mx-0  rounded-md py-2  font-bold hover:text-black hover:bg-[#00df9a] ">
            Start Trial
          </button>
        </div>
        <div>
          <img src={Triple} alt="/" className="w-20" />
          <h1>Group Account</h1>
          <h2>$299</h2>
          <p>5TB Storage</p>
          <p>10 User Allowed</p>
          <p>Send up to 20GB</p>
          <button className=" bg-[#00df9a] my-3 w-[150px]  rounded-md py-[10px] text-black font-bold hover:bg-gray-600 hover:text-[#00df9a] ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
