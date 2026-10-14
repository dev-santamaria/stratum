"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  Handshake,
  Lock,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  XCircle,
  Zap,
  Building2,
  Compass,
  FileCheck,
  Clock,
  Layers,
  Search,
} from "lucide-react";

export default function WhyStratumPage() {
  const [activeScenarioTab, setActiveScenarioTab] = useState("scenario-fmcg");

  const BENCHMARKS = [
    {
      dimension: "Informal Retail Coverage (80%+ of Trade)",
      legacy: "Weak: Focuses almost exclusively on modern supermarkets (only 15–20% of sales)",
      ai: "None: Informal kiosks and street stalls have zero public internet footprint",
      stratum: "Ground-Truth: Primary field censuses in open-air markets, dukas, and spaza shops",
      winner: "stratum",
    },
    {
      dimension: "Field Audit Rigor & Anti-Fraud",
      legacy: "Vulnerable: Relies on paper forms and manual supervisor spot-checks",
      ai: "Hallucinatory: Synthesizes unverified web text and scraped consensus",
      stratum: "Methodologically Audited: GPS coordinates, timestamp geofencing, and acoustic verification",
      winner: "stratum",
    },
    {
      dimension: "Native Dialect & Vernacular Nuance",
      legacy: "Limited: English and French translation bias; misses local purchasing colloquialisms",
      ai: "Poor: Modern LLMs distort subnational African dialects (Pidgin, Sheng, Amharic, Yoruba)",
      stratum: "Native: Fieldwork executed in local dialects by native-speaker researchers",
      winner: "stratum",
    },
    {
      dimension: "Final Commercial Deliverable",
      legacy: "Static PDF: Delivers slide decks; leaves client without execution partners",
      ai: "Raw Text: Unstructured summaries without regulatory or supply chain validity",
      stratum: "Intermediation Execution: Connecting clients to audited distributors and factories",
      winner: "stratum",
    },
    {
      dimension: "Asia Trade Sourcing (China & India)",
      legacy: "Disconnected: Operates separate Western practices with minimal South-South integration",
      ai: "Superficial: Cannot physically inspect manufacturing plants or verify licenses",
      stratum: "Embedded Desks: Dedicated bilateral sourcing desks for on-site factory verification",
      winner: "stratum",
    },
    {
      dimension: "Data Governance & Confidentiality",
      legacy: "Standard: General consulting waivers with limited liability",
      ai: "High Risk: Web-scraped data often infringes privacy and IP regulations",
      stratum: "Bilateral Protection: Methodologies aligned with ESOMAR codes & binding mutual NDAs",
      winner: "stratum",
    },
  ];

  const SCENARIOS: Record<
    string,
    {
      title: string;
      sector: string;
      region: string;
      challenge: string;
      methodology: string;
      strategicDeliverable: string;
      illustrativeFramework: { label: string; value: string }[];
    }
  > = {
    "scenario-fmcg": {
      title: "Illustrative Scenario: FMCG Informal Retail Distribution & Coin-Point Pricing",
      sector: "Fast-Moving Consumer Goods (FMCG)",
      region: "East & Southern African Retail Corridors",
      challenge:
        "An expanding consumer goods brand faces sluggish supermarket sales and lacks field visibility into the traditional trade channels where over 80% of category volume transacts under tight cash constraints.",
      methodology:
        "Stratum designs a double-blind retail census covering informal kiosks, tracking shelf pricing, stockout frequency, and wholesale margin splits at defined statistical sample power (95% CI).",
      strategicDeliverable:
        "Single-coin price elasticity models and route-to-market distributor maps identifying key wholesale replenishment clusters.",
      illustrativeFramework: [
        { label: "Target Trade Channels", value: "Dukas & Spazas" },
        { label: "Confidence Interval", value: "95% (±1.8%)" },
        { label: "Price Analysis", value: "Coin Thresholds" },
        { label: "Execution Output", value: "Wholesale Map" },
      ],
    },
    "scenario-asia": {
      title: "Illustrative Scenario: Bilateral Sourcing & Direct Factory Audits (Asia-Africa Desk)",
      sector: "Industrial Hardware & Healthcare APIs",
      region: "China/India to African Commercial Gateways",
      challenge:
        "A commercial buyer seeks verified direct factory sourcing in Asia without exposing their business to trading company markups, unverified manufacturing claims, or delayed freight clearance.",
      methodology:
        "Stratum deploys on-site factory quality verification in manufacturing corridors (Guangdong, Zhejiang, Gujarat), confirms licenses, and structures AfCFTA tariff compliance roadmaps.",
      strategicDeliverable:
        "Audited Manufacturing Dossier, bilateral commercial MoU templates, and milestone-based escrow payment architecture.",
      illustrativeFramework: [
        { label: "Verification Scope", value: "Plant Audits" },
        { label: "Bilateral NDAs", value: "Mandatory" },
        { label: "Tariff Analysis", value: "AfCFTA Rules" },
        { label: "Execution Output", value: "Escrow Arch" },
      ],
    },
    "scenario-fintech": {
      title: "Illustrative Scenario: Subnational Mobile Money & Consumer Spending Telemetry",
      sector: "Digital Financial Services & Commerce",
      region: "Cross-Border Trade Corridors",
      challenge:
        "A financial services provider needs to measure informal cash-to-digital wallet float liquidity and subnational price adjustments ahead of lagging official government statistics.",
      methodology:
        "Longitudinal household spending logs combined with mystery-shopper agent visits to measure cashout fees, float availability, and currency exchange friction across key commercial transit hubs.",
      strategicDeliverable:
        "Weekly household wallet liquidity index, brand loyalty predictors, and subnational fee sensitivity curves.",
      illustrativeFramework: [
        { label: "Tracking Method", value: "Wallet Panels" },
        { label: "Sampling Design", value: "Stratified Cohorts" },
        { label: "Data Cadence", value: "High-Frequency" },
        { label: "Execution Output", value: "Liquidity Index" },
      ],
    },
  };

  const activeScenario = SCENARIOS[activeScenarioTab];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">STRATUM IDENTITY</span>
              <span className="text-border">•</span>
              <span className="text-foreground">PRIMARY FIELDWORK &bull; STRATEGY &bull; INTERMEDIATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground tracking-tight leading-[1.15]">
              Ground-Truth Intelligence Where Incumbents Fail
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              In emerging and frontier markets, over 80% of consumer commerce transacts in open-air markets, informal retail kiosks, and mobile money rails—completely invisible to traditional desk research and pure AI web scrapers. Stratum delivers primary human field truth, strategic intelligence, and direct business intermediation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Explore Our 6 Services</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <span>Discuss an Opportunity</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Institutional Pillars from Original Document */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              INSTITUTIONAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-foreground tracking-tight">
              Three Distinct Foundations of the Stratum Approach
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stratum combines international market research experience with on-the-ground understanding of local markets, rigorous quality-control procedures, and proprietary intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3">
              <Globe2 className="size-6 text-primary" />
              <h3 className="text-base font-bold text-foreground">
                Deep Understanding of Diverse Markets
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Stratum combines international market research experience with on-the-ground understanding of local markets. Our approach brings together digital research, face-to-face fieldwork, consumer engagement, and market intelligence to help clients navigate diverse commercial environments.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3">
              <ShieldCheck className="size-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-base font-bold text-foreground">
                Rigorous Quality Control
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We combine digital and face-to-face data collection with structured analysis and quality-control processes. Our field teams engage respondents directly, while our digital platforms facilitate scalable consumer research under audit protocols designed to improve the accuracy, consistency, and reliability of all information.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3">
              <Database className="size-6 text-amber-600 dark:text-amber-400" />
              <h3 className="text-base font-bold text-foreground">
                Proprietary Intelligence
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our research generates proprietary datasets and intelligence covering consumer behaviour, market dynamics, consumption patterns, distribution, and related topics. Where applicable, these datasets are continuously refreshed to provide clients with relevant and timely market intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Benchmark Table */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              METHODOLOGICAL COMPARISON
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground tracking-tight">
              Why Stratum Differs from Incumbent Alternatives
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Compare how Stratum addresses the core blindspots of traditional research agencies and generic consultancies.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border/80 bg-muted/40 font-mono text-[11px] text-muted-foreground">
                    <th className="p-4 font-bold">Research &amp; Advisory Dimension</th>
                    <th className="p-4 font-bold">Legacy Research Agencies</th>
                    <th className="p-4 font-bold">Generic AI &amp; Desk Research</th>
                    <th className="p-4 font-bold text-primary">Stratum Research Ltd</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {BENCHMARKS.map((b, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-semibold text-foreground align-top">
                        {b.dimension}
                      </td>
                      <td className="p-4 text-muted-foreground align-top leading-relaxed">
                        {b.legacy}
                      </td>
                      <td className="p-4 text-muted-foreground align-top leading-relaxed">
                        {b.ai}
                      </td>
                      <td className="p-4 text-foreground font-medium bg-primary/5 align-top leading-relaxed">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{b.stratum}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Problem Scenarios (Replacing fake case studies) */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
              ILLUSTRATIVE PROBLEM SCENARIOS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              How Stratum Solves Complex Emerging Market Dilemmas
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Clearly labelled illustrative frameworks demonstrating our approach across FMCG traditional retail, South-South bilateral trade desks, and financial telemetry.
            </p>
          </div>

          {/* Scenario Tab Buttons */}
          <div className="flex flex-wrap gap-2 border-b border-border/60 pb-3">
            {Object.keys(SCENARIOS).map((key) => {
              const item = SCENARIOS[key];
              const isSelected = activeScenarioTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveScenarioTab(key)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground shadow-xs"
                      : "border-border/70 bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {item.sector}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card space-y-6 shadow-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-primary uppercase">
                {activeScenario.region} &bull; ILLUSTRATIVE METHODOLOGICAL SPECIMEN
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {activeScenario.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-muted-foreground leading-relaxed">
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase font-bold text-foreground block">
                  The Market Challenge:
                </span>
                <p className="p-3.5 rounded-xl border border-border/70 bg-muted/20">
                  {activeScenario.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase font-bold text-foreground block">
                  Stratum Research &amp; Intermediation Approach:
                </span>
                <p className="p-3.5 rounded-xl border border-border/70 bg-muted/20">
                  {activeScenario.methodology}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-border/60 font-mono text-center">
              {activeScenario.illustrativeFramework.map((metric, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="text-base font-bold text-foreground">{metric.value}</span>
                  <p className="text-[10px] text-muted-foreground uppercase">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs pt-2">
              <div className="text-muted-foreground">
                <strong className="text-foreground">Core Deliverable: </strong>
                {activeScenario.strategicDeliverable}
              </div>
              <Link
                href="/contact"
                className="font-bold text-primary hover:underline flex items-center gap-1 shrink-0"
              >
                Discuss Similar Scenario &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-14 sm:py-18 bg-card border-t border-border/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Ready to Commission Stratum?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From market understanding to opportunity identification and strategic partnerships, we help turn informed decisions into actionable business possibilities.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
            >
              <span>Commission a Research Study</span>
            </Link>
            <Link
              href="/services"
              className="px-5 py-3 rounded-lg border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              <span>Explore Our 6 Services</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
