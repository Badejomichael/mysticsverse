import AboutSection from "@/components/About";
import Carousel from "@/components/Carousel";
import FutureGlimpse from "@/components/FutureGlimpse";
import Hero from "@/components/Hero";
import JoinRealm from "@/components/JoinRealm";
import TheLore from "@/components/Lore";
import MysticsverseSection from "@/components/MysticsSection";
import Navbar from "@/components/Navbar";
import MeetTheTeam from "@/components/Team";
import WorldSection from "@/components/World";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <MysticsverseSection />
      <AboutSection />
      <TheLore />
      <Carousel />
      <WorldSection />
      <FutureGlimpse />
      <MeetTheTeam />
      <JoinRealm />
    </main>
  );
}
