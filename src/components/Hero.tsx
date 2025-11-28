"use client";
import React from "react";
import Navbar from "@/components/Navbar";

const Hero: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* OPTIONAL OVERLAY */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* HERO TEXT */}
      <div
        className="
          relative z-10 w-full h-screen 
          flex flex-col items-center justify-center
          text-center px-4
        "
      >
        <h1
          className="
            text-white text-6xl md:text-8xl
            leading-[0.9]
            tracking-tight
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]
          "
        >
          STEP INTO THE
        </h1>

        <h1
          className="
            text-white
            leading-[0.9]
            tracking-tight
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]
            text-6xl md:text-8xl
            mt-2
          "
        >
          MYSTICSVERSE
        </h1>
      </div>
    </div>
  );
};

export default Hero;
