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
  FileText,
  CheckCircle2,
  Lock,
  Building2,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sample Research Briefs & Scoping Blueprints — Stratum Research Ltd",
  description:
    "Inspect Stratum's sample research briefs, scoping charters, and methodological sample architectures across FMCG retail distribution, pharmaceutical cold-chain verification, and commercial opportunity screening.",
};

export default function ResearchBriefsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-border/70 bg-background overflow-hidden">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">METHODOLOGICAL DEMONSTRATION</span>
              <span className="text-border">•</span>
              <span className="text-foreground">SAMPLE BRIEFS &amp; CHARTERS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-foreground tracking-tight leading-[1.2]">
              Sample Research Briefs &amp; Scoping Blueprints
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              As an emerging market intelligence firm, Stratum demonstrates capability through transparent research design, clear problem framing, and statistically grounded sample architectures (95% CI). Inspect our sample briefs below to evaluate our analytical rigor.
            </p>

            {/* Verification Trust Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <CheckCircle2 className="size-3 text-primary" />
                Double-Blind Enumeration
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <ShieldCheck className="size-3 text-primary" />
                Statistical 95% Confidence Interval
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <Compass className="size-3 text-primary" />
                Subnational GPS Geofencing
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/40 border border-border/60">
                <Lock className="size-3 text-primary" />
                Bilateral NDA Clearance
              </span>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Commission a Custom Brief</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <span>Explore Our 6 Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Research Briefs Inspector Component */}
      <section className="py-10 sm:py-14 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <SampleResearchBriefs />
        </div>
      </section>

      {/* Bottom Consultation Callout */}
      <section className="py-12 sm:py-16 border-t border-border/70 bg-muted/20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-mono text-[11px] font-bold uppercase tracking-wider">
                  <span>CONFIDENTIAL RESEARCH INTAKE</span>
                  <span>•</span>
                  <span>NAIROBI OPERATIONS DESK</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  Ready to Commission a Statistically Grounded Field Study?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Whether entering a new East African retail corridor or verifying cross-border supplier credentials, our senior sector leads draft tailored sample architectures and scoping memos within 48 hours.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" />
                    &lt; 6-Hour Triage SLA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-primary" />
                    Mutual NDA Clearance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building2 className="size-3.5 text-primary" />
                    Delta Corner Tower, Westlands, Nairobi
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/contact?cta=COMMISSION_RESEARCH"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
                >
                  <span>Commission a Research Study</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/contact?cta=DISCUSS_OPPORTUNITY"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>Book an Exploratory Scoping Call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
