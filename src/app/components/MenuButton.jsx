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
                    className="body-text hover:text-neutral-800/[.06] transition delay-100"
                    onClick={toggleMenu}
                >
                    menu
                </button>
            </div>

            {/* Popup Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-neutral-800 flex flex-col items-center justify-center
                transform transition-transform duration-500 ${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="text-center flex flex-col title2-text text-neutral-100">
                    <Link href="/#">
                        <button
                            className="hover:text-[#FF2E8D] transition delay-50 hover:scale-110 "
                            onClick={toggleMenu}
                        >
                            Home
                        </button>
                    </Link>
                    <Link href="./projects">
                        <button
                            className="hover:text-[#FF2E8D] transition delay-50 hover:scale-110 "
                            onClick={toggleMenu}
                        >
                            Projects
                        </button>
                    </Link>
                    <Link href="./resume">
                        <button
                            className="hover:text-[#FF2E8D] transition delay-50 hover:scale-110"
                            onClick={toggleMenu}
                        >
                            Resume
                        </button>
                    </Link>
                    <Link href="./about-me">
                        <button
                            className="hover:text-[#FF2E8D] transition delay-50 hover:scale-110"
                            onClick={toggleMenu}
                        >
                            About me
                        </button>
                    </Link>
                </div>
                <button
                    className="font-instrument text-white absolute top-10 right-14 text-4xl hover:text-neutral-500 transition delay-100"
                    onClick={toggleMenu}
                >
                    x
                </button>
            </div>
        </>
    );
}