import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { ConsultationForm } from "@/components/landing/consultation-form";
import {
  ArrowRight,
  Compass,
  Globe2,
  Handshake,
  Search,
  ShieldCheck,
  TrendingUp,
  Users2,
  FlaskConical,
  Building2,
  Sparkles,
  ChevronRight,
  BarChart3,
  Network,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our 6 Services — Primary Fieldwork, Intelligence & Intermediation | Stratum",
  description:
    "Explore Stratum's 6 core service lines: Research, Intelligence, Opportunity, Intermediation, Market Access, and Digital Market platform.",
};

interface ServiceItem {
  id: string;
  aliases?: string[];
  name: string;
  headline: string;
  description: string;
  bgClass: string;
  borderClass: string;
  accentBadgeClass: string;
  icon: React.ElementType;
  ctaLabel: string;
  ctaHref: string;
}

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "research",
    aliases: ["market-research"],
    name: "Research",
    headline: "Market research, consumer insights, brand tracking, product testing and data collection.",
    description:
      "We execute rigorous primary fieldwork across retail dukas, open-air wholesale corridors, and consumer households where desk research falls short. Operating under double-blind protocols with zero brand observer bias, our field teams deliver GPS-verified outlet censuses, longitudinal consumer panels, and sensory product trials—producing an actionable Subnational Retail Census and Price Sensitivity Index.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#003A63] hover:border-sky-400/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Compass,
    ctaLabel: "COMMISSION RESEARCH",
    ctaHref: "/contact?cta=COMMISSION_RESEARCH&service=01_RESEARCH",
  },
  {
    id: "intelligence",
    aliases: ["business-intelligence"],
    name: "Intelligence",
    headline: "Market analysis, competitor intelligence, opportunity assessment and strategic insights.",
    description:
      "We transform raw market signals and empirical datasets into decision-grade strategic intelligence. Our data science team models competitor SKU velocities, shadow pricing dynamics, and wholesale distribution margins down to single-coin elasticity thresholds—providing leadership with a Strategic Intelligence Dossier and Competitor Whitespace Matrix before major capital allocations.",
    bgClass: "bg-[#167D3C] text-white",
    borderClass: "border-[#1B9447] hover:border-emerald-300/60",
    accentBadgeClass: "bg-white/10 text-emerald-100 border-white/20",
    icon: TrendingUp,
    ctaLabel: "REQUEST INTELLIGENCE",
    ctaHref: "/contact?cta=REQUEST_INTELLIGENCE&service=02_INTELLIGENCE",
  },
  {
    id: "opportunity",
    aliases: ["opportunity-assessment"],
    name: "Opportunity",
    headline: "Investment screening, sector mapping and commercial opportunity identification.",
    description:
      "We identify and pre-screen high-conviction commercial opportunities for institutional investors, corporate acquirers, and growing enterprises. By mapping structural supply-demand deficits across regional trade corridors and auditing value chain margins in secondary cities, we deliver comprehensive Sector Opportunity Maps and Investment Screening Memos to accelerate capital deployment.",
    bgClass: "bg-[#004B87] text-white",
    borderClass: "border-[#0060AD] hover:border-cyan-300/60",
    accentBadgeClass: "bg-white/10 text-cyan-100 border-white/20",
    icon: Search,
    ctaLabel: "EXPLORE OPPORTUNITIES",
    ctaHref: "/contact?cta=EXPLORE_INVESTMENT&service=03_OPPORTUNITY",
  },
  {
    id: "intermediation",
    aliases: ["b2b-intermediation"],
    name: "Intermediation",
    headline: "Connecting businesses, investors, suppliers, distributors and strategic partners.",
    description:
      "Stratum acts as a trusted institutional business intermediary, connecting verified buyers with audited manufacturers across Asian industrial corridors (India & China) and linking regional enterprises with Tier-1 distributors. We perform on-site technical factory audits, structure bilateral NDAs, and govern milestone escrow agreements to produce verified Commercial MoUs and bilateral deal rooms.",
    bgClass: "bg-[#1E293B] text-white",
    borderClass: "border-[#334155] hover:border-indigo-400/60",
    accentBadgeClass: "bg-white/10 text-indigo-200 border-white/20",
    icon: Handshake,
    ctaLabel: "BECOME STRATEGIC PARTNER",
    ctaHref: "/contact?cta=STRATEGIC_PARTNER&service=04_INTERMEDIATION",
  },
  {
    id: "market-access",
    aliases: ["market-entry"],
    name: "Market Access",
    headline: "Market-entry support, local partner identification and expansion strategy.",
    description:
      "We design and execute turnkey market entry roadmaps for enterprises expanding across East African jurisdictions. Our advisory desk de-risks regional expansion by vetting local operating partners and co-packers, structuring regulatory compliance, and establishing multi-tier hybrid distribution channels to ensure rapid, compliant commercial traction.",
    bgClass: "bg-[#0A3D62] text-white",
    borderClass: "border-[#0E5284] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-100 border-white/20",
    icon: Globe2,
    ctaLabel: "DISCUSS MARKET ENTRY",
    ctaHref: "/contact?cta=DISCUSS_MARKET_ENTRY&service=05_MARKET_ACCESS",
  },
  {
    id: "digital-market",
    aliases: ["digital-platform"],
    name: "Digital Market",
    headline: "A separate digital platform or marketplace offering, with its own clearly defined features.",
    description:
      "The Stratum Digital platform bridges empirical intelligence with active commercial transactions. Providing dedicated e-commerce storefronts, verified B2B partner deal rooms, and live telemetry dashboards, the platform enables emerging regional brands and vetted manufacturers to showcase products, connect with corporate buyers, and achieve scalable cross-border commercial distribution.",
    bgClass: "bg-[#002B49] text-white",
    borderClass: "border-[#004B87] hover:border-sky-300/60",
    accentBadgeClass: "bg-white/10 text-sky-200 border-white/20",
    icon: Network,
    ctaLabel: "INQUIRE ON PLATFORM",
    ctaHref: "/contact?cta=REQUEST_INTELLIGENCE&service=06_DIGITAL_MARKET",
  },
];

