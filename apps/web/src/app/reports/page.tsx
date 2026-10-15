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
  Phone,
  Workflow,
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
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. HERO HEADER: Minimalist Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
              <Workflow className="size-3 text-primary shrink-0" />
              <span>STRATUM RESEARCH REPORTS &bull; NAIROBI ADVISORY DESK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Research Reports &amp; Empirical Market Studies
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Explore selected Stratum research reports, category dossiers, and consumer telemetry benchmarks across pan-African and South-South commercial corridors. Grounded in direct human fieldwork, satellite geostamping, and econometric modeling.
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
                href="#dossiers-directory"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <FileText className="size-3.5 text-primary" />
                <span>BROWSE 8 PUBLISHED DOSSIERS</span>
              </a>
              <a
                href="#telemetry-studio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <Target className="size-3.5 text-primary" />
                <span>LAUNCH TELEMETRY STUDIO</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCALE METRICS BAR (Sharp 4-Column Grid) */}
      <section className="py-6 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>PUBLISHED STUDIES</span>
                <FileText className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">{REPORTS.length} Dossiers</div>
              <p className="text-[11px] text-muted-foreground">Illustrative Ground-Truth Studies</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>STATISTICAL POWER</span>
                <Users2 className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">95% CI</div>
              <p className="text-[11px] text-muted-foreground">Standard Statistical Confidence</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>RETAIL SAMPLING</span>
                <Radio className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">GPS Audited</div>
              <p className="text-[11px] text-muted-foreground">Double-Blind Retail Censuses</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>INTAKE SLA</span>
                <Clock className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">&lt; 6 Hours</div>
              <p className="text-[11px] text-muted-foreground">Data Room Scoping &amp; NDA</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TELEMETRY STUDIO */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-slate-50 dark:bg-card/40 scroll-mt-20" id="telemetry-studio">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/60 pb-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                TELEMETRY STUDIO // 4 DATA FORMATS
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Empirical Telemetry Explorer
              </h2>
            </div>
          </div>

          <div className="rounded-none border border-border/80 bg-card p-4 sm:p-6 shadow-xs">
            <ResearchStudioWrapper />
          </div>
        </div>
      </section>

      {/* 4. DOSSIERS DIRECTORY & FILTERING */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background scroll-mt-20" id="dossiers-directory">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          {/* Header & Filter Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-wider text-primary uppercase">
                PUBLISHED STUDIES DIRECTORY
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Showing {filteredReports.length} Empirical Research Briefings
              </h2>
            </div>

            {/* Filter Pills & Keyword Search */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="size-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-none border border-border/80 bg-background text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary w-48 sm:w-60"
                />
              </div>

              <div className="flex flex-wrap gap-1">
                {[
                  { id: "ALL", label: "ALL" },
                  { id: "EAST_AFRICA", label: "EAST AFRICA" },
                  { id: "WEST_AFRICA", label: "WEST AFRICA" },
                  { id: "SOUTHERN_AFRICA", label: "SOUTHERN AFRICA" },
                  { id: "ASIA_AFRICA", label: "ASIA-AFRICA" },
                ].map((corridor) => (
                  <button
                    key={corridor.id}
                    onClick={() => setSelectedCorridor(corridor.id)}
                    className={`px-3 py-1.5 rounded-none text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                      selectedCorridor === corridor.id
                        ? "bg-primary text-primary-foreground"
                        : "border border-border/80 bg-card hover:bg-muted text-muted-foreground"
                    }`}
                  >
                    {corridor.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dossiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredReports.map((rep) => (
              <div
                key={rep.id}
                className="p-6 rounded-none border border-border/80 bg-card hover:border-primary/50 transition-all flex flex-col justify-between space-y-5 shadow-2xs group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-none bg-primary/10 text-primary border border-primary/20">
                        {rep.code}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">
                        {rep.classification}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {rep.published} &bull; {rep.pages}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {rep.title}
                  </h3>

                  <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-2">
                    <Globe2 className="size-3 text-primary shrink-0" />
                    <span>{rep.corridor}</span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {rep.executiveSummary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/60">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                      KEY TELEMETRY HIGHLIGHTS:
                    </span>
                    {rep.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Sample: {rep.sampleSize}
                  </span>
                  <Link
                    href={`/contact?cta=COMMISSION_RESEARCH&report=${rep.code}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-xs"
                  >
                    <span>REQUEST DOSSIER</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE MIDNIGHT NAVY CORPORATE CTA BANNER (#002B49) */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/10 border border-white/20 text-[10px] font-mono text-white/90">
                <Sparkles className="size-3 text-sky-300" />
                <span>BESPOKE COMMISSIONING &bull; NAIROBI OPERATIONS DESK</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                Need a Bespoke Market Study Commissioned?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Our Nairobi research command designs tailored quantitative and qualitative studies for single or multi-country rollout across Africa, China, and India. Receive preliminary scoping notes within 6 business hours.
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
                href="/solutions"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-transparent text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <span>EXPLORE SOLUTIONS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
