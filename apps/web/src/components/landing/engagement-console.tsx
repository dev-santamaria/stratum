"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileText,
  Handshake,
  Lock,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Clock,
  TrendingUp,
  Building2,
  Search,
  FlaskConical,
  ShoppingBag,
  Layers,
} from "lucide-react";

interface ScopingPath {
  id: string;
  tabTitle: string;
  icon: React.ElementType;
  heading: string;
  tagline: string;
  description: string;
  estimatedTimeline: string;
  recommendedSample: string;
  methodology: string;
  deliverables: string[];
  contactIntent: string;
  whatsappMessage: string;
}

const SCOPING_PATHS: ScopingPath[] = [
  {
    id: "market-entry",
    tabTitle: "Market Opportunity & Entry",
    icon: Search,
    heading: "Validate Commercial Viability & Quantify Whitespace",
    tagline: "Pre-Investment Due Diligence & Sizing",
    description:
      "For enterprises and investors seeking to evaluate addressable customer demand, analyze regulatory tariffs, and model subnational unit economics before deploying capital.",
    estimatedTimeline: "2 to 3 Weeks",
    recommendedSample: "n = 600–1,200 Respondents + B2B Stakeholder IDIs",
    methodology: "Double-blind quantitative sampling, policy compliance audit, and competitor margin benchmarking.",
    deliverables: [
      "Addressable Market Sizing Model (TAM/SAM/SOM)",
      "Regulatory & Tariff Route-to-Market Blueprint",
      "Executive Board Presentation & Clean Microdata (CSV/SPSS)",
    ],
    contactIntent: "MARKET_OPPORTUNITY",
    whatsappMessage: "Hello Stratum Team, I would like to scope a Market Opportunity & Feasibility Mandate.",
  },
  {
    id: "informal-retail",
    tabTitle: "Informal Retail & Pricing",
    icon: ShoppingBag,
    heading: "Capture Ground Truth Across Kiosks & Dukas",
    tagline: "Retail Telemetry Where 80%+ of Trade Happens",
    description:
      "For FMCG brands and distributors needing real-time visibility into open-air wholesale hubs, neighborhood duka shelf pricing, stockouts, and consumer substitution patterns.",
    estimatedTimeline: "3 to 4 Weeks",
    recommendedSample: "1,000–2,500 Geostamped Kiosk Audits",
    methodology: "Native-language field enumerators with algorithmic GPS tracking and real-time inventory velocity logging.",
    deliverables: [
      "Subnational Kiosk Census & Out-of-Stock Frequency Matrix",
      "Willingness-to-Pay & Price Elasticity Curve",
      "Competitor Trade Scheme & Margin Benchmark Dossier",
    ],
    contactIntent: "RETAIL_AUDIT",
    whatsappMessage: "Hello Stratum Team, I am interested in scoping an Informal Retail & Kiosk Audit study.",
  },
  {
    id: "product-testing",
    tabTitle: "Product & Sensory Testing",
    icon: FlaskConical,
    heading: "Test Formulations, Packaging & Ergonomics",
    tagline: "Consumer Validation Before Commercial Launch",
    description:
      "For manufacturers and food & beverage companies preparing new product variants, pack size re-engineering, or local vernacular taste testing against market incumbents.",
    estimatedTimeline: "2 to 4 Weeks",
    recommendedSample: "Central Location Sensory Booths (n = 300–800) + In-Home Placements",
    methodology: "Double-blind sensory discrimination trials, packaging ergonomics, and price sensitivity measurement.",
    deliverables: [
      "Blind Palate Preference Matrix vs. Leading Incumbents",
      "Single-Coin Pricing & Packaging Ergonomics Report",
      "Reformulation Recommendations with Sensory Heatmaps",
    ],
    contactIntent: "PRODUCT_TESTING",
    whatsappMessage: "Hello Stratum Team, I want to discuss a Product & Sensory Testing mandate for our brand.",
  },
  {
    id: "b2b-intermediation",
    tabTitle: "B2B Deals & Intermediation",
    icon: Handshake,
    heading: "Vet Partners & Facilitate Commercial Deals",
    tagline: "Connecting Enterprises to Vetted Distributors & Suppliers",
    description:
      "For international companies looking for vetted Tier-1 regional distributors, local manufacturing partners, suppliers, or co-investors with verified warehouse due diligence.",
    estimatedTimeline: "4 to 6 Weeks",
    recommendedSample: "Targeted Shortlist: 8–15 Screened Partner Profiles",
    methodology: "Corporate registry checks, physical facility inspections, financial solvency vetting, and structured Deal Room facilitation.",
    deliverables: [
      "Vetted Partner Due Diligence Dossier with Warehouse Audits",
      "Commercial Terms Term-Sheet & Risk Assessment Memo",
      "Direct Bilateral Deal Room Facilitation in Nairobi HQ",
    ],
    contactIntent: "B2B_INTERMEDIATION",
    whatsappMessage: "Hello Stratum Team, I need commercial intermediation support to find vetted distributors in East Africa.",
  },
];

