"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Store,
  Building2,
  Cpu,
  Wheat,
  HeartPulse,
  Factory,
  Flame,
  Radio,
  Truck,
  Boxes,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface IndustryCluster {
  id: string;
  name: string;
  tag: string;
  description: string;
  sectors: { name: string; icon: React.ElementType }[];
  metrics: string[];
  fieldHighlights: string[];
}

const CLUSTERS: IndustryCluster[] = [
  {
    id: "consumer-retail",
    name: "Consumer, Retail & FMCG",
    tag: "High-Velocity Consumer Markets",
    description:
      "Capturing authentic consumer demand, daily brand switches, and shelf pricing across formal hypermarkets, township spazas, and open-air wholesale corridors.",
    sectors: [
      { name: "Fast-Moving Consumer Goods", icon: Boxes },
      { name: "Informal Retail & Kiosks", icon: Store },
      { name: "Food & Beverage", icon: Wheat },
      { name: "Consumer Electronics", icon: Cpu },
    ],
    metrics: [
      "Daily Shelf Price Elasticity",
      "Brand Equity & Switching Velocity",
      "Kiosk Distribution Stockout Rate",
      "Consumer Twin Archetype Calibrations",
    ],
    fieldHighlights: [
      "GPS-verified audits in 53,000+ neighborhood retail kiosks (dukas, spazas, souks)",
      "Daily consumer basket intercepts in local dialects (Swahili, Pidgin, Hausa, French)",
      "Direct FMCG distributor margin analysis across Tier-1 and Tier-2 wholesalers",
    ],
  },
  {
    id: "finance-tech",
    name: "Financial Services & Technology",
    tag: "Fintech & Digital Infrastructure",
    description:
      "Telemetry on financial inclusion, mobile money velocity, cross-border remittance behavior, and digital adoption across Africa's unbanked and emerging middle class.",
    sectors: [
      { name: "Mobile Money & Payments", icon: Radio },
      { name: "Banking & Credit Systems", icon: Building2 },
      { name: "SaaS & Enterprise Tech", icon: Cpu },
      { name: "Telecommunications", icon: Radio },
    ],
    metrics: [
      "Agent Banking Float & Liquidity",
      "Mobile Wallet Transaction Share",
      "Micro-Lending Default Indicators",
      "Network Uptime vs User Experience",
    ],
    fieldHighlights: [
      "Continuous tracking of mobile money penetration (M-Pesa, MTN MoMo, Wave, Orange Money)",
      "B2B surveys with CFOs and digital treasury teams across key commercial hubs",
      "Telemetry on merchant POS terminal adoption and cash-to-digital transition velocity",
    ],
  },
  {
    id: "agri-health",
    name: "Agriculture & Healthcare",
    tag: "Essential Human Systems",
    description:
      "Connecting farmgate realities and pharmaceutical distribution lines to institutional capital, assessing food supply resilience and cold-chain integrity.",
    sectors: [
      { name: "Agribusiness & Food Systems", icon: Wheat },
      { name: "Pharmaceuticals & Healthcare", icon: HeartPulse },
      { name: "Agro-Inputs & Fertilizers", icon: Boxes },
      { name: "Cold-Chain Logistics", icon: Truck },
    ],
    metrics: [
      "Smallholder Farmgate Yields",
      "Essential Drug Availability Rate",
      "Cold-Chain Temperature Compliance",
      "Seasonal Commodity Price Spreads",
    ],
    fieldHighlights: [
      "Smallholder farmer panels covering coffee, tea, grains, and horticulture supply chains",
      "Field audits of private pharmacies, government clinics, and regional drug distributors",
      "Verification of cold-chain reliability and counterfeit drug penetration",
    ],
  },
  {
    id: "industrial-energy",
    name: "Industrials, Energy & Logistics",
    tag: "Cross-Border Infrastructure",
    description:
      "Strategic intelligence on manufacturing capacity, commercial freight corridors, renewable off-grid energy, and bilateral Asia-Africa supply lines.",
    sectors: [
      { name: "Manufacturing & Assembly", icon: Factory },
      { name: "Renewable Energy & Solar", icon: Flame },
      { name: "Freight, Port & Maritime", icon: Truck },
      { name: "Building & Construction", icon: Building2 },
    ],
    metrics: [
      "Port Clearance Turnaround (Hours)",
      "Industrial Power Reliability Index",
      "Cross-Border Transit Freight Rates",
      "Raw Material Sourcing Deficits",
    ],
    fieldHighlights: [
      "Bilateral China-Africa and India-Africa supplier verification and factory audits",
      "Container dwell time and customs duty tracking at Mombasa, Apapa, and Durban ports",
      "Commercial solar C&I adoption studies and grid reliability diagnostics",
    ],
  },
];

export function IndustryMatrix() {
  const [activeClusterId, setActiveClusterId] = useState("consumer-retail");
  const cluster = CLUSTERS.find((c) => c.id === activeClusterId) || CLUSTERS[0];

  return (
    <div className="space-y-6 sm:space-y-8" suppressHydrationWarning>
      {/* Cluster Navigation Pill Selector */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto p-1.5 rounded-2xl bg-muted/30 border border-border/80 max-w-4xl mx-auto scrollbar-none gap-1.5 sm:gap-2">
        {CLUSTERS.map((item) => {
          const isActive = item.id === activeClusterId;
          return (
            <button
              key={item.id}
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveClusterId(item.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/70"
              }`}
            >
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Cluster Spotlight Card */}
      <div className="rounded-3xl border border-border/80 bg-card/95 shadow-md backdrop-blur-xl p-6 sm:p-8 lg:p-9 transition-all duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cluster Overview & Sectors (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                <Sparkles className="size-3" />
                <span>{cluster.tag}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {cluster.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {cluster.description}
              </p>
            </div>

            {/* Featured Sectors within Cluster */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                SPECIALIZED COMMERCIAL SECTORS:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {cluster.sectors.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.name}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-border/70 bg-background/70 text-xs font-semibold text-foreground hover:border-primary/40 transition-colors"
                    >
                      <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="size-3.5" />
                      </div>
                      <span className="leading-tight">{s.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* On-the-Ground Telemetry Highlights */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                FIELD TELEMETRY & RESEARCH HIGHLIGHTS:
              </span>
              <div className="space-y-2">
                {cluster.fieldHighlights.map((hl) => (
                  <div key={hl} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Metrics & Inquire Box (5 cols) */}
          <div className="lg:col-span-5 space-y-5 bg-muted/20 border border-border/80 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-primary" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  SECTOR TELEMETRY METRICS
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">
                LIVE AUDIT
              </span>
            </div>

            {/* Core Metrics Tracked */}
            <div className="space-y-2">
              {cluster.metrics.map((metric, idx) => (
                <div
                  key={metric}
                  className="p-3 rounded-xl border border-border/70 bg-card flex items-center justify-between text-xs"
                >
                  <span className="font-medium text-foreground">{metric}</span>
                  <span className="font-mono text-[11px] font-bold text-primary">
                    TRK-0{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA Box */}
            <div className="pt-2 border-t border-border/60 space-y-3">
              <p className="text-[11px] text-muted-foreground leading-snug">
                Need tailored brand tracking, distributor audits, or concept testing in this sector?
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all shadow-sm"
              >
                Request Sector Briefing
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
