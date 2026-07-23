"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShieldCheck, Mail } from "lucide-react";

interface CallToActionProps {
  onOpenWaitlist?: () => void;
}

export default function CallToAction({ onOpenWaitlist }: CallToActionProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onOpenWaitlist?.();
    }
  };

  return (
    <section className="py-10 relative overflow-hidden bg-[#080610]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden glass-panel bg-gradient-to-b from-[#181232] to-[#0d0a1b] border-purple-500/40 shadow-[0_0_50px_rgba(139,92,246,0.2)] text-center space-y-5">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider">
            Portfolio Showcase Demo
          </div>

          {/* Headline */}
          <h2 className="relative z-10 text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to Build Next-Gen B2B SaaS Interfaces?
          </h2>

          <p className="relative z-10 text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
            Experience the interactive early-access waitlist workflow or test the live dashboard preview above.
          </p>

          {/* Email Form with shadcn Input */}
          <div className="relative z-10 max-w-lg mx-auto pt-1">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-full glass-panel bg-[#0a0814]/90 border-purple-500/30">
              <div className="relative flex-1 w-full flex items-center pl-3">
                <Mail className="size-4 text-gray-400 mr-2 shrink-0" />
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 text-white placeholder-gray-400 text-xs focus-visible:ring-0 focus-visible:border-0 py-1.5 h-8 shadow-none"
                />
              </div>
              <Button type="submit" variant="glow" size="md" className="w-full sm:w-auto shrink-0 rounded-full px-6 py-2 text-xs font-semibold flex items-center justify-center gap-1.5">
                <span>Get Early Access</span>
                <ArrowRight className="size-3.5" />
              </Button>
            </form>
            <p className="text-[11px] text-gray-400 mt-2 flex items-center justify-center gap-2">
              <ShieldCheck className="size-3 text-emerald-400" /> Free interactive demo • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
