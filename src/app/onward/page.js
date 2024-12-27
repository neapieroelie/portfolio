"use client";

import Header from "../components/Header"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";


export default function Onward() {
    return (
        <>
            <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
                <div className="fixed top-0 right-0 z-10 w-full">
                    <Header />
                </div>
                <div className="h-dvh flex flex-col gap-6 px-36 py-36 bg-slate-50 justify-center snap-start">
                    <h1 className="onward-title-text">AI Powered Interview Coach for Immigrant Nurses</h1>
                    <p className="onward-body-text">
                        Onward is a web application tailored to immigrant nurses preparing for interviews in North America. It offers AI-driven mock interviews, tailored questions based on job application and resume, customization question sets, and insightful feedback to build confidence and bridge cultural language gaps.
                    </p>
                </div>
                <div className="h-dvh flex flex-col gap-6 px-36 py-36 bg-slate-50 justify-center snap-start">
                    <div className=" flex flex-row items-center gap-4">
                        <h1 className="onward-number-text">1</h1>
                        <h2 className="onward-h1-text">
                            Upload Resume + <br/>
                            Job Listing
                        </h2>
                    </div>
                    <div>
                        <Image 
                            src="/1_upload_resume_and_job_posting.png" 
                            alt="Project Image" 
                            width={952} 
                            height={448.88} 
                            className="object-contain border rounded-lg"
                        />
                    </div>
                </div>
                <div className="h-dvh flex flex-col gap-6 px-36 py-36 bg-slate-50 justify-center snap-start">
                    <div className=" flex flex-row items-center gap-4">
                        <h1 className="onward-number-text">2</h1>
                        <h2 className="onward-h1-text">
                            Receive Tailored <br/>
                            Interview Questions
                        </h2>
                    </div>
                    <div>
                        <Image 
                            src="/2_tailored_interview_questions.png" 
                            alt="Project Image" 
                            width={952} 
                            height={448.88} 
                            className="object-contain border rounded-lg"
                        />
                    </div>
                </div>
                <div className="h-dvh flex flex-col gap-6 px-36 py-36 bg-slate-50 justify-center snap-start">
                    <div className=" flex flex-row items-center gap-4">
                        <h1 className="onward-number-text">3</h1>
                        <h2 className="onward-h1-text">
                            Pactice with <br/>
                            Text or Speech
                        </h2>
                    </div>
                    <div>
                        <Image 
                            src="/3_text_or_speech.png" 
                            alt="Project Image" 
                            width={952} 
                            height={448.88} 
                            className="object-contain border rounded-lg"
                        />
                    </div>
                </div>
                <div className="h-dvh flex flex-col gap-6 px-36 py-36 bg-slate-50 justify-center snap-start">
                    <div className=" flex flex-row items-center gap-4">
                        <h1 className="onward-number-text">4</h1>
                        <h2 className="onward-h1-text">
                            Instant <br/>
                            Feedback
                        </h2>
                    </div>
                    <div>
                        <Image 
                            src="/4_instant_feedback.png" 
                            alt="Project Image" 
                            width={952} 
                            height={448.88} 
                            className="object-contain border rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}