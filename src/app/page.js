"use client";

import Header from "./components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nea Kirana</title>
        <meta name="description" content="Nea Pieroelie's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>

        {/* Header */}
        <div className="fixed top-0 right-0 z-10">
          <Header />
        </div>

        {/* Main Content */}
        <div
          className=" w-full min-h-screen bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/background.jpg')",
          }}
        >
          <div className=" w-full h-screen flex flex-col justify-center items-center">
            <h1 className="font-instrument text-humongous tracking-tighter leading-26 text-white">
              Nea Kirana
            </h1>
            <p className="font-instrument text-white text-5xl">
              UI / UX Designer and Developer
            </p>
          </div>
        </div>

        {/* Project 1 */}
        <div className=" h-[575px] bg-slate-800 mx-[150px] my-[100px]  grid content-center justify-center ">
            <h1 className=" font-instrument text-[200px] tracking-tighter ">Project 1</h1>
        </div>
      </div>
    </>
  );
}
