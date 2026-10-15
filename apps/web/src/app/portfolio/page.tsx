import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { PortfolioView } from "@/components/portfolio/portfolio-view";
import { ArrowRight } from "lucide-react";

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

      {/* Dynamic Hash-Filtered Portfolio View (Responds to #stratum-polls, #stratum-consulting, etc.) */}
      <PortfolioView />

      {/* Advisory Mandate CTA */}
      <section className="py-12 bg-slate-50 dark:bg-card/30 border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
              Require a Custom Mixed-Method Study or Intermediation Mandate?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our Nairobi advisory desk coordinates nationwide surveys, distributor deal rooms, and applied data analytics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
            >
              <span>Contact Advisory Desk</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none border border-border/80 bg-background hover:bg-muted text-xs font-semibold uppercase tracking-wider text-foreground transition-all shadow-2xs"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
