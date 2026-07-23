"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, Quote } from "lucide-react";

interface TestimonialItem {
  text: string;
  name: string;
  initials: string;
  username: string;
  company: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    text: "As a product designer constantly evaluating growth tools, Orbit's user interface concept immediately stood out for its clarity.",
    name: "Jamie Rivera",
    initials: "JR",
    username: "@jamietechguru",
    company: "NovaFlux Tech",
    rating: 5,
  },
  {
    text: "Our team's productivity and deployment speeds improved dramatically after adopting this unified dashboard layout.",
    name: "Josh Smith",
    initials: "JS",
    username: "@jjsmith_dev",
    company: "Vortex Media",
    rating: 5,
  },
  {
    text: "This application framework transformed how we manage team workspaces and automated user onboarding funnels.",
    name: "Morgan Lee",
    initials: "ML",
    username: "@morganleewhiz",
    company: "Krypton Labs",
    rating: 5,
  },
  {
    text: "I was amazed at how quickly we integrated the simulated analytics stream into our internal staging environment.",
    name: "Casey Jordan",
    initials: "CJ",
    username: "@caseyj_product",
    company: "Aetheria Dynamics",
    rating: 5,
  },
  {
    text: "Planning and monitoring user retention cohorts has never been simpler. The automated alerts keep our team aligned.",
    name: "Taylor Kim",
    initials: "TK",
    username: "@taylorkimm",
    company: "Apexium Dev",
    rating: 5,
  },
  {
    text: "The customizability and modular architecture of this codebase are top-notch for portfolio demonstrations.",
    name: "Riley Vance",
    initials: "RV",
    username: "@rileyvance",
    company: "Prismic Soft",
    rating: 5,
  },
  {
    text: "Adopting this interface layout streamlined our project management and improved communication across departments.",
    name: "Jordan Patel",
    initials: "JP",
    username: "@jpatelsdesign",
    company: "Cypher Systems",
    rating: 5,
  },
  {
    text: "With this app, we can easily track event throughput, assign team tasks, and review metric logs all in one place.",
    name: "Sam Dawson",
    initials: "SD",
    username: "@dawsontechtips",
    company: "Zenith Cloud",
    rating: 5,
  },
  {
    text: "Its user-friendly interface and robust responsive components support our diverse engineering needs.",
    name: "Casey Harper",
    initials: "CH",
    username: "@casey09",
    company: "Orbital AI",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialCard({ val }: { val: TestimonialItem }) {
  return (
    <div className="glass-card my-3 p-6 rounded-2xl bg-white/[0.02] border-white/10 flex flex-col justify-between space-y-4 shadow-sm">
      <div className="space-y-3">
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: val.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-amber-400" />
          ))}
        </div>

        <Quote className="size-5 text-purple-500/30" />

        <p className="text-gray-200 text-xs leading-relaxed italic">
          &quot;{val.text}&quot;
        </p>
      </div>

      {/* Author Info with Initials Avatar (No Image) */}
      <div className="pt-3 border-t border-white/10 flex items-center gap-3">
        <div className="size-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0 font-mono">
          {val.initials}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-bold text-white truncate flex items-center gap-1.5">
            <span>{val.name}</span>
            <span className="px-1.5 py-0.2 text-[8px] font-mono uppercase bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 shrink-0">
              Verified
            </span>
          </div>
          <div className="text-[10px] text-gray-400 truncate">
            {val.username} • <span className="text-purple-300 font-medium">{val.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 px-4 max-w-6xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-3 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="size-3.5" /> Sample Feedback Showcase
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          What Early Testers Say
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm">
          From intuitive interface design to powerful event streaming features, explore feedback from framework testers.
        </p>
      </div>

      {/* Infinite Scrolling Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[550px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        {/* Column 1 */}
        <div className="overflow-hidden h-full">
          <motion.div
            initial={{ translateY: "0%" }}
            animate={{ translateY: "-50%" }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex flex-col"
          >
            {[...firstColumn, ...firstColumn].map((val, idx) => (
              <TestimonialCard val={val} key={idx} />
            ))}
          </motion.div>
        </div>

        {/* Column 2 */}
        <div className="overflow-hidden h-full hidden md:block">
          <motion.div
            initial={{ translateY: "0%" }}
            animate={{ translateY: "-50%" }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex flex-col"
          >
            {[...secondColumn, ...secondColumn].map((val, idx) => (
              <TestimonialCard val={val} key={idx} />
            ))}
          </motion.div>
        </div>

        {/* Column 3 */}
        <div className="overflow-hidden h-full hidden lg:block">
          <motion.div
            initial={{ translateY: "0%" }}
            animate={{ translateY: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col"
          >
            {[...thirdColumn, ...thirdColumn].map((val, idx) => (
              <TestimonialCard val={val} key={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
