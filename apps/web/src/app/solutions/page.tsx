"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Handshake,
  Layers,
  Network,
  Package,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users2,
  MessageSquare,
  Compass,
  FlaskConical,
  Activity,
  Globe2,
  Lock,
  Clock,
  Check,
  Building2,
  FileCheck,
} from "lucide-react";

interface SolutionItem {
  id: string;
  code: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  sla: string;
  metrics: string[];
  deliverables: string[];
  sampleDeliverableName: string;
  icon: React.ElementType;
  badge: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "market-opportunity",
    code: "SOL-01",
    category: "scoping",
    title: "Market Opportunity Intelligence",
    tagline: "Market Sizing, Competitive Landscapes & Emerging Trends",
    description:
      "We help clients identify and assess high-potential commercial opportunities by analysing real consumer demand, informal retail channels, competitor substitute dynamics, and distribution velocities across emerging markets.",
    sla: "Turnaround: 10 to 14 Business Days",
    metrics: [
      "Addressable Market Volume ($ & Units)",
      "Informal Channel Substitution Rate",
      "Historical 5-Year CAGR & Forecast",
      "Gross Margin Headroom by Sub-Region",
    ],
    deliverables: [
      "Addressable market sizing & historical volume trajectory across formal and informal tiers",
      "Competitor SKU matrix, packaging formats, and substitute pricing benchmarks",
      "Informal retail & traditional trade channel distribution density mapping",
      "Consumer demand forecasting & whitespace commercial opportunity identification",
      "Import tariff, regulatory compliance, and cross-border trade clearance diagnostics",
    ],
    sampleDeliverableName: "Market Opportunity Dossier & Scoping Blueprint",
    icon: Compass,
    badge: "MARKET ASSESSMENT",
  },
  {
    id: "consumer-intelligence",
    code: "SOL-02",
    category: "consumer",
    title: "Consumer Intelligence",
    tagline: "Patterns in Behaviour, Habits, Preferences & Satisfaction",
    description:
      "Through targeted quantitative and qualitative research, we identify behavioral patterns, spending priorities, brand loyalty drivers, and consumption habits to help businesses and investors make grounded decisions.",
    sla: "Turnaround: 2 to 3 Weeks",
    metrics: [
      "Wallet Allocation & Basket Affinity",
      "Net Promoter Score (NPS) by Tier",
      "Brand Switching Velocity Index",
      "Inflation Coping Thresholds",
    ],
    deliverables: [
      "Verified consumer panels deployed across 54 African countries and commercial hubs",
      "Purchasing habits, basket affinity, and informal cash vs mobile money allocation",
      "Subnational demographic, linguistic, and psychographic consumer segmentation",
      "Brand satisfaction, customer churn factors, and Net Promoter Scores (NPS)",
      "Price sensitivity curves, willingness-to-pay, and inflation resilience benchmarks",
    ],
    sampleDeliverableName: "Consumer Behavioral Archetypes & Elasticity Study",
    icon: Users2,
    badge: "HUMAN TRUTH",
  },
  {
    id: "product-testing",
    code: "SOL-03",
    category: "consumer",
    title: "Product & Concept Testing",
    tagline: "Pre-Commercialisation Sensory, Packaging & Reception Testing",
    description:
      "We help clients stress-test new products and packaging concepts before committing capital. Our field teams conduct sensory taste tests, packaging shelf-visibility evaluations, and purchase intent surveys in live commercial hubs.",
    sla: "Turnaround: 14 to 21 Days",
    metrics: [
      "Sensory Hedonic Score (1–9 Scale)",
      "Shelf Standout & Eye-Tracking Index",
      "Purchase Intent Rate (Pre vs Post Trial)",
      "Optimal Unit Price Acceptance",
    ],
    deliverables: [
      "Concept exploration, value proposition framing, and consumer resonance testing",
      "Flavour, formulation, aroma, and mouthfeel blind taste comparisons",
      "Packaging ergonomics, aesthetic appeal, and informal market shelf standout testing",
      "Blind head-to-head testing against domestic and international market leaders",
      "Purchase intent scoring and post-trial repeat adoption probability models",
    ],
    sampleDeliverableName: "Sensory Formulation & Concept Clearance Report",
    icon: FlaskConical,
    badge: "SENSORY VALIDATION",
  },
  {
    id: "brand-intelligence",
    code: "SOL-04",
    category: "brand-deal",
    title: "Brand Intelligence",
    tagline: "Continuous Health, Consumer Perception & Competitive Tracking",
    description:
      "We help businesses monitor how their brands, products, and services evolve in the minds of consumers. Our approach tracks aided awareness, trial conversion, sentiment, and competitive share of voice continuously.",
    sla: "Turnaround: Monthly / Quarterly Pacing",
    metrics: [
      "Aided & Unaided Brand Awareness",
      "Brand Consideration to Conversion Rate",
      "Consumer Trust & Reputation Index",
      "Competitor Share of Shelf & Voice",
    ],
    deliverables: [
      "Continuous aided and unaided brand awareness tracking across key metros and secondary cities",
      "Brand consideration, trial, and recurring purchase conversion funnels",
      "Brand reputation, trust, and multi-dialect social sentiment surveillance",
      "Share of voice vs share of physical retail distribution benchmarks",
      "Custom executive dashboards with real-time KPI alerts and quarterly board memos",
    ],
    sampleDeliverableName: "Continuous Brand Tracker & Performance Memo",
    icon: Activity,
    badge: "ALWAYS-ON TRACKING",
  },
  {
    id: "market-entry",
    code: "SOL-05",
    category: "scoping",
    title: "Market Entry & Expansion",
    tagline: "De-Risking Geographic Expansion Through Actionable Intelligence",
    description:
      "We help clients practically explore and enter new markets through structured research, route-to-market planning, distributor due diligence, and regulatory navigation across Africa, China, and India corridors.",
    sla: "Turnaround: 4 to 6 Weeks",
    metrics: [
      "City-Tier Market Prioritization Rank",
      "Distributor Route-to-Market Density",
      "Import Tariff & Non-Tariff Cost %",
      "Payback Period & Working Capital Need",
    ],
    deliverables: [
      "Subnational market prioritization and city-tier expansion sequence blueprints",
      "Route-to-market (RTM) strategy across formal supermarkets and informal retail nodes",
      "Local regulatory clearance, import tariffs, customs standards, and standards compliance",
      "Commercial risk profiling, parallel import threats, and currency volatility safeguards",
      "Pilot sales testing via the Stratum Digital Market prior to full regional rollout",
    ],
    sampleDeliverableName: "Market Entry Blueprint & RTM Strategy Dossier",
    icon: Globe2,
    badge: "CROSS-BORDER SCALING",
  },
  {
    id: "b2b-intermediation",
    code: "SOL-06",
    category: "brand-deal",
    title: "Business & Investment Intermediation",
    tagline: "Connecting Businesses, Investors & Partners to Commercial Deals",
    description:
      "We bridge investment gaps through business-to-business intermediation. We connect businesses, investors, entrepreneurs, and strategic partners with vetted opportunities and potential counterparts in our confidential Deal Room.",
    sla: "Turnaround: 2 to 4 Weeks",
    metrics: [
      "Distributor Warehouse Cold-Chain Score",
      "Counterpart Financial Health Rating",
      "Matchmaking to Term Sheet Duration",
      "Escrow & Bilateral NDA Compliance",
    ],
    deliverables: [
      "Confidential Deal Room matchmaking under strict bilateral non-disclosure agreements",
      "Audited Tier-1 distributor, wholesaler, and cold-chain operator introductions",
      "Institutional co-investor, private equity, and development finance counterpart identification",
      "Cross-border trade desks linking African buyers directly with Chinese and Indian manufacturers",
      "Commercial term sheet advisory, due diligence verification, and bilateral escrow facilitation",
    ],
    sampleDeliverableName: "Vetted Counterpart Dossier & Deal Room Term Sheets",
    icon: Handshake,
    badge: "TRANSACTION BRIDGE",
  },
];

