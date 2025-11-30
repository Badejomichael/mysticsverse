"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { eligibleAddresses } from "../utils/eligibleAddresses";

import { FaCheck, FaTimes } from "react-icons/fa";

const IMG_MEDITATING_GUY = "/checker/meditating-guy.png";
const IMG_FIERY_GUY = "/checker/fiery-guy.png";
const IMG_WIZARD = "/checker/wizard.png";
const IMG_BOTTOM_RIGHT = "/checker/bottom-right.png";

const CheckerMain: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const [eligibleStage, setEligibleStage] = useState<
    "eligible" | "creator"
  >("eligible");

  const handleCheckClick = () => {
    const address = walletAddress.trim().toLowerCase();

    const eligible = eligibleAddresses.some(
      (addr) => addr.toLowerCase() === address
    );

    setIsEligible(eligible);
    setShowModal(true);

    if (eligible) {
      setEligibleStage("eligible");

      setTimeout(() => {
        setEligibleStage("creator");
      }, 1200);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #000000 0%, #356FFF 100%)" }}
    >
      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]">
          <div
            style={{
              width: "443px",
              height: "443px",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.01)",
              backdropFilter: "blur(85px)",
              WebkitBackdropFilter: "blur(85px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: `
                inset 0px 0.85px 34px 0px #E3DEFF33,
                inset 0px 3.4px 15.3px 0px #9A92D24D,
                inset 0px 83.3px 85px -40.8px #CAACFF4D,
                inset 0px -69.7px 57.8px -54.4px #6044904D,
                inset 0px 5.95px 9.35px -3.4px #FFFFFF,
                inset 0px 33.15px 47.6px -30.6px #FFFFFF80
              `,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            {/* ELIGIBLE LOGIC */}
            {isEligible ? (
              <>
                {eligibleStage === "eligible" ? (
                  <>
                    {/* ✔ Checkmark Circle */}
                    <div className="w-[106px] h-[106px] rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                      <FaCheck className="text-white" size={65} />
                    </div>

                    <h1 className="text-5xl md:text-6xl mb-8">ELIGIBLE</h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-5xl md:text-6xl mb-8">CREATOR MODE</h1>

                    <motion.div
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
                        href="/coming-soon"
                        className="px-16 py-3 bg-[#FA7B00] rounded-xl text-lg md:text-xl mint-btn"
                      >
                        MINT
                      </Link>
                    </motion.div>
                  </>
                )}
              </>
            ) : (
              <>
                {/* ✖ Circle */}
                <div className="w-[106px] h-[106px] rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <FaTimes className="text-white" size={65} />
                </div>

                <h1 className="text-5xl md:text-6xl mb-8">NOT ELIGIBLE</h1>

                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-3 bg-white/10 rounded-xl font-bold text-lg"
                >
                  CLOSE
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* DESKTOP IMAGES */}
      <div className="hidden lg:block">
        <img
          src={IMG_MEDITATING_GUY}
          alt="Meditating Character"
          className="absolute top-16 left-10 w-[242px] h-[227px]"
        />

        <img
          src={IMG_FIERY_GUY}
          alt="Fiery Character"
          className="absolute top-10 right-10 w-[310px] h-[239px]"
        />

        <img
          src={IMG_WIZARD}
          alt="Wizard"
          className="absolute bottom-[-100px] left-[30px] w-[435px] h-[467px] z-10"
        />

        <img
          src={IMG_BOTTOM_RIGHT}
          alt="Blue Character"
          className="absolute bottom-[-350px] right-[100px] w-[332px] h-[741px] z-10"
        />
      </div>

      {/* MOBILE IMAGES */}
      <div className="lg:hidden opacity-80">
        <img
          src={IMG_MEDITATING_GUY}
          className="absolute top-20 left-4 w-[140px] h-auto sm:w-[170px]"
        />

        <img
          src={IMG_FIERY_GUY}
          className="absolute top-17 right-4 w-[170px] h-auto sm:w-[200px]"
        />

        <img
          src={IMG_WIZARD}
          className="absolute bottom-[-20px] left-0 w-[210px] h-auto sm:w-[260px] z-10"
        />

        <img
          src={IMG_BOTTOM_RIGHT}
          className="absolute bottom-[-60px] right-0 w-[200px] h-auto sm:w-[250px] z-10"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center mt-[150px] px-4 py-20 lg:py-0">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-wider mt-10 mb-12">
            WALLET VERIFICATION
          </h1>

          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter wallet address..."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="
                  w-full px-6 py-4 text-sm md:text-base text-[#C4C4C4]
                  bg-white/10 backdrop-blur-[85px]
                  rounded-xl border border-white/10
                  placeholder:text-[#8B86A3]
                  focus:outline-none focus:ring-2 focus:ring-white/50
                  transition-all duration-300
                  shadow-[inset_0px_1px_40px_rgba(227,222,255,0.25)]
                "
              />
            </div>

            <button
              onClick={handleCheckClick}
              disabled={!walletAddress}
              className="
                w-full max-w-sm sm:max-w-none px-8 py-3 md:py-4 text-lg md:text-xl uppercase
                bg-[#FA7B00] hover:bg-[#E86F00]
                rounded-xl transition-colors duration-300
                shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
                checker-btn
              "
            >
              CHECK ELIGIBILITY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckerMain;
