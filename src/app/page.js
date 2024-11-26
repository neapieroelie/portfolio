"use client";

import Image from "next/image";
import Header from "./components/Header";
import { useEffect } from 'react';

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="sticky top-[height_of_Header] z-0 flex flex-col justify-center items-center min-h-screen">
        <h1 className="font-instrument text-massive tracking-tighter leading-26">Nea Pieroelie</h1>
        <p className="font-instrument text-3xl">UI / UX Designer and Developer</p>
      </div>
    </div>
  );
}
