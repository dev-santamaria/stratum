"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
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
  ChevronRight,
  PhoneCall,
  FileText,
} from "lucide-react";

interface SolutionItem {
  id: string;
  code: string;
  category: "scoping" | "consumer" | "brand-deal";
  taxonomy: string;
  title: string;
  tagline: string;
  description: string;
  dilemma: string;
  methodology: string;
  sla: string;
  compliance: string;
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
    taxonomy: "01 // FEASIBILITY SCOPING",
    title: "Market Opportunity Intelligence",
    tagline: "Market Sizing, Competitive Landscapes & Informal Whitespace",
    description:
      "We help corporate leaders identify and assess high-potential commercial opportunities by analyzing informal retail channels, competitor substitute dynamics, and distribution velocities before deploying capital.",
    dilemma:
      "Official trade figures and macro GDP statistics fail to measure informal retail volume, causing brands to miscalculate addressable market size by up to 84%.",
    methodology:
      "GPS-verified informal kiosk retail censuses, double-blind competitor SKU price scans, and econometric disposable income modeling across urban and peri-urban hubs.",
    sla: "10 to 14 Business Days",
    compliance: "ESOMAR Compliant • Double-Blind Protocol",
    metrics: [
      "Addressable Market Volume ($ & Units)",
      "Informal Channel Substitution Rate",
      "Historical 5-Year CAGR & Forecast",
      "Gross Margin Headroom by Sub-Region",
    ],
    deliverables: [
      "Addressable market sizing & volume trajectory across formal supermarkets and informal kiosks",
      "Competitor SKU matrix, packaging formats, and substitute pricing benchmarks",
      "Traditional trade channel distribution density mapping and wholesaler reach scans",
      "Consumer demand forecasting & whitespace commercial opportunity identification",
      "Import tariff, regulatory compliance, and cross-border trade clearance diagnostics",
    ],
    sampleDeliverableName: "Executive Market Opportunity Dossier & Feasibility Blueprint",
    icon: Compass,
    badge: "MARKET ASSESSMENT",
  },
  {
    id: "consumer-intelligence",
    code: "SOL-02",
    category: "consumer",
    taxonomy: "02 // BEHAVIORAL PANELS",
    title: "Consumer Intelligence & Panels",
    tagline: "High-Frequency Longitudinal Panels, Wallet Share & Price Sensitivity",
    description:
      "Through verified quantitative consumer panels and longitudinal telemetry, we track daily spending priorities, brand loyalty drivers, and inflation adjustments across African household segments.",
    dilemma:
      "Infrequent quarterly focus groups miss rapid wallet adjustments and brand switching triggered by subnational inflation spikes and currency shifts.",
    methodology:
      "56,000+ longitudinal mobile money consumer panel with automated daily spend logging, vernacular intercepts, and longitudinal purchase diary tracking.",
    sla: "2 to 3 Weeks",
    compliance: "KDPA • GDPR • Longitudinal Feed",
    metrics: [
      "Daily Wallet Allocation & Basket Affinity",
      "Net Promoter Score (NPS) by Income Tier",
      "Brand Switching & Churn Velocity Index",
      "Inflation & Price Elasticity Thresholds",
    ],
    deliverables: [
      "Verified consumer panel telemetry deployed across urban, peri-urban, and informal networks",
      "Purchasing habits, basket affinity, and informal cash vs mobile money allocation audits",
      "Subnational demographic, linguistic, and psychographic consumer segmentation",
      "Brand satisfaction, customer churn factors, and Net Promoter Scores (NPS)",
      "Price sensitivity curves, willingness-to-pay, and inflation resilience benchmarks",
    ],
    sampleDeliverableName: "Consumer Behavioral Archetypes & Price Elasticity Study",
    icon: Users2,
    badge: "HUMAN TRUTH",
  },
  {
    id: "product-testing",
    code: "SOL-03",
    category: "consumer",
    taxonomy: "03 // SENSORY & FORMULATION",
    title: "Product & Concept Testing",
    tagline: "Central-Location Sensory Trials, Packaging Ergonomics & SKU Sizing",
    description:
      "We help clients stress-test new products and packaging concepts before committing capital. Our field teams conduct double-blind sensory taste tests, packaging shelf-visibility evaluations, and localized price acceptance trials.",
    dilemma:
      "Standardized Western formulations and pack sizes frequently fail in emerging markets due to localized sweetness preferences and rigid single-coin price point thresholds.",
    methodology:
      "Controlled central-location sensory testing (CLT), double-blind taste panels, packaging durability trials, and single-coin price elasticity testing in live commercial markets.",
    sla: "14 to 21 Days",
    compliance: "Double-Blind Protocol • N=500+ Panel",
    metrics: [
      "Sensory Hedonic Score (1–9 Scale)",
      "Shelf Standout & Visibility Index",
      "Purchase Intent Rate (Pre vs Post Trial)",
      "Optimal Unit Price Acceptance Threshold",
    ],
    deliverables: [
      "Concept exploration, value proposition framing, and consumer resonance testing",
      "Flavor, formulation, aroma, and mouthfeel double-blind taste comparisons",
      "Packaging ergonomics, aesthetic appeal, and informal market shelf standout testing",
      "Blind head-to-head testing against domestic and international market leaders",
      "Purchase intent scoring and post-trial repeat adoption probability models",
    ],
    sampleDeliverableName: "Sensory Preference Index & SKU Formulation Dossier",
    icon: FlaskConical,
    badge: "SENSORY VALIDATION",
  },
  {
    id: "brand-intelligence",
    code: "SOL-04",
    category: "brand-deal",
    taxonomy: "04 // BRAND MONITORING",
    title: "Brand Intelligence & Tracking",
    tagline: "Continuous Equity, Consumer Sentiment & Competitive Share of Voice",
    description:
      "We help commercial enterprises monitor how their brands, products, and services evolve in the minds of consumers. Our approach tracks aided awareness, trial conversion, sentiment, and competitive share of physical distribution continuously.",
    dilemma:
      "Marketing teams rely on digital metrics that only reach a fraction of the population, missing physical retail shelf dominance and informal word-of-mouth sentiment.",
    methodology:
      "Multi-metro physical retail shelf surveillance, continuous aided/unaided brand recall interviews, and multi-dialect social sentiment tracking across key trade hubs.",
    sla: "Monthly / Quarterly Cycles",
    compliance: "Continuous Longitudinal Tracking",
    metrics: [
      "Aided & Unaided Brand Awareness",
      "Consideration to Conversion Funnel",
      "Consumer Trust & Reputation Index",
      "Share of Physical Shelf vs Voice",
    ],
    deliverables: [
      "Continuous aided and unaided brand awareness tracking across primary and secondary cities",
      "Brand consideration, trial, and recurring purchase conversion funnels",
      "Brand reputation, trust, and multi-dialect vernacular sentiment surveillance",
      "Share of voice vs share of physical retail distribution benchmarks",
      "Custom executive dashboards with real-time KPI alerts and quarterly board memos",
    ],
    sampleDeliverableName: "Continuous Brand Equity Tracker & Executive Memo",
    icon: Activity,
    badge: "ALWAYS-ON TRACKING",
  },
  {
    id: "market-entry",
    code: "SOL-05",
    category: "scoping",
    taxonomy: "05 // ROUTE-TO-MARKET",
    title: "Market Entry & Expansion Strategy",
    tagline: "Route-to-Market Architecture, AfCFTA Tariffs & Regulatory Roadmaps",
    description:
      "We de-risk geographic expansion into new African jurisdictions through structured route-to-market planning, distributor vetting, regulatory navigation, and tariff roadmaps across Africa, China, and India corridors.",
    dilemma:
      "Entering African markets via generic third-party distributor models results in high broker markups, parallel grey-market imports, and poor interior retail reach.",
    methodology:
      "City-tier market sequencing blueprints, physical Tier-1 distributor warehouse visits, AfCFTA tariff classification reconciliation, and local standards agency audits.",
    sla: "4 to 6 Weeks",
    compliance: "Bilateral NDA • Customs Audit Verified",
    metrics: [
      "City-Tier Market Prioritization Rank",
      "Distributor Route-to-Market Density",
      "Import Tariff & Landed Cost Breakdown",
      "Payback Period & Working Capital Needs",
    ],
    deliverables: [
      "Subnational market prioritization and city-tier expansion sequence blueprints",
      "Route-to-market (RTM) strategy across formal supermarkets and informal retail nodes",
      "Local regulatory clearance, import tariffs, customs standards, and standards compliance",
      "Commercial risk profiling, parallel import threats, and currency volatility safeguards",
      "Tier-1 distributor vetting, warehouse cold-chain checks, and contract term sheets",
    ],
    sampleDeliverableName: "Cross-Border Market Entry & Route-to-Market Blueprint",
    icon: Globe2,
    badge: "CROSS-BORDER SCALING",
  },
  {
    id: "b2b-intermediation",
    code: "SOL-06",
    category: "brand-deal",
    taxonomy: "06 // DEAL ROOM INTERMEDIATION",
    title: "B2B Intermediation & Deal Rooms",
    tagline: "Bilateral Trade Desks, Plant-Floor Vetting & Escrow Architecture",
    description:
      "We bridge commercial and investment gaps through verified B2B intermediation. We connect African commercial buyers directly with audited manufacturers in China/India and vetted Tier-1 distributors under binding bilateral NDAs.",
    dilemma:
      "Cross-border procurement without on-site factory verification exposes buyers to fraudulent brokers, defective shipments, and default risk with zero legal recourse.",
    methodology:
      "Physical plant-floor verification in Shenzhen/Guangzhou/Mumbai, bilateral NDA execution, distributor solvency verification, and escrow-backed transaction architecture.",
    sla: "2 to 4 Weeks",
    compliance: "Bilateral NDA Protocol • $185M+ Active Pipe",
    metrics: [
      "Plant Production Capacity & QA Rating",
      "Counterpart Solvency & Compliance Rating",
      "Matchmaking to Term Sheet Duration",
      "Escrow & Bilateral Protocol Adherence",
    ],
    deliverables: [
      "Confidential Deal Room access under strict bilateral non-disclosure agreements",
      "Physical factory verification dossiers from Guangdong, Yiwu, Mumbai, and Gujarat",
      "Direct commercial introductions to audited manufacturers and Tier-1 regional distributors",
      "Commercial term sheet advisory, due diligence verification, and bilateral escrow facilitation",
      "AfCFTA cross-border trade facilitation and customs logistics coordination",
    ],
    sampleDeliverableName: "Vetted Counterpart Dossier & Bilateral Deal Room Term Sheet",
    icon: Handshake,
    badge: "TRANSACTION BRIDGE",
  },
];

