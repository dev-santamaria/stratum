"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Pause,
  Play,
} from "lucide-react";

interface HeroSlide {
  id: string;
  badge: string;
  kicker: string;
  navTitle: string;
  navSub: string;
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
    badge: "GLOBAL INTELLIGENCE & INTERMEDIATION",
    kicker: "STRATUM RESEARCH LTD",
    navTitle: "Trade Corridors",
    navSub: "Cross-border trade & maritime logistics",
    title: "Bridging Investment Gaps Through Intelligence, Insight & Intermediation",
    tagline: "Intelligence That Moves Business Forward",
    subtitle:
      "Stratum is a global market intelligence and business intermediation firm helping businesses, investors, brands, and entrepreneurs make informed decisions in complex and emerging markets.",
    image: "/images/landing-port.jpg",
    alt: "Stratum strategic trade and investment corridor research across emerging markets",
    captionTitle: "CROSS-BORDER TRADE CORRIDORS",
    captionDetail: "Connecting supply chains, maritime logistics, and AfCFTA investment gateways.",
    primaryCta: {
      label: "Explore Our Services",
      href: "/services",
    },
    secondaryCta: {
      label: "Talk to Stratum",
      href: "/contact",
    },
  },
  {
    id: "slide-2",
    badge: "PRIMARY GROUND TRUTH & INFORMAL TRADE",
    kicker: "CONSUMER RESEARCH PRACTICE",
    navTitle: "Informal Retail",
    navSub: "Grassroots kiosk audits & pricing",
    title: "See the Opportunity. Understand the Market. Make the Connection.",
    tagline: "Empirical Fieldwork Where Trade Truly Happens",
    subtitle:
      "Capturing both what consumers say and what drives the decisions they make—uncovering ground truth in the informal kiosks and open-air markets where over 80% of retail transactions occur.",
    image: "/images/landing-kiosk.jpg",
    alt: "Stratum primary fieldwork in traditional trade and informal kiosk commerce",
    captionTitle: "PRIMARY FIELD TELEMETRY",
    captionDetail: "GPS-audited kiosk censuses, inventory velocities, and subnational pricing data.",
    primaryCta: {
      label: "Commission a Study",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
    secondaryCta: {
      label: "Sample Briefs",
      href: "/research-briefs",
    },
  },
  {
    id: "slide-3",
    badge: "BUSINESS-TO-BUSINESS INTERMEDIATION",
    kicker: "STRATEGIC ADVISORY DESK",
    navTitle: "B2B Deals",
    navSub: "Vetted distributors & deal rooms",
    title: "Connecting Businesses to the Right Opportunities",
    tagline: "From Market Intelligence to Executed Commercial Partnerships",
    subtitle:
      "We connect businesses, investors, entrepreneurs, and strategic partners with relevant commercial opportunities, vetted suppliers, Tier-1 distributors, and institutional co-investors.",
    image: "/images/landing-executive.jpg",
    alt: "Executive consultation and bilateral trade deal room at Stratum",
    captionTitle: "B2B STRATEGIC INTERMEDIATION",
    captionDetail: "Verified distributor matching, direct factory audits, and bilateral deal rooms.",
    primaryCta: {
      label: "Discuss Market Entry",
      href: "/contact?cta=DISCUSS_MARKET_ENTRY",
    },
    secondaryCta: {
      label: "Strategic Partnerships",
      href: "/contact?cta=STRATEGIC_PARTNER",
    },
  },
  {
    id: "slide-4",
    badge: "PRODUCT TESTING & SENSORY EVALUATION",
    kicker: "CONCEPT VALIDATION LABS",
    navTitle: "Product Testing",
    navSub: "Sensory trials & pack validation",
    title: "Understanding How Consumers Respond Before Major Decisions",
    tagline: "Test Concepts, Formulations & Packaging with Real Buyers",
    subtitle:
      "We help businesses explore new products and concepts by testing consumer reception, identifying opportunities for improvement, and measuring purchase intent prior to capital deployment.",
    image: "/images/landing-reaction.jpg",
    alt: "Stratum consumer sensory testing and authentic product reaction research",
    captionTitle: "PRODUCT & SENSORY TESTING",
    captionDetail: "Testing formulations, packaging appeal, and coin-point price sensitivity.",
    primaryCta: {
      label: "Explore Solutions",
      href: "/solutions",
    },
    secondaryCta: {
      label: "Start a Product Study",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
  },
  {
    id: "slide-5",
    badge: "QUALITATIVE RESEARCH & ETHNOGRAPHY",
    kicker: "BEHAVIOURAL INTELLIGENCE",
    navTitle: "Consumer Insights",
    navSub: "Vernacular IDIs & ethnography",
    title: "Understanding the Why Behind Consumer Behaviour",
    tagline: "Deep Cultural Nuance in Native Dialects",
    subtitle:
      "We uncover the motivations, attitudes, experiences, and perceptions that shape consumer decisions across diverse demographic and socioeconomic strata through native-moderated IDIs.",
    image: "/images/landing-consumer.jpg",
    alt: "Stratum in-depth qualitative consumer research in local community setting",
    captionTitle: "QUALITATIVE CONSUMER PANELS",
    captionDetail: "In-depth interviews (IDIs), focus groups, and household basket allocation pacing.",
    primaryCta: {
      label: "Request Intelligence",
      href: "/contact?cta=REQUEST_INTELLIGENCE",
    },
    secondaryCta: {
      label: "How We Work",
      href: "/how-we-work",
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
      className="relative border-b border-border/80 bg-background overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Stratum Featured Intelligence Carousel"
    >
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 pt-6 pb-8 sm:pt-8 sm:pb-10">
        
        {/* Main Grid: Content (7 cols) + Photography (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN (7 COLS): EDITORIAL HEADLINE & CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            
            {/* Top Identity Badge */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/90 bg-muted/50 text-[11px] font-mono font-semibold text-muted-foreground shadow-2xs">
                <Globe2 className="size-3.5 text-primary shrink-0" />
                <span className="text-foreground font-bold tracking-wide">{slide.kicker}</span>
                <span className="text-border">•</span>
                <span className="text-primary font-bold hidden sm:inline">{slide.badge}</span>
              </div>

              {/* Refined Headline — Scaled down as requested for elegant proportion */}
              <h1 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight leading-snug max-w-2xl min-h-[56px] sm:min-h-[64px] transition-all duration-300">
                {slide.title}
              </h1>

              {/* Tagline / Sub-heading */}
              <div className="text-xs sm:text-sm font-semibold text-primary tracking-normal border-l-2 border-primary pl-3 py-0.5">
                {slide.tagline}
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal max-w-xl min-h-[50px] transition-opacity duration-300">
              {slide.subtitle}
            </p>

            {/* Corporate Dual Action Buttons & Micro Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <span>{slide.primaryCta.label}</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border/90 bg-card hover:bg-muted/80 text-foreground font-semibold text-xs transition-all shadow-2xs group cursor-pointer"
                >
                  <span>{slide.secondaryCta.label}</span>
                  <ArrowRight className="size-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
                </Link>
              </div>

              {/* Prev / Next & Pause Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="size-7 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-7 rounded-lg border border-border/80 bg-card hover:bg-muted text-muted-foreground flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                  aria-label={isPlaying ? "Pause auto-advance" : "Resume auto-advance"}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="size-3" /> : <Play className="size-3" />}
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="size-7 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (5 COLS): HIGH-RESOLUTION AUTHENTIC FIELD PHOTOGRAPHY */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-border/90 shadow-md bg-card aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[360px] group">
              {HERO_SLIDES.map((s, idx) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-1000 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                </div>
              ))}

              {/* Dynamic Fieldwork Caption Overlay */}
              <div className="absolute bottom-3 inset-x-3 z-20 p-3.5 rounded-xl bg-background/95 dark:bg-background/90 backdrop-blur-md border border-border/90 shadow-md text-foreground space-y-1 transition-all">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-primary font-bold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {slide.captionTitle}
                  </span>
                  <span className="text-muted-foreground text-[10px]">Verified Fieldwork</span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug font-normal line-clamp-1">
                  {slide.captionDetail}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ENHANCED CAROUSEL CARD STRIP: Cards without gap separations, just clean divider line with subtle BG */}
        <div className="pt-6 sm:pt-8">
          <div className="w-full rounded-2xl border border-border/80 bg-muted/30 dark:bg-muted/15 backdrop-blur-md overflow-hidden grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border/70 shadow-2xs">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`p-3.5 sm:p-4 text-left transition-all relative flex flex-col justify-between gap-1.5 cursor-pointer group ${
                    isActive
                      ? "bg-card text-foreground shadow-xs"
                      : "hover:bg-muted/60 text-muted-foreground"
                  }`}
                >
                  {/* Active Top Accent Line */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
                  )}

                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-[10px] font-bold transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`size-1.5 rounded-full transition-all ${
                        isActive ? "bg-primary scale-125" : "bg-border group-hover:bg-muted-foreground"
                      }`}
                    />
                  </div>

                  <div className="space-y-0.5">
                    <h4
                      className={`text-xs font-bold leading-tight transition-colors line-clamp-1 ${
                        isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {s.navTitle}
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-snug line-clamp-1">
                      {s.navSub}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
