import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck,
  Globe2,
  Lock,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users2,
  Workflow,
  Building2,
  Layers,
  BarChart3,
  TrendingUp,
  Database,
  Cpu,
  Search,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work — 5-Stage Research & Commercialization Framework | Stratum",
  description:
    "Explore Stratum's systematic 5-stage research methodology, double-blind field audits, econometric modeling, and commercial partner matchmaking across East Africa.",
};

interface StageItem {
  step: string;
  kicker: string;
  name: string;
  tagline: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  sla: string;
  highlights: string[];
  deliverable: string;
  ctaLabel: string;
  ctaHref: string;
}

const STAGES: StageItem[] = [
  {
    step: "01",
    kicker: "STAGE 01 // SCOPING & PROTOCOL",
    name: "FRAME & DEFINE",
    tagline: "Isolate Strategic Objectives, Hypothesis Architecture & Bilateral NDA",
    description:
      "Collaborative scoping briefing, subnational geographic scaffolding, statistical sample power calibration (95% CI), and mutual bilateral NDA execution.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Search,
    sla: "Completed in 48–72 Hours",
    highlights: [
      "Executive Scoping Intake & Goal Decomposition",
      "Sample Power & Margin Calibration (95% CI, ±1.8% MoE)",
      "Bilateral Mutual Non-Disclosure Agreement (NDA)",
    ],
    deliverable: "Engagement Charter & Statistical Sampling Blueprint",
    ctaLabel: "COMMISSION STAGE 01",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&stage=01",
  },
  {
    step: "02",
    kicker: "STAGE 02 // PRIMARY FIELDWORK",
    name: "GROUND FIELDWORK",
    tagline: "Deploy Double-Blind Enumerator Sweeps, Kiosk Audits & Dialect Intercepts",
    description:
      "Coordinated enumerator sweeps across informal retail dukas, open-air wholesale corridors, and consumer households with zero client brand observer bias.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: Users2,
    sla: "Turnaround: 10–21 Business Days",
    highlights: [
      "Double-Blind Enumerator Allocation (Zero Brand Bias)",
      "Face-to-Face Vernacular Intercepts (Swahili & Local Dialects)",
      "100% GPS-Geofenced Retail POS & Kiosk Shelf Audits",
    ],
    deliverable: "Audit-Grade Primary Dataset & GPS Registry",
    ctaLabel: "INQUIRE ON FIELDWORK",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&stage=02",
  },
  {
    step: "03",
    kicker: "STAGE 03 // DATA SYNTHESIS",
    name: "ANALYSE & MODEL",
    tagline: "Clean, Normalize & Model Field Data into Decision-Grade Telemetry",
    description:
      "Removing informal trade distortion, calibrating price elasticity curves at single-coin increments, and triangulating reported sales against wholesale distributor invoices.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: Database,
    sla: "Synthesis Window: 5–7 Business Days",
    highlights: [
      "Primary Data Cleaning & Statistical Outlier Scrubbing",
      "Single-Coin Price Elasticity & Willingness-to-Pay Curves",
      "Multi-Tier Value Chain Margin & Markup Decomposition",
    ],
    deliverable: "Econometric Demand Model & Volume Matrix",
    ctaLabel: "VIEW ANALYTICS SCOPE",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&stage=03",
  },
  {
    step: "04",
    kicker: "STAGE 04 // EXECUTIVE ADVISORY",
    name: "STRATEGIC INTERPRET",
    tagline: "Translate Analytical Findings into Boardroom Route-to-Market Blueprints",
    description:
      "Senior sector directors evaluate competitor blind spots, route-to-market vulnerabilities, import tariff structures, and working capital constraints for executive decision-makers.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: TrendingUp,
    sla: "Strategy Briefing: 3–5 Business Days",
    highlights: [
      "Commercial Route-to-Market (RTM) Blueprinting",
      "Competitor Whitespace & Vulnerability Diagnostics",
      "Working Capital, FX & Regulatory De-Risking",
    ],
    deliverable: "Executive Intelligence Memo & Go-to-Market Blueprint",
    ctaLabel: "REQUEST ADVISORY BRIEF",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&stage=04",
  },
  {
    step: "05",
    kicker: "STAGE 05 // COMMERCIAL EXECUTION",
    name: "CONNECT & ACTIVATE",
    tagline: "Facilitate Commercial Introductions, Partner Screening & Transaction Milestones",
    description:
      "Connecting clients with pre-vetted regional distributors, audited factory suppliers, or co-investment partners under bilateral NDAs to bridge the final commercial mile.",
    bgClass: "bg-[#0A3D62] text-white",
    borderClass: "border-[#0E5284] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-100 border-white/20",
    icon: Globe2,
    sla: "Intake Review: < 48 Hours",
    highlights: [
      "Bilateral Commercial Counterpart Matchmaking",
      "Tier-1 Distributor Warehouse & Fleet Physical Audits",
      "Commercial Agreement Structuring & Milestone Escrow",
    ],
    deliverable: "Counterpart Due Diligence Dossier & Term Sheet",
    ctaLabel: "ACCESS DEAL ROOM",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&stage=05",
  },
];

