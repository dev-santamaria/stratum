"use client";

import React from "react";
import Link from "next/link";
import { StratumLogo } from "../brand/stratum-logo";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border/80 text-foreground transition-all">
      {/* 1. Main Footer Grid */}
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 py-10 lg:py-14">
        
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex md:items-start md:justify-between gap-8 lg:gap-12">
          
          {/* Brand & Executive Mandate */}
          <div className="space-y-4 max-w-xl">
            <Link href="/" className="inline-block" aria-label="STRATUM Research Ltd">
              <StratumLogo size="lg" />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
              Stratum Research Ltd is an independent market intelligence and commercial intermediation firm delivering empirical ground truth across African trade corridors and frontier economies.
            </p>
          </div>

          {/* Governance & Legal */}
          <div className="space-y-3 shrink-0">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Governance &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors flex items-center justify-between gap-4 group">
                  <span>Privacy Policy</span>
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors flex items-center justify-between gap-4 group">
                  <span>Terms of Engagement</span>
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li>
                <Link href="/eula" className="hover:text-primary transition-colors flex items-center justify-between gap-4 group">
                  <span>End User License (EULA)</span>
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors flex items-center justify-between gap-4 group">
                  <span>Cookie Policy</span>
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact?cta=COMMISSION_RESEARCH"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-primary text-primary-foreground font-semibold text-[11px] uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
                >
                  <span>Commission a Study</span>
                  <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* MOBILE VIEW: Minimal, Clean, Essential Branding & Legal Only */}
        <div className="md:hidden space-y-5">
          <div className="space-y-2.5">
            <Link href="/" className="inline-block" aria-label="STRATUM Research Ltd">
              <StratumLogo size="md" />
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed font-normal">
              Market intelligence &amp; business intermediation across African trade corridors.
            </p>
          </div>

          {/* Mobile Legal Links Row */}
          <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground pt-1 border-t border-border/60">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <span className="text-border">&bull;</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span className="text-border">&bull;</span>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
            <span className="text-border">&bull;</span>
            <Link href="/eula" className="hover:text-foreground transition-colors">
              EULA
            </Link>
          </div>
        </div>

      </div>

      {/* 2. Copyright Strip */}
      <div className="border-t border-border/60 bg-muted/20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 py-3.5 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <div className="text-[11px]">
            <span>&copy; {new Date().getFullYear()} Stratum Research Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
