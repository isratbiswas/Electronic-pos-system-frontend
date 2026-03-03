"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative  min-h-screen bg-slate-950 overflow-hidden !py-0 !mt-0 z-10">
      {/* Subtle Grid Background */}
      <div className="absolute  inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-cyan-500/20" />

      {/* Content */}
      <SectionWrapper>
        <section className="relative z-10 flex items-center min-h-screen">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8  items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <span className="inline-block text-cyan-400 text-sm font-semibold tracking-wide">
                SMART POS PLATFORM
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Your Business,
                <span className="block text-cyan-400">One Command Center</span>
              </h1>

              <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-lg">
                Control sales, inventory, staff, and analytics from a single
                powerful dashboard built for modern businesses.
              </p>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-10 pt-4">
                <div>
                  <p className="text-3xl font-bold text-white">3x</p>
                  <p className="text-slate-400 text-sm">Faster Billing</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="text-slate-400 text-sm">Uptime</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-slate-400 text-sm">Support</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <a
                  href="#services"
                  className="px-8 py-4 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition"
                >
                  Start Free Trial
                </a>
                <a
                  href="#reviews"
                  className="px-8 py-4 rounded-lg border border-slate-700 text-white hover:bg-slate-900 transition"
                >
                  Client Review
                </a>
              </div>
            </motion.div>

            {/* RIGHT – DASHBOARD MOCKUP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
              >
                <Image
                  width={500}
                  height={500}
                  src="https://i.pinimg.com/736x/16/a2/67/16a267fe6076daa8c66336846558f684.jpg"
                  alt="POS Dashboard"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-2xl -z-10" />
            </motion.div>
          </div>
        </section>
      </SectionWrapper>
    </section>
  );
};

export default HeroSection;
