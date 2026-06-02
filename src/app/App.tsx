import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Leagues } from "./components/Leagues";
import { Tournaments } from "./components/Tournaments";
import { Leaderboard } from "./components/Leaderboard";
import { Community } from "./components/Community";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden dark">
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Leagues />
        <Tournaments />
        <Leaderboard />
        <Community />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}