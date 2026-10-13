"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Globe2,
  Lock,
  MapPin,
  Radio,
  ShieldCheck,
  Users2,
  Clock,
  FileCheck,
  Workflow,
  FileText,
  Building2,
  Layers,
  BarChart3,
  ChevronRight,
  Compass,
  Sparkles,
  Target,
  Search,
  Check,
  Phone,
  Mail,
} from "lucide-react";

interface StageDetail {
  step: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  sla: string;
  methodologies: string[];
  keyActivities: string[];
  deliverable: string;
  deliverableType: string;
  artifactTitle: string;
  artifactBadge: string;
  artifactSnippet: {
    label: string;
    value: string;
  }[];
}

const STAGES: StageDetail[] = [
  {
    step: "01",
    name: "FRAME & DEFINE",
    tagline: "Isolate Strategic Objectives, Hypothesis Architecture & Bilateral NDA",
    summary:
      "Collaborative scoping briefing, subnational geographic scaffolding, statistical sample design, and mutual bilateral NDA execution.",
    description:
      "Every engagement starts with rigorous problem framing. Rather than applying generic desk templates, Stratum formulates clear commercial hypotheses: What is the true addressable volume in traditional trade? What are the consumer price elasticity thresholds at physical coin increments? Which geographic corridors demonstrate inventory velocity?",
    sla: "Completed in 48–72 Hours",
    methodologies: [
      "Executive Scoping Intake & Commercial Goal Decomposition",
      "Subnational Geographic & Retail Cohort Scaffolding",
      "Statistical Sample Power & Margin-of-Error Calibration (95% CI)",
      "Bilateral Mutual Non-Disclosure Agreement (NDA) Execution",
    ],
    keyActivities: [
      "Define target geographic corridors across East African urban, peri-urban, and transport nodes",
      "Establish primary commercial KPIs (Volume, Pack Format, Unit Price Point, Channel Margin)",
      "Calculate statistically defensible sample sizes (e.g., n=1,200 to n=3,600 respondents)",
      "Formulate vernacular questionnaire trees and observational fieldwork audit protocols",
    ],
    deliverable: "Engagement Charter & Statistical Sampling Blueprint",
    deliverableType: "Formal Scope Dossier",
    artifactTitle: "STRATUM ENGAGEMENT CHARTER SPECIMEN",
    artifactBadge: "STAGE 01 PROTOCOL",
    artifactSnippet: [
      { label: "Engagement Scope", value: "Subnational Retail Market Sizing & Price Sensitivity" },
      { label: "Geographic Boundary", value: "Primary Urban Wholesale Belts & Peri-Urban Corridors" },
      { label: "Statistical Sample Power", value: "n = 2,400 to 3,600 Observations (95% CI, ±1.8% MoE)" },
      { label: "Legal Framework", value: "Bilateral Mutual NDA Enforced • KDPA Aligned" },
    ],
  },
  {
    step: "02",
    name: "GROUND FIELDWORK",
    tagline: "Deploy Double-Blind Enumerator Sweeps, Kiosk Audits & Dialect Intercepts",
    summary:
      "Coordinated enumerator sweeps across informal retail dukas, open-air wholesale corridors, and consumer households.",
    description:
      "Our fieldwork infrastructure coordinates audited field researchers across traditional wholesale hubs, wet markets, and high-density informal retail clusters. We capture verifiable ground truth in the informal trade environments where over 70% of consumer goods transact.",
    sla: "Fieldwork Turnaround: 10–21 Business Days",
    methodologies: [
      "Double-Blind Enumerator Allocation (Zero Client Brand Bias)",
      "Face-to-Face Vernacular Intercepts (Swahili & Local Dialects)",
      "GPS-Geofenced Retail POS & Kiosk Shelf Inventory Audits",
      "Independent Supervisor Re-Contact Audits on 15% Sub-Sample",
    ],
    keyActivities: [
      "Deploy trained native-speaking enumerator squads to mapped commercial trade clusters",
      "Catalog SKU shelf presence, price display, pack sizes, and weekly stockout frequencies",
      "Conduct structured qualitative in-depth interviews with wholesale traders and kiosk owners",
      "Validate daily enumerator logs against physical store GPS centroids and acoustic timestamps",
    ],
    deliverable: "Audit-Grade Primary Dataset & GPS Fieldwork Registry",
    deliverableType: "Audit-Grade Fieldwork Registry",
    artifactTitle: "FIELD TELEMETRY REGISTRY SPECIMEN",
    artifactBadge: "GPS & AUDIO AUDITED",
    artifactSnippet: [
      { label: "Field Protocol", value: "Double-Blind Sweep (Enumerator Blinded to Sponsor)" },
      { label: "Spatial Validation", value: "100% Geocoded & Timestamped Store Observations" },
      { label: "Quality Audit", value: "15% Randomized Supervisor Re-Contact Verification" },
      { label: "Dialect Coverage", value: "Swahili & Subnational Commercial Trade Vernaculars" },
    ],
  },
  {
    step: "03",
    name: "ANALYSE & MODEL",
    tagline: "Clean, Normalize & Model Primary Field Data into Decision-Grade Telemetry",
    summary:
      "Removing informal trade distortion, calibrating price elasticity curves, and triangulating reported sales against wholesale volumes.",
    description:
      "Raw data in emerging markets is inherently noisy. Stratum removes sampling distortion, normalizes informal cash transaction practices, and triangulates declared consumer behavior against physical retail replenishment velocity and wholesale distributor invoices.",
    sla: "Synthesis Window: 5–7 Business Days",
    methodologies: [
      "Primary Data Cleaning & Statistical Outlier Scrubbing",
      "Single-Coin Price Elasticity & Willingness-to-Pay Curves",
      "Cross-Channel Distributor Margin & Markup Decomposition",
      "Triangulation with Regional Wholesale & Transport Benchmarks",
    ],
    keyActivities: [
      "Model price elasticity curves across informal kiosk vs. formal supermarket channels",
      "Decompose multi-tier trade margins across importer, distributor, sub-wholesaler, and duka",
      "Identify consumer basket substitution patterns when prices step over standard coin thresholds",
      "Calibrate econometric regressions against subnational purchasing power indicators",
    ],
    deliverable: "Synthesized Econometric Model & Category Volume Matrix",
    deliverableType: "Econometric Model & Data Pipeline",
    artifactTitle: "ECONOMETRIC DEMAND MODEL SPECIMEN",
    artifactBadge: "ECONOMETRIC CLEARED",
    artifactSnippet: [
      { label: "Analytical Scope", value: "Price Elasticity & Channel Volume Split Modeling" },
      { label: "Channel Segmentation", value: "Formal Modern Trade vs. Traditional Duka Commerce" },
      { label: "Margin Architecture", value: "Multi-Tier Value Chain Margin Decomposition" },
      { label: "Statistical Standard", value: "95% Confidence Interval Calibration" },
    ],
  },
  {
    step: "04",
    name: "STRATEGIC INTERPRET",
    tagline: "Translate Analytical Findings into Boardroom Route-to-Market Blueprints",
    summary:
      "Senior sector leads interpret field data to formulate actionable distribution strategies, SKU pack architectures, and risk mitigation paths.",
    description:
      "Data without commercial context is useless. Our industry directors evaluate competitor blind spots, route-to-market vulnerabilities, import tariff structures, and working capital constraints to deliver concrete executive recommendations for boardrooms and investment committees.",
    sla: "Strategy Briefing: 3–5 Business Days",
    methodologies: [
      "Commercial Route-to-Market (RTM) Blueprinting",
      "Competitor Whitespace & Vulnerability Diagnostics",
      "Working Capital, FX & Regulatory De-Risking Diagnostics",
      "Board-Level Executive Briefings & Presentation Sessions",
    ],
    keyActivities: [
      "Formulate SKU packaging recommendations tailored to purchasing power and cash denominations",
      "Map prioritized geographic distributor territory borders to prevent channel cannibalization",
      "Stress-test working capital requirements under local currency volatility regimes",
      "Deliver customized strategic dossiers with prioritized commercial milestones",
    ],
    deliverable: "Stratum Executive Intelligence Memo & Go-to-Market Blueprint",
    deliverableType: "Executive Board Dossier",
    artifactTitle: "STRATEGIC ADVISORY MEMO SPECIMEN",
    artifactBadge: "EXECUTIVE DIRECTIVE",
    artifactSnippet: [
      { label: "Strategic Scope", value: "Route-to-Market & SKU Pack Architecture Blueprint" },
      { label: "Channel Focus", value: "High-Velocity Informal Trade Distribution Strategy" },
      { label: "Risk Assessment", value: "Currency Volatility, Working Capital & Margin Drag" },
      { label: "Executive Format", value: "Actionable Boardroom Scoping Memo & Briefing" },
    ],
  },
  {
    step: "05",
    name: "CONNECT & ACTIVATE",
    tagline: "Facilitate Commercial Introductions, Partner Screening & Transaction Milestones",
    summary:
      "Connecting clients with pre-vetted regional distributors, verified manufacturing suppliers, or co-investment partners under bilateral NDAs.",
    description:
      "Where traditional research firms leave you with a static presentation, Stratum bridges the final commercial mile. We facilitate confidential introductions to pre-audited regional distributors, manufacturing partners, and commercial counterparties under strict bilateral NDAs.",
    sla: "Partner Matchmaking: Intake Review in < 48 Hours",
    methodologies: [
      "Bilateral Commercial Counterpart Matchmaking",
      "Tier-1 Distributor Warehouse & Cold-Chain Capacity Audits",
      "Cross-Border Sourcing Verification (Direct Factory Inspection)",
      "Commercial Agreement Structuring & Milestone Escrow Facilitation",
    ],
    keyActivities: [
      "Introduce pre-screened regional distributors with verified physical warehouse and logistics fleets",
      "Facilitate confidential technical factory audits in India or China production belts",
      "Structure bilateral commercial supply contracts with milestone-based delivery SLAs",
      "Supervise initial commercial pilot shipments and distribution compliance",
    ],
    deliverable: "Commercial Counterpart Due Diligence Dossier & Term Sheet Framework",
    deliverableType: "Commercial Due Diligence Dossier",
    artifactTitle: "COMMERCIAL INTERMEDIATION DOSSIER SPECIMEN",
    artifactBadge: "COUNTERPART CLEARED",
    artifactSnippet: [
      { label: "Intermediation Scope", value: "Vetted Distributor & Manufacturer Counterpart Pairing" },
      { label: "Due Diligence Level", value: "On-Site Physical Warehouse & Logistics Fleet Audit" },
      { label: "Legal Framework", value: "Bilateral NDA & Milestone-Based Commercial Terms" },
      { label: "Governance Desk", value: "Central Direction from Nairobi Operations Desk" },
    ],
  },
];

