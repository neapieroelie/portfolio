"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function WalkingMonkey({ className }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/MonkeyWalking.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Lottie fetch error:", err));
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      className={className}
    />
  );
}
