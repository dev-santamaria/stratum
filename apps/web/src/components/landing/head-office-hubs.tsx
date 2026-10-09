"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Globe2,
  Clock,
  ShieldCheck,
  Mail,
  PhoneCall,
  ArrowUpRight,
  Activity,
  CheckCircle2,
  Layers,
  ArrowRight,
  Lock,
} from "lucide-react";

export interface CommercialHub {
  region: string;
  corridor: string;
  descriptor: string;
  operationalStatus: string;
  capabilities: string[];
  footprint: string;
}

export const COMMERCIAL_HUBS: CommercialHub[] = [
  {
    region: "West Africa",
    corridor: "ECOWAS Trade & Consumer Corridor",
    descriptor: "FMCG Retail Verification & Vernacular Consumer Panels",
    operationalStatus: "Active Fieldwork Corridor (Centrally Directed from Nairobi HQ)",
    capabilities: ["Audited Consumer Panels", "Wholesaler Censuses", "Price Elasticity"],
    footprint: "48,000+ Panelists • 3,800+ Wholesalers",
  },
  {
    region: "Asia (China & India)",
    corridor: "China & India Manufacturing & API Corridors",
    descriptor: "Direct Factory Audits & Pharmaceutical Sourcing Desks",
    operationalStatus: "Bilateral Trade Corridors (Centrally Directed from Nairobi HQ)",
    capabilities: ["Plant Floor Audits", "API & Pharma Sourcing", "Direct B2B Sourcing"],
    footprint: "620+ Audited Plants • 280+ Healthcare Networks",
  },
  {
    region: "North Africa",
    corridor: "Maghreb & Maritime Sourcing Corridors",
    descriptor: "Cross-Border Trade Sourcing & Maritime Port Telemetry",
    operationalStatus: "Cross-Border Sourcing Corridor (Centrally Directed from Nairobi HQ)",
    capabilities: ["Commodity Due Diligence", "Maritime Port Audits", "Currency Tracking"],
    footprint: "Port Customs Telemetry • Bilateral Trade Roadmaps",
  },
  {
    region: "Southern Africa",
    corridor: "SADC Trade & Industrial Corridor",
    descriptor: "Industrial Distribution & Formal Modern Trade Audits",
    operationalStatus: "Regional Fieldwork Network (Centrally Directed from Nairobi HQ)",
    capabilities: ["Modern Retail Scans", "Cold-Chain Integrity", "B2B Trade Audits"],
    footprint: "Subnational Retail Censuses • Tier-1 Distributor Vetting",
  },
  {
    region: "Europe",
    corridor: "European Institutional & Capital Markets Desk",
    descriptor: "Private Equity Due Diligence & Bilateral Deal Rooms",
    operationalStatus: "Institutional Advisory Desk (Centrally Directed from Nairobi HQ)",
    capabilities: ["PE Due Diligence", "AfCFTA Feasibility", "Bilateral Deal Rooms"],
    footprint: "Cross-Border Syndication • Institutional Deal Architecture",
  },
];

interface HeadOfficeHubsProps {
  layoutVariant?: "default" | "compact";
  showContactAction?: boolean;
}

