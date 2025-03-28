"use client";

import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MonkeyComponent = dynamic(() => import("../components/MonkeyComponent"), {
    ssr: false,
  });

export default function AboutMe() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  // Detect footer to hide header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Header */}
      {!isFooterVisible && (
        <div className="fixed top-0 right-0 z-10 w-full">
          <Header />
        </div>
      )}

      {/* Main Content */}
      <div className="w-full min-h-screen flex z-0 justify-center items-center snap-start">
        <div className="flex flex-row h-[600px] gap-[25px]">
          <Image
            src="/neamonkey.JPG"
            alt="Project Image"
            width={450}
            height={600}
            className="object-contain"
            priority
          />

          <div className="flex flex-col justify-end h-full relative">
            <MonkeyComponent />

            <p className="body-text w-[400px] self-end">
              Hello! I am an Indonesian UI/UX Product Designer with a unique blend of skills in graphic design, user experience, and product development.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div ref={footerRef} className="w-full snap-center">
        <Footer />
      </div>
    </div>
  );
}
