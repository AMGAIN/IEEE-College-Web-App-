"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Membership", href: "/membership" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#001220] shadow-md">
        <div className="max-w-7xl mx-auto px-5">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-black text-2xl text-white">
                IEEE
                <span className="ml-2 text-sm font-semibold tracking-widest text-white/70">
                  EEC
                </span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md text-white hover:text-blue-200 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.ieee.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-[#00629B] hover:bg-[#004f7c] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
              >
                Join IEEE
                <ChevronRight size={18} />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-md text-white"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <span className="font-black text-xl text-[#00629B]">
                IEEE EEC
              </span>

              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Footer Button */}
            <div className="p-4 border-t">
              <a
                href="https://www.ieee.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#00629B] hover:bg-[#004f7c] text-white rounded-lg font-semibold transition"
              >
                Join IEEE
                <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;