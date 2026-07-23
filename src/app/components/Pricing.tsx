"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Check, Zap, Shield, Tag } from "lucide-react";

interface PricingProps {
  onOpenWaitlist?: () => void;
}

export default function Pricing({ onOpenWaitlist }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      desc: "For early-stage products and indie developers scaling their user base.",
      monthlyPrice: 29,
      annualPrice: 23,
      badge: null,
      features: [
        "Up to 5 Team Workspaces",
        "Analytics Sandbox (100k events/mo)",
        "Weekly System Diagnostics",
        "Automated Funnel Reports",
        "Community Discord Access",
      ],
      cta: "Start 14-Day Free Demo",
      variant: "secondary" as const,
    },
    {
      name: "Professional",
      icon: Tag,
      desc: "Designed for scaling SaaS products requiring real-time event analytics.",
      monthlyPrice: 79,
      annualPrice: 63,
      badge: "Most Popular",
      features: [
        "Up to 25 Team Workspaces",
        "Unlimited Event Streaming",
        "Real-Time Cohort Analytics",
        "Automated User Retention Triggers",
        "Custom Event Dashboards",
        "Priority 24/7 Tech Support",
      ],
      cta: "Get Early Access",
      variant: "glow" as const,
    },
    {
      name: "Enterprise",
      icon: Shield,
      desc: "For enterprise platforms requiring custom SLAs, dedicated infrastructure, and SSO.",
      monthlyPrice: 249,
      annualPrice: 199,
      badge: "Custom Scale",
      features: [
        "Unlimited Workspaces & Users",
        "Custom Fine-Tuned Data Pipelines",
        "Real-Time Event Stream API",
        "Dedicated Account Strategist",
        "SSO & Custom SLA Guarantee",
      ],
      cta: "Contact Enterprise Sales",
      variant: "secondary" as const,
    },
  ];

  return (
    <section id="pricing" className="py-10 relative overflow-hidden bg-[#06050a]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Tag className="size-3.5" /> Sample Tier Structure
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Simple, Transparent Pricing Tiers
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Demonstration pricing model showing billing frequency toggles and tier feature comparisons.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="pt-3 flex items-center justify-center gap-3">
            <span className={`text-xs font-medium ${!isAnnual ? "text-white font-bold" : "text-gray-400"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 rounded-full bg-purple-950 border border-purple-500/40 p-0.5 transition-colors focus:outline-none cursor-pointer"
            >
              <div
                className={`size-5 rounded-full bg-purple-400 shadow-md transition-transform duration-300 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${isAnnual ? "text-white font-bold" : "text-gray-400"}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={i}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  plan.badge === "Most Popular"
                    ? "glass-panel bg-[#151128] border-purple-500/60 shadow-[0_0_30px_rgba(139,92,246,0.25)] scale-[1.02] z-10"
                    : "glass-card bg-white/[0.02] border-white/10"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Title & Icon */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{plan.desc}</p>
                    </div>
                    <div className="size-9 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      ${price}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">/ month</span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-2.5 pt-3 border-t border-white/10">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                        <div className="size-3.5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                          <Check className="size-2.5 text-purple-300" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={plan.variant}
                  size="md"
                  onClick={onOpenWaitlist}
                  className="w-full mt-6 rounded-full text-xs py-2.5"
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
