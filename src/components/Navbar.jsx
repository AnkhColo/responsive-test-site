import { React, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="bg-black text-[#00df9a]  w-full text-xl font-bold">
        REACT.
      </h1>
      <ul className="md:flex hidden">
        <li className="mx-2">Home</li>
        <li className="mx-2">Company</li>
        <li className="mx-2">Resources</li>
        <li className="mx-2">About</li>
        <li className="mx-2">Contact</li>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <ul
        className={
          nav
            ? "fixed top-[18px] left-0 w-[60%] h-full md:hidden uppercase border-r border-gray-900 bg-[#000300]  ease-in-out duration-500"
            : " ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="bg-black text-[#00df9a] m-4  w-full text-xl font-bold">
          REACT.
        </h1>
        <li className="py-10 ml-4 border-b-2 border-gray-600">Home</li>
        <li className="py-10 ml-4 border-b-2 border-gray-600">Company</li>
        <li className="py-10 ml-4 border-b-2 border-gray-600">Resources</li>
        <li className="py-10 ml-4 border-b-2 border-gray-600">About</li>
        <li className="py-10 ml-4 border-b-2 border-gray-600">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
