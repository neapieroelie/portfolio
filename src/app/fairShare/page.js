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
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("data-section");
                    setActiveSection(sectionId);
                }
            });
        }, options);

        const sections = [overviewRef, issueRef, actionRef, howRef];
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
                        <Carousel images={projectImages} />
                    </div>
                    
                    {/* Text & Navigation */}
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
                            lg: lg:top-[65px]
                             w-full bg-[#fdfcfc] z-10 p-2 pt-9 flex justify-around description-text">
                            <button
                                onClick={() => scrollToSection(overviewRef)}
                                className={`${
                                    activeSection === "overview" ? "underline" : ""
                                } hover:underline`}
                            >
                                OVERVIEW
                            </button>
                            <button
                                onClick={() => scrollToSection(issueRef)}
                                className={`${
                                    activeSection === "issue" ? "underline" : ""
                                } hover:underline`}
                            >
                                ISSUE
                            </button>
                            <button
                                onClick={() => scrollToSection(actionRef)}
                                className={`${
                                    activeSection === "action" ? "underline" : ""
                                } hover:underline`}
                            >
                                ACTION
                            </button>
                            <button
                                onClick={() => scrollToSection(howRef)}
                                className={`${
                                    activeSection === "how" ? "underline " : ""
                                } hover:underline`}
                            >
                                HOW
                            </button>
                        </div>

                        {/* Sections */}
                        <div
                            ref={overviewRef}
                            data-section="overview"
                            className="
                                base: flex flex-col items-left justify-center snap-start gap-4
                                sm: h-[550px]
                                md: md:h-[400px]
                                lg: lg:h-dvh"
                        >
                            <Image
                                src="/FairShare_Logo.png"
                                width={200}
                                height={100}
                                alt="FairShare Logo"
                                className=""
                            />
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]
                            ">
                                FairShare is a mobile application designed to help make splitting bills among groups easier.
                                Users can simply scan receipts, split bills among friends, and even connect their bank accounts to the app, 
                                allowing for immediate transactions, all in one seamless platform.
                            </p>
                        </div>
                        <div
                            ref={issueRef}
                            data-section="issue"
                            className="
                                base: flex flex-col items-left justify-center snap-start gap-4
                                sm: h-[550px]
                                md: md:h-[400px]
                                lg: lg:h-dvh"
                        >
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]
                            ">
                            We found that many people struggle with managing shared expenses in group settings.
                            These include difficulties in calculating exact shares, ensuring everyone contributes fairly, and managing payments across different platforms.
                            <br/><br/>Through surveys and secondary research, we identified that these challenges were even more significant for younger adults and groups on a tight budget:
                            <li>
                            50% of respondents expressed discomfort with manually tracking shared expenses due to errors and time consumption.
                            </li>
                            <li>
                            7 out of 10 respondents stated they often forget to track or split bills, leading to misunderstandings or unpaid balances.
                            </li>
                            <br/>This inspired us to create FairShare, a solution designed to simplify and streamline the process of splitting bills, ensuring fair and transparent sharing of group expenses.
                            </p>
                        </div>
                        <div
                            ref={actionRef}
                            data-section="action"
                            className="
                                base: flex flex-col items-left justify-center snap-start gap-4
                                sm: h-[550px]
                                md: md:h-[400px]
                                lg: lg:h-dvh"
                        >
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]
                            ">
                            We identified a gap in resources for nurses to practice their interview skills, particularly those tailored to the immigrant community. 
                            
                            <br/><br/>To address this, we developed Onward, an application where nurses can:
                            <li>
                                Practice responses tailored to their job postings and resumes.
                            </li>
                            <li>
                                Use the Mock Interview feature, which replicates real interviews with randomized questions 
                                to test their readiness under realistic conditions.
                            </li>
                            <li>
                                Receive instant feedback analyzing clarity, relevance, and language use, 
                                with suggestions to improve answer structure, such as using the STAR method.
                            </li>
                            <br/>These features empower users to communicate more confidently and effectively, 
                            ensuring they are well-prepared for real-world interviews.
                            </p>
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
                            <p className="
                                base: font-plusJakartaSans text-gray-700 font-medium leading-normal tracking-tight
                                sm: text-[12px]
                                md: md:text-[14px]
                                lg: lg:text-[16px]"
                            >

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
