import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  Compass,
  TrendingUp,
  Search,
  Handshake,
  Globe2,
  Network,
  CheckCircle2,
  XCircle,
  Users2,
  Building2,
  Cpu,
  Lock,
  FileText,
  BarChart3,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* Global Navigation Header */}
      <Navbar />

      {/* CHAPTER 1: HERO & POSITIONING (EXACT CLIENT COPY FROM IMAGES 1 & 2) */}
      <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-border/70 bg-background overflow-hidden">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column (7 cols): Editorial Thesis & Positioning */}
            <div className="lg:col-span-7 space-y-4">
              {/* Header Badge (Image 2 Exact Copy) */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-border/80 bg-muted/40 text-[11px] font-mono font-semibold text-muted-foreground">
                <Globe2 className="size-3.5 text-primary shrink-0" />
                <span className="text-foreground font-bold tracking-wide">STRATUM RESEARCH LTD</span>
                <span className="text-border">•</span>
                <span className="text-primary font-bold">MARKET INTELLIGENCE &bull; STRATEGY &bull; INTERMEDIATION</span>
              </div>

              {/* Main Headline (Refined Standard Size) */}
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-foreground tracking-tight leading-tight max-w-2xl">
                See the Opportunity. Understand the Market. Make the Connection.
              </h1>

              {/* Recommended Positioning Tagline (Image 1 Exact Copy) */}
              <div className="text-xs sm:text-sm font-semibold text-primary tracking-normal border-l-2 border-primary pl-3 py-0.5">
                Bridging Investment Gaps Through Intelligence, Insight &amp; Intermediation
              </div>

              {/* Lead Paragraphs (Image 2 Exact Copy) */}
              <div className="space-y-2.5 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                <p>
                  Stratum Research Ltd empowers businesses, investors and strategic partners with the intelligence, research and market connections needed to navigate complex markets and unlock commercial opportunities.
                </p>
                <p>
                  From market understanding to opportunity identification and strategic partnerships, we help turn informed decisions into actionable business possibilities.
                </p>
              </div>

              {/* Primary Buttons (Image 2 Exact Copy with Bug-Free Arrow Icon) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <Link
                  href="/contact?cta=EXPLORE_INVESTMENT"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border/80 bg-card hover:bg-muted/70 text-foreground font-semibold text-xs transition-all shadow-2xs group cursor-pointer"
                >
                  <span>Discuss an Opportunity</span>
                  <ArrowRight className="size-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
                </Link>
              </div>

              {/* Innovative Triad Continuum (Replaces the static 4 text boxes) */}
              <div className="pt-6 border-t border-border/60 max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl border border-border/70 bg-card/60 hover:border-primary/50 hover:bg-card hover:shadow-2xs transition-all space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                      <Compass className="size-3.5 text-primary" />
                      <span>01 / Understand</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      Primary ground-truth data in traditional trade and consumer households.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-border/70 bg-card/60 hover:border-emerald-500/50 hover:bg-card hover:shadow-2xs transition-all space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                      <TrendingUp className="size-3.5 text-emerald-500" />
                      <span>02 / Identify</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      Subnational price elasticity curves and commercial whitespace mapping.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-border/70 bg-card/60 hover:border-amber-500/50 hover:bg-card hover:shadow-2xs transition-all space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                      <Handshake className="size-3.5 text-amber-500" />
                      <span>03 / Connect</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug">
                      Direct bilateral factory vetting and Tier-1 distributor connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Verified Ground Research Imagery */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-border/80 shadow-md bg-card aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[460px] group">
                <Image
                  src="/images/landing-kiosk.jpg"
                  alt="Stratum Research fieldwork in traditional trade and emerging markets"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Ground Truth Caption */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-background/95 dark:bg-background/90 backdrop-blur-md border border-border/80 shadow-md text-foreground space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-primary font-bold flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      PRIMARY FIELD TELEMETRY
                    </span>
                    <span className="text-muted-foreground">Emerging Markets Practice</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    Ground-level consumer insight, retail audits, and commercial partner verification across African and emerging trade corridors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: STRATUM IDENTITY & DIFFERENTIATION (CLIENT MANDATE) */}
      <section className="py-14 sm:py-18 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
              DISTINCT INSTITUTIONAL IDENTITY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              A Clear Identity Distinguishing Stratum in Emerging Markets
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Traditional research agencies drop static surveys on desks without execution capability. General consultancies deliver broad theoretical slide decks without primary ground truth. Stratum combines primary research, strategic intelligence, and direct business intermediation into one unified execution model.
            </p>
          </div>

          {/* 3-Column Differentiation Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Column 1: Traditional Research Agencies */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground font-bold">LEGACY RESEARCH</span>
                  <XCircle className="size-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  Traditional Research Agencies
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Focus predominantly on standardized consumer surveys and focus groups in formal supermarkets.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&times;</span>
                    <span>Outputs static PowerPoint reports with unverified theoretical TAM sizing.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&times;</span>
                    <span>Zero business connections, commercial deal structuring, or partner execution.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&times;</span>
                    <span>Leaves clients to figure out how to translate findings into commercial reality.</span>
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-mono text-muted-foreground bg-muted/40 p-2 rounded-lg">
                Outcome: Static data without commercial execution
              </div>
            </div>

            {/* Column 2: General Business Consultancies */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground font-bold">MANAGEMENT CONSULTING</span>
                  <XCircle className="size-4 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  General Business Consultancies
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Provide high-level corporate frameworks, macroeconomic summaries, and costly retainers.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&times;</span>
                    <span>Rely heavily on secondary desk research and outdated government statistics.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&times;</span>
                    <span>No grassroots field presence in the informal retail kiosks where 80%+ trade happens.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">&times;</span>
                    <span>Advisory recommendations disconnected from bilateral factory floors or local distributors.</span>
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-mono text-muted-foreground bg-muted/40 p-2 rounded-lg">
                Outcome: Abstract strategy without ground truth
              </div>
            </div>

            {/* Column 3: The Stratum Integrated Model */}
            <div className="p-6 rounded-2xl border-2 border-primary bg-gradient-to-b from-primary/10 via-primary/5 to-card space-y-4 flex flex-col justify-between relative shadow-md ring-1 ring-primary/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-primary font-bold flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    STRATUM RESEARCH LTD
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold tracking-wide">
                    INTEGRATED MODEL
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  The Integrated Stratum Model
                </h3>
                <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                  Market intelligence, strategic research, and business intermediation under one unified roof.
                </p>
                <div className="space-y-2 pt-2 border-t border-primary/20 text-xs text-foreground/90">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Primary Ground Truth:</strong> Double-blind audits in traditional trade channels.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Strategic Intelligence:</strong> Subnational pricing elasticity &amp; opportunity mapping.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Business Intermediation:</strong> Direct partner vetting &amp; bilateral sourcing desks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Digital Market:</strong> Platform access for continuous telemetry and deal matching.</span>
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-mono text-primary font-bold bg-primary/10 p-2.5 rounded-lg text-center border border-primary/20">
                Outcome: From market understanding to executed commercial deals
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: PRIORITY 2 — THE 6 DISTINCT SERVICE LINES (EXACT CLIENT TAXONOMY) */}
      <section id="services" className="py-14 sm:py-20 border-b border-border/70 bg-background scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
                PRIORITY 2: SEPARATE SERVICE LINES CLEARLY
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Stratum&apos;s Six Core Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum&apos;s research, intelligence, intermediation and digital-market activities are presented as distinct but complementary capabilities.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs transition-colors shrink-0"
            >
              <span>Explore Comprehensive Services Guide</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Grid of the 6 Service Lines (Image 3 Exact Sequence & Wording) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* 01 Research */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                    01
                  </span>
                  <Compass className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Research</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                  Market research, consumer insights, brand tracking, product testing and data collection.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Primary ground-truth investigations capturing authentic household consumption habits, informal kiosk SKU velocities, and localized sensory preferences.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <Link
                  href="/services#research"
                  className="font-bold text-primary group-hover:underline flex items-center gap-1"
                >
                  <span>View Research Scope</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 02 Intelligence */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                    02
                  </span>
                  <TrendingUp className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Intelligence</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                  Market analysis, competitor intelligence, opportunity assessment and strategic insights.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Translating raw fieldwork data into strategic foresight: analyzing competitor unit margins, wholesale discount structures, and subnational price sensitivities.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <Link
                  href="/services#intelligence"
                  className="font-bold text-primary group-hover:underline flex items-center gap-1"
                >
                  <span>View Intelligence Scope</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 03 Opportunity */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                    03
                  </span>
                  <Search className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Opportunity</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                  Investment screening, sector mapping and commercial opportunity identification.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pinpointing high-potential commercial whitespace and screening targets for corporate expansion, private capital deployment, and strategic acquisitions.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <Link
                  href="/services#opportunity"
                  className="font-bold text-primary group-hover:underline flex items-center gap-1"
                >
                  <span>View Opportunity Scope</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 04 Intermediation */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                    04
                  </span>
                  <Handshake className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Intermediation</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                  Connecting businesses, investors, suppliers, distributors and strategic partners.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Connecting clients with vetted Tier-1 regional distributors, institutional co-investors, and verified commercial suppliers directed from our Nairobi headquarters.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <Link
                  href="/services#intermediation"
                  className="font-bold text-primary group-hover:underline flex items-center gap-1"
                >
                  <span>View Intermediation Scope</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 05 Market Access */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                    05
                  </span>
                  <Globe2 className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Market Access</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                  Market-entry support, local partner identification and expansion strategy.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  De-risking new regional market entry through AfCFTA tariff guidance, local regulatory structuring, co-packer verification, and commercial route-to-market design.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <Link
                  href="/services#market-access"
                  className="font-bold text-primary group-hover:underline flex items-center gap-1"
                >
                  <span>View Market Access Scope</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 06 Digital Market */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                    06
                  </span>
                  <Network className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Digital Market</h3>
                <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                  A separate digital platform or marketplace offering, with its own clearly defined features.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A centralized intelligence platform offering continuous telemetry feeds, verified partner directories, encrypted deal rooms, and trade opportunity matchmaking.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <Link
                  href="/services#digital-market"
                  className="font-bold text-primary group-hover:underline flex items-center gap-1"
                >
                  <span>View Platform Features</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: DEMONSTRATING CAPABILITY HONESTLY — CURATED SPOTLIGHT */}
      <section className="py-14 sm:py-20 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
                DEMONSTRATED ANALYTICAL CAPABILITY
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Sample Research Briefs &amp; Illustrative Frameworks
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                As a newly established firm, Stratum demonstrates capability through transparent research charters, double-blind sampling rigor, and illustrative empirical models.
              </p>
            </div>
            <Link
              href="/research-briefs"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shrink-0 cursor-pointer shadow-xs"
            >
              <span>Inspect All Sample Briefs</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 3 Executive Brief Teasers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">SAMPLE BRIEF 01</span>
                  <span className="text-muted-foreground">01 Research &bull; East Africa</span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  Subnational FMCG Informal Retail Distribution &amp; Coin-Point Elasticity
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  GPS-verified kiosk audits capturing stockout velocity, informal wholesaler margins, and localized flavor preference.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground text-[11px]">n = 3,600 &bull; 95% CI</span>
                <Link
                  href="/research-briefs?brief=brief-fmcg-elasticity"
                  className="font-bold text-primary group-hover:underline flex items-center gap-1"
                >
                  <span>Inspect Charter</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">SAMPLE BRIEF 02</span>
                  <span className="text-muted-foreground">04 Intermediation &bull; Asia-Africa</span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  India-to-Africa Pharmaceutical Sourcing &amp; Cold-Chain Verification
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Active pharmaceutical ingredient (API) due diligence, factory inspections in Gujarat/Mumbai, and AfCFTA clearance.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground text-[11px]">24 Audited Plants</span>
                <Link
                  href="/research-briefs?brief=brief-pharma-sourcing"
                  className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline flex items-center gap-1"
                >
                  <span>Inspect Charter</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">SAMPLE BRIEF 03</span>
                  <span className="text-muted-foreground">03 Opportunity &bull; Agribusiness</span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Decentralized Solar &amp; Cold Storage Commercial Opportunity Screening
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Agricultural value chain mapping, cooperative refrigeration willingness-to-pay, and off-grid demand modeling.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground text-[11px]">n = 570 Co-ops</span>
                <Link
                  href="/research-briefs?brief=brief-solar-coldstorage"
                  className="font-bold text-amber-600 dark:text-amber-400 group-hover:underline flex items-center gap-1"
                >
                  <span>Inspect Charter</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: MULTIDISCIPLINARY TEAM EXPERIENCE */}
      <section className="py-14 sm:py-20 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
              TEAM EXPERIENCE &amp; CALIBER
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Capability Grounded in Proven Domain Experience
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              As a newly established firm, Stratum&apos;s strength rests in the deep sectoral track record of our multidisciplinary practice leads—combining quantitative econometrics with grassroots commercial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <Users2 className="size-6 text-primary" />
              <h3 className="text-sm font-bold text-foreground">
                Field Anthropologists &amp; Vernacular Leads
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Native dialect practitioners skilled in subnational qualitative interviews and open-air market consumption rituals without Western translation distortion.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <Compass className="size-6 text-emerald-500" />
              <h3 className="text-sm font-bold text-foreground">
                Econometricians &amp; Survey Methodologists
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialists in subnational sample stratification, double-blind design, confidence intervals (95% CI), and price elasticity modeling.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <Building2 className="size-6 text-amber-500" />
              <h3 className="text-sm font-bold text-foreground">
                FMCG Route-to-Market Operators
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Commercial practitioners with direct experience navigating Tier-1 wholesale channels, van distribution, and retail stockout cycles.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <Handshake className="size-6 text-purple-500" />
              <h3 className="text-sm font-bold text-foreground">
                Trade Intermediation &amp; Legal Counsel
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialists in bilateral escrow structuring, AfCFTA tariff classification, cross-border joint ventures, and direct factory auditing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: ACTIONABLE NEXT STEPS (STREAMLINED EXECUTIVE GATEWAY - NO FORM DUMP) */}
      <section className="py-14 sm:py-20 bg-card border-t border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
                ACTIONABLE NEXT STEPS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                How to Engage With Stratum
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every important engagement begins with a clear objective. Select your mandate below to open a pre-configured intake brief directly with our Nairobi desk.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all shrink-0 cursor-pointer"
            >
              <span>View Full Contact Desk</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 5 Sleek Action Cards (Image 4 Explicit Calls to Action) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* CTA 1 */}
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="p-5 rounded-2xl border border-border/80 bg-background hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 inline-block">
                  01 RESEARCH
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Commission a Research Study
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Tailored consumer panels, informal kiosk censuses, and localized brand health tracking.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1">
                <span>Start Brief</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* CTA 2 */}
            <Link
              href="/contact?cta=REQUEST_INTELLIGENCE"
              className="p-5 rounded-2xl border border-border/80 bg-background hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 inline-block">
                  02 INTELLIGENCE
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Request Market Intelligence
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Competitor unit margins, subnational price elasticity curves, and trade diagnostics.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1">
                <span>Start Brief</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* CTA 3 */}
            <Link
              href="/contact?cta=EXPLORE_INVESTMENT"
              className="p-5 rounded-2xl border border-border/80 bg-background hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 inline-block">
                  03 OPPORTUNITY
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Explore Investment Opportunities
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Pre-capital commercial feasibility audits, sector whitespace maps, and target screening.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1">
                <span>Start Brief</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* CTA 4 */}
            <Link
              href="/contact?cta=DISCUSS_MARKET_ENTRY"
              className="p-5 rounded-2xl border border-border/80 bg-background hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 inline-block">
                  05 ACCESS
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Discuss Market Entry
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Turnkey jurisdictional roadmaps, AfCFTA tariff compliance, and local distributor pairing.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1">
                <span>Start Brief</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* CTA 5 */}
            <Link
              href="/contact?cta=STRATEGIC_PARTNER"
              className="p-5 rounded-2xl border border-border/80 bg-background hover:border-primary hover:-translate-y-1 hover:shadow-md transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 inline-block">
                  04 INTERMEDIATION
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Become a Strategic Partner
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Commercial partner vetting, verified distributor networks, and bilateral transaction intermediation.
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1">
                <span>Start Brief</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          {/* Direct Executive Hotline Strip */}
          <div className="p-4 rounded-xl border border-border/80 bg-background/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-semibold">Prefer direct dialogue with our Nairobi executive desk?</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://wa.me/254721154382"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>WhatsApp: +254 721 154382</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="mailto:info@stratumresearchltd.com"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>info@stratumresearchltd.com</span>
              </a>
            </div>
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
