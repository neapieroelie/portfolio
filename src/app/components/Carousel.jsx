"use client";

import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images = [], currentIndex, setCurrentIndex }) {
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-auto lg:h-screen flex flex-col items-center justify-center gap-2">
        {/* Image Container */}
        <div className="flex justify-center items-center">
            <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                width={750}
                height={300}
                objectFit="contain"
            />
        </div>

        {/* Previous Button */}
        <button
            onClick={handlePrev}
            className="
            base: absolute top-1/2 -translate-y-1/2 bg-black/15 text-white p-2 rounded-full hover:bg-black/70 transition
            sm: left-2
            md: md:left-4
            lg: lg:left-12"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
            />
            </svg>
        </button>

        {/* Next Button */}
        <button
            onClick={handleNext}
            className="base: absolute top-1/2 -translate-y-1/2 bg-black/15 text-white p-2 rounded-full hover:bg-black/70 transition
            sm: right-2
            md: md:right-4
            lg: lg:right-12"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
            />
            </svg>
        </button>

        {/* Indicators */}
        <div className=" flex gap-2 transition delay-100">
            {images.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                index === currentIndex
                    ? "bg-black"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
            ></button>
             ))}
        </div>
    </div>
  );
}
