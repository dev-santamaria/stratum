"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Compass,
  ShieldCheck,
  Eye,
  X,
  Building2,
  FlaskConical,
  BarChart3,
  MapPin,
  Users,
  Target,
  Search,
  Check,
  Activity,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";

export interface SampleBrief {
  id: string;
  code: string;
  badge: string;
  briefNumber: string;
  sectorTag: string;
  serviceCategory: string;
  serviceNumber: string;
  ctaParam: string;
  title: string;
  tagline: string;
  geography: string;
  geographyShort: string;
  targetRespondents: string;
  samplePower: string;
  sampleCount: string;
  confidenceInterval: string;
  methodology: string;
  problemFraming: {
    headline: string;
    narrative: string;
    marketDisconnect: string;
  };
  coreHypotheses: {
    code: string;
    assumption: string;
    fieldFinding: string;
    impactTag: string;
  }[];
  fieldworkProtocols: string[];
  deliverables: {
    num: string;
    format: string;
    title: string;
    desc: string;
  }[];
  illustrativeArtifact: {
    title: string;
    subtitle: string;
    telemetryTag: string;
    metrics: { label: string; value: string; subtext: string; progressPercent: number }[];
    strategicInsight: string;
    leadAuthor: string;
  };
}

export const SAMPLE_BRIEFS: SampleBrief[] = [
  {
    id: "brief-fmcg-elasticity",
    code: "STR-FMCG-2026-01",
    badge: "BRIEF 01",
    briefNumber: "01",
    sectorTag: "CONSUMER FMCG & RETAIL",
    serviceCategory: "01 Research & 02 Intelligence",
    serviceNumber: "01 & 02",
    ctaParam: "COMMISSION_RESEARCH",
    title: "Subnational FMCG Informal Retail Distribution & Single-Coin Price Elasticity",
    tagline: "GPS-Verified Kiosk Audits, Stockout Velocity & Vernacular Consumer Taste Fits",
    geography: "East Africa (Nairobi, peri-urban Kiambu & Machakos corridors)",
    geographyShort: "East Africa Corridor",
    targetRespondents: "Informal retail duka owners (n=1,200) and household heads (n=2,400)",
    samplePower: "n = 3,600 Total Observations • 95% CI (± 1.8% Margin of Error)",
    sampleCount: "n = 3,600",
    confidenceInterval: "95% CI (± 1.8% MoE)",
    methodology: "Double-blind retail kiosk censuses, GPS-geofenced interviews, and daily mobile basket logs",
    problemFraming: {
      headline: "The Single-Coin Cash Barrier in High-Density Informal Trade",
      narrative:
        "A fast-moving consumer beverage company observed plateauing supermarket velocity and sought to expand into informal neighborhood trade. Standard national census figures masked the reality that 84.2% of neighborhood volume transacts through unmapped street stalls and dukas operating under strict single-coin cash constraints.",
      marketDisconnect:
        "Conventional macro datasets report average income, but fail to measure physical cash denomination friction at the neighborhood kiosk counter.",
    },
    coreHypotheses: [
      {
        code: "H1",
        assumption: "Consumers smoothly absorb step price increases of 5–10% if package volume remains unchanged.",
        fieldFinding: "Sharp threshold resistance: Unit prices exceeding 20 or 50 KES coins trigger an immediate 28% drop in basket retention within 48 hours.",
        impactTag: "DISPROVED • COIN RIGIDITY DETECTED",
      },
      {
        code: "H2",
        assumption: "Informal kiosks maintain adequate secondary pack size inventory through central wholesale markets.",
        fieldFinding: "31.8% mid-week stockout rate caused by working capital caps; kiosk owners refuse inventory tying up more than 48 hours of cash.",
        impactTag: "VERIFIED • 31.8% MID-WEEK GAP",
      },
      {
        code: "H3",
        assumption: "Pan-African English branding carries aspirational appeal across informal peri-urban corridors.",
        fieldFinding: "Vernacular packaging with local dialect naming achieved 2.4x higher initial trial rates than standardized international formats.",
        impactTag: "VERIFIED • 2.4X TRIAL VELOCITY",
      },
    ],
    fieldworkProtocols: [
      "Double-blind enumerator sweeps with GPS geofencing and acoustic timestamp verification.",
      "Subnational retail censuses cataloging SKU shelf presence, price display, and replenishment velocity.",
      "Vernacular intercept interviews conducted in native dialects (Swahili, local vernaculars).",
      "Re-contact verification audit on a random 15% sub-sample by independent field supervisors.",
    ],
    deliverables: [
      {
        num: "01",
        format: "DYNAMIC DATA MODEL",
        title: "Addressable Market Volume Split",
        desc: "Empirical split across formal supermarkets vs. informal neighborhood kiosks by pack size and cash step denomination.",
      },
      {
        num: "02",
        format: "ECONOMETRIC CURVE",
        title: "Single-Coin Price Elasticity Curve",
        desc: "Retention curves mapping consumer brand substitution at 20 KES, 50 KES, and 100 KES step thresholds.",
      },
      {
        num: "03",
        format: "GEO-SPATIAL BLUEPRINT",
        title: "Traditional Trade Route-to-Market Blueprint",
        desc: "Prioritized wholesale cluster maps and direct van route schedules for high-velocity corridors.",
      },
    ],
    illustrativeArtifact: {
      title: "FIELD TELEMETRY // RETAIL AUDIT SPECIMEN",
      subtitle: "Empirical 3-Corridor Sensor Sweep (Nairobi, Kiambu, Machakos)",
      telemetryTag: "GPS AUDITED • 95% CI",
      metrics: [
        { label: "Informal Channel Share", value: "84.2%", subtext: "Duka & kiosk transaction share", progressPercent: 84 },
        { label: "Mid-Week Stockout Rate", value: "31.8%", subtext: "Secondary pack inventory failure", progressPercent: 32 },
        { label: "Verified Data Points", value: "n = 3,600", subtext: "Geocoded field observations", progressPercent: 100 },
      ],
      strategicInsight:
        "When SKU pricing moves above a single coin increment, consumer substitution to unbranded competitors accelerates by 28% within 48 hours, confirming cash-denomination rigidity as the primary volume constraint.",
      leadAuthor: "Desk Allocation: Consumer & Retail Intelligence Lead • Nairobi HQ",
    },
  },
  {
    id: "brief-pharma-coldchain",
    code: "STR-PHR-2026-02",
    badge: "BRIEF 02",
    briefNumber: "02",
    sectorTag: "HEALTHCARE & PHARMACEUTICALS",
    serviceCategory: "04 Intermediation & 05 Market Access",
    serviceNumber: "04 & 05",
    ctaParam: "SOURCE_PRODUCTS",
    title: "India-to-Africa Pharmaceutical Sourcing & Cold-Chain Distribution Integrity",
    tagline: "Active Ingredient Due Diligence, Temperature Logging & AfCFTA Clearance",
    geography: "India Production Belts (Mumbai/Gujarat) to East African Regional Gateways",
    geographyShort: "India & East Africa",
    targetRespondents: "24 Verified API Manufacturing Plants and 80+ Regional Wholesalers",
    samplePower: "Comprehensive 24-Plant On-Site Audit & 100% Temperature Logger Telemetry",
    sampleCount: "24 Plants Audited",
    confidenceInterval: "100% Sensor Telemetry",
    methodology: "Physical factory floor inspections, regulatory license verification, and transit telemetry",
    problemFraming: {
      headline: "Multi-Tier Middleman Markups & Maritime Cold-Chain Excursions",
      narrative:
        "A regional healthcare consortium required secure, direct active pharmaceutical ingredient (API) sourcing from certified Indian manufacturers. Uncontracted intermediary brokers inflated landed costs by 21%, while maritime transit without calibrated telemetry created continuous product degradation risk.",
      marketDisconnect:
        "Standard procurement relied on trading brokers rather than direct factory-floor GMP audits and continuous transit IoT sensor tracking.",
    },
    coreHypotheses: [
      {
        code: "H1",
        assumption: "Export broker fees add only a marginal 3–5% friction to raw active pharmaceutical ingredient pricing.",
        fieldFinding: "On-site audits revealed 3 undocumented intermediate broker tiers inflating procurement costs by 21.4%.",
        impactTag: "DISPROVED • 21.4% BROKER SPREAD",
      },
      {
        code: "H2",
        assumption: "Standard refrigerated shipping containers maintain adequate temperature control during port customs holds.",
        fieldFinding: "Uncalibrated inland containers experienced a 14-hour holding bottleneck at port gates without cold plug-in power.",
        impactTag: "VERIFIED • CRITICAL TRANSIT BOTTLENECK",
      },
      {
        code: "H3",
        assumption: "Regional customs clearance requires an unavoidable 10 to 14 days of documentation demurrage.",
        fieldFinding: "Pre-aligned AfCFTA tariff classification documentation slashed customs clearance times from 14 days to under 48 hours.",
        impactTag: "VERIFIED • < 48-HR CLEARANCE SLA",
      },
    ],
    fieldworkProtocols: [
      "On-site factory quality verification in Gujarat and Maharashtra under bilateral non-disclosure protocols.",
      "Continuous IoT data logger calibration tracking temperature and humidity across maritime transit corridors.",
      "Import regulatory harmonization review with regional pharmacy and poisons boards.",
      "Chain-of-custody verification testing active pharmaceutical ingredient (API) purity at port arrival.",
    ],
    deliverables: [
      {
        num: "01",
        format: "TECHNICAL DOSSIER",
        title: "Audited Manufacturing Plant Dossier",
        desc: "Verified WHO-GMP licenses, batch audit logs, facility photos, and chemical assay certificates across 24 Indian plants.",
      },
      {
        num: "02",
        format: "TELEMETRY LOGBOOK",
        title: "Cold-Chain Thermal Integrity Audit",
        desc: "End-to-end IoT temperature stability logs from factory gate in Nhava Sheva to East African central medical stores.",
      },
      {
        num: "03",
        format: "LEGAL ARCHITECTURE",
        title: "Bilateral Commercial Sourcing Agreement",
        desc: "Direct procurement contracts with milestone-based escrow payment architecture and demurrage SLAs.",
      },
    ],
    illustrativeArtifact: {
      title: "FIELD TELEMETRY // SUPPLY CHAIN SENSOR SPECIMEN",
      subtitle: "Maritime & Inland Transit Telemetry (Nhava Sheva to Mombasa/Nairobi)",
      telemetryTag: "IOT SENSOR LOGGED • 100% TELEMETRY",
      metrics: [
        { label: "Broker Margin Reduction", value: "-21.4%", subtext: "Direct contract price saving", progressPercent: 86 },
        { label: "Port Customs Clearance", value: "< 48 Hrs", subtext: "Down from 14-day baseline", progressPercent: 92 },
        { label: "Audit Protocols Verified", value: "32 Checks", subtext: "WHO-GMP facility inspections", progressPercent: 100 },
      ],
      strategicInsight:
        "Bilateral factory-direct contracting with pre-cleared customs codes eliminates three layers of intermediary fees, saves 21.4% landed cost, and guarantees zero thermal excursion events across the 4,200km transit chain.",
      leadAuthor: "Desk Allocation: Cross-Border Trade & Intermediation Lead • Nairobi HQ",
    },
  },
  {
    id: "brief-opportunity-solar",
    code: "STR-SOL-2026-03",
    badge: "BRIEF 03",
    briefNumber: "03",
    sectorTag: "ENERGY & AGRI INFRASTRUCTURE",
    serviceCategory: "03 Opportunity & 04 Intermediation",
    serviceNumber: "03 & 04",
    ctaParam: "VALIDATE_OPPORTUNITY",
    title: "Commercial Opportunity Screening: Decentralized Solar & Cold Storage Infrastructure",
    tagline: "Agricultural Value Chain Mapping, Off-Grid Demand Modeling & Partner Screening",
    geography: "Sub-Saharan Agricultural Corridors (Kenya Rift Valley & Lake Victoria Basin)",
    geographyShort: "Kenya Agri Corridors",
    targetRespondents: "Commercial smallholder aggregators (n=450) and cooperative leaders (n=120)",
    samplePower: "n = 570 Commercial Enterprises • 95% CI (± 2.4% Margin of Error)",
    sampleCount: "n = 570 Co-ops",
    confidenceInterval: "95% CI (± 2.4% MoE)",
    methodology: "Techno-economic field surveys, cold-chain energy demand logging, and co-op feasibility audits",
    problemFraming: {
      headline: "Post-Harvest Produce Loss vs. Decentralized Pay-As-You-Chill Feasibility",
      narrative:
        "An impact investor and clean-energy equipment manufacturer sought to validate the commercial viability of decentralized solar-powered cold storage hubs. Traditional macro energy studies failed to measure seasonal post-harvest produce spoilage or cooperative balance sheet capacity at rural aggregation nodes.",
      marketDisconnect:
        "Macro reports assumed farmers would purchase capital equipment upfront, ignoring the necessity of a harvest-tied operational leasing model.",
    },
    coreHypotheses: [
      {
        code: "H1",
        assumption: "Smallholder produce spoilage is primarily driven by road transit delays to central urban markets.",
        fieldFinding: "38.5% of value is destroyed at the farmgate and collection centre within 4 hours of picking due to lack of pre-cooling.",
        impactTag: "VERIFIED • 38.5% POST-HARVEST LOSS",
      },
      {
        code: "H2",
        assumption: "Rural cooperatives cannot support commercial equipment financing without subsidized grant capital.",
        fieldFinding: "A pay-as-you-chill fee per crate model delivers 24.1% project IRR with full operational cost recovery within 14 months.",
        impactTag: "VERIFIED • 24.1% PROJECT IRR",
      },
      {
        code: "H3",
        assumption: "Equipment suppliers can manage maintenance through existing urban distributor branches.",
        fieldFinding: "Downtime exceeding 48 hours causes complete produce spoilage; localized technician clusters within 30km are required.",
        impactTag: "DISPROVED • LOCAL EPC CLUSTERS NEEDED",
      },
    ],
    fieldworkProtocols: [
      "Field visits to 60+ rural produce aggregation centres with spatial GPS mapping of transit radii.",
      "Econometric modeling of seasonal produce price volatility against cold-storage preservation windows.",
      "Vetting of regional solar EPC contractors and distributor maintenance capacities.",
      "Cooperative balance sheet audits evaluating seasonal cash reserves and debt servicing ability.",
    ],
    deliverables: [
      {
        num: "01",
        format: "GIS SPATIAL ATLAS",
        title: "Subnational Commercial Opportunity Map",
        desc: "Spatial heatmap highlighting top 15 priority cold-hub installation clusters ranked by yield density and power access.",
      },
      {
        num: "02",
        format: "FINANCIAL PRO-FORMA",
        title: "Cooperative Willingness-to-Pay & Tariff Model",
        desc: "Empirical revenue projections based on seasonal harvest cycles and farmer subscription uptake.",
      },
      {
        num: "03",
        format: "INTERMEDIATION MATRIX",
        title: "Partner Screening & Distribution Matrix",
        desc: "Screening matrix pairing international solar equipment manufacturers with vetted regional EPC partners.",
      },
    ],
    illustrativeArtifact: {
      title: "FIELD TELEMETRY // INFRASTRUCTURE FEASIBILITY SPECIMEN",
      subtitle: "Agronomic Field Survey (Rift Valley & Lake Victoria Horticultural Belts)",
      telemetryTag: "TECHNO-ECONOMIC FIELD SURVEY • 95% CI",
      metrics: [
        { label: "Post-Harvest Value Loss", value: "38.5%", subtext: "Average unmitigated spoilage", progressPercent: 39 },
        { label: "Projected Hub IRR", value: "24.1%", subtext: "Pay-as-you-chill commercial model", progressPercent: 88 },
        { label: "High-Priority Hub Clusters", value: "15 Mapped", subtext: "Ranked by harvest density", progressPercent: 100 },
      ],
      strategicInsight:
        "Decentralized chilling infrastructure located within 12km of primary cooperative aggregation hubs demonstrates break-even within 14 months under harvest-tied fee structures, unlocking commercial bank co-financing.",
      leadAuthor: "Desk Allocation: Opportunity Screening & Infrastructure Lead • Nairobi HQ",
    },
  },
];

