import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
export default function Siddbar() {
  return (
    <div className="min-h-screen w-[200px] border-r border-gray-300 bg-blue-600">
      <div className="flex flex-col gap-4 ">
        <div className="w-[90%] mx-auto  justify-center flex items-center border-b border-white h-[60px]">
          <p className="text-3xl text-white ">ADDI</p>
        </div>
        <button className=" w-full  mx-auto h-[45px] flex gap-2 justify-start items-center pl-6  text-white hover:text-opacity-80 ">
          <MdSpaceDashboard size={25} />
          Dashboard
        </button>
        <button className=" w-full  mx-auto h-[45px] flex gap-2 justify-start items-center pl-6 text-white hover:text-opacity-80 ">
          <MdOutlineLogout size={25} />
          Logout
        </button>
      </div>
    </div>
  );
}
