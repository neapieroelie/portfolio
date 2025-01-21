"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/ProjectSection";
import BouncingText from "./components/BouncingText";


export default function Home() {
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
      <div className="w-full h-dvh overflow-y-auto snap-y snap-mandatory">

        {/* Header */}
        {!isFooterVisible && (
          <div className="fixed top-0 right-0 z-10 w-full">
            <Header />
          </div>
        )}

        {/* Main Content */}
        <div
          className="w-full h-screen bg-cover bg-center z-0 snap-start relative"
        >
          {/* Title */}
          <div className="h-screen flex flex-col justify-center items-center gap-10">
            <h1 className="font-instrument text-large tracking-tight leading-22 text-[#FF2E8D]">
              Nea Kirana
            </h1>
            <p className="body-text">UI / UX Product Designer based in Vancouver, BC</p>
          </div>
          <BouncingText title="Recent Projects"/>
          
        </div>


        {/* Project Components */}
        <Project
          image="/onward_front.png"
          title="Onward"
          description="AI Powered Interview Coaching App."
          snapAlign="snap-center"
          text="text-right"
          width={900}
          height={100}
          bouncingText="Next Project"
        />
        <Project
          image="/fairshare_front.png"
          title="FairShare"
          description="Split billing app for tracking and settling group expenses."
          snapAlign="snap-center"
          text="text-right"
          width={900}
          height={100}
          bouncingText="Next Project"
        />
        <Project
          image="/safecycle_front.png"
          title="SafeCycle"
          description="A cyclist app for navigation, tracking, and safety."
          snapAlign="snap-center"
          text="text-right"
          width={900}
          height={100}
          bouncingText="Next Project"
        />
        {/* Footer */}
        <div ref={footerRef}>
          <Footer snapAlign="snap-center" />
        </div>
      </div>
    </>
  );
}