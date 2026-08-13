"use client";

import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Zap } from "lucide-react";

interface HeroProps {
  onOpenWaitlist?: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] pt-28 pb-10 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Orbit Graphic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {/* Core Radial Glow */}
        <div className="size-72 md:size-96 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-violet-900/40 blur-3xl animate-pulse" />

        {/* Outer Orbit Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[550px] sm:size-[700px] md:size-[850px] rounded-full border border-purple-500/25"
        >
          <div className="size-3 bg-purple-400 rounded-full shadow-[0_0_12px_#c084fc] absolute -top-1.5 left-1/2 -translate-x-1/2" />
        </motion.div>

        {/* Middle Orbit Ring (Dashed) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[380px] sm:size-[480px] md:size-[600px] rounded-full border border-indigo-400/20 border-dashed"
        >
          <div className="size-2.5 bg-indigo-300 rounded-full shadow-[0_0_10px_#818cf8] absolute top-1/2 -right-1.25 -translate-y-1/2" />
        </motion.div>

        {/* Inner Orbit Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[240px] sm:size-[300px] md:size-[380px] rounded-full border border-violet-500/30"
        >
          <div className="size-2 bg-violet-300 rounded-full shadow-[0_0_8px_#a78bfa] absolute -bottom-1 left-1/2 -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-5">
        {/* Honest Portfolio Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel bg-purple-950/40 border-purple-500/30 text-xs font-medium text-purple-200"
        >
          <Activity className="size-3.5 text-purple-400" />
          <span>Interactive Portfolio Concept • B2B SaaS Platform Showcase</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Streamline Product Growth with{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
            Unified SaaS Analytics
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          A sleek, interactive web application concept demonstrating modern SaaS analytics dashboards, automated user onboarding flows, and priority waitlist management.
        </motion.p>

        {/* Primary Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            variant="glow"
            size="md"
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto rounded-full px-7 py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <span>Request Early Access</span>
            <ArrowRight className="size-4" />
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              const el = document.getElementById("showcase");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto rounded-full px-6 py-2.5 text-xs font-medium flex items-center justify-center gap-2"
          >
            <Zap className="size-3.5 text-purple-400" />
            <span>Explore Feature Demo</span>
          </Button>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
        >
          {[
            { label: "Productivity Lift", val: "+340%" },
            { label: "Active Team Workspaces", val: "12,000+" },
            { label: "Automated Workflows", val: "2.4M+" },
            { label: "Average Setup Time", val: "< 5 Mins" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl glass-card bg-white/[0.02] border-white/10 text-center"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-white bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent">
                {stat.val}
              </div>
              <div className="text-[11px] text-gray-400 mt-0.5 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
