import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  ShieldCheck,
  Users2,
  Zap,
  Compass,
  Globe2,
  Phone,
  Target,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Stratum Research Ltd | Market Intelligence & Intermediation",
  description:
    "Learn about Stratum Research Ltd: our mission, vision, core values, and pan-African market intelligence and business intermediation capabilities.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Page Hero Header: Minimal, Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Market Intelligence, Strategic Research &amp; Business Intermediation
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum Research Ltd is a market intelligence and business intermediation firm helping companies understand markets, identify opportunities, and execute growth strategies across Africa and emerging corridors.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>OUR 6 SERVICES</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>PORTFOLIO</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION & OUR VISION (Clean Sharp-Edged Colored Cards) */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Our Mission &amp; Our Vision
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Guiding our commercial advisory, data telemetry, and cross-continental intermediation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Mission Card: Midnight Navy (#002B49) */}
            <div className="bg-[#002B49] text-white border border-[#003A63] rounded-none p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm min-h-[250px] hover:border-sky-400/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-start border-b border-white/15 pb-4">
                  <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white">
                    <Target className="size-4.5 text-sky-200" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-sky-200/80 block">
                    HOW WE DRIVE IMPACT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    Our Mission
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-normal">
                  We are bridging investment gaps for high-impact entrepreneurs through real time insights, market intelligence and cross-continental investment intermediation.
                </p>
              </div>
            </div>

            {/* Vision Card: Rich Forest Emerald (#167D3C) */}
            <div className="bg-[#167D3C] text-white border border-[#1B9447] rounded-none p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm min-h-[250px] hover:border-emerald-300/50 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-start border-b border-white/15 pb-4">
                  <div className="size-9 rounded-none bg-white/15 border border-white/20 flex items-center justify-center text-white">
                    <Sparkles className="size-4.5 text-emerald-100" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-200/80 block">
                    CENTRE OF EXCELLENCE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    Our Vision
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-100 font-normal">
                  Our vision is to be a global centre of excellence that empowers brands to build systems that solve high-value problems through data-driven insights and market trend analysis.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR CORE VALUES (Clean Cards: Navy, Emerald, Sapphire) */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-10">
          
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The core principles defining our service delivery, client partnerships, and data integrity:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Value 1: INTEGRITY */}
            <div className="p-7 sm:p-8 rounded-none border border-border/80 bg-card space-y-5 flex flex-col justify-between shadow-2xs hover:border-[#002B49] dark:hover:border-sky-400 transition-colors min-h-[260px]">
              <div className="space-y-4">
                <div className="flex items-center justify-start border-b border-border/60 pb-3">
                  <div className="size-10 rounded-none bg-[#002B49] text-white flex items-center justify-center">
                    <ShieldCheck className="size-5 text-sky-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    FOUNDATIONAL PILLAR
                  </span>
                  <h3 className="text-lg font-bold text-foreground tracking-wide uppercase">
                    INTEGRITY
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                  At Stratum, we value impactful results and client satisfaction. This is why integrity is a core pillar of our operations. We believe that to deliver desirable results for our clients, both honesty and consistency have to be part of the service delivery process.
                </p>
              </div>
            </div>

            {/* Value 2: CLIENT CENTERED APPROACH */}
            <div className="p-7 sm:p-8 rounded-none border border-border/80 bg-card space-y-5 flex flex-col justify-between shadow-2xs hover:border-[#167D3C] dark:hover:border-emerald-400 transition-colors min-h-[260px]">
              <div className="space-y-4">
                <div className="flex items-center justify-start border-b border-border/60 pb-3">
                  <div className="size-10 rounded-none bg-[#167D3C] text-white flex items-center justify-center">
                    <Users2 className="size-5 text-emerald-200" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    BESPOKE SOLUTIONS
                  </span>
                  <h3 className="text-lg font-bold text-foreground tracking-wide uppercase">
                    CLIENT CENTERED APPROACH
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                  At Stratum, we believe in giving our clients value for their money. This is why we offer bespoke services, depending on a client&apos;s business needs, market gaps and desired objectives.
                </p>
              </div>
            </div>

            {/* Value 3: RAPID ADAPTATION */}
            <div className="p-7 sm:p-8 rounded-none border border-border/80 bg-card space-y-5 flex flex-col justify-between shadow-2xs hover:border-[#004B87] dark:hover:border-cyan-400 transition-colors min-h-[260px]">
              <div className="space-y-4">
                <div className="flex items-center justify-start border-b border-border/60 pb-3">
                  <div className="size-10 rounded-none bg-[#004B87] text-white flex items-center justify-center">
                    <Zap className="size-5 text-cyan-200" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    EVOLVING INTELLIGENCE
                  </span>
                  <h3 className="text-lg font-bold text-foreground tracking-wide uppercase">
                    RAPID ADAPTATION
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                  As a data-dependent service provider, Stratum believes that consumer data points, market trends, digital infrastructure and analysis models are rapidly evolving. This is why we make regular adjustments in our systems to ensure accuracy in predicting market trends and consumer behaviours.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHY STRATUM WAS FOUNDED: BRIEF INSTITUTIONAL THESIS (Clean & Minimal) */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Solving the Frontier Data Gap
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Standardized desk data misses where authentic African retail commerce transacts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="p-6 rounded-none border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="size-9 rounded-none bg-primary/10 flex items-center justify-center text-primary">
                <Compass className="size-4.5" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                1. The Informal Trade Reality
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Over 80% of retail transactions flow through open-air markets and neighborhood dukas. We conduct first-hand fieldwork where real commerce transacts.
              </p>
            </div>

            <div className="p-6 rounded-none border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="size-9 rounded-none bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="size-4.5" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                2. Execution-Oriented Insights
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Beyond static decks, we identify which distributors have working capital, verify warehouse capabilities, and match verified partners.
              </p>
            </div>

            <div className="p-6 rounded-none border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="size-9 rounded-none bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Globe2 className="size-4.5" />
              </div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                3. Cross-Continental Corridors
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Facilitating trade and investment corridors across Africa, Asia, and global markets under AfCFTA protocols to eliminate multi-tier markups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CORPORATE CTA BANNER: Sleek Midnight Navy */}
      <section className="py-14 sm:py-18 bg-[#002B49] text-white border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Ready to Gather Ground Truth &amp; Execute Growth?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you need rapid opinion polling, distributor due diligence, retail outlet audits, or applied AI models, our Nairobi desk is ready to support your commercial mandate.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="tel:+254721154382"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <Phone className="size-3 text-emerald-400" />
                <span>CALL NAIROBI HQ</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
