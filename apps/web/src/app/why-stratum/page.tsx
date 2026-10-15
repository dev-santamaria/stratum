import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  LineChart,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Stratum — Market Intelligence & Strategic Advantage",
  description:
    "Discover why leading businesses, investors, and brands choose Stratum Research Ltd: client-centered approach, cutting-edge digital infrastructure, strategic AI models, and services beyond insights.",
};

interface WhyChooseItem {
  number: string;
  kicker: string;
  title: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
}

const WHY_CHOOSE_STRATUM: WhyChooseItem[] = [
  {
    number: "01",
    kicker: "CLIENT-FIRST PHILOSOPHY",
    title: "Client Centered Approach",
    description:
      "At Stratum, we value client satisfaction. Our approach, therefore, revolve around our client's values, vision and principles.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Users2,
    highlights: ["Values & Vision Alignment", "Bespoke Scoping Mandates", "Direct Executive Accountability"],
    ctaLabel: "Discuss an Engagement",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
  },
  {
    number: "02",
    kicker: "MODERN RESEARCH TECHNOLOGY",
    title: "Cutting-Edge Digital Infrastructure for Research and Analysis",
    description:
      "At Stratum, we use cutting edge modern technology and digital infrastructure to collect, analyse,wrangle, clean and visualise research findings.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: Database,
    highlights: ["Automated Data Wrangling", "Clean Field Telemetry", "Interactive Visual Dashboards"],
    ctaLabel: "Explore Digital Analytics",
    ctaHref: "/services#business-intelligence",
  },
  {
    number: "03",
    kicker: "APPLIED ARTIFICIAL INTELLIGENCE",
    title: "Strategic Implementation of A.I. Models",
    description:
      "At Stratum, we have embraced Artificial Intelligence models to enhance our research accuracy through sentiment analysis, MixDiff/Conjoint validation, predictive modelling and cluster analysis.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: Cpu,
    highlights: ["Sentiment & Cohort Analysis", "MixDiff / Conjoint Validation", "Predictive Cluster Modeling"],
    ctaLabel: "View Stratum A.I.",
    ctaHref: "/portfolio#stratum-ai",
  },
  {
    number: "04",
    kicker: "COMMERCIAL INFRASTRUCTURE",
    title: "Services Beyond Market Insights",
    description:
      "At Stratum, we don't simply conduct market research. Through the Stratum Digital, we have created an online store for our clients, where they can sell their products to global consumers.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: Globe2,
    highlights: ["Stratum Digital Marketplace", "Global Consumer Access", "Cross-Border Commercial Trade"],
    ctaLabel: "Explore Stratum Digital",
    ctaHref: "/portfolio#stratum-digital",
  },
  {
    number: "05",
    kicker: "COMPETITIVE POSITIONING",
    title: "Stay at Least a Step Ahead of Your Competitors, by Understanding Their Strategies",
    description:
      "Through Conjoint and MixDiff methodology, we help our clients understand their competitors, to the last of their strategy, in a manner that keep them at least a step ahead.",
    bgClass: "bg-[#0A3D62] text-white",
    borderClass: "border-[#0E5284] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-100 border-white/20",
    icon: TrendingUp,
    highlights: ["Conjoint & MixDiff Scenarios", "Competitor Strategy Mapping", "Proactive Channel Advantage"],
    ctaLabel: "Request Competitor Audit",
    ctaHref: "/services#market-research",
  },
];

