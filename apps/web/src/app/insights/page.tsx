import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  FileText,
  TrendingUp,
  Sparkles,
  BookOpen,
  ArrowRight,
  Globe2,
  Calendar,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "Insights & Perspectives — STRATUM Research Ltd",
  description:
    "Explore research reports, market insights, consumer pulse snapshots, and perspectives from Stratum Research across Africa, Asia, and global emerging markets.",
};

const INSIGHT_CATEGORIES = [
  {
    id: "reports",
    title: "Research Reports",
    description: "In-depth Stratum research reports, category audits, and comprehensive sector market studies.",
    icon: FileText,
    badge: "BENCHMARK REPORTS",
    items: [
      {
        title: "The 84% Reality: Mapping Informal Kiosk Retail Volume Across Sub-Saharan Africa",
        category: "Consumer & Retail",
        date: "Q3 2026",
        region: "Kenya, Nigeria & South Africa",
        readTime: "18 min read",
      },
      {
        title: "Cross-Border Commercial Corridors: China & India Trade Intermediation in African Ports",
        category: "B2B Trade & Logistics",
        date: "Q3 2026",
        region: "Mombasa, Lagos & Durban Corridors",
        readTime: "24 min read",
      },
    ],
  },
  {
    id: "market-insights",
    title: "Market Insights",
    description: "Short-form data analysis of consumer behaviour, industries, regulatory shifts, and emerging trends.",
    icon: TrendingUp,
    badge: "SECTOR INTELLIGENCE",
    items: [
      {
        title: "Price Elasticity Thresholds for Ready-to-Drink Beverages in Urban & Peri-Urban Dukas",
        category: "FMCG Telemetry",
        date: "September 2026",
        region: "Nairobi & Lagos Hubs",
        readTime: "8 min read",
      },
      {
        title: "Agricultural Supply Aggregation: Cold-Chain Integrity and Distributor Margins",
        category: "Agri-Business",
        date: "August 2026",
        region: "East & Southern Africa",
        readTime: "11 min read",
      },
    ],
  },
  {
    id: "consumer-pulse",
    title: "Consumer Pulse",
    description: "Real-time snapshots of what consumers are thinking, buying, experiencing, and expecting.",
    icon: Sparkles,
    badge: "DIRECT CONSUMER FEED",
    items: [
      {
        title: "Household Basket Adjustments Under Food Inflation: Weekly Field Intercepts",
        category: "Consumer Behavior",
        date: "Weekly Telemetry",
        region: "Pan-African Panel Network",
        readTime: "6 min read",
      },
      {
        title: "Sensory & Packaging Preferences: Why Localized Visual Language Drives 3x Brand Trial",
        category: "Product Testing",
        date: "July 2026",
        region: "West & Central Africa",
        readTime: "9 min read",
      },
    ],
  },
  {
    id: "perspectives",
    title: "Stratum Perspectives & Blogs",
    description: "Thought leadership, methodological deep-dives, and executive commentary from the Stratum research team.",
    icon: BookOpen,
    badge: "EXECUTIVE PERSPECTIVES",
    items: [
      {
        title: "Why Desk-Based Scrapers Fail in Developing Markets: The Necessity of Human-Ground Telemetry",
        category: "Research Methodology",
        date: "June 2026",
        region: "Global Emerging Markets",
        readTime: "14 min read",
      },
      {
        title: "From Data to Signed Contracts: Structuring B2B Distributor Intermediation Under Bilateral NDAs",
        category: "The Deal Room",
        date: "May 2026",
        region: "London, Nairobi & Shanghai Desks",
        readTime: "12 min read",
      },
    ],
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-5">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-muted/40 text-xs font-semibold text-muted-foreground font-mono">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span>STRATUM INSIGHTS & PERSPECTIVES</span>
              <span>•</span>
              <span className="text-foreground font-bold">INTELLIGENCE WORTH SHARING</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
              Intelligence Worth Sharing: Research, Perspectives & Market Data
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore selected Stratum research reports, short-form market insights, consumer pulse snapshots, and executive perspectives across diverse emerging markets.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all"
              >
                <FileText className="size-3.5" />
                Browse Full Research Reports
                <ArrowRight className="size-3" />
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground font-semibold text-xs hover:bg-muted/60 transition-all shadow-xs"
              >
                <BookOpen className="size-3.5" />
                Read Stratum Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <main className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">
          {INSIGHT_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/60 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4 text-primary" />
                      <h2 className="text-lg sm:text-xl font-bold text-foreground">
                        {cat.title}
                      </h2>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {cat.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item) => (
                    <article
                      key={item.title}
                      className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card hover:border-foreground/30 transition-all flex flex-col justify-between space-y-4 shadow-xs group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                          <span className="text-primary font-semibold">{item.category}</span>
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Globe2 className="size-3 text-muted-foreground" />
                          {item.region}
                        </span>
                        <Link
                          href="/contact"
                          className="font-semibold text-primary group-hover:underline flex items-center gap-1"
                        >
                          Request Study <ArrowRight className="size-3" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Newsletter / Custom Scoping CTA */}
      <section className="py-12 sm:py-16 bg-muted/20 border-b border-border/60">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            Commission a Bespoke Market Study or Briefing
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Need customized telemetry for your product category or target country? Connect with our research directors in Nairobi, Lagos, or London under strict commercial confidentiality.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all"
            >
              Talk to Stratum — Request Research Scope
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
