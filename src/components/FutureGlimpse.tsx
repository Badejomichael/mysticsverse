"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FutureGlimpse = () => {
  // Animation object INSIDE the component (fixes variant errors)
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center text-center pb-24"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl mb-6 tracking-wide"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        A GLIMPSE INTO THE FUTURE
      </motion.h2>

      {/* Image */}
      <motion.div
        className="
          relative overflow-hidden rounded-xl shadow-sm
          w-full max-w-[3000px] h-auto
        "
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/kael.png"
          alt="Mystics World"
          width={1400}
          height={1503}
          className="object-cover w-full h-auto md:rounded-xl"
          priority
        />
      </motion.div>

      {/* Description */}
      <motion.p
        className="max-w-2xl leading-relaxed mb-8 md:text-lg md:text-base mt-7 px-6 text-left"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        The Mysticsverse isn’t just art, it’s alive. Our upcoming game will let
        you harness your Mystic’s elemental power in a world where emotion and
        energy collide.
      </motion.p>

      {/* Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
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
          href="https://medium.com/@lewispius/mysticsverse-game-docs-2a3a3c72545b"
          target="_blank"
          id="enter-realm-btn-2"
          className="text-md md:text-lg px-5 py-2 rounded-md text-white font-medium transition-all hover:bg-white/10"
        >
          READ MORE
        </Link>
      </motion.div>
    </section>
  );
};

export default FutureGlimpse;
