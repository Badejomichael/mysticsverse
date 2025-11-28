"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center text-center px-6 pb-24"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl md:text-6xl mb-6 tracking-wide"
      >
        WHAT IS MYSTICVERSE
      </motion.h2>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="
          relative overflow-hidden rounded-xl shadow-sm
          w-full max-w-[1200px] h-auto
        "
      >
        <Image
          src="/about.png"
          alt="Mystics Art Closeup"
          width={1200}
          height={1503}
          className="object-cover w-full h-auto md:rounded-xl"
          priority
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-2xl leading-relaxed mb-8 md:text-lg md:text-base mt-7 text-left"
      >
        Mysticsverse is a story-driven world where elemental forces take form
        through NFTs, art, and immersive digital experiences. It’s more than a
        collection, it’s a growing ecosystem that blends lore, creativity, and
        community.
      </motion.p>

      {/* Enter Realm Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.07,
          boxShadow: [
            "0 0 0px rgba(250,123,0,0)",
            "0 0 25px rgba(250,123,0,0.45)",
            "0 0 40px rgba(250,123,0,0.65)",
          ],
          filter: "brightness(1.1)",
          transition: { duration: 0.45, ease: "easeInOut" },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link
          href="/checker"
          id="enter-realm-btn-2"
          className="text-md md:text-lg px-5 py-2 rounded-md text-white font-medium transition-all hover:bg-white/10"
        >
          ENTER REALM
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;
