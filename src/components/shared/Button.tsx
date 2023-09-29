import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional onClick function
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-l-indigo-50 border-[1px] bg-gradient-to-r uppercase my-3 from-blue-950 to-lime-950 hover:from-blue-950 hover:to-lime-950 text-white font-semibold py-2 px-4 rounded-full">
      {text}
    </button>
  );
};

export default Button;
