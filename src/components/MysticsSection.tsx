"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiH3 } from "react-icons/hi2";

const BentoCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative overflow-hidden rounded-3xl ${className} group`}
    >
      {children}
    </motion.div>
  );
};

const ImageOverlay = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
);

const MysticsverseSection = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center pt-16 md:pt-24 pb-24">
      <div
        className="
        grid 
        w-full 
        max-w-7xl 
        grid-cols-1 
        gap-4 
        md:grid-cols-3 
        md:grid-rows-[270px_180px_250px] 
        md:gap-6
        px-4
      "
      >

        {/* 1. Top Left */}
        <BentoCard className="md:row-span-2 bg-[#1A1A2E] aspect-[4/3] md:aspect-auto">
          <ImageOverlay 
            src="/second-section/mystics-logo.png" 
            alt="Mysterious Character" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </BentoCard>

        {/* 2. Text Banner */}
        <BentoCard
          className="
          md:col-span-2 
          bg-[#262335] 
          p-6 
          md:p-10 
          flex 
          flex-col
          md:flex-row 
          justify-between 
          items-center 
          gap-6
        "
        >
          <div className="flex flex-col space-y-10 md:space-y-15 z-10 max-w-lg text-left">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white leading-tight"
            >
              A universe shaped by emotion, memory, and code.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm md:text-base"
            >
              Welcome to Mysticsverse, where elemental <br /> beings awaken and
              worlds evolve.
            </motion.p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            src="/second-section/img4.jpg"
            alt="Elemental Runes"
            className="w-32 h-32 md:w-40 md:h-40 object-contain elemental-runes"
          />
        </BentoCard>

        {/* 3. Mid Center */}
        <BentoCard className="bg-[#2A1B3D] aspect-[4/3] md:aspect-auto">
          <ImageOverlay 
            src="/second-section/img1.jpg"
            alt="Characters at a bar"
          />
        </BentoCard>

        {/* 4. Mid Right */}
        <BentoCard className="md:row-span-2 bg-[#0F2C40] aspect-[4/3] md:aspect-auto">
          <ImageOverlay 
            src="/second-section/img3.jpg"
            alt="Water Elemental"
          />
        </BentoCard>

        {/* 5. Bottom Left */}
        <BentoCard className="md:col-span-2 bg-[#1B2E25] aspect-[4/3] md:aspect-auto">
          <ImageOverlay 
            src="/second-section/img2.jpg"
            alt="Wizard casting spell"
          />
        </BentoCard>

      </div>
    </div>
  );
};

export default MysticsverseSection;
