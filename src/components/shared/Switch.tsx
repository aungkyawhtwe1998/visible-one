import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void; // Optional onClick function
}
const SwitchButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-l-indigo-50 border-2 bg-gradient-to-r uppercase my-3 from-blue-950 to-lime-950 hover:from-blue-950 hover:to-lime-950 text-white font-semibold py-2 px-4 rounded-full">
      {children}
    </button>
  );
};

export default SwitchButton;
