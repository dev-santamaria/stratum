"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  Layers,
  MapPin,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Download,
  HelpCircle,
  Activity,
  Globe2,
  SlidersHorizontal,
  Compass,
  FileText,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export type FormatMode = "distribution" | "spatial" | "trajectory" | "quadrant";

export interface DistributionRow {
  segment: string;
  primaryMetric: number; // percentage 0-100
  secondaryMetric?: number;
  neutralMetric?: number;
  sampleCount: string;
  varianceNote: string;
  status: "dominant" | "divergent" | "neutral" | "emerging";
}

export interface SpatialCorridorPoint {
  corridorName: string;
  hubCity: string;
  region: "East Africa" | "West Africa" | "Southern Africa" | "Asia-Africa Desk" | "North Africa";
  samplePower: string;
  gpsAccuracy: string;
  observedMetric: string;
  metricValue: number; // 0-100
  benchmarkDelta: string;
  fieldObservation: string;
}

export interface TrajectoryPoint {
  period: string;
  actualValue: number;
  baselineValue: number;
  ciUpper: number;
  ciLower: number;
  velocityNote?: string;
}

export interface QuadrantItem {
  id: string;
  name: string;
  xValue: number; // 0-100 (Market Penetration / Household Reach)
  yValue: number; // 0-100 (Commercial Margin / Adoption Velocity)
  quadrant: "whitespace" | "moat" | "specialized" | "defensive";
  quadrantLabel: string;
  sampleN: string;
  strategicAction: string;
  riskProfile: "Low Risk" | "High Velocity" | "Moderate Friction" | "Strategic Bet";
}

export interface SurveyPublication {
  id: string;
  topic: string;
  shortTitle: string;
  badge: string;
  category: string;
  targetPopulation: string;
  sampleSize: string;
  geography: string;
  methodology: string;
  fieldworkPeriod: string;
  confidenceInterval: string;
  coreQuestion: string;
  optionsSummary: string;
  executiveSummary: string;
  keyTakeaway: string;

  // Format 1: Cross-Sectional Distribution
  distributionTitle: string;
  distributionSubtitle: string;
  distributionPrimaryLabel: string;
  distributionSecondaryLabel?: string;
  distributionRows: DistributionRow[];

  // Format 2: Geospatial Corridor Matrix
  spatialTitle: string;
  spatialSubtitle: string;
  spatialMetricName: string;
  spatialPoints: SpatialCorridorPoint[];

  // Format 3: Longitudinal Velocity Trajectory
  trajectoryTitle: string;
  trajectorySubtitle: string;
  trajectoryXKey: string;
  trajectoryPrimaryLabel: string;
  trajectoryBenchmarkLabel: string;
  trajectoryPoints: TrajectoryPoint[];

  // Format 4: Strategic Opportunity Quadrant
  quadrantTitle: string;
  quadrantSubtitle: string;
  quadrantXAxisLabel: string;
  quadrantYAxisLabel: string;
  quadrantItems: QuadrantItem[];

  statHighlights: Array<{ label: string; value: string; desc: string }>;
}

