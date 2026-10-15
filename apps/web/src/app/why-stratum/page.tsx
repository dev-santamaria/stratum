import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  Cpu,
  Database,
  Globe2,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Stratum — Market Intelligence & Strategic Advantage",
  description:
    "Discover why leading businesses, investors, and brands choose Stratum Research Ltd: client-centered approach, cutting-edge digital infrastructure, strategic AI models, and services beyond insights.",
};

interface WhyChooseItem {
  kicker: string;
  title: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  ctaLabel: string;
  ctaHref: string;
}

const WHY_CHOOSE_STRATUM: WhyChooseItem[] = [
  {
    kicker: "CLIENT-FIRST PHILOSOPHY",
    title: "Client Centered Approach",
    description:
      "Every research engagement is built around our clients' values, vision, and strategic priorities. We tailor scoping mandates to specific commercial objectives, ensuring close executive collaboration, transparent milestones, and direct senior partner accountability from scoping through final delivery.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Users2,
    ctaLabel: "Discuss an Engagement",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
  },
  {
    kicker: "MODERN RESEARCH TECHNOLOGY",
    title: "Cutting-Edge Digital Infrastructure for Research and Analysis",
    description:
      "Stratum deploys advanced digital infrastructure and automated data pipelines to collect, wrangle, clean, and validate field telemetry across diverse markets. We transform raw empirical data into live interactive dashboards and high-clarity visual reports that provide immediate, decision-ready clarity.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: Database,
    ctaLabel: "Explore Digital Analytics",
    ctaHref: "/services#business-intelligence",
  },
  {
    kicker: "APPLIED ARTIFICIAL INTELLIGENCE",
    title: "Strategic Implementation of A.I. Models",
    description:
      "We leverage applied Artificial Intelligence and machine learning to elevate analytical depth and forecast accuracy. By integrating natural language sentiment analysis, subnational consumer cohort clustering, and predictive econometric modeling, we validate complex market dynamics and deliver actionable foresight.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: Cpu,
    ctaLabel: "View Stratum A.I.",
    ctaHref: "/portfolio#stratum-ai",
  },
  {
    kicker: "COMMERCIAL INFRASTRUCTURE",
    title: "Services Beyond Market Insights",
    description:
      "Beyond diagnostic research, Stratum bridges intelligence with active commercial enablement. Through Stratum Digital, we operate dedicated digital commerce infrastructure and storefronts that allow clients to reach global consumer bases, facilitate transactions, and expand cross-border commercial reach.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: Globe2,
    ctaLabel: "Explore Stratum Digital",
    ctaHref: "/portfolio#stratum-digital",
  },
  {
    kicker: "COMPETITIVE POSITIONING",
    title: "Stay Ahead of Competitors by Understanding Their Strategies",
    description:
      "Through rigorous Conjoint and MixDiff econometric modeling, we deconstruct competitor market positioning, pricing elasticity, and distribution channels down to the granular detail. This equips clients with empirical trade-off intelligence and proactive tactical scenarios to consistently stay ahead.",
    bgClass: "bg-[#0A3D62] text-white",
    borderClass: "border-[#0E5284] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-100 border-white/20",
    icon: TrendingUp,
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

      {/* 3. WHY CHOOSE STRATUM: 5 STRATEGIC PILLARS */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="max-w-3xl space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Why Choose Stratum?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Five clear operational pillars that distinguish our research, digital analytics, and commercial execution:
            </p>
          </div>

          {/* WordPress Grid: Sharp-Edged Colored Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {WHY_CHOOSE_STRATUM.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`${item.bgClass} border ${item.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[340px]`}
                >
                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Icon Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Kicker + Title */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono tracking-wider opacity-75 uppercase block">
                        {item.kicker}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Enhanced Description Paragraph */}
                    <p className="text-xs sm:text-[13px] leading-relaxed text-white/90 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Section: Action Button */}
                  <div className="pt-4 border-t border-white/15">
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
            <div className="bg-card border border-border/80 rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm min-h-[340px] hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="size-9 rounded-none bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="size-4.5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase block">
                    EXECUTIVE MANDATE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
                    Ready to Partner with Stratum?
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-normal">
                  Whether entering an emerging regional corridor, stress-testing competitor moves, or scaling through digital trade channels, our advisory desk provides double-blind statistical rigor, predictive modeling, and direct executive guidance tailored to your commercial objectives.
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <span>CONTACT ADVISORY DESK</span>
              </Link>
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
