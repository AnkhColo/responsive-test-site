import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] grid lg:grid-cols-3 gap-8 text-gray-300 py-16 px-4 mx-auto ">
      <div>
        <h1 className=" text-[#00df9a] w-full text-3xl font-bold">REACT.</h1>
        <p className="py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
          adipisci itaque. Provident autem vitae recusandae, ratione facilis
          beatae odit voluptatem similique ab.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h1 className=" text-gray-400 font-medium ">Solutions</h1>
          <ul>
            <li className=" py-2 text-sm ">Ananlytics</li>
            <li className=" py-2 text-sm ">Marketing</li>
            <li className=" py-2 text-sm ">Commerce</li>
            <li className=" py-2 text-sm ">Insights</li>
          </ul>
        </div>

        <div>
          <h1 className=" text-gray-400 font-medium ">Support</h1>
          <ul>
            <li className=" py-2 text-sm  ">Pricing</li>
            <li className=" py-2 text-sm ">Documentation</li>
            <li className=" py-2 text-sm ">Guides</li>
            <li className=" py-2 text-sm ">API Status</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-gray-400 font-medium ">Company</h1>
          <ul>
            <li className=" py-2 text-sm ">About</li>
            <li className=" py-2 text-sm ">Blog</li>
            <li className=" py-2 text-sm ">Jobs</li>
            <li className=" py-2 text-sm ">Press</li>
            <li className=" py-2 text-sm ">Partners</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-gray-400 font-medium ">Legal</h1>
          <ul>
            <li className=" py-2 text-sm ">Claim</li>
            <li className=" py-2 text-sm ">Privacy</li>
            <li className=" py-2 text-sm ">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
