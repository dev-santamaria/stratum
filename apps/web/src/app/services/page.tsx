import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { ConsultationForm } from "@/components/landing/consultation-form";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileText,
  Globe2,
  Handshake,
  Layers,
  Search,
  ShieldCheck,
  TrendingUp,
  Users2,
  FlaskConical,
  Database,
  Building2,
  Lock,
  Sparkles,
  ChevronRight,
  Workflow,
  BarChart3,
  Network,
  Clock,
  MessageSquare,
  Cpu,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our 6 Services — Primary Fieldwork, Intelligence & Intermediation | Stratum",
  description:
    "Explore Stratum's 6 core service lines: Research, Intelligence, Opportunity, Intermediation, Market Access, and Digital Market platform.",
};

interface ServiceItem {
  id: string;
  aliases?: string[];
  number: string;
  name: string;
  kicker: string;
  headline: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  capabilities: string[];
  deliverable: string;
  ctaLabel: string;
  ctaHref: string;
}

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "research",
    aliases: ["market-research"],
    number: "01",
    name: "Research",
    kicker: "SERVICE 01 // PRIMARY GROUND TRUTH",
    headline: "Market research, consumer insights, brand tracking, product testing and data collection.",
    description:
      "We execute primary fieldwork to uncover what is actually happening in commercial channels and consumer households where desk research fails. Double-blind censuses, sensory testing, and longitudinal panels across traditional dukas and open-air markets.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Compass,
    capabilities: [
      "GPS-verified retail outlet & kiosk shelf audits",
      "Consumer insights & longitudinal household panels",
      "Product sensory trials, blind tests & brand tracking",
    ],
    deliverable: "Subnational Retail Census & Price Sensitivity Index",
    ctaLabel: "COMMISSION RESEARCH",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&service=01_RESEARCH",
  },
  {
    id: "intelligence",
    aliases: ["business-intelligence"],
    number: "02",
    name: "Intelligence",
    kicker: "SERVICE 02 // STRATEGIC RIGOR",
    headline: "Market analysis, competitor intelligence, opportunity assessment and strategic insights.",
    description:
      "We convert raw market signals and field datasets into decision-grade strategic intelligence. We analyze competitor velocity, shadow pricing, wholesale distribution margins, and regulatory shifts to advise leadership before capital commitment.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: TrendingUp,
    capabilities: [
      "Competitor SKU margin & velocity scans",
      "TAM/SAM econometric whitespace modeling",
      "Price elasticity & single-coin threshold analysis",
    ],
    deliverable: "Strategic Intelligence Dossier & Competitor Matrix",
    ctaLabel: "REQUEST INTELLIGENCE",
    ctaHref: "/contact?cta=REQUEST_INTELLIGENCE&service=02_INTELLIGENCE",
  },
  {
    id: "opportunity",
    aliases: ["opportunity-assessment"],
    number: "03",
    name: "Opportunity",
    kicker: "SERVICE 03 // INVESTMENT SCREENING",
    headline: "Investment screening, sector mapping and commercial opportunity identification.",
    description:
      "We identify and pre-screen high-conviction commercial opportunities for institutional investors, corporate acquirers, and expanding enterprises. Mapping supply-demand deficits and evaluating subnational demand fundamentals.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: Search,
    capabilities: [
      "Sector supply-demand deficit & value chain mapping",
      "Pre-capital commercial feasibility & risk audits",
      "Commercial whitespace & secondary city diagnostics",
    ],
    deliverable: "Sector Opportunity Map & Investment Screening Memo",
    ctaLabel: "EXPLORE OPPORTUNITIES",
    ctaHref: "/contact?cta=EXPLORE_INVESTMENT&service=03_OPPORTUNITY",
  },
  {
    id: "intermediation",
    aliases: ["b2b-intermediation"],
    number: "04",
    name: "Intermediation",
    kicker: "SERVICE 04 // BILATERAL CONNECTIONS",
    headline: "Connecting businesses, investors, suppliers, distributors and strategic partners.",
    description:
      "Directed centrally from our Nairobi headquarters, Stratum acts as a trusted business intermediary—connecting vetted buyers directly with verified manufacturers in Asian production corridors (India & China) and linking regional brands with Tier-1 distributors.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: Handshake,
    capabilities: [
      "Direct Asian factory due diligence & technical audits",
      "Tier-1 regional distributor vetting & partner pairing",
      "Bilateral NDA execution & commercial escrow structuring",
    ],
    deliverable: "Audited Factory Dossier & Bilateral Commercial MoU",
    ctaLabel: "BECOME STRATEGIC PARTNER",
    ctaHref: "/contact?cta=STRATEGIC_PARTNER&service=04_INTERMEDIATION",
  },
  {
    id: "market-access",
    aliases: ["market-entry"],
    number: "05",
    name: "Market Access",
    kicker: "SERVICE 05 // EXPANSION STRATEGY",
    headline: "Market-entry support, local partner identification and expansion strategy.",
    description:
      "We design and support on-the-ground market entry roadmaps for enterprises expanding into new jurisdictions. We de-risk foreign entry by identifying local operating partners, structuring regulatory compliance, and establishing verified distribution channels.",
    bgClass: "bg-[#0A3D62] text-white",
    borderClass: "border-[#0E5284] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-100 border-white/20",
    icon: Globe2,
    capabilities: [
      "Turnkey jurisdictional market entry roadmaps",
      "Local operating partner & co-packer vetting",
      "Route-to-market hybrid distribution structuring",
    ],
    deliverable: "Turnkey Entry Roadmap & Local Partner Roster",
    ctaLabel: "DISCUSS MARKET ENTRY",
    ctaHref: "/contact?cta=DISCUSS_MARKET_ENTRY&service=05_MARKET_ACCESS",
  },
  {
    id: "digital-market",
    aliases: ["digital-platform"],
    number: "06",
    name: "Digital Market",
    kicker: "SERVICE 06 // PLATFORM GATEWAY",
    headline: "A separate digital platform or marketplace offering, with its own clearly defined features.",
    description:
      "The Stratum Digital Market provides an e-commerce and intelligence gateway for selected products and projects emerging from our research and business ecosystem, creating a pathway between market intelligence, product discovery, and commercial scale.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#004B87] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Network,
    capabilities: [
      "Digital market intelligence & telemetry dashboard",
      "Verified B2B partner directory & deal room",
      "Commercial distribution gateway for emerging products",
    ],
    deliverable: "Digital Deal Room Access & Continuous Telemetry",
    ctaLabel: "INQUIRE ON PLATFORM",
    ctaHref: "/contact?cta=REQUEST_INTELLIGENCE&service=06_DIGITAL_MARKET",
  },
];

