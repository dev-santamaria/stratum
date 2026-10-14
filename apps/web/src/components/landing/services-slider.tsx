"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  BarChart3,
  TrendingUp,
  Handshake,
  Globe2,
  Cpu,
} from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  href: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Market Research & Field Studies",
    subtitle: "PRIMARY QUANTITATIVE & QUALITATIVE FIELDWORK",
    description:
      "Primary data collection across urban hubs and informal retail channels. Double-blind sampling, retail censuses, and consumer intercepts where real economic decisions occur.",
    icon: Compass,
    deliverables: ["Retail Outlet Censuses", "Consumer Intercepts & IDIs", "Clean Microdata (CSV/SPSS)"],
    href: "/services#market-research",
  },
  {
    number: "02",
    title: "Business Intelligence & Tracking",
    subtitle: "MONITORING COMPETITION, PRICING & CHANNELS",
    description:
      "Continuous tracking of competitor market movements, price changes, regulatory developments, and distribution channel performance across emerging trade corridors.",
    icon: BarChart3,
    deliverables: ["Competitor Margin Audits", "Subnational Price Tracking", "Quarterly Sector Memos"],
    href: "/services#business-intelligence",
  },
  {
    number: "03",
    title: "Opportunity & Feasibility Studies",
    subtitle: "VALIDATING DEMAND & COMMERCIAL VIABILITY",
    description:
      "Validating commercial potential, sizing addressable market demand, evaluating willingness-to-pay, and identifying regulatory barriers prior to capital commitment.",
    icon: TrendingUp,
    deliverables: ["TAM/SAM/SOM Sizing", "Unit Economics Assessment", "Risk & Barrier Analysis"],
    href: "/services#opportunity-assessment",
  },
  {
    number: "04",
    title: "Business Intermediation & Partnerships",
    subtitle: "VETTED DISTRIBUTORS & STRATEGIC CONNECTIONS",
    description:
      "Connecting international and local enterprises with screened distributors, trusted suppliers, strategic investors, and joint-venture partners through structured introductions.",
    icon: Handshake,
    deliverables: ["Distributor Due Diligence", "Facility & Warehouse Audits", "Bilateral Deal Facilitation"],
    href: "/services#intermediation",
  },
  {
    number: "05",
    title: "Market Access & Expansion Strategy",
    subtitle: "ROUTE-TO-MARKET ROADMAPS ACROSS CORRIDORS",
    description:
      "Actionable entry roadmaps for geographic expansion. Analyzing trade tariffs, distribution networks, compliance mandates, and operational route-to-market models.",
    icon: Globe2,
    deliverables: ["Tariff & Trade Barrier Map", "Distributor Territory Design", "Phased Launch Roadmap"],
    href: "/services#market-access",
  },
  {
    number: "06",
    title: "Digital Market Intelligence",
    subtitle: "E-COMMERCE & DIGITAL CONSUMER BEHAVIOR",
    description:
      "Tracking online retail pricing, mobile money transaction trends, and digital consumer journeys across Africa's rapidly evolving connected commercial ecosystem.",
    icon: Cpu,
    deliverables: ["E-Commerce Price Scrapes", "Digital Shopper Journeys", "Mobile Commerce Telemetry"],
    href: "/services#digital-market",
  },
];

export function ServicesSlider() {
  const [startIndex, setStartIndex] = useState(0);

  // We show 3 cards on desktop, 2 on tablet, 1 on mobile
  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? SERVICES_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  // Compute the visible 3 cards cyclically
  const visibleCards = [
    SERVICES_DATA[startIndex],
    SERVICES_DATA[(startIndex + 1) % SERVICES_DATA.length],
    SERVICES_DATA[(startIndex + 2) % SERVICES_DATA.length],
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#167D3C] text-white relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">
        
        {/* Header Strip with Integrated Controls & Purposeful Button Placement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/20 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/15 border border-white/25 text-xs font-mono font-semibold text-white tracking-wider">
              <span>OUR CORE CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
              Six Integrated Service Lines
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              From grassroots field surveys to cross-border deal intermediation, navigate through our core advisory practices:
            </p>
          </div>

          {/* Right Action: Clean Navigation & Explore Services Link */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#167D3C] font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="size-3.5" />
            </Link>

            {/* Thin Elegant Slider Navigation Arrows */}
            <div className="flex items-center gap-2 bg-black/15 border border-white/25 rounded-lg p-1">
              <button
                type="button"
                onClick={prevSlide}
                className="size-9 rounded-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                aria-label="Previous capability"
                title="Previous service line"
              >
                <ChevronLeft className="size-5 stroke-[1.5]" />
              </button>

              <span className="font-mono text-xs font-bold text-white px-2 select-none">
                {SERVICES_DATA[startIndex].number} / 0{SERVICES_DATA.length}
              </span>

              <button
                type="button"
                onClick={nextSlide}
                className="size-9 rounded-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
                aria-label="Next capability"
                title="Next service line"
              >
                <ChevronRight className="size-5 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic 3-Card Carousel Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {visibleCards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="p-7 rounded-2xl bg-[#0F5A2A] border border-white/20 hover:border-white/40 hover:bg-[#0D5226] transition-all space-y-6 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded border bg-white/15 border-white/30 text-white">
                      LINE {service.number}
                    </span>
                    <div className="size-10 rounded-xl bg-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="size-5 text-emerald-100" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-emerald-200/80 uppercase block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-100 transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-white/15">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/85">
                        <span className="size-1 rounded-full bg-emerald-200" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-emerald-100 pt-4 border-t border-white/15 group-hover:translate-x-1 transition-all"
                >
                  <span>Methodology &amp; Deliverables</span>
                  <ArrowRight className="size-3.5 text-white" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Slider Indicator Dots Strip */}
        <div className="flex items-center justify-center gap-2 pt-4">
          {SERVICES_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setStartIndex(idx)}
              className={`h-1.5 transition-all rounded-full cursor-pointer ${
                startIndex === idx ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Jump to service ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