export default function HowWeWorkPage() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = STAGES[activeStageIndex];

  // Interactive Project Estimator State
  const [selectedScope, setSelectedScope] = useState("field-audit");
  const scopeEstimates: Record<
    string,
    { title: string; timeline: string; methodology: string; output: string }
  > = {
    "rapid-scoping": {
      title: "Rapid Market Scoping & Commercial Whitespace Brief",
      timeline: "10 to 14 Business Days",
      methodology:
        "Executive intake, consumer micro-panel (n=1,200), competitor retail price census, and channel whitespace audit.",
      output:
        "Commercial Whitespace Index, Competitor Pricing Matrix, and Board Decision Scoping Memo.",
    },
    "field-audit": {
      title: "Subnational Field Survey & Traditional Trade Kiosk Census",
      timeline: "3 to 5 Weeks",
      methodology:
        "GPS retail kiosk audit (n=2,000+), vernacular dialect interviews, consumer intercepts, and wholesale margin tracking.",
      output:
        "Audit-Grade Primary Dataset, Spatial GIS Trade Corridor Map, and Econometric Elasticity Model.",
    },
    "brand-tracking": {
      title: "Longitudinal Brand Equity & Retail Availability Tracker",
      timeline: "Ongoing (Monthly or Quarterly Pacing)",
      methodology:
        "Longitudinal consumer panel, aided/unaided brand recall, shelf stockout telemetry, and NPS benchmarking.",
      output:
        "Executive Analytics Dashboard, Quarterly Board Intelligence Dossier, and Real-Time Alert Feeds.",
    },
    "deal-room": {
      title: "Cross-Border Sourcing & Distributor Due Diligence",
      timeline: "2 to 4 Weeks",
      methodology:
        "Bilateral counterpart screening, warehouse physical audit, factory technical inspection, and escrow structure.",
      output:
        "Vetted Distributor Introductions, Counterpart Due Diligence Dossiers, and Executable Term Sheets.",
    },
  };

  const currentEstimate = scopeEstimates[selectedScope];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">OPERATIONAL METHODOLOGY</span>
              <span className="text-border">•</span>
              <span className="text-foreground">5-STAGE RESEARCH &amp; COMMERCIALIZATION</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-extrabold text-foreground tracking-tight leading-[1.2]">
              From Questions to Intelligence. From Intelligence to Commercial Opportunity.
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum operates a systematic 5-stage research, analytical modeling, and commercial intermediation framework engineered specifically for emerging markets where conventional desktop research fails. We bridge primary on-the-ground fieldwork with econometric modeling, institutional interpretation, and direct B2B market connections.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Commission an Intake Scoping Briefing</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="#stage-inspector"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <Layers className="size-3.5 text-primary" />
                <span>Inspect 5-Stage Framework</span>
              </a>
            </div>
          </div>

          {/* Operational Standards Ribbon */}
          <div className="p-3.5 rounded-xl border border-border/70 bg-muted/20 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">OPERATIONAL ARCHITECTURE:</span>
              <span>5 Sequential Stages &bull; Double-Blind Protocol &bull; Bilateral Mutual NDAs &bull; ESOMAR &amp; KDPA Aligned</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <MapPin className="size-3 text-primary" />
              <span className="text-foreground font-semibold">Central Operations Command:</span>
              <span>Delta Corner Tower, Westlands, Nairobi</span>
            </div>
          </div>

          {/* Scale & SLA Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>INTAKE SLA</span>
                <Clock className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">&lt; 6 Hours</div>
              <p className="text-[11px] text-muted-foreground">Scoping Memo &amp; Desk Allocation</p>
            </div>

            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>STATISTICAL RIGOR</span>
                <ShieldCheck className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">95% CI</div>
              <p className="text-[11px] text-muted-foreground">Calibrated Margin of Error (±1.8%)</p>
            </div>

            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>FIELD METHODOLOGY</span>
                <Users2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">Double-Blind</div>
              <p className="text-[11px] text-muted-foreground">Zero Client Observer Bias</p>
            </div>

            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>GEOGRAPHIC DESK</span>
                <Globe2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">East Africa</div>
              <p className="text-[11px] text-muted-foreground">Nairobi Operations Desk</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE 5-STAGE WORKSTREAM INSPECTOR */}
      <section id="stage-inspector" className="py-12 sm:py-16 border-b border-border/70 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              01 // OPERATIONAL FRAMEWORK • 5 SEQUENTIAL STAGES
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Stage-by-Stage Methodology &amp; Verifiable Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Examine the operational mechanics, active fieldwork methods, and concrete audit-grade deliverable artifacts produced across each sequential phase of a Stratum engagement.
            </p>
          </div>

          {/* Stepper Navigation Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-xl bg-muted/40 border border-border/80">
            {STAGES.map((s, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3.5 rounded-lg text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? "bg-card border border-primary/60 shadow-sm ring-1 ring-primary/20 text-foreground"
                      : "hover:bg-card/70 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold">{s.step}</span>
                    <span
                      className={`size-2 rounded-full ${
                        isActive ? "bg-primary animate-pulse" : "bg-muted-foreground/30"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase">{s.name}</div>
                    <div className="text-[10px] text-muted-foreground truncate">{s.deliverableType}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Deep-Dive Card */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 lg:p-9 shadow-sm transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Stage Profile (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      STAGE {activeStage.step} // {activeStage.name}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                      <Clock className="size-3 text-primary" />
                      {activeStage.sla}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {activeStage.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                    {activeStage.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeStage.description}
                  </p>
                </div>

                {/* Core Methodologies Grid */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                    CORE METHODOLOGICAL DISCIPLINES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeStage.methodologies.map((m) => (
                      <div
                        key={m}
                        className="flex items-start gap-2 p-2.5 rounded-lg border border-border/70 bg-muted/20 text-xs font-medium text-foreground"
                      >
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Field Activities */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                    KEY GROUND ACTIVITIES &amp; VERIFICATIONS:
                  </span>
                  <div className="space-y-1.5">
                    {activeStage.keyActivities.map((act) => (
                      <div key={act} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Footer Banner */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="size-4 text-primary shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono text-muted-foreground uppercase">
                        Primary Tangible Deliverable
                      </div>
                      <div className="text-xs font-bold text-foreground">
                        {activeStage.deliverable}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/contact?cta=COMMISSION_RESEARCH&stage=${activeStage.step}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all shrink-0 cursor-pointer shadow-xs"
                  >
                    <span>Inquire on Stage {activeStage.step}</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Specimen Protocol Vault (5 cols) */}
              <div className="lg:col-span-5 bg-card border border-border/80 rounded-2xl p-5 sm:p-6 space-y-4 font-mono shadow-2xs">
                <div className="flex items-center justify-between border-b border-border/70 pb-3">
                  <div className="flex items-center gap-2 truncate">
                    <FileText className="size-3.5 text-primary shrink-0" />
                    <span className="text-[11px] font-bold tracking-tight text-foreground truncate">
                      {activeStage.artifactTitle}
                    </span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/20 shrink-0">
                    {activeStage.artifactBadge}
                  </span>
                </div>

                {/* Artifact Telemetry Snippets */}
                <div className="space-y-2.5 font-sans">
                  {activeStage.artifactSnippet.map((snip) => (
                    <div
                      key={snip.label}
                      className="p-3 rounded-xl border border-border/70 bg-muted/20 space-y-0.5"
                    >
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                        {snip.label}
                      </div>
                      <div className="text-xs font-bold text-foreground">
                        {snip.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[10px] font-mono text-muted-foreground flex items-center justify-between border-t border-border/70">
                  <span className="flex items-center gap-1">
                    <Lock className="size-3 text-emerald-500" />
                    Bilateral NDA Protected
                  </span>
                  <span>ESOMAR Aligned Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR-TIER EMPIRICAL AUDIT & DATA GOVERNANCE */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              02 // EMPIRICAL AUDIT &amp; QUALITY ASSURANCE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Four-Tier Verification &amp; Anti-Bias Protocol
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every field observation captured across traditional wholesale markets, informal dukas, and commercial corridors undergoes four rigorous verification gates before entering client deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4.5 rounded-2xl border border-border/70 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                  TIER 01
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">Spatial Check</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">GPS Spatial Geofencing</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Programmatic geofencing verifies that field enumerators conduct interviews inside registered commercial cluster boundaries. Off-premise interviews trigger immediate quarantine.
                </p>
              </div>
            </div>

            <div className="p-4.5 rounded-2xl border border-border/70 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                  TIER 02
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">Cadence Check</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Vernacular Dialect Audits</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Qualitative interviews require consent-based audio cadence verification. Field leads audit interview duration and genuine language cadence (Swahili and regional trade dialects).
                </p>
              </div>
            </div>

            <div className="p-4.5 rounded-2xl border border-border/70 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800">
                  TIER 03
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">15% Re-Contact</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Supervisor Re-Contact Audits</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Independent field supervisors re-contact a randomized 15% sub-sample of respondents by phone and in-person visit to verify recorded SKU pricing and ensure zero enumerator fabrication.
                </p>
              </div>
            </div>

            <div className="p-4.5 rounded-2xl border border-border/70 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                  TIER 04
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">Director Seal</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Research Director Clearance</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Final intelligence dossiers require formal methodological sign-off by a senior research director at our Nairobi HQ before client presentation or commercial partner matching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SCOPING & ENGAGEMENT ESTIMATOR */}
      <section className="py-12 sm:py-16 border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              03 // ENGAGEMENT BLUEPRINT ESTIMATOR
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Configure Your Research Scope &amp; Commercial Timeline
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Select an operational mandate below to inspect realistic project timelines, field methodology configurations, and formal deliverable packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Scope Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {[
                { id: "rapid-scoping", label: "Rapid Market Scoping & Opportunity Index", badge: "10–14 Days" },
                { id: "field-audit", label: "Subnational Field Survey & Kiosk Census", badge: "3–5 Weeks" },
                { id: "brand-tracking", label: "Longitudinal Brand Equity & Availability Tracker", badge: "Quarterly Cycle" },
                { id: "deal-room", label: "Cross-Border Sourcing & Partner Due Diligence", badge: "2–4 Weeks" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedScope(opt.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    selectedScope === opt.id
                      ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/30 text-foreground font-bold"
                      : "border-border/80 bg-card hover:border-primary/40 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-xs">{opt.label}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-foreground font-semibold">
                    {opt.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Scope Output Console (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/70 pb-3">
                <span className="text-[11px] font-mono font-bold uppercase text-primary">
                  COMMERCIAL BLUEPRINT PARAMETERS
                </span>
                <span className="text-xs font-mono font-bold text-foreground">
                  Estimated SLA: {currentEstimate.timeline}
                </span>
              </div>

              <div className="space-y-3 font-sans">
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    {currentEstimate.title}
                  </h4>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono font-bold text-muted-foreground uppercase">
                    Methodology Configuration:
                  </div>
                  <p className="text-xs text-foreground font-medium leading-relaxed">
                    {currentEstimate.methodology}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono font-bold text-muted-foreground uppercase">
                    Core Deliverables Package:
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {currentEstimate.output}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-sans">
                <span className="text-xs text-muted-foreground">
                  Includes bilateral NDA protection and direct oversight by senior research directors.
                </span>
                <Link
                  href="/contact?cta=COMMISSION_RESEARCH"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shrink-0 cursor-pointer shadow-xs"
                >
                  <span>Initiate This Scope</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL ASSURANCES STRIP */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                04 // INSTITUTIONAL ASSURANCES
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Grounded in Nairobi Operations Desk Governance
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Discuss your target geography and objectives directly with our research directors in Nairobi. We will formulate a tailored scoping memo, sample power calculation, and project timeline.
              </p>
            </div>
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all shrink-0 cursor-pointer"
            >
              <span>Book Intake Briefing (Contact Desk)</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Institutional Assurances Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border/70 bg-card">
              <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px]">
                  All research scoping, commercial objectives, and trade findings protected under binding mutual non-disclosure agreements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border/70 bg-card">
              <Clock className="size-4 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Rapid 6-Hour Intake SLA</h4>
                <p className="text-muted-foreground text-[11px]">
                  A specialized research director will review your submission and provide an initial scoping response within 6 business hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border/70 bg-card">
              <Building2 className="size-4 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Central Operations Command</h4>
                <p className="text-muted-foreground text-[11px]">
                  Delta Corner Tower, Westlands, Nairobi, orchestrating field teams and trade partnerships across East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM INTAKE BANNER */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
            <Sparkles className="size-3" />
            DIRECT ADVISORY DESK
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Ready to Frame Your Research Requirements?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Discuss your market objectives with our regional research directors in Nairobi. We will deliver a tailored research protocol, statistical sample sizing, and preliminary scoping estimates within 6 business hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
            >
              <span>Talk to Stratum — Book Intake Briefing</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              <span>Explore Our 6 Services</span>
            </Link>
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
