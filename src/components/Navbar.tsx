"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const menuItems = [
    { label: "ABOUT", href: `#about`, external: false },
    { label: "LORE", href: `#lore`, external: false },
    { label: "THE WORLD", href: `#the-world`, external: false   },
    { label: "TEAM", href: `#team`, external: false  },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay + Sidebar when open */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/*Blurred full-page overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Solid black sidebar panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 right-0 h-full w-64 bg-black z-50 flex flex-col items-start p-8 space-y-6 shadow-2xl"
            >
              {menuItems.map(({ label, href, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-xl text-white hover:text-gray-400 transition menus"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  boxShadow: [
                    "0 0 0px rgba(250,123,0,0)",       
                    "0 0 22px rgba(250,123,0,0.35)",   
                    "0 0 38px rgba(250,123,0,0.55)",  
                  ],
                  filter: "brightness(1.12)",
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href="/checker"
                  id="enter-realm-btn"
                  className="text-lg px-5 py-2 rounded-md text-white font-medium transition-all hover:bg-white/10"
                >
                  ENTER REALM
                </Link>
              </motion.div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>


      <nav
        className={`fixed left-0 w-full z-50 flex items-center justify-between transition-all duration-300
  ${scrolled ? "top-0 md:top-0 backdrop-blur-sm bg-black/40" : "top-0 md:top-13 bg-transparent"}
`}

      >
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-8 md:px-14 py-5">
          {/* Logo */}
          <div className="flex items-center z-50">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full">
              <Link
                href="/">
              <Image
                src="/mystics-logo.png"
                alt="Mystics"
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-10">
            {menuItems.map(({ label, href, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-xl text-white hover:text-gray-300 transition-colors menus"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <motion.div
              whileHover={{
                scale: 1.07,
                boxShadow: [
                  "0 0 0px rgba(250,123,0,0)",       
                  "0 0 22px rgba(250,123,0,0.35)",   
                  "0 0 38px rgba(250,123,0,0.55)",   
                ],
                filter: "brightness(1.12)",
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
            >
                <Link
                  href="/checker"
                  id="enter-realm-btn"
                  className="text-lg px-5 py-2 rounded-md text-white font-medium transition-all hover:bg-white/10"
                >
                  ENTER REALM
                </Link>
              </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden z-[60] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="flex flex-col space-y-1"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="block w-6 h-[2px] bg-white"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="block w-6 h-[2px] bg-white"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="block w-6 h-[2px] bg-white"
              />
            </motion.div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 right-0 h-full w-64 bg-black/90 z-50 flex flex-col items-start p-8 space-y-6"
            >
              {menuItems.map(({ label, href, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? "_blank" : "_self"}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-xl text-white hover:text-gray-400 transition menus"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  boxShadow: [
                    "0 0 0px rgba(250,123,0,0)",       
                    "0 0 22px rgba(250,123,0,0.35)",   
                    "0 0 38px rgba(250,123,0,0.55)",   
                  ],
                  filter: "brightness(1.12)",
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href="/checker"
                  id="enter-realm-btn"
                  className="text-lg px-5 py-2 rounded-md text-white font-medium transition-all hover:bg-white/10"
                >
                  ENTER REALM
                </Link>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
