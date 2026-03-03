"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, BarChart3, Headset } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Fast Performance",
    desc: "Lightning-fast billing and stock updates ensures smooth workflow.",
    icon: <Zap className="text-amber-500" />,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "02",
    title: "Secure & Reliable",
    desc: "Role-based access, safe data storage, and advanced security protection.",
    icon: <ShieldCheck className="text-blue-500" />,
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "03",
    title: "Smart Analytics",
    desc: "Real-time reports help you understand sales, profits, and stock levels.",
    icon: <BarChart3 className="text-emerald-500" />,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "04",
    title: "24/7 Support",
    desc: "Our support team is always ready to help you anytime, anywhere.",
    icon: <Headset className="text-purple-500" />,
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper className="bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <section id="why-choose-us" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
          >
            The ElectroShop Edge
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why businesses{" "}
            <span className="text-slate-400 font-light italic">choose us</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg leading-relaxed">
            Our POS system is engineered for the demands of modern commerce,
            delivering unmatched speed and bank-grade security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Step Number Background */}
              <span className="absolute top-6 right-8 text-6xl font-black text-slate-100 dark:text-slate-800/50 pointer-events-none transition-colors group-hover:text-indigo-50/50">
                {item.id}
              </span>

              {/* Icon Container */}
              <div
                className={`relative w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >
                <div className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-sm border border-white/50">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-6 w-0 h-1 bg-indigo-500 rounded-full group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
