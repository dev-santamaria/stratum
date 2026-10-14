"use client";

import React from "react";
import Link from "next/link";
import { StratumLogo } from "../brand/stratum-logo";
import { ShieldCheck, Lock, Globe2, MapPin, Mail, Sparkles, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border/80 text-foreground transition-all">
      {/* 1. Main Footer Navigation Grid */}
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Brand & Official Thesis (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <StratumLogo size="lg" />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Stratum Research Ltd is a market intelligence, strategic research and business intermediation firm helping companies understand markets, identify opportunities and execute growth strategies across Africa and other emerging markets.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground font-semibold">MARKET INTELLIGENCE &bull; STRATEGY &bull; INTERMEDIATION</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                Registered HQ: <span className="text-foreground font-medium">Nairobi, Kenya</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                Direct Line &amp; WhatsApp:{" "}
                <a href="tel:+254721154382" className="text-foreground font-medium hover:underline">
                  +254 721 154382
                </a>
              </div>
              <div className="text-[11px] text-muted-foreground">
                Official Inquiries:{" "}
                <a href="mailto:info@stratumresearchltd.com" className="text-primary hover:underline">
                  info@stratumresearchltd.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: The 6 Service Lines (Priority 2) (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Our 6 Service Lines
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/services#research" className="hover:text-primary transition-colors flex items-center justify-between group">
                  <span>01 Research</span>
                  <span className="text-[10px] text-muted-foreground group-hover:text-primary">Consumer &amp; Field</span>
                </Link>
              </li>
              <li>
                <Link href="/services#intelligence" className="hover:text-primary transition-colors flex items-center justify-between group">
                  <span>02 Intelligence</span>
                  <span className="text-[10px] text-muted-foreground group-hover:text-primary">Market &amp; Competitor</span>
                </Link>
              </li>
              <li>
                <Link href="/services#opportunity" className="hover:text-primary transition-colors flex items-center justify-between group">
                  <span>03 Opportunity</span>
                  <span className="text-[10px] text-muted-foreground group-hover:text-primary">Screening &amp; Mapping</span>
                </Link>
              </li>
              <li>
                <Link href="/services#intermediation" className="hover:text-primary transition-colors flex items-center justify-between group">
                  <span>04 Intermediation</span>
                  <span className="text-[10px] text-muted-foreground group-hover:text-primary">B2B Connections</span>
                </Link>
              </li>
              <li>
                <Link href="/services#market-access" className="hover:text-primary transition-colors flex items-center justify-between group">
                  <span>05 Market Access</span>
                  <span className="text-[10px] text-muted-foreground group-hover:text-primary">Entry &amp; Expansion</span>
                </Link>
              </li>
              <li>
                <Link href="/services#digital-market" className="hover:text-primary transition-colors flex items-center justify-between group">
                  <span>06 Digital Market</span>
                  <span className="text-[10px] text-muted-foreground group-hover:text-primary">Platform Offering</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-border/60">
                <Link href="/solutions" className="font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between">
                  <span>Explore Solutions</span>
                  <ArrowRight className="size-3 text-primary" />
                </Link>
              </li>
              <li>
                <Link href="/industries" className="font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between">
                  <span>Industries We Serve</span>
                  <ArrowRight className="size-3 text-primary" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Actionable Next Steps (2 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Actionable Next Steps
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/contact?cta=COMMISSION_RESEARCH" className="hover:text-primary transition-colors">
                  Commission a Research Study
                </Link>
              </li>
              <li>
                <Link href="/contact?cta=REQUEST_INTELLIGENCE" className="hover:text-primary transition-colors">
                  Request Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/contact?cta=EXPLORE_INVESTMENT" className="hover:text-primary transition-colors">
                  Explore Investment Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact?cta=DISCUSS_MARKET_ENTRY" className="hover:text-primary transition-colors">
                  Discuss Market Entry
                </Link>
              </li>
              <li>
                <Link href="/contact?cta=STRATEGIC_PARTNER" className="hover:text-primary transition-colors">
                  Become a Strategic Partner
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/research-briefs" className="text-primary hover:underline font-semibold flex items-center gap-1">
                  <span>Sample Research Briefs</span>
                  <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional & Governance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Firm &amp; Governance
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Stratum
                </Link>
              </li>
              <li>
                <Link href="/why-stratum" className="hover:text-primary transition-colors">
                  Why Stratum?
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-primary transition-colors">
                  How We Work (5 Stages)
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-primary transition-colors">
                  Insights &amp; Telemetry
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQs &amp; Scoping
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers &amp; Network
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Engagement
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Institutional Governance & Data Privacy Strip */}
      <div className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span className="flex items-center gap-1.5 text-foreground">
              <ShieldCheck className="size-3.5 text-emerald-500" />
              <span>Double-Blind Research Standards</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5 text-primary" />
              <span>Bilateral Mutual NDAs Executed</span>
            </span>
            <span>&bull;</span>
            <span>Kenya Data Protection Act (KDPA) &amp; GDPR Compliant Protocols</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>&copy; {new Date().getFullYear()} Stratum Research Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
