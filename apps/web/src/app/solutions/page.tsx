import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  TrendingUp,
  Users2,
  FlaskConical,
  Sparkles,
  Globe2,
  Handshake,
  CheckCircle2,
  Phone,
  HelpCircle,
  FileText,
  Workflow,
  Search,
  Building2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tailored Research — Strategic Solutions | Stratum",
  description:
    "Stratum offers tailored research to businesses and entrepreneurs seeking to gather exclusive insights and intelligence on their specific brand, products or services.",
};

interface SolutionItem {
  id: string;
  number: string;
  name: string;
  kicker: string;
  tagline: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  keyPoints: string[];
  deliverable: string;
  ctaLabel: string;
  ctaHref: string;
}

const STRATUM_SOLUTIONS: SolutionItem[] = [
  {
    id: "market-opportunity",
    number: "01",
    name: "Market Opportunity Intelligence",
    kicker: "SOLUTION 01 // OPPORTUNITY SIZING",
    tagline: "Identify, Size & Quantify Real Demand Across Emerging Corridors",
    description:
      "We help clients identify and assess market opportunities by analysing consumer needs, market dynamics, competition, informal trade distribution, and potential demand across urban and transport nodes.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: TrendingUp,
    keyPoints: [
      "Informal vs. modern channel commercial volume sizing",
      "Category stockout & replacement brand audit",
      "Wholesaler margin & distributor discount triangulation",
    ],
    deliverable: "Addressable Market Sizing Blueprint & Whitespace Map",
    ctaLabel: "REQUEST INTELLIGENCE",
    ctaHref: "/contact?cta=REQUEST_INTELLIGENCE&solution=market-opportunity",
  },
  {
    id: "consumer-intelligence",
    number: "02",
    name: "Consumer Intelligence",
    kicker: "SOLUTION 02 // CONSUMER BEHAVIOUR",
    tagline: "Understand the Why Behind Everyday Purchasing Decisions",
    description:
      "Through targeted fieldwork, we uncover what consumers need, want, prefer, and experience, capturing the socio-cultural and economic drivers behind everyday household basket allocations.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: Users2,
    keyPoints: [
      "Household wallet share & inflation coping strategies",
      "Brand switching triggers & private-label substitutions",
      "Single-coin physical price resistance thresholds",
    ],
    deliverable: "Household Wallet Share Log & Elasticity Curves",
    ctaLabel: "COMMISSION CONSUMER STUDY",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&solution=consumer-intelligence",
  },
  {
    id: "product-concept-testing",
    number: "03",
    name: "Product & Concept Testing",
    kicker: "SOLUTION 03 // FORMULATION & PACKAGING",
    tagline: "Test Formulations, Flavours & Packaging Before Commercialisation",
    description:
      "De-risk capital investment and manufacturing runs. We evaluate product concepts, recipe formulations, sensory characteristics, pack ergonomics, and purchase intent across targeted demographic segments.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: FlaskConical,
    keyPoints: [
      "Localized palate, flavour & sensory profile trials",
      "Packaging humidity resistance, friction & sachet durability",
      "Net purchase intent vs. incumbent market leaders",
    ],
    deliverable: "Sensory Evaluation Diagnostic & Concept Scorecard",
    ctaLabel: "TEST A NEW CONCEPT",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&solution=product-testing",
  },
  {
    id: "brand-intelligence",
    number: "04",
    name: "Brand Intelligence & Tracking",
    kicker: "SOLUTION 04 // EQUITY & HEALTH",
    tagline: "Continuously Monitor Health, Perception & Competitive Velocity",
    description:
      "We establish longitudinal tracking panels that measure unprompted awareness, brand consideration, customer sentiment, Net Promoter Scores (NPS), and competitive vulnerability across diverse trade corridors.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: Sparkles,
    keyPoints: [
      "Brand recall conversion to physical kiosk availability",
      "Customer advocacy & reputational churn drivers",
      "Competitor counter-moves & loyalty erosion telemetry",
    ],
    deliverable: "Quarterly Brand Health Tracker & NPS Sentiment Index",
    ctaLabel: "TRACK YOUR BRAND",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&solution=brand-tracking",
  },
  {
    id: "market-entry-expansion",
    number: "05",
    name: "Market Entry & Expansion",
    kicker: "SOLUTION 05 // JURISDICTIONAL ROADMAPS",
    tagline: "Practically Explore New Jurisdictions With Ground-Level Execution",
    description:
      "Moving beyond theoretical macroeconomic slide decks, Stratum builds turnkey route-to-market roadmaps analyzing AfCFTA tariff implications, local regulatory licensing, co-packer verification, and distributor economics.",
    bgClass: "bg-[#0A3D62] text-white",
    borderClass: "border-[#0E5284] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-100 border-white/20",
    icon: Globe2,
    keyPoints: [
      "Tariff optimization, standards & non-tariff barrier audits",
      "Tier-1 distributor balance sheet & logistics fleet audits",
      "Working capital hedging under foreign exchange volatility",
    ],
    deliverable: "Turnkey Route-to-Market Strategy & Distributor Dossier",
    ctaLabel: "DISCUSS MARKET ENTRY",
    ctaHref: "/contact?cta=DISCUSS_MARKET_ENTRY&solution=market-entry",
  },
  {
    id: "business-intermediation",
    number: "06",
    name: "Business & Investment Intermediation",
    kicker: "SOLUTION 06 // BILATERAL MATCHMAKING",
    tagline: "Bridge Investment Gaps Through Bilateral Strategic Matchmaking",
    description:
      "Stratum operates dedicated bilateral sourcing and deal-facilitation desks. We bridge institutional capital, private equity, commercial enterprises, and vetted regional suppliers under confidential bilateral NDAs.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#004B87] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Handshake,
    keyPoints: [
      "Actionable regional co-investment & acquisition targets",
      "Direct Asian & African factory technical inspections",
      "Confidential deal room repository & JV term-sheet structuring",
    ],
    deliverable: "Bilateral Partner Dossier & Confidential Deal Room",
    ctaLabel: "EXPLORE OPPORTUNITIES",
    ctaHref: "/contact?cta=EXPLORE_INVESTMENT&solution=business-intermediation",
  },
];

