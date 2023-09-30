import React, { ReactNode } from "react";

const CircleBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:h-96 md:w-96 h-56 w-56 relative flex justify-center items-center">
      {/* Outer Circle */}
      <div className="w-full h-full absolute rounded-full border-t-4  border-b-4 border-red-500 transform rotate-0"></div>
      
      <div className="w-1/2 h-1/2 absolute rounded-full border-t-4  border-b-4 border-red-500 transform rotate-90"></div>

      {/* Middle Circle */}
      <div className="w-3/4 h-3/4 absolute rounded-full  border-t-4 border-b-4 border-red-500 transform rotate-45"></div>

      {/* Inner Circle */}
      <div className="w-2/2 h-1/2 absolute rounded-full  border-b-4 border-red-500 transform rotate-90"></div>


      {/* Content */}
      {children}
    </div>
  );
};

export default CircleBox;
