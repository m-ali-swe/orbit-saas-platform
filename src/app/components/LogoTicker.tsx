"use client";

import { motion } from "framer-motion";

export default function LogoTicker() {
  const dummyLogos = [
    "NOVAFLUX",
    "VORTEX",
    "KRYPTON",
    "AETHERIA",
    "APEXIUM",
    "PRISMIC",
    "CYPHER",
    "ZENITH",
  ];

  return (
    <section className="py-5 relative overflow-hidden bg-[#06050a] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 text-center mb-3">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">
          Fictional Partner Integrations & Concept Frameworks
        </p>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-14 shrink-0 pr-14"
        >
          {[...dummyLogos, ...dummyLogos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-bold tracking-widest text-xs md:text-sm text-gray-400/70 hover:text-white transition-colors cursor-default select-none font-mono"
            >
              <div className="size-1.5 rounded-full bg-purple-500/60" />
              <span>{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
