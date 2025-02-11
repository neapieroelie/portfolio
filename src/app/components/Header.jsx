"use client";

import MenuButton from "./MenuButton";
import Image from "next/image";

export default function Header () {
    return (
        <>
            <div className="flex flex-row items-center justify-between w-screen h-[10vh] px-10 pt-4 pb-2 bg-[#fdfcfc]">
                {/* SVG Logo */}
                <div className="flex justify-start">
                    <a href="/">
                        <Image 
                            src="/logo_pink.svg" 
                            alt="Logo" 
                            width={56} 
                            height={56} 
                        />
                    </a>
                </div>

                <div>
                    <MenuButton />
                </div>
            </div>
        </>
    )
}
