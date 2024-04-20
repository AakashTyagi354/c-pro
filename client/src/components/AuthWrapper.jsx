import React from "react";
import image from "../assets/auth.svg";

const AuthWrapper = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col md:flex-row auth">
      <div className="hidden md:flex md:flex-1 justify-center items-center">
        <img
          src={image}
          alt="hero_image"
          className="w-5/6 h-auto  md:h-full object-contain"
        />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-fit h-fit md:h-auto rounded-md p-8 md:p-4 shadow-md bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
