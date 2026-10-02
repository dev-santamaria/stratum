"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Globe2,
  Handshake,
  Layers,
  Lock,
  MapPin,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Activity,
  FileCheck,
  Workflow,
  Radio,
  Clock,
  Award,
  Eye,
  FileText,
  Boxes,
  Zap,
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
    sub?: string;
  }[];
}

const STAGES: StageDetail[] = [
  {
    step: "01",
    name: "DEFINE",
    tagline: "Understand the Strategic Gap & Commercial Objective",
    summary: "We isolate the precise business question, information deficit, and market boundary.",
    description:
      "Every engagement starts with rigorous problem framing. Where legacy consultancies sell broad off-the-shelf templates, Stratum establishes clear hypotheses: Is there real unmet consumer demand? What are the true price elasticities in informal channels? Which transport corridors hold velocity?",
    sla: "Completed in 48–72 Hours",
    methodologies: [
      "Executive Scoping Intake & Goal Decomposition",
      "Subnational Geographic & Demographic Cohort Scaffolding",
      "Hypothesis Framing & Decision Tree Structuring",
      "Bilateral Mutual Non-Disclosure Agreement (NDA) Execution",
    ],
    keyActivities: [
      "Define addressable scope across target African, China, or India corridors",
      "Establish primary and secondary KPIs (Volume, Price Point, Margin, NPS)",
      "Determine statistical sample power and margin of error thresholds",
      "Formulate custom survey questionnaires and observational field protocols",
    ],
    deliverable: "Engagement Charter & Research Protocol Blueprint",
    deliverableType: "Formal Scope Dossier",
    artifactTitle: "PROJECT SCOPE CHARTER • CONFIDENTIAL",
    artifactBadge: "STAGE 01 SIGN-OFF",
    artifactSnippet: [
      { label: "Client Objective", value: "Subnational FMCG Entry (Lagos & Nairobi)" },
      { label: "Target Audience", value: "Informal Retail Kiosk Owners (Dukas/Spazas) & Consumers" },
      { label: "Sample Power", value: "n = 2,400 Respondents (95% CI, ±2.0% Margin)" },
      { label: "NDA Protocol", value: "Bilateral Vault ID #STR-2026-X81" },
    ],
  },
  {
    step: "02",
    name: "RESEARCH",
    tagline: "Deploy Multi-Method Fieldwork & Sensor Telemetry",
    summary: "We deploy verified human field researchers, digital consumer panels, and kiosk audits.",
    description:
      "Our fieldwork infrastructure coordinates 1,600+ verified field researchers across open-air wholesale corridors, wet markets, and high-density informal retail clusters. We capture authentic ground truth where 70%+ of retail commerce takes place.",
    sla: "Fieldwork Turnaround: 7–14 Days",
    methodologies: [
      "Face-to-Face Dialect Intercepts (Swahili, Pidgin, Yoruba, Hausa, French)",
      "GPS-Stamped Retail Kiosk SKU & Pricing Audits",
      "Audio-Recorded In-Depth Qualitative Interviews (IDIs)",
      "Mobile-Money Pacing & Digital Micro-Panel Telemetry",
    ],
    keyActivities: [
      "Daily enumerator check-ins with automated GPS coordinate validation",
      "Shelf-price auditing and stockout frequency tracking across 48,000+ points of sale",
      "Sensory formulation and blind consumer tasting sessions in field hubs",
      "Verification of supply chain cold-chain storage and distributor fleets",
    ],
    deliverable: "Raw Verified Datasets & Ground-Truth Fieldwork Registry",
    deliverableType: "Audit-Grade Telemetry Registry",
    artifactTitle: "FIELD TELEMETRY REGISTRY • LIVE FEED",
    artifactBadge: "GPS & AUDIO AUDITED",
    artifactSnippet: [
      { label: "Retail Dukas Audited", value: "1,850 POS across 14 Commercial Districts" },
      { label: "Acoustic Audio Audits", value: "100% Speech-to-Text Verifiable IDIs" },
      { label: "Dialects Utilized", value: "Swahili (74%), Amharic (16%), English (10%)" },
      { label: "Enumerator Precision", value: "99.7% Coordinate Match with Satellite Map" },
    ],
  },
  {
    step: "03",
    name: "ANALYSE",
    tagline: "Transform Primary Data Into Decision-Grade Telemetry",
    summary: "We apply econometric modeling, price triangulation, and cross-channel reconciliation.",
    description:
      "Raw data in emerging markets is inherently noisy. Stratum removes sampling distortion, normalizes informal exchange rates, and triangulates declared consumer behavior against physical retail velocity.",
    sla: "Synthesis Window: 3–5 Business Days",
    methodologies: [
      "Econometric Price Elasticity & Willingness-to-Pay Curves",
      "Cross-Channel Distributor Margin & Mark-Up Decomposition",
      "Multilingual NLP Sentiment & Brand Perception Clustering",
      "Integration Into the Queryable Stratum Intelligence Graph",
    ],
    keyActivities: [
      "Price elasticity modeling across income deciles and informal employment tiers",
      "Brand equity indexation against domestic and multinational competitor benchmarks",
      "Identification of counterfeit, parallel-import, and substitute product leakage",
      "Statistical regression on consumer basket allocation and substitution thresholds",
    ],
    deliverable: "Synthesized Analytical Telemetry & Category Model",
    deliverableType: "Econometric Model & Data Pipeline",
    artifactTitle: "PRICE RESISTANCE & ELASTICITY MODEL",
    artifactBadge: "ECONOMETRIC CLEARED",
    artifactSnippet: [
      { label: "Optimal Price Point", value: "$0.85 per 250ml (Max Profit Yield)" },
      { label: "Demand Elasticity", value: "e = -1.42 (High Elasticity above $0.95)" },
      { label: "Informal Markup", value: "Wholesaler +12% • Kiosk Trader +24%" },
      { label: "Substitute Risk", value: "32% Volume Vulnerable to Local Unbranded" },
    ],
  },
  {
    step: "04",
    name: "INTERPRET",
    tagline: "Extract Commercial Implications & Strategic Patterns",
    summary: "Our sector directors interpret what the findings mean for your capital and go-to-market.",
    description:
      "Data without commercial context is useless. Our industry directors evaluate competitor blind spots, route-to-market vulnerabilities, import tariff structures, and distribution moats to outline concrete executive recommendations.",
    sla: "Strategy Briefing: Within 48 Hours of Model Clearance",
    methodologies: [
      "Commercial Route-to-Market (RTM) Blueprinting",
      "Competitor Strategic Vulnerability Assessment",
      "Tariff, Currency Volatility & Regulatory De-Risking Diagnostics",
      "Board-Level Executive Briefings & Presentation Sessions",
    ],
    keyActivities: [
      "Formulate SKU packaging recommendations tailored to purchasing power",
      "Map optimal distributor territory borders to prevent channel cannibalization",
      "Model working capital requirements under volatile local currency regimes",
      "Deliver customized strategic dossiers with prioritized commercial milestones",
    ],
    deliverable: "Comprehensive Stratum Intelligence Report & Strategic Brief",
    deliverableType: "Executive Board Dossier",
    artifactTitle: "EXECUTIVE INTELLIGENCE MEMO • C-SUITE",
    artifactBadge: "STRATEGY BRIEFING",
    artifactSnippet: [
      { label: "Immediate Whitespace", value: "Spaza Shop Direct-Van Route (34% Margin Capture)" },
      { label: "Packaging Direction", value: "Shift from 500ml glass to 200ml sachet format" },
      { label: "Currency Safeguard", value: "Index distributor contracts to stable FX basket" },
      { label: "Projected IRR", value: "28.4% Year 1 Return on Capital Deployment" },
    ],
  },
  {
    step: "05",
    name: "ACTIVATE",
    tagline: "Translate Intelligence Into B2B Contracts & Market Access",
    summary: "We connect you to vetted distributors, trade partners, and capital in our Deal Room.",
    description:
      "Where traditional research firms leave you with a static PDF, Stratum bridges the final commercial mile. We open our confidential Deal Room to introduce pre-audited local distributors, factory partners, and institutional co-investors.",
    sla: "Partner Matchmaking: < 72 Hours to Intake",
    methodologies: [
      "Confidential Deal Room Counterpart Matchmaking",
      "Tier-1 Distributor Warehouse & Balance-Sheet Due Diligence",
      "Cross-Border Sourcing via Asia Trade Desk (China & India)",
      "Bilateral Escrow & Contract Milestone Facilitation",
    ],
    keyActivities: [
      "Introduce vetted Tier-1 distributors with verified warehouse cold-chain capacity",
      "Execute bilateral escrow protocols and commercial supply agreements",
      "Facilitate direct factory audits in Guangdong/Zhejiang (China) and Gujarat (India)",
      "Monitor post-launch distribution compliance and sales velocity in real time",
    ],
    deliverable: "Executed Commercial Counterpart Introductions & Term Sheets",
    deliverableType: "Deal Room Introductions & Agreements",
    artifactTitle: "DEAL ROOM TERM SHEET • COUNTERPART CLEARANCE",
    artifactBadge: "EXECUTABLE TRANSACTION",
    artifactSnippet: [
      { label: "Matched Distributor", value: "Apex Regional Logistics (1,200 Tier-1 POS Reach)" },
      { label: "Warehouse Audit", value: "Passed: 4,000 sqm Cold-Chain Facility Verified" },
      { label: "Deal Room Status", value: "Bilateral NDA Executed • Term Sheet Issued" },
      { label: "Pilot Volume", value: "$450,000 Initial Commercial Shipment" },
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
      title: "Rapid Market Scoping & Opportunity Index",
      timeline: "10 to 14 Business Days",
      methodology: "Executive intake, consumer micro-panel (n=1,200), competitor price sweep",
      output: "Opportunity Index, Competitor Pricing Matrix, Executive Decision Memo",
    },
    "field-audit": {
      title: "Comprehensive Field Survey & Kiosk Census",
      timeline: "3 to 5 Weeks",
      methodology: "GPS retail kiosk audit (n=2,000+), dialect interviews, consumer intercepts",
      output: "Raw Verified Datasets, Spatial Retail Mapping, Econometric Elasticity Model",
    },
    "brand-tracking": {
      title: "Continuous Multi-Country Brand Tracker",
      timeline: "Ongoing (Monthly or Quarterly Pacing)",
      methodology: "Longitudinal consumer twin panel, aided/unaided brand recall, NPS metrics",
      output: "Always-On Analytics Dashboard, Quarterly Board Intelligence Dossier",
    },
    "deal-room": {
      title: "Cross-Border Sourcing & Deal Room Matchmaking",
      timeline: "2 to 4 Weeks",
      methodology: "Bilateral counterpart vetting, warehouse audit, Asia factory inspection",
      output: "Confidential Deal Room Access, Vetted Distributor Introductions, Term Sheets",
    },
  };

  const currentEstimate = scopeEstimates[selectedScope];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              <Workflow className="size-3.5" />
              <span>THE STRATUM FRAMEWORK</span>
              <span className="text-border">•</span>
              <span className="text-foreground">OPERATIONAL METHODOLOGY</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              From Questions to Intelligence.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                From Intelligence to Commercial Opportunity.
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Our structured 5-stage research and commercialization methodology is built specifically for complex, high-velocity emerging markets where conventional desktop research fails. We combine on-the-ground human fieldwork with proprietary telemetry and direct B2B deal execution.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all cursor-pointer"
              >
                Commission a Scoping Briefing
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="#stage-inspector"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                Inspect 5 Stages
              </a>
            </div>
          </div>

          {/* Scale & SLA Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border/60">
            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>INTAKE SLA</span>
                <Clock className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">&lt; 6 Hours</div>
              <p className="text-[11px] text-muted-foreground">Scoping &amp; Mutual NDA</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>AUDIT PRECISION</span>
                <ShieldCheck className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">99.4%</div>
              <p className="text-[11px] text-muted-foreground">GPS &amp; Audio Verifiable</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>ACTIVE ENVOYS</span>
                <Users2 className="size-3.5 text-blue-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">1,600+</div>
              <p className="text-[11px] text-muted-foreground">On-The-Ground Researchers</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>DIALECTS MAPPED</span>
                <Globe2 className="size-3.5 text-purple-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">42+</div>
              <p className="text-[11px] text-muted-foreground">Local Vernacular Tongues</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Stage Inspector & Deliverable Showcase */}
      <section id="stage-inspector" className="py-12 sm:py-16 border-b border-border/60 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              INTERACTIVE WORKSTREAM INSPECTOR
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Stage-by-Stage Methodology &amp; Sample Artifacts
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Select any stage below to inspect the operational objectives, active fieldwork methodologies, and concrete deliverable artifacts produced.
            </p>
          </div>

          {/* Stepper Navigation Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-muted/30 border border-border/80">
            {STAGES.map((s, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? "bg-card border border-primary/50 shadow-md ring-1 ring-primary/20 text-foreground"
                      : "hover:bg-card/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black">{s.step}</span>
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
          <div className="rounded-3xl border border-border/80 bg-card/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-lg transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Stage Profile (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-sm font-black px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      STAGE {activeStage.step}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
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

                {/* Key Activities */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                    OPERATIONAL METHODOLOGIES &amp; EXECUTION:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeStage.methodologies.map((m) => (
                      <div
                        key={m}
                        className="flex items-start gap-2 p-2.5 rounded-xl border border-border/70 bg-background/70 text-xs font-medium text-foreground"
                      >
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Footer */}
                <div className="p-3.5 rounded-xl bg-muted/30 border border-border/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="size-4 text-primary" />
                    <div>
                      <div className="text-[10px] font-mono text-muted-foreground uppercase">
                        Primary Deliverable
                      </div>
                      <div className="text-xs font-bold text-foreground">
                        {activeStage.deliverable}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline shrink-0"
                  >
                    Inquire on Stage <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Sample Artifact Preview (5 cols) */}
              <div className="lg:col-span-5 bg-muted/20 border border-border/80 rounded-2xl p-5 sm:p-6 space-y-4 font-mono">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="size-3.5 text-primary" />
                    <span className="text-[11px] font-bold tracking-tight text-foreground truncate">
                      {activeStage.artifactTitle}
                    </span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800 shrink-0">
                    {activeStage.artifactBadge}
                  </span>
                </div>

                {/* Artifact Snippet Items */}
                <div className="space-y-2.5">
                  {activeStage.artifactSnippet.map((snip) => (
                    <div
                      key={snip.label}
                      className="p-3 rounded-xl border border-border/70 bg-card space-y-0.5"
                    >
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {snip.label}
                      </div>
                      <div className="text-xs font-bold text-foreground font-sans">
                        {snip.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[10px] text-muted-foreground flex items-center justify-between border-t border-border/60">
                  <span className="flex items-center gap-1">
                    <Lock className="size-3 text-emerald-500" />
                    Bilateral NDA Protected
                  </span>
                  <span>Verifiable Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four-Tier Quality Assurance & Anti-Fraud Protocol */}
      <section className="py-12 sm:py-16 border-b border-border/60 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              DATA INTEGRITY ARCHITECTURE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Four-Tier Audit &amp; Anti-Fraud Protocol
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every data point collected by Stratum undergoes multi-layer programmatic and human verification to eliminate enumerator fabrication and statistical drift.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="size-9 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center">
                <MapPin className="size-4" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-primary">TIER 01</div>
                <h4 className="text-sm font-bold text-foreground">GPS Spatial Validation</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Automated geofencing checks match enumerator GPS coordinates against official retail kiosk coordinates. In-transit interviews are flagged and purged.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center">
                <Radio className="size-4" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-emerald-600">TIER 02</div>
                <h4 className="text-sm font-bold text-foreground">Acoustic Audio Auditing</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Qualitative in-depth interviews (IDIs) require consent-based audio recording. Speech-to-text NLP verifies natural dialect cadence and response authenticity.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="size-9 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center">
                <Database className="size-4" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-amber-600">TIER 03</div>
                <h4 className="text-sm font-bold text-foreground">Econometric Triangulation</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Survey prices are cross-checked against wholesale invoice telemetry and live mobile-money transaction pacing to identify anomalous price reporting.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="size-9 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center">
                <ShieldCheck className="size-4" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-purple-600">TIER 04</div>
                <h4 className="text-sm font-bold text-foreground">Research Director Sign-Off</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Final deliverables require formal review and methodology sign-off by a senior regional research director prior to client release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Scope & Timeline Estimator */}
      <section className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              SCOPING ESTIMATOR
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Estimate Your Engagement Timeline &amp; Architecture
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Select your primary research objective below to see typical project timelines, methodology configurations, and commercial deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Scope Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {[
                { id: "rapid-scoping", label: "Rapid Market Scoping", badge: "10–14 Days" },
                { id: "field-audit", label: "Field Survey & Kiosk Census", badge: "3–5 Weeks" },
                { id: "brand-tracking", label: "Continuous Brand Tracker", badge: "Quarterly / Pacing" },
                { id: "deal-room", label: "Cross-Border Deal Intermediation", badge: "2–4 Weeks" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedScope(opt.id)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    selectedScope === opt.id
                      ? "border-primary bg-primary/10 text-foreground font-bold shadow-xs"
                      : "border-border/80 bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-xs">{opt.label}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-foreground font-semibold">
                    {opt.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Scope Output Card (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-mono font-bold uppercase text-primary">
                  COMMERCIAL BLUEPRINT PARAMETERS
                </span>
                <span className="text-xs font-mono font-bold text-foreground">
                  Estimated SLA: {currentEstimate.timeline}
                </span>
              </div>

              <div className="space-y-3">
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

              <div className="pt-3 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  Includes bilateral NDA protection and direct escalation.
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shrink-0"
                >
                  Initiate This Scope <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. High-Converting Bottom Intake Banner */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
            <Sparkles className="size-3" />
            DIRECT ADVISORY DESK
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Ready to Frame Your Research Requirements?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Discuss your market objectives with our regional research directors. We will deliver a tailored research protocol and preliminary scoping estimates within 6 business hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all"
            >
              Talk to Stratum — Book Intake Briefing
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              Explore Solutions Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
