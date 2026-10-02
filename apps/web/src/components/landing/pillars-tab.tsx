"use client";

import React, { useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  Database,
  Handshake,
  Network,
  ShoppingBag,
  Sparkles,
  Users2,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

export function PillarsTab() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      step: "01",
      id: "research",
      title: "Market Research & Consumer Panels",
      subtitle: "First-Hand Feedback & Qualitative Depth",
      description:
        "We capture authentic consumer perspectives across complex and emerging markets. Combining verified online consumer panels with face-to-face fieldwork, focus groups, in-depth interviews (IDIs), and sensory product testing.",
      icon: Users2,
      metrics: [
        { label: "Panel Network", value: "190,000+" },
        { label: "Verified Demographics", value: "100%" },
        { label: "Field Verification", value: "GPS + Audio" },
      ],
      features: [
        "Brand tracking: Awareness, consideration, preference, and NPS",
        "Qualitative ethnography & in-depth interviews (IDIs)",
        "Sensory and formulation product testing prior to market launch",
        "Dynamic Feedback Gallery capturing authentic consumer verbatim",
      ],
      badge: "CONSUMER TRUTH",
      badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    },
    {
      step: "02",
      id: "intelligence",
      title: "The Intelligence Graph & Proprietary Data",
      subtitle: "Always-On Queryable Market Knowledge",
      description:
        "Moving beyond static yearly PDF reports. Every survey, panel response, and price signal feeds directly into our queryable Intelligence Graph—connecting consumer segments, behaviors, packaging, competitor positions, and regulations.",
      icon: Network,
      metrics: [
        { label: "Knowledge Nodes", value: "2.4M+" },
        { label: "Update Frequency", value: "Real-Time" },
        { label: "Synthetic Simulation", value: "0.5-Day Cycle" },
      ],
      features: [
        "Interactive Knowledge Graph connecting motivations to commercial outcomes",
        "Proprietary, continuously refreshed category datasets",
        "Synthetic + human hybrid simulation for rapid hypothesis validation",
        "Predictive market signals flagging pricing shifts and consumer trends",
      ],
      badge: "DECISION-GRADE",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    },
    {
      step: "03",
      id: "intermediation",
      title: "B2B Intermediation & The Deal Room",
      subtitle: "From Insight Directly to Commercial Transaction",
      description:
        "The critical differentiator. While traditional research firms end their work with a report, STRATUM introduces you to vetted local distributors, suppliers, co-packers, and institutional co-investors in our confidential Deal Room.",
      icon: Handshake,
      metrics: [
        { label: "Deal Pipeline", value: "$185M+" },
        { label: "Vetted Distributors", value: "1,200+" },
        { label: "Average Match Fit", value: "94.6%" },
      ],
      features: [
        "AI-matched distributor matching based on warehousing & cold-chain capabilities",
        "Confidential Deal Room with secure NDA vault and due diligence tracking",
        "Regulatory compliance guidance and local import barrier navigation",
        "Commercial term sheet facilitation and partnership milestone tracking",
      ],
      badge: "TRANSACTION BRIDGE",
      badgeColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    },
    {
      step: "04",
      id: "market",
      title: "Stratum Digital Market & Access",
      subtitle: "Real-World Commercialization Testbed",
      description:
        "An innovative commercial testbed where products graduating from research testing enter live digital commerce to measure consumer velocity, reorder patterns, and basket affinity before committing to massive factory scale.",
      icon: ShoppingBag,
      metrics: [
        { label: "Testbed SKUs", value: "320+" },
        { label: "Repeat Order Rate", value: "41.2%" },
        { label: "Flywheel Feedback", value: "Closed-Loop" },
      ],
      features: [
        "Real-world sales data feeding directly back into the Intelligence Graph",
        "Consumer reorder and pricing tolerance verification in live trade",
        "Commercialization stepping stone into retail and regional distribution",
        "De-risked market entry for international brands and regional pioneers",
      ],
      badge: "COMMERCIAL FLYWHEEL",
      badgeColor: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
    },
  ];

  const current = pillars[activePillar] ?? pillars[0];

  return (
    <div className="w-full space-y-8">
      {/* 4-Step Selector Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isActive = activePillar === idx;
          return (
            <button
              type="button"
              suppressHydrationWarning
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden ${
                isActive
                  ? "bg-card border-primary/50 shadow-md ring-1 ring-primary/20"
                  : "bg-card/50 border-border/70 hover:bg-card hover:border-border"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />
              )}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  {pillar.step}
                </span>
                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${pillar.badgeColor}`}
                >
                  {pillar.badge}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2.5">
                <div
                  className={`size-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug line-clamp-1">
                  {pillar.title}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Detailed Showcase Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card shadow-lg relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Features (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-muted-foreground">
                  CAPABILITY {current.step}
                </span>
                <span className="text-border">•</span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${current.badgeColor}`}>
                  {current.subtitle}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2.5 pt-2">
              {current.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="size-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground/90 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                Inquire About {current.title.split("&")[0]}
                <ArrowRight className="size-3.5" />
              </a>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-blue-600 dark:text-blue-400" />
                Audit-Grade Reliability Guaranteed
              </span>
            </div>
          </div>

          {/* Right Metrics & Visual Accent (5 cols) */}
          <div className="lg:col-span-5 bg-muted/30 border border-border/70 rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                STRATUM PERFORMANCE METRICS
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                ● LIVE VERIFIED
              </span>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 gap-4">
              {current.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-background border border-border/50 flex items-center justify-between"
                >
                  <span className="text-xs text-muted-foreground font-medium">
                    {m.label}
                  </span>
                  <span className="text-base sm:text-lg font-black font-mono text-foreground">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Strategic Value Proposition Pill */}
            <div className="p-3 rounded-lg bg-background/60 border border-border/40 text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Strategic Logic:</span> STRATUM doesn&apos;t just deliver a static report and leave you alone in the market. We walk you through every phase from first-hand validation to signed distribution contracts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
