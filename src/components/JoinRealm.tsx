import React from "react";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";


const JoinRealm: React.FC = () => {
  return (
    <section
      className="
        w-full 
        rounded-t-3xl 
        overflow-hidden 
        bg-cover 
        bg-center 
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(/realm-section.png)`,
      }}
    >
      <div
        className="
          w-full 
          h-full 
          flex 
          flex-col 
          justify-center 
          px-8 
          py-16
          md:px-14
          lg:px-20
          xl:px-28
          2xl:px-36
          text-black
          max-w-[700px]
        "
      >
        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl tracking-widest mb-6 text-[#282828]">
          JOIN THE REALM
        </h2>

        {/* PARAGRAPH */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-85 max-w-md">
          The Mysticsverse is shaped by those who believe, artists, dreamers,
          and explorers like you. Step in, claim your place, and help shape 
          what comes next.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 mb-12 text-[#282828]">
          <a href="https://x.com/mysticsverse" target="blank"><FaXTwitter className="text-3xl cursor-pointer hover:opacity-80 transition"/></a>
          <a href="https://t.co/HIyNL7jNQn" target="blank"><FaDiscord className="text-3xl cursor-pointer hover:opacity-80 transition" /></a>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-sm opacity-70">
          Mysticsverse © 2025 – Crafted by the elements.
        </p>
      </div>
    </section>
  );
};

export default JoinRealm;
