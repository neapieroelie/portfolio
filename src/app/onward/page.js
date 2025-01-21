"use client";

import { useRef } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Image from "next/image";

export default function SnappingPage() {
    const appRef = useRef(null);
    const problemRef = useRef(null);
    const solutionRef = useRef(null);
    const designRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const projectImages = [
        "/1_upload_resume_and_job_posting.png",
        "/2_tailored_interview_questions.png",
        "/3_text_or_speech.png",
        "/4_instant_feedback.png",
    ];

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
                                onClick={() => scrollToSection(appRef)}
                                className="hover:underline"
                            >
                                SITUATION
                            </button>
                            <button
                                onClick={() => scrollToSection(problemRef)}
                                className="hover:underline"
                            >
                                TASK
                            </button>
                            <button
                                onClick={() => scrollToSection(solutionRef)}
                                className="hover:underline"
                            >
                                ACTION
                            </button>
                            <button
                                onClick={() => scrollToSection(designRef)}
                                className="hover:underline"
                            >
                                RESULT
                            </button>
                        </div>

                        {/* Sections */}
                        <div
                            ref={appRef}
                            className="h-screen flex flex-col items-left justify-center snap-start gap-4"
                        >
                            <Image src="/onwardLogo.png" width={200} height={100} alt="Onward Logo" className="mx-7"/>
                            <p className="mx-7 onward-body-text">Onward is an AI-powered web application designed to support immigrant nurses who are new to North America’s healthcare industry. 
                                It addresses cultural and language gaps while helping users build their confidence. 
                                With Onward, nurses can prepare for interviews through realistic mock interview simulations tailored to the healthcare sector, 
                                receive comprehensive feedback, and review past sessions to refine their responses and enhance their skills.
                            </p>
                        </div>
                        <div
                            ref={problemRef}
                            className="h-screen flex items-center justify-center snap-start"
                        >
                            <h1 className="text-4xl font-bold">Problem Section</h1>
                        </div>
                        <div
                            ref={solutionRef}
                            className="h-screen flex items-center justify-center snap-start"
                        >
                            <h1 className="text-4xl font-bold">Solution Section</h1>
                        </div>
                        <div
                            ref={designRef}
                            className="h-screen flex items-center justify-center snap-start"
                        >
                            <h1 className="text-4xl font-bold">Design Section</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
