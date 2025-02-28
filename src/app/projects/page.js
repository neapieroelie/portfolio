"use client"

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header"
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
                <div className=" 
                  base: w-full flex z-0 justify-center items-center snap-start
                  sm: h-auto
                  md: md:h-dvh 
                  lg: lg:h-dvh
                ">
                    <div className=" 
                      base: grid gap-1 px-5 pt-[6rem]
                      sm: grid-cols-1
                      md: md:grid-cols-2 md:gap-3 md:pt-0
                      lg: lg:grid-cols-2 lg:gap-4 lg:pt-0
                    ">
                        <ProjectComponent 
                            image="/onward_front.png"
                            title="Onward Web App"
                            link="/onward"
                        />
                        <ProjectComponent 
                            image="/fairshare_front.png"
                            title="FairShare App"
                            link="fairShare"
                        />
                        <ProjectComponent 
                            image="/safecycle_front.png"
                            title="SafeCycle App"
                            link="safecycle"
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