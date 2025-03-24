"use client";

import Header from "../components/Header";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import WalkingMonkey from "../components/WalkingMonkey";

export default function AboutMe() {
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
                <div className="w-full min-h-screen flex z-0 justify-center items-center snap-start">
                    <div className="flex flex-row h-[600px] gap-[25px]">
                        <Image 
                            src="/neamonkey.jpg" 
                            alt="Project Image" 
                            width={450} 
                            height={600} 
                            className="object-contain"
                        />
                        <div className="flex flex-col justify-end h-full">
                            <h1 className="title3-text text-[#FF2E8D]">Nea Kirana</h1>
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
        </>
    );
}
