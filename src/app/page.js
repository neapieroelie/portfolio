"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/ProjectSection";

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
      <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
        {/* Header */}
        {!isFooterVisible && (
          <div className="fixed top-0 right-0 z-10 w-full">
            <Header />
          </div>
        )}

        {/* Main Content */}
        <div
          className="w-full min-h-screen bg-cover bg-center z-0 snap-start bg-pink-500"
          style={{
            backgroundImage: "url('/background.jpg')",
          }}
        >
          <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
            <h1 className="font-instrument text-humongous tracking-tighter leading-26 text-yellow-300	">
              Nea Kirana
            </h1>
            <p className="body-text">UI / çUX Designer</p>
          </div>
        </div>

        {/* Project Components */}
        <Project title="AI Powered Interview Coaching App" snapAlign="snap-center" text="text-right"/>
        
        {/* Footer */}
        <div ref={footerRef}>
          <Footer snapAlign="snap-center" />
        </div>
      </div>
    </>
  );
}
