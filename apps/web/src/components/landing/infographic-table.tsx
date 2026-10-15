"use client";

import React from "react";
import Link from "next/link";
import {
  Vote,
  TrendingUp,
  Globe2,
  Cpu,
  ArrowRight,
  BarChart3,
  Handshake,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

interface PillarItem {
  id: string;
  number: string;
  title: string;
  kicker: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "stratum-polls",
    number: "01",
    title: "Stratum Polls",
    kicker: "OPINION POLLING & CONSUMER FEEDBACK",
    description:
      "Stratum collects first-hand consumer feedback through both digital and field-based opinion polling. The outcomes of such exercises are analysed, visualised and published, and a report is dispatched to our clients, with copies archived for future reference and brand tracking.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Vote,
    highlights: ["Digital & Field-Based Polling", "Visualised Client Reports", "Long-Term Brand Tracking"],
    ctaLabel: "View In Portfolio",
    ctaHref: "/portfolio#stratum-polls",
  },
  {
    id: "stratum-consulting",
    number: "02",
    title: "Stratum Consulting",
    kicker: "STRATEGY & B2B INTERMEDIATION",
    description:
      "With Stratum consulting, our clients gain insights on brand growth strategies and sustainable B2B intermediation.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: TrendingUp,
    highlights: ["Brand Growth Strategies", "Sustainable B2B Connections", "Distributor Deal Rooms"],
    ctaLabel: "View In Portfolio",
    ctaHref: "/portfolio#stratum-consulting",
  },
  {
    id: "stratum-digital",
    number: "03",
    title: "Stratum Digital",
    kicker: "GLOBAL ONLINE COMMERCIAL MARKETPLACE",
    description:
      "Stratum Digital is an online market place, where investors from diverse industries can auction their products and services to consumers from all over the world.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: Globe2,
    highlights: ["Multi-Industry Marketplace", "Global Product Auctions", "Cross-Border Commerce"],
    ctaLabel: "View In Portfolio",
    ctaHref: "/portfolio#stratum-digital",
  },
  {
    id: "stratum-ai",
    number: "04",
    title: "Stratum A.I.",
    kicker: "INTELLIGENCE MODELS & PRODUCTIVITY TRAINING",
    description:
      "Stratum A.I. uses artificial intelligence models to refine, analyse, compare and contrast raw data and translate it to actionable insights to our clients through visualised reports. We also train employees from different companies to adapt to contemporary digital infrastructure and how to constructively use A.I. to improve workplace productivity.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: Cpu,
    highlights: ["Raw Data Refinement & AI Models", "Actionable Visualised Reports", "Workplace AI Enablement"],
    ctaLabel: "View In Portfolio",
    ctaHref: "/portfolio#stratum-ai",
  },
];

export function InfographicTable() {
  return (
    <section id="portfolio-infographic" className="py-14 sm:py-20 bg-background border-b border-border/80 scroll-mt-20">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-10">
        
        {/* Header Block: Clean, Authoritative WordPress Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/80 pb-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-muted/50 text-[11px] font-mono font-semibold text-primary">
              <span className="size-1.5 rounded-none bg-primary" />
              <span>CORE PORTFOLIO INFOGRAPHIC</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Four Core Strategic Offerings
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              From grassroots public polling to cross-border digital auctioning and enterprise artificial intelligence:
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shrink-0 shadow-xs"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* 4-Pillar Infographic Table: Sharp Edges, Tall Cards, Coloured Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`${pillar.bgClass} border ${pillar.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[440px]`}
              >
                {/* Top Section */}
                <div className="space-y-4">
                  {/* Number & Icon Strip */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="font-mono text-sm font-bold tracking-wider opacity-90">
                      {pillar.number}
                    </span>
                    <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="size-4.5" />
                    </div>
                  </div>

                  {/* Kicker & Title */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider opacity-75 uppercase block">
                      {pillar.kicker}
                    </span>
                    <Link href={pillar.ctaHref} className="hover:underline inline-block">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                        {pillar.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Paragraph (Exact user text) */}
                  <p className="text-xs sm:text-[13px] leading-relaxed text-white/90 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Section: Highlights & CTA */}
                <div className="space-y-4 pt-3 border-t border-white/15">
                  <div className="space-y-1.5">
                    {pillar.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-white/80 font-mono">
                        <span className="size-1 rounded-none bg-white/80 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={pillar.ctaHref}
                    className="inline-flex items-center justify-between w-full p-2.5 rounded-none bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all group/btn"
                  >
                    <span>{pillar.ctaLabel}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
