import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Download,
  FileText,
  Filter,
  Globe2,
  Lock,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Research Reports & Market Studies — STRATUM Research Ltd",
  description:
    "Explore selected Stratum research reports, market studies, and consumer telemetry benchmarks across Africa, China, and India commercial corridors.",
};

const REPORTS = [
  {
    id: "rep-01",
    title: "Pan-African FMCG & Informal Retail Price Velocity Report",
    sector: "Consumer & Retail",
    region: "Pan-Africa (54 Nations)",
    published: "Q3 2026",
    sampleSize: "14,200+ Kiosks Audited",
    executiveSummary:
      "A comprehensive ground-truth audit of informal retail kiosks, spaza shops, and open-air markets. Evaluates off-shelf availability, price resistance thresholds, and SKU velocity for staple goods.",
    highlights: [
      "84% of FMCG transaction volume occurs in unmapped informal retail",
      "Subnational price variations up to 38% between coastal ports and interior towns",
      "Stockout rates drop 22% when local wholesale distributors operate verified cold-chains",
    ],
    pages: "64 Pages",
    access: "Instant Access & Executive Deck",
  },
  {
    id: "rep-02",
    title: "East Africa Mobile Money & Consumer Purchasing Telemetry Index",
    sector: "Financial Services & Tech",
    region: "East Africa (Nairobi Hub)",
    published: "Q3 2026",
    sampleSize: "56,000+ Active Panelists",
    executiveSummary:
      "Analyzes the intersection of micro-transactions, digital credit, and daily consumer expenditure across Kenya, Tanzania, Uganda, and Rwanda, anchored by our central Nairobi telemetry command.",
    highlights: [
      "91% digital wallet penetration among peri-urban consumers in East Africa",
      "Correlation between mobile liquidity velocity and immediate FMCG basket size",
      "Cross-border transit corridor price monitoring between Mombasa and Kigali",
    ],
    pages: "48 Pages",
    access: "Institutional Request",
  },
  {
    id: "rep-03",
    title: "China-Africa Trade Corridor: Cross-Border Sourcing & Distributor Vetting",
    sector: "Manufacturing & Wholesale",
    region: "China • East & West Africa",
    published: "Q2 2026",
    sampleSize: "620+ Audited Manufacturers",
    executiveSummary:
      "A strategic assessment of bilateral trade flows between manufacturing hubs in Shenzhen, Guangzhou, and Yiwu, and key African commercial ports (Mombasa, Apapa, Tema, and Durban).",
    highlights: [
      "Direct factory price benchmarking for electronics, solar equipment, and packaging",
      "AfCFTA tariff reduction roadmaps and customs clearance timeline benchmarks",
      "Due diligence protocols for verifying Tier-1 African wholesale importers",
    ],
    pages: "72 Pages",
    access: "Deal Room Confidential",
  },
  {
    id: "rep-04",
    title: "India-Africa Pharmaceutical Distribution & Cold-Chain Integrity Study",
    sector: "Healthcare & Life Sciences",
    region: "India • Sub-Saharan Africa",
    published: "Q2 2026",
    sampleSize: "280+ Healthcare Importers",
    executiveSummary:
      "Field analysis mapping active pharmaceutical ingredient (API) supply chains and finished formulation distribution from Mumbai and Gujarat to healthcare networks across Africa.",
    highlights: [
      "Temperature excursion risks across last-mile interior distribution routes",
      "Counterfeit detection protocols and brand security packaging evaluations",
      "Regulatory approval timelines across ECOWAS, EAC, and SADC health agencies",
    ],
    pages: "58 Pages",
    access: "Executive Consultation",
  },
  {
    id: "rep-05",
    title: "Sensory & Formulation Testing: Consumer Taste Preferences in West Africa",
    sector: "Food & Beverage",
    region: "West Africa (Nigeria & Ghana)",
    published: "Q1 2026",
    sampleSize: "8,500+ Blind Taste Tests",
    executiveSummary:
      "Results from structured sensory taste tests and packaging evaluations across Lagos, Kano, Accra, and Kumasi, demonstrating why direct Western formulations fail without local seasoning adaptation.",
    highlights: [
      "Sweetness and sodium preference curves calibrated across age and income brackets",
      "Packaging resilience under tropical humidity and high-heat transit conditions",
      "Repeat purchase intent scores for local functional herbal beverages",
    ],
    pages: "52 Pages",
    access: "Instant Access",
  },
  {
    id: "rep-06",
    title: "Township Spaza Shop vs Modern Retail Penetration in Southern Africa",
    sector: "Retail & Distribution",
    region: "Southern Africa (SADC)",
    published: "Q1 2026",
    sampleSize: "11,200+ Spaza Merchants",
    executiveSummary:
      "A dual-channel investigation comparing modern supermarket chains against township spaza networks in South Africa, Mozambique, and Zambia.",
    highlights: [
      "Spaza shops account for 68% of daily grocery spend in peri-urban townships",
      "Cashless tap-to-pay adoption rising 45% year-on-year in informal spazas",
      "Tier-1 wholesale cash-and-carry distributor margin analysis",
    ],
    pages: "44 Pages",
    access: "Instant Access",
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              <FileText className="size-3.5" />
              <span>STRATUM RESEARCH REPORTS</span>
              <span className="text-border">•</span>
              <span className="text-foreground">EMPIRICAL MARKET STUDIES</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
              Research Reports &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                Market Studies
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Explore selected Stratum research reports and comprehensive market studies. Our proprietary datasets and on-the-ground fieldwork provide institutional investors, global brands, and enterprises with unvarnished market intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Directory */}
      <section className="py-14 sm:py-18 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
            <span className="text-xs font-mono font-bold text-muted-foreground uppercase">
              SHOWING {REPORTS.length} SELECTED MARKET STUDIES
            </span>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-muted-foreground">FILTER BY CORRIDOR:</span>
              <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-bold">ALL REGIONS</span>
              <span className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground cursor-pointer">EAST AFRICA</span>
              <span className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground cursor-pointer">WEST AFRICA</span>
              <span className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground cursor-pointer">ASIA CORRIDOR</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {REPORTS.map((rep) => (
              <div
                key={rep.id}
                className="p-6 sm:p-7 rounded-2xl border border-border/80 bg-card shadow-sm space-y-5 stratum-card-hover flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                      {rep.sector}
                    </span>
                    <span className="text-muted-foreground font-semibold">
                      {rep.region} • {rep.published}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {rep.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {rep.executiveSummary}
                  </p>

                  <div className="p-3.5 rounded-xl bg-muted/30 border border-border/70 space-y-1.5 text-xs">
                    <span className="font-mono text-[10px] font-bold text-foreground uppercase tracking-wider">
                      Empirical Findings & Key Takeaways:
                    </span>
                    <ul className="space-y-1">
                      {rep.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-muted-foreground text-[11px]">
                          <CheckCircle2 className="size-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <div className="font-mono text-[11px] text-muted-foreground">
                    <span>{rep.pages}</span> • <span>{rep.sampleSize}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all shadow-xs"
                  >
                    Request Full Report <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Research Briefing CTA */}
      <section className="py-14 sm:py-18 bg-muted/15">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Need a Bespoke Market Study Commissioned?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our research team designs tailored quantitative and qualitative studies for single or multi-country rollout across Africa, China, and India.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all"
            >
              Commission Bespoke Study — Talk to Stratum
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
