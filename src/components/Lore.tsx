"use client";

import React from "react";
import { motion } from "framer-motion";

const GemOne = "/gem1.png";
const GemTwo = "/gem2.png";

const TheLore: React.FC = () => {
  return (
    <section
      className="w-full bg-black text-white flex flex-col items-center pb-16 md:pb-24"
      id="lore"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl md:text-6xl tracking-widest mb-12 text-center"
      >
        THE LORE
      </motion.h2>

      {/* Main Container */}
      <div
        className="
          flex flex-col md:flex-row
          gap-6
          w-full
          max-w-6xl
          px-6 md:px-12
        "
      >
        {/* BLUE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            bg-[#356FFF]
            rounded-3xl
            p-8 md:p-10
            flex flex-col justify-between
            text-left
            w-full md:w-[596px]
            min-h-[380px] md:h-[544px]
          "
        >
          <p className="text-[16px] md:text-[18px] leading-relaxed">
            Explore evolving realms within the Mysticsverse, each bound by its own
            energy, challenges, and purpose.
            <br />
            <br />
            As the world expands, new features and experiences will emerge, from
            elemental sanctuaries to AI-driven adventures.
          </p>

          <a
            className="text-md md:text-lg font-bold underline mt-6 hover:opacity-80 text-left explore-lore"
            href="https://medium.com/@lewispius/mysticsverse-game-docs-2a3a3c72545b"
            target="blank"
          >
            EXPLORE THE LORE
          </a>
        </motion.div>

        {/* GEM 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-[303px] flex justify-center"
        >
          <img
            src={GemOne}
            alt="Gem One"
            className="
              rounded-3xl
              w-full
              h-[380px] md:h-[544px]
              object-cover
            "
          />
        </motion.div>

        {/* GEM 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-[303px] flex justify-center"
        >
          <img
            src={GemTwo}
            alt="Gem Two"
            className="
              rounded-3xl
              w-full
              h-[380px] md:h-[544px]
              object-cover
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TheLore;
