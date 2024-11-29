import React, { useState } from "react";

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
                    className="font-instrument text-4xl tracking-tighter hover:text-yellow-300 transition delay-100"
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
                <div className="flex flex-col font-instrument text-blue-600 text-11 leading-19 space-y-4">
                    <button className="hover:text-red-600 transition delay-150">Projects</button>
                    <button className="hover:text-red-600 transition delay-150">Resume</button>
                    <button className="hover:text-red-600 transition delay-150">About me</button>
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
