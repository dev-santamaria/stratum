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
  FileText,
  Filter,
  Globe2,
  Lock,
  Search,
  ShieldCheck,
  Sparkles,
  Clock,
  Building2,
  Users2,
  Radio,
  Layers,
  Recycle,
  Target,
} from "lucide-react";
import { ResearchStudioWrapper } from "@/components/research/research-studio-wrapper";

interface ReportItem {
  id: string;
  code: string;
  title: string;
  sector: string;
  corridor: string;
  corridorFilter: "ALL" | "EAST_AFRICA" | "WEST_AFRICA" | "SOUTHERN_AFRICA" | "ASIA_AFRICA";
  published: string;
  sampleSize: string;
  methodology: string;
  executiveSummary: string;
  highlights: string[];
  pages: string;
  classification: string;
}

const REPORTS: ReportItem[] = [
  {
    id: "rep-01",
    code: "REP-FMCG-26",
    title: "Pan-African FMCG & Informal Retail Price Velocity Report",
    sector: "Consumer Goods & Informal Retail",
    corridor: "Pan-Africa (54 Nations)",
    corridorFilter: "ALL",
    published: "Q3 2026",
    sampleSize: "14,200+ Retail Kiosks Audited",
    methodology: "GPS spatial retail census, weekly price sweeps, and wholesale margin triangulation",
    executiveSummary:
      "A comprehensive ground-truth audit of informal retail kiosks, spaza shops, and open-air wet markets. Evaluates off-shelf availability, price resistance thresholds, and SKU velocity for staple consumer goods.",
    highlights: [
      "84% of FMCG transaction volume occurs in unmapped informal retail and corner dukas",
      "Subnational price variations up to 38% between coastal ports and interior overland towns",
      "Stockout rates drop 22% when local wholesale distributors operate verified cold-chains",
    ],
    pages: "64 Pages",
    classification: "EXECUTIVE STUDY",
  },
  {
    id: "rep-02",
    code: "REP-FIN-26",
    title: "East Africa Mobile Money & Consumer Purchasing Telemetry Index",
    sector: "Financial Telemetry & Payments",
    corridor: "East Africa (Nairobi Command & Northern Corridor)",
    corridorFilter: "EAST_AFRICA",
    published: "Q3 2026",
    sampleSize: "56,000+ Active Panelists",
    methodology: "Continuous longitudinal mobile money pacing panel combined with daily POS intercepts",
    executiveSummary:
      "Analyzes the intersection of micro-transactions, digital credit, and daily consumer expenditure across Kenya, Tanzania, Uganda, and Rwanda, anchored by our central Nairobi telemetry command.",
    highlights: [
      "91% digital wallet penetration among peri-urban consumers in East African commercial corridors",
      "Direct correlation between mobile liquidity velocity and immediate FMCG basket sizes",
      "Cross-border transit corridor price monitoring between Mombasa, Nairobi, and Kigali",
    ],
    pages: "48 Pages",
    classification: "PROPRIETARY TELEMETRY",
  },
  {
    id: "rep-03",
    code: "REP-ENV-26",
    title: "The E-Waste Deficit: Electronics Lifecycle & Battery Disposal in African Megacities",
    sector: "Circular Economy & Hardware",
    corridor: "Pan-Africa (Nairobi, Lagos, Accra, Johannesburg)",
    corridorFilter: "ALL",
    published: "Q3 2026",
    sampleSize: "4,850 Audited Field Panelists",
    methodology: "In-person field intercepts across hardware repair clusters, waste aggregators, and electronics markets",
    executiveSummary:
      "Empirical field investigation into lithium-ion battery lifecycles, informal repair clusters, and hazardous electronic waste flows across major African commercial capitals (Otigba/Alaba in Lagos, Luthuli Ave in Nairobi, Accra CBD).",
    highlights: [
      "57% of consumers suffer severe e-waste literacy deficit (Scores ≤ 4 out of 10)",
      "89% of households lack formal authorized electronic drop-off centers within a 5km radius",
      "Informal street repair technicians handle 76% of all secondary smartphone battery replacements",
    ],
    pages: "56 Pages",
    classification: "EMPIRICAL RESEARCH DOSSIER",
  },
  {
    id: "rep-04",
    code: "REP-TRD-26",
    title: "China-Africa Trade Corridor: Cross-Border Sourcing & Distributor Vetting",
    sector: "Bilateral Trade & Sourcing",
    corridor: "Asia-Africa Trade Desk (China to Africa)",
    corridorFilter: "ASIA_AFRICA",
    published: "Q2 2026",
    sampleSize: "620+ Audited Manufacturers",
    methodology: "On-site factory inspections in Guangdong/Zhejiang, customs manifest scans, and Tier-1 warehouse audits",
    executiveSummary:
      "A strategic assessment of bilateral trade flows between manufacturing hubs in Shenzhen, Guangzhou, and Yiwu, and key African commercial ports (Mombasa, Apapa, Tema, and Durban).",
    highlights: [
      "Direct factory price benchmarking for electronics, solar hardware, and industrial packaging",
      "AfCFTA tariff reduction roadmaps and customs clearance timeline benchmarks across major ports",
      "Due diligence protocols for verifying Tier-1 African wholesale importers and escrow safeguards",
    ],
    pages: "72 Pages",
    classification: "DEAL ROOM DOSSIER",
  },
  {
    id: "rep-05",
    code: "REP-HLT-26",
    title: "India-Africa Pharmaceutical Distribution & Cold-Chain Integrity Study",
    sector: "Healthcare & Pharmaceuticals",
    corridor: "Asia-Africa Trade Desk (India to Sub-Saharan Africa)",
    corridorFilter: "ASIA_AFRICA",
    published: "Q2 2026",
    sampleSize: "280+ Healthcare Importers",
    methodology: "Cold-chain IoT data logger tracking, regulatory filing reviews, and hospital pharmacy interviews",
    executiveSummary:
      "Field analysis mapping active pharmaceutical ingredient (API) supply chains and finished formulation distribution from Mumbai and Gujarat to healthcare networks across Africa.",
    highlights: [
      "Temperature excursion risks identified across last-mile interior distribution corridors",
      "Counterfeit detection protocols and brand security packaging evaluations in open-air pharmacies",
      "Regulatory approval timelines harmonized across ECOWAS, EAC, and SADC health ministries",
    ],
    pages: "58 Pages",
    classification: "SPECIALIZED STUDY",
  },
  {
    id: "rep-06",
    code: "REP-SNS-26",
    title: "Sensory & Formulation Testing: Consumer Taste Preferences in West Africa",
    sector: "Food Formulation & Beverages",
    corridor: "West Africa Corridor (ECOWAS Belt)",
    corridorFilter: "WEST_AFRICA",
    published: "Q1 2026",
    sampleSize: "8,500+ Blind Sensory Tests",
    methodology: "Controlled sensory booth tests, dialect depth interviews, and shelf packaging climate stress tests",
    executiveSummary:
      "Results from structured sensory taste tests and packaging evaluations across Lagos, Kano, Accra, and Kumasi, demonstrating why direct Western formulations fail without local flavor adaptation.",
    highlights: [
      "Sweetness and sodium preference curves calibrated across age, socio-economic deciles, and religion",
      "Packaging resilience under tropical humidity (92% RH) and high-heat overland transit conditions",
      "Repeat purchase intent scores for local functional herbal beverage alternatives",
    ],
    pages: "52 Pages",
    classification: "SENSORY BENCHMARK",
  },
  {
    id: "rep-07",
    code: "REP-SPZ-26",
    title: "Township Spaza Shop vs Modern Retail Penetration in Southern Africa",
    sector: "Retail Distribution & Modern Trade",
    corridor: "Southern Africa Corridor (SADC Belt)",
    corridorFilter: "SOUTHERN_AFRICA",
    published: "Q1 2026",
    sampleSize: "11,200+ Spaza Merchants",
    methodology: "Subnational retail census across high-density townships, cash-van wholesaler route tracking",
    executiveSummary:
      "A dual-channel investigation comparing modern supermarket chains against township spaza networks in South Africa, Mozambique, and Zambia.",
    highlights: [
      "Spaza shops account for 68% of daily grocery spend in peri-urban townships",
      "Cashless tap-to-pay adoption rising 45% year-on-year in informal spaza trading stalls",
      "Tier-1 wholesale cash-and-carry distributor margin decomposition and rebate structures",
    ],
    pages: "44 Pages",
    classification: "SECTOR REPORT",
  },
  {
    id: "rep-08",
    code: "REP-SLR-26",
    title: "Renewable Energy & Solar Hardware Sourcing Corridor Study",
    sector: "Energy Infrastructure & Sourcing",
    corridor: "Asia-Africa Trade Desk (China to East & West Africa)",
    corridorFilter: "ASIA_AFRICA",
    published: "Q1 2026",
    sampleSize: "340+ Solar Wholesalers & Installers",
    methodology: "Physical factory inspections in Jiangsu, port customs manifests, and last-mile installer surveys",
    executiveSummary:
      "In-depth analysis of off-grid solar equipment supply chains, inverter warranties, and battery storage price elasticity across rural and peri-urban energy markets.",
    highlights: [
      "Tier-1 vs Tier-2 photovoltaic component failure rates under tropical dust and temperature extremes",
      "Pay-as-you-go (PAYGO) mobile money repayment default curves during local harvest cycles",
      "Wholesale price deflation trends for lithium-iron-phosphate (LiFePO4) storage units",
    ],
    pages: "60 Pages",
    classification: "TRADE BRIEFING",
  },
];

