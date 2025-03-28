"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import Image from "next/image";

export default function Header () {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between w-screen h-[10vh] px-10 pt-4 pb-2 bg-[#fdfcfc]">
      
      {/* Logo with hover image swap */}
      <div className="flex justify-start">
        <a
          href="/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`relative transition-all duration-300 ${
              isHovered ? "w-16 h-16" : "w-16 h-16"
            }`}
          >
            <Image
              src={isHovered ? "/monkeystandlogo.svg" : "/logo_pink.svg"}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </a>
      </div>

      {/* Menu */}
      <div>
        <MenuButton />
      </div>
    </div>
  );
}
