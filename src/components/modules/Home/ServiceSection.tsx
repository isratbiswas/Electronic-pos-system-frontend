/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Package,
  BarChart3,
  Users,
  CreditCard,
  Receipt,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

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

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 ${service.className}`}
    >
      {/* Background Gradient Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl group-hover:bg-indigo-500/10 transition-colors" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 bg-indigo-200 hover:bg-indigo-400 group-hover:scale-110 transition-transform">
          {service.icon}
        </div>

        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
          {service.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default function ServiceSection() {
  return (
    <SectionWrapper className="bg-slate-50/50 dark:bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Our Expertise
          </motion.span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Powerful{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Commerce Tools
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Smart, integrated solutions designed to help you manage and grow
            your business with 2025 technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