export default function ReportsPage() {
  const [selectedCorridor, setSelectedCorridor] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredReports = REPORTS.filter((rep) => {
    const matchesCorridor =
      selectedCorridor === "ALL" || rep.corridorFilter === selectedCorridor;
    const matchesSearch =
      searchQuery === "" ||
      rep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.corridor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCorridor && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">01 // RESEARCH DOSSIER ARCHIVE</span>
              <span className="text-border">•</span>
              <span className="text-foreground">EMPIRICAL MARKET STUDIES</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Research Reports &amp; Empirical Market Studies
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Explore selected Stratum research reports, category dossiers, and consumer telemetry benchmarks across pan-African and South-South commercial corridors. Grounded in direct human fieldwork, satellite geostamping, and econometric modeling.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#telemetry-studio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Target className="size-3.5" />
                <span>Launch Telemetry Studio (4 Formats)</span>
                <ArrowRight className="size-3.5" />
              </a>
              <a
                href="#dossiers-directory"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all cursor-pointer"
              >
                <FileText className="size-3.5 text-primary" />
                <span>Browse 8 Published Dossiers</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Commission Bespoke Study</span>
              </Link>
            </div>
          </div>

          {/* Unified Footprint Telemetry Ribbon */}
          <div className="p-3 rounded-lg border border-border/70 bg-card/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">RESEARCH DOSSIER REPOSITORY:</span>
              <span>Primary Field Telemetry • 14,200+ Audited Outlets • 190,000+ Panelists • ESOMAR &amp; KDPA Certified</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-primary font-bold">CENTRAL COMMAND</span>
              <span>•</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Scale Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>PUBLISHED STUDIES</span>
                <FileText className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">{REPORTS.length} Dossiers</div>
              <p className="text-[11px] text-muted-foreground">Empirical Ground-Truth Studies</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>PANEL AUDITED</span>
                <Users2 className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">190,000+</div>
              <p className="text-[11px] text-muted-foreground">Direct Consumer Intercepts</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>RETAIL CENSUS</span>
                <Radio className="size-3.5 text-blue-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">14,200+</div>
              <p className="text-[11px] text-muted-foreground">GPS-Stamped POS Audits</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>INTAKE SLA</span>
                <Clock className="size-3.5 text-amber-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">&lt; 6 Hours</div>
              <p className="text-[11px] text-muted-foreground">Data Room Scoping &amp; NDA</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE RESEARCH STUDIO: 4 INNOVATIVE TELEMETRY FORMATS */}
      <section className="py-12 sm:py-16 border-b border-border/70 scroll-mt-20" id="telemetry-studio">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <ResearchStudioWrapper />
        </div>
      </section>

      {/* 3. INTERACTIVE REPORTS DIRECTORY & FILTERING */}
      <section className="py-12 sm:py-16 border-b border-border/70 scroll-mt-20" id="dossiers-directory">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          {/* Header & Filter Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                03 // DIRECTORY OF PUBLISHED STUDIES
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Showing {filteredReports.length} Empirical Research Briefings
              </h2>
            </div>

            {/* Filter Pills & Keyword Search */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search reports by topic, sector, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-md border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-56 sm:w-64"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1 font-mono text-[11px]">
                {[
                  { id: "ALL", label: "ALL CORRIDORS" },
                  { id: "EAST_AFRICA", label: "EAST AFRICA" },
                  { id: "WEST_AFRICA", label: "WEST AFRICA" },
                  { id: "SOUTHERN_AFRICA", label: "SOUTHERN AFRICA" },
                  { id: "ASIA_AFRICA", label: "ASIA-AFRICA" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedCorridor(item.id)}
                    className={`px-2.5 py-1.5 rounded-md border text-[11px] font-bold transition-all cursor-pointer ${
                      selectedCorridor === item.id
                        ? "bg-primary text-primary-foreground border-primary shadow-2xs"
                        : "bg-card text-muted-foreground border-border/80 hover:bg-muted/60 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reports Grid (2x2 Uniform Boardroom Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {filteredReports.map((rep) => (
              <div
                key={rep.id}
                className="p-6 rounded-lg border border-border/80 bg-card shadow-2xs space-y-4 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px]">
                        {rep.code}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-semibold">
                        {rep.sector}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {rep.published}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {rep.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      Corridor: {rep.corridor}
                    </p>
                  </div>

                  <p className="text-xs text-foreground/90 leading-relaxed font-normal">
                    {rep.executiveSummary}
                  </p>

                  {/* Highlights Card */}
                  <div className="p-3 rounded-md bg-muted/40 border border-border/70 space-y-1.5 text-xs font-mono">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
                      KEY EMPIRICAL FINDINGS:
                    </span>
                    <ul className="space-y-1 font-sans">
                      {rep.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-muted-foreground text-[11px] leading-snug">
                          <CheckCircle2 className="size-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px] font-mono text-muted-foreground">
                    <span className="text-foreground font-semibold">Methodology:</span> {rep.methodology}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                  <div className="text-[11px] text-muted-foreground">
                    <span>{rep.pages}</span> • <span className="font-bold text-foreground">{rep.sampleSize}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-2xs cursor-pointer font-sans"
                  >
                    <span>Request Full Dossier</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL ASSURANCES STRIP */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                04 // INSTITUTIONAL ASSURANCES
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Confidentiality &amp; Rigor Enforced Across Every Report
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum combines rigorous field telemetry with legally binding bilateral NDAs and centralized command oversight in Nairobi.
              </p>
            </div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground font-semibold text-xs transition-all shrink-0 cursor-pointer"
            >
              <span>Inspect 5-Stage Framework</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px]">
                  All report briefings and Deal Room data protected under binding non-disclosure agreements.
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

      {/* 5. CUSTOM RESEARCH BRIEFING COMMISSION BANNER */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
            <Sparkles className="size-3" />
            05 // BESPOKE COMMISSIONING DESK
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Need a Bespoke Market Study Commissioned?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our Nairobi research command designs tailored quantitative and qualitative studies for single or multi-country rollout across Africa, China, and India. Receive preliminary scoping notes within 6 business hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
            >
              <span>Commission Bespoke Study — Talk to Stratum</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              <span>Explore Solutions Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Comprehensive Footer */}
      <Footer />

      {/* Native Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
