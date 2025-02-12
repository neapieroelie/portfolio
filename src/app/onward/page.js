"use client";

import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Image from "next/image";

export default function Onward() {
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
        "/onward_mockup_1.png",
        "/onward_mockup_2.png",
        "/onward_mockup_3.png",
        "/onward_mockup_4.png",
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
                                src="/onwardLogo.png" 
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
                                We built Onward from the ground up to address the cultural and language barriers, biases against international 
                                qualifications, and interview anxiety immigrant nurses face when transitioniing into North American job market. Research revealed:
                            </p>
                            <ul className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>44% of internationally educated healthcare workers are overqualified but often overlooked.</li>
                                <li>Over 25% of immigrants experience severe interview anxiety, limiting their ability to showcase their skills.</li>
                            </ul>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                Recognizing this gap, we created Onward to provide realistic mock interviews, AI-driven feedback, and structured practice 
                                tools tailored to healthcare professionals.
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
                                To create a product that help immigrant nurses overcome job market challenges through:
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>Equipping immigrant nurses with the tools needed to practice and refine their interview skills</li>
                                <li>Simulating real-world conditions to help nurses gain confidence and familiarity</li>
                                <li>Providing structured, actionable feedback to improve their responses.</li>
                            </ol>
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                As the UI/UX designer, I was responsible for ensuring the app was visually engaging, highly usable, 
                                and research-driven to support our mission.
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
                                To achieve these goals, I contributed in the following key areas:                                
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-semibold leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>Branding and Visual Identity:</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Designed the logo, typography, and color schemes to define Onwards unique visual identity.</li>
                                    </ul>
                                <li>User research & Problem Identification</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li> Conducted interviews, surveys, and competitor analysis to identify user pain points and map their job-seeking journey</li>
                                    </ul>
                                <li>Wireframing, Prototyping & User Testing</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Created low-fidelity wireframes and high-fidelity Figma prototypes, refining UX through iterative testing.</li>
                                        <li>Ran user testing sessions, iterated based on feedback, and refines the final UI for better engagement.</li>
                                    </ul>
                                <li>Marketing & Outreach</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Designed social media assets and a short promotional video to showcase Onward.</li>
                                    </ul>
                            </ol>
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
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                Onward successfully addressed a critical gap for immigrant nurses through thoughtful research, 
                                design, and usability testing. Key outcomes included:
                            </p>
                            <ol className="
                                base: font-plusJakartaSans text-gray-700 font-semibold leading-normal tracking-tight list-decimal list-outside pl-6
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >
                                <li>Positive user feedback:</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>During usability testing, 85% of participants reported that Onward’s mock interview feature helped them feel more prepared.</li>
                                    </ul>
                                <li>Effective Design Iterations</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Based on the testing results, we refined our UI and improved user flow, making the platform more intuitive and engaging.</li>
                                    </ul>
                                <li>Successful Presentation and Recognition</li>
                                    <ul className="
                                        base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight list-disc list-outside pl-4
                                        sm: text-[12px]
                                        md: md:text-[14px]
                                        lg: lg:text-[16px]"
                                    >
                                        <li>Our project was well-received during our final presentation, with the stakeholders highlighting 
                                            the strong foundation, thoughtful UX design, and potential real-world impact.</li>
                                    </ul>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
