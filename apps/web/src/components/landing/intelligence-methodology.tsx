"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Activity,
  MessageSquare,
  FlaskConical,
  Boxes,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  Users2,
} from "lucide-react";

interface MethodologyItem {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: { label: string; value: string }[];
  points: string[];
}

const METHODOLOGIES: MethodologyItem[] = [
  {
    id: "market-research",
    name: "Market Research",
    badge: "QUANTITATIVE RIGOR",
    headline: "Tailored Market Sizing, Dynamics & Distribution",
    description:
      "We conduct tailored market research for companies seeking to enter, expand, or invest in new markets and sectors across Africa, China, and India commercial corridors.",
    image: "/images/landing-kiosk.jpg",
    imageAlt: "On-the-ground informal market research and retail kiosk verification",
    stats: [
      { label: "Markets Mapped", value: "54 AU Nations" },
      { label: "Audit Precision", value: "99.4%" },
      { label: "Turnaround Time", value: "48-72 Hours" },
    ],
    points: [
      "Market size, volume trajectories, and growth forecast dynamics",
      "Consumer behaviour, segment priorities, and wallet allocation",
      "Competitive landscapes and substitute product benchmarking",
      "Distribution architectures, informal retail channels, and consumption patterns",
      "Market opportunities, emerging trends, and expansion roadmaps",
    ],
  },
  {
    id: "brand-tracking",
    name: "Brand Tracking & Panels",
    badge: "ALWAYS-ON PANELS",
    headline: "Continuous Monitoring of Perception & Brand Equity",
    description:
      "We continuously monitor brand health and market perception through structured consumer research, public opinion polling, and online consumer panels across emerging markets.",
    image: "/images/landing-consumer.jpg",
    imageAlt: "African family and consumers in modern and informal retail environments",
    stats: [
      { label: "Panelists", value: "190k+ Verified" },
      { label: "Refresh Cadence", value: "Continuous" },
      { label: "Brand KPIs", value: "14 Dimensions" },
    ],
    points: [
      "Aided & unaided brand awareness tracking across target cohorts",
      "Brand consideration, trial, and brand conversion funnels",
      "Usage frequency, repeat rates, and customer loyalty indexes",
      "Brand reputation, trust, and consumer sentiment surveillance",
      "Direct competitive performance tracking against market incumbents",
    ],
  },
  {
    id: "qualitative-research",
    name: "Qualitative Research",
    badge: "DEEP HUMAN TRUTH",
    headline: "Understanding the Why Behind Consumer Behaviour",
    description:
      "We uncover the motivations, attitudes, experiences, and perceptions that shape consumer decisions. We get into the homes, shops, and communities where decisions actually occur.",
    image: "/images/landing-reaction.jpg",
    imageAlt: "African consumer participating in qualitative interview and sensory concept evaluation",
    stats: [
      { label: "Local Dialects", value: "18+ Dialects" },
      { label: "Audio Verification", value: "100% Stamped" },
      { label: "Methodologies", value: "IDIs & Focus Groups" },
    ],
    points: [
      "Structured focus groups with target demographic and economic cohorts",
      "In-depth interviews (IDIs) with consumers, retailers, and executives",
      "Ethnographic fieldwork and immersive consumer observation",
      "Concept exploration, emotional response mapping, and behavioural drivers",
    ],
  },
  {
    id: "product-testing",
    name: "Product Testing",
    badge: "SENSORY & PACKAGING",
    headline: "Understanding How Consumers Respond Before Launch",
    description:
      "We help businesses understand how consumers respond to products and concepts before making major commercial decisions, testing formulations, packaging appeal, and purchase intent.",
    image: "/images/landing-breakfast.jpg",
    imageAlt: "Consumer product sensory testing and formulation evaluation",
    stats: [
      { label: "Blind Trials", value: "Standardized" },
      { label: "Packaging Tests", value: "Shelf & Transit" },
      { label: "Purchase Intent", value: "Calibrated" },
    ],
    points: [
      "Product concept exploration and value proposition validation",
      "Flavours, textures, fragrances, and formulation sensory trials",
      "Packaging characteristics, presentation, and tropical climate durability",
      "Consumer reactions, purchase intent, and overall product appeal scoring",
    ],
  },
  {
    id: "feedback-gallery",
    name: "Feedback Gallery",
    badge: "UNFILTERED VOICE",
    headline: "Hear What the Market Is Saying in Authentic Terms",
    description:
      "Our Feedback Gallery provides a structured view of consumer reactions to your products, services, brands, and those of your competitors. Capture authentic consumer perspectives shaping your market.",
    image: "/images/landing-port.jpg",
    imageAlt: "Authentic consumer feedback and commercial intelligence gallery",
    stats: [
      { label: "Verification", value: "Audit-Grade" },
      { label: "Video Intercepts", value: "HD Recorded" },
      { label: "Sentiment Index", value: "Algorithmic" },
    ],
    points: [
      "Authentic consumer perspectives from real retail intercepts",
      "Thematic clustering of recurring complaints, desires, and praise",
      "Structured comparison of your products vs incumbent competitors",
      "Direct integration into the Stratum Intelligence Graph",
    ],
  },
];

export function IntelligenceMethodology() {
  const [activeTab, setActiveTab] = useState("market-research");
  const activeMethodology =
    METHODOLOGIES.find((m) => m.id === activeTab) || METHODOLOGIES[0];

  return (
    <div className="space-y-6" suppressHydrationWarning>
      {/* Navigation Pills */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-1 scrollbar-none gap-2">
        {METHODOLOGIES.map((m) => {
          const isActive = m.id === activeTab;
          return (
            <button
              key={m.id}
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab(m.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background text-muted-foreground border-border hover:border-foreground/30 hover:bg-muted/40 hover:text-foreground"
              }`}
            >
              <span>{m.name}</span>
              <span
                className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {m.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Perfectly Balanced 2-Column Showcase */}
      <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7 shadow-sm transition-all duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (7 cols): Methodology Content & Checklist */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary">
                <Sparkles className="size-3.5" />
                <span>{activeMethodology.badge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight leading-snug">
                {activeMethodology.headline}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {activeMethodology.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                  Methodology Capabilities & Focus Areas:
                </span>
                <ul className="space-y-1.5">
                  {activeMethodology.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                {activeMethodology.stats.map((st, i) => (
                  <div key={i} className="space-y-0.5">
                    <span className="font-bold text-foreground">{st.value}</span>
                    <p className="text-[10px] text-muted-foreground">{st.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                Inquire on this Methodology <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Pane Exactly Matching Left Height */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-border/80 shadow-md min-h-[300px] lg:min-h-full flex flex-col justify-end p-5 group">
            <Image
              src={activeMethodology.image}
              alt={activeMethodology.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="relative z-10 space-y-1 text-white">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold font-mono">
                <ShieldCheck className="size-3" />
                AUDIT-GRADE FIELDWORK
              </div>
              <h4 className="text-sm font-bold">{activeMethodology.name} Ground Truth</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Supervised via Nairobi telemetry command with verifiable GPS coordinates and dialect calibration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
