"use client";

import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShoppingBag,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <SectionWrapper className="bg-slate-950 border-t border-white/5">
      <footer className="text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="flex h-10 w-10 items-center justify-center bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <ShoppingBag size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-white">Electro</span>
                  <span className="text-indigo-400">Shop</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs">
                Empowering businesses with modern POS solutions. Fast, reliable,
                and built for the next generation of commerce.
              </p>
              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2">
              <div>
                <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
                  Solutions
                </h3>
                <ul className="space-y-4 text-sm">
                  {[
                    "Inventory",
                    "Sales Analytics",
                    "Multi-shop",
                    "Customer CRM",
                  ].map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:text-indigo-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
                  Company
                </h3>
                <ul className="space-y-4 text-sm">
                  {["About Us", "Features", "Contact", "Privacy Policy"].map(
                    (link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="hover:text-indigo-400 transition-colors"
                        >
                          {link}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
                Stay Updated
              </h3>
              <p className="text-sm mb-4">
                Subscribe to get the latest updates and offers.
              </p>
              <div className="relative group">
                <Input
                  placeholder="Email address"
                  className="bg-slate-900 border-slate-800 focus:border-indigo-500 rounded-lg pr-12 h-11"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-9 w-9 bg-indigo-600 hover:bg-indigo-500 rounded-md"
                >
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
            <p>© {currentYear} ElectroShop Systems. Built for 2025.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-slate-500">Systems Operational</span>
              </div>
              <p className="flex items-center gap-1">
                <Mail size={12} className="text-indigo-400" />
                support@electroshop.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
}
