"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe2,
  MapPin,
  ShieldCheck,
  Building,
  Users2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface CorridorData {
  id: string;
  name: string;
  shortTab: string;
  badge: string;
  subtitle: string;
  reach: string;
  panelists: string;
  distributors: string;
  keyHubs: string[];
  description: string;
  capabilities: string[];
  stats: { label: string; value: string }[];
}

const CORRIDORS: CorridorData[] = [
  {
    id: "east-africa",
    name: "East Africa & Great Lakes",
    shortTab: "East Africa",
    badge: "Regional Research Hub",
    subtitle: "East African Commercial Gateway & Great Lakes Telemetry",
    reach: "Kenya, Tanzania, Uganda, Rwanda, Ethiopia",
    panelists: "56,000+ Active Panelists",
    distributors: "310+ Audited Distributors",
    keyHubs: [
      "Kenya — Nairobi (Operations & Research Command)",
      "Kenya — Mombasa (Deepwater Port Corridor)",
      "Kenya — Kisumu (Lake Basin Commerce)",
      "Tanzania — Dar es Salaam & Arusha",
      "Uganda — Kampala",
      "Rwanda — Kigali",
      "Ethiopia — Addis Ababa",
    ],
    description:
      "Operating out of our central Nairobi research and intelligence hub in Kenya, East Africa is a core nerve center of Stratum's consumer telemetry. We integrate live mobile-money transaction velocity with GPS-verified retail audits to capture authentic consumer demand and supply chain dynamics.",
    capabilities: [
      "Nairobi Field Operations & Multilingual Research Command",
      "Mobile Money & Micro-Transaction Telemetry Integration",
      "Northern Corridor Price Monitoring (Mombasa–Nairobi–Kigali)",
      "Swahili & Amharic In-Depth Qualitative Interviews (IDIs)",
      "Last-Mile Distributor & Agri-Processing Due Diligence",
    ],
    stats: [
      { label: "Nairobi Operations Command", value: "24/7 Live" },
      { label: "Kiosks & Dukas Mapped", value: "18,500+" },
      { label: "Cross-Border Corridors", value: "6 Active" },
      { label: "Survey Turnaround", value: "24-48 Hrs" },
    ],
  },
  {
    id: "asia-trade-desk",
    name: "Asia Trade Desk (China & India)",
    shortTab: "Asia Trade Desk",
    badge: "South-South Corridor",
    subtitle: "Cross-Border Intermediation, Sourcing & Bilateral Investment",
    reach: "China (Guangzhou, Shenzhen, Shanghai, Yiwu), India (Mumbai, Gujarat, Delhi), African Corridors",
    panelists: "25,000+ Cross-Border Traders & Commercial Counterparts",
    distributors: "620+ Verified Suppliers & Manufacturers",
    keyHubs: [
      "China: Shenzhen & Guangzhou (Electronics & Hardware)",
      "China: Shanghai & Yiwu (Wholesale Commodities & FMCG)",
      "India: Mumbai & Gujarat (Pharmaceuticals & Packaging)",
      "India: Delhi & Bengaluru (Tech Hardware & Agro-Processing)",
      "African Gateways: Mombasa Port, Apapa (Lagos), Durban",
    ],
    description:
      "Bridging the massive investment and trade corridors connecting China and India to fast-growing African consumer hubs. Stratum provides on-the-ground supplier verification, factory audits, B2B partner matchmaking, and bilateral trade facilitation across China and India.",
    capabilities: [
      "Direct Factory & Supplier Verification in China (Guangdong & Zhejiang)",
      "Indian Pharmaceutical, Packaging & Agro-Commodity Matchmaking",
      "Bilateral Cross-Border Trade & Escrow Intermediation",
      "AfCFTA-to-Asia Tariff & Regulatory Due Diligence",
    ],
    stats: [
      { label: "Bilateral Trade Pipeline", value: "$42M+" },
      { label: "Vetted Asian Suppliers", value: "620+" },
      { label: "Factory Audits Completed", value: "180+" },
      { label: "Partner Match Time", value: "< 72 Hrs" },
    ],
  },
  {
    id: "west-africa",
    name: "West Africa Corridor",
    shortTab: "West Africa",
    badge: "ECOWAS Zone",
    subtitle: "High-Density Consumer Markets & Informal Trade Hubs",
    reach: "Nigeria, Ghana, Côte d'Ivoire, Senegal, Cameroon",
    panelists: "88,000+ Active Panelists",
    distributors: "440+ Audited Distributors",
    keyHubs: [
      "Nigeria (Lagos, Kano, Abuja, Port Harcourt)",
      "Ghana (Accra, Kumasi)",
      "Côte d'Ivoire (Abidjan)",
      "Senegal (Dakar)",
      "Cameroon (Douala)",
    ],
    description:
      "West Africa represents one of the world's most vibrant consumer clusters. We track informal retail kiosks, open-air markets, and wholesale channels across coastal ports and interior trade corridors, giving FMCG brands and investors unvarnished consumer truth.",
    capabilities: [
      "Lagos & Accra Open-Air Market & Kiosk Price Auditing",
      "Multilingual Dialect Panels (Pidgin, Yoruba, Hausa, Igbo, French)",
      "Informal Wholesaler & Tier-1 Distributor Cold-Chain Audits",
      "Fast-Moving Consumer Goods (FMCG) Daily Brand Tracking",
    ],
    stats: [
      { label: "Active Field Envoys", value: "1,600+" },
      { label: "Informal Kiosks Tracked", value: "24,000+" },
      { label: "Audited Warehouses", value: "320+" },
      { label: "Field GPS Precision", value: "99.7%" },
    ],
  },
  {
    id: "southern-africa",
    name: "Southern Africa",
    shortTab: "Southern Africa",
    badge: "SADC Trade Belt",
    subtitle: "Modern Trade & Industrial Wholesale Integration",
    reach: "South Africa, Angola, Mozambique, Zambia, Zimbabwe",
    panelists: "42,000+ Active Panelists",
    distributors: "260+ Audited Distributors",
    keyHubs: [
      "South Africa (Johannesburg, Cape Town, Durban)",
      "Angola (Luanda)",
      "Mozambique (Maputo)",
      "Zambia (Lusaka)",
      "Zimbabwe (Harare)",
    ],
    description:
      "A unique dual-market environment combining sophisticated modern retail chains with extensive township and peri-urban spaza shop distribution networks. Stratum benchmarks brand equity and price elasticity across both formal and informal segments.",
    capabilities: [
      "Township Spaza Shop vs Modern Retail Penetration Studies",
      "POPIA-Compliant Quantitative Consumer Panels",
      "Audited Cold-Chain Logistics for Perishables & Beverages",
      "SADC Tariff Corridor & Currency Volatility Diagnostics",
    ],
    stats: [
      { label: "Spaza Shops Tracked", value: "11,200+" },
      { label: "Audited Cold-Chains", value: "140+" },
      { label: "Category Benchmarks", value: "48 Sectors" },
      { label: "Client Repeat Rate", value: "96.2%" },
    ],
  },
  {
    id: "north-africa",
    name: "North Africa & Maghreb",
    shortTab: "North Africa",
    badge: "AMU & Mediterranean",
    subtitle: "Strategic Bridge to Middle East & Mediterranean Trade",
    reach: "Egypt, Morocco, Algeria, Tunisia",
    panelists: "32,000+ Active Panelists",
    distributors: "190+ Audited Distributors",
    keyHubs: [
      "Egypt (Cairo, Alexandria, Giza)",
      "Morocco (Casablanca, Rabat, Tangier)",
      "Algeria (Algiers, Oran)",
      "Tunisia (Tunis)",
    ],
    description:
      "High-population North African consumer markets linking Africa to Europe and the Middle East. Stratum tracks traditional souks, modern hypermarkets, and pharmaceutical/FMCG distribution channels.",
    capabilities: [
      "Dual-Language Arabic & French Consumer Intercepts",
      "Traditional Souk vs Modern Trade Channel Velocity",
      "Halal Certification & North African Regulatory Navigation",
      "Mediterranean Maritime Supply Chain Verification",
    ],
    stats: [
      { label: "Urban Clusters", value: "16 Cities" },
      { label: "Consumer Twins Calibrated", value: "12,000+" },
      { label: "Regulatory Nodes", value: "14 Agencies" },
      { label: "Audit Accuracy", value: "99.5%" },
    ],
  },
  {
    id: "afcfta-all-africa",
    name: "AfCFTA All-Africa Bridge",
    shortTab: "Pan-Africa",
    badge: "54 AU Nations",
    subtitle: "Pan-African Intermediation & Global Capital Deployment",
    reach: "Connecting Institutional Capital to All 54 African Markets",
    panelists: "190,000+ Verified Panelists Across Africa",
    distributors: "920+ Audited Local Distributors",
    keyHubs: [
      "All 54 African Union Member States",
      "Executive Trade Desks: London, New York, Dubai (Capital Inflow)",
      "Bilateral AfCFTA Tariff & Regulatory Harmonization Data",
    ],
    description:
      "The definitive Pan-African platform. Under the African Continental Free Trade Area (AfCFTA), STRATUM bridges international institutional investors, multinationals, and ambitious indigenous conglomerates with verified market data and direct Deal Room access across all 54 African nations.",
    capabilities: [
      "AfCFTA Cross-Border Trade & Tariff Navigation",
      "Bespoke Multi-Country Brand Tracking in up to 14 Markets Simultaneously",
      "Confidential Deal Room with Strict Bilateral NDAs",
      "Direct In-Market Escalation to Senior African Research Directors",
    ],
    stats: [
      { label: "Total Panel Reach", value: "190,000+" },
      { label: "Pipeline Value", value: "$185M+" },
      { label: "AU Markets Mapped", value: "54 Nations" },
      { label: "Fieldwork Integrity", value: "99.4%" },
    ],
  },
];

