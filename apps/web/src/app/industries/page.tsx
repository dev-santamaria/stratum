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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Market Intelligence Across Diverse Sectors | Stratum",
  description:
    "Stratum provides specialized market research and intelligence across Consumer & Retail, Financial Services, Technology, Agriculture, Healthcare, Energy, and more.",
};

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  headline: string;
  description: string;
}

const INDUSTRIES_CATALOG: IndustryItem[] = [
  {
    id: "consumer-retail",
    name: "Consumer & Retail",
    icon: ShoppingBag,
    headline: "Uncovering Retail Flows across Informal and Modern Trade",
    description:
      "From neighborhood dukas and open-air kiosks to modern retail chains, we capture ground-truth off-shelf velocity, stockout frequencies, and brand loyalty across traditional trade. Through GPS-geofenced kiosk censuses, single-coin price elasticity calibration, and wholesaler rebate mapping, we provide clear visibility into where informal consumer retail volume actually moves.",
  },
  {
    id: "financial-services",
    name: "Financial Services & Fintech",
    icon: Landmark,
    headline: "Mobile Money Adoption, Micro-Credit & Merchant Acceptance",
    description:
      "We evaluate the operational transition between physical currency and digital rails across informal retail corridors. Our studies benchmark merchant mobile money acceptance, interchange friction points, SME cashflow volatility, and agency banking network penetration to guide digital financial product design and regulatory compliance.",
  },
  {
    id: "technology",
    name: "Technology & Digital Platforms",
    icon: Cpu,
    headline: "Platform Adoption, Last-Mile Logistics & B2B SaaS Willingness-to-Pay",
    description:
      "We analyze technology adoption thresholds, digital platform unit economics, and software willingness-to-pay across frontier enterprise environments. Through structured decision-maker interviews, last-mile delivery route audits, and bandwidth-constrained app usability testing, we de-risk market expansion for B2B marketplaces and software platforms.",
  },
  {
    id: "agriculture-food",
    name: "Agriculture & Food Systems",
    icon: Sprout,
    headline: "Value Chain Mapping, Post-Harvest Cold Storage & Off-Grid Agri",
    description:
      "We investigate farm-gate price realization, aggregator margin structures, post-harvest losses, and agricultural input distribution corridors. By auditing rural farmer cooperatives, modeling cold-chain refrigerated logistics economics, and evaluating export trade certification gateways, we connect agricultural potential with commercial scale.",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Stethoscope,
    headline: "Medicine Availability, Counterfeit Audits & Clinic Procurement",
    description:
      "We monitor pharmaceutical supply chain integrity, community clinic procurement, and patient out-of-pocket healthcare expenditures. Through prescription audits, OTC brand substitution sweeps, and direct factory inspections of API manufacturers in Asian production corridors, we ensure pharmaceutical access and distribution compliance.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial Goods",
    icon: Factory,
    headline: "Plant Capacity Verification, Raw Material Sourcing & AfCFTA Readiness",
    description:
      "We assess manufacturing capacity utilization, raw material input inflation, industrial energy benchmarks, and regional trade readiness under AfCFTA guidelines. Our teams conduct on-site physical production line audits, tariff classification reviews, and co-packer due diligence to support industrial expansion and import substitution.",
  },
  {
    id: "energy",
    name: "Energy, Renewables & Utilities",
    icon: Zap,
    headline: "Commercial Solar Feasibility, Off-Grid Demand & Utility Tariffs",
    description:
      "We analyze commercial and industrial (C&I) solar economics, municipal grid reliability, and decentralized mini-grid viability across productive trade zones. By modeling diesel-replacement ROI, evaluating household willingness-to-pay for PAYG solar systems, and reviewing regulatory tariff structures, we support sustainable energy capital commitments.",
  },
  {
    id: "telecommunications",
    name: "Telecommunications & Connectivity",
    icon: PhoneCall,
    headline: "Fiber Feasibility, Tower Economics & Data Basket Affordability",
    description:
      "We evaluate subnational telecommunications spending, smart device financing adoption, fiber-to-the-home viability, and mobile network operator market share dynamics. We analyze consumer airtime wallet share, audit cell tower operating costs, and verify empirical field coverage to inform infrastructure investments.",
  },
  {
    id: "mobility-transport",
    name: "Mobility, Logistics & Transport",
    icon: Truck,
    headline: "Corridor Freight Rates, EV Fleet Trials & Border Transit Efficiency",
    description:
      "We track cross-border logistics friction, port container dwell times, trucking freight tariffs, and urban mobility economics across regional transit corridors. Through total-cost-of-ownership (TCO) benchmarks for commercial EV fleets and customs forwarder due diligence, we provide actionable clarity on freight efficiency.",
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality & Tourism",
    icon: Hotel,
    headline: "Corporate Lodging Trends, Guest Sentiment & Regional Conference Demand",
    description:
      "We measure corporate lodging demand, regional conference bookings, leisure expenditure, and guest satisfaction metrics across prime destination hubs. By benchmarking hotel RevPAR performance, tracking corporate negotiated rates, and analyzing regional aviation connectivity, we support hospitality investment and asset management.",
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    icon: Tv,
    headline: "Audience Measurement, Local Language Audio & Creator Economics",
    description:
      "We quantify vernacular broadcast listenership, television viewership patterns, mobile streaming subscription churn, and creator marketing conversion impact. Using daypart audience diary panels and localized ad-recall studies, we help media brands optimize content programming and advertising spend.",
  },
  {
    id: "consumer-products",
    name: "Consumer Products & Personal Care",
    icon: Package,
    headline: "Sachet Formats, Formulation Fit & Household Daily Expenditure",
    description:
      "We examine daily personal care rituals, sachet format price thresholds, natural ingredient preferences, and distributor inventory turns across FMCG corridors. Our teams conduct in-home pantry audits, consumer sensory fragrance trials, and packaging durability testing to ensure market formulation fit.",
  },
  {
    id: "real-estate",
    name: "Real Estate & Construction",
    icon: Building,
    headline: "Affordable Housing Demand, Building Material Costs & Commercial Land",
    description:
      "We track wholesale building material pricing, residential rental yield profiles, mortgage qualification barriers, and commercial industrial vacancy rates. Through hardware retail censuses, contractor interviews, and urban zoning reviews, we provide developers and financiers with empirical property intelligence.",
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-[1.2]">
              Market Intelligence Across Diverse Sectors
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Our work spans multiple industries and commercial sectors, providing clients with market intelligence tailored to their specific business environment. We capture both macro supply dynamics and localized consumer purchasing habits.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>DISCUSS YOUR INDUSTRY MANDATE</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <span>INSPECT 6 CORE SERVICES</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES MATRIX */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
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
                  className="p-6 rounded-none border border-border/80 bg-card hover:border-primary/50 transition-all duration-200 flex flex-col justify-between space-y-5 group shadow-2xs min-h-[320px]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <div className="size-9 rounded-none bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-primary/20">
                        <Icon className="size-4.5" />
                      </div>
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
                  </div>

                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href={`/contact?industry=${ind.id}`}
                      className="font-bold text-xs uppercase tracking-wider text-primary group-hover:underline flex items-center gap-1.5"
                    >
                      <span>COMMISSION STUDY IN {ind.name}</span>
                      <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE CORPORATE CTA BANNER */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 text-center space-y-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
            Do You Need Intelligence in a Specialized Commercial Sector?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our multidisciplinary practice leads and field researchers design tailored survey instruments, regulatory scans, and B2B partner vetting for your exact sector challenge.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-white text-[#002B49] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>TALK TO STRATUM INDUSTRY DESK</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-none border border-white/30 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>VIEW 6 CORE SERVICE LINES</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