const INTELLIGENCE_PILLARS = [
  {
    title: "Tailored Market Research",
    kicker: "PRIMARY STUDIES",
    description:
      "Tailored market research for companies seeking to enter, expand, or invest in new markets and sectors across Africa.",
    icon: BarChart3,
    highlights: [
      "Market sizing, segmentation & growth dynamics",
      "Consumer behaviour, preferences & consumption",
      "Competitive landscapes & channel discounts",
      "Commercial whitespace & expansion paths",
    ],
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
    ctaLabel: "COMMISSION STUDY",
  },
  {
    title: "Brand Tracking & Online Panels",
    kicker: "LONGITUDINAL TELEMETRY",
    description:
      "Continuously monitor brand health and market perception through structured consumer research, polling, and online panels.",
    icon: Sparkles,
    highlights: [
      "Spontaneous & prompted brand awareness",
      "Brand consideration & trial conversion",
      "Usage frequency, repeat buying & preference",
      "Competitive benchmarking & sentiment",
    ],
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
    ctaLabel: "CONFIGURE PANEL",
  },
  {
    title: "Qualitative Research",
    kicker: "ETHNOGRAPHIC DEPTH",
    description:
      "Understanding the why behind consumer behaviour. Uncovering motivations, attitudes, experiences, and perceptions.",
    icon: Users2,
    highlights: [
      "Focus groups across diverse demographic strata",
      "In-depth interviews (IDIs) in native dialects",
      "Ethnographic & household lifestyle studies",
      "Open-air consumer observation & pantry audits",
    ],
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
    ctaLabel: "SCHEDULE STUDY",
  },
  {
    title: "Product & Sensory Testing",
    kicker: "COMMERCIAL FIT",
    description:
      "Understanding how consumers respond to products, pack designs, and formulations before making major commercial investments.",
    icon: FlaskConical,
    highlights: [
      "Early-stage product concepts & claims",
      "Flavours, aromas & chemical formulations",
      "Packaging ergonomics & sachet durability",
      "Real purchase intent & price-value perception",
    ],
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
    ctaLabel: "INITIATE TEST",
  },
];

