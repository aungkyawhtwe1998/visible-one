import React from "react";
import CircleBox from "./shared/CircleBox";
import Tablet from "../assets/about/Tablet.png";
import Button from "./shared/Button";
import Typography from "./shared/Typography";

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="container flex flex-col md:flex-row justify-between items-center my-5">
        <div className="md:w-1/2 flex flex-col justify-center items-start">
          <div>
            <Typography variant="title" className="inline-block">ABOUT</Typography>
            {/* <span className="text-3xl md:text-6xl">ABOUT</span> */}
            <Typography variant="title" className="text-lime-950 inline"> TRIPPRO</Typography>
          </div>
          <div className="border-t w-2/4 md:w-1/4 border-2 border-blue-950 my-4" ></div>
          <Typography variant="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita
          </Typography>
          <Button text="tour to website" />
        </div>
        <div className="md:w-1/2 flex justify-end items-center">
          <CircleBox>
            <img
              src={Tablet}
              className="w-2/3 z-10"
              alt=""
            />
          </CircleBox>
        </div>
      </div>
    </div>
  );
};

export default About;