function resolveBrief(query: string | null): SampleBrief {
  if (!query) return SAMPLE_BRIEFS[0];
  const q = query.toLowerCase().trim();
  const direct = SAMPLE_BRIEFS.find((b) => b.id.toLowerCase() === q);
  if (direct) return direct;

  if (q.includes("pharma") || q === "brief-pharma-sourcing" || q === "02") {
    return SAMPLE_BRIEFS[1];
  }
  if (q.includes("solar") || q === "brief-solar-coldstorage" || q === "03") {
    return SAMPLE_BRIEFS[2];
  }
  if (q.includes("fmcg") || q === "01") {
    return SAMPLE_BRIEFS[0];
  }
  return SAMPLE_BRIEFS[0];
}

function SampleResearchBriefsContent() {
  const searchParams = useSearchParams();
  const briefParam = searchParams?.get("brief");

  const [selectedBrief, setSelectedBrief] = useState<SampleBrief>(() =>
    resolveBrief(briefParam)
  );
  const [inspectModalOpen, setInspectModalOpen] = useState(false);

  useEffect(() => {
    if (briefParam) {
      setSelectedBrief(resolveBrief(briefParam));
    }
  }, [briefParam]);

  return (
    <div className="space-y-8">
      {/* ========================================================
          1. THE EXECUTIVE BLUEPRINT DECK (INTERACTIVE SWITCHER)
          ======================================================== */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="size-2 rounded-none bg-primary animate-pulse" />
            <span className="font-bold text-foreground uppercase tracking-wider">
              FLAGSHIP RESEARCH SPECIMEN SELECTOR
            </span>
            <span className="text-border">•</span>
            <span>3 FIELD-TESTED CHARTERS AVAILABLE</span>
          </div>
          <div className="text-[11px] text-muted-foreground hidden sm:block uppercase">
            SELECT A BLUEPRINT TO INSPECT STATISTICAL PARAMETERS &amp; DELIVERABLES
          </div>
        </div>

        {/* 3 Executive Segmented Deck Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {SAMPLE_BRIEFS.map((brief) => {
            const isSelected = selectedBrief.id === brief.id;
            return (
              <button
                key={brief.id}
                type="button"
                onClick={() => setSelectedBrief(brief)}
                className={`text-left p-5 rounded-none border transition-all cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "bg-card border-primary shadow-xs ring-1 ring-primary/40"
                    : "bg-card/70 border-border/80 hover:border-border hover:bg-card hover:shadow-2xs"
                }`}
              >
                {/* Active Accent Top Line */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                )}

                <div className="space-y-3">
                  {/* Top Bar in Card */}
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold px-2 py-0.5 rounded-none uppercase ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {brief.badge}
                      </span>
                      <span className="text-muted-foreground font-semibold uppercase">
                        {brief.briefNumber === "01"
                          ? "FMCG Trade"
                          : brief.briefNumber === "02"
                            ? "Pharma Sourcing"
                            : "Clean Energy"}
                      </span>
                    </div>

                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-none uppercase">
                        <Check className="size-3" />
                        ACTIVE
                      </span>
                    ) : (
                      <span className="text-[10px] text-muted-foreground group-hover:text-foreground flex items-center gap-0.5 uppercase">
                        INSPECT <ArrowUpRight className="size-3" />
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xs sm:text-sm font-medium leading-snug line-clamp-2 ${
                      isSelected ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                    }`}
                  >
                    {brief.title}
                  </h3>

                  {/* Micro Metric & Footprint */}
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1 truncate max-w-[130px] uppercase">
                      <MapPin className="size-3 text-primary shrink-0" />
                      {brief.geographyShort}
                    </span>
                    <span className="font-bold text-foreground shrink-0 uppercase">
                      {brief.sampleCount}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          2. THE ACTIVE INTELLIGENCE DOSSIER WORKSTATION
          ======================================================== */}
      <div className="rounded-none border border-border/80 bg-card overflow-hidden shadow-2xs">
        {/* Workstation Command Banner */}
        <div className="px-6 py-4 bg-muted/40 border-b border-border/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-none bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <FlaskConical className="size-4.5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="font-bold text-foreground">{selectedBrief.code}</span>
                <span className="text-border">•</span>
                <span className="text-primary font-bold">{selectedBrief.sectorTag}</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono uppercase">
                SERVICE LINES: {selectedBrief.serviceCategory}
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setInspectModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-2xs"
            >
              <Eye className="size-3.5 text-primary" />
              <span>INSPECT FULL CHARTER MEMO</span>
            </button>
            <Link
              href={`/contact?cta=${selectedBrief.ctaParam}&brief=${selectedBrief.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs cursor-pointer"
            >
              <span>COMMISSION THIS STUDY</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Workstation Core Content (7 cols analytical / 5 cols live specimen HUD) */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN (7 COLS): ANALYTICAL METHODOLOGY & HYPOTHESES */}
            <div className="lg:col-span-7 space-y-6">
              {/* Brief Title & Tagline */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-none bg-primary/10 text-primary font-mono text-[11px] font-bold uppercase tracking-wider">
                  <span>{selectedBrief.badge} SPECIFICATION DOSSIER</span>
                  <span>•</span>
                  <span>CONFIDENTIAL BLUEPRINT</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight leading-snug">
                  {selectedBrief.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {selectedBrief.tagline}
                </p>
              </div>

              {/* Problem Framing & Commercial Disconnect */}
              <div className="p-5 rounded-none border border-border/80 bg-muted/20 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="size-3.5 text-primary" />
                    EXECUTIVE SCOPING THESIS
                  </span>
                  <span className="text-[10px] text-primary font-semibold uppercase">
                    THE COMMERCIAL FRICTION
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-foreground">
                  {selectedBrief.problemFraming.headline}
                </h4>
                <p className="text-xs text-foreground/90 leading-relaxed">
                  {selectedBrief.problemFraming.narrative}
                </p>
                <div className="pt-2 border-t border-border/60 text-[11px] text-muted-foreground italic">
                  <span className="font-semibold text-foreground not-italic">Market Blindspot: </span>
                  &ldquo;{selectedBrief.problemFraming.marketDisconnect}&rdquo;
                </div>
              </div>

              {/* 4 Sampling Architecture HUD Tiles */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                  STATISTICAL SAMPLE DESIGN &amp; CONFIDENCE CALIBRATION
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-none border border-border/80 bg-card space-y-1">
                    <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                      <BarChart3 className="size-3 text-primary" />
                      Statistical Power &amp; Margin of Error
                    </span>
                    <p className="font-bold text-foreground text-xs sm:text-sm">{selectedBrief.samplePower}</p>
                  </div>

                  <div className="p-3.5 rounded-none border border-border/80 bg-card space-y-1">
                    <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                      <MapPin className="size-3 text-primary" />
                      Geographic Audit Footprint
                    </span>
                    <p className="font-bold text-foreground text-xs sm:text-sm">{selectedBrief.geography}</p>
                  </div>

                  <div className="p-3.5 rounded-none border border-border/80 bg-card space-y-1">
                    <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                      <Users className="size-3 text-primary" />
                      Target Respondent Mix
                    </span>
                    <p className="font-bold text-foreground text-xs sm:text-sm">{selectedBrief.targetRespondents}</p>
                  </div>

                  <div className="p-3.5 rounded-none border border-border/80 bg-card space-y-1">
                    <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                      <ShieldCheck className="size-3 text-primary" />
                      Quality Control Standard
                    </span>
                    <p className="font-bold text-foreground text-xs sm:text-sm">{selectedBrief.methodology}</p>
                  </div>
                </div>
              </div>

              {/* Core Hypotheses vs. Empirical Field Findings */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  <span>EMPIRICAL HYPOTHESES &amp; GROUND-TRUTH FINDINGS</span>
                  <span className="text-[10px] text-muted-foreground">3 KEY PILLARS TESTED</span>
                </div>

                <div className="space-y-3">
                  {selectedBrief.coreHypotheses.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-none border border-border/80 bg-card space-y-2.5 transition-all hover:border-primary/40"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-none">
                          [{item.code}]
                        </span>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-none bg-muted text-foreground uppercase">
                          {item.impactTag}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground/80 font-mono text-[11px]">Conventional Assumption: </span>
                          {item.assumption}
                        </p>
                        <p className="text-foreground font-medium leading-relaxed bg-muted/20 p-2.5 rounded-none border border-border/60">
                          <span className="font-bold text-primary font-mono text-[11px]">Ground Truth Finding: </span>
                          {item.fieldFinding}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Decision-Grade Deliverables */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                  <span>DECISION-GRADE CLIENT DELIVERABLES</span>
                  <span className="text-[10px] text-muted-foreground">EXECUTIVE SPECIFICATIONS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedBrief.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-none border border-border/80 bg-muted/20 space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="font-bold text-primary">[{deliv.num}]</span>
                          <span className="text-muted-foreground font-semibold uppercase">{deliv.format}</span>
                        </div>
                        <h5 className="text-xs font-bold text-foreground leading-snug">
                          {deliv.title}
                        </h5>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed pt-2 border-t border-border/60">
                        {deliv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (5 COLS): LIVE SPECIMEN HUD & COMMISSIONING */}
            <div className="lg:col-span-5 space-y-6">
              {/* The Live Field Specimen Telemetry Box */}
              <div className="p-6 rounded-none border border-border/80 bg-card space-y-5 shadow-2xs relative overflow-hidden">
                {/* Header of HUD */}
                <div className="space-y-1 border-b border-border/60 pb-3.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-primary flex items-center gap-1.5">
                      <Activity className="size-3.5 text-primary" />
                      {selectedBrief.illustrativeArtifact.title}
                    </span>
                    <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-none font-bold uppercase">
                      {selectedBrief.illustrativeArtifact.telemetryTag}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {selectedBrief.illustrativeArtifact.subtitle}
                  </p>
                </div>

                {/* 3 Telemetry Metrics with Visual Meters */}
                <div className="space-y-4">
                  {selectedBrief.illustrativeArtifact.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1.5 p-3 rounded-none bg-muted/30 border border-border/60">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-bold text-foreground uppercase font-mono">
                          {m.label}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-primary font-mono">
                          {m.value}
                        </span>
                      </div>
                      {/* Visual Meter Bar */}
                      <div className="w-full h-1.5 rounded-none bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-none transition-all duration-500"
                          style={{ width: `${m.progressPercent}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        {m.subtext}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Lead Insight Quotation */}
                <div className="p-4 rounded-none border border-primary/20 bg-primary/5 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-primary uppercase">
                    STRATEGIC LEAD SYNTHESIS:
                  </span>
                  <p className="text-xs text-foreground/90 leading-relaxed italic">
                    &ldquo;{selectedBrief.illustrativeArtifact.strategicInsight}&rdquo;
                  </p>
                  <p className="text-[10px] font-mono text-muted-foreground pt-1 border-t border-primary/15 uppercase">
                    {selectedBrief.illustrativeArtifact.leadAuthor}
                  </p>
                </div>

                {/* Quality & ESOMAR Guarantee Stamp */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-primary" />
                    ESOMAR 2026 Standards
                  </span>
                  <span>Bilateral NDA Cleared</span>
                </div>
              </div>

              {/* Commission Custom Scoping Panel */}
              <div className="p-6 rounded-none border border-primary/25 bg-card space-y-4 shadow-2xs">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-none bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <FileCheck className="size-3.5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-primary uppercase">
                      INDEPENDENT DESK ALLOCATION
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    Deploy This Architecture For Your Organization
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Need a tailored sample size and double-blind fieldwork sweep for your brand or market entry corridor? Stratum drafts custom scoping memos within 48 hours.
                  </p>
                </div>

                {/* Quick SLA Metrics */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2.5 rounded-none bg-muted/30 border border-border/60">
                    <span className="text-muted-foreground text-[10px] uppercase block">Triage SLA:</span>
                    <span className="font-bold text-foreground">&lt; 6 Hours</span>
                  </div>
                  <div className="p-2.5 rounded-none bg-muted/30 border border-border/60">
                    <span className="text-muted-foreground text-[10px] uppercase block">Protection:</span>
                    <span className="font-bold text-foreground">Bilateral NDA</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <Link
                    href={`/contact?cta=${selectedBrief.ctaParam}&brief=${selectedBrief.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
                  >
                    <span>COMMISSION CUSTOM STUDY</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/services"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>EXPLORE OUR 6 SERVICES</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workstation Footer Ribbon */}
        <div className="px-6 sm:px-8 py-4 bg-muted/30 border-t border-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-muted-foreground font-mono text-[11px] uppercase">
            Protocol: Double-Blind Telemetry &bull; 95% Confidence Interval &bull; Nairobi HQ Central Operations
          </span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setInspectModalOpen(true)}
              className="text-foreground hover:text-primary font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              INSPECT FULL MEMO
            </button>
            <Link
              href={`/contact?cta=${selectedBrief.ctaParam}&brief=${selectedBrief.id}`}
              className="font-bold text-xs uppercase tracking-wider text-primary hover:underline flex items-center gap-1"
            >
              <span>REQUEST SCOPING CALL</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. THE 4 PILLARS OF STRATUM'S METHODOLOGICAL RIGOR
          ======================================================== */}
      <div className="pt-4 space-y-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-none bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
            <Compass className="size-3" />
            METHODOLOGICAL STANDARDS
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
            Why Stratum Field Architectures Deliver Decision-Grade Data
          </h3>
          <p className="text-xs text-muted-foreground max-w-2xl">
            We replace secondary desktop assumptions with verifiable, GPS-stamped ground truth gathered through strict double-blind protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-none border border-border/80 bg-card space-y-2 hover:border-primary/50 transition-all">
            <div className="size-8 rounded-none bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs border border-primary/20">
              01
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground">
              Double-Blind Enumeration
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Field enumerators do not know the corporate sponsor, and respondents are not coached, totally eliminating observer and courtesy bias.
            </p>
          </div>

          <div className="p-5 rounded-none border border-border/80 bg-card space-y-2 hover:border-primary/50 transition-all">
            <div className="size-8 rounded-none bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs border border-primary/20">
              02
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground">
              GPS Geofencing &amp; Timestamps
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every retail audit, factory visit, and farm survey is geocoded and acoustic-timestamped, preventing desk-manufactured responses.
            </p>
          </div>

          <div className="p-5 rounded-none border border-border/80 bg-card space-y-2 hover:border-primary/50 transition-all">
            <div className="size-8 rounded-none bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs border border-primary/20">
              03
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground">
              Statistical 95% Confidence Interval
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sample sizes are mathematically calculated with narrow margins of error (±1.8% to ±2.4%) for boardroom investment defensibility.
            </p>
          </div>

          <div className="p-5 rounded-none border border-border/80 bg-card space-y-2 hover:border-primary/50 transition-all">
            <div className="size-8 rounded-none bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xs border border-primary/20">
              04
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-foreground">
              Vernacular Trade Dialects
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Conducted in Swahili and regional trade vernaculars by native enumerators who understand informal settlement credit cultures.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          4. FULL CHARTER INSPECTION MODAL (CLEAN EXECUTIVE DOSSIER)
          ======================================================== */}
      {inspectModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-card border border-border/80 rounded-none max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setInspectModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-none text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Document Header */}
            <div className="space-y-2 border-b border-border/60 pb-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-primary uppercase">
                  STRATUM OFFICIAL SPECIFICATION MEMO &bull; {selectedBrief.badge}
                </span>
                <span className="text-border">•</span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  NAIROBI CENTRAL OPERATIONS DESK
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-foreground tracking-tight">
                {selectedBrief.title}
              </h3>
              <p className="text-xs text-muted-foreground">{selectedBrief.tagline}</p>
            </div>

            {/* Document Body */}
            <div className="space-y-5 text-xs text-muted-foreground leading-relaxed">
              <div className="space-y-1.5">
                <h4 className="font-bold text-foreground text-sm font-mono uppercase">1. Executive Scoping Thesis</h4>
                <p className="text-foreground/90">{selectedBrief.problemFraming.narrative}</p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-foreground text-sm font-mono uppercase">2. Statistical Sample Design &amp; Confidence Level</h4>
                <p>
                  Calibrated sample size: <strong>{selectedBrief.samplePower}</strong>. Stratification captures subnational economic diversity across primary wholesale belts, secondary transit nodes, and informal neighborhood kiosks. Double-blind enumerator verification with GPS geofencing eliminates observer bias.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-foreground text-sm font-mono uppercase">3. Field Hypotheses vs. Empirical Ground Truth</h4>
                <div className="space-y-2">
                  {selectedBrief.coreHypotheses.map((h, i) => (
                    <div key={i} className="p-3 rounded-none border border-border/80 bg-muted/20 space-y-1">
                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <span className="font-bold text-foreground">[{h.code}] Assumption: {h.assumption}</span>
                        <span className="text-primary font-bold">{h.impactTag}</span>
                      </div>
                      <p className="text-foreground font-medium">
                        Field Discovery: {h.fieldFinding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-foreground text-sm font-mono uppercase">4. Fieldwork Protocols &amp; Quality Control</h4>
                <ul className="list-disc pl-5 space-y-1 text-foreground/90">
                  {selectedBrief.fieldworkProtocols.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-foreground text-sm font-mono uppercase">5. Required Deliverables for Executive Decision-Makers</h4>
                <ul className="list-disc pl-5 space-y-1 text-foreground/90">
                  {selectedBrief.deliverables.map((d, i) => (
                    <li key={i}>
                      <strong>{d.title} ({d.format}):</strong> {d.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-muted-foreground uppercase">
                Methodology governed by ESOMAR guidelines &bull; Nairobi Operations Desk
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setInspectModalOpen(false)}
                  className="px-4 py-2 rounded-none border border-border text-xs font-bold uppercase tracking-wider hover:bg-muted transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
                <Link
                  href={`/contact?cta=${selectedBrief.ctaParam}&brief=${selectedBrief.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
                >
                  <span>REQUEST SIMILAR SCOPE</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SampleResearchBriefs() {
  return (
    <Suspense
      fallback={
        <div className="p-8 rounded-none border border-border/80 bg-card text-center text-xs text-muted-foreground animate-pulse font-mono">
          Loading research brief charters...
        </div>
      }
    >
      <SampleResearchBriefsContent />
    </Suspense>
  );
}
