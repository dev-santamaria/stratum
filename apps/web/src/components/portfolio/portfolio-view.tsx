"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Vote,
  TrendingUp,
  Globe2,
  Cpu,
  ArrowRight,
  Filter,
  RefreshCw,
} from "lucide-react";

export interface PillarData {
  id: string;
  name: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentColor: string;
  icon: React.ElementType;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export const PORTFOLIO_PILLARS: PillarData[] = [
  {
    id: "stratum-polls",
    name: "Stratum Polls",
    description:
      "Stratum collects first-hand consumer feedback and public opinion through both digital and field-based polling across nationwide target populations. Operating under double-blind statistical sampling, we track longitudinal brand sentiment, calibrate opinion indexes, and dispatch visual executive debrief memos directly to leadership teams, with all historical microdata archived for continuous tracking.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63]",
    accentColor: "text-sky-400",
    icon: Vote,
    primaryCta: {
      label: "Commission a Polling Study",
      href: "/contact?cta=COMMISSION_RESEARCH&service=STRATUM_POLLS",
    },
    secondaryCta: {
      label: "Explore Polling Reports",
      href: "/reports",
    },
  },
  {
    id: "stratum-consulting",
    name: "Stratum Consulting",
    description:
      "Stratum Consulting provides C-suite advisory on route-to-market optimization, competitive positioning, and sustainable B2B intermediation. We design tailored commercial strategies across traditional and modern retail channels, vet regional distributor networks, conduct cross-border due diligence, and structure institutional deal rooms to accelerate expansion.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447]",
    accentColor: "text-emerald-300",
    icon: TrendingUp,
    primaryCta: {
      label: "Request Strategic Consultation",
      href: "/contact?cta=STRATEGIC_PARTNER&service=STRATUM_CONSULTING",
    },
    secondaryCta: {
      label: "Learn About B2B Intermediation",
      href: "/services#intermediation",
    },
  },
  {
    id: "stratum-digital",
    name: "Stratum Digital",
    description:
      "Stratum Digital operates a specialized commercial marketplace and digital trade gateway where regional brands, verified suppliers, and institutional investors showcase and auction products and services to global buyers. With structured bilateral counterparty verification and cross-border settlement escrow, the platform bridges intelligence with commercial trade execution.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD]",
    accentColor: "text-cyan-300",
    icon: Globe2,
    primaryCta: {
      label: "Inquire on Marketplace Platform",
      href: "/contact?cta=REQUEST_INTELLIGENCE&service=STRATUM_DIGITAL",
    },
    secondaryCta: {
      label: "Digital Marketplace Brief",
      href: "/services#digital-market",
    },
  },
  {
    id: "stratum-ai",
    name: "Stratum A.I.",
    description:
      "Stratum A.I. deploys applied machine learning and econometric models to refine, triangulate, and model raw field datasets into high-conviction predictive intelligence. We execute anomaly detection, consumer cohort clustering, and commodity price elasticity forecasting, while providing corporate workplace AI productivity training to help client teams leverage contemporary digital infrastructure.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155]",
    accentColor: "text-indigo-300",
    icon: Cpu,
    primaryCta: {
      label: "Request A.I. Consultation & Training",
      href: "/contact?cta=COMMISSION_RESEARCH&service=STRATUM_AI",
    },
    secondaryCta: {
      label: "Explore Applied Insights",
      href: "/insights",
    },
  },
];

export function PortfolioView() {
  const [activePillar, setActivePillar] = useState<string>("all");

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === "undefined") return;
      const rawHash = window.location.hash.replace("#", "").trim().toLowerCase();
      const valid = PORTFOLIO_PILLARS.some((p) => p.id === rawHash);
      if (valid) {
        setActivePillar(rawHash);
      } else if (rawHash === "all" || !rawHash) {
        setActivePillar("all");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const selectTab = (id: string) => {
    setActivePillar(id);
    if (typeof window !== "undefined") {
      if (id === "all") {
        window.history.pushState(null, "", window.location.pathname);
      } else {
        window.location.hash = id;
      }
    }
  };

  // Find the single active pillar if filtered
  const singlePillar = PORTFOLIO_PILLARS.find((p) => p.id === activePillar);
  const isFiltered = activePillar !== "all" && singlePillar !== undefined;

  return (
    <section className="py-12 sm:py-16 bg-background border-b border-border/80">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/80 pb-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Strategic Portfolio Practices
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
              Select an offering below to explore dedicated methodologies, operational deliverables, and direct commercial execution:
            </p>
          </div>
        </div>

        {/* 1. FILTER TABS (All / Stratum Polls / Stratum Consulting / Stratum Digital / Stratum A.I.) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-4">
          <button
            type="button"
            onClick={() => selectTab("all")}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-none transition-all cursor-pointer ${
              activePillar === "all"
                ? "bg-primary text-primary-foreground shadow-xs font-bold"
                : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/80"
            }`}
          >
            All Offerings (4)
          </button>

          {PORTFOLIO_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => selectTab(pillar.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-none transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs font-bold"
                    : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/80"
                }`}
              >
                <Icon className="size-3.5" />
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* 2. FILTERED VIEW: Show ONLY the targeted pillar when active */}
        {isFiltered && singlePillar && (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            {/* Filtered Notification with Show All Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-none border border-border/80 bg-muted/40">
              <div className="flex items-center gap-2 text-xs text-foreground font-medium">
                <Filter className="size-3.5 text-primary shrink-0" />
                <span>
                  Currently viewing: <strong className="text-primary uppercase tracking-wide">{singlePillar.name}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={() => selectTab("all")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer self-start sm:self-auto"
              >
                <RefreshCw className="size-3" />
                <span>Show All 4 Offerings</span>
              </button>
            </div>

            {/* Dedicated Card for the Single Pillar */}
            <div
              id={singlePillar.id}
              className={`${singlePillar.bgClass} border ${singlePillar.borderClass} rounded-none p-6 sm:p-8 lg:p-10 shadow-md space-y-8`}
            >
              {/* Header: Icon & Name */}
              <div className="flex items-start gap-4 border-b border-white/15 pb-6">
                <div className="size-12 rounded-none bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0">
                  <singlePillar.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    {singlePillar.name}
                  </h3>
                </div>
              </div>

              {/* Exact Mandate & Scope Informational Description */}
              <div className="max-w-4xl">
                <p className="text-sm sm:text-base leading-relaxed text-white/95 font-normal">
                  {singlePillar.description}
                </p>
              </div>

              {/* Direct Actions */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-3">
                <Link
                  href={singlePillar.primaryCta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-md cursor-pointer"
                >
                  <span>{singlePillar.primaryCta.label}</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                {singlePillar.secondaryCta && (
                  <Link
                    href={singlePillar.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>{singlePillar.secondaryCta.label}</span>
                    <ArrowRight className="size-3.5 -rotate-45" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 3. ALL PILLARS VIEW: Grid of all 4 pillars when no single pillar is filtered */}
        {!isFiltered && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={pillar.id}
                  className={`${pillar.bgClass} border ${pillar.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all group min-h-[300px]`}
                >
                  <div className="space-y-4">
                    {/* Header Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                      <button
                        type="button"
                        onClick={() => selectTab(pillar.id)}
                        className="text-[11px] font-mono font-semibold text-white/80 hover:text-white underline cursor-pointer"
                      >
                        Focus View &rarr;
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
                      {pillar.name}
                    </h3>

                    {/* Informational Paragraph */}
                    <p className="text-xs sm:text-[13px] leading-relaxed text-white/90 font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/15 flex items-center justify-end">
                    <Link
                      href={pillar.primaryCta.href}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none bg-white/15 hover:bg-white/25 border border-white/25 text-xs font-semibold text-white transition-all"
                    >
                      <span>Engage Desk</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
