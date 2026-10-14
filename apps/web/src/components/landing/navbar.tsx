"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StratumLogo } from "../brand/stratum-logo";
import {
  ArrowRight,
  Menu,
  X,
  Shield,
  ChevronDown,
  FileText,
  TrendingUp,
  BookOpen,
  Building2,
  Compass,
  Briefcase,
  Sparkles,
  Layers,
  PhoneCall,
  BarChart3,
  Globe2,
  Handshake,
  Database,
  Search,
  HelpCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isServicesActive = pathname === "/services" || pathname === "/solutions";
  const isInsightsActive =
    pathname === "/reports" || pathname === "/insights" || pathname === "/blogs";
  const isCompanyActive =
    pathname === "/about" || pathname === "/why-stratum" || pathname === "/how-we-work" || pathname === "/careers";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-xl transition-all">
      <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8 xl:px-10">
        {/* Brand Logo on the Left */}
        <Link href="/" className="flex items-center group shrink-0">
          <StratumLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-5 ml-auto">
          <nav className="flex items-center gap-1 xl:gap-1.5">
            {/* 1. Services (Dropdown Menu with the 6 Service Lines) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                  isServicesActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="size-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-88 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60 flex items-center justify-between">
                  <span>6 Distinct Service Lines</span>
                  <Link href="/services" className="text-primary hover:underline lowercase font-sans text-[11px]">
                    view all &rarr;
                  </Link>
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/services#research" className="flex items-start gap-2.5 w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-muted text-foreground mt-0.5">
                      01
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Research</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Market research, consumer insights, brand tracking, product testing &amp; data collection.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/services#intelligence" className="flex items-start gap-2.5 w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-muted text-foreground mt-0.5">
                      02
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Intelligence</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Market analysis, competitor intelligence, opportunity assessment &amp; strategic insights.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/services#opportunity" className="flex items-start gap-2.5 w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-muted text-foreground mt-0.5">
                      03
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Opportunity</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Investment screening, sector mapping &amp; commercial opportunity identification.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/services#intermediation" className="flex items-start gap-2.5 w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-muted text-foreground mt-0.5">
                      04
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Intermediation</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Connecting businesses, investors, suppliers, distributors &amp; strategic partners.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/services#market-access" className="flex items-start gap-2.5 w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-muted text-foreground mt-0.5">
                      05
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Market Access</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Market-entry support, local partner identification &amp; expansion strategy.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/services#digital-market" className="flex items-start gap-2.5 w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-muted text-foreground mt-0.5">
                      06
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Digital Market</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Digital platform and marketplace offering with dedicated intelligence features.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 2. How We Work */}
            <Link
              href="/how-we-work"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap ${
                pathname === "/how-we-work"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              How We Work
            </Link>

            {/* 3. Sample Briefs & Illustrative Analyses (Dropdown Menu) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                  isInsightsActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>Capability &amp; Insights</span>
                <ChevronDown className="size-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-80 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-2 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60">
                  Demonstrated Capability
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/research-briefs" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Sample Research Briefs</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Scoping charters and methodological design templates.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/insights" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <BarChart3 className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Illustrative Market Analyses</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Interactive empirical models, distributions &amp; charts.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/blogs" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Perspectives &amp; Commentary</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Field observations and emerging market trends.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 4. About Stratum (Dropdown Menu) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                  isCompanyActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>About</span>
                <ChevronDown className="size-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-72 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/about" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Firm Overview</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Mission, philosophy, and Nairobi headquarters.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/why-stratum" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Stratum Identity</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Differentiating from legacy consultancies &amp; research agencies.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/faq" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Frequently Asked Questions</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Methodology, NDAs, timelines &amp; deliverables.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/careers" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Careers &amp; Network</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Join our multidisciplinary research fellowship.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact?cta=EXPLORE_INVESTMENT"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/80 bg-card hover:bg-muted/60 text-foreground font-semibold text-sm transition-all shadow-2xs group"
            >
              <span>Discuss an Opportunity</span>
              <ArrowRight className="size-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="px-2.5 py-1 rounded-md bg-primary text-primary-foreground font-bold text-xs"
          >
            Inquire
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-border text-foreground hover:bg-muted"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card p-4 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Our 6 Services
            </Link>
            <Link
              href="/how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              How We Work
            </Link>
            <Link
              href="/research-briefs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Sample Research Briefs
            </Link>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Illustrative Analyses
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              About Stratum
            </Link>
            <Link
              href="/why-stratum"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Stratum Identity &amp; Distinction
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Frequently Asked Questions (FAQ)
            </Link>
          </nav>
          <div className="pt-2 border-t border-border/60">
            <Link
              href="/contact?cta=EXPLORE_INVESTMENT"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider"
            >
              <span>Discuss an Opportunity</span>
              <ArrowRight className="size-3.5 -rotate-45" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
