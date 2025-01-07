"use client";

import Header from "../components/Header"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import OnwardMainFeatures from "../components/OnwardMainFeatures";
import MainFeatureCarousel from "../components/MainFeatureCarousel";

export default function Onward() {
    return (
        <>
            <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
                <div className="fixed top-0 right-0 z-10 w-full">
                    <Header />
                </div>
                <div className="h-dvh flex flex-col gap-6 px-36 py-36 bg-slate-50 justify-center snap-start">
                    <Image 
                        src="/onwardLogo.png"
                        alt="Project Image" 
                        width={252} 
                        height={58.96} />
                    <h1 className="onward-title-text">AI Powered Interview Coach for Immigrant Nurses</h1>
                    <p className="onward-body-text">
                        Onward is a web application tailored to immigrant nurses preparing for interviews in North America. It offers AI-driven mock interviews, tailored questions based on job application and resume, customization question sets, and insightful feedback to build confidence and bridge cultural language gaps.
                    </p>
                </div>
                <div>
                    <OnwardMainFeatures 
                         number="1"
                         title="Upload Resume +"
                         titleLineTwo="Job Listing"
                         image="/1_upload_resume_and_job_posting.png"
                    />
                    <OnwardMainFeatures 
                         number="2"
                         title="Receive Tailored"
                         titleLineTwo="Interview Questions"
                         image="/2_tailored_interview_questions.png"
                    />
                    <OnwardMainFeatures 
                         number="3"
                         title="Pactice with"
                         titleLineTwo="Text or Speech"
                         image="/3_text_or_speech.png"
                    />
                    <OnwardMainFeatures 
                         number="4"
                         title="Instant"
                         titleLineTwo="Feedback"
                         image="/4_instant_feedback.png"
                    />
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}