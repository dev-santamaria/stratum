"use client";

import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { PieChart as PieIcon, TrendingUp, ShieldAlert, Sparkles, Filter } from "lucide-react";

// Channel Share Data across African Markets
const RETAIL_CHANNEL_DATA = [
  { name: "Informal Kiosks & Spazas", value: 68, color: "#1E56FF" },
  { name: "Open-Air Souks & Wholesalers", value: 16, color: "#06B6D4" },
  { name: "Modern Supermarkets", value: 11, color: "#10B981" },
  { name: "Quick Commerce & D2C", value: 5, color: "#F59E0B" },
];

// Price Sensitivity & Velocity across Corridors
const CORRIDOR_TREND_DATA = [
  { corridor: "ECOWAS (Lagos)", elasticity: 72, velocity: 88, confidence: 96 },
  { corridor: "EAC (Nairobi)", elasticity: 64, velocity: 82, confidence: 94 },
  { corridor: "SADC (Joburg)", elasticity: 85, velocity: 74, confidence: 98 },
  { corridor: "Maghreb (Cairo)", elasticity: 58, velocity: 90, confidence: 92 },
  { corridor: "CEMAC (Douala)", elasticity: 69, velocity: 79, confidence: 91 },
];

export function IntelligenceGraphChart() {
  const [activeTab, setActiveTab] = useState<"channel" | "trends">("channel");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-card rounded-2xl border border-border/80 p-4 sm:p-6 shadow-sm space-y-4 flex flex-col justify-between" suppressHydrationWarning>
      {/* Top Header & View Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground font-mono">
              Intelligence Graph Telemetry Engine
            </h4>
          </div>
          <p className="text-[11px] text-muted-foreground">
            Empirical ground-truth feeds calibrated across 54 AU member economies
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-muted/40 p-1 rounded-lg border border-border/60 self-start sm:self-auto">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setActiveTab("channel")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
              activeTab === "channel"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <PieIcon className="size-3" />
            <span>Retail Channel Share</span>
          </button>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setActiveTab("trends")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
              activeTab === "trends"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <TrendingUp className="size-3" />
            <span>Corridor Elasticity</span>
          </button>
        </div>
      </div>

      {/* Main Chart Rendering Area */}
      <div className="min-h-[260px] w-full flex items-center justify-center">
        {!mounted ? (
          <div className="h-64 w-full flex items-center justify-center text-xs text-muted-foreground font-mono">
            Calibrating African telemetry nodes...
          </div>
        ) : activeTab === "channel" ? (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 w-full items-center">
            {/* Donut Chart (7 cols) */}
            <div className="sm:col-span-7 h-[240px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 15, 25, 0.95)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      borderRadius: "8px",
                      fontSize: "11px",
                      color: "#fff",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                    }}
                    formatter={(val: any) => [`${val}% of Total Volume`, "Share"]}
                  />
                  <Pie
                    data={RETAIL_CHANNEL_DATA}
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {RETAIL_CHANNEL_DATA.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl sm:text-2xl font-black font-mono text-foreground">84%</span>
                <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  Informal Trade
                </span>
              </div>
            </div>

            {/* Empirical Breakdown Legend (5 cols) */}
            <div className="sm:col-span-5 space-y-2 text-xs">
              {RETAIL_CHANNEL_DATA.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-2 rounded-lg bg-muted/20 border border-border/50 text-[11px]"
                >
                  <div className="flex items-center gap-2 truncate pr-2">
                    <span
                      className="size-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="truncate text-foreground font-medium">{item.name}</span>
                  </div>
                  <span className="font-mono font-bold text-foreground shrink-0">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Area Chart View for Regional Corridors */
          <div className="w-full space-y-2">
            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={CORRIDOR_TREND_DATA}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1E56FF" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#1E56FF" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorElasticity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(150, 150, 150, 0.15)" />
                  <XAxis
                    dataKey="corridor"
                    tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
                    axisLine={{ stroke: "rgba(150, 150, 150, 0.2)" }}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
                    domain={[40, 100]}
                    axisLine={{ stroke: "rgba(150, 150, 150, 0.2)" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 15, 25, 0.95)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      borderRadius: "8px",
                      fontSize: "11px",
                      color: "#fff",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="velocity"
                    name="Off-Shelf Velocity Index"
                    stroke="#1E56FF"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorVelocity)"
                  />
                  <Area
                    type="monotone"
                    dataKey="elasticity"
                    name="Price Resistance Index"
                    stroke="#06B6D4"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorElasticity)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono pt-1">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#1E56FF]" />
                Off-Shelf SKU Velocity
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#06B6D4]" />
                Price Resistance Index
              </span>
              <span className="text-emerald-500 font-bold">99.4% Field Confidence</span>
            </div>
          </div>
        )}
      </div>

      {/* Analytical Callout Banner */}
      <div className="p-3 rounded-xl bg-muted/30 border border-border/70 flex items-start gap-2.5 text-[11px] text-muted-foreground">
        <Sparkles className="size-3.5 text-primary shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-foreground font-semibold">Institutional Takeaway:</strong> Traditional research firms audit only modern supermarkets (11% of sales), blind to the 84% transacted in informal kiosks and open-air markets. Stratum continuously captures this unmonitored liquidity.
        </p>
      </div>
    </div>
  );
}
