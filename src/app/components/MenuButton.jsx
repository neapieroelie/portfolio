import React, { useState } from "react";
import Link from "next/link";

export default function MenuButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Menu button */}
            <div className="flex">
                <button
                    className="font-robotoCondensed text-4xl tracking-tighter text-white hover:text-yellow-300 transition delay-100"
                    onClick={toggleMenu}
                >
                    menu
                </button>
            </div>

            {/* Popup Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-yellow-300 flex flex-col items-center justify-center
                transform transition-transform duration-500 ${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="text-center flex flex-col font-instrument tracking-tighter text-blue-600 text-11 leading-19">
                    <Link href="./pages/projects">
                        <button
                            className="hover:text-red-600 transition delay-100 hover:scale-110 "
                            onClick={toggleMenu}
                        >
                            Projects
                        </button>
                    </Link>
                    <Link href="./pages/resume">
                        <button
                            className="hover:text-red-600 transition delay-100 hover:scale-110"
                            onClick={toggleMenu}
                        >
                            Resume
                        </button>
                    </Link>
                    <Link href="./pages/about-me">
                        <button
                            className="hover:text-red-600 transition delay-100 hover:scale-110"
                            onClick={toggleMenu}
                        >
                            About me
                        </button>
                    </Link>
                </div>
                <button
                    className="font-instrument absolute top-10 right-14 text-4xl hover:text-red-600 transition delay-100"
                    onClick={toggleMenu}
                >
                    x
                </button>
            </div>
        </>
    );
}