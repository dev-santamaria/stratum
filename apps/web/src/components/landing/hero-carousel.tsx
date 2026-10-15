"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

interface HeroSlide {
  id: string;
  badge: string;
  kicker: string;
  title: string;
  tagline: string;
  subtitle: string;
  image: string;
  alt: string;
  captionTitle: string;
  captionDetail: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    badge: "PAN-AFRICAN INTELLIGENCE & ADVISORY",
    kicker: "NAIROBI HQ • EAST AFRICA CORRIDOR",
    title: "Bridging Investment Gaps Through Intelligence, Insight & Intermediation",
    tagline: "Intelligence That Moves Business Forward",
    subtitle:
      "Stratum is a market intelligence and business intermediation firm helping businesses, investors, brands, and entrepreneurs make informed commercial decisions in complex and emerging markets.",
    image: "/images/landing-nairobi-skyline.jpg",
    alt: "Stratum corporate headquarters in Nairobi Upper Hill overlooking East African financial hub",
    captionTitle: "STRATUM NAIROBI HEADQUARTERS",
    captionDetail: "Regional advisory desk coordinating subnational fieldwork and market intelligence.",
    primaryCta: {
      label: "PORTFOLIO",
      href: "/portfolio",
    },
    secondaryCta: {
      label: "COMMISSION A STUDY",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
  },
  {
    id: "slide-2",
    badge: "PRIMARY GROUND TRUTH & INFORMAL TRADE",
    kicker: "CONSUMER FIELD RESEARCH",
    title: "See the Opportunity. Understand the Market. Make the Connection.",
    tagline: "Empirical Ground Truth Where Real Commerce Transacts",
    subtitle:
      "Capturing authentic consumer demand where over 80% of retail transactions occur—in informal kiosks, wholesale open-air markets, and neighborhood distribution nodes.",
    image: "/images/landing-market-produce.jpg",
    alt: "Field research and commodity price audits in open-air retail trade hubs",
    captionTitle: "PRIMARY COMMODITY TELEMETRY",
    captionDetail: "GPS-tagged field audits, daily price elasticity, and informal distributor networks.",
    primaryCta: {
      label: "COMMISSION A STUDY",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
    secondaryCta: {
      label: "METHODOLOGY",
      href: "/how-we-work",
    },
  },
  {
    id: "slide-3",
    badge: "CROSS-BORDER COMMERCIAL EXPANSION",
    kicker: "GROWTH HUBS & URBAN CENTERS",
    title: "Connecting Businesses to High-Growth Emerging Markets",
    tagline: "Actionable Intelligence for Scalable Capital Deployment",
    subtitle:
      "We provide multi-market feasibility analysis, partner due diligence, and regulatory intelligence across fast-growing African commercial capitals.",
    image: "/images/landing-skyline.jpg",
    alt: "Modern African metropolitan business towers and cross-border commercial skyline",
    captionTitle: "METROPOLITAN TRADE GATEWAYS",
    captionDetail: "Cross-border sector mapping, market sizing, and commercial due diligence.",
    primaryCta: {
      label: "PORTFOLIO",
      href: "/portfolio",
    },
    secondaryCta: {
      label: "CONTACT STRATUM",
      href: "/contact",
    },
  },
  {
    id: "slide-4",
    badge: "STRATEGIC FORESIGHT & SATELLITE PERSPECTIVE",
    kicker: "PAN-AFRICAN VANTAGE",
    title: "Clear Foresight Across Dynamic Frontier Economies",
    tagline: "A Broader Vantage Point for Confident Strategic Moves",
    subtitle:
      "Elevate above fragmented market noise with comprehensive industry benchmarks, predictive consumer trajectories, and bilateral deal screening.",
    image: "/images/landing-savannah-aerial.jpg",
    alt: "Aerial landscape view symbolizing broad market foresight and perspective",
    captionTitle: "MACRO MARKET HORIZONS",
    captionDetail: "Strategic forecasting, supply chain mapping, and whitespace identification.",
    primaryCta: {
      label: "PORTFOLIO",
      href: "/portfolio",
    },
    secondaryCta: {
      label: "RESEARCH BRIEFS",
      href: "/research-briefs",
    },
  },
  {
    id: "slide-5",
    badge: "LOGISTICS & MARITIME TRADE CORRIDORS",
    kicker: "TRADE FLOWS & SUPPLY CHAINS",
    title: "Navigating Supply Chains & Strategic Trade Corridors",
    tagline: "Empirical Insights into Tariffs, Ports & Distribution Networks",
    subtitle:
      "Evaluate cross-border freight corridors, port turnaround velocities, and regional wholesale networks to establish resilient supply chains.",
    image: "/images/landing-port.jpg",
    alt: "Maritime shipping port and logistics corridor infrastructure",
    captionTitle: "CORRIDOR LOGISTICS",
    captionDetail: "Port clearance telemetry, cross-border road transit, and wholesale margin audits.",
    primaryCta: {
      label: "COMMISSION A STUDY",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
    secondaryCta: {
      label: "INDUSTRY PRACTICES",
      href: "/industries",
    },
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center border-b border-border/80 bg-slate-950 overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Stratum Featured Intelligence Slider"
    >
      {/* 1. FULL-BLEED BACKGROUND PHOTOGRAPHIC SLIDES */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === idx ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            priority={idx === 0}
            className="object-cover transition-transform duration-1000 scale-[1.02]"
            sizes="100vw"
          />
        </div>
      ))}

      {/* 2. ASYMMETRIC GRADIENT OVERLAY (Deep on left for text legibility, 100% transparent on right so photography is vivid and visible) */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.92)_60%,rgba(2,6,23,0.65)_100%)] sm:bg-[linear-gradient(90deg,#020617_0%,#020617_38%,rgba(2,6,23,0.75)_54%,rgba(2,6,23,0.18)_70%,transparent_85%)] z-10 pointer-events-none" />

      {/* 3. FOREGROUND EDITORIAL CONTENT (Thin Inter Typography, Minimal, Mobile-First) */}
      <div className="relative z-20 mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16 lg:py-20 flex flex-col justify-between min-h-[540px] sm:min-h-[600px] lg:min-h-[640px]">
        
        {/* Main Content Area (Positioned Left, allowing right side of photo to shine) */}
        <div className="max-w-2xl space-y-4 sm:space-y-5 my-auto">
          
          {/* Refined Headline — Scaled to Thin, Elegant Inter Proportion (Non-Bulky) */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-normal sm:font-medium text-white tracking-tight leading-snug max-w-xl transition-all duration-300">
            {slide.title}
          </h1>

          {/* Tagline / Sub-heading */}
          <div className="text-xs sm:text-[13px] font-medium text-emerald-400 tracking-normal border-l-2 border-emerald-400 pl-3 py-0.5">
            {slide.tagline}
          </div>

          {/* Description Paragraph: Brief, Clean */}
          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal max-w-xl transition-opacity duration-300">
            {slide.subtitle}
          </p>

          {/* Action Buttons in CAPS */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href={slide.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <Link
              href={slide.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all backdrop-blur-md cursor-pointer"
            >
              <span>{slide.secondaryCta.label}</span>
              <ArrowRight className="size-3.5 -rotate-45 text-emerald-400" />
            </Link>
          </div>

        </div>

        {/* Bottom Floating Bar: Minimalist Slide Counter & Prev/Next Controls (Pure Controls, No Location/Caption Clutter) */}
        <div className="pt-6 flex items-center justify-between border-t border-white/15 text-white/80">
          {/* Simple Tab Indicator */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
            <span className="size-2 rounded-none bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white/90 uppercase tracking-wider">STRATUM PAN-AFRICAN INTELLIGENCE</span>
          </div>

          {/* Minimal Controls & Slide Counter */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-white tracking-widest">
              0{currentSlide + 1} <span className="text-white/40">/</span> 0{HERO_SLIDES.length}
            </span>

            <div className="flex items-center gap-1 bg-black/40 border border-white/20 p-0.5 rounded-none">
              <button
                type="button"
                onClick={prevSlide}
                className="size-7 rounded-none flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="size-7 rounded-none flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label={isPlaying ? "Pause auto-advance" : "Resume auto-advance"}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="size-3" /> : <Play className="size-3" />}
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="size-7 rounded-none flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
