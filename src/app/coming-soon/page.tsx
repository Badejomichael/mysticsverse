import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