export default function SolutionsPage() {
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredSolutions =
    filterCategory === "all"
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => s.category === filterCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. HERO HEADER: REFINED GARTNER-GRADE ARCHITECTURE */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-3.5">
            <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase flex items-center gap-2">
              <Layers className="size-3.5 text-primary" />
              <span>01 // METHODOLOGICAL ARCHITECTURE</span>
              <span className="text-muted-foreground/60">&bull;</span>
              <span className="text-muted-foreground">6 STRUCTURED METHODOLOGIES</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Quantitative Research &amp; Strategic Intermediation Solutions
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Tailored research methodologies, proprietary data telemetry, and high-trust bilateral intermediation engineered to solve critical strategic and commercial challenges across Africa, China, and India trade corridors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Initiate Scoping Intake (Contact Desk)</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <span>Explore 5-Stage Framework</span>
              </Link>
            </div>
          </div>

          {/* Symmetrical Footprint Status Ribbon */}
          <div className="p-4 rounded-xl border border-border/80 bg-card shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Audited Methodological Footprint:</span>
              </div>
              <span>6 Proprietary Suites</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>14,200+ Retail Outlets</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>56,000+ Panelists</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>ESOMAR &amp; KDPA Compliant</span>
            </div>
            <div className="text-[11px] font-mono text-muted-foreground">
              Centrally Directed via East Africa HQ (Nairobi)
            </div>
          </div>

          {/* Refined Filter Rail */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-muted/40 border border-border/80 w-fit">
              {[
                { id: "all", label: "All Methodologies", count: "Suite (6)" },
                { id: "scoping", label: "Market Scoping & Entry", count: "SOL-01 & 05" },
                { id: "consumer", label: "Consumer & Sensory Telemetry", count: "SOL-02 & 03" },
                { id: "brand-deal", label: "Brand Tracking & Deal Rooms", count: "SOL-04 & 06" },
              ].map((tab) => {
                const isActive = filterCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setFilterCategory(tab.id)}
                    className={`inline-flex items-center gap-2 py-2 px-3.5 rounded-lg text-xs transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-card/90 font-medium"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
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

      {/* 2. COMPREHENSIVE SOLUTIONS DOSSIERS GRID */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                02 // METHODOLOGY SPECIFICATIONS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Structured Research &amp; Commercial Capabilities
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              Showing {filteredSolutions.length} of {SOLUTIONS.length} Methodological Suites
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <article
                  key={sol.id}
                  id={sol.id}
                  className="rounded-xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between space-y-6 group scroll-mt-24"
                >
                  <div className="space-y-5">
                    {/* Header: Taxonomy & Code */}
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-primary">
                            {sol.code}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {sol.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground font-bold">
                        {sol.badge}
                      </span>
                    </div>

                    {/* Tagline & Executive Description */}
                    <div className="space-y-1.5">
                      <div className="text-xs font-semibold text-primary">
                        {sol.tagline}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    {/* Problem Solved & Ground Methodology */}
                    <div className="space-y-3 text-xs border-t border-border/60 pt-3">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">
                          The Market Blindspot:
                        </span>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {sol.dilemma}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase font-bold text-foreground">
                          Fieldwork &amp; Telemetry Engine:
                        </span>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {sol.methodology}
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics Monitored */}
                    <div className="space-y-2 border-t border-border/60 pt-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Key Telemetry Metrics Monitored:
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
                    <div className="space-y-2 border-t border-border/60 pt-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        Primary Deliverables Package:
                      </span>
                      <ul className="space-y-1.5">
                        {sol.deliverables.map((del, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-foreground font-medium leading-snug"
                          >
                            <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-1 text-[11px] font-mono text-muted-foreground">
                        <span className="text-foreground font-semibold">Primary Artifact:</span> {sol.sampleDeliverableName}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-0.5 text-[11px] font-mono text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="size-3 text-primary" />
                        <span>SLA: {sol.sla}</span>
                      </div>
                      <span className="text-[10px] block text-muted-foreground/80">
                        Standard: {sol.compliance}
                      </span>
                    </div>
                    <Link
                      href={`/contact?solution=${sol.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shrink-0"
                    >
                      <span>Request Scoping Brief</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY CROSS-REFERENCE MATRIX */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                03 // METHODOLOGY MATRIX
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                How Our Field Engines Power Each Solution Suite
              </h2>
            </div>
            <p className="text-xs text-muted-foreground max-w-md">
              Every solution integrates multiple proprietary ground techniques to ensure empirical validity and statistical precision.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/80 bg-card shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-muted/40 border-b border-border/70 text-[11px] font-mono uppercase text-muted-foreground">
                <tr>
                  <th className="p-4 sm:p-5 font-bold text-foreground">Solution Suite</th>
                  <th className="p-4 text-center">Mobile Panels</th>
                  <th className="p-4 text-center">Retail Census</th>
                  <th className="p-4 text-center">Vernacular IDIs</th>
                  <th className="p-4 text-center">Sensory Lab</th>
                  <th className="p-4 text-center">Econometric Modeling</th>
                  <th className="p-4 text-center">Deal Room</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 font-mono text-[11px]">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-foreground font-sans text-xs">SOL-01: Market Opportunity</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-foreground font-sans text-xs">SOL-02: Consumer Intelligence</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-foreground font-sans text-xs">SOL-03: Product &amp; Concept Testing</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-foreground font-sans text-xs">SOL-04: Brand Intelligence</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-foreground font-sans text-xs">SOL-05: Market Entry &amp; Expansion</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-foreground font-sans text-xs">SOL-06: B2B Intermediation</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-muted-foreground/40">—</td>
                  <td className="p-4 text-center text-emerald-600 dark:text-emerald-400 font-medium">YES</td>
                  <td className="p-4 text-center text-primary font-bold">CORE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold">CORE</span> Primary Engine
            </span>
            <span className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">YES</span> Integrated Field Technique
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-muted-foreground/40 font-bold">—</span> Not Applicable
            </span>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL ENGAGEMENT & ASSURANCES STRIP */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                04 // INITIATE SCOPING BRIEF
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Commission a Custom Research or Deal Room Scope
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Discuss your target geography and objectives directly with our research directors. We will formulate a tailored scoping memo, sample power calculation, and project timeline.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all shrink-0 cursor-pointer"
            >
              <span>Book Intake Briefing (Contact Desk)</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Institutional Assurances Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px]">
                  All solution scoping and Deal Room data protected under binding non-disclosure agreements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <Clock className="size-4 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Rapid 6-Hour Intake Window</h4>
                <p className="text-muted-foreground text-[11px]">
                  A specialized research lead will review your briefing and respond within 6 business hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <Building2 className="size-4 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Central Operations Command</h4>
                <p className="text-muted-foreground text-[11px]">
                  Headquartered in East Africa (Nairobi), orchestrating regional corridors globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Native Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
