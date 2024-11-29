"use client";

import Header from "./components/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen">

      {/* Header */}
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center h-[655px]">
        <h1 className="font-instrument text-massive tracking-tighter top-3 leading-26 text-white">
          Nea Pieroelie
        </h1>
        <p className="font-instrument text-white text-5xl">
          UI / UX Designer and Developer
        </p>
      </div>
    </div>
  );
}

