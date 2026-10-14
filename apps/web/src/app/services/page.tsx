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
  Shield,
  MessageSquare,
  Eye,
  Sliders,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — 6 Distinct Capabilities & Intelligence Suite | STRATUM",
  description:
    "Explore Stratum's 6 core service lines: Research, Intelligence, Opportunity, Intermediation, Market Access, and Digital Market, along with our comprehensive Intelligence Suite.",
};

export const SERVICES_CATALOG = [
  {
    id: "research",
    number: "01",
    name: "Research",
    kicker: "PRIMARY GROUND TRUTH & DATA COLLECTION",
    headline: "Market research, consumer insights, brand tracking, product testing and data collection.",
    description:
      "We execute primary fieldwork to uncover what is actually happening in commercial channels and consumer households. Where desk research only sees formal retail, Stratum deploys double-blind censuses, sensory testing, and longitudinal panels across traditional dukas, spazas, and open-air marketplaces.",
    icon: Compass,
    capabilities: [
      {
        title: "Consumer Insights & Household Panels",
        desc: "Longitudinal tracking of household wallet share, purchasing priorities, and inflation coping strategies.",
      },
      {
        title: "Informal Retail & Kiosk Audits",
        desc: "GPS-verified censuses of dukas, kiosks, and street stalls mapping shelf share, stockout frequency, and real pricing.",
      },
      {
        title: "Product & Sensory Testing",
        desc: "Central-location sensory trials, blind taste comparisons, pack ergonomics, and localized formulation fit.",
      },
      {
        title: "Brand Tracking & Equity Scans",
        desc: "Periodic brand health measurements, spontaneous recall, NPS benchmarks, and switching dynamics.",
      },
    ],
    sampleDeliverables: [
      "Subnational Retail Census & Out-of-Stock Telemetry",
      "Household Wallet Share & Price Sensitivity Index",
      "Sensory Formulation Fit & Pack Size Matrix",
    ],
    actionCta: {
      label: "Commission a Research Study",
      href: "/contact?cta=COMMISSION_RESEARCH",
    },
  },
  {
    id: "intelligence",
    number: "02",
    name: "Intelligence",
    kicker: "STRATEGIC ANALYSIS & COMPETITOR RIGOR",
    headline: "Market analysis, competitor intelligence, opportunity assessment and strategic insights.",
    description:
      "We convert raw market signals and empirical field datasets into decision-grade strategic intelligence. We analyze competitor velocity, shadow pricing, distribution margins, and regulatory shifts to advise leadership before capital commitment.",
    icon: TrendingUp,
    capabilities: [
      {
        title: "Competitor Intelligence & Velocity Scans",
        desc: "Granular breakdown of competitor SKU margins, wholesaler incentives, and route-to-market trade discounts.",
      },
      {
        title: "Market Sizing & Whitespace Modeling",
        desc: "Econometric TAM/SAM estimation combining formal statistical registers with empirical informal channel volume.",
      },
      {
        title: "Regulatory & Trade Policy Diagnostics",
        desc: "AfCFTA cross-border tariff analysis, subnational licensing compliance, and trade barrier diagnostics.",
      },
      {
        title: "Price Elasticity & Inflation Sensitivity",
        desc: "Modeling unit demand velocity across step price adjustments and single-coin psychological thresholds.",
      },
    ],
    sampleDeliverables: [
      "Executive Competitor Landscape & Margin Diagnostic",
      "Addressable Market Sizing Blueprint (Formal + Informal)",
      "Strategic Market Intelligence Dossier",
    ],
    actionCta: {
      label: "Request Market Intelligence",
      href: "/contact?cta=REQUEST_INTELLIGENCE",
    },
  },
  {
    id: "opportunity",
    number: "03",
    name: "Opportunity",
    kicker: "INVESTMENT SCREENING & SECTOR MAPPING",
    headline: "Investment screening, sector mapping and commercial opportunity identification.",
    description:
      "We identify and pre-screen high-conviction commercial opportunities for institutional investors, corporate acquirers, and expanding enterprises. We map high-growth sector niches, evaluate subnational demand fundamentals, and screen potential targets.",
    icon: Search,
    capabilities: [
      {
        title: "Sector Opportunity Mapping",
        desc: "Identification of supply-demand deficits across consumer goods, renewable energy, healthcare, and agribusiness.",
      },
      {
        title: "Pre-Capital Investment Screening",
        desc: "Ground-level commercial feasibility audits assessing operational risk, customer retention, and true cashflow velocity.",
      },
      {
        title: "Commercial Whitespace Identification",
        desc: "Pinpointing underserved demographic segments, regional secondary cities, and unaddressed consumer price tiers.",
      },
      {
        title: "M&A Commercial Due Diligence",
        desc: "Verifying reported distributor networks, customer references, and physical retail distribution reach.",
      },
    ],
    sampleDeliverables: [
      "Sector Opportunity & Value Chain Map",
      "Investment Screening & Target Assessment Memo",
      "Commercial Feasibility & Risk Scorecard",
    ],
    actionCta: {
      label: "Explore Investment Opportunities",
      href: "/contact?cta=EXPLORE_INVESTMENT",
    },
  },
  {
    id: "intermediation",
    number: "04",
    name: "Intermediation",
    kicker: "BILATERAL B2B CONNECTIONS & SOURCING DESKS",
    headline: "Connecting businesses, investors, suppliers, distributors and strategic partners.",
    description:
      "We bridge the gap between insight and commercial execution. Directed centrally from our Nairobi headquarters, Stratum acts as a trusted, neutral business intermediary—connecting vetted commercial buyers directly with verified manufacturers in Asian production corridors (India & China) and linking regional brands with Tier-1 distributors across African trade channels.",
    icon: Handshake,
    capabilities: [
      {
        title: "Direct Factory Due Diligence & Sourcing",
        desc: "Bilateral technical audits, production verification, and supplier vetting conducted under strict mutual NDAs.",
      },
      {
        title: "Tier-1 Distributor & Partner Pairing",
        desc: "Vetting regional FMCG distributors, cold-chain operators, and local logistics partners with proven balance sheets.",
      },
      {
        title: "Confidential B2B Deal Scoping",
        desc: "Facilitating structured introductory dialogues, commercial terms alignment, and bilateral escrow mechanisms.",
      },
      {
        title: "South-South Trade Intermediation",
        desc: "Direct bilateral sourcing desks connecting verified Asian production corridors with African import commercial networks.",
      },
    ],
    sampleDeliverables: [
      "Audited Manufacturing Plant Due Diligence Dossier",
      "Tier-1 Distributor Matching Matrix & Background Checks",
      "Bilateral Commercial Memorandum of Understanding (MoU)",
    ],
    actionCta: {
      label: "Become a Strategic Partner",
      href: "/contact?cta=STRATEGIC_PARTNER",
    },
  },
  {
    id: "market-access",
    number: "05",
    name: "Market Access",
    kicker: "MARKET ENTRY SUPPORT & EXPANSION",
    headline: "Market-entry support, local partner identification and expansion strategy.",
    description:
      "We design and support on-the-ground market entry roadmaps for enterprises expanding into new jurisdictions. We de-risk foreign entry by identifying local joint venture partners, structuring regulatory compliance, and establishing verified route-to-market distribution channels.",
    icon: Globe2,
    capabilities: [
      {
        title: "Jurisdictional Market Entry Strategy",
        desc: "Custom phased expansion roadmaps balancing initial capital exposure with maximum distribution reach.",
      },
      {
        title: "Local Partner & Operator Identification",
        desc: "Identification and vetting of local operating partners, co-packers, and authorized commercial representatives.",
      },
      {
        title: "Route-to-Market (RTM) Channel Structuring",
        desc: "Designing hybrid distribution models bridging formal modern trade with high-volume informal wholesaler networks.",
      },
      {
        title: "AfCFTA Cross-Border Trade Structuring",
        desc: "Optimizing rules-of-origin documentation, preferential tariff access, and bilateral corridor transit routes.",
      },
    ],
    sampleDeliverables: [
      "Turnkey Jurisdictional Market Entry Roadmap",
      "Vetted Local Co-Packer & Distribution Partner Roster",
      "AfCFTA Cross-Border Trade & Tariff Clearance Model",
    ],
    actionCta: {
      label: "Discuss Market Entry",
      href: "/contact?cta=DISCUSS_MARKET_ENTRY",
    },
  },
  {
    id: "digital-market",
    number: "06",
    name: "Digital Market",
    kicker: "TECHNOLOGY PLATFORM & MARKETPLACE OFFERING",
    headline: "A separate digital platform or marketplace offering, with its own clearly defined features.",
    description:
      "The Stratum Digital Market provides an e-commerce and intelligence gateway for selected products and projects emerging from our research and business ecosystem, creating a pathway between market intelligence, product discovery, and commercial scale.",
    icon: Network,
    capabilities: [
      {
        title: "Digital Market Intelligence Dashboard",
        desc: "Self-service access to high-frequency empirical survey cross-tabs, commodity price trends, and consumer sentiment.",
      },
      {
        title: "Verified B2B Partner Directory",
        desc: "Searchable repository of vetted manufacturers, distributors, cold-chain providers, and trade finance operators.",
      },
      {
        title: "Digital Deal Room Environment",
        desc: "Secure, encrypted repository for sharing due diligence dossiers, product assays, and bilateral contract terms.",
      },
      {
        title: "Commercial Distribution Gateway",
        desc: "E-commerce and marketplace channel supporting the commercialisation and distribution of emerging products.",
      },
    ],
    sampleDeliverables: [
      "Platform Access Architecture & Enterprise API Feeds",
      "Encrypted Deal Room Scoping Module",
      "Continuous Market Pulse & Telemetry Subscription",
    ],
    actionCta: {
      label: "Inquire on Digital Platform",
      href: "/contact?cta=REQUEST_INTELLIGENCE&service=06_DIGITAL_MARKET",
    },
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-18 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-muted/40 text-[11px] font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-foreground font-bold tracking-wide">STRATUM SERVICES ARCHITECTURE</span>
              <span className="text-border">•</span>
              <span className="text-primary font-bold">SIX CORE SERVICE LINES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-foreground tracking-tight leading-[1.15]">
              Six Distinct Capabilities Built for Complex &amp; Emerging Markets
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum presents research, intelligence, opportunity identification, intermediation, market access, and digital market activities as distinct, clearly defined capabilities. Whether you require empirical ground research or direct cross-border partner introductions, each service offers a defined methodology and actionable commercial outcome.
            </p>

            {/* Quick Service Anchor Navigation */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {SERVICES_CATALOG.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/80 bg-card hover:border-primary/50 hover:bg-muted text-xs font-semibold text-foreground transition-all group shadow-2xs cursor-pointer"
                >
                  <span className="text-primary font-mono text-[10px] font-bold">{s.number}</span>
                  <span>{s.name}</span>
                  <ChevronRight className="size-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6 CORE SERVICES DEEP DIVES */}
      <section className="py-12 sm:py-16 space-y-16">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-16">
          {SERVICES_CATALOG.map((service, index) => {
            const Icon = service.icon;
            const isAlternate = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/80 scroll-mt-24 transition-all shadow-xs ${
                  isAlternate ? "bg-muted/15" : "bg-card"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column (5 cols): Overview & CTA */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 shadow-2xs">
                          <Icon className="size-5" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-black text-primary px-2.5 py-0.5 rounded bg-primary/10">
                              SERVICE {service.number}
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-mono uppercase text-muted-foreground font-bold">
                              {service.kicker}
                            </span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground">
                            {service.name}
                          </h2>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-primary/90 leading-snug">
                        {service.headline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Sample Deliverables */}
                    <div className="space-y-2 border-t border-border/60 pt-4">
                      <span className="text-[11px] font-mono uppercase font-bold text-muted-foreground block">
                        Core Structured Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs">
                        {service.sampleDeliverables.map((deliv, i) => (
                          <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                            <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actionable Next Step CTA */}
                    <div className="pt-2">
                      <Link
                        href={service.actionCta.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer shadow-sm group active:scale-[0.99]"
                      >
                        <span>{service.actionCta.label}</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (7 cols): Detailed Capabilities Breakdown */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-[11px] font-mono uppercase font-bold text-muted-foreground block">
                      Operational Capabilities &amp; Field Practice:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.capabilities.map((cap, capIndex) => (
                        <div
                          key={capIndex}
                          className="p-4 rounded-xl border border-border/70 bg-background/80 hover:border-primary/40 hover:bg-background hover:shadow-2xs transition-all space-y-1.5"
                        >
                          <h3 className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-primary shrink-0" />
                            <span>{cap.title}</span>
                          </h3>
                          <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. STRATUM INTELLIGENCE SUITE (FROM ORIGINAL DOCUMENT) */}
      <section className="py-14 sm:py-20 border-t border-b border-border/80 bg-muted/20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
              STRATUM INTELLIGENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-foreground tracking-tight">
              Turning Market Information Into Actionable Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our intelligence services help businesses, brands, investors, and entrepreneurs understand markets, consumers, competitors, products, and emerging opportunities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* 1. Market Research */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <BarChart3 className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Tailored Market Research</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tailored market research for companies seeking to enter, expand, or invest in new markets and sectors.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground text-[11px] font-mono uppercase">What our research covers:</div>
                  <div>• Market size, segmentation and growth dynamics</div>
                  <div>• Consumer behaviour, preferences and consumption</div>
                  <div>• Competitive landscapes and wholesale discounts</div>
                  <div>• Distribution channels and trade corridors</div>
                  <div>• Commercial whitespace and expansion paths</div>
                </div>
              </div>
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="font-bold text-xs text-primary hover:underline flex items-center gap-1 pt-2"
              >
                <span>Commission Study</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 2. Brand Tracking & Online Panels */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Brand Tracking &amp; Online Panels</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Continuously monitor brand health and market perception through structured consumer research, polling, and online panels.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground text-[11px] font-mono uppercase">Core tracking metrics:</div>
                  <div>• Spontaneous &amp; prompted brand awareness</div>
                  <div>• Brand consideration and trial conversion</div>
                  <div>• Usage frequency, repeat buying and preference</div>
                  <div>• Customer perception, trust and reputation</div>
                  <div>• Competitive benchmarking &amp; sentiment analysis</div>
                </div>
              </div>
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="font-bold text-xs text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>Configure Tracking Panel</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 3. Qualitative Research */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Users2 className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Qualitative Research</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Understanding the why behind consumer behaviour. Uncovering motivations, attitudes, experiences, and perceptions.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground text-[11px] font-mono uppercase">Qualitative methodologies:</div>
                  <div>• Focus groups across diverse demographic strata</div>
                  <div>• In-depth interviews (IDIs) in native dialects</div>
                  <div>• Ethnographic and household lifestyle studies</div>
                  <div>• Open-air consumer observation &amp; pantry audits</div>
                  <div>• Concept exploration &amp; behavioural studies</div>
                </div>
              </div>
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="font-bold text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>Schedule Qualitative Study</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 4. Product Testing */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <FlaskConical className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Product &amp; Sensory Testing</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Understanding how consumers respond to products, pack designs, and formulations before making major commercial investments.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground text-[11px] font-mono uppercase">Evaluated dimensions:</div>
                  <div>• Early-stage product concepts &amp; claims</div>
                  <div>• Flavours, aromas, and chemical formulations</div>
                  <div>• Physical product characteristics &amp; ergonomics</div>
                  <div>• Packaging presentation, sachet fit &amp; durability</div>
                  <div>• Real purchase intent &amp; price-value perception</div>
                </div>
              </div>
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="font-bold text-xs text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>Initiate Product Test</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 5. Feedback Gallery */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <MessageSquare className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Feedback Gallery</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hear what the market is saying. A structured view of authentic consumer reactions to your products, services, and brands.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground text-[11px] font-mono uppercase">Feedback captures:</div>
                  <div>• Unfiltered consumer voice &amp; spontaneous feedback</div>
                  <div>• Competitor product critiques &amp; substitution reasons</div>
                  <div>• Identified themes and emerging consumer expectations</div>
                  <div>• Audio snippets and native-vernacular transcripts</div>
                </div>
              </div>
              <Link
                href="/contact?cta=REQUEST_INTELLIGENCE"
                className="font-bold text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 pt-2"
              >
                <span>Access Feedback Gallery</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 6. Stratum Data: Proprietary Datasets */}
            <div className="p-6 rounded-2xl border-2 border-primary/40 bg-primary/5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <Database className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">STRATUM DATA: Proprietary Datasets</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our bespoke and standardised research services generate proprietary datasets covering consumer behaviour, market dynamics, consumption, and distribution.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-primary/20 text-xs text-muted-foreground">
                  <div className="font-semibold text-primary text-[11px] font-mono uppercase">Dataset features:</div>
                  <div>• Continuously refreshed empirical telemetry</div>
                  <div>• GPS spatial outlet mapping &amp; retail price sweeps</div>
                  <div>• Exportable microdata (CSV, SPSS, Excel, APIs)</div>
                  <div>• Fully compliant with KDPA and privacy standards</div>
                </div>
              </div>
              <Link
                href="/contact?cta=REQUEST_INTELLIGENCE"
                className="font-bold text-xs text-primary hover:underline flex items-center gap-1 pt-2"
              >
                <span>Access Market Intelligence &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMBEDDED ACTIONABLE CONSULTATION WORKSPACE */}
      <section className="py-14 sm:py-20 border-t border-border/70 bg-card">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (5 cols): Institutional Advisory Briefing */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-border/80 bg-muted/40 text-[11px] font-mono font-semibold text-muted-foreground">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-foreground font-bold">CLIENT ADVISORY DESK</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-foreground tracking-tight leading-tight">
                  Ready to Initiate a Mandate?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                  Every inquiry is reviewed directly by our practice leads in Nairobi. Select your service line, define your target market corridor, and submit your brief below:
                </p>
              </div>

              {/* Institutional Assurances */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-border/70 bg-background/80 space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <ShieldCheck className="size-4 text-emerald-500" />
                    <span>Bilateral NDA Executed</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Mutual legal confidentiality clearance is in place before exchanging commercially sensitive project information.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border/70 bg-background/80 space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <Building2 className="size-4 text-primary" />
                    <span>Direct Practice Assignment</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Briefs are directly routed to the designated desk lead across our 6 core capabilities.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border/70 bg-background/80 space-y-1 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <Clock className="size-4 text-amber-500" />
                    <span>Scoping Memo &lt; 24 Hours</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Our team prepares an initial methodological design, sample architecture, and engagement proposal promptly.
                  </p>
                </div>
              </div>

              {/* Direct Corporate Hotline */}
              <div className="p-4 rounded-xl border border-border/80 bg-muted/30 text-xs space-y-2">
                <div className="font-mono text-[11px] text-muted-foreground uppercase font-bold">
                  Nairobi Headquarters:
                </div>
                <div className="font-semibold text-foreground">
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
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
