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
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  Building2,
  Lock,
  Phone,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Market Telemetry — Stratum Research Ltd",
  description:
    "Explore empirical research briefs, subnational market telemetry, category audits, and strategic perspectives from Stratum Research Ltd.",
};

interface InsightCategory {
  id: string;
  number: string;
  kicker: string;
  title: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  ctaHref: string;
  ctaLabel: string;
  items: {
    title: string;
    category: string;
    date: string;
    region: string;
    readTime: string;
    samplePower: string;
  }[];
}

const INSIGHT_CATEGORIES: InsightCategory[] = [
  {
    id: "reports",
    number: "01",
    kicker: "BENCHMARK STUDIES",
    title: "Primary Research Reports",
    description: "In-depth category censuses, subnational distribution audits, and sector feasibility studies.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: FileText,
    ctaHref: "/reports",
    ctaLabel: "EXPLORE ALL REPORTS",
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
    number: "02",
    kicker: "FIELD TELEMETRY",
    title: "Subnational Market Telemetry",
    description: "Empirical field findings on merchant velocity, unit economics, regulatory shifts, and distributor markups.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: TrendingUp,
    ctaHref: "/reports#telemetry-studio",
    ctaLabel: "ACCESS TELEMETRY",
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
    number: "03",
    kicker: "DIRECT CONSUMER FEED",
    title: "Consumer Pulse & Taste Testing",
    description: "Direct consumer intercepts, mobile basket pacing logs, and vernacular blind sensory evaluations.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: Sparkles,
    ctaHref: "/services#research",
    ctaLabel: "EXPLORE SENSORY TESTING",
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
    number: "04",
    kicker: "METHODOLOGICAL PAPERS",
    title: "Stratum Perspectives & Methodologies",
    description: "Methodological papers, field dispatch notes, and executive guidance from our Nairobi research leads.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: BookOpen,
    ctaHref: "/blogs",
    ctaLabel: "READ EDITORIAL ESSAYS",
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
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. Hero Header: Minimalist Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
              <Workflow className="size-3 text-primary shrink-0" />
              <span>STRATUM INSIGHTS &bull; NAIROBI ADVISORY DESK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Market Insights, Empirical Telemetry &amp; Research Briefs
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Explore research reports, subnational market telemetry, consumer pulse snapshots, and strategic perspectives from the Stratum research team. We demonstrate capability through transparent sample architectures, empirical field models, and actionable intelligence.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/research-briefs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <FileText className="size-3.5 text-primary" />
                <span>SAMPLE RESEARCH BRIEFS</span>
              </Link>
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>RESEARCH REPORTS</span>
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <BookOpen className="size-3.5 text-primary" />
                <span>EDITORIAL ESSAYS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Operational Rigor Standards Bar (Sharp 4-Column Grid) */}
      <section className="py-6 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>METHODOLOGY</span>
                <CheckCircle2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">Primary Only</div>
              <p className="text-[11px] text-muted-foreground">Direct Ground Fieldwork &bull; Zero Desk Guesswork</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>STATISTICAL RIGOR</span>
                <ShieldCheck className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">95% CI</div>
              <p className="text-[11px] text-muted-foreground">Calibrated Margin of Error (±1.8%)</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>SPATIAL AUDITS</span>
                <Compass className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">GPS Audited</div>
              <p className="text-[11px] text-muted-foreground">100% Geofenced Subnational Outlets</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-[10px] font-mono uppercase">
                <span>GOVERNANCE</span>
                <Building2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-medium font-mono text-foreground">Nairobi HQ</div>
              <p className="text-[11px] text-muted-foreground">Central Operations Command Governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE INSIGHT CATEGORIES: Tall WordPress-Style Sharp-Edged Colored Cards */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              FOUR CORE INTELLIGENCE STREAMS
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Featured Research Categories &amp; Telemetry
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore our primary research domains across informal retail, macro consumer telemetry, and cross-border trade corridors:
            </p>
          </div>

          {/* WordPress Grid: 4 Tall Sharp Cards with Colored Backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {INSIGHT_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className={`${cat.bgClass} border ${cat.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[480px]`}
                >
                  <div className="space-y-4">
                    {/* Number + Icon Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <span className="font-mono text-xs font-bold tracking-wider opacity-90">
                        {cat.kicker}
                      </span>
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Title + Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-white/90 leading-relaxed font-normal">
                        {cat.description}
                      </p>
                    </div>

                    {/* Sample Items List */}
                    <div className="space-y-2.5 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/70 block">
                        BENCHMARK TOPICS:
                      </span>
                      {cat.items.map((item) => (
                        <div key={item.title} className="space-y-0.5 text-xs text-white/90">
                          <div className="font-medium leading-snug line-clamp-2">{item.title}</div>
                          <div className="text-[10px] font-mono text-white/70">{item.samplePower}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-white/15">
                    <Link
                      href={cat.ctaHref}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-none bg-white text-[#002B49] font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
                    >
                      <span>{cat.ctaLabel}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FIELD STUDIO SECTION */}
      <section id="published-surveys" className="py-14 sm:py-20 border-b border-border/80 bg-slate-50 dark:bg-card/40 scroll-mt-24">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/60 pb-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-none bg-primary/10 text-primary font-mono text-[10px] font-bold uppercase tracking-wider">
                <BarChart3 className="size-3" />
                <span>INTERACTIVE FIELD STUDIO</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Empirical Survey Datasets &amp; Cross-Sectional Telemetry
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Inspect empirical distributions, regional trade corridor comparisons, and trajectory curves captured across our fieldwork sweeps:
              </p>
            </div>
            <div className="text-[11px] font-mono text-muted-foreground bg-background px-3 py-1.5 rounded-none border border-border/70 shrink-0">
              <span>Protocol: Double-Blind &bull; Statistical 95% CI</span>
            </div>
          </div>

          <div className="rounded-none border border-border/80 bg-card p-4 sm:p-6 shadow-xs">
            <ResearchStudioWrapper />
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
                <span>NAIROBI ADVISORY &bull; COMMISSIONING DESK</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                Commission a Bespoke Market Study or Scoping Memo
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Need customized primary data or subnational telemetry for your product category? Discuss your objectives with our research directors at our Nairobi headquarters under a strict bilateral NDA.
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

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
