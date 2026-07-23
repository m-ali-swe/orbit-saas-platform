"use client";

import { useState } from "react";
import {
  BarChart3,
  Globe,
  TrendingUp,
  Layers,
  Zap,
  CheckCircle,
  Activity,
} from "lucide-react";

export default function ProductShowcase() {
  const [timeframe, setTimeframe] = useState<"7d" | "30d" | "90d">("30d");

  const timeframeData = {
    "7d": { activeUsers: "18,400", retention: "94.2%", avgLatency: "42ms", throughput: "1.2M/s" },
    "30d": { activeUsers: "84,200", retention: "96.8%", avgLatency: "38ms", throughput: "4.8M/s" },
    "90d": { activeUsers: "290,000", retention: "98.1%", avgLatency: "31ms", throughput: "14.2M/s" },
  };

  return (
    <section id="showcase" className="py-10 relative overflow-hidden bg-[#080610]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="size-3.5" /> Interactive Dashboard Preview
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Real-Time Product Analytics Engine
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Simulated demonstration showing real-time event streaming, user cohort retention, and system latency metrics.
          </p>
        </div>

        {/* Dashboard Showcase Card */}
        <div className="glass-panel rounded-3xl bg-[#0e0b1d]/95 border-purple-500/30 p-5 sm:p-7 shadow-2xl space-y-6">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-red-500/80" />
              <div className="size-2.5 rounded-full bg-amber-500/80" />
              <div className="size-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-gray-400 ml-2 flex items-center gap-1.5">
                <Globe className="size-3 text-purple-400" /> orbit.demo/app/dashboard
              </span>
            </div>

            {/* Timeframe selector */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 text-xs font-medium">
              {(["7d", "30d", "90d"] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded-full uppercase tracking-wider transition-all cursor-pointer text-[11px] ${
                    timeframe === tf
                      ? "bg-purple-600 text-white font-bold shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
              <div className="text-xs text-gray-400 flex items-center justify-between">
                <span>Active Monthly Users</span>
                <TrendingUp className="size-3.5 text-emerald-400" />
              </div>
              <div className="text-xl font-extrabold text-white">
                {timeframeData[timeframe].activeUsers}
              </div>
              <div className="text-[10px] text-emerald-400 font-medium">+24.5% cohort growth</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
              <div className="text-xs text-gray-400 flex items-center justify-between">
                <span>Cohort Retention</span>
                <Activity className="size-3.5 text-purple-400" />
              </div>
              <div className="text-xl font-extrabold text-white">
                {timeframeData[timeframe].retention}
              </div>
              <div className="text-[10px] text-purple-300 font-medium">Top 5% Industry Bench</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
              <div className="text-xs text-gray-400 flex items-center justify-between">
                <span>Edge Latency</span>
                <Zap className="size-3.5 text-indigo-400" />
              </div>
              <div className="text-xl font-extrabold text-white">
                {timeframeData[timeframe].avgLatency}
              </div>
              <div className="text-[10px] text-indigo-300 font-medium">Sub-50ms Global Target</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
              <div className="text-xs text-gray-400 flex items-center justify-between">
                <span>Event Throughput</span>
                <CheckCircle className="size-3.5 text-emerald-400" />
              </div>
              <div className="text-xl font-extrabold text-emerald-400">
                {timeframeData[timeframe].throughput}
              </div>
              <div className="text-[10px] text-gray-400">Zero Dropped Packets</div>
            </div>
          </div>

          {/* Feature Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {[
              { title: "Real-Time Event Stream", desc: "Process millions of product interactions per second with sub-50ms processing latency.", icon: Layers },
              { title: "Automated Funnels", desc: "Identify drop-off points instantly and trigger automated retention workflows.", icon: Activity },
              { title: "Enterprise Compliance", desc: "SOC2 Type II certified infrastructure with zero-knowledge data encryption.", icon: CheckCircle },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <Icon className="size-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-white">{f.title}</h3>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
