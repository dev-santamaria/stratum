import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Handshake,
  Layers,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Building2,
  MapPin,
  Lock,
  Compass,
  FileCheck,
  Clock,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Stratum Research Ltd | Market Intelligence & Intermediation",
  description:
    "Learn about Stratum Research Ltd, a market intelligence, strategic research and business intermediation firm helping companies understand markets, identify opportunities and execute growth strategies across Africa and other emerging markets.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">ABOUT STRATUM RESEARCH LTD</span>
              <span className="text-border">•</span>
              <span className="text-foreground">NAIROBI, KENYA HEADQUARTERS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Market Intelligence, Strategic Research &amp; Business Intermediation
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum Research Ltd is a market intelligence, strategic research and business intermediation firm that helps companies understand markets, identify opportunities and execute growth strategies across Africa and other emerging markets.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              As an emerging market-entry and research partner, we bridge first-hand consumer feedback, rigorous field investigations, and strategic B2B connections to turn informed decisions into actionable business possibilities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Explore Our 6 Services</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <span>Discuss an Opportunity</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Philosophy & Foundations */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              OUR FOUNDING THESIS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Why Stratum Was Founded
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In frontier and emerging economies, standardized desk data fails to reflect the commercial reality on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3">
              <Compass className="size-6 text-primary" />
              <h3 className="text-base font-bold text-foreground">
                1. The Informal Trade Blindspot
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Between 70% and 85% of retail commerce across sub-Saharan Africa flows through unmapped neighborhood kiosks, open-air markets, and dukas. Traditional agencies concentrate on modern supermarkets, miscalculating addressable market demand.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3">
              <TrendingUp className="size-6 text-emerald-500" />
              <h3 className="text-base font-bold text-foreground">
                2. The Insight-Execution Divide
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Companies do not need more static 100-page slide decks. They need to know which distributor holds working capital, which packaging size fits the consumer&apos;s daily budget, and how to verify factory floor capabilities before wiring funds.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/80 bg-card space-y-3">
              <Handshake className="size-6 text-purple-500" />
              <h3 className="text-base font-bold text-foreground">
                3. The South-South Opportunity
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Commercial trade flows between Africa, China, and India are accelerating rapidly under AfCFTA protocols. Stratum establishes dedicated bilateral sourcing and diligence desks to eliminate multi-tier brokerage markups and counterfeit risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Team Experience */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              EXPERIENCE OF THE TEAM
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Demonstrated Multidisciplinary Expertise
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              As an emerging firm, Stratum demonstrates capability through the rich collective experience of our core team and sector advisory council.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2.5">
              <Users2 className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Field Anthropologists &amp; IDI Leads</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Native dialect practitioners who conduct in-depth interviews (IDIs) and consumer intercepts to uncover authentic purchasing motivations.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2.5">
              <Cpu className="size-5 text-emerald-500" />
              <h4 className="text-sm font-bold text-foreground">Econometricians &amp; Data Modelers</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Statisticians specializing in subnational price elasticity curves, household basket modeling, and high-confidence sampling design (95% CI).
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2.5">
              <Building2 className="size-5 text-amber-500" />
              <h4 className="text-sm font-bold text-foreground">FMCG Route-to-Market Directors</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Commercial operators with years of hands-on experience navigating Tier-1 wholesale channels, van distribution, and retail stockout cycles.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2.5">
              <Lock className="size-5 text-purple-500" />
              <h4 className="text-sm font-bold text-foreground">Trade Intermediation &amp; Legal Counsel</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialists in cross-border trade structuring, AfCFTA tariff compliance, factory audits, and milestone-based escrow contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Standards */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              ETHICAL &amp; DATA GOVERNANCE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Research Standards &amp; Client Confidentiality
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We govern every research scope under rigorous scientific and legal safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>ESOMAR Guidelines Alignment</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All fieldwork surveys, double-blind questionnaires, and enumerator training align with the ICC/ESOMAR International Code on Market and Social Research.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                <Lock className="size-4 text-primary" />
                <span>Binding Mutual NDAs</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All client scoping sessions, product formulations, target pricing, and deal rooms operate under legally enforceable non-disclosure agreements.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1.5">
              <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                <Building2 className="size-4 text-blue-500" />
                <span>KDPA &amp; GDPR Privacy Protocols</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Respondent privacy and biometric data adhere strictly to the Kenya Data Protection Act (KDPA 2019) and international data privacy principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="py-14 sm:py-18 bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Connect With Stratum Research Ltd
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Headquartered in Nairobi, Kenya, we assist regional brands, international investors, and expanding enterprises in navigating complex and emerging markets.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
            >
              <span>Commission a Research Study</span>
            </Link>
            <Link
              href="/services"
              className="px-5 py-3 rounded-lg border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              <span>Explore Our 6 Services</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobilePwaBar />
    </div>
  );
}
