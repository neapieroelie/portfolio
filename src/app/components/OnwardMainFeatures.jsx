"use client";

import Image from "next/image";

export default function OnwardMainFeatures ({ number, title, titleLineTwo, image}) {
    return (
        <>
            <div className="h-dvh flex flex-col gap-6 px-36 py-36 bg-slate-50 justify-center items-center snap-start">
                <div className=" flex flex-row items-center gap-4 w-[952px]">
                    <h1 className="onward-number-text">{number}</h1>
                    <h2 className="onward-h1-text">
                        {title} <br/>
                        {titleLineTwo}
                    </h2>
                </div>
                <div className=" w-[952px] ">
                    <Image 
                        src={image}
                        alt="Project Image" 
                        width={952} 
                        height={448.88} 
                        className="object-contain border rounded-lg"
                    />
                </div>
            </div>
        </>
    )
}