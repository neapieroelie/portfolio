"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const projects = [
  {
    id: "tennisBC",
    title: "Tennis BC",
    description: "Shirt mockups for the Community Tennis League program by Tennis BC",
    images: ["/tennisbcmockup1.png", "/tennisbcmockup2.png", "/tennisbcmockup3.png", "/tennisbcmockup4.png"],
  },
  {
    id: "bakedByMartini",
    title: "Baked by Martini",
    description: "PriceLists and promotional materials for Baked by Martini",
    images: ["/bakedbymartini1.png", "/bakedbymartini2.png", "/bakedbymartini3.png", "/bakedbymartini4.png", "/bakedbymartini5.png", "/bakedbymartini6.png", "/bakedbymartini7.png", "/bakedbymartini9.png", "/bakedbymartini8.png", ],
  },
  {
    id: "tenaga",
    title: "Tenaga",
    description: "Beverage can mockups for a Project in BCIT.",
    images: ["/Tenaga_04.jpg", "/Tenaga_01.png", "/Tenaga_02.png", "/Tenaga_03.png"],
  },
];

export default function GraphicDesignPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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
          {/* Left Sidebar */}
          <div className="
            base: w-1/4 h-dvh p-5 pt-[100px] font-instrument font-medium tracking-normal leading-6 text-neutral-800
            sm: text-xl
            md: md:text-3xl
            lg: lg:text-3xl   
          ">
            <h1>2023 - 2025</h1>
            <ul className="space-y-1">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={`p-2 cursor-pointer rounded-md ${
                    selectedProject.id === project.id ? "text-[#FF2E8D]" : "hover:text-gray-100 transition delay-50"
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Project Content */}
          <div className="
            base: w-3/4 ml-1/4 p-5 overflow-y-auto h-full
            sm: 
            md: 
            lg: ">
            <h1 className="text-2xl font-bold mb-4">{selectedProject.title}</h1>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedProject.images.map((src, index) => (
                <Image key={index} src={src} alt={`Project ${index}`} width={550} height={300} className="" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div ref={footerRef}>
          <Footer snapAlign="snap-center" />
        </div>
      </div>
    </>
  );
}
