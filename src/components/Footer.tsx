import React from "react";
import backgroundImage from "../assets/footer/sg-night.jpeg"; // Import your background image
import ShopifyLogo from "../assets/footer/shopify-white.webp";
import PaypalLogo from "../assets/footer/paypal.png";
import AdwordsLogo from "../assets/footer/adwords.png";
import GoogleAnalyticLogo from "../assets/footer/google-analytics.png";
import TrustedLogo from "../assets/footer/truested.png";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiMessage,
  BiMessageAltAdd,
  BiSolidMessageRounded,
  BiArrowToTop,
  BiChevronUp,
} from "react-icons/bi";

const Footer = () => {
  return (
      <footer className="relative h-full md:px-0 bg-gray-950 text-white">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute opacity-30 w-full h-full object-cover"
        />

        <div className="container mx-auto px-5 md:px-0 relative pt-5 pb-5 z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className=" p-4 ">
              <h3 className="text-lg font-semibold mb-2 uppercase">
                Quick Link
              </h3>
              <ul className="list-disc leading-relaxed">
                <li className="">Services</li>
                <li className="">About Us</li>
                <li className="">Blog</li>
                <li className="">Quotation</li>
                <li className="">Partnership</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className=" p-4 ">
              <h3 className="text-lg font-semibold mb-2 uppercase">
                Our Services
              </h3>
              <ul className="list-disc leading-relaxed">
                <li className="">Web Development</li>
                <li className="">Web Design</li>
                <li className="">Responsive Website Design</li>
                <li className="">CMS Website Design</li>
                <li className="">Custom Website Design</li>
                <li className="">UI & UX Website Design</li>
                <li>360 Virtual Tour</li>
              </ul>
            </div>

            <div className=" p-4 ">
              <h3 className="text-lg font-semibold h-8"></h3>
              <ul className="list-disc leading-relaxed">
                <li className="">Ecommerce Development</li>
                <li className="">WooCommerce Development</li>
                <li className="">osCommerce Development</li>
                <li className="">Magento Development</li>
                <li className="">Big Commerce Development</li>
                <li>SSL Certificate</li>
                <li>Promotion Video</li>
              </ul>
            </div>

            <div className=" p-4 ">
              <h3 className="text-lg font-semibold mb-2 uppercase">
                Visible One Singapore
              </h3>
              <ul className="leading-relaxed">
                <li className="">+65 6248 0838</li>
                <li className="mb-3">info@visibleone.com</li>
                <li className="">
                  24 Sin Ming Lane Midview City #07-93, singapore 573970
                </li>
                <li className="">Office Hour: Mon-Fri(9am-6pm)</li>
                <li className="">
                  <div className="grid-cols-2 my-3">
                    <button className="bg-blue-400 text-sm hover:bg-blue-500 hover:text-white p-3 m-1">
                      Contact Us
                    </button>
                    <button className="text-blue-400 text-sm hover:bg-blue-500 hover:text-white p-3 m-1">
                      Contact HK Office
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 pb-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-5 justify-end items-end">
              <img
                src={ShopifyLogo}
                className="w-full"
                alt=""
              />
              <img
                src={PaypalLogo}
                alt=""
                className="w-[50%]"
              />
              <img
                src={AdwordsLogo}
                alt=""
                className="w-[50%]"
              />
              <img
                src={GoogleAnalyticLogo}
                alt=""
                className="w-[50%]"
              />
              <img
                src={TrustedLogo}
                alt=""
                className="w-[50%]"
              />
            </div>
            <div className="w-[100%] mt-5 md:mt-0 px-5 md:px-0">
              <p className="text-sm">
                Subscribe to our news, tips and guidlines
              </p>
              <input
                type="text"
                className="bg-transparent p-2 border-[1.5px] min-w-[70%] mr-3 h-[45px] border-white"
              />
              <button className="bg-blue-400 hover:bg-blue-500 min-w-[18%] hover:text-white p-2 h-[45px]">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="border-t border-gray-300 my-5"></div>

          <div className="text-center flex flex-col justify-center items-center">
            <div className="grid grid-cols-4 gap-4">
              <BiLogoFacebook className="text-4xl" />
              <BiLogoTwitter className="text-4xl" />
              <BiLogoInstagram className="text-4xl" />
              <BiLogoLinkedin className="text-4xl" />
            </div>
            <ul className="list-disc flex space-x-4 text-sm">
              <li className="list-none">Shopping T&C</li>
              <li className="">Terms & Conditions</li>
              <li className="">Privacy Policy</li>
              <li className="">© {new Date().getFullYear()} Visible One</li>
            </ul>
          </div>

          <button className="bg-gray-300 opacity-40 w-10 flex shadow-md justify-center items-center h-10 right-5 bottom-20 fixed rounded-full">
            <BiChevronUp className="text-3xl text-black" />
          </button>

          <button className="bg-lime-400 w-14 flex shadow-md justify-center items-center h-14 right-2 bottom-2 fixed rounded-full">
            <BiSolidMessageRounded className="text-4xl" />
          </button>
        </div>
      </footer>
  );
};

export default Footer;