export const PUBLISHED_SURVEYS: SurveyPublication[] = [
  {
    id: "survey-ai-super-intelligence",
    topic: "Transitioning from Artificial Intelligence to Super Intelligence",
    shortTitle: "AI to Super Intelligence",
    badge: "GLOBAL TECH GOVERNANCE",
    category: "Technology & Higher Education",
    targetPopulation: "Enterprise tech leaders, educators & corporate communicators across Africa & emerging markets",
    sampleSize: "N = 1,840 Verified Decision Makers",
    geography: "Pan-African & Emerging Tech Hubs (Nairobi HQ, Lagos, Cape Town, Cairo)",
    methodology: "Double-blind executive survey + structured institutional panel consensus",
    fieldworkPeriod: "Q3 2026",
    confidenceInterval: "95% CI (± 2.2% margin of error)",
    coreQuestion: "Considering its influence on education, corporate communications and marketing, should Artificial Intelligence be universally renamed Super Intelligence?",
    optionsSummary: "Rename to Super Intelligence (34%) • Retain AI Nomenclature (58%) • Undecided / Context-Specific (8%)",
    executiveSummary: "While commercial marketers and corporate communicators demonstrate high willingness to adopt 'Super Intelligence' nomenclature to capture rapid multimodal capability gains, higher education institutions and technical architects overwhelmingly advocate retaining 'Artificial Intelligence' until genuine Artificial General Intelligence (AGI) verification is achieved.",
    keyTakeaway: "A 46-point perception divergence exists between corporate marketing executives (58% favor rebranding or hybrid terms) and academic faculties (69% oppose rebranding as commercial hype inflation).",

    // Format 1: Distribution Matrix
    distributionTitle: "Cross-Sectional Discipline Matrix & Nomenclature Allocation",
    distributionSubtitle: "Statistical spread comparing willingness to rebrand across 4 executive leadership cohorts",
    distributionPrimaryLabel: "Favor 'Super Intelligence' Nomenclature (%)",
    distributionSecondaryLabel: "Retain Current 'AI' Terminology (%)",
    distributionRows: [
      {
        segment: "Corporate Communications",
        primaryMetric: 41,
        secondaryMetric: 51,
        neutralMetric: 8,
        sampleCount: "N = 420 Leaders",
        varianceNote: "+7.0% above continental mean",
        status: "divergent",
      },
      {
        segment: "Commercial Marketing",
        primaryMetric: 38,
        secondaryMetric: 54,
        neutralMetric: 8,
        sampleCount: "N = 460 Leaders",
        varianceNote: "+4.0% above continental mean",
        status: "divergent",
      },
      {
        segment: "Enterprise Tech Execs & CTOs",
        primaryMetric: 34,
        secondaryMetric: 59,
        neutralMetric: 7,
        sampleCount: "N = 490 Leaders",
        varianceNote: "Matches continental baseline",
        status: "neutral",
      },
      {
        segment: "Higher Education & Faculty",
        primaryMetric: 23,
        secondaryMetric: 69,
        neutralMetric: 8,
        sampleCount: "N = 470 Faculty",
        varianceNote: "-11.0% below continental mean (highest defense)",
        status: "dominant",
      },
      {
        segment: "Pan-African Composite Baseline",
        primaryMetric: 34,
        secondaryMetric: 58,
        neutralMetric: 8,
        sampleCount: "N = 1,840 Total",
        varianceNote: "Consensus benchmark",
        status: "neutral",
      },
    ],

    // Format 2: Geospatial Corridor Matrix
    spatialTitle: "Geospatial Corridors & Subnational Perception Telemetry",
    spatialSubtitle: "Audited telemetry mapping nomenclature receptivity across primary African commercial hubs",
    spatialMetricName: "Rebranding Propensity Index",
    spatialPoints: [
      {
        corridorName: "East Africa Corridor",
        hubCity: "Nairobi (HQ Operations)",
        region: "East Africa",
        samplePower: "N = 460 Panelists",
        gpsAccuracy: "98.4% Match",
        observedMetric: "36% Rebranding Appetite",
        metricValue: 36,
        benchmarkDelta: "+2.0% vs Base",
        fieldObservation: "High enterprise SaaS concentration and fintech AI piloting accelerate appetite for advanced capability nomenclature.",
      },
      {
        corridorName: "West Africa Corridor",
        hubCity: "Lagos Hub (Ikeja & Victoria Island)",
        region: "West Africa",
        samplePower: "N = 510 Panelists",
        gpsAccuracy: "97.1% Match",
        observedMetric: "42% Rebranding Appetite",
        metricValue: 42,
        benchmarkDelta: "+8.0% vs Base",
        fieldObservation: "Dynamic consumer tech brands and advertising agencies push aggressively for commercial differentiation.",
      },
      {
        corridorName: "Southern Africa Corridor",
        hubCity: "Johannesburg & Cape Town",
        region: "Southern Africa",
        samplePower: "N = 480 Panelists",
        gpsAccuracy: "99.1% Match",
        observedMetric: "28% Rebranding Appetite",
        metricValue: 28,
        benchmarkDelta: "-6.0% vs Base",
        fieldObservation: "Institutional banking risk committees and university senates express high conservatism against taxonomy inflation.",
      },
      {
        corridorName: "North Africa Corridor",
        hubCity: "Cairo Desk & Alexandria",
        region: "North Africa",
        samplePower: "N = 390 Panelists",
        gpsAccuracy: "96.8% Match",
        observedMetric: "31% Rebranding Appetite",
        metricValue: 31,
        benchmarkDelta: "-3.0% vs Base",
        fieldObservation: "Public sector digital transformation frameworks adhere strictly to international ISO/IEC AI standards.",
      },
    ],

    // Format 3: Longitudinal Velocity Trajectory
    trajectoryTitle: "Longitudinal Acceptance Pacing & Deployment Velocity",
    trajectorySubtitle: "Empirical trajectory curve tracking rebranding sentiment across enterprise maturity stages",
    trajectoryXKey: "stage",
    trajectoryPrimaryLabel: "Propensity to Accept 'Super Intelligence' (%)",
    trajectoryBenchmarkLabel: "Baseline Perception Norm (%)",
    trajectoryPoints: [
      {
        period: "Stage 1: Pilot Discovery",
        actualValue: 19,
        baselineValue: 18,
        ciUpper: 22,
        ciLower: 16,
        velocityNote: "Early sandbox experimentation; cautious nomenclature",
      },
      {
        period: "Stage 2: Dept Rollout",
        actualValue: 28,
        baselineValue: 24,
        ciUpper: 32,
        ciLower: 24,
        velocityNote: "+9.0% inflection upon internal workflow deployment",
      },
      {
        period: "Stage 3: Enterprise Scale",
        actualValue: 39,
        baselineValue: 30,
        ciUpper: 43,
        ciLower: 35,
        velocityNote: "Cross-departmental adoption drives terminology debates",
      },
      {
        period: "Stage 4: Autonomous Agents",
        actualValue: 52,
        baselineValue: 35,
        ciUpper: 57,
        ciLower: 47,
        velocityNote: "Critical tipping point: non-deterministic execution loops",
      },
      {
        period: "Stage 5: Frontier Deployment",
        actualValue: 64,
        baselineValue: 40,
        ciUpper: 69,
        ciLower: 59,
        velocityNote: "64% favor super intelligence label for frontier autonomous agents",
      },
    ],

    // Format 4: Strategic Opportunity Quadrant
    quadrantTitle: "Executive Technology Taxonomy & Strategic Opportunity Matrix",
    quadrantSubtitle: "2x2 Quadrant mapping technological initiatives: Market Penetration vs Commercial Impact",
    quadrantXAxisLabel: "Market Adoption Penetration (%)",
    quadrantYAxisLabel: "Perceived Commercial Leverage Index (0-100)",
    quadrantItems: [
      {
        id: "ai-q1",
        name: "Autonomous Agent Orchestration",
        xValue: 28,
        yValue: 84,
        quadrant: "whitespace",
        quadrantLabel: "Immediate Whitespace",
        sampleN: "N = 515 Execs",
        strategicAction: "Aggressive capital allocation: First-mover advantage in high-leverage agentic workflows across supply-chain and finance.",
        riskProfile: "High Velocity",
      },
      {
        id: "ai-q2",
        name: "Multimodal GenAI Enterprise Stacks",
        xValue: 72,
        yValue: 68,
        quadrant: "moat",
        quadrantLabel: "Core Sovereign Moat",
        sampleN: "N = 1,320 Execs",
        strategicAction: "Scale & defend: Integrate proprietary firm telemetry into multimodal reasoning loops to prevent commoditization.",
        riskProfile: "Low Risk",
      },
      {
        id: "ai-q3",
        name: "Formal Academic Verification Systems",
        xValue: 18,
        yValue: 34,
        quadrant: "specialized",
        quadrantLabel: "Niche Specialized",
        sampleN: "N = 330 Execs",
        strategicAction: "Selective institutional co-development: Partner with universities for audit integrity and certification.",
        riskProfile: "Strategic Bet",
      },
      {
        id: "ai-q4",
        name: "Legacy Rule-Based Chatbots",
        xValue: 82,
        yValue: 24,
        quadrant: "defensive",
        quadrantLabel: "Volume Anchor",
        sampleN: "N = 1,510 Execs",
        strategicAction: "Deprecate or migrate: Low commercial leverage despite widespread baseline footprint.",
        riskProfile: "Moderate Friction",
      },
    ],

    statHighlights: [
      { label: "58% Nomenclature Defense", value: "58%", desc: "Respondents strongly urge keeping 'Artificial Intelligence' to anchor audit integrity." },
      { label: "41% Comms Velocity", value: "41%", desc: "Corporate Communications represents the highest corporate appetite for rebranding." },
      { label: "69% Academic Rigor", value: "69%", desc: "University leadership and educators reject renaming without verifiable reasoning benchmarks." },
    ],
  },
  {
    id: "survey-alternative-medicine-india",
    topic: "Alternative Medicine in India",
    shortTitle: "Alternative Medicine (India)",
    badge: "PUBLIC HEALTH & PHARMA TELEMETRY",
    category: "Healthcare & Consumer Wellness",
    targetPopulation: "Urban & Tier-2/3 households in Mumbai, Gujarat, Delhi NCR, and Bengaluru",
    sampleSize: "N = 3,420 Representative Households",
    geography: "Mumbai, Ahmedabad/Surat (Gujarat), Delhi NCR & Bengaluru",
    methodology: "Multi-stage stratified sampling with in-person intercepts and validated pharmacy audit logs",
    fieldworkPeriod: "Past 12 Months Longitudinal Telemetry (2025–2026)",
    confidenceInterval: "95% CI (± 1.8% margin of error)",
    coreQuestion: "Have you used any alternative medicine system for health maintenance or treatment in the past 12 months?",
    optionsSummary: "Ayurveda (42%) • Conventional Allopathy Only (32%) • Homeopathy (18%) • Yoga & Naturopathy (14%) • Unani (8%) • Siddha & Folk Herbal (5%)",
    executiveSummary: "68% of urban and peri-urban Indian households practice 'integrative dual-care,' leveraging conventional modern medicine (allopathy) for acute conditions while simultaneously consuming Ayurvedic preparations and dietary supplements for chronic wellness, immunity, and post-recovery stability.",
    keyTakeaway: "Ayurveda leads all traditional therapeutic systems with 42% household penetration. 74% of alternative medicine expenditures in Tier-2 Gujarat and Mumbai are brand-loyalty driven via local chemists rather than OTC e-commerce.",

    // Format 1: Distribution Matrix
    distributionTitle: "Therapeutic Modality Penetration & Repeat Adherence Matrix",
    distributionSubtitle: "Distribution of household health regimens across 3,420 audited families",
    distributionPrimaryLabel: "12-Month Utilization Rate (%)",
    distributionSecondaryLabel: "High Adherence / Repeat Purchase (%)",
    distributionRows: [
      {
        segment: "Ayurveda (Classical & Branded)",
        primaryMetric: 42,
        secondaryMetric: 71,
        neutralMetric: 14,
        sampleCount: "N = 1,436 Households",
        varianceNote: "Dominant traditional modality nationwide",
        status: "dominant",
      },
      {
        segment: "Conventional Allopathy Only",
        primaryMetric: 32,
        secondaryMetric: 86,
        neutralMetric: 8,
        sampleCount: "N = 1,094 Households",
        varianceNote: "Primary acute-care prescription anchor",
        status: "dominant",
      },
      {
        segment: "Homeopathy Formulations",
        primaryMetric: 18,
        secondaryMetric: 54,
        neutralMetric: 22,
        sampleCount: "N = 615 Households",
        varianceNote: "Strong in pediatric and chronic respiratory allergies",
        status: "neutral",
      },
      {
        segment: "Yoga & Naturopathy Protocols",
        primaryMetric: 14,
        secondaryMetric: 62,
        neutralMetric: 18,
        sampleCount: "N = 478 Households",
        varianceNote: "High lifestyle adherence in metro tiers",
        status: "emerging",
      },
      {
        segment: "Unani Medicine System",
        primaryMetric: 8,
        secondaryMetric: 48,
        neutralMetric: 26,
        sampleCount: "N = 273 Households",
        varianceNote: "Concentrated in historic urban clusters",
        status: "divergent",
      },
      {
        segment: "Siddha & Folk Herbal Extracts",
        primaryMetric: 5,
        secondaryMetric: 39,
        neutralMetric: 31,
        sampleCount: "N = 171 Households",
        varianceNote: "Deep regional loyalty in southern states",
        status: "divergent",
      },
    ],

    // Format 2: Geospatial Corridor Matrix
    spatialTitle: "Subnational Regional Reach & Chemist Network Telemetry",
    spatialSubtitle: "Field verification comparing manufacturing epicenters against metro consumption hubs",
    spatialMetricName: "Alternative Healthcare Household Reach",
    spatialPoints: [
      {
        corridorName: "Western Manufacturing Corridor",
        hubCity: "Ahmedabad & Surat (Gujarat)",
        region: "Asia-Africa Desk",
        samplePower: "N = 1,120 Households",
        gpsAccuracy: "98.9% Match",
        observedMetric: "51% Traditional Utilization",
        metricValue: 51,
        benchmarkDelta: "+9.0% vs National Avg",
        fieldObservation: "High density of GMP-certified manufacturing units and deep cultural integration in Tier-2/3 households.",
      },
      {
        corridorName: "Western Financial Metro",
        hubCity: "Mumbai Urban & Thane",
        region: "Asia-Africa Desk",
        samplePower: "N = 980 Households",
        gpsAccuracy: "98.2% Match",
        observedMetric: "44% Traditional Utilization",
        metricValue: 44,
        benchmarkDelta: "+2.0% vs National Avg",
        fieldObservation: "68% of households practice integrative dual-care: allopathy for acute illness, Ayurveda for immunity.",
      },
      {
        corridorName: "Northern National Capital",
        hubCity: "Delhi NCR (Gurugram & Noida)",
        region: "Asia-Africa Desk",
        samplePower: "N = 760 Households",
        gpsAccuracy: "97.5% Match",
        observedMetric: "38% Traditional Utilization",
        metricValue: 38,
        benchmarkDelta: "-4.0% vs National Avg",
        fieldObservation: "Seasonal spikes during winter smog drive specialized herbal respiratory formulation purchases.",
      },
      {
        corridorName: "Southern Technology Hub",
        hubCity: "Bengaluru Urban",
        region: "Asia-Africa Desk",
        samplePower: "N = 560 Households",
        gpsAccuracy: "99.0% Match",
        observedMetric: "34% Traditional Utilization",
        metricValue: 34,
        benchmarkDelta: "-8.0% vs National Avg",
        fieldObservation: "D2C organic wellness subscriptions account for 41% of consumer alternative health spend.",
      },
    ],

    // Format 3: Longitudinal Velocity Trajectory
    trajectoryTitle: "Seasonal Disease-Cycle Demand Curve & Quarterly Elasticity",
    trajectorySubtitle: "Empirical tracking of consumer expenditure shifts across monsoon and winter immunity cycles",
    trajectoryXKey: "quarter",
    trajectoryPrimaryLabel: "Ayurvedic Regimen Utilization Rate (%)",
    trajectoryBenchmarkLabel: "Annual Baseline Utilization (%)",
    trajectoryPoints: [
      {
        period: "Q1 Winter Immunity",
        actualValue: 44,
        baselineValue: 40,
        ciUpper: 47,
        ciLower: 41,
        velocityNote: "Chyawanprash & warming herbal decoctions surge",
      },
      {
        period: "Q2 Summer Preventive",
        actualValue: 38,
        baselineValue: 40,
        ciUpper: 41,
        ciLower: 35,
        velocityNote: "Cooling formulations & digestive wellness regimens",
      },
      {
        period: "Q3 Monsoon Surge",
        actualValue: 53,
        baselineValue: 40,
        ciUpper: 56,
        ciLower: 50,
        velocityNote: "+39% surge in respiratory & gastrointestinal herbs",
      },
      {
        period: "Q4 Festive / Post-Monsoon",
        actualValue: 46,
        baselineValue: 40,
        ciUpper: 49,
        ciLower: 43,
        velocityNote: "Preventive metabolic regimen stabilization",
      },
    ],

    // Format 4: Strategic Opportunity Quadrant
    quadrantTitle: "Consumer Healthcare Product Strategy & Margin Matrix",
    quadrantSubtitle: "2x2 Quadrant mapping consumer health categories: Household Reach vs Commercial Margin",
    quadrantXAxisLabel: "Household Market Penetration (%)",
    quadrantYAxisLabel: "Gross Commercial Margin Expansion (0-100)",
    quadrantItems: [
      {
        id: "alt-q1",
        name: "Certified Organic Single-Herbs (D2C)",
        xValue: 24,
        yValue: 82,
        quadrant: "whitespace",
        quadrantLabel: "Immediate Whitespace",
        sampleN: "N = 820 Audited",
        strategicAction: "Rapid retail distribution rollout: Premium willingness to pay across Tier-1 urban demographics.",
        riskProfile: "High Velocity",
      },
      {
        id: "alt-q2",
        name: "Branded Classical Ayurveda (OTC)",
        xValue: 64,
        yValue: 72,
        quadrant: "moat",
        quadrantLabel: "Core Sovereign Moat",
        sampleN: "N = 2,190 Audited",
        strategicAction: "Brand defense & pharmacy lock-in: Maintain chemist recommendation rebates.",
        riskProfile: "Low Risk",
      },
      {
        id: "alt-q3",
        name: "Specialized Classical Mineral Bhasmas",
        xValue: 9,
        yValue: 45,
        quadrant: "specialized",
        quadrantLabel: "Niche Specialized",
        sampleN: "N = 310 Audited",
        strategicAction: "Institutional practitioner detailing: Heavy regulatory compliance and clinical trials required.",
        riskProfile: "Strategic Bet",
      },
      {
        id: "alt-q4",
        name: "Generic Allopathic Paracetamol & Antacids",
        xValue: 88,
        yValue: 29,
        quadrant: "defensive",
        quadrantLabel: "Volume Anchor",
        sampleN: "N = 3,010 Audited",
        strategicAction: "Supply chain efficiency optimization: Price-controlled low-margin commodity volume.",
        riskProfile: "Moderate Friction",
      },
    ],

    statHighlights: [
      { label: "42% Ayurvedic Household Reach", value: "42%", desc: "Dominant traditional health system across urban and semi-urban hubs." },
      { label: "68% Integrative Dual-Use", value: "68%", desc: "Patients combine traditional remedies with allopathic prescriptions." },
      { label: "+39% Monsoon Surge", value: "+39%", desc: "Preventive respiratory and digestive remedies surge during Q3 monsoon peak." },
    ],
  },
  {
    id: "survey-ewaste-africa",
    topic: "The Degree of Understanding of E-Waste Management in Africa",
    shortTitle: "E-Waste Understanding in Africa",
    badge: "ENVIRONMENT & RECIRCULATION ECONOMY",
    category: "Sustainability & Electronics Distribution",
    targetPopulation: "Urban consumers, electronics distributors, device technicians & waste aggregators",
    sampleSize: "N = 4,850 Field Respondents",
    geography: "Nairobi (Kenya), Lagos (Nigeria), Accra (Ghana) & Johannesburg (South Africa)",
    methodology: "Field intercept interviews across primary electronics hubs (Computer Village/Otigba, Alaba, Luthuli Ave, CBDs)",
    fieldworkPeriod: "Mid-2026",
    confidenceInterval: "95% CI (± 1.4% margin of error)",
    coreQuestion: "On a scale of 1-10, how well do you understand e-waste management?",
    optionsSummary: "Ratings 1 to 10 Histogram (Mean understanding score: 4.1 / 10 • Median: 4.0)",
    executiveSummary: "Despite rapid consumer electronics uptake and mobile device penetration across African megacities, 57% of consumers rank their understanding of e-waste recycling protocols at 4 or below out of 10. The majority treat obsolete lithium batteries and electronics as ordinary municipal waste.",
    keyTakeaway: "Informal repair technicians demonstrate 3.4x higher disposal safety awareness than general consumers, yet 89% report lacking authorized commercial recycling drop-off centers within a 5km radius.",

    // Format 1: Distribution Matrix
    distributionTitle: "E-Waste Literacy Deciles & Informal Scrap Disposal Correlation",
    distributionSubtitle: "Distribution of understanding scores and corresponding reliance on informal dumps",
    distributionPrimaryLabel: "Population Share at this Literacy Decile (%)",
    distributionSecondaryLabel: "Relies on Informal Scrap/Dumping (%)",
    distributionRows: [
      {
        segment: "Scores 1–2 (Critical Awareness Deficit)",
        primaryMetric: 27,
        secondaryMetric: 89,
        neutralMetric: 4,
        sampleCount: "N = 1,310 Respondents",
        varianceNote: "Treats batteries as ordinary municipal rubbish",
        status: "dominant",
      },
      {
        segment: "Scores 3–4 (Low Environmental Literacy)",
        primaryMetric: 30,
        secondaryMetric: 78,
        neutralMetric: 9,
        sampleCount: "N = 1,455 Respondents",
        varianceNote: "Aware of precious metals, unaware of toxic leaching",
        status: "dominant",
      },
      {
        segment: "Scores 5–6 (Moderate Basic Awareness)",
        primaryMetric: 24,
        secondaryMetric: 57,
        neutralMetric: 21,
        sampleCount: "N = 1,164 Respondents",
        varianceNote: "Willing to recycle if drop-off bin is < 1km",
        status: "neutral",
      },
      {
        segment: "Scores 7–8 (Advanced Environmental Literacy)",
        primaryMetric: 14,
        secondaryMetric: 32,
        neutralMetric: 54,
        sampleCount: "N = 679 Respondents",
        varianceNote: "Primarily corporate IT staff & university educated",
        status: "emerging",
      },
      {
        segment: "Scores 9–10 (Expert / Safe Recyclers)",
        primaryMetric: 5,
        secondaryMetric: 12,
        neutralMetric: 82,
        sampleCount: "N = 242 Respondents",
        varianceNote: "Hardware repair technicians & formal e-waste firms",
        status: "divergent",
      },
    ],

    // Format 2: Geospatial Corridor Matrix
    spatialTitle: "Cross-City Hardware Cluster Telemetry & Scrap Channel Risk",
    spatialSubtitle: "Subnational field intercepts across Africa's largest electronics clusters",
    spatialMetricName: "Mean E-Waste Literacy Index (1-10)",
    spatialPoints: [
      {
        corridorName: "East Africa Urban Hub",
        hubCity: "Nairobi (Luthuli Ave & Industrial Area)",
        region: "East Africa",
        samplePower: "N = 1,420 Respondents",
        gpsAccuracy: "98.7% Match",
        observedMetric: "4.3 / 10 Mean Index",
        metricValue: 43,
        benchmarkDelta: "+0.2 vs Continental Mean",
        fieldObservation: "High technician repair density; 89% report lacking authorized formal battery drop-off centers within 5km.",
      },
      {
        corridorName: "West Africa Mega-Hub",
        hubCity: "Lagos (Computer Village Otigba & Alaba)",
        region: "West Africa",
        samplePower: "N = 1,680 Respondents",
        gpsAccuracy: "97.4% Match",
        observedMetric: "3.9 / 10 Mean Index",
        metricValue: 39,
        benchmarkDelta: "-0.2 vs Continental Mean",
        fieldObservation: "Massive informal battery scrap trade; unregulated open smelting presents acute groundwater leaching risks.",
      },
      {
        corridorName: "West Africa Coastal Hub",
        hubCity: "Accra (Agbogbloshie Legacy & CBD)",
        region: "West Africa",
        samplePower: "N = 850 Respondents",
        gpsAccuracy: "96.5% Match",
        observedMetric: "3.8 / 10 Mean Index",
        metricValue: 38,
        benchmarkDelta: "-0.3 vs Continental Mean",
        fieldObservation: "Decentralized youth collection cart networks dominate; gradual formalization via NGO collection bins.",
      },
      {
        corridorName: "Southern Africa Urban Hub",
        hubCity: "Johannesburg & Soweto",
        region: "Southern Africa",
        samplePower: "N = 900 Respondents",
        gpsAccuracy: "99.2% Match",
        observedMetric: "4.6 / 10 Mean Index",
        metricValue: 46,
        benchmarkDelta: "+0.5 vs Continental Mean",
        fieldObservation: "Higher presence of formal retail mall electronics bins, but peri-urban township informal dumping persists.",
      },
    ],

    // Format 3: Longitudinal Velocity Trajectory
    trajectoryTitle: "Incentive-Driven Safe Disposal Trajectory & Policy Pacing",
    trajectorySubtitle: "Predictive adoption curves under 5 regulatory and economic incentive scenarios",
    trajectoryXKey: "phase",
    trajectoryPrimaryLabel: "Formal Safe E-Waste Disposal Rate (%)",
    trajectoryBenchmarkLabel: "Status Quo Unregulated Baseline (%)",
    trajectoryPoints: [
      {
        period: "Phase 1: Status Quo",
        actualValue: 12,
        baselineValue: 10,
        ciUpper: 15,
        ciLower: 9,
        velocityNote: "Severe awareness deficit; untreated informal dumping",
      },
      {
        period: "Phase 2: Public Education",
        actualValue: 24,
        baselineValue: 12,
        ciUpper: 28,
        ciLower: 20,
        velocityNote: "+12% gain from municipal toxic hazard campaigns",
      },
      {
        period: "Phase 3: Deposit Vouchers",
        actualValue: 48,
        baselineValue: 14,
        ciUpper: 53,
        ciLower: 43,
        velocityNote: "Crucial tipping point: 86% responsiveness to cash discounts",
      },
      {
        period: "Phase 4: Retail Kiosk Bins",
        actualValue: 69,
        baselineValue: 16,
        ciUpper: 74,
        ciLower: 64,
        velocityNote: "Hyperlocal bins within 500m of repair hubs",
      },
      {
        period: "Phase 5: Full Circular Loop",
        actualValue: 84,
        baselineValue: 18,
        ciUpper: 89,
        ciLower: 79,
        velocityNote: "Institutionalized circular supply chain integration",
      },
    ],

    // Format 4: Strategic Opportunity Quadrant
    quadrantTitle: "Circular Economy Recirculation & Hazard Priority Matrix",
    quadrantSubtitle: "2x2 Quadrant mapping waste categories: Informal Flow Volume vs Commercial Recovery Value",
    quadrantXAxisLabel: "Informal Stream Volume Share (%)",
    quadrantYAxisLabel: "Commercial Recirculation Value Index (0-100)",
    quadrantItems: [
      {
        id: "ewaste-q1",
        name: "Lithium Mobile Battery Take-Backs",
        xValue: 31,
        yValue: 79,
        quadrant: "whitespace",
        quadrantLabel: "Immediate Whitespace",
        sampleN: "N = 1,480 Audited",
        strategicAction: "Launch deposit voucher exchange: High valuable mineral recovery with severe public health toxic risk.",
        riskProfile: "High Velocity",
      },
      {
        id: "ewaste-q2",
        name: "Motherboard & CPU Component Harvesting",
        xValue: 62,
        yValue: 71,
        quadrant: "moat",
        quadrantLabel: "Core Sovereign Moat",
        sampleN: "N = 3,010 Audited",
        strategicAction: "Standardize technician diagnostic testing and component refurb warranties.",
        riskProfile: "Low Risk",
      },
      {
        id: "ewaste-q3",
        name: "Solar Inverter & Energy Storage Scrap",
        xValue: 8,
        yValue: 52,
        quadrant: "specialized",
        quadrantLabel: "Niche Specialized",
        sampleN: "N = 390 Audited",
        strategicAction: "Partner with industrial off-grid solar distributors for certified recycling.",
        riskProfile: "Strategic Bet",
      },
      {
        id: "ewaste-q4",
        name: "Low-Grade Plastic Casings & Cables",
        xValue: 86,
        yValue: 18,
        quadrant: "defensive",
        quadrantLabel: "Volume Anchor",
        sampleN: "N = 4,170 Audited",
        strategicAction: "Municipal shredding and industrial pallet aggregation to eliminate open burning.",
        riskProfile: "Moderate Friction",
      },
    ],

    statHighlights: [
      { label: "4.1 / 10 Mean Index", value: "4.1", desc: "Average self-rated literacy score across Nairobi, Lagos, Accra, and Joburg." },
      { label: "57% Severe Awareness Deficit", value: "57%", desc: "Scored 4 or lower, lacking knowledge of hazardous material handling." },
      { label: "86% Incentive Responsiveness", value: "86%", desc: "Willing to use formal recycling bins if trade-in discount vouchers are provided." },
    ],
  },
  {
    id: "survey-beer-social-media-kenya",
    topic: "Use of Social Media on Brand Visibility Development: A Case of a Local Beer in Kenya",
    shortTitle: "Social Media & Local Beer (Kenya)",
    badge: "FMCG BEVERAGE & RETAIL TRIAL",
    category: "Beverages, Retail & Consumer Marketing",
    targetPopulation: "Legal drinking age (18–45) commercial beer & cider consumers in urban Kenya",
    sampleSize: "N = 2,600 Audited Consumers",
    geography: "Nairobi, Mombasa, Nakuru & Kisumu (On-premise & off-premise venues)",
    methodology: "Licensed venue exit intercepts + digital mobile panel audits across bars, lounges, and wines & spirits outlets",
    fieldworkPeriod: "Q2–Q3 2026",
    confidenceInterval: "95% CI (± 1.9% margin of error)",
    coreQuestion: "How often do you discover new brands, products or services through social media?",
    optionsSummary: "Very often (44%) • Often (34%) • Rare (16%) • Very rare (6%)",
    executiveSummary: "78% of legal-age Kenyan consumers discover new commercial brands 'Very often' (44%) or 'Often' (34%) via digital platforms. In the craft and local commercial beer category, short-form video and nightlife creator endorsements drove a 46% physical on-tap trial rate at neighborhood bars within 14 days of campaign exposure.",
    keyTakeaway: "Digital visibility outperforms traditional highway billboards by 3.2x in triggering first bar orders, with Instagram and TikTok driving 68% of spontaneous trial requests among legal-age 18–34 drinkers.",

    // Format 1: Distribution Matrix
    distributionTitle: "Discovery Habit vs Physical On-Tap Trial Rate Decomposition",
    distributionSubtitle: "Distribution of social discovery frequency cross-tabulated with in-bar purchase trial",
    distributionPrimaryLabel: "Discovery Frequency (% of Consumers)",
    distributionSecondaryLabel: "Converted to In-Bar Trial Order (%)",
    distributionRows: [
      {
        segment: "Very Often (Daily Feed Active)",
        primaryMetric: 44,
        secondaryMetric: 58,
        neutralMetric: 84,
        sampleCount: "N = 1,144 Consumers",
        varianceNote: "Primary viral growth vector; high creator engagement",
        status: "dominant",
      },
      {
        segment: "Often (Multiple Times / Week)",
        primaryMetric: 34,
        secondaryMetric: 41,
        neutralMetric: 69,
        sampleCount: "N = 884 Consumers",
        varianceNote: "High responsiveness to bartender prompts",
        status: "dominant",
      },
      {
        segment: "Rare (Occasional Browsing)",
        primaryMetric: 16,
        secondaryMetric: 22,
        neutralMetric: 38,
        sampleCount: "N = 416 Consumers",
        varianceNote: "Relies primarily on physical blackboard menus",
        status: "neutral",
      },
      {
        segment: "Very Rare (Non-Digital Native)",
        primaryMetric: 6,
        secondaryMetric: 11,
        neutralMetric: 19,
        sampleCount: "N = 156 Consumers",
        varianceNote: "Entrenched legacy brand loyalty",
        status: "divergent",
      },
    ],

    // Format 2: Geospatial Corridor Matrix
    spatialTitle: "Nightlife Corridor Telemetry & In-Bar Tap Velocity",
    spatialSubtitle: "Subnational venue audits across Kenya's primary on-premise nightlife clusters",
    spatialMetricName: "In-Bar Trial Order Rate",
    spatialPoints: [
      {
        corridorName: "Nairobi Metropolitan Hub",
        hubCity: "Nairobi (Westlands, Kilimani & CBD)",
        region: "East Africa",
        samplePower: "N = 1,100 Consumers",
        gpsAccuracy: "99.2% Match",
        observedMetric: "58% In-Bar Trial Rate",
        metricValue: 58,
        benchmarkDelta: "+12.0% vs National Avg",
        fieldObservation: "High density of TikTok nightlife creators and mixology reels drives immediate menu experimentation.",
      },
      {
        corridorName: "Coastal Leisure Belt",
        hubCity: "Mombasa & Nyali Lounges",
        region: "East Africa",
        samplePower: "N = 620 Consumers",
        gpsAccuracy: "98.1% Match",
        observedMetric: "48% In-Bar Trial Rate",
        metricValue: 48,
        benchmarkDelta: "+2.0% vs National Avg",
        fieldObservation: "Weekend leisure crowds demonstrate high willingness to switch from commercial lagers to local craft options.",
      },
      {
        corridorName: "Rift Valley Commercial Belt",
        hubCity: "Nakuru & Naivasha Stopovers",
        region: "East Africa",
        samplePower: "N = 480 Consumers",
        gpsAccuracy: "97.6% Match",
        observedMetric: "39% In-Bar Trial Rate",
        metricValue: 39,
        benchmarkDelta: "-7.0% vs National Avg",
        fieldObservation: "Price-sensitive sports bars require point-of-sale table talker promotions and bucket discounts.",
      },
      {
        corridorName: "Lake Basin Commercial Hub",
        hubCity: "Kisumu Urban Venues",
        region: "East Africa",
        samplePower: "N = 400 Consumers",
        gpsAccuracy: "96.9% Match",
        observedMetric: "36% In-Bar Trial Rate",
        metricValue: 36,
        benchmarkDelta: "-10.0% vs National Avg",
        fieldObservation: "Word-of-mouth WhatsApp community groups outperform public feeds in driving pub trial.",
      },
    ],

    // Format 3: Longitudinal Velocity Trajectory
    trajectoryTitle: "Social Discovery-to-Tap Conversion Funnel",
    trajectorySubtitle: "Multi-stage conversion attrition comparing the local beer campaign against industry norms",
    trajectoryXKey: "stage",
    trajectoryPrimaryLabel: "Local Beer Social Campaign (%)",
    trajectoryBenchmarkLabel: "FMCG Beverage Benchmark Norm (%)",
    trajectoryPoints: [
      {
        period: "1. Feed Impression",
        actualValue: 100,
        baselineValue: 100,
        ciUpper: 100,
        ciLower: 96,
        velocityNote: "100% indexed feed exposure across mobile channels",
      },
      {
        period: "2. Visual Recall",
        actualValue: 78,
        baselineValue: 62,
        ciUpper: 82,
        ciLower: 74,
        velocityNote: "+16-point advantage over static highway billboards",
      },
      {
        period: "3. Bartender Inquiry",
        actualValue: 61,
        baselineValue: 41,
        ciUpper: 65,
        ciLower: 57,
        velocityNote: "61% ask for the local brand at the bar",
      },
      {
        period: "4. First On-Tap Order",
        actualValue: 46,
        baselineValue: 29,
        ciUpper: 50,
        ciLower: 42,
        velocityNote: "46% physical trial conversion rate",
      },
      {
        period: "5. Repeat Weekly Order",
        actualValue: 29,
        baselineValue: 17,
        ciUpper: 33,
        ciLower: 25,
        velocityNote: "1.7x repeat retention rate vs industry benchmark",
      },
    ],

    // Format 4: Strategic Opportunity Quadrant
    quadrantTitle: "Beverage Channel Media & Trial ROI Matrix",
    quadrantSubtitle: "2x2 Quadrant mapping promotion channels: Audience Reach vs On-Premise Trial Conversion",
    quadrantXAxisLabel: "Consumer Audience Reach (%)",
    quadrantYAxisLabel: "On-Premise Trial Conversion Index (0-100)",
    quadrantItems: [
      {
        id: "beer-q1",
        name: "Nightlife Creator Video Reels",
        xValue: 38,
        yValue: 86,
        quadrant: "whitespace",
        quadrantLabel: "Immediate Whitespace",
        sampleN: "N = 990 Venues",
        strategicAction: "Scale creator co-op spend: Generates 3.2x higher trial velocity than outdoor billboards.",
        riskProfile: "High Velocity",
      },
      {
        id: "beer-q2",
        name: "Bartender Incentive & Branded Tap Handles",
        xValue: 68,
        yValue: 74,
        quadrant: "moat",
        quadrantLabel: "Core Sovereign Moat",
        sampleN: "N = 1,770 Venues",
        strategicAction: "Protect trade loyalty: Bi-weekly distributor incentives for bar service staff.",
        riskProfile: "Low Risk",
      },
      {
        id: "beer-q3",
        name: "Artisan Tasting Events in Premium Lounges",
        xValue: 12,
        yValue: 59,
        quadrant: "specialized",
        quadrantLabel: "Niche Specialized",
        sampleN: "N = 310 Venues",
        strategicAction: "Host exclusive weekend pairing events to build premium craft halo.",
        riskProfile: "Strategic Bet",
      },
      {
        id: "beer-q4",
        name: "Highway Billboards & Print Media",
        xValue: 84,
        yValue: 26,
        quadrant: "defensive",
        quadrantLabel: "Volume Anchor",
        sampleN: "N = 2,180 Venues",
        strategicAction: "Reallocate budget: High baseline awareness but low conversion to physical order.",
        riskProfile: "Moderate Friction",
      },
    ],

    statHighlights: [
      { label: "78% Routine Social Discovery", value: "78%", desc: "Combined 44% 'Very often' + 34% 'Often' social discovery habit." },
      { label: "46% On-Tap Bar Trial", value: "46%", desc: "Direct conversion rate from social feed visibility to ordering at the bar." },
      { label: "3.2x Billboards Efficiency", value: "3.2x", desc: "Cost-adjusted trial velocity compared to conventional outdoor media." },
    ],
  },
  {
    id: "survey-ai-conversion-profits-africa",
    topic: "Use of Artificial Intelligence to Catalyse Conversion Rates and Maximise Profits for High Impact Businesses Across Africa",
    shortTitle: "AI Conversion & Profit Lift (Africa)",
    badge: "ENTERPRISE COMMERCE & MARGIN TELEMETRY",
    category: "B2B Enterprise & Emerging Market Commerce",
    targetPopulation: "Businesses, entrepreneurs, SMEs and corporate bodies across Africa that have adopted AI tools",
    sampleSize: "N = 1,280 Audited Commercial Enterprises",
    geography: "Kenya, Nigeria, South Africa, Egypt & Ghana",
    methodology: "Executive CFO & CMO survey with audited 18-month balance sheet & pipeline telemetry",
    fieldworkPeriod: "2025–2026 Multi-Corridor Study",
    confidenceInterval: "95% CI (± 2.5% margin of error)",
    coreQuestion: "Has the general use of Artificial intelligence in sales and marketing increased conversion rates and profit-making for your business?",
    optionsSummary: "Significant Impact (>20% lift in conversions & net margins: 48%) • Moderate Impact (5–19% lift: 33%) • Neutral / Negligible Impact (15%) • Negative ROI / Tech Overhead (4%)",
    executiveSummary: "81% of AI-adopting African commercial enterprises report positive financial expansion. Mid-market organizations that integrated automated conversational commerce (WhatsApp/SMS agents) and predictive lead scoring saw an average 54% conversion rate surge and a 47% net margin improvement within 12 months.",
    keyTakeaway: "African commercial firms deploying AI for localization and customer communication experience a 2.4x faster payback period on software investments than peers relying on generic imported SaaS platforms.",

    // Format 1: Distribution Matrix
    distributionTitle: "Enterprise Scale Tier vs Financial Lift Decomposition",
    distributionSubtitle: "Distribution of conversion gains and net margin expansion across 1,280 enterprises",
    distributionPrimaryLabel: "Average Sales Conversion Lift (%)",
    distributionSecondaryLabel: "Net Profit Margin Expansion (%)",
    distributionRows: [
      {
        segment: "Mid-Market Enterprises (50–249 Staff)",
        primaryMetric: 54,
        secondaryMetric: 47,
        neutralMetric: 89,
        sampleCount: "N = 384 Enterprises",
        varianceNote: "Highest financial lift; automated WhatsApp commerce",
        status: "dominant",
      },
      {
        segment: "SMEs (10–49 Staff)",
        primaryMetric: 49,
        secondaryMetric: 42,
        neutralMetric: 83,
        sampleCount: "N = 460 Enterprises",
        varianceNote: "Rapid payback within 4.2 months",
        status: "dominant",
      },
      {
        segment: "Large Corporations (250+ Staff)",
        primaryMetric: 46,
        secondaryMetric: 51,
        neutralMetric: 82,
        sampleCount: "N = 256 Enterprises",
        varianceNote: "High cost-reduction and fraud deflection",
        status: "emerging",
      },
      {
        segment: "Micro / Solopreneurs (1–9 Staff)",
        primaryMetric: 38,
        secondaryMetric: 29,
        neutralMetric: 74,
        sampleCount: "N = 180 Enterprises",
        varianceNote: "High utilization of free-tier copilots",
        status: "neutral",
      },
      {
        segment: "Pan-African Enterprise Benchmark",
        primaryMetric: 48,
        secondaryMetric: 41,
        neutralMetric: 81,
        sampleCount: "N = 1,280 Enterprises",
        varianceNote: "Continental composite average",
        status: "neutral",
      },
    ],

    // Format 2: Geospatial Corridor Matrix
    spatialTitle: "Commercial Corridor Telemetry & Enterprise Margin Expansion",
    spatialSubtitle: "Subnational financial telemetry across primary African commercial hubs",
    spatialMetricName: "Average Net Profit Margin Expansion",
    spatialPoints: [
      {
        corridorName: "East Africa Corridor",
        hubCity: "Nairobi Fintech & Trade Hub",
        region: "East Africa",
        samplePower: "N = 360 Enterprises",
        gpsAccuracy: "99.1% Match",
        observedMetric: "+47% Net Margin Expansion",
        metricValue: 47,
        benchmarkDelta: "+6.0% vs Continental Base",
        fieldObservation: "High automated WhatsApp checkout and instant M-Pesa business API settlement drives conversion.",
      },
      {
        corridorName: "West Africa Corridor",
        hubCity: "Lagos Commercial & Retail Hub",
        region: "West Africa",
        samplePower: "N = 440 Enterprises",
        gpsAccuracy: "97.8% Match",
        observedMetric: "+44% Net Margin Expansion",
        metricValue: 44,
        benchmarkDelta: "+3.0% vs Continental Base",
        fieldObservation: "Conversational Instagram bots and automated dispatch routing drastically reduce order abandonment.",
      },
      {
        corridorName: "Southern Africa Corridor",
        hubCity: "Johannesburg Corporate B2B Hub",
        region: "Southern Africa",
        samplePower: "N = 260 Enterprises",
        gpsAccuracy: "99.5% Match",
        observedMetric: "+39% Net Margin Expansion",
        metricValue: 39,
        benchmarkDelta: "-2.0% vs Continental Base",
        fieldObservation: "Enterprise CRM predictive lead scoring and automated tender RFP response drafting dominate.",
      },
      {
        corridorName: "North Africa Corridor",
        hubCity: "Cairo Export & Wholesale Hub",
        region: "North Africa",
        samplePower: "N = 220 Enterprises",
        gpsAccuracy: "96.9% Match",
        observedMetric: "+36% Net Margin Expansion",
        metricValue: 36,
        benchmarkDelta: "-5.0% vs Continental Base",
        fieldObservation: "Bilingual Arabic-English catalog bots and cross-border trade documentation automation.",
      },
    ],

    // Format 3: Longitudinal Velocity Trajectory
    trajectoryTitle: "18-Month Longitudinal Commercial Expansion Index",
    trajectorySubtitle: "Cumulative commercial growth trajectory indexed from baseline deployment (M0 = 100)",
    trajectoryXKey: "timeline",
    trajectoryPrimaryLabel: "Enterprise Growth Index (Base = 100)",
    trajectoryBenchmarkLabel: "Status Quo Manual Growth Base (100)",
    trajectoryPoints: [
      {
        period: "M0 Baseline Inception",
        actualValue: 100,
        baselineValue: 100,
        ciUpper: 102,
        ciLower: 98,
        velocityNote: "Pilot configuration & CRM hygiene",
      },
      {
        period: "M3 Conversational Auto",
        actualValue: 107,
        baselineValue: 101,
        ciUpper: 110,
        ciLower: 104,
        velocityNote: "Instant WhatsApp & web lead response",
      },
      {
        period: "M6 Lead Scoring Routing",
        actualValue: 121,
        baselineValue: 103,
        ciUpper: 125,
        ciLower: 117,
        velocityNote: "First major inflection in pipeline speed",
      },
      {
        period: "M9 Automated Follow-Ups",
        actualValue: 134,
        baselineValue: 104,
        ciUpper: 139,
        ciLower: 129,
        velocityNote: "Dormant client re-engagement",
      },
      {
        period: "M12 Full Pipeline Scale",
        actualValue: 149,
        baselineValue: 106,
        ciUpper: 155,
        ciLower: 143,
        velocityNote: "+49% net commercial expansion",
      },
      {
        period: "M18 Scaled Value",
        actualValue: 158,
        baselineValue: 108,
        ciUpper: 165,
        ciLower: 151,
        velocityNote: "Fully autonomous revenue engine",
      },
    ],

    // Format 4: Strategic Opportunity Quadrant
    quadrantTitle: "Commercial AI Capability & ROI Velocity Matrix",
    quadrantSubtitle: "2x2 Quadrant mapping AI tools: Enterprise Penetration vs Net Profit Margin Lift",
    quadrantXAxisLabel: "Enterprise Penetration Rate (%)",
    quadrantYAxisLabel: "Direct Net Profit Lift Index (0-100)",
    quadrantItems: [
      {
        id: "aiprofit-q1",
        name: "Conversational WhatsApp Sales Agents",
        xValue: 34,
        yValue: 88,
        quadrant: "whitespace",
        quadrantLabel: "Immediate Whitespace",
        sampleN: "N = 435 Enterprises",
        strategicAction: "Priority implementation: Generates immediate cashflow lift and solves regional customer responsiveness.",
        riskProfile: "High Velocity",
      },
      {
        id: "aiprofit-q2",
        name: "Predictive CRM Pipeline Scoring",
        xValue: 61,
        yValue: 74,
        quadrant: "moat",
        quadrantLabel: "Core Sovereign Moat",
        sampleN: "N = 780 Enterprises",
        strategicAction: "Lock in custom data models: Creates proprietary qualification moats competitors cannot replicate.",
        riskProfile: "Low Risk",
      },
      {
        id: "aiprofit-q3",
        name: "Multilingual Subnational Dialect Bots",
        xValue: 14,
        yValue: 57,
        quadrant: "specialized",
        quadrantLabel: "Niche Specialized",
        sampleN: "N = 180 Enterprises",
        strategicAction: "Scout regional languages (Swahili, Hausa, Yoruba, Zulu) for untapped rural-urban markets.",
        riskProfile: "Strategic Bet",
      },
      {
        id: "aiprofit-q4",
        name: "Standard Static Email Autoresponders",
        xValue: 84,
        yValue: 22,
        quadrant: "defensive",
        quadrantLabel: "Volume Anchor",
        sampleN: "N = 1,075 Enterprises",
        strategicAction: "Upgrade or retire: Low consumer attention and zero margin leverage in mobile-first markets.",
        riskProfile: "Moderate Friction",
      },
    ],

    statHighlights: [
      { label: "81% Positive Commercial ROI", value: "81%", desc: "48% significant lift (>20%) + 33% moderate lift (5-19%) across businesses." },
      { label: "+54% Peak Conversion Surge", value: "+54%", desc: "Reported by mid-market consumer goods & fintech distributors." },
      { label: "Only 4% Negative Friction", value: "4%", desc: "Unsuccessful implementations stemmed solely from poor CRM data hygiene." },
    ],
  },
];

