"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenWaitlist?: () => void;
}

export default function Header({ onOpenWaitlist }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto max-w-5xl transition-all duration-300 rounded-full px-5 py-2 flex items-center justify-between ${
          isScrolled
            ? "glass-panel bg-[#0d0b14]/85 shadow-[0_4px_25px_rgba(0,0,0,0.6)] border-white/10"
            : "glass-panel bg-[#120f1d]/60 border-white/10"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center size-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
            <div className="size-full bg-[#0d0a17] rounded-full flex items-center justify-center font-bold text-xs text-purple-400">
              O
            </div>
            <span className="absolute top-0 right-0 size-2 bg-emerald-400 rounded-full animate-pulse border border-[#06050a]" />
          </div>
          <span className="font-bold text-base tracking-tight text-white">
            Orbit<span className="text-purple-400 font-bold">.saas</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-300 hover:text-white px-3 py-1 rounded-full hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Button
            variant="glow"
            size="sm"
            onClick={onOpenWaitlist}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="size-3.5" />
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-16 z-50 glass-panel bg-[#0d0b16]/95 border-white/15 rounded-3xl p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-gray-200 hover:text-purple-400 py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="glow"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist?.();
              }}
              className="w-full mt-2 rounded-full flex items-center justify-center gap-2 text-xs"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
