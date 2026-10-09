"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe2,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  MapPin,
  Building2,
  Database,
  Briefcase,
} from "lucide-react";

export interface RegionalCorridor {
  id: string;
  name: string;
  kicker: string;
  isHeadquarters?: boolean;
  hubRole: string;
  summary: string;
  activeVectors: string[];
  metrics: { label: string; value: string }[];
  compliance: string;
  turnaroundSLA: string;
}

export const REGIONAL_CORRIDORS: RegionalCorridor[] = [
  {
    id: "east-africa",
    name: "East Africa",
    kicker: "PRIMARY OPERATIONAL COMMAND & HEADQUARTERS",
    isHeadquarters: true,
    hubRole: "Central Corporate Headquarters & Longitudinal Telemetry Command",
    summary:
      "Stratum's physical corporate headquarters and primary telemetry nerve center. Houses our senior econometricians, field directors, and central consumer panel aggregation infrastructure.",
    activeVectors: [
      "GPS-acoustic informal retail audits across dukas and open-air markets",
      "56,000+ member mobile money liquidity & daily expenditure panel",
      "Subnational consumer goods price elasticity monitoring",
      "Cross-border transit corridor price monitoring (Mombasa & interior corridors)",
    ],
    metrics: [
      { label: "Active Panelists", value: "56,000+" },
      { label: "Retail Outlets Audited", value: "14,200+" },
      { label: "Physical Command", value: "Nairobi HQ" },
    ],
    compliance: "ESOMAR Corporate Member • Data Protection Act Verified",
    turnaroundSLA: "Immediate Intake • Preliminary telemetry within 6 hours",
  },
  {
    id: "west-africa",
    name: "West Africa",
    kicker: "REGIONAL FIELDWORK & CONSUMER PANELS",
    hubRole: "FMCG Retail Verification & Vernacular Consumer Intercepts",
    summary:
      "Comprehensive field deployment infrastructure capturing informal retail volume, wholesaler margin spreads, and consumer purchasing sentiment across ECOWAS commercial gateways.",
    activeVectors: [
      "Subnational open-air wholesale market censuses and SKU velocity audits",
      "Sensory formulation & localized packaging perception trials",
      "Bilingual & vernacular interviews across 14+ local dialects",
      "Port-to-interior supply chain friction and tariff tracking",
    ],
    metrics: [
      { label: "Verified Panelists", value: "48,000+" },
      { label: "Wholesalers Mapped", value: "3,800+" },
      { label: "Native Dialects", value: "14 Vernaculars" },
    ],
    compliance: "NDPR Certified • Bilateral Non-Disclosure Agreements",
    turnaroundSLA: "Scoping Brief Delivered in 24 Hours",
  },
  {
    id: "asia-corridors",
    name: "Asia (China & India)",
    kicker: "BILATERAL SOURCING & DIRECT FACTORY AUDITS",
    hubRole: "South-South Cross-Border Trade Desks & Sourcing Verification",
    summary:
      "Specialized bilateral trade desks connecting commercial buyers directly to audited manufacturing plants in Guangdong/Zhejiang and verified pharmaceutical API suppliers in Mumbai/Gujarat.",
    activeVectors: [
      "Direct on-site manufacturing plant floor audits and license verification",
      "Pharmaceutical API supply chain integrity and cold-chain logging",
      "Factory-direct price benchmarking and AfCFTA tariff roadmaps",
      "B2B supplier due diligence and bilateral escrow intermediation",
    ],
    metrics: [
      { label: "Audited Factories", value: "620+ Plants" },
      { label: "Pharma Importers", value: "280+ Networks" },
      { label: "Active Pipeline", value: "$185M+" },
    ],
    compliance: "Bilateral NDA Protocol • International Quality Audits",
    turnaroundSLA: "Direct Desk Engagement in 12 Hours",
  },
  {
    id: "north-africa",
    name: "North Africa",
    kicker: "REGIONAL TELEMETRY & MARITIME TRADE",
    hubRole: "Cross-Border Trade Sourcing & Macroeconomic Telemetry",
    summary:
      "Telemetry infrastructure evaluating Mediterranean-Red Sea trade flows, agri-commodity price stability, and industrial distribution corridors across Maghreb and regional markets.",
    activeVectors: [
      "Maritime port logistics velocity and customs clearance benchmarking",
      "Agri-business and cold-chain distribution network evaluations",
      "Currency volatility and foreign exchange liquidity risk modeling",
      "Cross-border investor matching and joint-venture scoping",
    ],
    metrics: [
      { label: "Audited Corridors", value: "5 Sea Gateways" },
      { label: "Enterprises Tracked", value: "1,200+" },
      { label: "Trade Flow", value: "Pan-Regional" },
    ],
    compliance: "ESOMAR Standards • Trade Corridor Compliance",
    turnaroundSLA: "Scoping Notes in 24 Hours",
  },
  {
    id: "southern-africa",
    name: "Southern Africa",
    kicker: "RETAIL & INDUSTRIAL DISTRIBUTION NETWORKS",
    hubRole: "Formal Trade Scans & Mining Supply Intermediation",
    summary:
      "Research networks monitoring modern supermarket penetration, spaza retail transition dynamics, and industrial procurement supply chains across SADC corridors.",
    activeVectors: [
      "Dual-channel modern supermarket vs informal spaza share scans",
      "Industrial & mining equipment distribution channel vetting",
      "Middle-class consumer basket expenditure and brand loyalty tracking",
      "Cross-border logistics benchmarking across SADC road transit routes",
    ],
    metrics: [
      { label: "Channel Outlets", value: "8,500+" },
      { label: "Industrial Desks", value: "SADC Network" },
      { label: "Field Precision", value: "99.2% GPS" },
    ],
    compliance: "POPIA Compliant • Institutional Quality Audits",
    turnaroundSLA: "Scoping Notes in 24 Hours",
  },
  {
    id: "europe",
    name: "Europe",
    kicker: "CROSS-BORDER CAPITAL & INSTITUTIONAL ADVISORY",
    hubRole: "Private Equity, Institutional Investors & M&A Scoping",
    summary:
      "Advisory desk serving international funds, development finance institutions, and multinational brands seeking ground-truth intelligence prior to emerging-market capital deployment.",
    activeVectors: [
      "Commercial due diligence for private equity and venture capital funds",
      "Independent market validation for M&A and asset acquisitions",
      "Bilateral deal room governance under strict confidential NDAs",
      "Subnational risk assessments for sovereign & institutional capital",
    ],
    metrics: [
      { label: "Funds Advised", value: "45+ Capital Pools" },
      { label: "Due Diligence", value: "Audit-Grade" },
      { label: "Advisory Scope", value: "Global North-South" },
    ],
    compliance: "Strict Bilateral NDA • GDPR Compliant",
    turnaroundSLA: "Executive Director Briefing in 6 Hours",
  },
];

