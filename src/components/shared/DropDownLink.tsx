import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Typography from "./Typography";

interface DropdownProps {
  name: string;
  options: string[];
}

const DropdownLink: React.FC<DropdownProps> = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const dropdownRef = useRef(null);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative group"
      ref={dropdownRef}>
      <a
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer select-none flex items-center justify-center ${
          isOpen ? "text-blue-950" : ""
        }`}>
        <Typography variant="link">{name}</Typography>
        <BiChevronDown />
      </a>
      {isOpen && (
        <div className="absolute bg-white min-w-[150px] shadow-lg rounded-md pb-3 right-0 mt-2 space-y-2">
          {options.map((option, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 border-b-[1px] border-gray-100 hover:bg-gray-100">
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownLink;
