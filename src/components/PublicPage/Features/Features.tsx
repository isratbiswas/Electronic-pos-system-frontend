"use client";

import { motion, useAnimationControls } from "framer-motion";
import { Zap, Boxes, BarChart3, Store, Users, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

export default function FeaturesPage() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const features = [
    {
      title: "Fast Billing",
      desc: "Complete sales in seconds with an intuitive and lightning-fast checkout flow.",
      icon: Zap,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Inventory Management",
      desc: "Track stock levels, get low-stock alerts, and manage products effortlessly.",
      icon: Boxes,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Sales Reports",
      desc: "Gain insights with daily, weekly, and monthly sales analytics.",
      icon: BarChart3,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Multi-Store Support",
      desc: "Manage multiple outlets from one centralized dashboard.",
      icon: Store,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Customer Management",
      desc: "Save customer data, purchase history, and offer loyalty rewards.",
      icon: Users,
      gradient: "from-sky-500 to-cyan-500",
    },
    {
      title: "Secure Payments",
      desc: "Accept cash, card, mobile banking, and digital wallet payments securely.",
      icon: ShieldCheck,
      gradient: "from-green-500 to-lime-500",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Powerful POS Features
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Designed for modern electronics stores that demand speed, control,
            and scalability.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-slate-900 p-8"
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${f.gradient} text-white mb-6`}
              >
                <f.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {f.title}
              </h3>
              <p className="text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* SECURITY & ACCESS FEATURES */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Security & Role Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Role-Based Access",
                desc: "Assign permissions for Admin, Manager, and Cashier to protect sensitive operations.",
                icon: ShieldCheck,
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Audit Logs",
                desc: "Track every action including sales, refunds, and inventory changes.",
                icon: BarChart3,
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                title: "Secure Authentication",
                desc: "Protected login with encrypted credentials and session control.",
                icon: Users,
                gradient: "from-orange-500 to-amber-500",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 rounded-2xl p-8"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white mb-6`}
                >
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* INVENTORY FEATURES */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Inventory Intelligence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Low Stock Alerts",
              "Bulk Product Upload",
              "Product Variants & SKU",
              "Purchase & Cost Tracking",
              "Stock Transfer Between Stores",
              "Barcode & Scanner Support",
              "Warranty Tracking",
              "Real-Time Stock Sync",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 rounded-xl p-6 text-slate-300"
              >
                <Boxes className="w-6 h-6 text-indigo-400 mb-3" />
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SALES & ANALYTICS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Sales & Analytics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Real-Time Sales Tracking",
                desc: "Monitor sales performance instantly across all stores and counters.",
              },
              {
                title: "Daily / Monthly Reports",
                desc: "Detailed breakdown of revenue, profit, and order volume.",
              },
              {
                title: "Top Products & Categories",
                desc: "Identify best-selling products to optimize inventory.",
              },
              {
                title: "Exportable Reports",
                desc: "Download reports in CSV or PDF for accounting and analysis.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 rounded-2xl p-8"
              >
                <BarChart3 className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to modernize your store?
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-slate-400">
            Launch faster, sell smarter, and scale confidently with our
            next-generation POS system.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-xl hover:scale-105 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
