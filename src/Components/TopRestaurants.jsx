import React, { useRef } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Custom arrow component for the carousel
const CustomArrow = ({ onClick, direction }) => {
  const baseClasses =
    "custom-arrow absolute top-1/2 transform -translate-y-1/2 p-2 bg-[#282c3f] opacity-30 text-white rounded-full cursor-pointer hover:bg-gray-800 shadow-lg";
  const directionClass =
    direction === "next" ? "right-6 -top-10" : "right-16 -top-10"; // Adjust for absolute positioning
  return (
    <div className={`${baseClasses} ${directionClass}`} onClick={onClick}>
      <span className="text-xl">
        {direction === "next" ? <GoArrowRight className="" /> : <GoArrowLeft />}
      </span>
    </div>
  );
};

const TopRestaurants = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />, // Move forward
    prevArrow: <CustomArrow direction="prev" />, // Move backward
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Horizontal scroll with mouse wheel
  const handleWheel = (e) => {
    e.preventDefault();
    if (sliderRef.current) {
      if (e.deltaY > 0) {
        sliderRef.current.slickNext(); // Move forward
      } else {
        sliderRef.current.slickPrev(); // Move backward
      }
    }
  };

  return (
    <div
    className="relative"
    onWheel={handleWheel} // Attach the wheel event listener
  >
    {data && data.length > 0 ? (
      <Slider
        ref={sliderRef}
        {...settings}
        className=" " // Add gap between the cards
      >
        {data.map((item) => (
          <div key={item.info.id} className=""> {/* Add padding for spacing */}
         
            <Card
              name={item.info.name}
              rating={item.info.avgRating}
              img={item.info.cloudinaryImageId}
              cuisines={item.info.cuisines}
              area={item.info.areaName}
              time={item.info.sla.slaString}
              id={item.info.id}
            />
          </div>
        ))}
      </Slider>
    ) : (
      <p className="text-center text-gray-500">No restaurants available.</p>
    )}
  </div>
);
};

export default TopRestaurants;
