"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WorldSection = () => {
  return (
    <section
      id="the-world"
      className="w-full flex flex-col items-center justify-center text-center pb-24 px-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl md:text-6xl mb-6 tracking-wide"
      >
        THE WORLD
      </motion.h2>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
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
          className="object-cover w-full h-auto md:rounded-xl"
          priority
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-2xl leading-relaxed mb-8 md:text-lg md:text-base mt-7 text-left"
      >
        The Mysticsverse isn’t just art, it’s alive. Our upcoming game will let you 
        harness your Mystic’s elemental power in a world where emotion and energy collide.
      </motion.p>

      {/* Enter Realm Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.07,
          boxShadow: [
            "0 0 0px rgba(250,123,0,0)",    
            "0 0 25px rgba(250,123,0,0.45)",  
            "0 0 40px rgba(250,123,0,0.65)",
          ],
          filter: "brightness(1.1)",
        }}
        className="mt-2"
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
