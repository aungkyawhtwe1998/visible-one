import Imac from "../assets/problems/desktop/imac.png";
import Iphone from "../assets/problems/phone/iphone.png";
import Button from "./shared/Button";
import ProblemListItem, { ListItemProp } from "./shared/ProblemlistItem";
import Desk1 from "../assets/problems/desktop/trippro.com.hk_cn_.png";
import Desk2 from "../assets/problems/desktop/trippro.com.hk_cn_2.png";
import Phone1 from "../assets/problems/phone/trippro.com.hk_iPhone_X.png";
import Phone2 from "../assets/problems/phone/trippro.com.hk_iPhone_X2.png";
import Phone3 from "../assets/problems/phone/trippro.com.hk_iPhone_X3.png";
import Phone4 from "../assets/problems/phone/trippro.com.hk_iPhone_X4.png";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const slideDataDesktop = [
  {
    id: 1,
    image: Desk1,
  },
  {
    id: 2,
    image: Desk2,
  },
];

const slideDataMobile = [
  {
    id: 1,
    image: Phone1,
  },
  {
    id: 2,
    image: Phone2,
  },
  {
    id: 3,
    image: Phone3,
  },
  {
    id: 4,
    image: Phone4,
  },
];

const data: ListItemProp[] = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  },
];

const Problems = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (isDesktop) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideDataDesktop.length - 1 ? 0 : prevSlide + 1
      );
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideDataMobile.length - 1 ? 0 : prevSlide + 1
      );
    }
  };

  const prevSlide = () => {
    if (isDesktop) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slideDataDesktop.length - 1 : prevSlide - 1
      );
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slideDataMobile.length - 1 : prevSlide - 1
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="md:relative md:mt-0 mt-40 flex flex-col lg:relative lg:justify-center lg:items-end justify-center items-center my-5">
        {/* left side panel */}
        {/* desktop or phone condition */}
        {isDesktop ? (
          <div className=" w-[40%] md:w-[35%] lg:w-[37%] lg:absolute justify-end lg:left-[80px] md:left-[10px]">
            <div className="relative">
              <img
                src={Imac}
                className="w-full h-full"
                alt=""
              />
              <div className="absolute top-1 left-1 md:top-2 md:left-2 lg:left-3 lg:top-3 lg:w-[95%] md:w-[95%] w-[95%]">
                <img
                  src={slideDataDesktop[currentSlide].image}
                  alt="Slide"
                  className="w-max h-full rounded-sm"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className=" lg:w-[15%] md:w-[20%] w-[20%] lg:absolute justify-end top-[-5px] lg:left-[320px] md:left-[80px]">
            <div className="relative">
              <img
                src={Iphone}
                className=""
                alt=""
              />
              <div className="absolute left-2 top-5 w-[85%] h-[78%] md:top-10 lg:top-10 md:left-2 lg:w-[91%] lg:h-[79%] md:w-[90%] md:h-[78%]">
                <img
                  src={slideDataMobile[currentSlide].image}
                  alt="Slide"
                  className="w-max h-full rounded-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* desktop or phone condition */}

        {/* right side  panel */}
        <div className="md:w-[100%] px-5 lg:w-[75%] md:pl-5 lg:pl-72 py-8 md:pr-16 lg:pr-16 md:float-right lg:float-right bg-gradient-to-r from-lime-950 to-blue-950 text-white flex flex-col justify-center items-start">
          <div className="mb-5">
            <span className="text-xl md:text-3xl">
              Their Old Website & Problems
            </span>
          </div>

          {/* list items */}
          <div className="">
            {data.map((item) => (
              <ProblemListItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
          {/* end list items */}

          {/* control buttons */}
          <div className="flex z-50">
            <button
              className="mr-2"
              onClick={prevSlide}>
              <BiChevronLeft className="text-4xl" />
            </button>
            <button
              className=""
              onClick={nextSlide}>
              <BiChevronRight className="text-4xl" />
            </button>
          </div>
          {/* end control buttons */}

          {/* toggle button */}
          <div className="z-50">
            <Button
              onClick={() => {
                setCurrentSlide(0);
                setIsDesktop(!isDesktop);
              }}
              text={isDesktop ? "Desktop" : "Mobile"}
            />
          </div>
          {/* end toggle buttons */}
        </div>
      </div>
    </div>
  );
};

export default Problems;
