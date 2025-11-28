"use client";

import Image from "next/image";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const topItems = [
  "/carousel/1.png",
  "/carousel/2.png",
  "/carousel/3.jpg",
  "/carousel/4.png",
  "/carousel/5.png",
];

const bottomItems = [
  "/carousel/6.png",
  "/carousel/7.png",
  "/carousel/8.png",
  "/carousel/9.png",
  "/carousel/10.png",
];

export default function Carousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const topControls = useAnimation();
  const bottomControls = useAnimation();

  // Auto-move when in view
  useEffect(() => {
    if (isInView) {
      topControls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 18, // top row speed
        },
      });

      bottomControls.start({
        x: ["-50%", "0%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 22, // bottom row is slightly slower
        },
      });
    } else {
      topControls.stop();
      bottomControls.stop();
    }
  }, [isInView, topControls, bottomControls]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-black text-white pb-16 md:pb-24 overflow-hidden"
    >
      {/* Top Row */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="overflow-hidden w-full"
      >
        <motion.div
          animate={topControls}
          className="flex gap-6 w-max"
        >
          {[...topItems, ...topItems].map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-2xl overflow-hidden bg-[#1a1a1a]"
            >
              <Image
                src={src}
                alt={`Top item ${i}`}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="overflow-hidden w-full mt-6"
      >
        <motion.div
          animate={bottomControls}
          className="flex gap-6 w-max"
        >
          {[...bottomItems, ...bottomItems].map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-2xl overflow-hidden bg-[#1a1a1a]"
            >
              <Image
                src={src}
                alt={`Bottom item ${i}`}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
