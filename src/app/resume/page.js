"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function Resume() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
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
        <div className="flex justify-center content-center w-full min-h-screen bg-cover bg-center z-0 snap-start">
            <Image 
              src="/resume.png" 
              alt="My Resume" 
              width={500} 
              height={900} 
              className="object-contain transition-transform duration-300 hover:scale-125 drop-shadow-2xl"
            />
        </div>

        {/* Footer */}
        <div ref={footerRef}>
          <Footer snapAlign="snap-center" />
        </div>
      </div>
    </>
  );
}