export function EngagementConsole() {
  const [activeTab, setActiveTab] = useState(SCOPING_PATHS[0].id);

  const selectedPath = SCOPING_PATHS.find((p) => p.id === activeTab) || SCOPING_PATHS[0];
  const Icon = selectedPath.icon;

  return (
    <section className="py-16 sm:py-24 bg-card border-t border-border/80 relative overflow-hidden">
      {/* Decorative background grid subtle wash */}
      <div className="absolute inset-0 stratum-grid-bg opacity-30 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
        
        {/* Section Heading & Context */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold">
            <Layers className="size-3.5" />
            <span>ENGAGE STRATUM // EXECUTIVE SCOPING CONSOLE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-[1.18]">
            Ready to Make Informed Decisions in Complex Markets?
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Select your strategic objective below to interactively preview methodological parameters, estimated field timelines, and custom deliverable dossiers.
          </p>
        </div>

        {/* Unified Tab Selector: Clean Cards with Separator Lines */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border/80 bg-muted/40 backdrop-blur-md overflow-hidden grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border/70 shadow-2xs">
            {SCOPING_PATHS.map((path, idx) => {
              const TabIcon = path.icon;
              const isActive = activeTab === path.id;
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setActiveTab(path.id)}
                  className={`p-4 text-left transition-all relative flex flex-col justify-between gap-2.5 cursor-pointer group ${
                    isActive
                      ? "bg-card text-foreground shadow-xs"
                      : "hover:bg-muted/60 text-muted-foreground"
                  }`}
                >
                  {/* Top indicator bar */}
                  {isActive && <div className="absolute top-0 inset-x-0 h-1 bg-primary" />}

                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-[10px] font-bold ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      PATH 0{idx + 1}
                    </span>
                    <TabIcon
                      className={`size-4 transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                  </div>

                  <div>
                    <h4
                      className={`text-xs font-bold leading-tight line-clamp-1 transition-colors ${
                        isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {path.tabTitle}
                    </h4>
                    <span className="text-[10px] text-muted-foreground line-clamp-1">
                      {path.estimatedTimeline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Scoping Preview Console */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-primary/25 bg-background shadow-md overflow-hidden transition-all duration-300">
          
          {/* Top Panel Banner */}
          <div className="p-6 sm:p-8 bg-muted/20 border-b border-border/70 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary">
                <Icon className="size-4" />
                <span className="uppercase tracking-wider">{selectedPath.tagline}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                {selectedPath.heading}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {selectedPath.description}
              </p>
            </div>

            {/* Quick Timeline & Scope Pill */}
            <div className="shrink-0 p-4 rounded-xl border border-border/80 bg-card space-y-1.5 md:min-w-[200px] shadow-2xs">
              <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <Clock className="size-3.5 text-primary" />
                <span>FIELD TIMELINE</span>
              </div>
              <div className="text-base font-bold text-foreground font-mono">
                {selectedPath.estimatedTimeline}
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                Standard Turnaround Window
              </div>
            </div>
          </div>

          {/* Bottom Detail Matrix: Methodology + Deliverables */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left 6 cols: Methodology & Sampling */}
            <div className="md:col-span-6 space-y-5">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  METHODOLOGICAL STANDARD
                </h4>
                <p className="text-xs text-foreground/90 leading-relaxed bg-muted/30 p-3.5 rounded-xl border border-border/60">
                  {selectedPath.methodology}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  RECOMMENDED SAMPLE PARAMETER
                </h4>
                <div className="p-3.5 rounded-xl border border-border/60 bg-muted/30 text-xs font-medium text-foreground">
                  {selectedPath.recommendedSample}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Key Deliverables & Immediate Dispatch */}
            <div className="md:col-span-6 space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  KEY DELIVERABLE DOSSIERS
                </h4>
                <ul className="space-y-2">
                  {selectedPath.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-foreground/90 font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={`/contact?intent=${selectedPath.contactIntent}`}
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all text-center"
                >
                  <span>Submit Project Brief</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <a
                  href={`https://wa.me/254721154382?text=${encodeURIComponent(selectedPath.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-600/40 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold hover:bg-emerald-100/50 transition-all"
                  title="Connect via WhatsApp"
                >
                  <MessageSquare className="size-3.5" />
                  <span>WhatsApp Desk</span>
                </a>

                <a
                  href="tel:+254721154382"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
                  title="Direct Phone Call"
                >
                  <PhoneCall className="size-3.5 text-primary" />
                  <span className="hidden sm:inline">Call Hotline</span>
                </a>
              </div>

            </div>

          </div>

          {/* Compliance & Governance Assurance Footer Bar */}
          <div className="px-6 py-3.5 bg-muted/40 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-emerald-500" />
              <span>Rigorous Field Data Validation</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="size-3.5 text-primary" />
              <span>Bilateral NDA Executed Prior to Briefing</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="size-3.5 text-blue-500" />
              <span>Nairobi HQ: Delta Corner Tower, Westlands</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