const PROBLEM_SOLVER_QUESTIONS = [
  {
    question: "Explore Market Opportunities",
    answer: "Understand market dynamics, consumer demand, competitive landscapes, and emerging opportunities before entering or expanding into a market.",
    solutionId: "market-opportunity",
    serviceRef: "02 INTELLIGENCE",
  },
  {
    question: "Understand Consumer Behaviour",
    answer: "Discover what consumers need, want, prefer, experience, and why they make everyday basket allocations.",
    solutionId: "consumer-intelligence",
    serviceRef: "01 RESEARCH",
  },
  {
    question: "Meet New Investors & Business Partners",
    answer: "Identify relevant investors, businesses, strategic partners, suppliers, distributors, and other commercial connections.",
    solutionId: "business-intermediation",
    serviceRef: "04 INTERMEDIATION",
  },
  {
    question: "Track Your Brand",
    answer: "Monitor brand health, consumer perception, competitive performance, and key brand performance indicators.",
    solutionId: "brand-intelligence",
    serviceRef: "01 RESEARCH",
  },
  {
    question: "Assess Consumer Satisfaction",
    answer: "Hear directly from consumers and understand their experiences with your brand, products, and services.",
    solutionId: "consumer-intelligence",
    serviceRef: "01 RESEARCH",
  },
  {
    question: "Test a New Product",
    answer: "Test concepts, products, flavours, packaging, positioning, and consumer reception before making major commercial decisions.",
    solutionId: "product-concept-testing",
    serviceRef: "01 RESEARCH",
  },
  {
    question: "Monitor Brand Performance",
    answer: "Establish and utilise relevant KPIs to measure, track, and improve brand performance across target markets.",
    solutionId: "brand-intelligence",
    serviceRef: "02 INTELLIGENCE",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Hero Header: Minimalist Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
              <Workflow className="size-3 text-primary shrink-0" />
              <span>OUR SOLUTIONS &bull; TAILORED RESEARCH DESK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Tailored Research
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum offers tailored research to businesses and entrepreneurs seeking to gather exclusive insights and intelligence on their specific brand, products or services.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="#problem-solver"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <HelpCircle className="size-3.5 text-primary" />
                <span>WHAT DO YOU NEED TO KNOW?</span>
              </a>
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

      {/* 3. "WHAT DO YOU NEED TO KNOW?" PROBLEM SOLVER (Sharp Rectangular Cards) */}
      <section id="problem-solver" className="py-14 sm:py-20 border-b border-border/80 bg-background scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              DECISION-GRADE PROBLEM SOLVER
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Tell Us What You Need to Understand. We’ll Help You Find the Answer.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every mandate begins with a fundamental commercial question. Select the challenge facing your leadership team to inspect our tailored solution methodology:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PROBLEM_SOLVER_QUESTIONS.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.solutionId}`}
                className="p-5 rounded-none border border-border/80 bg-card hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono border-b border-border/60 pb-2">
                    <span className="font-bold text-primary px-2 py-0.5 rounded-none bg-primary/10 border border-primary/20">
                      QUESTION 0{idx + 1}
                    </span>
                    <span className="text-muted-foreground uppercase">{item.serviceRef}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
                <div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1 group-hover:underline">
                  <span className="uppercase text-[11px] tracking-wider">EXPLORE SCOPE</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE SIX TAILORED SOLUTIONS: Tall WordPress-Style Sharp-Edged Colored Cards */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              COMPREHENSIVE SOLUTION SUITE
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Six Tailored Solutions For Emerging Markets
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Designed around the commercial realities of businesses, brands, institutional investors, and expanding enterprises:
            </p>
          </div>

          {/* WordPress Grid: 6 Tall Sharp Cards with Colored Backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {STRATUM_SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className={`${sol.bgClass} border ${sol.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[480px] scroll-mt-24`}
                >
                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Number + Icon Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <span className="font-mono text-xs font-bold tracking-wider opacity-90">
                        {sol.kicker}
                      </span>
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Title + Tagline */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                        {sol.name}
                      </h3>
                      <p className="text-[11px] font-mono text-white/80 uppercase tracking-wider">
                        {sol.tagline}
                      </p>
                    </div>

                    {/* Brief Description */}
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                      {sol.description}
                    </p>

                    {/* Key Questions / Capabilities */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/70 block">
                        CORE BUSINESS FOCUS:
                      </span>
                      {sol.keyPoints.map((pt) => (
                        <div key={pt} className="flex items-start gap-2 text-xs text-white/90">
                          <CheckCircle2 className="size-3.5 text-white/80 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Deliverable & Action Button */}
                  <div className="pt-4 border-t border-white/15 space-y-3">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block">
                        CORE DELIVERABLE:
                      </span>
                      <span className="text-xs font-medium text-white block">
                        {sol.deliverable}
                      </span>
                    </div>

                    <Link
                      href={sol.ctaHref}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-none bg-white text-[#002B49] font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
                    >
                      <span>{sol.ctaLabel}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
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
                <span>NAIROBI ADVISORY &bull; TAILORED RESEARCH DESK</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                Understand the Market. Identify the Opportunity. Make Better Decisions.
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Whether you are entering a new market, launching a product, tracking your brand, evaluating an investment opportunity, or seeking strategic business connections, Stratum provides the intelligence to help you move forward.
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

      {/* Global Footer */}
      <Footer />

      {/* Native Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
