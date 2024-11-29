"use client";

import Header from "./components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nea Pieroelie</title>
        <meta name="description" content="Nea Pieroelies Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Wrapper with Background Image */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpg')", // Replace with your image path
        }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10">
          <Header />
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col justify-center items-center h-[655px]">
          <h1 className="font-instrument text-massive tracking-tighter leading-26 text-white">
            Nea Pieroelie
          </h1>
          <p className="font-instrument text-white text-5xl">
            UI / UX Designer and Developer
          </p>
        </div>
      </div>
    </>
  );
}
