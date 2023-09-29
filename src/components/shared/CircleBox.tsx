import React, { ReactNode } from "react";

const CircleBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-96 w-96 relative flex justify-center items-center">
      {/* Outer Circle */}
      <div className="w-full h-full absolute rounded-full border-t-4  border-b-4 border-custom-red transform rotate-0"></div>
      
      <div className="w-1/2 h-1/2 absolute rounded-full border-t-4  border-b-4 border-custom-red transform rotate-90"></div>

      {/* Middle Circle */}
      <div className="w-3/4 h-3/4 absolute rounded-full  border-t-4 border-b-4 border-custom-red transform rotate-45"></div>

      {/* Inner Circle */}
      <div className="w-2/2 h-1/2 absolute rounded-full  border-b-4 border-custom-red transform rotate-90"></div>


      {/* Content */}
      {children}
    </div>
  );
};

export default CircleBox;