export function GlobalFootprint() {
  const [activeCorridorId, setActiveCorridorId] = useState("east-africa");
  const corridor = CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];

  return (
    <div className="space-y-6 sm:space-y-8" suppressHydrationWarning>
      {/* Modern, Clean Segmented Control Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto p-1.5 rounded-2xl bg-muted/30 border border-border/80 max-w-4xl mx-auto scrollbar-none gap-1.5 sm:gap-2">
        {CORRIDORS.map((c) => {
          const isActive = c.id === activeCorridorId;
          return (
            <button
              key={c.id}
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveCorridorId(c.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/70"
              }`}
            >
              <Globe2 className={`size-3.5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
              <span>{c.shortTab}</span>
            </button>
          );
        })}
      </div>

      {/* Spacious, Decongested Showcase Card */}
      <div className="rounded-3xl border border-border/80 bg-card/95 shadow-md backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Corridor Profile & Ground Reach (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                  <Sparkles className="size-3" />
                  <span>{corridor.subtitle}</span>
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-muted text-foreground border border-border/60">
                  {corridor.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {corridor.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {corridor.description}
              </p>
            </div>

            {/* Key Commercial Hubs */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                KEY COMMERCIAL HUBS & TRADING CORRIDORS:
              </span>
              <div className="flex flex-wrap gap-2">
                {corridor.keyHubs.map((hub) => (
                  <span
                    key={hub}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-muted/40 border border-border/70 text-foreground hover:border-primary/40 transition-colors"
                  >
                    <MapPin className="size-3 text-primary shrink-0" />
                    {hub}
                  </span>
                ))}
              </div>
            </div>

            {/* In-Market Strategic Capabilities */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                FIELD CAPABILITIES & SPECIALIZATIONS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {corridor.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-start gap-2 p-3 rounded-xl border border-border/70 bg-background/70 text-xs text-foreground font-medium leading-snug"
                  >
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Ground-Truth Telemetry Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-5 bg-muted/20 border border-border/80 rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  LIVE CORRIDOR TELEMETRY
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                AUDIT VERIFIED
              </span>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              {corridor.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl border border-border/70 bg-card space-y-1"
                >
                  <div className="text-xl sm:text-2xl font-black font-mono text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Panel & Distribution Summary */}
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl border border-border/70 bg-card flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Users2 className="size-4 text-blue-500" />
                  <span className="text-xs font-semibold text-foreground">
                    Verified Panelists
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-foreground">
                  {corridor.panelists}
                </span>
              </div>

              <div className="p-3 rounded-xl border border-border/70 bg-card flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Building className="size-4 text-emerald-500" />
                  <span className="text-xs font-semibold text-foreground">
                    Audited Distributors
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-foreground">
                  {corridor.distributors}
                </span>
              </div>
            </div>

            {/* Strict Regulatory Footnote & Direct Inquire Action */}
            <div className="pt-3 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <ShieldCheck className="size-3.5 text-emerald-500 shrink-0" />
                NDPR • POPIA • GDPR • ESOMAR
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-xs"
              >
                Inquire on Corridor Telemetry <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
