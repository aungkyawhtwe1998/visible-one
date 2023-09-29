import React from "react";
import HeroImage from "../assets/hero/15740.png";
import Responsive from "../assets/hero/responsive.svg";
import ShoppingCard from "../assets/hero/shopping-cart.svg";
import Wordpress from "../assets/hero/wordpress-development-logo-banner.svg";
import Laptop from "../assets/hero/Laptop.png";

const Hero = () => {
  return (
    <div className="h-screen relative">
      {/* Hero Image */}
      <img
        className="absolute inset-0 w-full h-[70%] md:h-[60%] object-cover"
        src={HeroImage}
        alt="hero image"
      />
      <div className="h-[70%] md:h-[60%] relative">
        {/* Opacity background */}
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>

        {/* Text and content */}
        <div className="absolute mt-10 lg:mt-0 inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-thin mb-4">
            TRIPPRO - AN ECOMMERCE SOLUTION
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-thin w-[80%] text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <div className="flex justify-center my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl">
              <div className="border-b md:border-b-0 pb-2 md:border-r grid grid-cols-2 gap-1 items-end">
                <div>
                  <p>Built For:</p>
                </div>
                <img
                  src={Responsive}
                  className="w-50"
                  alt=""
                />
              </div>
              <div className="border-b md:border-b-0 pb-2 md:border-r grid grid-cols-2 gap-1 items-end">
                <div>
                  <p>Technologies:</p>
                  <p>Wordpress</p>
                </div>
                <img
                  src={Wordpress}
                  className="w-50"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-2 gap-1 items-end">
                <div>
                  <p>Industry:</p>
                  <p>Ecommerce</p>
                </div>
                <img
                  src={ShoppingCard}
                  className="w-50"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={Laptop}
          className="absolute w-[60%] md:w-[30%] bottom-[-150px] left-1/2 transform -translate-x-1/2"
          alt="bottom image"
        />
      </div>
    </div>
  );
};

export default Hero;
