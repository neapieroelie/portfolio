"use client"

import Header from "../components/Header"
import PageNotDone from "../components/PageNotDone"
import Image from "next/image"

export default function AboutMe() {
    return (
        <>
            <div className="fixed top-0 right-0 z-10 w-full">
                <Header />
            </div>
            <div className=" w-full h-dvh flex z-0 justify-center items-center">
                <div className=" flex flex-row h-[600px] gap-[25px]">
                    <Image 
                        src="/portfolio_about_us.jpg" 
                        alt="Project Image" 
                        width={450} 
                        height={600} 
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-end h-full ">
                        <h1 className="title3-text text-yellow-300">Nea Kirana</h1>
                        <p className="body-text w-[400px] self-end">
                            Hello! I am an Indonesian UI/UX Product Designer with a unique blend of skills in graphic design, user experience, and product development.
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}