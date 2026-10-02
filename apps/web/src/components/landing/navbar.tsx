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

  const isInsightsActive =
    pathname === "/reports" || pathname === "/insights" || pathname === "/blogs";
  const isCompanyActive =
    pathname === "/about" || pathname === "/why-stratum" || pathname === "/careers";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-xl transition-all">
      <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8 xl:px-10">
        {/* Brand Logo on the Left */}
        <Link href="/" className="flex items-center group shrink-0">
          <StratumLogo size="md" />
        </Link>

        {/* Desktop Navigation Links with Clean Modern Dropdowns */}
        <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-5 ml-auto">
          <nav className="flex items-center gap-1 xl:gap-1.5">
            {/* 1. Solutions (Direct Link) */}
            <Link
              href="/solutions"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-normal transition-all whitespace-nowrap ${
                pathname === "/solutions"
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Solutions
            </Link>

            {/* 2. How We Work (Direct Link) */}
            <Link
              href="/how-we-work"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-normal transition-all whitespace-nowrap ${
                pathname === "/how-we-work"
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              How We Work
            </Link>

            {/* 3. Intelligence & Insights (Modern Dropdown Menu) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                  isInsightsActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>Intelligence & Insights</span>
                <ChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-80 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-2 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60">
                  Research & Thought Leadership
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/reports" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-foreground">Market Reports</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">
                        Deep-dive sector studies & cross-border market intelligence
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/insights" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-foreground">Market Insights</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">
                        Executive briefing notes, telemetry & consumer pulse
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/blogs" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                      <BookOpen className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-foreground">Editorial & Blogs</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">
                        Long-form analysis on trade corridors & consumer shifts
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 4. Company (Modern Dropdown Menu) */}
            <DropdownMenu>
              <DropdownMenuTrigger
                suppressHydrationWarning
                className={`group inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium tracking-normal transition-all whitespace-nowrap outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                  isCompanyActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>Company</span>
                <ChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-80 p-2 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl space-y-1 z-50 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-2 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60">
                  About Stratum
                </div>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/about" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-foreground">About Us</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">
                        Our mission, governance & emerging market presence
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/why-stratum" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Compass className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-foreground">Why Stratum</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">
                        Ground-truth telemetry vs legacy desk research
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer p-2 rounded-xl focus:bg-muted/80">
                  <Link href="/careers" className="flex items-start gap-3 w-full">
                    <div className="size-8 rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-foreground">Careers</div>
                      <div className="text-[11px] text-muted-foreground leading-snug">
                        Join our field researchers, data scientists & strategists
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 5. Contact (Direct Link) */}
            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-normal transition-all whitespace-nowrap ${
                pathname === "/contact"
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Subtle Vertical Divider */}
          <div className="h-4 w-px bg-border/80" />

          {/* Action CTA */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm active:scale-[0.99]"
            >
              Talk to Stratum
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/contact"
            className="sm:inline-flex hidden items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-lg bg-primary text-primary-foreground"
          >
            Talk to Stratum
          </Link>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border/80 text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Clean Categorized Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border/80 bg-background/98 backdrop-blur-2xl px-5 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Core Navigation */}
          <div className="space-y-1">
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                pathname === "/solutions"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted/60 text-foreground"
              }`}
            >
              <span>Solutions Portfolio</span>
              <ArrowRight className="size-3 opacity-60" />
            </Link>

            <Link
              href="/how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                pathname === "/how-we-work"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted/60 text-foreground"
              }`}
            >
              <span>How We Work (5 Stages)</span>
              <ArrowRight className="size-3 opacity-60" />
            </Link>
          </div>

          {/* Intelligence & Insights Group */}
          <div className="pt-2 border-t border-border/60 space-y-1">
            <span className="px-3 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
              Intelligence & Insights
            </span>
            <div className="grid grid-cols-1 gap-1 pt-1">
              <Link
                href="/reports"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                <FileText className="size-3.5 text-blue-500" />
                <span>Market Reports</span>
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                <TrendingUp className="size-3.5 text-emerald-500" />
                <span>Market Insights</span>
              </Link>
              <Link
                href="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                <BookOpen className="size-3.5 text-purple-500" />
                <span>Editorial & Blogs</span>
              </Link>
            </div>
          </div>

          {/* Company Group */}
          <div className="pt-2 border-t border-border/60 space-y-1">
            <span className="px-3 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
              Company
            </span>
            <div className="grid grid-cols-1 gap-1 pt-1">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                <Building2 className="size-3.5 text-cyan-500" />
                <span>About Us</span>
              </Link>
              <Link
                href="/why-stratum"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                <Compass className="size-3.5 text-amber-500" />
                <span>Why Stratum</span>
              </Link>
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                <Briefcase className="size-3.5 text-rose-500" />
                <span>Careers</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                <PhoneCall className="size-3.5 text-primary" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-3 border-t border-border/60 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-bold py-2.5 rounded-lg bg-primary text-primary-foreground shadow-sm"
            >
              Talk to Stratum — Advisory Intake
            </Link>
            <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
              <span className="flex items-center gap-1">
                <Shield className="size-3 text-emerald-500" />
                POPIA / NDPR / GDPR Compliant
              </span>
              <span className="font-mono text-[10px]">54 AU Corridors</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
