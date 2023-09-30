import React from "react";
import HeroImage from "../assets/hero/15740.png";
import Responsive from "../assets/hero/responsive.svg";
import ShoppingCard from "../assets/hero/shopping-cart.svg";
import Wordpress from "../assets/hero/wordpress-development-logo-banner.svg";
import Laptop from "../assets/hero/Laptop.png";
import Typography from "./shared/Typography";

const Hero = () => {
  return (
    <div className="h-screen relative">
      {/* Hero Image */}
      <img
        className="absolute inset-0 w-full h-[60%] object-cover"
        src={HeroImage}
        alt="hero image"
      />
      <div className="h-[60%] relative">
        {/* Opacity background */}
        <div className="absolute inset-0 bg-gray-600 opacity-60"></div>

        {/* Text and content */}
        <div className="absolute lg:mt-0 inset-0 flex flex-col items-center justify-center text-white">
          <Typography
            variant="title"
            className=" md:text-5xl text-center lg:text-6xl font-thin mb-4">
            TRIPPRO - AN ECOMMERCE SOLUTION
          </Typography>
          <Typography
            variant="description"
            className="w-[95%] md:w-[80%] text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Typography>
          <div className="flex justify-center mt-5 md:my-10 px-5">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-5 max-w-screen-xl">
              <div className="border-r grid md:grid-cols-2 gap-1 items-center">
                <div>
                  <Typography variant="title2">Built For:</Typography>
                </div>
                <img
                  src={Responsive}
                  className="w-10 md:w-16"
                  alt=""
                />
              </div>
              <div className="border-r grid md:grid-cols-2 gap-1 items-center">
                <div>
                  <Typography variant="description">Technologies:</Typography>
                  <Typography
                    variant="title2"
                    className="">
                    Wordpress
                  </Typography>
                </div>
                <img
                  src={Wordpress}
                  className="w-10 md:w-16"
                  alt=""
                />
              </div>
              <div className="border-b-0 grid md:grid-cols-2 gap-1 items-center">
                <div>
                  <Typography variant="description">Industry:</Typography>
                  <Typography variant="title2">Ecommerce</Typography>
                </div>
                <img
                  src={ShoppingCard}
                  className="w-10 md:w-16"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={Laptop}
          className="absolute w-[60%] md:w-[30%] bottom-[-100px] md:bottom-[-150px] left-1/2 transform -translate-x-1/2"
          alt="bottom image"
        />
      </div>
    </div>
  );
};

export default Hero;