const INTELLIGENCE_PILLARS = [
  {
    title: "Tailored Market Research",
    description:
      "Bespoke empirical studies engineered for enterprises entering, scaling, or investing across African consumer markets. We analyze total addressable market sizing, demographic segmentation, purchasing habits, and channel margin structures to chart high-confidence commercial expansion pathways.",
    icon: BarChart3,
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
    ctaLabel: "COMMISSION STUDY",
  },
  {
    title: "Brand Tracking & Online Panels",
    description:
      "Continuous brand health telemetry combining representative digital polling with recurring consumer panels. We track spontaneous brand recall, consideration conversion funnels, repeat purchase frequency, and net promoter sentiment against key market competitors.",
    icon: Sparkles,
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
    ctaLabel: "CONFIGURE PANEL",
  },
  {
    title: "Qualitative Research",
    description:
      "Deep ethnographic exploration uncovering the cultural motivations, daily friction points, and subconscious attitudes driving consumer adoption. We deploy vernacular in-depth interviews (IDIs), demographic focus groups, open-air market intercepts, and in-home pantry audits.",
    icon: Users2,
    ctaHref: "/contact?cta=COMMISSION_RESEARCH",
    ctaLabel: "SCHEDULE STUDY",
  },
  {
    title: "Product & Sensory Testing",
    description:
      "Rigorous empirical validation of product formulations, aromas, packaging ergonomics, and concept claims before capital commitment. We measure real consumer purchase intent, sachet durability in informal trade channels, and price-value perception.",
    icon: FlaskConical,
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
                  <span className="uppercase tracking-wider">{s.name}</span>
                  <ChevronRight className="size-3 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 6 CORE SERVICE LINES: Informational Colored Cards */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="max-w-3xl space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              The Stratum Services Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Explore our six integrated practice lines engineered specifically for emerging market trade and commercial execution:
            </p>
          </div>

          {/* WordPress Grid: Sharp-Edged Colored Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES_CATALOG.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className={`${s.bgClass} border ${s.borderClass} rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm transition-all duration-200 group hover:-translate-y-1 hover:shadow-md min-h-[340px] scroll-mt-24 relative`}
                >
                  {/* Alias anchor targets for backward-compatible deep links */}
                  {s.aliases?.map((alias) => (
                    <span key={alias} id={alias} className="absolute -top-24 left-0 pointer-events-none" />
                  ))}

                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Icon Strip */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className="size-4.5" />
                      </div>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                        {s.name}
                      </h3>
                      <p className="text-[11px] font-mono text-white/80 uppercase tracking-wider">
                        {s.headline}
                      </p>
                    </div>

                    {/* Enhanced Informational Description */}
                    <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                      {s.description}
                    </p>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-white/15">
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
                  className="rounded-none border border-border/80 bg-card p-5 sm:p-6 flex flex-col justify-between space-y-5 hover:border-primary/50 transition-all shadow-2xs min-h-[320px]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                      <div className="size-8 rounded-none bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="size-4" />
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                      {p.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
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

              {/* Direct Corporate Inquiries */}
              <div className="p-4 rounded-none border border-border/80 bg-slate-50 dark:bg-card/40 text-xs space-y-2">
                <div className="font-mono text-[11px] text-muted-foreground uppercase font-bold">
                  Nairobi Advisory Operations:
                </div>
                <div className="font-medium text-foreground">
                  Monday – Friday &bull; 08:00 – 18:00 EAT
                </div>
                <div className="pt-1 flex flex-wrap items-center gap-3 font-mono text-[11px]">
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
                <span>CONTACT ADVISORY DESK</span>
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
