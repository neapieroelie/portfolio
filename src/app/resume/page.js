"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function Resume() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false); // Track zoom state
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleCloseModal = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
        {/* Header */}
        {!isFooterVisible && (
          <div className="fixed top-0 right-0 z-10 w-full">
            <Header />
          </div>
        )}

        {/* Main Content */}
        <div className="flex justify-center items-center content-center w-full min-h-screen bg-cover bg-center z-0 snap-start">
          {/* Thumbnail */}
          <div onClick={handleImageClick} className="cursor-zoom-in">
            <Image
              src="/NeaPieroelieResume2025.png"
              alt="My Resume"
              width={300}
              height={500}
              className="
                base: object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl
                md:w-[400px] md:h-[600px]
                lg:w-[400px] lg:h-[600px]"
            />
          </div>
        </div>

        {/* Modal for Zoomed Image */}
        {isZoomed && (
          <div
            className="fixed inset-0 bg-white flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="
                base: fixed text-black rounded-full transition z-50 font-instrument hover:text-neutral-500 transition delay-100
                sm: top-8 right-4 pr-3 text-2xl
                md: md:top-10 md:right-4 md:pr-10 md:text-4xl
                lg: lg:top-10 lg:right-4 lg:pr-10 lg:text-4xl"
              aria-label="Close"
            >
              X
            </button>

            {/* Zoomed Image */}
            <div
              className="relative w-full md:h-full lg:h-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/NeaPieroelieResume2025.png"
                alt="Zoomed Resume"
                width={1000}
                height={1400}
                className=" object-contain mx-auto "
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div ref={footerRef}>
          <Footer snapAlign="snap-center" />
        </div>
      </div>
    </>
  );
}
