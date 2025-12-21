"use client";

import Link from "next/link";
import SectionWrapper from "../layout/SectionWrapper";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShoppingBag,
} from "lucide-react";

export default function Footer() {
  return (
    <SectionWrapper className="bg-slate-950">
      <footer className="text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center bg-indigo-600 rounded-xl text-white shadow">
                <ShoppingBag className="" size={18} />
              </div>
              <span className="text-xl font-bold tracking-wide">
                <span className="text-cyan-400">Electronic</span>
                <span className="ml-1 text-muted-foreground">Shop</span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed">
              Fast, reliable & modern POS software for shops, restaurants, and
              businesses.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-green-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Dashboard", "Products", "Sales", "Inventory", "Reports"].map(
                (link) => (
                  <li
                    key={link}
                    className="hover:text-green-400 cursor-pointer transition-colors duration-200"
                  >
                    {link}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>
                Email: <span className="text-green-400">support@pos.com</span>
              </li>
              <li>
                Phone: <span className="text-green-400">+880 1700-000000</span>
              </li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} POS System. All rights reserved.
        </div>
      </footer>
    </SectionWrapper>
  );
}
