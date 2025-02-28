"use client";

import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Image from "next/image";

export default function SafeCycle() {
    const overviewRef = useRef(null);
    const issueRef = useRef(null);
    const actionRef = useRef(null);
    const howRef = useRef(null);

    const [activeSection, setActiveSection] = useState("overview");
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastSectionRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const projectImages = [
        "/safecycle_mockup_1.png",
        "/safecycle_mockup_2.png",
        "/safecycle_mockup_3.png",
        "/safecycle_mockup_4.png",
    ];

    useEffect(() => {
        const sections = [overviewRef, issueRef, actionRef, howRef];

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("data-section");

                    if (lastSectionRef.current !== sectionId) {
                        lastSectionRef.current = sectionId;
                        setActiveSection(sectionId);
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
                    }
                }
            });
        }, options);

        sections.forEach((section) => {
            if (section.current) observer.observe(section.current);
        });

        return () => {
            sections.forEach((section) => {
                if (section.current) observer.unobserve(section.current);
            });
        };
    }, []);

    return (
        <>
            <div className="w-full h-dvh overflow-y-auto">
                {/* Header */}
                <div className="fixed z-10"> 
                    <Header />
                </div>

                {/* Main Content */}
                <div className="
                    base: relative w-full h-screen flex p-5 z-0
                    sm: flex-col 
                    md: flex-col
                    lg: lg:flex-row overflow-hidden
                ">
                    {/* Carousel */}
                    <div className="
                        base: relative w-full h-auto 
                        sm: mt-[70px]
                        md: md:mt-[85px]
                        lg: lg:mt-0
                    ">
                        <Carousel images={projectImages} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                    </div>

                    {/* Sections */}
                    <div className="
                        base: overflow-y-auto snap-y snap-mandatory relative
                        sm: w-full h-auto
                        md: 
                        lg: lg:w-2/3 lg:h-screen 
                    ">
                        {/* Navigation */}
                        <div className="
                            base: sticky top-0
                            sm:
                            md: md:top-0
                            lg: lg:top-[50px]
                            w-full bg-[#fdfcfc] z-10 p-2 pt-9 flex justify-around description-text">
                            <button
                                onClick={() => scrollToSection(overviewRef)}
                                className={`${activeSection === "overview" ? "underline" : ""} hover:underline`}
                            >
                                SITUATION
                            </button>
                            <button
                                onClick={() => scrollToSection(issueRef)}
                                className={`${activeSection === "issue" ? "underline" : ""} hover:underline`}
                            >
                                TASK
                            </button>
                            <button
                                onClick={() => scrollToSection(actionRef)}
                                className={`${activeSection === "action" ? "underline" : ""} hover:underline`}
                            >
                                ACTION
                            </button>
                            <button
                                onClick={() => scrollToSection(howRef)}
                                className={`${activeSection === "how" ? "underline" : ""} hover:underline`}
                            >
                                RESULT
                            </button>
                        </div>

                        {/* Sections */}
                        <div 
                            ref={overviewRef}
                            data-section="overview"
                            className="
                                base: flex flex-col items-left justify-center snap-start gap-4 p-5 text-justify
                                sm: h-[550px]
                                md: md:h-[400px]
                                lg: lg:h-dvh"
                        >
                            <a  href="https://safecycle.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer">
                            <Image 
                                src="/safecycleLogo.png" 
                                width={200} height={100} 
                                alt="Onward Logo"
                                className=""
                            />
                            </a>
                            <h1 className="
                                base: font-plusJakartaSans text-gray-700 font-bold leading-normal tracking-tight
                                sm: text-[16px]
                                md: md:text-[18px]
                                lg: lg:text-[24px]"
                            >The Challenge</h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                Urban cyclists face random hazards, navigation difficulties, 
                                and safety concerns when riding in cities. SafeCycle was designed to:
                            </p>
                            <ul className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>Track cyclists’ progress in real-time.</li>
                                <li>Provide hazard alerts for safer navigation.</li>
                                <li>Offer cycling-friendly routes with integrated mapping.</li>
                            </ul>
                        </div>
                        <div 
                            ref={issueRef}
                            data-section="issue"
                            className="
                            base: flex flex-col items-left justify-center snap-start gap-4 p-5 text-justify
                            sm: h-[550px]
                            md: md:h-[400px]
                            lg: lg:h-dvh"
                        >
                            <h1 className="
                                base: font-plusJakartaSans text-gray-700 font-bold leading-normal tracking-tight
                                sm: text-[16px]
                                md: md:text-[18px]
                                lg: lg:text-[24px]"
                            >
                                Our Goal
                            </h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                Our mission was to create a safety-focused mapping app for cyclists and pedestrians by integrating 
                                real-time tracking, hazard detection, and navigation features.
                                <br/><br/>As the UI/UX Designer & Developer, I worked on both designing and coding the application, 
                                bridging the gap between user experience and functionality.
                            </p>
                        </div>
                        <div 
                            ref={actionRef} 
                            data-section="action" 
                            className="
                                base: flex flex-col items-left justify-center snap-start gap-4 p-5 text-justify
                                sm: h-[550px]
                                md: md:h-[400px]
                                lg: lg:h-dvh"
                            >
                            <h1 className="
                                base: font-plusJakartaSans text-gray-700 font-bold leading-normal tracking-tight
                                sm: text-[16px]
                                md: md:text-[18px]
                                lg: lg:text-[24px]"
                            >
                                My Role
                            </h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                I played a crucial role in designing, coding, and problem-solving throughout the project.                   
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-semibold leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>UI/UX Design & Branding</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Designed a cohesive brand identity, style guide, and UI components for a clean, intuitive experience.</li>
                                    </ul>
                                <li>Wireframing & Prototyping</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Created low/high-fidelity Figma prototypes, refining based on user feedback.</li>
                                    </ul>
                                <li>Front-End Development</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Developed app functionalities using JavaScript, translating designs into responsive code.</li>
                                    </ul>
                                <li>API Integration</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Integrated Google Maps API for real-time navigation and cyclist tracking.</li>
                                    </ul>
                            </ol>
                            <a  href="https://www.figma.com/design/h4Dn238BRq5EfY9PE55fLc/SafeCycle-App?node-id=4-42&t=10KQywqNpZTu4ULh-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="
                                    base: font-plusJakartaSans text-blue-800 font-medium leading-normal tracking-tight hover:text-blue-400
                                    sm: text-[12px]
                                    md: md:text-[14px]
                                    lg: lg:text-[16px]"
                                >
                                    Figma Link                   
                                </p>
                            </a>
                            
                        </div>
                        <div 
                            ref={howRef} 
                            data-section="how" 
                            className="
                                base: flex flex-col items-left justify-center snap-start gap-4 
                                sm: h-[550px]
                                md: md:h-[400px]
                                lg: lg:h-dvh"
                        >
                            <h1 className="
                                base: font-plusJakartaSans text-gray-700 font-bold leading-normal tracking-tight
                                sm: text-[16px]
                                md: md:text-[18px]
                                lg: lg:text-[24px]"
                            >
                                The Impact
                            </h1>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>I got to learn how to adapt UI/UX designs to real-world development constraints and timelines..</li>
                                <li>Gained hands-on experience in APIs, animations, and debugging complex issues.</li>
                                <li>The final product was mostly static, as the API couldn’t fully support our intended features.</li>
                            </ol>
                            <a  href="https://safecycle.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="
                                    base: font-plusJakartaSans text-blue-800 font-medium leading-normal tracking-tight hover:text-blue-400
                                    sm: text-[12px]
                                    md: md:text-[14px]
                                    lg: lg:text-[16px]"
                                >
                                    SafeCycle App Demo                  
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
