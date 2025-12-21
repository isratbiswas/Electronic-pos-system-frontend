"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

const services = [
  {
    icon: "📦",
    title: "Inventory Management",
    description:
      "Track stock levels, get low-stock alerts, and manage products efficiently.",
  },
  {
    icon: "📊",
    title: "Sales & Reports",
    description:
      "Analyze daily, weekly, and monthly sales with powerful insights.",
  },
  {
    icon: "👥",
    title: "Customer Management",
    description:
      "Store customer data, track purchases, and reward loyal users.",
  },
  {
    icon: "💳",
    title: "Payment Solutions",
    description:
      "Accept cash, card, mobile banking, and digital wallets securely.",
  },
  {
    icon: "🧾",
    title: "Invoice & Billing",
    description:
      "Generate invoices instantly with tax, discount, and due tracking.",
  },
  {
    icon: "🔐",
    title: "Roles & Security",
    description:
      "Advanced role-based access for admins, managers, and cashiers.",
  },
];

export default function ServiceSection() {
  return (
    <SectionWrapper className="relative  bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <section id="services" className="">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-clash font-semibold text-blue-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful Services
          </motion.h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-inter">
            Smart tools designed to help you manage, analyze, and grow your
            business effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-400 text-3xl mb-6 shadow-md group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold font-clash mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 font-inter leading-relaxed">
                {service.description}
              </p>

              <span className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-indigo-300 transition" />
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