const SLA_TIERS = [
  {
    title: "Rapid Whitespace Brief",
    kicker: "SPEED & DIRECTION",
    timeline: "10 TO 14 BUSINESS DAYS",
    badge: "10–14 DAYS",
    methodology:
      "Executive intake, consumer micro-panel (n=1,200), competitor retail price census, and channel whitespace audit.",
    deliverable:
      "Commercial Whitespace Index, Competitor Pricing Matrix, and Board Decision Scoping Memo.",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&scope=rapid-whitespace",
  },
  {
    title: "Subnational Kiosk Census",
    kicker: "EMPIRICAL DEPTH",
    timeline: "3 TO 5 WEEKS",
    badge: "3–5 WEEKS",
    methodology:
      "GPS retail kiosk audit (n=2,000+), vernacular dialect interviews, consumer intercepts, and wholesale margin tracking.",
    deliverable:
      "Audit-Grade Primary Dataset, Spatial GIS Trade Corridor Map, and Econometric Elasticity Model.",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&scope=subnational-census",
  },
  {
    title: "Longitudinal Brand Tracker",
    kicker: "ONGOING TELEMETRY",
    timeline: "MONTHLY OR QUARTERLY",
    badge: "QUARTERLY CYCLE",
    methodology:
      "Longitudinal consumer panel, aided/unaided brand recall, shelf stockout telemetry, and NPS benchmarking.",
    deliverable:
      "Executive Analytics Dashboard, Quarterly Board Intelligence Dossier, and Real-Time Alert Feeds.",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&scope=brand-tracker",
  },
  {
    title: "Cross-Border Due Diligence",
    kicker: "TRANSACTION READINESS",
    timeline: "2 TO 4 WEEKS",
    badge: "2–4 WEEKS",
    methodology:
      "Bilateral counterpart screening, warehouse physical audit, factory technical inspection, and escrow structure.",
    deliverable:
      "Vetted Distributor Introductions, Counterpart Due Diligence Dossiers, and Executable Term Sheets.",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&scope=cross-border-due-diligence",
  },
];

