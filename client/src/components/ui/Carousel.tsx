"use client";
// import Image from "next/image";
import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import React from "react";
import slide1 from "../../assets/herosection.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
export const CarouselUi: React.FC = () => {
  return (
    <Carousel
      indicatorsType="ring"
      indicatorsTypeColors="slate"
      indicators={true}
      showControls={true}
      leftControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineLeft size={20} weight="bold" color="white" />
        </span>
      }
      rightControl={
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
          <ArrowLineRight size={20} weight="bold" color="white" />
        </span>
      }
    >
      <div className="bg-red-500 pb-2/3 relative">
        {" "}
        <img
          src={slide1}
          alt="slider-1"
          className="absolute object-cover h-full w-full  "
        />
      </div>
      <div className="bg-red-500 pb-2/3 relative">
        {" "}
        <img
          src={slide4}
          alt="slider-2"
          className="absolute object-cover h-full w-full  "
        />
      </div>
      <div className="bg-red-500 pb-2/3 relative">
        <img
          src={slide2}
          alt="slider-3"
          className="absolute object-cover h-full w-full  "
        />
      </div>
      <div className="bg-red-500 pb-2/3 relative">
        <img
          src={slide3}
          alt="slider-4"
          className="absolute object-cover h-full w-full  "
        />
      </div>
    </Carousel>
  );
};
