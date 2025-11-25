"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/coming-soon-bg.mp4" type="video/mp4" />
      </video>

      {/* Fallback overlay (optional) */}
      <div className="absolute inset-0 bg-[#EBEBE6] opacity-0 pointer-events-none" />
    </section>
  );
};

export default Hero;
