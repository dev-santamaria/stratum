import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { HeroCarousel } from "@/components/landing/hero-carousel";
import { ServicesSlider } from "@/components/landing/services-slider";
import { EngagementConsole } from "@/components/landing/engagement-console";
import {
  ArrowRight,
  Compass,
  TrendingUp,
  Search,
  Handshake,
  Globe2,
  FileText,
  ShoppingBag,
  Landmark,
  Cpu,
  Sprout,
  Stethoscope,
  Factory,
  Zap,
  PhoneCall,
  Layers,
  FlaskConical,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Stratum Research Ltd — Market Intelligence & Business Intermediation",
  description:
    "Helping businesses, investors, brands, and entrepreneurs understand markets, identify opportunities, and execute growth strategies across Africa and emerging markets.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* 1. Global Navigation Header */}
      <Navbar />

      {/* 2. Hero Photographic Carousel (Refined Typography & Cohesive Card Strip) */}
      <HeroCarousel />

      {/* 3. WHO WE ARE: STRATUM PROPOSITION (STRONG GROUNDED TONE) */}
      <section className="py-16 sm:py-24 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6 Cols: Strategic Statement */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-background text-xs font-mono font-semibold text-primary shadow-2xs">
                <Globe2 className="size-3.5 text-primary shrink-0" />
                <span>ABOUT STRATUM RESEARCH LTD</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.15]">
                Intelligence That Moves Business Forward
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                Stratum Research Ltd is a market intelligence, strategic research, and business intermediation firm helping companies understand markets, identify opportunities, and execute growth strategies across Africa and emerging corridors.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                Through first-hand consumer feedback, empirical fieldwork, and direct B2B connections, we turn complex market realities into actionable intelligence and commercial opportunities.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm"
                >
                  <span>About Stratum</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/90 bg-background hover:bg-muted text-foreground text-xs font-semibold transition-all shadow-2xs"
                >
                  <span>Our Methodology</span>
                </Link>
              </div>
            </div>

            {/* Right 6 Cols: Three Core Strengths */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-colors">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Compass className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">Primary Ground Truth</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    First-hand empirical fieldwork in informal kiosks and open markets where trade happens.
                  </p>
                </div>
                <Link href="/services#market-research" className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline pt-2">
                  <span>Field Studies</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-colors">
                <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">Commercial Foresight</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Predictive market sizing, competitor pricing benchmarks, and whitespace validation.
                  </p>
                </div>
                <Link href="/services#business-intelligence" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 hover:underline pt-2">
                  <span>Intelligence</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-colors">
                <div className="size-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Handshake className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">B2B Intermediation</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Connecting international businesses with vetted regional distributors and institutional partners.
                  </p>
                </div>
                <Link href="/services#intermediation" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline pt-2">
                  <span>Partnerships</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SIX CORE SERVICES (DARK BACKGROUND SLIDER WITH THIN ARROWS) */}
      <ServicesSlider />

      {/* 5. SOLUTIONS BY BUSINESS CHALLENGE (STRUCTURED STRONG ACCENT TONE) */}
      <section className="py-16 sm:py-24 border-b border-border/80 bg-slate-100/70 dark:bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-card text-xs font-mono font-semibold text-primary shadow-2xs">
              <span>SOLUTIONS PRACTICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Tailored Around Your Strategic Challenge
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every mandate starts with a commercial objective. Discover how our research and intermediation practices address your critical decision gates:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
              <div className="space-y-2.5">
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Search className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Market Opportunity &amp; Sizing</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Is there genuine demand for your product? Quantify addressable customer volume and whitespace gaps.
                </p>
              </div>
              <Link href="/solutions#market-opportunity" className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline pt-2 border-t border-border/60">
                <span>View Solution</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
              <div className="space-y-2.5">
                <div className="size-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ShoppingBag className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Consumer &amp; Retail Intelligence</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Who buys, where do they purchase, and what drives brand switching in informal trade channels?
                </p>
              </div>
              <Link href="/solutions#consumer-intelligence" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 hover:underline pt-2 border-t border-border/60">
                <span>View Solution</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
              <div className="space-y-2.5">
                <div className="size-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FlaskConical className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Product &amp; Concept Testing</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Test taste, packaging ergonomics, pack sizes, and price resistance before regional commercialization.
                </p>
              </div>
              <Link href="/solutions#product-testing" className="text-xs font-bold text-blue-600 dark:text-blue-400 inline-flex items-center gap-1 hover:underline pt-2 border-t border-border/60">
                <span>View Solution</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
              <div className="space-y-2.5">
                <div className="size-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Handshake className="size-4" />
                </div>
                <h3 className="text-sm font-bold text-foreground">B2B Partner Due Diligence</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Identify and vet local distributors, evaluate warehouse capacity, and execute bilateral introductions.
                </p>
              </div>
              <Link href="/solutions#intermediation" className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline pt-2 border-t border-border/60">
                <span>View Solution</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

          </div>

          <div className="p-6 rounded-2xl border border-border/80 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Layers className="size-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">Explore all custom business solution practices</h4>
                <p className="text-xs text-muted-foreground">In-depth question frameworks, sampling parameters, and deliverable dossiers on our dedicated solutions page.</p>
              </div>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shrink-0 shadow-sm"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. INDUSTRY PRACTICES (KANTAR STREAMLINED SECTOR GRID) */}
      <section className="py-16 sm:py-24 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-muted/40 text-xs font-mono font-semibold text-primary">
                <span>SECTORS WE COVER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Specialized Practice Across 13+ Industries
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Combining cross-sector research methodologies with deep vertical expertise in supply chains, trade networks, and consumer behavior.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground font-semibold text-xs transition-all shrink-0 shadow-2xs"
            >
              <span>All 13+ Industry Practices</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 8 Featured Sectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {[
              { name: "Consumer & Retail", icon: ShoppingBag, href: "/industries#consumer-retail" },
              { name: "Financial Services", icon: Landmark, href: "/industries#financial-services" },
              { name: "Technology", icon: Cpu, href: "/industries#technology" },
              { name: "Agriculture & Food", icon: Sprout, href: "/industries#agriculture-food" },
              { name: "Healthcare & Pharma", icon: Stethoscope, href: "/industries#healthcare" },
              { name: "Manufacturing", icon: Factory, href: "/industries#manufacturing" },
              { name: "Energy & Utilities", icon: Zap, href: "/industries#energy" },
              { name: "Telecommunications", icon: PhoneCall, href: "/industries#telecommunications" },
            ].map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.name}
                  href={sector.href}
                  className="p-5 rounded-xl border border-border/80 bg-card hover:border-primary/50 hover:bg-muted/30 transition-all text-center space-y-2.5 flex flex-col items-center justify-center group shadow-2xs"
                >
                  <div className="size-10 rounded-xl bg-muted/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {sector.name}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. FEATURED INTELLIGENCE & BRIEFS SPOTLIGHT (WARM SLATE BACKGROUND) */}
      <section className="py-16 sm:py-24 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/80 bg-background text-xs font-mono font-semibold text-primary shadow-2xs">
                <span>THOUGHT LEADERSHIP &amp; METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Latest Insights &amp; Sample Briefs
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Explore our published market essays and transparent sample briefs showing concrete scoping frameworks.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/insights"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all shadow-2xs"
              >
                <BookOpen className="size-3.5 text-primary" />
                <span>Stratum Insights</span>
              </Link>
              <Link
                href="/research-briefs"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
              >
                <FileText className="size-3.5" />
                <span>Sample Briefs</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Brief 1 */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-bold">SAMPLE BRIEF</span>
                  <span>4 WEEKS TIMELINE</span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">
                  FMCG Informal Retail Penetration &amp; Price Elasticity Audit
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Illustrative scoping for a regional beverage manufacturer evaluating 1,200 kiosk audits across Nairobi, Mombasa, and Kisumu.
                </p>
              </div>
              <Link
                href="/research-briefs#brief-retail-audit"
                className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline pt-3 border-t border-border/60"
              >
                <span>Read Full Scoping Memo</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* Insight 2 */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-emerald-600 font-bold">EDITORIAL ESSAY</span>
                  <span>8 MIN READ</span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">
                  Why Supermarket Audits Miss African Retail: The Kiosk Reality
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Field perspectives on why traditional retail audits miss over 80% of daily transactions by ignoring open-air wholesale hubs and residential dukas.
                </p>
              </div>
              <Link
                href="/blogs/why-supermarket-audits-miss-african-retail"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1 hover:underline pt-3 border-t border-border/60"
              >
                <span>Read Editorial Analysis</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* Brief 3 */}
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-4 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-amber-600 font-bold">SAMPLE BRIEF</span>
                  <span>6 WEEKS TIMELINE</span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">
                  B2B Intermediation &amp; Distributor Due Diligence Mandate
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Vetting Tier-1 distributors for an international hardware brand entering East Africa, complete with warehouse capacity audits and commercial matching.
                </p>
              </div>
              <Link
                href="/research-briefs#brief-distributor-intermediation"
                className="text-xs font-bold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1 hover:underline pt-3 border-t border-border/60"
              >
                <span>Read Full Scoping Memo</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 8. INNOVATIVE EXECUTIVE SCOPING CONSOLE (ENGAGE STRATUM) */}
      <EngagementConsole />

      {/* Global Footer */}
      <Footer />

      {/* Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
