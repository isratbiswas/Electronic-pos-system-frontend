"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Example carousel images
const images = [
  "https://i.pinimg.com/736x/46/eb/d9/46ebd96db090d9b31e1252f8c1a3dca3.jpg",
  "https://i.pinimg.com/1200x/f2/fa/79/f2fa799825d59bf5e7943151da5c4fd6.jpg",
  "https://i.pinimg.com/736x/69/0b/08/690b080059a762503b6d56b1686b686f.jpg"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-purple-800 via-indigo-700 to-cyan-600 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left lg:w-1/2 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-slate-800 text-cyan-300 rounded-full px-4 py-1 text-sm font-medium w-max">
            Built for modern businesses
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Simplify Your Business with Our POS
            <span className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-200 bg-clip-text text-transparent">
              Fast, Secure & Scalable
            </span>
          </h1>

          <p className="text-slate-300 max-w-md">
            Our POS system is designed for speed, clarity, and growth. Manage billing, inventory, and sales effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <a
              href="#contact"
              className="rounded-full px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Get Started
            </a>
            <a
              href="#team"
              className="rounded-full px-8 py-3 border border-white/30 text-white hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Carousel Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="POS illustration"
            className="w-full h-96 sm:h-[500px] object-cover transition-all duration-700 rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 sm:h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0 0V46.29c47.85 22.2 103.94 29.49 158 23.12C230.18 63 288 32.48 345 17.42c51.53-13.34 103.29-11.28 154 1.53 62 16 123 38 185 40 66 2 131-16 196-36 59-18 118-33 177-25 31 4 59 12 88 22v77H0z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
