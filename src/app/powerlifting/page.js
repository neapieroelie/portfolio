"use client";

import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Image from "next/image";

export default function PowerLifting() {
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
        "/powerlifting_mockup_4.png",
        "/powerlifting_mockup_2.png",
        "/powerlifting_mockup_3.png",
        "/powerlifting_mockup_1.png",
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
                            <a  href="https://powerlifting-club.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image 
                                src="/PowerliftingLogoTransparent.png" 
                                width={100} height={100} 
                                alt="Onward Logo"
                                className=""
                            />
                            </a>
                            <h1 className="
                                base: font-plusJakartaSans text-gray-700 font-bold leading-normal tracking-tight
                                sm: text-[16px]
                                md: md:text-[18px]
                                lg: lg:text-[24px]"
                            >The Situation</h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                The Powerlifting Club at the University of St. Gallen approached me to design and develop their first official website on a tight one-month timeline. 
                                Their goal was to promote a new 6-week strength training program and establish a central platform for events, partnerships, and future offerings. 
                                With no existing content, structure, or visual identity, I had the opportunity to apply my UI/UX skills to create a brand and website that reflects the club’s mission and values.
                            </p>
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
                                My Task
                            </h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                As the sole UI/UX designer on the project, I was responsible for:
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>Designing a fully responsive website that clearly communicates the club’s mission, services, and training programs.</li>
                                <li>Creating a user flow that leads students to register via the university’s external platform.</li>
                                <li>Designing scalable components for future use (e.g., expert-led workshops, competition previews).</li>
                                <li>Writing all content and ensuring the experience feels clear, motivating, and aligned with student expectations.</li>
                            </ol>
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
                                Action
                            </h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                To approach this challenge, I followed a user-centered design process:
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-semibold leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>Discovery & Research:</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>I conducted a competitive analysis of fitness websites to understand structure, tone, and best practices. 
                                            I also did user testing to test assumptions and get feedback on early design concepts.</li>
                                    </ul>
                                <li>Design & Development:</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>I designed the full UI with a clean and energetic visual system that reflects the club’s values. 
                                            I implemented the site in WordPress using Gutenberg and various plugins, which I learned during the project. 
                                            The layout is fully responsive and optimized for the mobile experience.</li>
                                    </ul>
                                <li>Client Collaboration:</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>I handled ongoing feedback loops with the club president, addressed changing requirements, and ultimately 
                                            recorded video tutorials for long-term content management.</li>
                                    </ul>
                            </ol>
                            <a  href="https://www.figma.com/design/i6TbSqtm1uPZjs8YwQ4Dwt/Power-Lifting-Club?node-id=1-3&t=z0DodYPI9Ftm1Uf2-1"
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
                                The Result
                            </h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                The HSG Powerlifting Club website established a clear, engaging digital presence that positioned the club as more than just a sports group. 
                                The project strengthened my UI/UX skills and confidence in leading a full design process from research to delivery.
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-semibold leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Delivered a fully functional, visually engaging WordPress website that now acts as the club’s digital home.</li>
                                    </ul>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>My design choices helped position the club not just as a sports group but as a wellness and 
                                            performance brand, opening doors to new sponsorships and long-term event planning.</li>
                                    </ul>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>I grew tremendously by navigating the full spectrum of a real-world client project. 
                                            From research and writing to design, development, and final delivery. It sharpened both my 
                                            UI/UX skills and my confidence as a problem-solver.
                                        </li>
                                    </ul>
                            </ol>
                            <a  href="https://powerlifting-club.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="
                                    base: font-plusJakartaSans text-blue-800 font-medium leading-normal tracking-tight hover:text-blue-400
                                    sm: text-[12px]
                                    md: md:text-[14px]
                                    lg: lg:text-[16px]"
                                >
                                    Powerlifting Club Website                  
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
