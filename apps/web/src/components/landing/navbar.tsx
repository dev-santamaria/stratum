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
  Mail,
  MapPin,
  Network,
  Users2,
  Phone,
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

  const isServicesActive = pathname === "/services";
  const isSolutionsActive = pathname === "/solutions";
  const isIndustriesActive = pathname === "/industries";
  const isInsightsActive =
    pathname === "/reports" || pathname === "/insights" || pathname === "/blogs" || pathname === "/research-briefs";
  const isCompanyActive =
    pathname === "/about" || pathname === "/why-stratum" || pathname === "/faq";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-xl transition-all shadow-xs">
      {/* 1. TOP INSTITUTIONAL CONTACT MASTHEAD (Wordpress / Corporate Reference Standard) */}
      <div className="hidden md:block w-full border-b border-border/60 bg-muted/40 py-1.5 text-xs text-muted-foreground">
        <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-primary font-bold">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              STRATUM RESEARCH LTD
            </span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground hidden lg:inline">
              Market Intelligence &bull; Strategic Research &bull; Business Intermediation
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-mono">
            <a
              href="tel:+254721154382"
              className="hover:text-primary transition-colors flex items-center gap-1 text-foreground font-medium"
            >
              <Phone className="size-3 text-emerald-600 dark:text-emerald-400" />
              <span>Nairobi HQ: +254 721 154382</span>
            </a>
            <span className="text-border hidden sm:inline">•</span>
            <a
              href="mailto:info@stratumresearchltd.com"
              className="hover:text-primary transition-colors flex items-center gap-1 hidden sm:flex text-foreground font-medium"
            >
              <Mail className="size-3 text-primary" />
              <span>info@stratumresearchltd.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        {/* Brand Logo on the Left */}
        <Link href="/" className="flex items-center group shrink-0" aria-label="STRATUM Homepage">
          <StratumLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-5 ml-auto">
          <nav className="flex items-center gap-0.5 xl:gap-1">
            {/* 1. About Stratum (Dropdown Menu) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
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
                className="w-80 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <DropdownMenuItem asChild className="cursor-pointer p-2.5 rounded-xl focus:bg-muted/80">
                  <Link href="/about" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">About Stratum</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Intelligence that moves business forward across diverse markets.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2.5 rounded-xl focus:bg-muted/80">
                  <Link href="/why-stratum" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Why Stratum?</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Deep market understanding, quality control, and proprietary intelligence.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2.5 rounded-xl focus:bg-muted/80">
                  <Link href="/faq" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">FAQs</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Methodology, sampling, NDAs, turnaround, and deliverables.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 2. Solutions (Dedicated Page) */}
            <Link
              href="/solutions"
              className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap ${
                isSolutionsActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Solutions
            </Link>

            {/* 3. Services (Dropdown Menu with the 6 Service Lines & Intelligence Suite) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
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
                className="w-96 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60 flex items-center justify-between">
                  <span>Six Core Capabilities</span>
                  <Link href="/services" className="text-primary hover:underline lowercase font-sans text-[11px] font-medium">
                    view all services &rarr;
                  </Link>
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/services#research" className="flex items-start gap-2.5 w-full">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-muted text-foreground mt-0.5">
                      01
                    </span>
                    <div>
                      <div className="text-xs font-bold text-foreground">Research</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Market research, consumer insights, brand tracking, product testing &amp; field audits.
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
                      <div className="text-xs font-bold text-foreground">Intelligence</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Market analysis, competitor intelligence, opportunity assessment &amp; strategic foresight.
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
                      <div className="text-xs font-bold text-foreground">Opportunity</div>
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
                      <div className="text-xs font-bold text-foreground">Intermediation</div>
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
                      <div className="text-xs font-bold text-foreground">Market Access</div>
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
                      <div className="text-xs font-bold text-foreground">Digital Market</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        A dedicated digital platform for telemetry, product commercialisation, and deal rooms.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 4. Industries (Dedicated Page) */}
            <Link
              href="/industries"
              className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap ${
                isIndustriesActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Industries
            </Link>

            {/* 5. How We Work */}
            <Link
              href="/how-we-work"
              className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap ${
                pathname === "/how-we-work"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              How We Work
            </Link>

            {/* 6. Insights & Reports (Dropdown) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                  isInsightsActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>Insights</span>
                <ChevronDown className="size-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-80 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/insights" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <BarChart3 className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Insights Hub</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Research reports, market insights, and consumer pulse telemetry.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/research-briefs" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Sample Research Briefs</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Clearly labelled illustrative scoping charters and study designs.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/reports" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Database className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Research Reports</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Deep-dive category studies across key emerging markets.
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
                      <div className="text-xs font-bold text-foreground">Stratum Perspectives</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Articles exploring markets, brands, and consumer dynamics.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 7. Careers */}
            <Link
              href="/careers"
              className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap ${
                pathname === "/careers"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Careers
            </Link>

            {/* 8. Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-normal transition-all whitespace-nowrap ${
                pathname === "/contact"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary Action Button (Wordpress Corporate Standard) */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs group"
            >
              <span>Talk to Stratum</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact"
            className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs"
          >
            Talk to Stratum
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-muted"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card p-4 space-y-4 animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          {/* Mobile Hotline strip */}
          <div className="p-2.5 rounded-lg bg-muted/60 text-xs font-mono flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-primary font-bold">Nairobi Executive Desk:</span>
              <a href="tel:+254721154382" className="text-foreground font-bold hover:underline">
                +254 721 154382
              </a>
            </div>
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Official Inquiries:</span>
              <a href="mailto:info@stratumresearchltd.com" className="text-primary hover:underline">
                info@stratumresearchltd.com
              </a>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              About Stratum
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Our Solutions
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              6 Core Service Lines
            </Link>
            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Industries We Serve
            </Link>
            <Link
              href="/how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              How We Work (5 Stages)
            </Link>
            <Link
              href="/why-stratum"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Why Stratum?
            </Link>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Insights &amp; Reports
            </Link>
            <Link
              href="/research-briefs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Sample Research Briefs
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Careers &amp; Life at Stratum
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Frequently Asked Questions (FAQ)
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-foreground hover:bg-muted"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-2 border-t border-border/60">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider"
            >
              <span>Talk to Stratum</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
