import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="mx-auto max-w-[1240px] grid lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl ">
            Want tips and tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
          <div className="md:flex flex-col sm:flex-row  justify-between   w-full">
            <input
              className="w-[250px] rounded-md my-2 py-[10px] px-2 mx-2"
              placeholder="Enter your email"
              type="email"
            />
            <button className=" bg-[#00df9a] my-3 w-[150px]  rounded-md py-[10px] text-black font-bold hover:bg-gray-600 hover:text-[#00df9a] ">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our
            <span className="text-[#00df9a] hover:underline mx-2 ">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
