"use client";

import Navbar from "./components/Navbar";
import CheckerMain from "./components/CheckerMain";

export default function Home() {



  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <CheckerMain />
    </main>
  );
}