"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import WalkingMonkey from "./WalkingMonkey";
import Image from "next/image";

export default function MonkeyComponent() {
  const nameRef = useRef(null);
  const controls = useAnimation();

  const [direction, setDirection] = useState(1);
  const [distance, setDistance] = useState(0);
  const [isWalking, setIsWalking] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !nameRef.current) return;
    setDistance(nameRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    if (distance === 0) return;

    const run = async () => {
      await controls.start({
        x: direction === 1 ? distance : 0,
        transition: { duration: 4, ease: "easeInOut" },
      });
      setIsWalking(false);
    };

    run();
  }, [direction, distance]);

  const handleClick = () => {
    if (isWalking) return;
    setIsWalking(true);
    setDirection((prev) => prev * -1);
  };

  return (
    <div className="relative w-fit self-end mb-2">
      <motion.div
        className="absolute bottom-full translate-y-[-0.75rem] cursor-pointer"
        animate={controls}
        style={{ scaleX: direction }}
        onClick={handleClick}
      >
        {isWalking ? (
          <WalkingMonkey className="w-16 h-16" />
        ) : (
          <Image
            src="/monkeysitlogo.svg"
            alt="Sitting Monkey"
            width={50}
            height={50}
          />
        )}
      </motion.div>

      <h1
        ref={nameRef}
        className="title3-text text-[#FF2E8D] whitespace-nowrap"
      >
        Nea Kirana
      </h1>
    </div>
  );
}
