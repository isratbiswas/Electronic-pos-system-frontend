"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  { icon: "📝", title: "Create Account", description: "Sign up and set up your store details within minutes." },
  { icon: "📦", title: "Add Products", description: "Upload your items with stock, pricing, discounts & barcode." },
  { icon: "💳", title: "Start Selling", description: "Process orders, apply discounts, and accept payments instantly." },
  { icon: "📊", title: "Track Reports", description: "Monitor daily sales, profits, stock levels & performance analytics." }
];

export default function HowItWorksSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-950" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400">How It Works</h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
          Get started with your POS system in just a few simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            className="relative flex items-center justify-center text-center w-64 h-64 mx-auto rounded-full overflow-hidden cursor-pointer"
          >
            {/* Thicker, bright animated border */}
            {hovered === i && (
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "12px solid transparent", // thicker border
                  borderImageSlice: 1,
                  borderImageSource: "conic-gradient(from 0deg, #a855f7, #ec4899, #f472b6, #a855f7)"
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            )}

            {/* Inner static circle */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full rounded-full bg-slate-900 p-6">
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
