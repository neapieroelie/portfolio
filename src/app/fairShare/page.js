"use client";

import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Image from "next/image";

export default function SnappingPage() {
    const overviewRef = useRef(null);
    const issueRef = useRef(null);
    const actionRef = useRef(null);
    const howRef = useRef(null);

    const [activeSection, setActiveSection] = useState("overview");

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const projectImages = [
        "/1_upload_resume_and_job_posting.png",
        "/2_tailored_interview_questions.png",
        "/3_text_or_speech.png",
        "/4_instant_feedback.png",
    ];

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // Trigger when 60% of the section is visible
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
                <div className="fixed top-0 right-0 z-20 w-full">
                    <Header />
                </div>

                {/* Main Content */}
                <div className="w-full h-screen z-0 flex overflow-hidden">
                    {/* Carousel */}
                    <Carousel images={projectImages} />

                    {/* Right Side (Text + Navigation) */}
                    <div className="w-2/3 h-screen overflow-y-auto snap-y snap-mandatory relative">
                        {/* Navigation */}
                        <div className="sticky top-[64px] w-full bg-[#fdfcfc] z-10 p-2 pt-9 flex justify-around description-text">
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
                            className="h-screen flex flex-col items-left justify-center snap-start gap-4"
                        >
                            <Image
                                src="/onwardLogo.png"
                                width={200}
                                height={100}
                                alt="Onward Logo"
                                className="mx-7"
                            />
                            <p className="mx-7 onward-body-text">
                                Onward is an AI-powered web application designed to support immigrant nurses who are new to North America’s healthcare industry.
                                It addresses cultural and language gaps while helping users build their confidence. With Onward, nurses can prepare for interviews
                                through realistic mock interview simulations tailored to the healthcare sector, receive comprehensive feedback, and review past
                                sessions to refine their responses and enhance their skills.
                            </p>
                        </div>
                        <div
                            ref={issueRef}
                            data-section="issue"
                            className="h-screen flex flex-col items-left justify-center snap-start gap-4"
                        >
                            <p className="mx-7 onward-body-text">
                            We chose to focus on immigrants because many of our team members, either personally or through family and friends, understand the challenges they face when transitioning to a new professional environment. These include cultural and language barriers, biases against international qualifications, and the emotional strain of starting over.
                            <br/><br/>Through surveys and secondary research, we found these challenges were especially pronounced in healthcare:
                            <li>
                                44% of internationally educated healthcare workers are overqualified but often overlooked.
                            </li>
                            <li>
                                Over 25% of immigrants experience severe interview anxiety, limiting their ability to showcase their skills.
                            </li>
                            <br/>This inspired us to create a solution tailored to immigrant nurses' needs, helping them overcome these barriers.
                            </p>
                        </div>
                        <div
                            ref={actionRef}
                            data-section="action"
                            className="h-screen flex flex-col items-left justify-center snap-start gap-4"
                        >
                            <p className="mx-7 onward-body-text">
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
                            className="h-screen flex items-center justify-center snap-start"
                        >
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
