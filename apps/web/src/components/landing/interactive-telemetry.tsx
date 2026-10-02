"use client";

import React, { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Handshake,
  Layers,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function InteractiveTelemetry() {
  const [activeTab, setActiveTab] = useState<"signals" | "deals" | "calibration">("signals");

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border/80 px-4 py-3 bg-muted/40 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Stratum Intelligence Engine
            </span>
          </div>
          <span className="hidden sm:inline-block text-border text-xs">|</span>
          <span className="hidden sm:inline-block text-[11px] text-muted-foreground font-mono">
            CLUSTER: PAN-AFRICA & GLOBAL FRONTIER • 54 MARKETS ACTIVE
          </span>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="flex items-center rounded-lg bg-background/80 p-0.5 border border-border/60 text-xs">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setActiveTab("signals")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === "signals"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Activity className="size-3.5" />
            <span className="hidden xs:inline">Live Signals</span>
          </button>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setActiveTab("deals")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === "deals"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Handshake className="size-3.5" />
            <span className="hidden xs:inline">Deal Pipeline</span>
          </button>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setActiveTab("calibration")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === "calibration"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cpu className="size-3.5" />
            <span className="hidden xs:inline">Hybrid Calibration</span>
          </button>
        </div>
      </div>

      {/* Dynamic Content Body */}
      <div className="p-4 sm:p-6 min-h-[300px]">
        {activeTab === "signals" && (
          <div className="space-y-3.5 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
              <span>STREAMING FRONTIER TELEMETRY (PAN-AFRICA & GLOBAL SOUTH)</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                ● 184 PULSES / MIN
              </span>
            </div>

            {/* Signal Item 1 */}
            <div className="p-3.5 rounded-xl border border-border/60 bg-background/60 hover:bg-muted/40 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800">
                      <MapPin className="size-2.5" /> WEST AFRICA CORRIDOR
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                      FMCG & BEVERAGES
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                    Rapid 38% consumption shift to functional fortified malt beverages among urban 18–34 cohort.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 justify-end">
                    <TrendingUp className="size-3" /> +38.4%
                  </span>
                  <span className="text-[10px] text-muted-foreground">Confidence: 94.2%</span>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="size-3 text-emerald-500" /> 3,100 field respondents + 10,000 synthetic twins
                </span>
                <span className="font-mono text-[10px]">8m ago</span>
              </div>
            </div>

            {/* Signal Item 2 */}
            <div className="p-3.5 rounded-xl border border-border/60 bg-background/60 hover:bg-muted/40 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800">
                      <MapPin className="size-2.5" /> EAST AFRICA TRADE CORRIDOR
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                      RETAIL TRADE & MOBILE MONEY
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                    Price elasticity resistance threshold identified at KSh 45 for daily personal care sachets in peri-urban kiosks.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-0.5 justify-end">
                    Elasticity: -0.28
                  </span>
                  <span className="text-[10px] text-muted-foreground">Audit Verified</span>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-blue-500" /> GPS geofenced: 240 modern trade kiosk audits
                </span>
                <span className="font-mono text-[10px]">21m ago</span>
              </div>
            </div>

            {/* Signal Item 3: MENA / Global Linkage */}
            <div className="p-3.5 rounded-xl border border-border/60 bg-background/60 hover:bg-muted/40 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800">
                      <MapPin className="size-2.5" /> MENA & GULF CORRIDOR
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                      CROSS-BORDER AGRI-FOOD
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                    Gulf institutional capital mandate matched with 4 vetted cold-chain logistics providers across East & North Africa.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-0.5 justify-end">
                    Deal Fit: 96.4%
                  </span>
                  <span className="text-[10px] text-muted-foreground">Due Diligence Active</span>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="size-3 text-emerald-500" /> Bilateral NDA Executed • Deal Room #DR-904
                </span>
                <span className="font-mono text-[10px]">38m ago</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "deals" && (
          <div className="space-y-3.5 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
              <span>CROSS-BORDER INTERMEDIATION PIPELINE</span>
              <span className="font-mono font-semibold text-foreground">
                $185,400,000 ACTIVE VALUE
              </span>
            </div>

            {/* Deal Item 1 */}
            <div className="p-4 rounded-xl border border-border/60 bg-background/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      DEAL ROOM #DR-882
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">WEST AFRICA EXPANSION</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground mt-1">
                    Organic Functional Nutrition: Exclusive Nigeria Distribution Network
                  </h4>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-sm font-extrabold text-foreground font-mono">$3,850,000 USD</span>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">STAGE: TERM SHEET</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-3.5 space-y-1.5">
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>Due Diligence & Cold-Chain Audit</span>
                  <span className="font-semibold text-foreground">92% Ready</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 w-[92%]" />
                </div>
              </div>
            </div>

            {/* Deal Item 2 */}
            <div className="p-4 rounded-xl border border-border/60 bg-background/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      DEAL ROOM #DR-741
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">EAST AFRICA CORRIDOR</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground mt-1">
                    Clean Tech Agri-Processing: Kenya & Tanzania Regional Distributor
                  </h4>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-sm font-extrabold text-foreground font-mono">$1,920,000 USD</span>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">STAGE: MATCHMAKING</p>
                </div>
              </div>

              <div className="mt-3.5 space-y-1.5">
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>3 Vetted Tier-1 Distributors Matched</span>
                  <span className="font-semibold text-foreground">AI Match Score: 95.8%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 w-[68%]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "calibration" && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs text-muted-foreground pb-1">
              <span>SYNTHETIC + HUMAN HYBRID PANEL BENCHMARK</span>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                Moat: Ground-Truth Verified
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Box 1 */}
              <div className="p-4 rounded-xl border border-border/60 bg-background/60 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                  Cycle Time Reduction
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-foreground font-mono">0.5 Days</span>
                  <span className="text-xs text-muted-foreground line-through">vs 45 Days</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Rapid concept testing via 50,000 synthetic respondent twins prior to real human fieldwork.
                </p>
                <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  ⚡ 99% Time Reduction
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-4 rounded-xl border border-border/60 bg-background/60 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                  Ground-Truth Accuracy Moat
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-foreground font-mono">94.8%</span>
                  <span className="text-xs text-muted-foreground">Correlation</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Models calibrated continuously against 190,000+ real face-to-face and mobile survey responses.
                </p>
                <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                  🎯 Zero-Drift Calibration
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-muted/40 border border-border/40 text-xs text-muted-foreground flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Zap className="size-3.5 text-amber-500" />
                Validating concepts before physical inventory packaging or cross-border shipping.
              </span>
              <span className="font-semibold text-foreground cursor-pointer hover:underline">
                View Whitepaper →
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Telemetry Footer Status */}
      <div className="px-4 py-3 border-t border-border/80 bg-muted/20 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Audit Engine Active
          </span>
          <span className="hidden sm:inline-block">
            GPS Stamped • Acoustic VAD Verified • NDPR Compliant
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          STRATUM CORE CLUSTER
        </span>
      </div>
    </div>
  );
}
