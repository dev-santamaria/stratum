import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { InfographicTable } from "@/components/landing/infographic-table";
import {
  ArrowRight,
  Vote,
  TrendingUp,
  Globe2,
  Cpu,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Stratum Strategic Offerings & Practices",
  description:
    "Explore Stratum's core portfolio: Stratum Polls, Stratum Consulting, Stratum Digital marketplace, and Stratum A.I. data refinement models.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* Hero Header */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
            <span>STRATUM STRATEGIC PORTFOLIO</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight">
            Comprehensive Research &amp; Commercial Capabilities
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl font-normal">
            Stratum operates four integrated strategic pillars designed to empower businesses, investors, and public institutions with high-precision consumer feedback, advisory intermediation, digital commerce, and applied artificial intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
            >
              <span>Commission a Study</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all shadow-2xs"
            >
              <span>View All 6 Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Pillars Infographic Table */}
      <InfographicTable />

      {/* Dedicated Deep Dive Sections */}
      <section className="py-14 sm:py-20 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-mono font-bold text-primary tracking-wider uppercase">
              STRATEGIC METHODOLOGIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              How Each Offering Drives Commercial Impact
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tailored delivery frameworks adapted to emerging markets and complex consumer behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Polls Card */}
            <div id="stratum-polls" className="scroll-mt-24 p-6 rounded-none border border-border/80 bg-card space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-9 rounded-none bg-[#002B49] text-white flex items-center justify-center">
                    <Vote className="size-4.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">PILLAR 01</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Stratum Polls</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Stratum collects first-hand consumer feedback through both digital and field-based opinion polling. The outcomes of such exercises are analysed, visualised and published, and a report is dispatched to our clients, with copies archived for future reference and brand tracking.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-primary mt-0.5 shrink-0" />
                    <span>Nationwide digital polling &amp; field-moderated intercept surveys</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-primary mt-0.5 shrink-0" />
                    <span>Longitudinal brand sentiment archives &amp; KPI tracking</span>
                  </div>
                </div>
              </div>
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-3"
              >
                <span>Explore Polling Reports</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 2. Consulting Card */}
            <div id="stratum-consulting" className="scroll-mt-24 p-6 rounded-none border border-border/80 bg-card space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-9 rounded-none bg-[#167D3C] text-white flex items-center justify-center">
                    <TrendingUp className="size-4.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-600">PILLAR 02</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Stratum Consulting</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  With Stratum consulting, our clients gain insights on brand growth strategies and sustainable B2B intermediation.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Route-to-market optimization across traditional &amp; modern channels</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Vetted distributor matching &amp; institutional co-investment deal rooms</span>
                  </div>
                </div>
              </div>
              <Link
                href="/services#intermediation"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline pt-3"
              >
                <span>Learn About B2B Intermediation</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 3. Digital Marketplace Card */}
            <div id="stratum-digital" className="scroll-mt-24 p-6 rounded-none border border-border/80 bg-card space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-9 rounded-none bg-[#004B87] text-white flex items-center justify-center">
                    <Globe2 className="size-4.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-600">PILLAR 03</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Stratum Digital</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Stratum Digital is an online market place, where investors from diverse industries can auction their products and services to consumers from all over the world.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span>Global digital auction infrastructure for products and commercial services</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span>Cross-border settlement escrow &amp; trade verification</span>
                  </div>
                </div>
              </div>
              <Link
                href="/services#digital-market"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline pt-3"
              >
                <span>Digital Marketplace Brief</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* 4. A.I. Models Card */}
            <div id="stratum-ai" className="scroll-mt-24 p-6 rounded-none border border-border/80 bg-card space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="size-9 rounded-none bg-[#1E293B] text-white flex items-center justify-center">
                    <Cpu className="size-4.5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-600">PILLAR 04</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Stratum A.I.</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Stratum A.I. uses artificial intelligence models to refine, analyse, compare and contrast raw data and translate it to actionable insights to our clients through visualised reports. We also train employees from different companies to adapt to contemporary digital infrastructure and how to constructively use A.I. to improve workplace productivity.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Automated anomaly detection, price triangulation &amp; cohort analytics</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Corporate workplace A.I. literacy &amp; productivity enablement workshops</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline pt-3"
              >
                <span>Request A.I. Consultation</span>
                <ArrowRight className="size-3" />
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
