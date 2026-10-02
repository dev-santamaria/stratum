"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  Handshake,
  Lock,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  XCircle,
  Zap,
  Radio,
  Building2,
  Compass,
  FileCheck,
  HelpCircle,
  Award,
} from "lucide-react";

export default function WhyStratumPage() {
  const [activeCaseTab, setActiveCaseTab] = useState("case-fmcg");

  const BENCHMARKS = [
    {
      dimension: "Informal Retail Coverage (84% of Trade)",
      legacy: "Weak: Focuses almost exclusively on modern supermarkets (only 16% of sales)",
      ai: "None: Informal kiosks and street vendors have zero public web presence",
      stratum: "Dominant: 48,000+ GPS-mapped kiosks, spaza shops, dukas, and open-air souks",
      winner: "stratum",
    },
    {
      dimension: "Anti-Fraud & Field Audit Rigor",
      legacy: "Vulnerable: Relies on paper forms and manual supervisor spot-checks",
      ai: "Hallucinatory: Scrapes unverified forum posts, synthetic text, and bot consensus",
      stratum: "Audit-Grade: 99.4% precision with timestamped GPS coordinates and audio acoustic logs",
      winner: "stratum",
    },
    {
      dimension: "Native Dialect & Vernacular Nuance",
      legacy: "Limited: English and French translation bias; misses local purchasing slang",
      ai: "Poor: Modern LLMs distort African dialects (Pidgin, Sheng, Amharic, Yoruba)",
      stratum: "Native: Research deployed in 42+ local vernaculars by native dialect speakers",
      winner: "stratum",
    },
    {
      dimension: "Data Freshness & Telemetry Velocity",
      legacy: "Stale: 6 to 12-month lag between field collection and final printed PDF delivery",
      ai: "Instant but Uncalibrated: Real-time generation of unverified guesses",
      stratum: "Continuous: 24–48 hour rapid pulse telemetry refreshed through mobile money feeds",
      winner: "stratum",
    },
    {
      dimension: "Final Commercial Deliverable",
      legacy: "Static PDF: Delivers slide presentations; client is left without execution partners",
      ai: "Raw Text: Unstructured summaries without regulatory or supply chain validity",
      stratum: "Deal Room Execution: We walk clients to audited distributor contracts and terms",
      winner: "stratum",
    },
    {
      dimension: "Asia Trade Sourcing (China & India)",
      legacy: "Disconnected: Operates separate Western practices with minimal South-South cross-link",
      ai: "Superficial: Cannot physically inspect factories or verify Chinese/Indian trade licenses",
      stratum: "Embedded: Dedicated trade desks in Shenzhen, Guangzhou, and Mumbai for factory audits",
      winner: "stratum",
    },
    {
      dimension: "Regulatory & Currency Risk Modeling",
      legacy: "High-Level: Macroeconomic GDP summaries that fail to predict localized FX deficits",
      ai: "Generic: Scrapes outdated statutory codes with zero local customs context",
      stratum: "Micro-Calibrated: Subnational FX liquidity tracking and AfCFTA cross-border tariff models",
      winner: "stratum",
    },
    {
      dimension: "Data Governance & Legal Protection",
      legacy: "Standard: General consulting waivers with limited liability for field inaccuracies",
      ai: "High Legal Risk: Web-scraped data often infringes IP and cross-border privacy laws",
      stratum: "Bilateral Vault: ESOMAR compliant, POPIA, NDPR, GDPR, and strict mutual NDAs",
      winner: "stratum",
    },
  ];

  const CASES: Record<
    string,
    {
      title: string;
      sector: string;
      region: string;
      challenge: string;
      methodology: string;
      impact: string;
      metrics: { label: string; value: string }[];
    }
  > = {
    "case-fmcg": {
      title: "Global Beverage Giant: Unlocking Peri-Urban Spaza Distribution",
      sector: "Fast-Moving Consumer Goods (FMCG)",
      region: "Southern Africa (Johannesburg, Durban, Cape Town)",
      challenge:
        "Client faced declining supermarket market share and lacked visibility into the informal township spaza economy where 68% of category volume was transacting.",
      methodology:
        "Stratum deployed 320 field envoys to conduct GPS-verified audits across 11,200 township retail kiosks, tracking real weekly shelf pricing, stockout frequency, and wholesale margin splits.",
      impact:
        "Revealed that competitor brands dominated via informal cash-van wholesalers. Client redesigned distribution with localized 200ml packaging and captured +22% market share within 9 months.",
      metrics: [
        { label: "Spaza Shops Mapped", value: "11,200+" },
        { label: "Market Share Gain", value: "+22.4%" },
        { label: "Category Margins", value: "+340 bps" },
        { label: "Turnaround Time", value: "28 Days" },
      ],
    },
    "case-asia": {
      title: "Asian Solar & Hardware Manufacturer: Bilateral Trade Clearance",
      sector: "Renewable Energy & Industrial Hardware",
      region: "China Trade Desk to East Africa Corridor (Shenzhen to Mombasa/Nairobi)",
      challenge:
        "Tier-1 Chinese solar manufacturer sought verified commercial distributors and customs clearance navigation across Kenya, Uganda, and Rwanda without middleman markups.",
      methodology:
        "Stratum conducted on-the-ground factory due diligence in Shenzhen, structured AfCFTA tariff compliance, and introduced 6 vetted Tier-1 regional distributors in our confidential Deal Room.",
      impact:
        "Executed $14.2M bilateral multi-year distribution contracts with escrow safeguards, eliminating 3 tiers of intermediary brokerage fees.",
      metrics: [
        { label: "Contract Value", value: "$14.2M" },
        { label: "Vetted Distributors", value: "6 Cleared" },
        { label: "Intermediation Time", value: "< 72 Hrs" },
        { label: "Supply Chain Cost", value: "-18.5%" },
      ],
    },
    "case-fintech": {
      title: "Cross-Border Remittance & Mobile Money Telemetry",
      sector: "Fintech & Cross-Border Payments",
      region: "West Africa ECOWAS Corridor (Lagos, Accra, Abidjan)",
      challenge:
        "Fintech unicorn needed to map informal cash-to-digital agent float liquidity and FX black market premiums across 8 major overland border crossings.",
      methodology:
        "Continuous mobile money pacing panel combined with daily secret-shopper agent visits to measure cashout rejection rates, OTC fees, and currency conversion slippage.",
      impact:
        "Client dynamically adjusted corridor remittance fees, capturing 41% of cross-border trader volume within the Lagos-Cotonou-Lomé trade belt.",
      metrics: [
        { label: "Border Hubs Tracked", value: "8 Active" },
        { label: "Trader Volume Share", value: "41.0%" },
        { label: "Agent Rejection Rate", value: "-62%" },
        { label: "Survey Freshness", value: "24-Hr Pulse" },
      ],
    },
  };

  const activeCase = CASES[activeCaseTab];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              <Compass className="size-3.5" />
              <span>THE STRATUM ADVANTAGE</span>
              <span className="text-border">•</span>
              <span className="text-foreground">GROUND-TRUTH VS DESK ASSUMPTIONS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Why Stratum?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                Ground-Truth Intelligence
              </span>{" "}
              Where Incumbents Fail.
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              In emerging and frontier markets, over 80% of consumer commerce transacts in open-air markets, informal retail kiosks, and mobile money rails—completely invisible to Western desk research firms and pure AI scrapers. Stratum delivers verifiable human field truth, real-time telemetry, and direct Deal Room execution.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all cursor-pointer"
              >
                Benchmark Your Market Scope
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="#benchmark-table"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                Compare With Incumbents
              </a>
            </div>
          </div>

          {/* Scale Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border/60">
            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">INVISIBLE COMMERCE</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">84%</div>
              <p className="text-[11px] text-muted-foreground">Transacted in Informal Retail</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">VERIFIED ENVOYS</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">1,600+</div>
              <p className="text-[11px] text-muted-foreground">GPS-Audited Field Network</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">AUDIT PRECISION</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">99.4%</div>
              <p className="text-[11px] text-muted-foreground">Spatial &amp; Acoustic Verification</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">DEAL ROOM PIPELINE</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">$185M+</div>
              <p className="text-[11px] text-muted-foreground">Intermediated B2B Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive 8-Dimension Benchmark Matrix */}
      <section id="benchmark-table" className="py-12 sm:py-16 border-b border-border/60 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              INSTITUTIONAL BENCHMARK
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              The Reality Gap in Emerging Market Research
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Compare how the three primary approaches perform when deployed in real-world emerging market environments.
            </p>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-lg">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-muted/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-mono">
                  <th className="py-4 px-4 sm:px-6">Evaluation Dimension</th>
                  <th className="py-4 px-4 sm:px-6 text-muted-foreground">Legacy Consulting Giants</th>
                  <th className="py-4 px-4 sm:px-6 text-muted-foreground">Pure AI &amp; Web Scrapers</th>
                  <th className="py-4 px-4 sm:px-6 text-primary bg-primary/10 border-l border-r border-primary/20">
                    STRATUM Operating System
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-xs">
                {BENCHMARKS.map((b, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-foreground max-w-xs">
                      {b.dimension}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-muted-foreground leading-relaxed">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="size-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{b.legacy}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-muted-foreground leading-relaxed">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="size-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{b.ai}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-foreground font-medium bg-primary/5 border-l border-r border-primary/20 leading-relaxed">
                      <div className="flex items-start gap-1.5 text-foreground font-semibold">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b.stratum}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. The 4 Operational Moats (Why Incumbents Can't Replicate Us) */}
      <section className="py-12 sm:py-16 border-b border-border/60 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              DEFENSIBLE ADVANTAGES
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Four Operational Moats Incumbents Cannot Match
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Why legacy desk research and Western LLM scraping models consistently produce misleading conclusions in complex emerging corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Moat 1 */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-primary">MOAT 01</span>
                <MapPin className="size-4 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Offline Informal Retail Enumeration
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Over 80% of fast-moving consumer products in Africa flow through corner dukas, township spaza shops, and wholesale market stalls. These merchants have no websites, no public Google Maps profiles, and no public POS APIs. Stratum sends physical, GPS-audited researchers to map real shelf availability, margin splits, and consumer brand substitution.
              </p>
            </div>

            {/* Moat 2 */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-emerald-600">MOAT 02</span>
                <Radio className="size-4 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Dialect-First Acoustic Verification
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                When consumers are interviewed in textbook English or formal French, they provide aspirational, sanitized answers. Stratum conducts intercepts in 42+ native vernaculars (Swahili, Pidgin, Sheng, Yoruba, Hausa, Amharic). All in-depth qualitative interviews (IDIs) are recorded with acoustic voice hashes to guarantee authentic sentiment.
              </p>
            </div>

            {/* Moat 3 */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-600">MOAT 03</span>
                <Zap className="size-4 text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Mobile Money Transaction Velocity
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rather than relying on outdated annual census statistics, Stratum integrates empirical mobile money float pacing (M-Pesa, MTN MoMo, Wave, Orange Money) into our econometric models. We observe purchasing power contractions and inflation resilience weeks before official central bank bulletin releases.
              </p>
            </div>

            {/* Moat 4 */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-purple-600">MOAT 04</span>
                <Handshake className="size-4 text-purple-600" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                The Deal Room Execution Bridge
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The biggest failure of legacy market research is the execution chasm: delivering insights without the commercial relationships to act. Stratum operates a confidential B2B Deal Room where pre-audited Tier-1 distributors, verified factory suppliers in China/India, and institutional co-investors execute commercial contracts under bilateral NDAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Empirical Case Proof & Telemetry Vignettes */}
      <section className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              CASE TELEMETRY
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Real-World Commercial Proof &amp; Verified Impact
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore how Stratum turned complex market signals into quantifiable bottom-line returns for enterprise clients.
            </p>
          </div>

          {/* Case Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto p-1.5 rounded-2xl bg-muted/30 border border-border/80 max-w-2xl mx-auto scrollbar-none gap-2">
            {[
              { id: "case-fmcg", label: "FMCG Spaza Audit" },
              { id: "case-asia", label: "China Trade Sourcing" },
              { id: "case-fintech", label: "Fintech Remittance" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCaseTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCaseTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Selected Case Showcase Card */}
          <div className="rounded-3xl border border-border/80 bg-card/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-primary font-bold">{activeCase.sector}</span>
                    <span className="text-border">•</span>
                    <span className="text-muted-foreground">{activeCase.region}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {activeCase.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                    COMMERCIAL CHALLENGE:
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                    STRATUM RESEARCH METHODOLOGY:
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeCase.methodology}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 border border-border/80 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">
                    EXECUTIVE OUTCOME:
                  </span>
                  <p className="text-xs font-semibold text-foreground leading-relaxed">
                    {activeCase.impact}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Metrics (5 cols) */}
              <div className="lg:col-span-5 bg-muted/20 border border-border/80 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="text-xs font-mono font-bold uppercase text-foreground border-b border-border/60 pb-3 flex items-center justify-between">
                  <span>QUANTIFIED CLIENT IMPACT</span>
                  <Award className="size-4 text-primary" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {activeCase.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 rounded-xl border border-border/70 bg-card space-y-1"
                    >
                      <div className="text-xl sm:text-2xl font-black font-mono text-foreground">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-medium leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-muted-foreground border-t border-border/60">
                  <p className="text-[11px]">
                    Detailed case dossier available upon execution of bilateral mutual NDA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. High-Converting Bottom CTA */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
            <Sparkles className="size-3" />
            EVALUATE YOUR EXPOSURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Stop Guessing on Complex Emerging Markets.
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Discuss your target market challenges with our research directors in Nairobi, Lagos, and Johannesburg. We will benchmark your existing data against ground truth.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all cursor-pointer"
            >
              Request Benchmark Scoping Session
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
