"use client";

import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040308] text-gray-400 py-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-7 rounded-full bg-purple-600 p-0.5 shadow-sm text-white font-bold text-xs">
                O
              </div>
              <span className="font-bold text-base text-white">
                Orbit<span className="text-purple-400 font-bold">.saas</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Interactive B2B SaaS Growth & Analytics Platform showcase built for web application design portfolios.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Simulated Interactive Portfolio Showcase</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase text-white font-bold tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li><a href="#showcase" className="hover:text-purple-300 transition-colors">Dashboard Showcase</a></li>
              <li><a href="#pricing" className="hover:text-purple-300 transition-colors">Pricing Structure</a></li>
              <li><a href="#testimonials" className="hover:text-purple-300 transition-colors">Tester Reviews</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase text-white font-bold tracking-wider">Documentation</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li><a href="#" className="hover:text-purple-300 transition-colors flex items-center gap-1">Architecture <ArrowUpRight className="size-3" /></a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors flex items-center gap-1">Component Tree <ArrowUpRight className="size-3" /></a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase text-white font-bold tracking-wider">Legal & Credits</h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li><a href="#" className="hover:text-purple-300 transition-colors">MIT License</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Terms of Showcase</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Orbit SaaS Portfolio Showcase. Built with Next.js 14 & Tailwind CSS.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="size-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Twitter className="size-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
