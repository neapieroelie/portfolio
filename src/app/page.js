"use client";

import Header from "./components/Header";
import Project from "./components/ProjectPage";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
        {/* Header */}
        <div className="fixed top-0 right-0 z-10 w-full">
          <Header />
        </div>

        {/* Main Content */}
        <div
          className="w-full min-h-screen bg-cover bg-center z-0 snap-start"
          style={{
            backgroundImage: "url('/background.jpg')",
          }}
        >
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="font-instrument text-humongous tracking-tighter leading-26 text-white">
              Nea Kirana
            </h1>
            <p className="font-instrument text-white text-5xl">
              UI / UX Designer and Developer
            </p>
          </div>
        </div>

        {/* Project Components */}
        <Project title="Project 1" snapAlign="snap-center" />
        <Project title="Project 2" snapAlign="snap-center" />
      </div>
    </>
  );
}
