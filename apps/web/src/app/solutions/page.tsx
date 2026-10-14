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
  Compass,
  BarChart3,
  Search,
  Building2,
  Lock,
  ChevronRight,
  HelpCircle,
  FileText,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Intelligence Designed Around Your Business Needs | Stratum",
  description:
    "Explore Stratum's business intelligence solutions: Market Opportunity, Consumer Intelligence, Product & Concept Testing, Brand Intelligence, Market Entry & Expansion, and B2B Intermediation.",
};

const STRATUM_SOLUTIONS = [
  {
    id: "market-opportunity",
    number: "01",
    name: "Market Opportunity Intelligence",
    tagline: "Identify, Size & Quantify Real Demand Across Emerging Corridors",
    description:
      "We help clients identify and assess market opportunities by analysing consumer needs, market dynamics, competition, distribution, emerging trends, and potential demand.",
    details:
      "In markets where between 70% and 85% of retail transacts through informal kiosks and open-air hubs, standard macroeconomic desk data paints a distorted picture. Stratum combines double-blind retail audits with econometric whitespace modelling to provide true TAM, SAM, and SOM calculations.",
    targetQuestions: [
      "What is the actual commercial volume moving through informal vs modern channels?",
      "Where are category stockouts occurring and who is winning the replacement buy?",
      "Which secondary urban nodes and transport corridors demonstrate high velocity?",
      "What margin structure do local wholesalers and distributors demand to push a new brand?",
    ],
    deliverables: [
      "Subnational Addressable Market Sizing Blueprint (Formal + Informal)",
      "Channel Margin Triangulation & Wholesaler Discount Matrix",
      "Whitespace Opportunity Map & Competitive Moat Assessment",
    ],
    cta: {
      label: "Request Market Intelligence",
      href: "/contact?cta=REQUEST_INTELLIGENCE",
    },
    icon: TrendingUp,
  },
  {
    id: "consumer-intelligence",
    number: "02",
    name: "Consumer Intelligence",
    tagline: "Understand the Why Behind Everyday Purchasing Decisions",
    description:
      "Through targeted research, we identify patterns in consumer behaviour, preferences, habits, satisfaction, and consumption to help businesses and investors make informed decisions.",
    details:
      "We uncover what consumers need, want, prefer, and experience, capturing the socio-cultural and economic drivers behind everyday basket allocations. Our bilingual field teams operate in native dialects across community settlements, suburban households, and commercial hubs.",
    targetQuestions: [
      "How do households budget their daily spend under persistent food and utility inflation?",
      "What triggers consumer switching between staple brands and private-label alternatives?",
      "How do peer recommendations, localized rituals, and vernacular packaging impact trial?",
      "What are the critical price resistance thresholds at standard physical coin increments?",
    ],
    deliverables: [
      "Household Wallet Share & Category Consumption Pacing Log",
      "Single-Coin Price Sensitivity & Elasticity Curves",
      "Consumer Persona Archetypes & Dialect Nuance Profiles",
    ],
    cta: {
      label: "Commission a Consumer Study",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
    icon: Users2,
  },
  {
    id: "product-concept-testing",
    number: "03",
    name: "Product & Concept Testing",
    tagline: "Test Formulations, Flavours & Packaging Before Commercialisation",
    description:
      "We help clients explore new products and concepts by testing consumer reception, identifying opportunities for improvement, and understanding potential market response before commercialisation.",
    details:
      "De-risk capital investment and manufacturing runs. We evaluate product concepts, recipe formulations, sensory characteristics, pack ergonomics, shelf visibility, and purchase intent across targeted demographic segments.",
    targetQuestions: [
      "Do localized sensory profiles (sweetness, texture, aroma) meet local palate expectations?",
      "Does the packaging withstand high-humidity, transport friction, and single-unit kiosk resale?",
      "What is the net purchase intent compared against dominant incumbent products?",
      "Is the proposed retail pack size aligned with daily household liquidity?",
    ],
    deliverables: [
      "Blind & Branded Sensory Evaluation Diagnostic",
      "Pack Ergonomics, Shelf Standout & Durability Benchmark",
      "Concept Optimisation & Trial Conversion Scorecard",
    ],
    cta: {
      label: "Test a New Product Concept",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
    icon: FlaskConical,
  },
  {
    id: "brand-intelligence",
    number: "04",
    name: "Brand Intelligence & Tracking",
    tagline: "Continuously Monitor Health, Perception & Competitive Velocity",
    description:
      "We help businesses track the development and reception of their brands, products, and services across diverse consumer markets. Our approach helps clients monitor brand health, consumer perception, competitive performance, and relevant KPIs.",
    details:
      "Brand equity in emerging markets is dynamic. We establish longitudinal tracking panels that measure unprompted awareness, brand consideration, customer sentiment, Net Promoter Scores (NPS), and competitive vulnerability.",
    targetQuestions: [
      "How does brand recall convert to real kiosk shelf availability and final purchase?",
      "What attributes drive positive brand advocacy or reputational churn?",
      "How effective is above-the-line marketing compared to grassroots POS activations?",
      "Which competitor actions are successfully eroding brand loyalty?",
    ],
    deliverables: [
      "Quarterly Brand Health Tracker & Share-of-Voice Audit",
      "Competitive Perception Mapping & NPS Sentiment Index",
      "Brand Equity & Marketing ROI Diagnostic Dossier",
    ],
    cta: {
      label: "Track Your Brand",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
    icon: Sparkles,
  },
  {
    id: "market-entry-expansion",
    number: "05",
    name: "Market Entry & Expansion",
    tagline: "Practically Explore New Jurisdictions With Ground-Level Execution",
    description:
      "We help clients practically explore new markets through research, consumer engagement, product testing, and market intelligence. Our work provides insight into market conditions, consumer demand, competitive environments, and potential opportunities.",
    details:
      "Moving beyond theoretical macroeconomic slide decks, Stratum builds turnkey route-to-market roadmaps. We examine AfCFTA tariff implications, local regulatory licensing, co-packer verification, cold-chain logistical feasibility, and distributor economics.",
    targetQuestions: [
      "What import duties, non-tariff barriers, and local standards apply to the product category?",
      "Which Tier-1 distributors hold verified balance sheets and van-sales routes in secondary towns?",
      "What is the minimum viable working capital needed for break-even in the first 18 months?",
      "How can supply chains be structured to hedge against foreign exchange fluctuations?",
    ],
    deliverables: [
      "Turnkey Jurisdictional Route-to-Market Strategy",
      "Tier-1 Regional Distributor Screening & Financial Due Diligence Dossier",
      "AfCFTA Cross-Border Trade & Regulatory Compliance Roadmap",
    ],
    cta: {
      label: "Discuss Market Entry",
      href: "/contact?cta=DISCUSS_MARKET_ENTRY",
    },
    icon: Globe2,
  },
  {
    id: "business-intermediation",
    number: "06",
    name: "Business & Investment Intermediation",
    tagline: "Bridge Investment Gaps Through Bilateral Strategic Matchmaking",
    description:
      "We bridge investment gaps through business-to-business intermediation. We connect businesses, investors, entrepreneurs, and strategic partners with relevant opportunities and potential counterparts to support market entry, partnerships, investment, and cross-border business development.",
    details:
      "Stratum operates dedicated bilateral sourcing and deal-facilitation desks. We bridge institutional capital, private equity, commercial enterprises, and vetted regional suppliers under confidential bilateral NDAs.",
    targetQuestions: [
      "Which verified regional enterprises represent actionable co-investment or acquisition targets?",
      "How can direct factory inspections in Asia or Africa verify production capacities prior to wire transfers?",
      "Who are the reliable logistics, warehousing, and escrow partners in the target corridor?",
      "How do we structure commercial joint ventures that align international capital with local operational know-how?",
    ],
    deliverables: [
      "Bilateral Commercial Partner Dossier & Reputational Audit",
      "Direct Manufacturing Plant & Supply Chain Audit Report",
      "Confidential Deal Room Repository & JV Term-Sheet Framework",
    ],
    cta: {
      label: "Explore Investment Opportunities",
      href: "/contact?cta=EXPLORE_INVESTMENT",
    },
    icon: Handshake,
  },
];

const PROBLEM_SOLVER_QUESTIONS = [
  {
    question: "Explore Market Opportunities",
    answer: "Understand market dynamics, consumer demand, competitive landscapes, and emerging opportunities before entering or expanding into a market.",
    solutionId: "market-opportunity",
    serviceRef: "02 Intelligence",
  },
  {
    question: "Understand Consumer Behaviour",
    answer: "Discover what consumers need, want, prefer, experience, and why they make the decisions they do.",
    solutionId: "consumer-intelligence",
    serviceRef: "01 Research",
  },
  {
    question: "Meet New Investors & Business Partners",
    answer: "Identify relevant investors, businesses, strategic partners, suppliers, distributors, and other commercial connections.",
    solutionId: "business-intermediation",
    serviceRef: "04 Intermediation",
  },
  {
    question: "Track Your Brand",
    answer: "Monitor brand health, consumer perception, competitive performance, and key brand performance indicators.",
    solutionId: "brand-intelligence",
    serviceRef: "01 Research",
  },
  {
    question: "Assess Consumer Satisfaction",
    answer: "Hear directly from consumers and understand their experiences with your brand, products, and services.",
    solutionId: "consumer-intelligence",
    serviceRef: "01 Research",
  },
  {
    question: "Test a New Product",
    answer: "Test concepts, products, flavours, packaging, positioning, and consumer reception before making major commercial decisions.",
    solutionId: "product-concept-testing",
    serviceRef: "01 Research",
  },
  {
    question: "Monitor Brand Performance",
    answer: "Establish and utilise relevant KPIs to measure, track, and improve brand performance across target markets.",
    solutionId: "brand-intelligence",
    serviceRef: "02 Intelligence",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. EXECUTIVE HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-muted/40 text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">OUR SOLUTIONS</span>
              <span className="text-border">•</span>
              <span className="text-foreground">INTELLIGENCE DESIGNED AROUND YOUR BUSINESS NEEDS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground tracking-tight leading-[1.15]">
              Intelligence Designed Around Your Business Needs
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum combines first-hand market research, real-time insights, consumer intelligence, and business-to-business intermediation to help clients identify opportunities, understand markets, validate ideas, and make better-informed commercial decisions.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Talk to Stratum</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="#problem-solver"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <span>What Do You Need to Know?</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WHAT DO YOU NEED TO KNOW?" INTERACTIVE PROBLEM SOLVER */}
      <section id="problem-solver" className="py-14 sm:py-18 border-b border-border/80 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
              WHAT DO YOU NEED TO KNOW?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-foreground tracking-tight">
              Tell Us What You Need to Understand. We’ll Help You Find the Answer.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every mandate begins with a fundamental question. Select the challenge facing your leadership team to inspect our tailored solution methodology:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PROBLEM_SOLVER_QUESTIONS.map((item, idx) => (
              <Link
                key={idx}
                href={`#${item.solutionId}`}
                className="p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/60 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                      QUESTION 0{idx + 1}
                    </span>
                    <span className="text-muted-foreground text-[10px]">{item.serviceRef}</span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
                <div className="pt-2 text-xs font-semibold text-primary flex items-center gap-1 group-hover:underline">
                  <span>Explore Solution Scope</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE SIX STRATEGIC SOLUTIONS (DEEP DIVES) */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-16">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
              COMPREHENSIVE SOLUTION SUITE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground tracking-tight">
              Six Tailored Solutions For Complex &amp; Emerging Markets
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Designed around the commercial realities of businesses, brands, institutional investors, and entrepreneurs operating across Africa and emerging global corridors.
            </p>
          </div>

          <div className="space-y-12">
            {STRATUM_SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/80 bg-card shadow-sm scroll-mt-24 space-y-8"
                >
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-border/60 pb-6">
                    <div className="space-y-3 max-w-4xl">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-black text-primary px-3 py-1 rounded-md bg-primary/10">
                          SOLUTION {sol.number}
                        </span>
                        <div className="size-8 rounded-lg bg-muted flex items-center justify-center text-primary">
                          <Icon className="size-4" />
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-foreground">
                        {sol.name}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-primary">
                        {sol.tagline}
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                        {sol.description}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {sol.details}
                      </p>
                    </div>

                    <div className="shrink-0 pt-2">
                      <Link
                        href={sol.cta.href}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer whitespace-nowrap"
                      >
                        <span>{sol.cta.label}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* 2-Column Details: Target Questions & Typical Deliverables */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Column 1: Core Commercial Questions Addressed */}
                    <div className="space-y-3.5 p-5 rounded-xl bg-muted/30 border border-border/60">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                        <HelpCircle className="size-3.5 text-primary" />
                        <span>Core Business Questions Addressed</span>
                      </h4>
                      <ul className="space-y-2.5 text-xs text-muted-foreground">
                        {sol.targetQuestions.map((q, qIdx) => (
                          <li key={qIdx} className="flex items-start gap-2.5">
                            <span className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Standard Executive Deliverables */}
                    <div className="space-y-3.5 p-5 rounded-xl bg-muted/30 border border-border/60">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                        <FileText className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Decision-Grade Deliverables</span>
                      </h4>
                      <ul className="space-y-2.5 text-xs text-muted-foreground">
                        {sol.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="leading-relaxed font-medium text-foreground">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TURN INSIGHT INTO OPPORTUNITY CTA FOOTER STRIP */}
      <section className="py-14 sm:py-18 bg-muted/20 border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="p-8 sm:p-12 rounded-3xl border border-border/90 bg-card text-center max-w-4xl mx-auto space-y-6 shadow-sm">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              TURN INSIGHT INTO OPPORTUNITY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground tracking-tight">
              Understand the Market. Identify the Opportunity. Make Better Decisions.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you are entering a new market, launching a product, tracking your brand, evaluating an investment opportunity, or seeking strategic business connections, Stratum provides the intelligence and market access to help you move forward.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Talk to Stratum</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all cursor-pointer"
              >
                <span>Explore Our 6 Services</span>
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
