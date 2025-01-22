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
              src="/resume_updated_2025.png"
              alt="My Resume"
              width={400}
              height={600}
              className="object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
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
              className="fixed top-10 right-4 pr-10 text-black rounded-full p-2 transition z-50 font-instrument text-4xl hover:text-neutral-500 transition delay-100"
              aria-label="Close"
            >
              X
            </button>

            {/* Zoomed Image */}
            <div
              className="relative w-full h-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/resume_updated_2025.png"
                alt="Zoomed Resume"
                width={1000}
                height={1400}
                className="object-contain mx-auto"
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
