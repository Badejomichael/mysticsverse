"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WorldSection = () => {
  return (
    <section
      id="the-world"
      className="w-full flex flex-col items-center justify-center text-center pb-24"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-6xl mb-6 tracking-wide">
        THE WORLD
      </h2>

      {/* Image */}
      <div
        className="
          relative overflow-hidden rounded-xl shadow-sm
          w-full max-w-[3000px] h-auto
        "
      >
        <Image
          src="/world.png"
          alt="Mystics World"
          width={1400}
          height={1503}
          className="
            object-cover w-full h-auto 
            md:rounded-xl
          "
          priority
        />
      </div>

      {/* Description */}
      <p className="max-w-2xl leading-relaxed mb-8 md:text-lg md:text-base mt-7 px-6 text-left">
        The Mysticsverse isn’t just art, it’s alive. Our upcoming game will let you 
        harness your Mystic’s elemental power in a world where emotion and energy collide.
      </p>

      {/* Enter Realm Button */}
      <motion.div
        whileHover={{
          scale: 1.07,
          boxShadow: [
            "0 0 0px rgba(250,123,0,0)",    
            "0 0 25px rgba(250,123,0,0.45)",  
            "0 0 40px rgba(250,123,0,0.65)",
          ],
          filter: "brightness(1.1)",
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
      >
        <Link
          href="/coming-soon"
          id="enter-realm-btn-2"
          className="text-md md:text-lg px-5 py-2 rounded-md text-white font-medium transition-all hover:bg-white/10"
          >
          ENTER THE MYSTICVERSE
        </Link>
      </motion.div>
      


      
    </section>
  );
};

export default WorldSection;