export function HeadOfficeHubs({
  layoutVariant = "default",
  showContactAction = true,
}: HeadOfficeHubsProps) {
  const [currentTimeEAT, setCurrentTimeEAT] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const eatString = now.toLocaleTimeString("en-GB", {
          timeZone: "Africa/Nairobi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setCurrentTimeEAT(`${eatString} EAT (UTC+3)`);
      } catch (e) {
        setCurrentTimeEAT("EAT (UTC+3)");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6" suppressHydrationWarning>
      {/* Top Banner / Concept Pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-primary">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>GLOBAL GOVERNANCE &amp; FIELDWORK ARCHITECTURE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Corporate Head Office &amp; Active Fieldwork Corridors
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Stratum operates its sole registered corporate headquarters and central nerve center in East Africa (Nairobi), orchestrating quantitative field audits and bilateral trade desks across active regional corridors.
          </p>
        </div>

        {/* Live EAT Clock */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border/70 bg-card font-mono text-xs text-foreground shrink-0 shadow-xs">
          <Clock className="size-3.5 text-primary" />
          <span className="text-muted-foreground text-[11px]">Nairobi Time:</span>
          <span className="font-bold">{currentTimeEAT || "09:00:00 EAT (UTC+3)"}</span>
        </div>
      </div>

      {/* Grid: Nairobi Head Office (Left / Dominant) + Commercial Hubs (Right / Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT: Stratum Corporate Head Office & Operations Command (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border-2 border-primary/40 bg-card p-5 sm:p-6 shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden group">
          {/* Subtle gradient glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            {/* Status & Nerve Center Pill */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-mono font-bold tracking-wider">
                <Building2 className="size-3" />
                CORPORATE HEADQUARTERS
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                CENTRAL OPERATIONS COMMAND
              </span>
            </div>

            {/* Title & Core Location */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                SOLE REGISTERED PHYSICAL HEADQUARTERS
              </div>
              <h4 className="text-2xl font-black text-foreground tracking-tight">
                East Africa
              </h4>
              <p className="text-xs font-semibold text-muted-foreground">
                Central Operations Command &amp; Research Nerve Center • Nairobi, Kenya
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                Directs all longitudinal consumer panels, informal retail censuses, plant-floor verifications, econometric modeling, and confidential deal room intermediation globally.
              </p>
            </div>

            {/* Direct Official Desk Channels */}
            <div className="space-y-2 pt-2 border-t border-border/70 text-xs font-mono">
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">
                Official Head Office Communication Desks:
              </span>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-2 rounded-lg bg-muted/40 border border-border/60">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Mail className="size-3 text-primary" /> General Inquiries:
                  </span>
                  <a
                    href="mailto:info@stratumresearchltd.com"
                    className="font-bold text-foreground hover:text-primary transition-colors"
                  >
                    info@stratumresearchltd.com
                  </a>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-muted/40 border border-border/60">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Activity className="size-3 text-emerald-500" /> Research Desk:
                  </span>
                  <a
                    href="mailto:research@stratumresearchltd.com"
                    className="font-bold text-foreground hover:text-primary transition-colors"
                  >
                    research@stratumresearchltd.com
                  </a>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-muted/40 border border-border/60">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Lock className="size-3 text-amber-500" /> B2B Deal Room:
                  </span>
                  <a
                    href="mailto:partners@stratumresearchltd.com"
                    className="font-bold text-foreground hover:text-primary transition-colors"
                  >
                    partners@stratumresearchltd.com
                  </a>
                </div>
              </div>
            </div>

            {/* Assurances & Turnaround SLA */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
              <div className="p-2.5 rounded-lg border border-border/60 bg-muted/20">
                <span className="text-muted-foreground block text-[10px]">Response SLA</span>
                <span className="font-bold text-foreground">&lt; 6 Business Hours</span>
              </div>
              <div className="p-2.5 rounded-lg border border-border/60 bg-muted/20">
                <span className="text-muted-foreground block text-[10px]">Audit Standards</span>
                <span className="font-bold text-foreground">ESOMAR &bull; KDPA &bull; GDPR</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          {showContactAction && (
            <div className="pt-2 relative z-10">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
              >
                <span>Direct Briefing with East Africa HQ</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* RIGHT: Active Fieldwork Corridors & Desks (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Globe2 className="size-3.5 text-primary" />
                ACTIVE OPERATIONAL FIELDWORK CORRIDORS &amp; DESKS
              </span>
              <span className="text-[10px] font-mono text-primary font-semibold">
                Centralized Direction from Nairobi HQ
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              These regional corridors represent active field enumerator networks, vetted distributor channels, and direct factory desks. All operations and client contracts are governed centrally from our East Africa corporate headquarters.
            </p>
          </div>

          {/* Corridors Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMMERCIAL_HUBS.map((hub) => (
              <div
                key={hub.region}
                className={`p-3.5 rounded-xl border border-border/80 bg-card hover:border-primary/40 transition-all space-y-2.5 shadow-xs flex flex-col justify-between ${
                  hub.region.includes("Asia") ? "sm:col-span-2" : ""
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-bold text-sm text-foreground">{hub.region}</span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted/60">
                      {hub.corridor}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-foreground leading-snug">
                      {hub.descriptor}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono">
                      {hub.operationalStatus}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-1 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {hub.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-muted/40 text-muted-foreground border border-border/50"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono text-primary/90 font-medium">
                    Footprint: {hub.footprint}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clarification Callout Note */}
          <div className="p-3 rounded-xl bg-muted/30 border border-border/60 text-[11px] text-muted-foreground flex items-start gap-2.5">
            <ShieldCheck className="size-4 text-primary shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-foreground">Corporate Governance Clarification:</strong> Stratum maintains registered corporate headquarters in Nairobi, Kenya (East Africa). Regional corridors represent dedicated fieldwork infrastructure, audited enumerator teams, and verified trade partners without maintaining independent corporate branch offices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
