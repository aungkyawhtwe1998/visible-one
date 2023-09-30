import { useState } from "react";
import Logo from "../assets/visible-one-logo.png";
import {
  BiChevronDown,
  BiDownArrow,
  BiEnvelope,
  BiFile,
  BiLogoWhatsapp,
  BiPhone,
  BiSearch,
} from "react-icons/bi";
import Typography from "./shared/Typography";
import DropdownLink from "./shared/DropDownLink";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-50">
      <div className="bg-gray-100">
        <div className="flex justify-between py-1 px-5 md:px-16 items-center">
          <div className=""></div>
          <div className="md:flex md:justify-center md:items-center gap-1 md:gap-2">
            {/* Contact Information */}
            <div className="flex justify-center md:justify-end gap-1">
              <div className="flex items-center text-sm">
                <BiPhone className="text-blue-950" />
                <Typography
                  variant="link"
                  className="whitespace-nowrap">
                  6248 0838
                </Typography>
              </div>
              <div className="flex items-center text-sm">
                <BiLogoWhatsapp className="text-blue-950" />
                <Typography
                  variant="link"
                  className="whitespace-nowrap">
                  8484 9948
                </Typography>
              </div>
            </div>

            <div className="flex gap-1 justify-center md:justify-end">
              <div className="flex items-center text-sm">
                <BiEnvelope className="text-blue-950" />
                <Typography variant="link">info@visibleone.com</Typography>
              </div>
              {/* Quote Button */}
              <button className="bg-lime-950 md:w-24 border-[1px] md:border-0 h-[25px] rounded flex items-center justify-center px-2 py-1 text-white">
                <BiFile className="" />
                <Typography variant="link"> QUOTE</Typography>
              </button>

              {/* Language Dropdown */}
              <button className="border-[1px] md:w-24 border-blue-950 h-[25px] rounded flex items-center justify-center px-2 py-1 text-blue-950">
                <Typography
                  variant="link"
                  className="whitespace-nowrap">
                  SG EN
                </Typography>{" "}
                <BiDownArrow className="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-2 px-8 md:px-16 sticky top-0 z-[100]">
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
            <a href="/">
              <Typography variant="link">Home</Typography>
            </a>
            <div>
              <DropdownLink
                name="Service"
                options={["Website", "Mobile"]}
              />
            </div>
            <a href="/">
              <Typography variant="link">Company</Typography>
            </a>
            <a href="/">
              <Typography variant="link">Blog</Typography>
            </a>
            
            <div>
              <DropdownLink
                name="Contact Us"
                options={["SG Office", "HK Office"]}
              />
            </div>
            <a href="/">
              <button>
                <BiSearch />
              </button>
            </a>
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
              <Typography variant="link">Home</Typography>
            </a>
            <a
              href="/services"
              className="block py-2">
              <Typography variant="link">Services</Typography>
            </a>
            <a
              href="/company"
              className="block py-2">
              <Typography variant="link">Company</Typography>
            </a>
            <a
              href="/blog"
              className="block py-2">
              <Typography variant="link">Blog</Typography>
            </a>
            <a
              href="/contact"
              className="block py-2">
              <Typography variant="link">Contact Us</Typography>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
