import React from "react";
import Menu from "../Menu/Menu";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
           <Link href="/">
            <i className="fa-solid fa-house-chimney text-xl"/>
            </Link>
          </div>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <i className="fa-solid fa-right-from-bracket  text-xl" />
          </div>
        </aside>
        <div className="w-full h-full flex flex-col justify-between">
          <header className="h-16 w-full flex items-center relative justify-between px-5 space-x-10 bg-gray-800">
            <h1 className=" font-bold text-white"> Developed By Zarak Khan</h1>
            <div className="flex flex-shrink-0 items-center space-x-4 text-white">
              <div className="flex flex-col items-end ">
                <div className="text-md font-medium ">Unknow Unknow</div>
                <div className="text-sm font-regular">Student</div>
              </div>
              <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400" />
            </div>
          </header>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
