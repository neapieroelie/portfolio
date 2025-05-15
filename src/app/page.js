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
          className="w-dvw h-screen z-0 snap-start relative "
        >
          {/* Title */}
          <div className="
            base: h-dvh w-dvw flex flex-col justify-center items-left gap-10
            sm: p-5
            md: md:p-10
            lg: lg:items-center
          ">
            <h1 className="
              font-instrument tracking-tight text-[#FF2E8D] text-left
              sm: text-10 leading-16
              md: md:text-medium md:leading-22
              lg: lg:text-large lg:leading-24
            ">
              Nea Kirana
            </h1>
            <p className="
              base: font-robotoCondensed tracking-tighter text-neutral-800
              sm: text-3xl text-left
              md: md:text-4xl
              lg: lg:text-4xl 
            ">UI / UX Product Designer based in Vancouver, BC</p>
          </div>
          <BouncingText title="Recent Projects"/>
          
        </div>


        {/* Project Components */}
        <Project
          image="/powerlifting_front.png"
          title="HSG Powerlifting Club"
          description="Website design and development for the University of St. Gallen’s Powerlifting Club."
          snapAlign="snap-center"
          text="text-right"
          width={900}
          height={100}
          bouncingText="Next Project"
          link="/powerlifting"
        />
        <Project
          image="/onward_front.png"
          title="Onward"
          description="AI Powered Interview Coaching App."
          snapAlign="snap-center"
          text="text-right"
          width={900}
          height={100}
          bouncingText="Next Project"
          link="/onward"
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
          link="/fairShare"
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
          link="/safecycle"
        />
        {/* Footer */}
        <div ref={footerRef}>
          <Footer snapAlign="snap-center" />
        </div>
      </div>
    </>
  );
}