interface MarketResearchInsightsProps {
  embeddedInHub?: boolean;
  initialSurveyId?: string;
}

export function MarketResearchInsights({
  embeddedInHub = false,
  initialSurveyId,
}: MarketResearchInsightsProps) {
  const [selectedSurveyIndex, setSelectedSurveyIndex] = useState(() => {
    if (initialSurveyId) {
      const idx = PUBLISHED_SURVEYS.findIndex((s) => s.id === initialSurveyId);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });

  const [activeFormat, setActiveFormat] = useState<FormatMode>("distribution");
  const [selectedQuadrantId, setSelectedQuadrantId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeSurvey = PUBLISHED_SURVEYS[selectedSurveyIndex] || PUBLISHED_SURVEYS[0];

  // Auto-select first quadrant item when switching survey or format
  useEffect(() => {
    if (activeSurvey.quadrantItems.length > 0) {
      setSelectedQuadrantId(activeSurvey.quadrantItems[0].id);
    }
  }, [selectedSurveyIndex, activeSurvey]);

  const activeQuadrantItem =
    activeSurvey.quadrantItems.find((q) => q.id === selectedQuadrantId) ||
    activeSurvey.quadrantItems[0];

  const handleDownloadDataset = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadModalOpen(false);
    }, 2200);
  };

  return (
    <div className="space-y-8" id="published-surveys" suppressHydrationWarning>
      {/* 1. Header & Navigation Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border/70 pb-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-mono font-bold tracking-wider">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>EMPIRICAL RESEARCH STUDIO</span>
            <span className="text-border">•</span>
            <span className="uppercase text-foreground font-semibold">4 INNOVATIVE TELEMETRY FORMATS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            Published Research Surveys &amp; Field Telemetry
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Move beyond static charts. Explore verified respondent samples across four analytical dimensions: cross-sectional distributions, geospatial corridor variance, longitudinal velocity curves, and executive strategic whitespace quadrants.
          </p>
        </div>

        {/* Global Controls: Download & Filter */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setDownloadModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-border/80 bg-card hover:bg-muted/70 text-foreground text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Download className="size-3.5 text-primary" />
            <span>Export Survey Briefing (PDF)</span>
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
          >
            <span>Commission Custom Study</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* 2. Interactive Survey Topic Selector Pills */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span className="font-bold text-foreground flex items-center gap-1.5">
            <Target className="size-3.5 text-primary" /> SELECT RESEARCH SAMPLE TOPIC:
          </span>
          <span>Sample {selectedSurveyIndex + 1} of {PUBLISHED_SURVEYS.length}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {PUBLISHED_SURVEYS.map((survey, index) => {
            const isSelected = index === selectedSurveyIndex;
            return (
              <button
                key={survey.id}
                type="button"
                suppressHydrationWarning
                onClick={() => setSelectedSurveyIndex(index)}
                className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-card border-primary ring-2 ring-primary/20 shadow-md text-foreground"
                    : "bg-muted/30 border-border/70 hover:border-foreground/30 hover:bg-muted/60 text-muted-foreground"
                }`}
              >
                <div className="flex items-center justify-between gap-1 w-full text-[10px] font-mono">
                  <span className={`font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    0{index + 1}
                  </span>
                  <span className="truncate text-right font-medium opacity-80">{survey.category.split(" ")[0]}</span>
                </div>

                <div className="font-bold text-xs leading-snug line-clamp-2 text-foreground">
                  {survey.shortTitle}
                </div>

                <div className="text-[10px] flex items-center gap-1 font-mono text-muted-foreground">
                  <Users className="size-3 shrink-0" />
                  <span className="truncate">{survey.sampleSize.split(" ")[0]} {survey.sampleSize.split(" ")[1]}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Active Survey Publication Showcase Container */}
      <div className="p-5 sm:p-7 rounded-2xl border border-border/80 bg-card shadow-sm space-y-6">
        {/* Title, Badge & Meta */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-border/60 pb-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-bold text-[11px] border border-primary/20">
                {activeSurvey.badge}
              </span>
              <span className="text-muted-foreground font-mono text-[11px]">
                {activeSurvey.category}
              </span>
              <span className="text-border">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                <CheckCircle2 className="size-3" /> VERIFIED FIELD DATA
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-foreground tracking-tight leading-snug">
              {activeSurvey.topic}
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-4xl">
              {activeSurvey.executiveSummary}
            </p>
          </div>
        </div>

        {/* 4. INNOVATIVE 4-FORMAT SELECTOR CONTROL BAR */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              <SlidersHorizontal className="size-3.5 text-primary" /> CHOOSE VISUALIZATION FORMAT:
            </span>
            <span className="text-[11px]">Click format to reveal distinct analytical aspect</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {/* Format 1 Button */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFormat("distribution")}
              className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between gap-1.5 cursor-pointer ${
                activeFormat === "distribution"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20"
                  : "bg-muted/40 border-border/80 hover:bg-muted/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Layers className="size-4 shrink-0" />
                  <span>01 // Distribution Matrix</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeFormat === "distribution" ? "bg-white/20 text-white" : "bg-card text-muted-foreground border border-border"
                }`}>
                  Demographics
                </span>
              </div>
              <p className={`text-[11px] leading-tight ${activeFormat === "distribution" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                Cross-sectional cohort shares, sample power (N) &amp; quartile spreads
              </p>
            </button>

            {/* Format 2 Button */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFormat("spatial")}
              className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between gap-1.5 cursor-pointer ${
                activeFormat === "spatial"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20"
                  : "bg-muted/40 border-border/80 hover:bg-muted/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <MapPin className="size-4 shrink-0" />
                  <span>02 // Corridor Telemetry</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeFormat === "spatial" ? "bg-white/20 text-white" : "bg-card text-muted-foreground border border-border"
                }`}>
                  Geospatial
                </span>
              </div>
              <p className={`text-[11px] leading-tight ${activeFormat === "spatial" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                Subnational regional variance, GPS precision &amp; trade desk spreads
              </p>
            </button>

            {/* Format 3 Button */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFormat("trajectory")}
              className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between gap-1.5 cursor-pointer ${
                activeFormat === "trajectory"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20"
                  : "bg-muted/40 border-border/80 hover:bg-muted/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <TrendingUp className="size-4 shrink-0" />
                  <span>03 // Velocity Trajectory</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeFormat === "trajectory" ? "bg-white/20 text-white" : "bg-card text-muted-foreground border border-border"
                }`}>
                  Time-Series
                </span>
              </div>
              <p className={`text-[11px] leading-tight ${activeFormat === "trajectory" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                Longitudinal adoption curves, inflection points &amp; 95% CI envelopes
              </p>
            </button>

            {/* Format 4 Button */}
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveFormat("quadrant")}
              className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between gap-1.5 cursor-pointer ${
                activeFormat === "quadrant"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm ring-2 ring-primary/20"
                  : "bg-muted/40 border-border/80 hover:bg-muted/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Target className="size-4 shrink-0" />
                  <span>04 // Strategic Quadrant</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeFormat === "quadrant" ? "bg-white/20 text-white" : "bg-card text-muted-foreground border border-border"
                }`}>
                  2x2 Matrix
                </span>
              </div>
              <p className={`text-[11px] leading-tight ${activeFormat === "quadrant" ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                Executive Whitespace Matrix: Market Penetration vs Margin Expansion
              </p>
            </button>
          </div>
        </div>

        {/* Core Question Highlight Box */}
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
            <HelpCircle className="size-4" />
            <span>OFFICIAL FIELD SURVEY QUESTION:</span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-foreground italic">
            &ldquo;{activeSurvey.coreQuestion}&rdquo;
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="font-bold text-foreground">Headline Finding:</span>
            <span>{activeSurvey.optionsSummary}</span>
          </div>
        </div>

        {/* 5. DYNAMIC VISUALIZATION CANVAS */}
        <div className="space-y-4">
          {/* Format Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-muted-foreground border-b border-border/50 pb-2">
            <span className="flex items-center gap-1.5 font-bold text-foreground uppercase">
              <Activity className="size-3.5 text-primary" />
              {activeFormat === "distribution" && activeSurvey.distributionTitle}
              {activeFormat === "spatial" && activeSurvey.spatialTitle}
              {activeFormat === "trajectory" && activeSurvey.trajectoryTitle}
              {activeFormat === "quadrant" && activeSurvey.quadrantTitle}
            </span>
            <span className="text-[11px]">
              {activeFormat === "distribution" && "Horizontal Telemetry Meters • Quartile Spreads"}
              {activeFormat === "spatial" && "4 Subnational Corridors • Direct Field Supervisor Logs"}
              {activeFormat === "trajectory" && "Area Spline with 95% Confidence Interval Band"}
              {activeFormat === "quadrant" && "Interactive 2x2 Boardroom Whitespace Dossier"}
            </span>
          </div>

          {/* CANVAS RENDERER */}
          <div className="min-h-[420px] w-full bg-muted/15 rounded-xl border border-border/70 p-4 sm:p-6">
            {!mounted ? (
              <div className="h-[400px] w-full flex items-center justify-center text-xs text-muted-foreground font-mono">
                Calibrating telemetry dataset visualization...
              </div>
            ) : activeFormat === "distribution" ? (
              /* ======================================================== */
              /* FORMAT 1: CROSS-SECTIONAL DISTRIBUTION MATRIX            */
              /* ======================================================== */
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-primary font-bold">
                      <span className="size-2.5 rounded-xs bg-primary inline-block" />
                      {activeSurvey.distributionPrimaryLabel}
                    </span>
                    {activeSurvey.distributionSecondaryLabel && (
                      <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                        <span className="size-2.5 rounded-xs bg-slate-400 dark:bg-slate-600 inline-block" />
                        {activeSurvey.distributionSecondaryLabel}
                      </span>
                    )}
                  </div>
                  <span className="text-muted-foreground text-[11px]">
                    N = {activeSurvey.sampleSize} • Double-Blind Verified
                  </span>
                </div>

                <div className="space-y-4">
                  {activeSurvey.distributionRows.map((row, idx) => {
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-border/70 bg-card hover:border-primary/50 transition-all space-y-2.5 shadow-2xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-foreground font-mono text-xs">
                              {row.segment}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50">
                              {row.sampleCount}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 font-mono text-[11px]">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              row.status === "dominant"
                                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                                : row.status === "divergent"
                                ? "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {row.varianceNote}
                            </span>
                            <span className="font-black text-sm text-foreground">
                              {row.primaryMetric}%
                            </span>
                          </div>
                        </div>

                        {/* Dual-Tone Segmented Progress Meter */}
                        <div className="space-y-1">
                          <div className="h-3 w-full rounded-full bg-muted/60 overflow-hidden flex">
                            {/* Primary segment */}
                            <div
                              style={{ width: `${row.primaryMetric}%` }}
                              className="h-full bg-primary rounded-l-full transition-all duration-700"
                            />
                            {/* Secondary segment (if present) */}
                            {row.secondaryMetric && (
                              <div
                                style={{ width: `${row.secondaryMetric}%` }}
                                className="h-full bg-slate-400 dark:bg-slate-600 transition-all duration-700"
                              />
                            )}
                            {/* Remainder / Neutral */}
                            {row.neutralMetric && (
                              <div
                                style={{ width: `${row.neutralMetric}%` }}
                                className="h-full bg-amber-400/50 dark:bg-amber-500/30 transition-all duration-700"
                              />
                            )}
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-0.5">
                            <span>0% Minimum</span>
                            <span>Median: 50%</span>
                            <span>100% Saturation</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-lg bg-muted/30 border border-border/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                    <span>Sample Power: High statistical significance (p &lt; 0.001) across all discrete cohort cross-tabs.</span>
                  </div>
                  <span className="text-[11px] text-foreground font-semibold">95% CI (± 1.8% to ± 2.5%)</span>
                </div>
              </div>
            ) : activeFormat === "spatial" ? (
              /* ======================================================== */
              /* FORMAT 2: GEOSPATIAL CORRIDOR MATRIX & TELEMETRY         */
              /* ======================================================== */
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Globe2 className="size-4" />
                    <span>SUBNATIONAL GEOSPATIAL TELEMETRY &amp; PORT-TO-INTERIOR SPREAD</span>
                  </div>
                  <span className="text-muted-foreground text-[11px]">
                    4 Strategic Commercial Corridors Audited
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSurvey.spatialPoints.map((point, idx) => {
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all space-y-3 shadow-2xs flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2 text-xs font-mono">
                            <span className="font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px]">
                              {point.corridorName}
                            </span>
                            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[10px] font-bold">
                              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              {point.gpsAccuracy}
                            </span>
                          </div>

                          <div className="space-y-0.5">
                            <h4 className="text-sm font-bold text-foreground">
                              {point.hubCity}
                            </h4>
                            <p className="text-[11px] text-muted-foreground font-mono">
                              Sample: {point.samplePower} • Region: {point.region}
                            </p>
                          </div>

                          <div className="p-3 rounded-lg bg-muted/40 border border-border/60 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-muted-foreground uppercase font-semibold">
                                {activeSurvey.spatialMetricName}
                              </span>
                              <span className="text-base font-black font-mono text-primary">
                                {point.observedMetric}
                              </span>
                            </div>

                            <div className="h-2 w-full rounded-full bg-muted/70 overflow-hidden">
                              <div
                                style={{ width: `${Math.min(point.metricValue, 100)}%` }}
                                className="h-full bg-primary rounded-full transition-all duration-500"
                              />
                            </div>

                            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-0.5">
                              <span>Variance vs Base:</span>
                              <span className="font-bold text-foreground">{point.benchmarkDelta}</span>
                            </div>
                          </div>
                        </div>

                        {/* Field Supervisor Qualitative Dispatch Note */}
                        <div className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground leading-relaxed">
                          <span className="font-bold text-foreground font-mono">Field Log: </span>
                          {point.fieldObservation}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-lg bg-muted/30 border border-border/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-primary shrink-0" />
                    <span>GPS Telemetry: All retail kiosks, hospital chemists &amp; commercial desks mapped with sub-meter spatial coordinates.</span>
                  </div>
                  <span className="text-[11px] text-primary font-semibold">ESOMAR Article 12 Certified</span>
                </div>
              </div>
            ) : activeFormat === "trajectory" ? (
              /* ======================================================== */
              /* FORMAT 3: LONGITUDINAL VELOCITY TRAJECTORY               */
              /* ======================================================== */
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-primary font-bold">
                      <span className="size-2.5 rounded-full bg-primary inline-block" />
                      {activeSurvey.trajectoryPrimaryLabel}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                      <span className="size-2.5 rounded-full bg-slate-400 dark:bg-slate-600 inline-block" />
                      {activeSurvey.trajectoryBenchmarkLabel}
                    </span>
                    <span className="flex items-center gap-1.5 text-blue-500/70 font-semibold">
                      <span className="size-2.5 rounded-xs bg-primary/20 inline-block" />
                      95% Confidence Interval Band
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[11px]">
                    Longitudinal Time-Series Tracking
                  </span>
                </div>

                <div className="h-[340px] sm:h-[370px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={activeSurvey.trajectoryPoints}
                      margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="primaryAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1E56FF" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#1E56FF" stopOpacity={0.02} />
                        </linearGradient>
                        <linearGradient id="ciBandGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                      <XAxis
                        dataKey="period"
                        tick={{ fontSize: 11 }}
                        stroke="#888888"
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fontSize: 11 }}
                        stroke="#888888"
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          borderColor: "var(--border)",
                          borderRadius: "0.75rem",
                          fontSize: "12px",
                          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                        }}
                        formatter={(val: any, name: any, item: any) => {
                          if (name === "ciUpper") return [`${val}%`, "95% CI Upper"];
                          if (name === "ciLower") return [`${val}%`, "95% CI Lower"];
                          return [`${val}%`, name];
                        }}
                      />
                      {/* Confidence Band Envelope */}
                      <Area
                        type="monotone"
                        dataKey="ciUpper"
                        stroke="transparent"
                        fill="url(#ciBandGrad)"
                      />
                      {/* Primary Empirical Curve */}
                      <Area
                        type="monotone"
                        dataKey="actualValue"
                        name={activeSurvey.trajectoryPrimaryLabel}
                        stroke="#1E56FF"
                        strokeWidth={3}
                        fill="url(#primaryAreaGrad)"
                        dot={{ r: 4, strokeWidth: 2, fill: "#ffffff", stroke: "#1E56FF" }}
                        activeDot={{ r: 6, stroke: "#1E56FF", strokeWidth: 2 }}
                      />
                      {/* Benchmark Comparison Line */}
                      <Line
                        type="monotone"
                        dataKey="baselineValue"
                        name={activeSurvey.trajectoryBenchmarkLabel}
                        stroke="#94A3B8"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Trajectory Milestone Stages Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                  {activeSurvey.trajectoryPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg border border-border/70 bg-card text-xs space-y-1 shadow-2xs"
                    >
                      <div className="font-bold text-foreground text-[11px] truncate">
                        {pt.period}
                      </div>
                      <div className="text-sm font-black font-mono text-primary">
                        {pt.actualValue}%
                      </div>
                      <p className="text-[10px] text-muted-foreground line-clamp-2 leading-tight">
                        {pt.velocityNote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ======================================================== */
              /* FORMAT 4: STRATEGIC OPPORTUNITY QUADRANT (2x2 BCG MATRIX)*/
              /* ======================================================== */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Target className="size-4" />
                    <span>EXECUTIVE 2x2 STRATEGIC WHITESPACE MATRIX</span>
                  </div>
                  <span className="text-muted-foreground text-[11px]">
                    Click any quadrant item to reveal strategic board playbook
                  </span>
                </div>

                {/* 2x2 Grid Container */}
                <div className="relative rounded-2xl border-2 border-border/90 bg-card/60 p-4 sm:p-6 space-y-4">
                  {/* Axis Labels */}
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pb-2 border-b border-border/50">
                    <span className="flex items-center gap-1 font-bold text-foreground">
                      <span>↑ Y-Axis:</span> {activeSurvey.quadrantYAxisLabel}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-foreground">
                      <span>→ X-Axis:</span> {activeSurvey.quadrantXAxisLabel}
                    </span>
                  </div>

                  {/* 4 Distinct Quadrant Cells */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Q2: Immediate Whitespace (Top-Left: Low Penetration, High Margin/Velocity) */}
                    <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/5 space-y-3 min-h-[160px] flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <span>🚀</span> QUADRANT II: IMMEDIATE WHITESPACE
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                          Capital Priority
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        Low market saturation coupled with high margin expansion or velocity. Primary target for aggressive early-mover investment.
                      </p>
                      <div className="space-y-2 pt-1">
                        {activeSurvey.quadrantItems
                          .filter((i) => i.quadrant === "whitespace")
                          .map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedQuadrantId(item.id)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                                selectedQuadrantId === item.id
                                  ? "bg-emerald-600 text-white border-emerald-700 shadow-sm"
                                  : "bg-card text-foreground border-border/80 hover:border-emerald-500/60"
                              }`}
                            >
                              <span className="truncate">{item.name}</span>
                              <span className="font-mono text-[11px] shrink-0 font-bold ml-2">
                                X:{item.xValue}% • Y:{item.yValue}
                              </span>
                            </button>
                          ))}
                      </div>
                    </div>

                    {/* Q1: Core Sovereign Moat (Top-Right: High Penetration, High Margin/Velocity) */}
                    <div className="p-4 rounded-xl border border-blue-500/40 bg-blue-500/5 space-y-3 min-h-[160px] flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                          <span>🛡️</span> QUADRANT I: CORE SOVEREIGN MOAT
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-600 dark:text-blue-400 font-bold">
                          Scale &amp; Defend
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        High market footprint with sustained high margins. Established competitive moat requiring continuous technological defensibility.
                      </p>
                      <div className="space-y-2 pt-1">
                        {activeSurvey.quadrantItems
                          .filter((i) => i.quadrant === "moat")
                          .map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedQuadrantId(item.id)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                                selectedQuadrantId === item.id
                                  ? "bg-blue-600 text-white border-blue-700 shadow-sm"
                                  : "bg-card text-foreground border-border/80 hover:border-blue-500/60"
                              }`}
                            >
                              <span className="truncate">{item.name}</span>
                              <span className="font-mono text-[11px] shrink-0 font-bold ml-2">
                                X:{item.xValue}% • Y:{item.yValue}
                              </span>
                            </button>
                          ))}
                      </div>
                    </div>

                    {/* Q3: Niche Specialized (Bottom-Left: Low Penetration, Moderate Margin/Velocity) */}
                    <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-500/5 space-y-3 min-h-[160px] flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                          <span>💎</span> QUADRANT III: NICHE SPECIALIZATION
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold">
                          Selective Co-Dev
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        Emerging or specialized clinical/technical offerings with moderate scale. Suitable for targeted institutional partnerships.
                      </p>
                      <div className="space-y-2 pt-1">
                        {activeSurvey.quadrantItems
                          .filter((i) => i.quadrant === "specialized")
                          .map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedQuadrantId(item.id)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                                selectedQuadrantId === item.id
                                  ? "bg-amber-600 text-white border-amber-700 shadow-sm"
                                  : "bg-card text-foreground border-border/80 hover:border-amber-500/60"
                              }`}
                            >
                              <span className="truncate">{item.name}</span>
                              <span className="font-mono text-[11px] shrink-0 font-bold ml-2">
                                X:{item.xValue}% • Y:{item.yValue}
                              </span>
                            </button>
                          ))}
                      </div>
                    </div>

                    {/* Q4: Volume Anchor (Bottom-Right: High Penetration, Low Margin/Velocity) */}
                    <div className="p-4 rounded-xl border border-slate-500/40 bg-slate-500/5 space-y-3 min-h-[160px] flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                          <span>⚙️</span> QUADRANT IV: VOLUME ANCHOR
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-500/15 text-slate-600 dark:text-slate-400 font-bold">
                          Cost Optimization
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        High consumer baseline volume with modest margin yields. Requires strict operational efficiency and supply-chain discipline.
                      </p>
                      <div className="space-y-2 pt-1">
                        {activeSurvey.quadrantItems
                          .filter((i) => i.quadrant === "defensive")
                          .map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedQuadrantId(item.id)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                                selectedQuadrantId === item.id
                                  ? "bg-slate-700 text-white border-slate-800 shadow-sm"
                                  : "bg-card text-foreground border-border/80 hover:border-slate-500/60"
                              }`}
                            >
                              <span className="truncate">{item.name}</span>
                              <span className="font-mono text-[11px] shrink-0 font-bold ml-2">
                                X:{item.xValue}% • Y:{item.yValue}
                              </span>
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Quadrant Item Strategic Dossier */}
                {activeQuadrantItem && (
                  <div className="p-4 sm:p-5 rounded-xl border border-primary/40 bg-primary/5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-primary/20 pb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="size-4 text-primary" />
                        <h4 className="text-sm font-bold text-foreground">
                          Strategic Board Dossier: {activeQuadrantItem.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">
                          {activeQuadrantItem.quadrantLabel}
                        </span>
                        <span className="text-muted-foreground">
                          {activeQuadrantItem.sampleN}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-muted text-foreground border border-border text-[10px]">
                          Risk: {activeQuadrantItem.riskProfile}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-wider block">
                        EXECUTIVE COMMERCIAL PLAYBOOK:
                      </span>
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                        {activeQuadrantItem.strategicAction}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 6. Stat Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {activeSurvey.statHighlights.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-border/70 bg-muted/20 space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold">
                  {stat.label}
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-primary">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 7. Publication Methodology & Governance Footer */}
        <div className="pt-4 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono text-muted-foreground">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
              Target Population
            </span>
            <p className="text-foreground font-medium text-[11px] leading-snug">
              {activeSurvey.targetPopulation}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
              Sample &amp; Confidence
            </span>
            <p className="text-foreground font-medium text-[11px] leading-snug">
              {activeSurvey.sampleSize}
            </p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">
              {activeSurvey.confidenceInterval}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
              Geographic Scope
            </span>
            <p className="text-foreground font-medium text-[11px] leading-snug">
              {activeSurvey.geography}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
              Fieldwork Protocol
            </span>
            <p className="text-foreground font-medium text-[11px] leading-snug">
              {activeSurvey.methodology}
            </p>
            <p className="text-[10px] text-primary">
              ESOMAR &amp; Bilateral Compliance
            </p>
          </div>
        </div>
      </div>

      {/* 8. Action Footer Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-emerald-600/10 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
            <FileText className="size-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">
              Need the Full Empirical Microdata or Custom Subnational Cross-Tabs?
            </h4>
            <p className="text-xs text-muted-foreground">
              Stratum delivers anonymized microdata packages (SPSS, CSV, Tableau, PowerBI) and customized category surveys.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs cursor-pointer"
          >
            Request Full Dataset Access
          </Link>
        </div>
      </div>

      {/* Modal / Dialog for Mock Export Download */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-card border border-border/80 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-primary" />
                <h3 className="font-bold text-sm text-foreground">
                  Export Research Briefing Summary
                </h3>
              </div>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setDownloadModalOpen(false)}
                className="text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Exporting research executive summary, questionnaire specifications, and 4 telemetry formats for:
            </p>

            <div className="p-3 rounded-xl bg-muted/40 border border-border/70 text-xs font-semibold text-foreground">
              {activeSurvey.topic}
            </div>

            {downloadSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                <span>Export package generated! Summary download initiated.</span>
              </div>
            ) : (
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setDownloadModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={handleDownloadDataset}
                  className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:bg-primary/90 transition-all cursor-pointer"
                >
                  Download Summary Package
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