export default function ServicesPage() {
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
              <span>STRATUM SERVICES ARCHITECTURE &bull; NAIROBI ADVISORY DESK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Six Distinct Capabilities Built for Complex &amp; Emerging Markets
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum delivers research, intelligence, opportunity identification, intermediation, market access, and digital market activities as distinct, clearly defined capabilities. Whether you require empirical ground research or direct cross-border partner introductions, each service offers a defined methodology and actionable commercial outcome.
            </p>

            {/* Quick Service Anchor Navigation */}
            <div className="pt-2 flex flex-wrap gap-2">
              {SERVICES_CATALOG.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none border border-border/80 bg-background hover:border-primary/60 hover:bg-muted text-xs font-semibold text-foreground transition-all shadow-2xs"
                >
                  <span className="text-primary font-mono text-[10px] font-bold">{s.number}</span>
                  <span className="uppercase tracking-wider">{s.name}</span>
                  <ChevronRight className="size-3 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 6 CORE SERVICE LINES: Tall WordPress-Style Sharp-Edged Colored Cards */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              SIX CORE CAPABILITIES
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              The Stratum Services Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore our six integrated practice lines engineered specifically for emerging market trade and commercial execution:
            </p>
          </div>

          {/* WordPress Grid: Tall Sharp Cards with Colored Backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES_CATALOG.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className={`${s.bgClass} border ${s.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[480px] scroll-mt-24 relative`}
                >
                  {/* Alias anchor targets for backward-compatible deep links */}
                  {s.aliases?.map((alias) => (
                    <span key={alias} id={alias} className="absolute -top-24 left-0 pointer-events-none" />
                  ))}

                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Number + Icon Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <span className="font-mono text-xs font-bold tracking-wider opacity-90">
                        {s.kicker}
                      </span>
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                        {s.name}
                      </h3>
                      <p className="text-[11px] font-mono text-white/80 uppercase tracking-wider">
                        {s.headline}
                      </p>
                    </div>

                    {/* Brief Description */}
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                      {s.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/70 block">
                        OPERATIONAL CAPABILITIES:
                      </span>
                      {s.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2 text-xs text-white/90">
                          <CheckCircle2 className="size-3.5 text-white/80 shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
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
                        {s.deliverable}
                      </span>
                    </div>

                    <Link
                      href={s.ctaHref}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-none bg-white text-[#002B49] font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
                    >
                      <span>{s.ctaLabel}</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STRATUM INTELLIGENCE SUITE: 4 KEY METHODOLOGY PILLARS */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
              STRATUM INTELLIGENCE SUITE
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Turning Market Signals into Actionable Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our intelligence methodologies help businesses, brands, investors, and entrepreneurs understand markets, consumers, competitors, and products:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTELLIGENCE_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-none border border-border/80 bg-card p-5 sm:p-6 flex flex-col justify-between space-y-5 hover:border-primary/50 transition-all shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                      <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase">
                        {p.kicker}
                      </span>
                      <div className="size-7 rounded-none bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="size-3.5" />
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                      {p.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-1 pt-1 border-t border-border/60">
                      <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground block">
                        What It Covers:
                      </span>
                      {p.highlights.map((hl) => (
                        <div key={hl} className="flex items-start gap-1.5 text-[11px] text-foreground/90">
                          <span className="text-primary">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href={p.ctaHref}
                      className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-none bg-muted hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>{p.ctaLabel}</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ACTIONABLE CONSULTATION WORKSPACE */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (5 cols): Institutional Advisory Briefing */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-muted/40 text-[11px] font-mono font-semibold text-muted-foreground">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-foreground font-bold">CLIENT ADVISORY DESK</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground tracking-tight leading-tight">
                  Ready to Initiate a Mandate?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                  Every inquiry is reviewed directly by our practice leads in Nairobi. Select your service line, define your target market corridor, and submit your brief below:
                </p>
              </div>

              {/* Institutional Assurances */}
              <div className="space-y-3">
                <div className="p-4 rounded-none border border-border/80 bg-card space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="uppercase">Bilateral NDA Executed</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Mutual legal confidentiality clearance is in place before exchanging commercially sensitive project information.
                  </p>
                </div>

                <div className="p-4 rounded-none border border-border/80 bg-card space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <Building2 className="size-4 text-primary" />
                    <span className="uppercase">Direct Practice Assignment</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Briefs are directly routed to the designated desk lead across our 6 core capabilities.
                  </p>
                </div>

                <div className="p-4 rounded-none border border-border/80 bg-card space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <Clock className="size-4 text-amber-500" />
                    <span className="uppercase">Scoping Memo &lt; 24 Hours</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Our team prepares an initial methodological design, sample architecture, and engagement proposal promptly.
                  </p>
                </div>
              </div>

              {/* Direct Corporate Hotline */}
              <div className="p-4 rounded-none border border-border/80 bg-slate-50 dark:bg-card/40 text-xs space-y-2">
                <div className="font-mono text-[11px] text-muted-foreground uppercase font-bold">
                  Nairobi Headquarters:
                </div>
                <div className="font-medium text-foreground">
                  Westlands, Nairobi, Kenya
                </div>
                <div className="pt-1 flex flex-wrap items-center gap-3 font-mono text-[11px]">
                  <a href="tel:+254721154382" className="text-foreground hover:underline font-bold">
                    +254 721 154382
                  </a>
                  <span className="text-border">•</span>
                  <a
                    href="https://wa.me/254721154382"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                  >
                    WhatsApp Desk
                  </a>
                  <span className="text-border">•</span>
                  <a href="mailto:info@stratumresearchltd.com" className="text-primary hover:underline font-bold">
                    info@stratumresearchltd.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): The Consultation Form */}
            <div className="lg:col-span-7 rounded-none border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
              <ConsultationForm />
            </div>

          </div>
        </div>
      </section>

      {/* 6. SIGNATURE MIDNIGHT NAVY CORPORATE CTA BANNER (#002B49) */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/10 border border-white/20 text-[10px] font-mono text-white/90">
                <Sparkles className="size-3 text-sky-300" />
                <span>NAIROBI ADVISORY &bull; DIRECT ENGAGEMENT DESK</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                Ready to Commission Research or Engage Advisory?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Discuss your target geography, sector, and commercial timeline directly with our research directors in Nairobi. We formulate bespoke scoping briefs within 6 business hours.
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
                href="/how-we-work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-transparent text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <span>HOW WE WORK (5 STAGES)</span>
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
