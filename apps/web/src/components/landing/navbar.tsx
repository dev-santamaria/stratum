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
  Vote,
  Cpu,
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

  const isCompanyActive =
    pathname === "/about" || pathname === "/why-stratum" || pathname === "/faq" || pathname === "/how-we-work" || pathname === "/careers";
  const isServicesActive = pathname === "/services" || pathname === "/industries";
  const isPortfolioActive = pathname === "/portfolio" || pathname === "/solutions";
  const isInsightsActive =
    pathname === "/reports" || pathname === "/insights" || pathname === "/blogs" || pathname === "/research-briefs";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-xl transition-all shadow-xs">
      {/* 1. TOP INSTITUTIONAL CONTACT MASTHEAD */}
      <div className="hidden md:block w-full border-b border-border/60 bg-muted/40 py-1.5 text-xs text-muted-foreground">
        <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-primary font-bold">
              <span className="size-1.5 rounded-none bg-emerald-500 animate-pulse" />
              STRATUM RESEARCH LTD
            </span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground hidden lg:inline">
              Market Intelligence &bull; Strategic Research &bull; Business Intermediation
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-mono">
            <a
              href="mailto:info@stratumresearchltd.com"
              className="hover:text-primary transition-colors flex items-center gap-1.5 text-foreground font-medium"
            >
              <Mail className="size-3 text-primary" />
              <span>info@stratumresearchltd.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR: CLEAN, UNCLUTTERED, ALL IN CAPS WITH SUBHEADERS */}
      <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        {/* Brand Logo on the Left */}
        <Link href="/" className="flex items-center group shrink-0" aria-label="STRATUM Homepage">
          <StratumLogo size="md" />
        </Link>

        {/* Desktop Navigation Links — Scaffolded into 5 Elegant Categories in CAPS */}
        <div className="hidden lg:flex items-center justify-end gap-2 xl:gap-4 ml-auto">
          <nav className="flex items-center gap-1 xl:gap-2">
            
            {/* 1. ABOUT (Dropdown with Scaffolded Subheaders) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3 py-2 rounded-none text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer ${
                  isCompanyActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>ABOUT</span>
                <ChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-80 p-2 rounded-none bg-card/95 backdrop-blur-xl border border-border/80 shadow-xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60">
                  CORPORATE PROFILE
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/about" className="flex items-start gap-2.5 w-full">
                    <Building2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">ABOUT STRATUM</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Company mandate, footprint, and executive background.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/why-stratum" className="flex items-start gap-2.5 w-full">
                    <Shield className="size-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">WHY STRATUM?</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Ground truth advantage and quality control.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/how-we-work" className="flex items-start gap-2.5 w-full">
                    <Compass className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">HOW WE WORK</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        5-stage research and intermediation lifecycle.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <div className="px-3 pt-2 pb-1 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-t border-border/60">
                  INSTITUTIONAL
                </div>

                <div className="grid grid-cols-2 gap-1">
                  <DropdownMenuItem asChild className="cursor-pointer p-1.5 rounded-none focus:bg-muted/80">
                    <Link href="/careers" className="text-xs font-bold text-foreground hover:text-primary uppercase tracking-wide">
                      CAREERS
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer p-1.5 rounded-none focus:bg-muted/80">
                    <Link href="/faq" className="text-xs font-bold text-foreground hover:text-primary uppercase tracking-wide">
                      FAQS
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 2. SERVICES (Dropdown with Scaffolded Subheaders) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3 py-2 rounded-none text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer ${
                  isServicesActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>SERVICES</span>
                <ChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-96 p-2 rounded-none bg-card/95 backdrop-blur-xl border border-border/80 shadow-xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60 flex items-center justify-between">
                  <span>SIX CORE CAPABILITIES</span>
                  <Link href="/services" className="text-primary hover:underline text-[10px] font-sans font-semibold uppercase tracking-wider">
                    ALL SERVICES &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-1 pt-1">
                  <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                    <Link href="/services#market-research" className="flex flex-col">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">01. RESEARCH</span>
                      <span className="text-[10px] text-muted-foreground">Field surveys &amp; retail censuses</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                    <Link href="/services#business-intelligence" className="flex flex-col">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">02. INTELLIGENCE</span>
                      <span className="text-[10px] text-muted-foreground">Price &amp; competitor tracking</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                    <Link href="/services#opportunity-assessment" className="flex flex-col">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">03. OPPORTUNITY</span>
                      <span className="text-[10px] text-muted-foreground">TAM/SAM/SOM market sizing</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                    <Link href="/services#intermediation" className="flex flex-col">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">04. INTERMEDIATION</span>
                      <span className="text-[10px] text-muted-foreground">B2B distributor matching</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                    <Link href="/services#market-access" className="flex flex-col">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">05. MARKET ACCESS</span>
                      <span className="text-[10px] text-muted-foreground">Tariffs &amp; route-to-market</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                    <Link href="/services#digital-market" className="flex flex-col">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wide">06. DIGITAL MARKET</span>
                      <span className="text-[10px] text-muted-foreground">E-commerce &amp; deal telemetry</span>
                    </Link>
                  </DropdownMenuItem>
                </div>

                <div className="px-3 pt-2 pb-1 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-t border-border/60 flex items-center justify-between">
                  <span>SECTOR PRACTICES</span>
                  <Link href="/industries" className="text-primary hover:underline text-[10px] font-sans font-semibold uppercase tracking-wider">
                    13+ INDUSTRIES &rarr;
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 3. PORTFOLIO (Dropdown with 4 Pillars & Solutions Subheaders) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3 py-2 rounded-none text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer ${
                  isPortfolioActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>PORTFOLIO</span>
                <ChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-96 p-2 rounded-none bg-card/95 backdrop-blur-xl border border-border/80 shadow-xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60 flex items-center justify-between">
                  <span>FOUR STRATEGIC PILLARS</span>
                  <Link href="/portfolio" className="text-primary hover:underline text-[10px] font-sans font-semibold uppercase tracking-wider">
                    VIEW PORTFOLIO &rarr;
                  </Link>
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/portfolio#stratum-polls" className="flex items-start gap-2.5 w-full">
                    <Vote className="size-4 text-[#002B49] dark:text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">STRATUM POLLS</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Opinion polling &amp; first-hand consumer feedback telemetry.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/portfolio#stratum-consulting" className="flex items-start gap-2.5 w-full">
                    <TrendingUp className="size-4 text-[#167D3C] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">STRATUM CONSULTING</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Brand growth strategies and sustainable B2B intermediation.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/portfolio#stratum-digital" className="flex items-start gap-2.5 w-full">
                    <Globe2 className="size-4 text-[#004B87] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">STRATUM DIGITAL</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Online marketplace for global auctions of products and services.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/portfolio#stratum-ai" className="flex items-start gap-2.5 w-full">
                    <Cpu className="size-4 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">STRATUM A.I.</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Artificial intelligence data models &amp; workplace productivity training.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <div className="px-3 pt-2 pb-1 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-t border-border/60 flex items-center justify-between">
                  <span>TAILORED SOLUTIONS</span>
                  <Link href="/solutions" className="text-primary hover:underline text-[10px] font-sans font-semibold uppercase tracking-wider">
                    ALL SOLUTIONS &rarr;
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 4. INSIGHTS (Dropdown with Subheaders) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1.5 px-3 py-2 rounded-none text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer ${
                  isInsightsActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>INSIGHTS</span>
                <ChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-80 p-2 rounded-none bg-card/95 backdrop-blur-xl border border-border/80 shadow-xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60">
                  PUBLICATIONS &amp; RESEARCH
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/insights" className="flex items-start gap-2.5 w-full">
                    <BarChart3 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">INSIGHTS HUB</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Market analysis and macro consumer trends.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/research-briefs" className="flex items-start gap-2.5 w-full">
                    <FileText className="size-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">SAMPLE RESEARCH BRIEFS</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Scoping charters and illustrative study designs.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/reports" className="flex items-start gap-2.5 w-full">
                    <Database className="size-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">CATEGORY REPORTS</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Deep-dive published category benchmarks.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-none focus:bg-muted/80">
                  <Link href="/blogs" className="flex items-start gap-2.5 w-full">
                    <BookOpen className="size-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wide">STRATUM PERSPECTIVES</div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Essays on African retail and business corridors.
                      </p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 5. CONTACT (Direct Link in CAPS) */}
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-none text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                pathname === "/contact"
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Primary Action Button in CAPS */}
          <div className="flex items-center gap-2 pl-2">
            <Link
              href="/contact?cta=COMMISSION_RESEARCH"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs group"
            >
              <span>COMMISSION A STUDY</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contact?cta=COMMISSION_RESEARCH"
            className="px-3 py-2 rounded-none bg-primary text-primary-foreground font-semibold text-[11px] uppercase tracking-wider"
          >
            COMMISSION STUDY
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-none border border-border text-foreground hover:bg-muted cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean, Structured in CAPS with Subheaders) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card p-4 space-y-4 animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          {/* Mobile Inquiries strip */}
          <div className="p-2.5 rounded-none bg-muted/60 text-xs font-mono flex items-center justify-between">
            <span className="text-muted-foreground text-[11px]">OFFICIAL INQUIRIES:</span>
            <a href="mailto:info@stratumresearchltd.com" className="text-primary hover:underline font-semibold text-xs">
              info@stratumresearchltd.com
            </a>
          </div>

          <nav className="flex flex-col space-y-3">
            {/* Section 1: Core Navigation in CAPS */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground px-2">
                MAIN NAVIGATION
              </span>
              <div className="grid grid-cols-2 gap-1 pt-1">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  ABOUT
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  SERVICES
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-primary hover:bg-muted"
                >
                  PORTFOLIO
                </Link>
                <Link
                  href="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  SOLUTIONS
                </Link>
                <Link
                  href="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  INDUSTRIES
                </Link>
                <Link
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  INSIGHTS
                </Link>
                <Link
                  href="/research-briefs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  BRIEFS
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-none text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Section 2: 4 Strategic Pillars in CAPS */}
            <div className="space-y-1 pt-2 border-t border-border">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary px-2">
                FOUR STRATEGIC PILLARS
              </span>
              <div className="space-y-0.5 pt-1">
                <Link
                  href="/portfolio#stratum-polls"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-none text-xs font-semibold text-foreground hover:bg-muted block"
                >
                  1. STRATUM POLLS
                </Link>
                <Link
                  href="/portfolio#stratum-consulting"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-none text-xs font-semibold text-foreground hover:bg-muted block"
                >
                  2. STRATUM CONSULTING
                </Link>
                <Link
                  href="/portfolio#stratum-digital"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-none text-xs font-semibold text-foreground hover:bg-muted block"
                >
                  3. STRATUM DIGITAL
                </Link>
                <Link
                  href="/portfolio#stratum-ai"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-none text-xs font-semibold text-foreground hover:bg-muted block"
                >
                  4. STRATUM A.I.
                </Link>
              </div>
            </div>

            {/* Bottom Action in CAPS */}
            <div className="pt-2">
              <Link
                href="/contact?cta=COMMISSION_RESEARCH"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider shadow-sm"
              >
                <span>COMMISSION A STUDY</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
