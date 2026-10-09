import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { RegionalCoverageConsole } from "@/components/landing/regional-coverage-console";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Globe2,
  Handshake,
  Layers,
  Lock,
  MapPin,
  PhoneCall,
  Search,
  ShieldCheck,
  TrendingUp,
  Users2,
  Target,
  FlaskConical,
  Activity,
  FileText,
  Clock,
  Compass,
  BookOpen,
  ChevronRight,
  Download,
  Building2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* Global Navigation Header */}
      <Navbar />

      {/* CHAPTER 1: THE EXECUTIVE MISSION & INSTITUTIONAL TICKER */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols): Editorial Thesis */}
            <div className="lg:col-span-7 space-y-5">
              {/* Institutional Taxonomy Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-muted/40 text-[11px] font-mono font-semibold text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-foreground font-bold tracking-wide">STRATUM MARKET INTELLIGENCE</span>
                <span className="text-border">•</span>
                <span>PAN-AFRICA, CHINA &amp; INDIA CORRIDORS</span>
              </div>

              {/* Restrained, Editorial Headline (No Shouting, No Rainbow Gradients) */}
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-foreground tracking-tight leading-[1.25] max-w-3xl">
                Bridging Investment Gaps Through Intelligence, Insight &amp; Intermediation
              </h1>

              {/* Editorial Summary */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl font-normal">
                Stratum is a global market intelligence and business intermediation firm helping businesses, investors, brands, and entrepreneurs make informed decisions in complex and emerging markets.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl font-normal">
                Through first-hand consumer feedback, rigorous field research, proprietary datasets, and strategic B2B connections, we turn raw market signals into actionable intelligence and commercial opportunities.
              </p>

              {/* Institutional Action Group */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all active:scale-[0.99]"
                >
                  Explore Our Solutions
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted/60 text-foreground font-semibold text-xs transition-all shadow-xs"
                >
                  Inquire on Research Scope
                </Link>
                <Link
                  href="/why-stratum"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md text-primary hover:bg-primary/5 font-semibold text-xs transition-colors"
                >
                  Institutional Standards <ChevronRight className="size-3" />
                </Link>
              </div>

              {/* Gartner-Style Operational Telemetry Ticker */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/60 max-w-2xl">
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-foreground">14,200+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">Audited Retail Kiosks</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-foreground">190,000+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">Verified Panelists</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-foreground">620+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">Asian Manufacturers</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-foreground">$185M+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">B2B Deal Pipeline</p>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Verified Ground Imagery with Restrained Caption */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-border/80 shadow-md bg-card aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[420px] group">
                <Image
                  src="/images/landing-kiosk.jpg"
                  alt="Ground-truth consumer research and retail market verification across emerging markets"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Restrained Telemetry Banner */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3 rounded-lg bg-background/95 dark:bg-background/90 backdrop-blur-md border border-border/80 shadow-md text-foreground space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-primary font-bold flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      OPERATIONAL COMMAND
                    </span>
                    <span className="text-muted-foreground font-medium">East Africa Nerve Center: Nairobi</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    Field-level consumer audits and bilateral supplier verifications across Africa, China, and India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: GARTNER-STYLE LEAD EXECUTIVE DOSSIER & FIELD TELEMETRY */}
      <section id="briefings" className="py-12 sm:py-16 border-b border-border/70 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                EXECUTIVE RESEARCH DOSSIERS &amp; FIELD TELEMETRY
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Featured Market Intelligence Briefings
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>View Full Reports Directory</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Balanced 4-Dossier Grid: Equal-Height & Perfectly Leveled Left and Right Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Dossier 01 */}
            <article className="p-6 sm:p-7 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-bold text-[10px] tracking-wide">
                    INFORMAL RETAIL &bull; PAN-AFRICA
                  </span>
                  <span className="text-muted-foreground text-[11px]">DOSSIER 01 &bull; Q3 2026</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    The 84% Reality: Mapping Informal Kiosk Retail Volume Across Sub-Saharan Africa
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Multinational brands concentrate 80% of trade marketing on formal supermarkets, yet 84% of actual household transaction volume flows through unmapped neighborhood dukas, spaza shops, and open-air street stalls.
                  </p>
                </div>

                {/* Tabular Telemetry Callouts */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/60 font-mono text-center sm:text-left">
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">84%</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Informal Share</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">38%</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Port-Inland Gap</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">14,200</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Audited Outlets</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Methodology:</span> GPS-verified double-blind retail audits across Kenya, Nigeria &amp; South Africa.
                </div>
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-border/50">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500" /> Ground Verified
                  </span>
                  <Link
                    href="/reports"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shrink-0"
                  >
                    <FileText className="size-3.5" />
                    <span>Access Executive Dossier</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Dossier 02 */}
            <article className="p-6 sm:p-7 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-bold text-[10px] tracking-wide">
                    FINANCIAL TELEMETRY &bull; EAST AFRICA
                  </span>
                  <span className="text-muted-foreground text-[11px]">DOSSIER 02 &bull; Q3 2026</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    East Africa Mobile Money &amp; Consumer Purchasing Telemetry Index
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    High-frequency longitudinal transaction telemetry tracking daily household wallet liquidity, digital credit cycles, and staple food price adjustments ahead of lagging official inflation statistics.
                  </p>
                </div>

                {/* Tabular Telemetry Callouts */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/60 font-mono text-center sm:text-left">
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">56,000+</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Daily Panelists</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">3.2x</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Velocity Ratio</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">94.8%</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">M-Pesa / Mobile</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Methodology:</span> Continuous anonymized transaction panels across Kenya, Tanzania, Uganda &amp; Rwanda.
                </div>
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-border/50">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500" /> Live Ingestion
                  </span>
                  <Link
                    href="/reports"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shrink-0"
                  >
                    <FileText className="size-3.5" />
                    <span>Access Executive Dossier</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Dossier 03: Featured E-Waste Research */}
            <article className="p-6 sm:p-7 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[10px] tracking-wide">
                    CIRCULAR ECONOMY &bull; PAN-AFRICA
                  </span>
                  <span className="text-muted-foreground text-[11px]">DOSSIER 03 &bull; Q3 2026</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    The E-Waste Deficit: Electronics Lifecycle &amp; Battery Disposal Across African Megacities
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Despite surging consumer electronics adoption, 57% of urban consumers score their e-waste literacy at 4 or below out of 10. While informal repairers handle 84% of maintenance, 89% report zero access to authorized commercial drop-off centers.
                  </p>
                </div>

                {/* Tabular Telemetry Callouts */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/60 font-mono text-center sm:text-left">
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">57%</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Literacy Deficit</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">4,850</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Audited Panelists</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">89%</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Lack Drop-Off Hubs</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Methodology:</span> Field intercepts across primary electronics hubs (Computer Village, Alaba, Luthuli Ave, CBDs).
                </div>
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-border/50">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500" /> Ground Audited
                  </span>
                  <Link
                    href="/insights#survey-ewaste-africa"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shrink-0"
                  >
                    <FileText className="size-3.5" />
                    <span>Access Executive Dossier</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Dossier 04 */}
            <article className="p-6 sm:p-7 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary font-bold text-[10px] tracking-wide">
                    HEALTHCARE &bull; INDIA-AFRICA
                  </span>
                  <span className="text-muted-foreground text-[11px]">DOSSIER 04 &bull; Q3 2026</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    India-Africa Pharmaceutical Distribution &amp; Cold-Chain Integrity
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Active pharmaceutical ingredient (API) supply verification and last-mile temperature logging from Mumbai and Gujarat production corridors into East and West African distributor networks.
                  </p>
                </div>

                {/* Tabular Telemetry Callouts */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/60 font-mono text-center sm:text-left">
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">280+</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Pharma Importers</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">99.2%</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">API Compliance</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg sm:text-xl font-black text-foreground">100%</span>
                    <p className="text-[10px] text-muted-foreground uppercase leading-tight">Cold-Chain Logged</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-[11px] text-muted-foreground">
                  <span className="font-semibold text-foreground">Methodology:</span> Cold-chain IoT logger calibration, regulatory license audits &amp; pharmacy panel sweeps.
                </div>
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-border/50">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500" /> IoT Calibrated
                  </span>
                  <Link
                    href="/reports"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shrink-0"
                  >
                    <FileText className="size-3.5" />
                    <span>Access Executive Dossier</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Symmetrical Telemetry & Research Studio Gateway Ribbon */}
          <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Pan-African Telemetry Footprint:</span>
              </div>
              <span>14,200+ Retail Outlets</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>56,000+ Panelists</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>4,850+ E-Waste Audits</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>280+ Importers</span>
            </div>
            <Link
              href="/insights#published-surveys"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline shrink-0"
            >
              <span>Explore 5 Published Empirical Studies in Research Studio</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: STRATEGIC CAPABILITIES MATRIX (GARTNER SOLUTIONS FRAMEWORK) */}
      <section id="capabilities" className="py-12 sm:py-16 border-b border-border/70 bg-background scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                02 // CAPABILITIES MATRIX &amp; AUDITED STANDARDS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Four Methodological Pillars Engineered for Emerging Markets
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
            >
              <span>Explore Detailed Solutions Portfolio</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* High-End Executive Capability Matrix (4 Quadrants) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Pillar 01 */}
            <div className="p-6 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                {/* Header & Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold tracking-wider">
                    PILLAR 01 // SCOPING &amp; ENTRY
                  </span>
                  <div className="p-2 rounded-lg bg-muted/60 border border-border/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Compass className="size-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    Market Opportunity Intelligence
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">
                    Pre-Capital Feasibility &amp; Subnational Market Sizing
                  </p>
                </div>

                {/* Problem & Field Solution Blocks */}
                <div className="space-y-3 text-xs border-t border-border/60 pt-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">The Market Blindspot:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Official census data masks informal distribution channels and subnational purchasing power concentration.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-foreground">Fieldwork Methodology:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      GPS-mapped retail censuses, double-blind competitor pricing scans, and econometrically modeled household disposable income.
                    </p>
                  </div>
                </div>

                {/* Structured Deliverables */}
                <div className="space-y-1.5 border-t border-border/60 pt-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">Primary Deliverables:</span>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Addressable Market Sizing (TAM/SAM)</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Competitor Unit Velocity Map</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Capital Allocation Risk Matrix</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Audit Standards & Action */}
              <div className="space-y-2.5 pt-3 border-t border-border/60">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>Standard: ESOMAR &bull; GPS Audited</span>
                  <span className="text-primary font-bold">95% CI</span>
                </div>
                <Link
                  href="/solutions"
                  className="w-full inline-flex items-center justify-between px-3 py-1.5 rounded-md bg-muted/40 hover:bg-primary/10 text-foreground hover:text-primary text-xs font-semibold transition-all border border-border/50"
                >
                  <span>Explore Methodology</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="p-6 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                {/* Header & Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold tracking-wider">
                    PILLAR 02 // BEHAVIORAL PANELS
                  </span>
                  <div className="p-2 rounded-lg bg-muted/60 border border-border/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Users2 className="size-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    Consumer Telemetry &amp; Panels
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">
                    Longitudinal Behavioral Tracking &amp; Wallet Share
                  </p>
                </div>

                {/* Problem & Field Solution Blocks */}
                <div className="space-y-3 text-xs border-t border-border/60 pt-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">The Market Blindspot:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Infrequent focus groups fail to capture rapid wallet adjustments triggered by currency fluctuations and inflation spikes.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-foreground">Fieldwork Methodology:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      56,000+ longitudinal mobile money panel, continuous daily household spend telemetry, and rapid-fire vernacular intercepts.
                    </p>
                  </div>
                </div>

                {/* Structured Deliverables */}
                <div className="space-y-1.5 border-t border-border/60 pt-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">Primary Deliverables:</span>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Daily Household Wallet Share Index</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Brand Switching &amp; Churn Predictors</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Subnational Price Elasticity Curves</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Audit Standards & Action */}
              <div className="space-y-2.5 pt-3 border-t border-border/60">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>Standard: KDPA &bull; GDPR &bull; Live Feed</span>
                  <span className="text-primary font-bold">Continuous</span>
                </div>
                <Link
                  href="/solutions"
                  className="w-full inline-flex items-center justify-between px-3 py-1.5 rounded-md bg-muted/40 hover:bg-primary/10 text-foreground hover:text-primary text-xs font-semibold transition-all border border-border/50"
                >
                  <span>Explore Panels</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="p-6 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                {/* Header & Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold tracking-wider">
                    PILLAR 03 // FORMULATION &amp; SENSORY
                  </span>
                  <div className="p-2 rounded-lg bg-muted/60 border border-border/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <FlaskConical className="size-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    Product &amp; Sensory Validation
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">
                    Sensory Trials, Packaging Ergonomics &amp; SKU Sizing
                  </p>
                </div>

                {/* Problem & Field Solution Blocks */}
                <div className="space-y-3 text-xs border-t border-border/60 pt-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">The Market Blindspot:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Imported formulations and standardized Western pack sizes fail when misaligned with vernacular tastes and single-coin price points.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-foreground">Fieldwork Methodology:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Controlled central-location sensory testing (CLT), double-blind taste panels, packaging durability trials, and localized pricing tiers.
                    </p>
                  </div>
                </div>

                {/* Structured Deliverables */}
                <div className="space-y-1.5 border-t border-border/60 pt-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">Primary Deliverables:</span>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Sensory Preference Index &amp; Formula Fit</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Single-Coin Pack Size Pricing Matrix</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Packaging Usability &amp; Durability Score</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Audit Standards & Action */}
              <div className="space-y-2.5 pt-3 border-t border-border/60">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>Standard: Double-Blind &bull; Lab Controlled</span>
                  <span className="text-primary font-bold">N=500+</span>
                </div>
                <Link
                  href="/solutions"
                  className="w-full inline-flex items-center justify-between px-3 py-1.5 rounded-md bg-muted/40 hover:bg-primary/10 text-foreground hover:text-primary text-xs font-semibold transition-all border border-border/50"
                >
                  <span>Explore Sensory Audits</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="p-6 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                {/* Header & Icon */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold tracking-wider">
                    PILLAR 04 // INTERMEDIATION &amp; DEALS
                  </span>
                  <div className="p-2 rounded-lg bg-muted/60 border border-border/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Handshake className="size-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    B2B Intermediation &amp; Deal Rooms
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">
                    Direct Factory Vetting &amp; Bilateral Sourcing Desks
                  </p>
                </div>

                {/* Problem & Field Solution Blocks */}
                <div className="space-y-3 text-xs border-t border-border/60 pt-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">The Market Blindspot:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Cross-border procurement without on-site factory verification exposes buyers to counterfeit brokers, delayed freight, and default risk.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-foreground">Fieldwork Methodology:</span>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Physical plant inspections in Shenzhen/Yiwu/Mumbai, bilateral NDA enforcement, Tier-1 distributor vetting, and escrow transaction architecture.
                    </p>
                  </div>
                </div>

                {/* Structured Deliverables */}
                <div className="space-y-1.5 border-t border-border/60 pt-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-muted-foreground">Primary Deliverables:</span>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Audited Factory Due Diligence Dossier</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>Confidential Bilateral Deal Room Access</span>
                    </li>
                    <li className="flex items-center gap-1.5 text-foreground font-medium text-[11px]">
                      <CheckCircle2 className="size-3 text-primary shrink-0" />
                      <span>AfCFTA Cross-Border Tariff Roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Audit Standards & Action */}
              <div className="space-y-2.5 pt-3 border-t border-border/60">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>Standard: Bilateral NDA &bull; Plant Floor Audited</span>
                  <span className="text-primary font-bold">$185M+ Pipe</span>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-between px-3 py-1.5 rounded-md bg-muted/40 hover:bg-primary/10 text-foreground hover:text-primary text-xs font-semibold transition-all border border-border/50"
                >
                  <span>Initiate Deal Scoping</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: SOUTH-SOUTH TRADE DESK & BILATERAL INTERMEDIATION */}
      <section id="corridors" className="py-12 sm:py-16 border-b border-border/70 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                03 // BILATERAL TRADE DESKS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                South-South Corridors: Africa • China • India
              </h2>
            </div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-md border border-emerald-200 dark:border-emerald-800 shrink-0 font-bold">
              ACTIVE PIPELINE: $185M+
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Visual Panel */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-border/80 shadow-sm min-h-[320px] flex flex-col justify-end p-5">
              <Image
                src="/images/landing-port.jpg"
                alt="Maritime container terminal logistics for cross-border trade between Africa, China and India"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-1.5 text-white">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-bold font-mono">
                  <Lock className="size-3" />
                  CONFIDENTIAL DEAL ROOM
                </div>
                <h3 className="text-base font-bold leading-tight">
                  Bilateral Commercial Sourcing &amp; Execution
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Connecting African commercial buyers directly to audited manufacturing plants in Guangdong/Zhejiang, and pharmaceutical partners in Mumbai/Gujarat.
                </p>
              </div>
            </div>

            {/* B2B Services Grid */}
            <div className="lg:col-span-7 bg-card rounded-xl border border-border/80 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                <span className="text-xs font-mono font-bold uppercase text-foreground">
                  Intermediation Verification Protocols
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">BILATERAL NDAs ENFORCED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Market Entry Roadmaps
                  </h4>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Structured regulatory, tariff, and commercial structuring across target AfCFTA jurisdictions.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Direct Factory Audits
                  </h4>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Physical on-site verification of manufacturing plants in Shenzhen, Guangzhou, and Yiwu.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Healthcare &amp; API Sourcing
                  </h4>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Audited pharmaceutical formulation and active ingredient supply corridors from India.
                  </p>
                </div>

                <div className="p-3 rounded-lg border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Tier-1 Distributor Vetting
                  </h4>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Vetting wholesale distributors, cold-chain operators, and local distribution networks.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="text-muted-foreground">Strict bilateral non-disclosure agreements executed prior to deal room access.</span>
                <Link
                  href="/contact"
                  className="font-bold text-primary hover:underline flex items-center gap-1 shrink-0"
                >
                  Initiate Intermediation Brief <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: EMPIRICAL TELEMETRY STUDIO SPOTLIGHT (5 PUBLISHED SURVEYS GATEWAY) */}
      <section id="insights" className="py-12 sm:py-16 border-b border-border/70 bg-background scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                04 // EMPIRICAL STUDIES &amp; FIELD DATA
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Published Research Surveys &amp; Statistical Distributions
              </h2>
            </div>
            <Link
              href="/insights#published-surveys"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all"
            >
              <BarChart3 className="size-3.5" />
              <span>Launch Research Studio (5 Studies)</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

          {/* 3 Tabular Empirical Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Survey 1 */}
            <div className="p-5 rounded-xl border border-border/80 bg-card shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="text-primary font-bold">TECH GOVERNANCE</span>
                  <span>N = 1,840 Leaders</span>
                </div>
                <h3 className="text-sm font-bold text-foreground leading-snug">
                  Transitioning from Artificial Intelligence to Super Intelligence
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A 46-point perception divergence exists between corporate marketing executives (58% favor renaming) and higher education faculties (69% oppose rebranding without AGI reasoning benchmarks).
                </p>
              </div>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground text-[11px]">95% CI (± 2.2%)</span>
                <Link
                  href="/insights#published-surveys"
                  className="font-semibold text-primary hover:underline"
                >
                  View Charts &rarr;
                </Link>
              </div>
            </div>

            {/* Survey 2 */}
            <div className="p-5 rounded-xl border border-border/80 bg-card shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="text-primary font-bold">HEALTHCARE TELEMETRY</span>
                  <span>N = 3,420 Households</span>
                </div>
                <h3 className="text-sm font-bold text-foreground leading-snug">
                  Alternative Medicine &amp; Dual-Care Regimens in India
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  68% of households practice integrative dual-care, consuming allopathy for acute conditions while adhering to Ayurveda for chronic wellness. 74% of purchases are brand-loyal via neighborhood chemists.
                </p>
              </div>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground text-[11px]">95% CI (± 1.8%)</span>
                <Link
                  href="/insights#published-surveys"
                  className="font-semibold text-primary hover:underline"
                >
                  View Charts &rarr;
                </Link>
              </div>
            </div>

            {/* Survey 3 */}
            <div className="p-5 rounded-xl border border-border/80 bg-card shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="text-primary font-bold">RETAIL PRICING</span>
                  <span>N = 14,200 Audits</span>
                </div>
                <h3 className="text-sm font-bold text-foreground leading-snug">
                  Price Elasticity Thresholds for Beverages in Urban &amp; Peri-Urban Dukas
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Price resistance thresholds in informal trade channels trigger immediate 24% SKU switching at subnational currency increments when pack sizes exceed single-coin price points.
                </p>
              </div>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground text-[11px]">95% CI (± 1.5%)</span>
                <Link
                  href="/insights#published-surveys"
                  className="font-semibold text-primary hover:underline"
                >
                  View Charts &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: REGIONAL COVERAGE & STRATEGIC ENGAGEMENT */}
      <section id="engagement" className="py-12 sm:py-16 border-b border-border/70 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                05 // INITIATE ENGAGEMENT &amp; COVERAGE
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Understand the Market. Identify the Opportunity. Make Better Decisions.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether you are entering a new regional market, launching a consumer product, evaluating an investment opportunity, or seeking verified trade partners, Stratum delivers audit-grade intelligence.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all shrink-0"
            >
              <span>Talk to Stratum (Contact Desk)</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Innovative Regional Coverage Console */}
          <RegionalCoverageConsole />

          {/* Institutional Advisory Assurances Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px]">
                  All inquiries and scoping discussions protected under binding confidentiality agreements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <PhoneCall className="size-4 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Rapid 6-Hour Response Window</h4>
                <p className="text-muted-foreground text-[11px]">
                  A specialized regional lead will respond with preliminary telemetry scoping within 6 business hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <Building2 className="size-4 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Central Operations Command</h4>
                <p className="text-muted-foreground text-[11px]">
                  Headquartered in East Africa (Nairobi), directing cross-border corridors globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Corporate Footer */}
      <Footer />

      {/* Native Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
