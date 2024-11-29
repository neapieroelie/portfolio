"use client";

import Header from "./components/Header";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/monkeh.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <h1 className="font-instrument text-massive tracking-tighter leading-26">
          Nea Pieroelie
        </h1>
        <p className="font-instrument text-3xl">
          UI / UX Designer and Developer
        </p>
      </div>
    </div>
  );
}
