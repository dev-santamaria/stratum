import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { SampleResearchBriefs } from "@/components/research/sample-research-briefs";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sample Research Briefs & Scoping Blueprints — Stratum Research Ltd",
  description:
    "Inspect Stratum's sample research briefs, scoping charters, and methodological sample architectures across FMCG retail distribution, pharmaceutical cold-chain verification, and commercial opportunity screening.",
};

export default function ResearchBriefsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. Hero Header: Minimalist Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 stratum-grid-bg bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Sample Research Briefs &amp; Scoping Blueprints
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              As an emerging market intelligence firm, Stratum demonstrates capability through transparent research design, clear problem framing, and statistically grounded sample architectures (95% CI). Inspect our sample briefs below to evaluate our analytical rigor.
            </p>

            {/* Verification Trust Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-background border border-border/80">
                <CheckCircle2 className="size-3 text-primary" />
                <span>DOUBLE-BLIND ENUMERATION</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-background border border-border/80">
                <ShieldCheck className="size-3 text-emerald-500" />
                <span>STATISTICAL 95% CONFIDENCE INTERVAL</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-background border border-border/80">
                <Compass className="size-3 text-primary" />
                <span>SUBNATIONAL GPS GEOFENCING</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-background border border-border/80">
                <Lock className="size-3 text-primary" />
                <span>BILATERAL NDA CLEARANCE</span>
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>VIEW REPORTS</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>ALL SERVICES</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Research Briefs Inspector Component */}
      <section className="py-10 sm:py-14 bg-background border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <SampleResearchBriefs />
        </div>
      </section>

      {/* 3. SIGNATURE MIDNIGHT NAVY CORPORATE CTA BANNER (#002B49) */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                Ready to Commission a Statistically Grounded Field Study?
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Whether entering a new East African retail corridor or verifying cross-border supplier credentials, our senior sector leads draft tailored sample architectures and scoping memos within 48 hours.
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
                href="/how-we-work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-transparent text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <span>HOW WE WORK</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
