import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="border-l-indigo-50 border-2 bg-gradient-to-r uppercase my-3 from-blue-500 to-lime-500 hover:from-blue-700 hover:to-lime-700 text-white font-semibold py-2 px-4 rounded-full">
      {children}
    </button>
  );
};

export default Button;
