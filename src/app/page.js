"use client";

import Header from "./components/Header";

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

        {/* Project 1 */}
        <div className="h-[575px] bg-slate-800 mx-[150px] my-[100px] grid content-center justify-center snap-start">
          <h1 className="font-instrument text-[200px] tracking-tighter text-white">
            Project 1
          </h1>
        </div>
      </div>
    </>
  );
}
