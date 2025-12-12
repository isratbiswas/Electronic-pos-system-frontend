"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Example offer images
const offers = [
  {
    title: "10% Off Electronics",
    subtitle: "Valid until Dec 31, 2025",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
  {
    title: "Buy 1 Get 1 Free",
    subtitle: "On select items",
    img: "https://i.pinimg.com/736x/2e/88/21/2e8821faf995d9e34580008d12c27785.jpg",
  },
  {
    title: "20% Off Accessories",
    subtitle: "Limited time only",
    img: "https://i.pinimg.com/736x/4f/c3/3e/4fc33e13f4bbae0b72615df31f5e5931.jpg",
  },
];

const DisCountSection = () => {
  return (
    <section className="py-16 px-6 bg-slate-950">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-400">
        Discounts & Offers
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Big Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="h-96 overflow-hidden">
            <Image
              src={offers[0].img}
              alt={offers[0].title}
              width={500}
              height={300}
              className="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {offers[0].title}
            </h3>
            <p className="text-slate-400">{offers[0].subtitle}</p>
          </div>
        </motion.div>

        {/* Right two stacked cards */}
        <div className="flex flex-col gap-6">
          {offers.slice(1).map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-44 sm:h-48 overflow-hidden">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center lg:text-left">
                <h3 className="text-xl font-bold text-white mb-1">
                  {offer.title}
                </h3>
                <p className="text-slate-400 text-sm">{offer.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisCountSection;