export function RegionalCoverageConsole() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("east-africa");

  const activeCorridor =
    REGIONAL_CORRIDORS.find((c) => c.id === selectedRegionId) || REGIONAL_CORRIDORS[0];

  return (
    <div className="rounded-xl border border-border/80 bg-card p-5 sm:p-7 shadow-xs space-y-6">
      {/* Header with Presence Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Globe2 className="size-4 text-primary" />
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wide font-mono">
              Regional Presence &amp; Operational Corridors
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Select an operational corridor to view active field infrastructure, telemetry vectors, and compliance standards.
          </p>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono shrink-0">
          <span className="flex items-center gap-1.5 text-foreground font-semibold">
            <span className="size-2 rounded-full bg-primary" /> Physical Headquarters (East Africa)
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500" /> Active Corridors
          </span>
        </div>
      </div>

      {/* Interactive Region Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {REGIONAL_CORRIDORS.map((corridor) => {
          const isSelected = corridor.id === selectedRegionId;
          return (
            <button
              key={corridor.id}
              type="button"
              suppressHydrationWarning
              onClick={() => setSelectedRegionId(corridor.id)}
              className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary shadow-xs"
                  : "bg-muted/30 border-border/70 hover:bg-muted/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className={isSelected ? "text-primary-foreground font-bold" : "text-muted-foreground"}>
                  {corridor.isHeadquarters ? "HQ HUB" : "CORRIDOR"}
                </span>
                {corridor.isHeadquarters && (
                  <span className={`size-1.5 rounded-full ${isSelected ? "bg-white" : "bg-primary animate-pulse"}`} />
                )}
              </div>
              <div className="text-xs font-bold leading-tight line-clamp-1">
                {corridor.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Corridor Showcase Card */}
      <div className="p-5 sm:p-6 rounded-xl bg-muted/20 border border-border/70 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border/60 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                activeCorridor.isHeadquarters
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground border border-border"
              }`}>
                {activeCorridor.kicker}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{activeCorridor.turnaroundSLA}</span>
            </div>
            <h4 className="text-base font-bold text-foreground">
              {activeCorridor.hubRole}
            </h4>
          </div>

          <Link
            href={`/contact?corridor=${activeCorridor.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-xs hover:bg-primary/90 transition-all self-start sm:self-auto shrink-0"
          >
            <span>Initiate Scope for {activeCorridor.name}</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {activeCorridor.summary}
        </p>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-3 font-mono border-y border-border/60 py-3">
          {activeCorridor.metrics.map((m) => (
            <div key={m.label} className="space-y-0.5">
              <div className="text-base sm:text-lg font-bold text-foreground">{m.value}</div>
              <div className="text-[10px] text-muted-foreground uppercase">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Active Telemetry Vectors */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wide text-foreground">
            Active Telemetry Capabilities &amp; Protocols:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {activeCorridor.activeVectors.map((vector, i) => (
              <div key={i} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span className="leading-snug text-[11px]">{vector}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-muted-foreground border-t border-border/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-600" />
            <span>Audit Standards: {activeCorridor.compliance}</span>
          </div>
          <Link
            href="/contact"
            className="text-primary font-bold hover:underline"
          >
            Request Full Regional Coverage Dossier &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
