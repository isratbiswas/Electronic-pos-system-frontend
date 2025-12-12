"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 md:px-12 lg:px-20 py-24">
      {/* HERO */}
      <section className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-slate-800 text-indigo-400 rounded-full px-4 py-1 text-sm font-medium w-max">
            Built for modern businesses
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            We build POS solutions —
            <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              fast, secure & scalable.
            </span>
          </h1>

          <p className="text-slate-400 max-w-xl">
            Our mission is to help retailers take control of billing, inventory,
            and growth with a POS system designed for speed, clarity, and scale.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="rounded-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Work with us
            </a>

            <a
              href="#team"
              className="rounded-full px-6 py-3 border border-slate-700 text-slate-300 hover:bg-slate-900 transition"
            >
              Meet the team
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
            <Image
              src="https://i.pinimg.com/1200x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg"
              alt="team"
              width={500}
              height={500}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </motion.div>
      </section>

      {/* MISSION + STATS */}
      <section className="max-w-6xl mx-auto mt-20 grid gap-8 md:grid-cols-3">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-slate-900 rounded-2xl p-8"
        >
          <h2 className="text-xl font-semibold text-white">Our mission</h2>
          <p className="mt-3 text-slate-400">
            To simplify store operations with modern technology — enabling
            retailers to sell faster, manage smarter, and scale confidently.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Stat label="Stores" value="200+" />
            <Stat label="Countries" value="12" />
            <Stat label="Transactions" value="5M+" />
            <Stat label="Uptime" value="99.9%" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm uppercase opacity-90">What drives us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>⚡ Speed over complexity</li>
              <li>🔐 Security by default</li>
              <li>📈 Built to scale</li>
            </ul>
          </div>

          <p className="text-xs opacity-90 mt-6">
            We build long-term systems, not quick hacks.
          </p>
        </motion.div>
      </section>

      {/* TEAM */}
      <section id="team" className="max-w-6xl mx-auto mt-24">
        <h2 className="text-2xl font-bold text-white mb-6">Meet the team</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <TeamCard
            name="Aisha Rahman"
            role="Product Designer"
            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          />
          <TeamCard
            name="Rafi Ahmed"
            role="Lead Engineer"
            img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
          />
          <TeamCard
            name="Nadia Khan"
            role="Growth Lead"
            img="https://i.pinimg.com/1200x/e6/cd/f6/e6cdf68ad3b4789a6e0ff556d63b9bbe.jpg"
          />
          <TeamCard
            name="Samira Chowdhury"
            role="Founder"
            img="https://i.pinimg.com/736x/d9/a0/0e/d9a00eb3ab1f04191216838c46a1cff6.jpg"
          />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto mt-24 text-center">
        <h3 className="text-3xl font-bold text-white">
          Ready to modernize your store?
        </h3>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">
          Launch faster, sell smarter, and grow confidently with our next-gen
          POS.
        </p>

        <button className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-xl hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}

/* Components */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-slate-400">{label}</div>
    </div>
  );
}

function TeamCard({
  name,
  role,
  img,
}: {
  name: string;
  role: string;
  img: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg"
    >
      <img src={img} alt={name} className="h-44 w-full object-cover" />
      <div className="p-4">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-sm text-slate-400">{role}</div>
      </div>
    </motion.div>
  );
}
