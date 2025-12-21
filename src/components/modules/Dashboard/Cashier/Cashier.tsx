/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ShoppingCart, Package, BarChart3, Users } from "lucide-react";
import Link from "next/link";

export default function Cashier() {
  return (
    <section className="relative min-h-screen rounded-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Welcome to Our{" "}
          <span className="text-indigo-400">Electronic Shop</span> POS System
        </h1>

        {/* Short paragraph */}
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
          A smart and reliable point of sale system to manage sales, inventory,
          customers, and reports — all in one powerful dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/dashboard/createOrder">
            <button className="rounded-lg bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600">
              Take a Order
            </button>
          </Link>
          <Link href="/dashboard/orderList">
            <button className="rounded-lg border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
              Show All Order
            </button>
          </Link>
        </div>

        {/* POS Feature Icons */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <FeatureIcon
            icon={<ShoppingCart className="h-7 w-7 text-indigo-400" />}
            title="Sales"
            desc="Fast & accurate billing"
          />
          <FeatureIcon
            icon={<Package className="h-7 w-7 text-indigo-400" />}
            title="Inventory"
            desc="Real-time stock tracking"
          />
          <FeatureIcon
            icon={<Users className="h-7 w-7 text-indigo-400" />}
            title="Customers"
            desc="Manage customer records"
          />
          <FeatureIcon
            icon={<BarChart3 className="h-7 w-7 text-indigo-400" />}
            title="Reports"
            desc="Daily & monthly insights"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ icon, title, desc }: any) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-slate-800/50 p-5 text-center shadow-md backdrop-blur">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs text-slate-400">{desc}</p>
    </div>
  );
}
