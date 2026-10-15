import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { HeroCarousel } from "@/components/landing/hero-carousel";
import { ServicesSlider } from "@/components/landing/services-slider";
import { InfographicTable } from "@/components/landing/infographic-table";
import {
  ArrowRight,
  Globe2,
  ShoppingBag,
  Landmark,
  Cpu,
  Sprout,
  Stethoscope,
  Factory,
  Zap,
  PhoneCall,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Stratum Research Ltd — Market Intelligence & Business Intermediation",
  description:
    "Helping businesses, investors, brands, and entrepreneurs understand markets, identify opportunities, and execute growth strategies across Africa and emerging corridors.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* 1. Global Navigation Header */}
      <Navbar />

      {/* 2. Full-Bleed Background Photographic Slider with Gradient Overlay */}
      <HeroCarousel />

      {/* 3. EXECUTIVE PROPOSITION STATEMENT (Minimal, Executive, Non-Redundant) */}
      <section className="py-12 sm:py-14 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Cols: Concise Proposition */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
                <Globe2 className="size-3 text-primary shrink-0" />
                <span>STRATUM RESEARCH LTD &bull; NAIROBI ADVISORY DESK</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground tracking-tight leading-snug">
                Empirical Intelligence That Moves Business Forward
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal max-w-2xl">
                Stratum Research Ltd is a market intelligence and business intermediation firm helping companies, investors, and brands make informed commercial decisions in complex and emerging African markets.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
                >
                  <span>ABOUT STRATUM</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/how-we-work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/90 bg-background hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
                >
                  <span>OUR METHODOLOGY</span>
                </Link>
              </div>
            </div>

            {/* Right 5 Cols: Key Institutional Metrics (No heavy cards) */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="p-4 rounded-none border border-border/80 bg-card text-center space-y-1 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-primary">13+</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Industry Sectors
                </div>
              </div>

              <div className="p-4 rounded-none border border-border/80 bg-card text-center space-y-1 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">54</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Trade Corridors
                </div>
              </div>

              <div className="p-4 rounded-none border border-border/80 bg-card text-center space-y-1 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#004B87] dark:text-sky-400">100%</div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Primary Ground Truth
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOUR STRATEGIC PILLARS INFOGRAPHIC (Stratum Polls, Stratum Consulting, Stratum Digital, Stratum A.I.) */}
      <InfographicTable />

      {/* 5. SIX CORE SERVICES (DARK GREEN BACKGROUND SLIDER) */}
      <ServicesSlider />

      {/* 6. INDUSTRY PRACTICES (Compact WordPress Sector Tiles) */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-4xl">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-none border border-border/80 bg-muted/40 text-[10px] font-mono font-semibold text-primary uppercase">
                <span>SECTORS WE COVER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Specialized Practice Across 13+ Industries
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground font-semibold text-xs uppercase tracking-wider transition-all shrink-0 shadow-2xs"
            >
              <span>ALL 13+ PRACTICES &rarr;</span>
            </Link>
          </div>

          {/* 8 Featured Sectors: Sharp WordPress Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
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
                  className="p-3.5 rounded-none border border-border/80 bg-card hover:border-primary/50 hover:bg-muted/30 transition-all text-center space-y-1.5 flex flex-col items-center justify-center group shadow-2xs"
                >
                  <div className="size-8 rounded-none bg-muted/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-[11px] font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {sector.name}
                  </span>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. SLEEK CORPORATE CTA BANNER (Replaces heavy 330-line interactive console for a fast, minimal page) */}
      <section className="py-14 sm:py-18 bg-[#002B49] text-white border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/10 border border-white/20 text-[10px] font-mono font-semibold text-emerald-300 uppercase tracking-wider">
              ENGAGE STRATUM RESEARCH LTD
            </span>
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
