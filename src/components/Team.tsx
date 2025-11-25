import React from "react";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const team: TeamMember[] = [
  {
    name: "XPO",
    role: "FOUNDER & CREATIVE DIRECTOR",
    img: "/team/xpo.png",
  },
  {
    name: "SKETCHER",
    role: "CO-FOUNDER & ARTIST",
    img: "/team/sketcher.jpg",
  },
  {
    name: "CHUKWUFUMNANYA",
    role: "CO-FOUNDER & CMO",
    img: "/team/chukwu.png",
  },
  {
    name: "SRABON",
    role: "COLLAB MANAGER",
    img: "/team/srabon.jpg",
  },
  {
    name: "ACE",
    role: "MODERATOR",
    img: "/team/ace.jpg",
  },
  {
    name: "OSI",
    role: "MODERATOR",
    img: "/team/osi.png",
  },
];

const MeetTheTeam: React.FC = () => {
  return (
    <section className="w-full bg-black pb-20 flex flex-col items-center text-white" id="team">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl tracking-widest mb-13 md:mb-16 text-center">
        MEET THE TEAM
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-5xl px-6">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            
            {/* FIXED-WIDTH card matching image width */}
            <div className="w-full max-w-[260px]">

              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="rounded-xl w-full shadow-lg"
              />

              {/* Text aligned to image-left edge */}
              <div className="mt-4 text-left w-full">
                <p className="font-semibold text-lg">{member.name}</p>
                <p className="text-sm opacity-70 mt-1">{member.role}</p>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
