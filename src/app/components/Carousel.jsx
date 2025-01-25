import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Image Container */}
            <div className="flex justify-center items-center">
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    width={750}
                    height={300}
                    objectFit="contain"
                    className=""
                />
            </div>

        {/* Previous Button */}
        <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/15 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/15 text-white p-2 rounded-full hover:bg-black/25 transition"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
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
        <div className="absolute bottom-4 flex gap-2 transition delay-100">
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
