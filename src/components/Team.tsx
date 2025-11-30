"use client";

import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const team: TeamMember[] = [
  { name: "XPO", role: "FOUNDER & CREATIVE DIRECTOR", img: "/team/xpo.jpg" },
  { name: "SKETCHER", role: "CO-FOUNDER & ARTIST", img: "/team/sketcher.jpg" },
  { name: "CHUKWUFUMNANYA", role: "CO-FOUNDER & CMO", img: "/team/chukwu.jpg" },
  { name: "SRABON", role: "COLLAB MANAGER", img: "/team/srabon.jpg" },
  { name: "ACE", role: "MODERATOR", img: "/team/ace.jpg" },
  { name: "OSI", role: "MODERATOR", img: "/team/osi.jpg" },
];

const MeetTheTeam: React.FC = () => {
  return (
    <section
      className="w-full bg-black pb-20 flex flex-col items-center text-white"
      id="team"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl tracking-widest mb-13 md:mb-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        MEET THE TEAM
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-5xl px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.18 }}
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full max-w-[260px]">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-xl w-full shadow-lg"
              />

              <div className="mt-4 text-left w-full">
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm opacity-70 mt-1">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MeetTheTeam;
