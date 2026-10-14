import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  ShoppingBag,
  Landmark,
  Cpu,
  Sprout,
  Stethoscope,
  Factory,
  Zap,
  PhoneCall,
  Truck,
  Hotel,
  Tv,
  Package,
  Building,
  CheckCircle2,
  Globe2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Market Intelligence Across Diverse Sectors | Stratum",
  description:
    "Stratum provides specialized market research and intelligence across Consumer & Retail, Financial Services, Technology, Agriculture, Healthcare, Energy, and more.",
};

const INDUSTRIES_CATALOG = [
  {
    id: "consumer-retail",
    name: "Consumer & Retail",
    icon: ShoppingBag,
    kicker: "INFORMAL & MODERN TRADE",
    headline: "Uncovering the 80%+ Retail Flow in Traditional Trade",
    description:
      "From neighborhood dukas and kiosks to modern shopping centers, we capture true off-shelf velocity, out-of-stock frequency, retail margins, and consumer brand loyalty.",
    methodologies: [
      "GPS spatial kiosk censuses and shelf-share tracking",
      "Coin-point price elasticity curves and SKU volume audits",
      "Wholesaler discount and rebate structure mapping",
    ],
  },
  {
    id: "financial-services",
    name: "Financial Services & Fintech",
    icon: Landmark,
    kicker: "BANKING & DIGITAL PAYMENTS",
    headline: "Mobile Money Adoption, Micro-Credit & Merchant Acceptance",
    description:
      "Tracking the transition between physical cash and mobile money, merchant interchange fees, micro-lending default behaviours, and agency banking network penetration.",
    methodologies: [
      "Merchant POS and mobile money acceptance diagnostics",
      "SME cashflow volatility and credit appetite studies",
      "Regulatory compliance & payment interoperability mapping",
    ],
  },
  {
    id: "technology",
    name: "Technology & Digital Platforms",
    icon: Cpu,
    kicker: "B2B SAAS & PLATFORM ECOSYSTEMS",
    headline: "Tech Adoption, Last-Mile Logistics & Digital Commerce",
    description:
      "Evaluating tech platform adoption, software willingness-to-pay, B2B marketplace friction points, and digital consumer acquisition costs across frontier markets.",
    methodologies: [
      "B2B software buyer journeys and decision-maker interviews",
      "Last-mile delivery route optimization benchmarks",
      "App usability trials and bandwidth-constrained performance tests",
    ],
  },
  {
    id: "agriculture-food",
    name: "Agriculture & Food Systems",
    icon: Sprout,
    kicker: "SMALLHOLDER AGRI & COLD-CHAINS",
    headline: "Value Chain Mapping, Post-Harvest Cold Storage & Off-Grid Agri",
    description:
      "Investigating farm-gate pricing, aggregator monopolies, post-harvest losses, cooperative willingness-to-pay for solar refrigeration, and input distribution networks.",
    methodologies: [
      "Rural cooperative surveys and smallholder yield diagnostics",
      "Cold-chain refrigerated transport margin modeling",
      "Export quality certification and bilateral trade gateway audits",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Stethoscope,
    kicker: "PHARMACEUTICALS & CLINICAL ACCESS",
    headline: "Medicine Availability, Counterfeit Audits & Clinic Procurement",
    description:
      "Assessing over-the-counter pharmaceutical stockout rates, active pharmaceutical ingredient (API) sourcing from Asia, community clinic procurement, and patient healthcare expenditure.",
    methodologies: [
      "Pharmacy prescription audits and OTC brand substitution sweeps",
      "Direct Asian pharmaceutical manufacturing plant inspections",
      "Subnational disease burden and healthcare affordability studies",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial Goods",
    icon: Factory,
    kicker: "IMPORT SUBSTITUTION & FACTORY FLOORS",
    headline: "Plant Capacity Verification, Raw Material Sourcing & AfCFTA",
    description:
      "Conducting on-site factory capacity audits, raw material input cost tracking, industrial energy consumption benchmarks, and regional export readiness under AfCFTA rules.",
    methodologies: [
      "Physical manufacturing line inspections and QA verification",
      "Cross-border tariff classification and freight logistics audits",
      "Industrial equipment procurement and co-packer due diligence",
    ],
  },
  {
    id: "energy",
    name: "Energy, Renewables & Utilities",
    icon: Zap,
    kicker: "DECENTRALIZED POWER & MINI-GRIDS",
    headline: "Commercial Solar Feasibility, Off-Grid Demand & Utility Tariffs",
    description:
      "Analyzing commercial and industrial (C&I) solar adoption, microgrid payment collection rates, generator fuel costs, and municipal power grid reliability across industrial belts.",
    methodologies: [
      "Industrial energy audit and diesel-replacement ROI modeling",
      "Off-grid household willingness-to-pay for PAYG solar systems",
      "Mini-grid regulatory tariff approval roadmaps",
    ],
  },
  {
    id: "telecommunications",
    name: "Telecommunications & Connectivity",
    icon: PhoneCall,
    kicker: "INFRASTRUCTURE & BROADBAND ACCESS",
    headline: "Fiber Feasibility, Tower Economics & Data Basket Affordability",
    description:
      "Evaluating subnational data bundle purchasing power, device financing penetration, fiber-to-the-home viability, and mobile network operator market share shifts.",
    methodologies: [
      "Consumer airtime and mobile data basket allocation audits",
      "Telecom tower site lease and power cost diagnostics",
      "Spectrum policy and subnational coverage verification",
    ],
  },
  {
    id: "mobility-transport",
    name: "Mobility, Logistics & Transport",
    icon: Truck,
    kicker: "FLEET ECONOMICS & TRADE CORRIDORS",
    headline: "Corridor Freight Rates, EV 2-Wheeler Fleet Trials & Border Transit",
    description:
      "Tracking maritime port dwell times, cross-border trucking tariffs, informal matatu/boda-boda fuel economics, and electric vehicle battery-swapping station utilization.",
    methodologies: [
      "Transit corridor toll, weighbridge, and dwell time audits",
      "Commercial EV fleet total-cost-of-ownership (TCO) benchmarks",
      "Freight forwarder and customs clearing agent due diligence",
    ],
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality & Tourism",
    icon: Hotel,
    kicker: "BUSINESS TRAVEL & ECO-TOURISM",
    headline: "Occupancy Trends, Guest Sentiment & Regional Conference Demand",
    description:
      "Measuring corporate lodging demand, regional conference bookings, leisure travel expenditure, and international tourist satisfaction metrics across primary tourist corridors.",
    methodologies: [
      "Hotel RevPAR benchmarking and corporate corporate rate tracking",
      "Guest experience Net Promoter Score surveys",
      "Aviation route connectivity and regional passenger flow analysis",
    ],
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    icon: Tv,
    kicker: "CONTENT & DIGITAL STREAMING",
    headline: "Audience Measurement, Local Language Audio & Creator Economics",
    description:
      "Quantifying radio and vernacular television listenership, mobile streaming subscription rates, local influencer conversion impact, and entertainment expenditure.",
    methodologies: [
      "Daypart radio and TV audience diary panels",
      "Mobile streaming data consumption and subscription churn tracking",
      "Vernacular ad-recall and media effectiveness studies",
    ],
  },
  {
    id: "consumer-products",
    name: "Consumer Products & Personal Care",
    icon: Package,
    kicker: "BEAUTY, HYGIENE & PACKAGING",
    headline: "Sachet Formats, Hair & Skin Formulation Fit & Daily Household Spend",
    description:
      "Examining personal care usage rituals, sachet vs bulk purchase preferences, natural ingredient demands, and distributor inventory turnover for beauty and hygiene products.",
    methodologies: [
      "Household bathroom and pantry inventory audits",
      "Sensory touch, lather, and fragrance consumer testing",
      "Packaging leak-resistance and shelf-life simulation trials",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Construction",
    icon: Building,
    kicker: "URBAN INFRASTRUCTURE & HOUSING",
    headline: "Affordable Housing Demand, Building Material Costs & Commercial Land",
    description:
      "Auditing cement and steel wholesale price movements, rental yield profiles, residential buyer mortgage qualification rates, and commercial warehouse vacancy levels.",
    methodologies: [
      "Building material hardware store census and contractor interviews",
      "Urban master-plan zoning and infrastructure readiness reviews",
      "Middle-income household mortgage and rent-to-own willingness studies",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. EXECUTIVE HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-muted/40 text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">SECTOR INTELLIGENCE</span>
              <span className="text-border">•</span>
              <span className="text-foreground">MARKET INTELLIGENCE ACROSS DIVERSE SECTORS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground tracking-tight leading-[1.15]">
              Market Intelligence Across Diverse Sectors
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Our work spans multiple industries and commercial sectors, providing clients with market intelligence tailored to their specific business environment. We capture both macro supply dynamics and localized consumer purchasing habits.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Discuss Your Industry Mandate</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <span>Inspect 6 Core Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES MATRIX */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
              13+ SPECIALIZED SECTOR PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-foreground tracking-tight">
              Sector Expertise Grounded in Emerging Market Dynamics
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In emerging economies, global industry assumptions frequently break down. We deploy specialized sector protocols designed for unmapped distribution channels, localized regulatory environments, and diverse consumer segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {INDUSTRIES_CATALOG.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="p-6 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                        {ind.kicker}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {ind.name}
                    </h3>

                    <div className="text-xs font-semibold text-primary/90 leading-snug">
                      {ind.headline}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2 border-t border-border/60 space-y-1.5">
                      <div className="text-[11px] font-mono font-bold text-foreground uppercase tracking-wide">
                        Core Methodologies:
                      </div>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {ind.methodologies.map((m, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-[11px] leading-snug">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href={`/contact?industry=${ind.id}`}
                      className="font-bold text-xs text-primary group-hover:underline flex items-center gap-1.5"
                    >
                      <span>Commission Study in {ind.name}</span>
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA STRIP */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 text-center space-y-6 max-w-4xl">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            TAILORED INDUSTRY RESEARCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-foreground tracking-tight">
            Do You Need Intelligence in a Specialized Commercial Sector?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our multidisciplinary practice leads and field researchers design tailored survey instruments, regulatory scans, and B2B partner vetting for your exact sector challenge.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
            >
              <span>Talk to Stratum Industry Desk</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