export default function WhyStratumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Page Hero Header: Minimal, Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
              <Globe2 className="size-3 text-primary shrink-0" />
              <span>THE STRATUM ADVANTAGE &bull; NAIROBI ADVISORY DESK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Why Choose Stratum Research Ltd?
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum combines deep primary fieldwork, advanced digital research infrastructure, applied AI predictive models, and active commercial intermediation to give clients a decisive edge in complex and emerging markets.
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
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>PORTFOLIO</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>OUR 6 SERVICES</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE STRATUM: 5 STRATEGIC PILLARS (Tall WordPress-Style Sharp-Edged Colored Cards) */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              FIVE STRATEGIC ADVANTAGES
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Why Choose Stratum?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Five clear operational pillars that distinguish our research, digital analytics, and commercial execution:
            </p>
          </div>

          {/* WordPress Grid: Tall Sharp Cards with Colored Backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {WHY_CHOOSE_STRATUM.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className={`${item.bgClass} border ${item.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[420px]`}
                >
                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Number + Icon Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <span className="font-mono text-xs font-bold tracking-wider opacity-90">
                        ADVANTAGE {item.number}
                      </span>
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Kicker + Title */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-wider opacity-75 uppercase block">
                        {item.kicker}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description Paragraph (Exact user-provided text) */}
                    <p className="text-xs sm:text-[13px] leading-relaxed text-white/90 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Section: Highlights + Action Button */}
                  <div className="space-y-4 pt-3 border-t border-white/15">
                    <div className="space-y-1.5">
                      {item.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-white/80 font-mono">
                          <span className="size-1 rounded-none bg-white/80 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={item.ctaHref}
                      className="inline-flex items-center justify-between w-full p-2.5 rounded-none bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all group/btn"
                    >
                      <span>{item.ctaLabel}</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Direct Engagement / Executive Summary Block */}
            <div className="bg-card border border-border/80 rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm min-h-[420px] hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <span className="font-mono text-xs font-bold tracking-wider text-primary">
                    SUMMARY MANDATE
                  </span>
                  <div className="size-9 rounded-none bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="size-4.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase block">
                    TAILORED ENGAGEMENTS
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
                    Ready to Partner with Stratum?
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-normal">
                  Whether you are entering a new African regional corridor, evaluating competitor strategies, or scaling through the Stratum Digital marketplace, our advisory desk is ready to support your commercial objectives.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-border/60">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                    <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Double-blind statistical fieldwork</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                    <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Conjoint &amp; MixDiff predictive analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono">
                    <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Cross-border commercial deal rooms</span>
                  </div>
                </div>

                <Link
                  href="/contact?cta=COMMISSION_RESEARCH"
                  className="inline-flex items-center justify-between w-full p-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs group/btn"
                >
                  <span>COMMISSION A STUDY</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. METHODOLOGY & ANALYTIC PRECISION (MixDiff, Conjoint, Field Telemetry) */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              ANALYTIC RIGOR
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Advanced Research Methodologies
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              How our data science models translate market complexity into predictive foresight:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="p-6 rounded-none border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="size-9 rounded-none bg-primary/10 flex items-center justify-center text-primary">
                <LineChart className="size-4.5" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                Conjoint &amp; MixDiff Modeling
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Deconstruct consumer trade-offs, price sensitivity elasticity, and feature valuation to decode competitor strategies to the last detail.
              </p>
            </div>

            <div className="p-6 rounded-none border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="size-9 rounded-none bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Cpu className="size-4.5" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                Sentiment &amp; Cluster Analysis
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Applied AI models segment subnational consumer cohorts and analyze organic sentiment across digital and traditional market channels.
              </p>
            </div>

            <div className="p-6 rounded-none border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="size-9 rounded-none bg-[#004B87]/10 flex items-center justify-center text-[#004B87] dark:text-sky-400">
                <ShieldCheck className="size-4.5" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                Field-Verified Ground Truth
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Empirical primary data collected directly from informal kiosks, wholesale open-air markets, and neighborhood retail distribution corridors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CORPORATE CTA BANNER: Sleek Midnight Navy (#002B49) */}
      <section className="py-14 sm:py-18 bg-[#002B49] text-white border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/10 border border-white/20 text-[10px] font-mono font-semibold text-emerald-300 uppercase tracking-wider">
              ENGAGE STRATUM RESEARCH LTD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Ready to Gather Ground Truth &amp; Execute Growth?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you need rapid opinion polling, distributor due diligence, retail outlet audits, or applied AI models, our Nairobi desk is ready to support your commercial mandate.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="tel:+254721154382"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <Phone className="size-3 text-emerald-400" />
                <span>CALL NAIROBI HQ</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
