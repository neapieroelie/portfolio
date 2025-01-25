"use client"

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header"
import PageNotDone from "../components/PageNotDone"
import Image from "next/image"
import ProjectComponent from "../components/ProjectComponent"
import Footer from "../components/Footer"

export default function Projects() {
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
                <div className=" w-full h-dvh flex z-0 justify-center items-center snap-start ">
                    <div className=" 
                      base: grid gap-4
                      sm: grid-cols-1
                      md: md:grid-cols-2
                      lg: lg:grid-cols-2
                    ">
                        <ProjectComponent 
                            image="/onward_front.png"
                            number="1."
                            title="Onward Web App"
                            link="/onward"
                        />
                        <ProjectComponent 
                            image="/fairshare_front.png"
                            number="2."
                            title="FairShare App"
                            link="fairShare"
                        />
                        <ProjectComponent 
                            image="/safecycle_front.png"
                            number="3."
                            title="SafeCycle App"
                            link="#"
                        />
                    </div>
                </div>
                
                {/* Footer */}
                <div ref={footerRef}>
                    <Footer snapAlign="snap-center" />
                </div>
            </div>
        </>
    )
}