const AUDIT_TIERS = [
  {
    tier: "TIER 01",
    label: "SPATIAL CHECK",
    title: "GPS Spatial Geofencing",
    description:
      "Programmatic geofencing verifies that field enumerators conduct interviews strictly inside registered commercial cluster boundaries. Off-premise entries trigger immediate quarantine.",
  },
  {
    tier: "TIER 02",
    label: "CADENCE CHECK",
    title: "Vernacular Dialect Audits",
    description:
      "Qualitative interviews require consent-based audio cadence verification. Field leads audit interview duration and authentic language cadence in Swahili and regional trade dialects.",
  },
  {
    tier: "TIER 03",
    label: "15% RE-CONTACT",
    title: "Supervisor Re-Contact Audits",
    description:
      "Independent field supervisors re-contact a randomized 15% sub-sample of respondents by phone and in-person visit to verify recorded SKU pricing and ensure zero fabrication.",
  },
  {
    tier: "TIER 04",
    label: "DIRECTOR SEAL",
    title: "Research Director Sign-Off",
    description:
      "Final intelligence dossiers require formal methodological sign-off by a senior research director at our Nairobi HQ before client presentation or commercial partner matching.",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Hero Header: Minimal, Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
              <Workflow className="size-3 text-primary shrink-0" />
              <span>OPERATIONAL METHODOLOGY &bull; NAIROBI ADVISORY DESK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              From Questions to Intelligence. From Intelligence to Opportunity.
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum operates a systematic 5-stage research, analytical modeling, and commercial intermediation framework engineered specifically for emerging and traditional trade markets where desktop research falls short.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="#five-stages"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <Layers className="size-3.5 text-primary" />
                <span>THE 5 STAGES</span>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>OUR 6 SERVICES</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Standards Metric Strip (Sharp WordPress Grid) */}
      <section className="py-6 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>INTAKE SLA</span>
                <Clock className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">&lt; 6 Hours</div>
              <p className="text-[11px] text-muted-foreground">Scoping Memo &amp; Desk Allocation</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>STATISTICAL RIGOR</span>
                <ShieldCheck className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">95% CI</div>
              <p className="text-[11px] text-muted-foreground">Margin of Error (±1.8% Calibrated)</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>FIELD METHODOLOGY</span>
                <Users2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">Double-Blind</div>
              <p className="text-[11px] text-muted-foreground">Zero Client Observer Bias</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>GEOGRAPHIC DESK</span>
                <Globe2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">East Africa</div>
              <p className="text-[11px] text-muted-foreground">Nairobi HQ Operations Command</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 5 SEQUENTIAL STAGES: Tall WordPress-Style Sharp-Edged Colored Cards */}
      <section id="five-stages" className="py-14 sm:py-20 border-b border-border/80 bg-background scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              FIVE SEQUENTIAL STAGES // OPERATIONAL WORKSTREAM
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Our 5-Stage Research &amp; Commercialization Process
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              From problem definition to on-the-ground fieldwork, econometric modeling, strategic interpretation, and direct commercial execution:
            </p>
          </div>

          {/* WordPress Grid: 5 Tall Sharp Cards with Colored Backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {STAGES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className={`${s.bgClass} border ${s.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[460px]`}
                >
                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Step + Icon Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <span className="font-mono text-xs font-bold tracking-wider opacity-90">
                        {s.kicker}
                      </span>
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Title + Tagline */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                        {s.name}
                      </h3>
                      <p className="text-[11px] font-mono text-white/80 uppercase tracking-wider">
                        {s.tagline}
                      </p>
                    </div>

                    {/* Brief Description */}
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                      {s.description}
                    </p>

                    {/* SLA Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-white/20 bg-white/10 text-[10px] font-mono text-white/90">
                      <Clock className="size-3 text-white/80 shrink-0" />
                      <span>{s.sla}</span>
                    </div>

                    {/* 3 Key Highlights */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/70 block">
                        KEY GROUND ACTIVITIES:
                      </span>
                      {s.highlights.map((hl) => (
                        <div key={hl} className="flex items-start gap-2 text-xs text-white/90">
                          <CheckCircle2 className="size-3.5 text-white/80 shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Deliverable & Action Button */}
                  <div className="pt-4 border-t border-white/15 space-y-3">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block">
                        PRIMARY DELIVERABLE:
                      </span>
                      <span className="text-xs font-medium text-white block">
                        {s.deliverable}
                      </span>
                    </div>

                    <Link
                      href={s.ctaHref}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-none bg-white text-[#002B49] font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
                    >
                      <span>{s.ctaLabel}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Quick 6th Card: Nairobi Command Overview */}
            <div className="bg-[#1E293B] text-white border border-[#334155] hover:border-slate-400/60 rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm min-h-[460px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="font-mono text-xs font-bold tracking-wider opacity-90">
                    CENTRAL COMMAND // GOVERNANCE
                  </span>
                  <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white">
                    <Building2 className="size-4.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                    Nairobi Operations Desk
                  </h3>
                  <p className="text-[11px] font-mono text-white/80 uppercase tracking-wider">
                    Delta Corner Tower, Westlands, Nairobi
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  All 5 stages are orchestrated through our central Nairobi advisory desk. Direct senior research director governance ensures continuous oversight, compliance with ESOMAR guidelines, and bilateral NDA enforcement.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/70 block">
                    OPERATIONAL PROTOCOLS:
                  </span>
                  <div className="flex items-start gap-2 text-xs text-white/90">
                    <ShieldCheck className="size-3.5 text-white/80 shrink-0 mt-0.5" />
                    <span>Binding Bilateral Non-Disclosure Agreements</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-white/90">
                    <CheckCircle2 className="size-3.5 text-white/80 shrink-0 mt-0.5" />
                    <span>KDPA &amp; ESOMAR Compliance Standard</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-white/90">
                    <Clock className="size-3.5 text-white/80 shrink-0 mt-0.5" />
                    <span>Dedicated Research Director Assigned</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 space-y-3">
                <Link
                  href="/contact?cta=COMMISSION_RESEARCH"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-none bg-white text-[#002B49] font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
                >
                  <span>TALK TO NAIROBI HQ</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUR-TIER EMPIRICAL VERIFICATION & QUALITY ASSURANCE */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              DATA INTEGRITY &amp; GOVERNANCE
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Four-Tier Verification &amp; Anti-Bias Protocol
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every field observation captured across traditional wholesale markets, informal dukas, and commercial corridors undergoes four rigorous verification gates:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUDIT_TIERS.map((tier) => (
              <div
                key={tier.tier}
                className="p-5 rounded-none border border-border/80 bg-card space-y-3 shadow-2xs hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                  <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded-none bg-primary/10 border border-primary/20">
                    {tier.tier}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    {tier.label}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-foreground">
                    {tier.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENGAGEMENT TIMELINES & COMMERCIAL SCOPES (SLA Cards) */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              COMMERCIAL ENGAGEMENT PACKAGES
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Realistic Project Timelines &amp; Scopes
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tailored study timelines calibrated for rapid decision-making or exhaustive ground-truth census:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SLA_TIERS.map((sla) => (
              <div
                key={sla.title}
                className="rounded-none border border-border/80 bg-card p-5 sm:p-6 flex flex-col justify-between space-y-5 hover:border-primary/50 transition-all shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                    <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase">
                      {sla.kicker}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-none bg-primary/10 text-primary border border-primary/20">
                      {sla.badge}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {sla.title}
                  </h4>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground block">
                      Methodology:
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {sla.methodology}
                    </p>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground block">
                      Core Deliverables:
                    </span>
                    <p className="text-xs text-foreground/90 font-medium leading-relaxed">
                      {sla.deliverable}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <Link
                    href={sla.ctaHref}
                    className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-none bg-muted hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>INITIATE THIS SCOPE</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INSTITUTIONAL ASSURANCES STRIP */}
      <section className="py-10 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-background">
              <ShieldCheck className="size-4.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <h4 className="font-semibold text-xs text-foreground uppercase">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px] leading-snug">
                  All research scoping, commercial objectives, and trade findings protected under binding mutual non-disclosure agreements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-background">
              <Clock className="size-4.5 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold text-xs text-foreground uppercase">Rapid 6-Hour Intake SLA</h4>
                <p className="text-muted-foreground text-[11px] leading-snug">
                  A specialized research director will review your submission and provide an initial scoping response within 6 business hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-background">
              <Building2 className="size-4.5 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold text-xs text-foreground uppercase">Central Operations Command</h4>
                <p className="text-muted-foreground text-[11px] leading-snug">
                  Delta Corner Tower, Westlands, Nairobi, orchestrating field teams and trade partnerships across East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SIGNATURE MIDNIGHT NAVY CORPORATE CTA BANNER (#002B49) */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/10 border border-white/20 text-[10px] font-mono text-white/90">
                <Sparkles className="size-3 text-sky-300" />
                <span>NAIROBI ADVISORY &bull; COMMERCIAL ENGAGEMENT DESK</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                Ready to Commission Ground Fieldwork or Strategic Advisory?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Discuss your target market, sector, and timeline with our senior research directors in Nairobi. We will formulate a tailored research protocol, statistical sample sizing, and preliminary scoping estimates within 6 business hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-[#002B49] font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-transparent text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <Phone className="size-3.5" />
                <span>CALL NAIROBI HQ</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-transparent text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <span>EXPLORE OUR 6 SERVICES</span>
              </Link>
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
