"use client";

import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Image from "next/image";

export default function FairShare() {
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
        "/fairshare_mockup_1.png",
        "/fairshare_mockup_2.png",
        "/fairshare_mockup_3.png",
        "/fairshare_mockup_4.png",
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
                            <Image 
                                src="/FairShare_Logo.png" 
                                width={200} height={100} 
                                alt="Onward Logo"
                                className=""
                            />
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
                                Splitting bills among groups can be frustrating, leading to miscalculations, 
                                forgotten payments, and misunderstandings. Research showed:
                            </p>
                            <ul className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>50% of respondents disliked manually tracking shared expenses.</li>
                                <li>7 out of 10 often forgot to split bills, leading to unpaid balances.</li>
                            </ul>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                Seeing this problem, we created FairShare, a mobile app designed to automate bill splitting, 
                                receipt scanning, and seamless transactions for fair expense-sharing.
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
                                Our Goal
                            </h1>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                We aimed to build an app that:
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>Automates calculations using receipt scanning.</li>
                                <li>Simplifies group expense management with an easy-to-use interface.</li>
                                <li>Integrates bank accounts for seamless payments.</li>
                            </ol>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                As the UI/UX Designer & Researcher, I focused on ensuring FairShare was intuitive, 
                                visually appealing, and built around real user needs.
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
                                I played a key role in research, branding,
                                UI/UX design, and usability testing to create a seamless experience.                                
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-semibold leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>User Research:</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Conducted surveys, competitor analysis, and user persona development.</li>
                                    </ul>
                                <li>Branding & Visual Identity:</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Designed logo, typography, and color scheme for a consistent, user-friendly brand.</li>
                                    </ul>
                                <li>UI/UX Design & Prototyping</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Created wireframes and Figma prototypes, refining UI based on testing.</li>
                                    </ul>
                                <li>User Testing & Refinement</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Led usability testing, improving navigation, layout, and interactions.</li>
                                    </ul>
                            </ol>
                            <a  href="https://www.figma.com/design/y4C2ZD7Y70MTeOxgAzHxPA/FairShare-App?node-id=1-53147&t=RMLD1TQhOv4KQErW-1"
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
                                <ul className="
                                    base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                    sm: text-[12px]
                                    md: md:text-[14px]
                                    lg: lg:text-[16px]"
                                >
                                    <li>90% of testers found FairShare’s bill-splitting feature easy to use and preferred it over manual tracking.</li>
                                    <li>Improved expense tracking and payment flows for a more intuitive user experience.</li>
                                    <li>Ongoing Development – FairShare is evolving, with plans for an App Store launch to reach a wider audience.</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
