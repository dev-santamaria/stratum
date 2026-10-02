"use client";

import React from "react";
import Link from "next/link";
import { StratumLogo } from "../brand/stratum-logo";
import { ShieldCheck, Lock, Globe2, MapPin, Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border/80 text-foreground transition-all">
      {/* 1. Main Footer Navigation Grid */}
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Brand & Official Thesis (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <StratumLogo size="md" />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Stratum is a global market intelligence and business intermediation firm helping businesses, investors, brands, and entrepreneurs make informed decisions in complex and emerging markets.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground font-semibold">5+ CONTINENTS • 10M+ RESPONDENTS</span>
              </div>
              <div className="text-[11px] text-muted-foreground">
                Official Inquiries: <a href="mailto:info@stratumresearchltd.com" className="text-primary hover:underline">info@stratumresearchltd.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Research (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Our Solutions
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/solutions#market-opportunity" className="hover:text-primary transition-colors">
                  Market Opportunity
                </Link>
              </li>
              <li>
                <Link href="/solutions#consumer-intelligence" className="hover:text-primary transition-colors">
                  Consumer Intelligence
                </Link>
              </li>
              <li>
                <Link href="/solutions#product-testing" className="hover:text-primary transition-colors">
                  Product & Concept Testing
                </Link>
              </li>
              <li>
                <Link href="/solutions#brand-intelligence" className="hover:text-primary transition-colors">
                  Brand Intelligence
                </Link>
              </li>
              <li>
                <Link href="/solutions#market-entry" className="hover:text-primary transition-colors">
                  Market Entry & Expansion
                </Link>
              </li>
              <li>
                <Link href="/solutions#b2b-intermediation" className="hover:text-primary transition-colors font-semibold text-foreground">
                  Business Intermediation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Intelligence & Data (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Intelligence & Studies
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/reports" className="hover:text-primary transition-colors font-semibold text-foreground">
                  Research Reports
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-primary transition-colors">
                  Stratum Blogs
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-primary transition-colors">
                  Market Insights & Pulse
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-primary transition-colors">
                  How We Work (5 Stages)
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors">
                  Proprietary Datasets
                </Link>
              </li>
              <li>
                <Link href="/solutions#b2b-intermediation" className="hover:text-primary transition-colors">
                  Cross-Border Trade Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Knowledge (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Company & Hubs
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Stratum
                </Link>
              </li>
              <li>
                <Link href="/why-stratum" className="hover:text-primary transition-colors">
                  Why Stratum
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors text-primary font-semibold">
                  Careers at Stratum
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Talk to Stratum
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Governance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/eula" className="hover:text-primary transition-colors font-medium">
                  End User License (EULA)
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors font-medium">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new Event("open-cookie-settings"));
                    }
                  }}
                  className="hover:text-primary transition-colors font-medium text-left cursor-pointer"
                >
                  Cookie Preferences &amp; Settings
                </button>
              </li>
              <li>
                <span className="text-[11px] text-muted-foreground/80 block">
                  ESOMAR Corporate Protocols
                </span>
              </li>
              <li>
                <span className="text-[11px] text-muted-foreground/80 block">
                  Bilateral NDA Data Vault
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Global Operating Hubs & International Corridors */}
        <div className="mt-10 pt-6 border-t border-border/60">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-[11px] text-muted-foreground">
            {/* East Africa Hub: Kenya */}
            <div className="space-y-0.5">
              <span className="font-bold text-foreground flex items-center gap-1">
                <MapPin className="size-3 text-primary" /> Nairobi Hub
              </span>
              <p>Westlands, Nairobi, Kenya</p>
              <span className="text-[10px] font-mono text-primary font-semibold">East Africa Telemetry</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-bold text-foreground flex items-center gap-1">
                <MapPin className="size-3 text-blue-500" /> Lagos Hub
              </span>
              <p>Victoria Island, Lagos, Nigeria</p>
              <span className="text-[10px] font-mono text-muted-foreground">West Africa Commercial Center</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-bold text-foreground flex items-center gap-1">
                <MapPin className="size-3 text-emerald-500" /> Johannesburg Hub
              </span>
              <p>Sandton, Johannesburg, South Africa</p>
              <span className="text-[10px] font-mono text-muted-foreground">Southern Africa Trade Center</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-bold text-foreground flex items-center gap-1">
                <MapPin className="size-3 text-amber-500" /> Cairo Hub
              </span>
              <p>New Cairo, Cairo, Egypt</p>
              <span className="text-[10px] font-mono text-muted-foreground">North Africa & Middle East</span>
            </div>

            <div className="space-y-0.5">
              <span className="font-bold text-foreground flex items-center gap-1">
                <MapPin className="size-3 text-indigo-500" /> London Capital Desk
              </span>
              <p>Mayfair, London, United Kingdom</p>
              <span className="text-[10px] font-mono text-muted-foreground">European & PE Advisory</span>
            </div>

            {/* Asia Corridor: China & India */}
            <div className="space-y-0.5">
              <span className="font-bold text-foreground flex items-center gap-1">
                <Globe2 className="size-3 text-cyan-500" /> Asia Trade Desk
              </span>
              <p>Shanghai & Mumbai Corridors</p>
              <span className="text-[10px] font-mono text-muted-foreground">China & India B2B Intermediation</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal Copyright & Domain Badges */}
        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground font-mono">
          <div>
            © {new Date().getFullYear()} STRATUM RESEARCH LTD (stratumresearchltd.com). ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-3.5" />
              KDPA / NDPR / POPIA / GDPR VERIFIED
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="size-3.5 text-primary" />
              BILATERAL DEAL ROOM VAULT
            </span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-foreground underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground underline">
              Terms
            </Link>
            <Link href="/eula" className="hover:text-foreground underline">
              EULA
            </Link>
            <Link href="/cookies" className="hover:text-foreground underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