export default function SolutionsPage() {
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredSolutions =
    filterCategory === "all"
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => s.category === filterCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              <Layers className="size-3.5" />
              <span>SOLUTIONS ARCHITECTURE</span>
              <span className="text-border">•</span>
              <span className="text-foreground">6 STRUCTURED METHODOLOGIES</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Intelligence Designed Around Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                Commercial Objectives
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Tailored research methodologies, proprietary data telemetry, and high-trust intermediation engineered to solve critical strategic and commercial challenges across Africa, China, and India trade corridors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all cursor-pointer"
              >
                Discuss a Tailored Scope
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                Explore 5-Stage Framework
              </Link>
            </div>
          </div>

          {/* Quick Filter Bar */}
          <div className="w-full max-w-4xl mx-auto pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-muted/40 border border-border/80 shadow-xs">
              {[
                { id: "all", label: "All Solutions", count: "Suite (6)", sub: "Full Portfolio" },
                { id: "scoping", label: "Scoping & Entry", count: "01 & 05", sub: "Market Intelligence" },
                { id: "consumer", label: "Consumer & Product", count: "02 & 03", sub: "Field Telemetry" },
                { id: "brand-deal", label: "Brand & Intermediation", count: "04 & 06", sub: "Partnerships & Deals" },
              ].map((tab) => {
                const isActive = filterCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilterCategory(tab.id)}
                    className={`flex flex-col items-center justify-center text-center py-2.5 px-2.5 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/90 font-medium"
                    }`}
                  >
                    <span className="text-xs font-bold leading-tight">
                      {tab.label}
                    </span>
                    <span
                      className={`text-[10px] font-mono mt-0.5 ${
                        isActive ? "text-primary-foreground/80 font-semibold" : "text-muted-foreground/70"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Solutions Grid */}
      <section className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="rounded-3xl border border-border/80 bg-card/95 backdrop-blur-xl p-6 sm:p-8 shadow-sm hover:border-primary/40 transition-all flex flex-col justify-between space-y-6 scroll-mt-24"
                >
                  {/* Card Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-black text-primary">
                            {sol.code}
                          </span>
                          <h3 className="text-lg font-bold text-foreground">
                            {sol.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground font-bold">
                        {sol.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-primary">
                        {sol.tagline}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    {/* Key Metrics Monitored */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground">
                        KEY TELEMETRY METRICS MONITORED:
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {sol.metrics.map((m) => (
                          <div
                            key={m}
                            className="p-2 rounded-lg border border-border/60 bg-muted/20 text-[11px] font-medium text-foreground flex items-center gap-1.5"
                          >
                            <TrendingUp className="size-3 text-primary shrink-0" />
                            <span className="truncate">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Structured Deliverables */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground">
                        DELIVERABLES PACKAGE:
                      </span>
                      <ul className="space-y-1.5">
                        {sol.deliverables.map((del, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted-foreground leading-snug"
                          >
                            <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Clock className="size-3.5 text-primary" />
                      <span>{sol.sla}</span>
                    </div>
                    <Link
                      href={`/contact?solution=${sol.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm"
                    >
                      Request Scoping Brief <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Methodology Cross-Reference Matrix */}
      <section className="py-12 sm:py-16 border-b border-border/60 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              CAPABILITY MATRIX
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              How Our Methodologies Power Each Solution
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every solution combines multiple proprietary field techniques to ensure maximum empirical validity.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-md">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/40 border-b border-border/80 text-[11px] font-mono uppercase text-muted-foreground">
                <tr>
                  <th className="p-4 sm:p-5">Solution Suite</th>
                  <th className="p-4 text-center">Digital Panels</th>
                  <th className="p-4 text-center">Retail Census</th>
                  <th className="p-4 text-center">Acoustic IDIs</th>
                  <th className="p-4 text-center">Sensory Lab</th>
                  <th className="p-4 text-center">Econometric Graph</th>
                  <th className="p-4 text-center">Deal Room</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-foreground">SOL-01: Market Opportunity</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-foreground">SOL-02: Consumer Intelligence</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-foreground">SOL-03: Product &amp; Concept Testing</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-foreground">SOL-04: Brand Intelligence</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-foreground">SOL-05: Market Entry &amp; Expansion</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-foreground">SOL-06: Business Intermediation</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-muted-foreground">—</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                  <td className="p-4 text-center text-emerald-500 font-bold">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. High-Converting Bottom CTA */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
            <Sparkles className="size-3" />
            COMMISSION A PROJECT
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Need a Customized Research or Deal Intermediation Scope?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Discuss your requirements with our research directors. We will formulate a tailored proposal, sample power calculation, and project timeline within 6 business hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all cursor-pointer"
            >
              Talk to Stratum — Book Intake Briefing
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              Review 5-Stage Framework
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
