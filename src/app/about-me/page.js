"use client";

import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import WalkingMonkey from "../components/WalkingMonkey";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function AboutMe() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  const nameRef = useRef(null);
  const controls = useAnimation();

  const [direction, setDirection] = useState(1);
  const [distance, setDistance] = useState(0);
  const [isWalking, setIsWalking] = useState(true); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!nameRef.current) return;
    const nameWidth = nameRef.current.offsetWidth;
    setDistance(nameWidth);
  }, []);

  useEffect(() => {
    if (distance === 0) return;

    const run = async () => {
      await controls.start({
        x: direction === 1 ? distance : 0,
        transition: { duration: 5, ease: "easeInOut" },
      });
      setIsWalking(false);
    };

    run();
  }, [direction, distance]);

  const handleClick = () => {
    if (isWalking) return;
    setIsWalking(true);
    setDirection((prev) => prev * -1);
  };

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Header */}
      {!isFooterVisible && (
        <div className="fixed top-0 right-0 z-10 w-full">
          <Header />
        </div>
      )}

      {/* Main Section */}
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
            {/* Monkey walking above the name */}
            <div className="relative w-fit self-end mb-2">
              <motion.div
                className="absolute bottom-full translate-y-[-0.75rem] cursor-pointer"
                animate={controls}
                style={{ scaleX: direction }}
                onClick={handleClick}
              >
                {isWalking ? (
                  <WalkingMonkey className="w-16 h-16" />
                ) : (
                  <Image
                    src="/monkeysitlogo.svg"
                    alt="Standing Monkey"
                    width={50}
                    height={50}
                  />
                )}
              </motion.div>

              <h1
                ref={nameRef}
                className="title3-text text-[#FF2E8D] whitespace-nowrap"
              >
                Nea Kirana
              </h1>
            </div>

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
