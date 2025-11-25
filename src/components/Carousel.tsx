"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const topItems = [
  { type: "image", src: "/carousel/1.png" },
  { type: "image", src: "/carousel/2.png" },
  { type: "image", src: "/carousel/3.jpg" },
  { type: "image", src: "/carousel/4.png" },
  { type: "image", src: "/carousel/5.png" },
];

const bottomItems = [
  { type: "image", src: "/carousel/6.png" },
  { type: "image", src: "/carousel/7.png" },
  { type: "image", src: "/carousel/8.png" },
  { type: "image", src: "/carousel/9.png" },
  { type: "image", src: "/carousel/10.png" },
];

export default function Carousel() {
  const renderItem = (item: { type: string; src: string }, i: number) => (
    <div
      key={i}
      id="carousel"
      className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-2xl overflow-hidden flex-shrink-0 bg-[#1a1a1a]"
    >
      
        <Image
          src={item.src}
          alt={`Carousel item ${i + 1}`}
          fill
          sizes="300px"
          className="object-cover"
        />
    </div>
  );

  return (
    <section className="relative w-full bg-black text-white pb-16 md:pb-24 overflow-hidden">

      {/* Top Carousel */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll-right gap-4 sm:gap-6">
          {[...topItems, ...topItems].map(renderItem)}
        </div>
      </div>

      {/* Bottom Carousel */}
      <div className="overflow-hidden w-full mt-6">
        <div className="flex animate-scroll-left gap-4 sm:gap-6">
          {[...bottomItems, ...bottomItems].map(renderItem)}
        </div>
      </div>
    </section>
  );
}
