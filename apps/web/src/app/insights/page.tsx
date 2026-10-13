import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { ResearchStudioWrapper } from "@/components/research/research-studio-wrapper";
import {
  FileText,
  TrendingUp,
  Sparkles,
  BookOpen,
  ArrowRight,
  Globe2,
  Calendar,
  Layers,
  ArrowUpRight,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  Building2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Market Telemetry — Stratum Research Ltd",
  description:
    "Explore empirical research briefs, subnational market telemetry, category audits, and strategic perspectives from Stratum Research Ltd.",
};

const INSIGHT_CATEGORIES = [
  {
    id: "reports",
    title: "Primary Research Reports",
    description: "In-depth category censuses, subnational distribution audits, and sector feasibility studies.",
    icon: FileText,
    badge: "BENCHMARK STUDIES",
    items: [
      {
        title: "The 84% Reality: Mapping Informal Kiosk Retail Volume & Single-Coin Price Elasticity",
        category: "Consumer & Retail",
        date: "Q3 2026",
        region: "East Africa (Nairobi, Kiambu & Machakos Corridors)",
        readTime: "18 min read",
        samplePower: "n = 3,600 GPS-Audited Outlets",
      },
      {
        title: "Cross-Border Commercial Sourcing: Direct Production Verification Between Asia & East Africa Gateways",
        category: "B2B Trade & Logistics",
        date: "Q3 2026",
        region: "Mombasa Corridor & Indian Ocean Maritime Gates",
        readTime: "22 min read",
        samplePower: "24 Verified Manufacturing Plants",
      },
    ],
  },
  {
    id: "market-insights",
    title: "Subnational Market Telemetry",
    description: "Empirical field findings on merchant velocity, unit economics, regulatory shifts, and distributor markups.",
    icon: TrendingUp,
    badge: "FIELD TELEMETRY",
    items: [
      {
        title: "Price Elasticity Thresholds: Consumer Resistance Curves for Fast-Moving Beverages at Coin Denominations",
        category: "FMCG Telemetry",
        date: "September 2026",
        region: "Nairobi Commercial Districts & Peri-Urban Hubs",
        readTime: "8 min read",
        samplePower: "n = 1,200 Retail Dukas",
      },
      {
        title: "Decentralized Agricultural Cold-Chain: Post-Harvest Spoilage Rates and Cooperative Willingness-to-Pay",
        category: "Clean Energy & Agri",
        date: "August 2026",
        region: "Rift Valley & Lake Victoria Horticultural Corridors",
        readTime: "11 min read",
        samplePower: "n = 570 Agri Enterprises",
      },
    ],
  },
  {
    id: "consumer-pulse",
    title: "Consumer Pulse & Taste Testing",
    description: "Direct consumer intercepts, mobile basket pacing logs, and vernacular blind sensory evaluations.",
    icon: Sparkles,
    badge: "DIRECT CONSUMER FEED",
    items: [
      {
        title: "Household Basket Adjustments Under Food Inflation: Weekly Field Intercepts & Brand Substitution Pacing",
        category: "Consumer Behavior",
        date: "Bi-Weekly Panel",
        region: "East Africa Urban & Informal Settlements",
        readTime: "7 min read",
        samplePower: "n = 2,400 Household Heads",
      },
      {
        title: "Vernacular Packaging vs. Standard English Branding: Measuring 2.4x Trial Velocity in Native Dialects",
        category: "Product Testing",
        date: "July 2026",
        region: "Kenya Urban & Peri-Urban Trade Belts",
        readTime: "9 min read",
        samplePower: "Double-Blind Sensory Intercepts",
      },
    ],
  },
  {
    id: "perspectives",
    title: "Stratum Perspectives & Methodologies",
    description: "Methodological papers, field dispatch notes, and executive guidance from our Nairobi research leads.",
    icon: BookOpen,
    badge: "METHODOLOGICAL PAPERS",
    items: [
      {
        title: "Why Desk-Based Scraping Fails in Developing Markets: The Necessity of GPS-Geofenced Human Fieldwork",
        category: "Research Methodology",
        date: "June 2026",
        region: "Sub-Saharan Emerging Markets",
        readTime: "14 min read",
        samplePower: "ESOMAR Double-Blind Standard",
      },
      {
        title: "From Empirical Research to Signed Contracts: Structuring B2B Deal Rooms Under Bilateral Mutual NDAs",
        category: "Commercial Intermediation",
        date: "May 2026",
        region: "Central Operations Desk • Nairobi HQ",
        readTime: "12 min read",
        samplePower: "Bilateral Legal Architecture",
      },
    ],
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">01 // EMPIRICAL INTELLIGENCE</span>
              <span className="text-border">•</span>
              <span className="text-foreground">MARKET TELEMETRY &amp; BRIEFS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-foreground tracking-tight leading-[1.2]">
              Market Insights, Empirical Telemetry &amp; Research Briefs
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum demonstrates methodological capability through field-tested research briefs, subnational econometric models, and transparent sample architectures (95% CI). Explore our empirical analyses below or commission custom telemetry for your sector.
            </p>

            {/* Verification Trust Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <CheckCircle2 className="size-3 text-primary" />
                Primary Fieldwork Only
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <ShieldCheck className="size-3 text-primary" />
                Statistical 95% Confidence Interval
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <Compass className="size-3 text-primary" />
                GPS-Geofenced Observations
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <Building2 className="size-3 text-primary" />
                Centrally Directed from Nairobi HQ
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#published-surveys"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <BarChart3 className="size-3.5" />
                <span>Explore Interactive Data Studio</span>
                <ArrowRight className="size-3" />
              </a>
              <Link
                href="/research-briefs"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all shadow-2xs"
              >
                <FileText className="size-3.5 text-primary" />
                <span>Sample Research Briefs</span>
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all shadow-2xs"
              >
                <BookOpen className="size-3.5 text-primary" />
                <span>Read Editorial Essays</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Studio & Categories Section */}
      <main className="py-12 sm:py-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-16">
          {/* Prominent Featured Column: Interactive Market Research Studio */}
          <section id="published-surveys" className="scroll-mt-24 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/60 pb-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[11px] font-bold uppercase tracking-wider">
                  <BarChart3 className="size-3" />
                  INTERACTIVE FIELD STUDIO
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Empirical Survey Datasets &amp; Cross-Sectional Telemetry
                </h2>
                <p className="text-xs text-muted-foreground">
                  Inspect empirical distributions, regional trade corridor comparisons, and trajectory curves captured across our fieldwork sweeps.
                </p>
              </div>
              <div className="text-xs font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-md border border-border/70 shrink-0">
                <span>Protocol: Double-Blind &bull; Statistical 95% CI</span>
              </div>
            </div>

            <ResearchStudioWrapper />
          </section>

          {/* Structured Intelligence Category Grid */}
          {INSIGHT_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/60 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-primary" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground font-semibold">
                        {cat.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item) => (
                    <article
                      key={item.title}
                      className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-2xs group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                          <span className="text-primary font-semibold">{item.category}</span>
                          <span className="text-muted-foreground">{item.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {item.title}
                        </h4>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-border/60">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
                          <span className="flex items-center gap-1.5 font-medium truncate max-w-[260px]">
                            <Globe2 className="size-3 text-primary shrink-0" />
                            {item.region}
                          </span>
                          <span className="font-semibold text-foreground shrink-0">
                            {item.samplePower}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[11px] font-mono text-muted-foreground">
                            {item.readTime}
                          </span>
                          <Link
                            href="/contact?cta=COMMISSION_RESEARCH"
                            className="font-bold text-xs text-primary group-hover:underline flex items-center gap-1"
                          >
                            <span>Request This Study Scope</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Custom Scoping Callout Banner */}
      <section className="py-12 sm:py-16 bg-muted/20 border-b border-border/70">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
            <Lock className="size-3" />
            CONFIDENTIAL SCOPING BRIEFING
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight">
            Commission a Bespoke Market Study or Scoping Memo
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Need customized primary data or subnational telemetry for your product category? Discuss your objectives with our research directors at our Nairobi headquarters under a strict bilateral NDA.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
            >
              <span>Talk to Stratum — Request Research Scope</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all cursor-pointer"
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
