import React from "react";
import Navbar from "./PublicNavbar";
import HeroSection from "../modules/Home/HeroSection";

const HeroBannar = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden !py-0 !mt-0 z-10">
      {/* Subtle Grid Background */}
      <div className="absolute  inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      <div className="container mx-auto px-6 max-w-7xl">
        <Navbar />
        <HeroSection />
      </div>
      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-cyan-500/20" />
    </section>
  );
};

export default HeroBannar;
