import { useState } from "react";
import Logo from "../assets/visible-one-logo.png";
import {
  BiDownArrow,
  BiEnvelope,
  BiFile,
  BiLogoWhatsapp,
  BiPhone,
} from "react-icons/bi";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="z-50">
      <div className="bg-gray-50">
        <div className="md:flex justify-between py-1 px-8 md:px-16 items-center i">
          <div></div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center text-sm">
              <BiPhone className="text-blue-950" />
              6248 0838
            </div>
            <div className="flex items-center text-sm">
              <BiLogoWhatsapp className="text-blue-950" />
              8484 9948
            </div>
            <div className="flex items-center text-sm">
              <BiEnvelope className="text-blue-950" />
              info@visibleone.com
            </div>
            <button className="bg-green-500 w-24 border-[1px] h-[30px] rounded flex items-center justify-center px-2 py-1 text-white">
              <BiFile className="" />
              QUOTE
            </button>
            <button className="border-[1px] w-24 border-blue-500 h-[30px] rounded flex items-center justify-center px-2 py-1 text-blue-500">
              SG EN <BiDownArrow className="" />
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-white text-black py-2 px-8 md:px-16 sticky top-0 z-[100]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="/"
              className="text-xl font-bold">
              <img
                src={Logo}
                className="w-24"
                alt=""
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/home">Home</a>
            <a href="/services">Services</a>
            <a href="/company">Company</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className=" hover:text-blue-950 focus:outline-none focus:text-gray-300">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <a
              href="/home"
              className="block py-2">
              Home
            </a>
            <a
              href="/services"
              className="block py-2">
              Services
            </a>
            <a
              href="/company"
              className="block py-2">
              Company
            </a>
            <a
              href="/blog"
              className="block py-2">
              Blog
            </a>
            <a
              href="/contact"
              className="block py-2">
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
