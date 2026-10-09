"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { ConsultationForm } from "@/components/landing/consultation-form";
import {
  Building2,
  Clock,
  Globe2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Users2,
  FileText,
  PhoneCall,
  CheckCircle2,
  Compass,
  Radio,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  Layers,
  Shield,
  Activity,
} from "lucide-react";

export const FAQ_ITEMS = [
  {
    question: "What happens immediately after submitting an intake brief?",
    answer:
      "Within 6 business hours, a specialized regional sector director in Nairobi evaluates your target commercial corridor, establishes statistical sample power thresholds (n=1,200 to n=5,000+), and issues a structured scoping memo with transparent milestones.",
    badge: "INTAKE WORKFLOW",
  },
  {
    question: "How is confidentiality and proprietary IP governed?",
    answer:
      "Stratum operates under strict bilateral mutual NDAs executed prior to sharing any proprietary formulation specifications, price targets, or commercial expansion theses. All confidential data rooms are isolated with cryptographic integrity.",
    badge: "DATA SECURITY",
  },
  {
    question: "What is the standard turnaround for subnational field deployment?",
    answer:
      "Pre-vetted field enumerators can be deployed within 48 to 72 hours across 14+ commercial corridors in East, West, Southern, and North Africa. Rapid scoping sweeps deliver decision-grade telemetry in 10 to 14 business days.",
    badge: "FIELDWORK SLA",
  },
  {
    question: "Can Stratum facilitate direct counterpart introductions and Deal Room access?",
    answer:
      "Yes. Beyond primary market telemetry, our confidential Deal Room and Asia Trade Desk conduct on-site factory audits in China and India, connecting clients directly with pre-vetted Tier-1 distributors, institutional buyers, and co-investors.",
    badge: "DEAL ROOM ACCESS",
  },
];

const SCOPING_STAGES = [
  {
    step: "01",
    title: "Mandate Scoping & Triage",
    desc: "Your briefing is routed to specialized sector directors in Nairobi within 6 business hours for preliminary commercial evaluation.",
  },
  {
    step: "02",
    title: "Mutual NDA Pre-Clearance",
    desc: "A legally binding bilateral non-disclosure agreement is executed to protect all proprietary formulations, price targets, and strategies.",
  },
  {
    step: "03",
    title: "Sample Power & Methodology Design",
    desc: "We calibrate statistically robust sample sizes (N = 1,200 to N = 10,000+) with defined confidence intervals (95% CI ± 1.8%).",
  },
  {
    step: "04",
    title: "Formal Scoping Memo & Timelines",
    desc: "You receive a structured commercial proposal detailing milestones, enumerator deployment dates, and transparent fixed pricing.",
  },
];

const DIRECT_DESKS = [
  {
    code: "DESK-GEN",
    title: "General Scoping & Client Intake",
    description: "Preliminary scoping memos, service overviews, and enterprise mandate routing.",
    email: "info@stratumresearchltd.com",
    sla: "< 6 Business Hours",
    lead: "Client Advisory Desk",
    badge: "PRIMARY INTAKE",
    color: "text-primary",
  },
  {
    code: "DESK-RES",
    title: "Empirical Field Telemetry & Surveys",
    description: "Custom demographic surveys, retail kiosk censuses, and econometric cross-tabulations.",
    email: "research@stratumresearchltd.com",
    sla: "< 6 Business Hours",
    lead: "Quantitative & Econometrics Desk",
    badge: "RESEARCH LEAD",
    color: "text-emerald-500",
  },
  {
    code: "DESK-DEAL",
    title: "B2B Deal Room & Factory Sourcing",
    description: "Cross-border factory audits in China/India, verified distributor vetting, and Deal Room escrow.",
    email: "partners@stratumresearchltd.com",
    sla: "< 4 Business Hours",
    lead: "Commercial Intermediation Practice",
    badge: "DEAL ROOM",
    color: "text-amber-500",
  },
  {
    code: "DESK-PRS",
    title: "Editorial, Press & Data Citations",
    description: "Institutional media inquiries, research citations, and academic briefing requests.",
    email: "press@stratumresearchltd.com",
    sla: "< 12 Business Hours",
    lead: "Corporate Communications Desk",
    badge: "PUBLICATIONS",
    color: "text-blue-500",
  },
];

const REGIONAL_CORRIDORS = [
  {
    region: "West Africa Corridor",
    hubCity: "Lagos Hub (Ikeja & VI)",
    scope: "ECOWAS Trade & Consumer Belt",
    capabilities: "FMCG retail verification, open-air wet markets & vernacular consumer panels",
    footprint: "48,000+ Panelists • 3,800+ Wholesalers",
  },
  {
    region: "Asia-Africa Bilateral Desk",
    hubCity: "Shanghai & Mumbai Desks",
    scope: "China & India Manufacturing & APIs",
    capabilities: "On-site plant floor audits, pharmaceutical cold-chain & direct B2B sourcing",
    footprint: "620+ Audited Plants • 280+ Healthcare Networks",
  },
  {
    region: "Southern Africa Corridor",
    hubCity: "Johannesburg Hub & Durban",
    scope: "SADC Trade & Industrial Belt",
    capabilities: "Township spaza shop censuses, modern supermarket trade scans & B2B audits",
    footprint: "11,200+ Spaza Merchants • Tier-1 Distributor Vetting",
  },
  {
    region: "North Africa Corridor",
    hubCity: "Cairo Desk & Alexandria",
    scope: "Maghreb & Maritime Sourcing",
    capabilities: "Cross-border trade sourcing, Mediterranean port telemetry & customs tracking",
    footprint: "Maritime Port Customs Logs • Bilateral Roadmaps",
  },
  {
    region: "European Institutional Desk",
    hubCity: "London Desk",
    scope: "Institutional Advisory & Capital",
    capabilities: "Private equity due diligence, AfCFTA feasibility & bilateral Deal Rooms",
    footprint: "Cross-Border Syndication • Institutional Deal Architecture",
  },
];

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [currentTimeEAT, setCurrentTimeEAT] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const eatString = now.toLocaleTimeString("en-GB", {
          timeZone: "Africa/Nairobi",
          hour: "2-digit",
          minute: "2-digit",
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

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">01 // INTAKE &amp; ADVISORY COMMAND</span>
              <span className="text-border">•</span>
              <span className="text-foreground">EXECUTIVE CONSULTATION &amp; SCOPING</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Executive Consultation &amp; Scoping Intake
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Initiate a strategic scoping briefing with Stratum research directors. Whether entering new subnational retail corridors, benchmarking informal market pricing, conducting plant-floor API audits across China and India, or securing verified distributors, Stratum provides audit-grade research and confidential execution.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#intake-terminal"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Dispatch Executive Scoping Brief</span>
                <ArrowRight className="size-3.5" />
              </a>
              <a
                href="#direct-desks"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all cursor-pointer"
              >
                <Building2 className="size-3.5 text-primary" />
                <span>Direct Desks &amp; Headquarters</span>
              </a>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-semibold transition-all cursor-pointer"
              >
                <Compass className="size-3.5 text-primary" />
                <span>Review 5-Stage Framework</span>
              </Link>
            </div>
          </div>

          {/* Unified Footprint Telemetry Ribbon */}
          <div className="p-3 rounded-lg border border-border/70 bg-card/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">OPERATIONAL TRIAGE:</span>
              <span>East Africa Central Command • 1,600+ Field Envoys • ESOMAR &amp; KDPA Certified • Direct Routing to Sector Leads</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-primary font-bold">INTAKE RESPONSE WINDOW</span>
              <span>•</span>
              <span>&lt; 6 Business Hours</span>
            </div>
          </div>

          {/* Scale & SLA Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>INTAKE SLA</span>
                <Clock className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">&lt; 6 Hours</div>
              <p className="text-[11px] text-muted-foreground">Scoping Memo &amp; Sample Power</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>CONFIDENTIALITY</span>
                <Lock className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">Bilateral NDA</div>
              <p className="text-[11px] text-muted-foreground">Mutual Legal Clearance Enforced</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>DIRECT TRIAGE</span>
                <Users2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">Sector Leads</div>
              <p className="text-[11px] text-muted-foreground">Zero Generic Sales Handoffs</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>PHYSICAL HQ</span>
                <Building2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">Nairobi, Kenya</div>
              <p className="text-[11px] text-muted-foreground">Central Operations Command</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE EXECUTIVE CONSULTATION TERMINAL */}
      <section id="intake-terminal" className="py-12 sm:py-16 border-b border-border/70 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: How Stratum Scopes Mandates & Engages (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                  02 // ENGAGEMENT METHODOLOGY
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                  How Stratum Scopes &amp; Delivers Mandates
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Every submission is treated as an active institutional dossier. Here is the four-step progression from your brief to field deployment.
                </p>
              </div>

              {/* 4-Step Intake Progression Protocol */}
              <div className="space-y-3">
                {SCOPING_STAGES.map((st) => (
                  <div
                    key={st.step}
                    className="p-3.5 rounded-lg border border-border/70 bg-card shadow-2xs space-y-1 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                          {st.step}
                        </span>
                        {st.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed pl-7">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Governance & Compliance Badge Card */}
              <div className="p-4 rounded-lg bg-muted/30 border border-border/80 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 font-bold text-foreground text-[11px] uppercase tracking-wider">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>REGULATORY &amp; LEGAL INTEGRITY:</span>
                </div>
                <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
                  All survey protocols, enumerator interviews, and microdata files conform strictly to the ESOMAR International Code on Market and Social Research, the Kenya Data Protection Act (KDPA 2019), and bilateral NDA protections.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Intake Terminal (7 cols) */}
            <div className="lg:col-span-7 bg-card border border-border/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-border/70 pb-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                    OFFICIAL BRIEFING INTAKE MEMO
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ACCEPTING MANDATES
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Commission a Strategic Consultation &amp; Scoping Briefing
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Specify your operational mandate, target commercial corridor, and project objectives. A dedicated practice lead will review your brief and prepare tailored preliminary telemetry.
                </p>
              </div>

              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT COMMUNICATION DESKS & CENTRAL COMMAND */}
      <section id="direct-desks" className="py-12 sm:py-16 border-b border-border/70 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                03 // DIRECT COMMUNICATION DESKS &amp; PHYSICAL HEADQUARTERS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Direct Channels to Specialized Research Directors
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Reach dedicated practice leads directly via verified corporate communication lines. Centrally directed from our East Africa nerve center in Nairobi.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground shrink-0">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Nairobi Clock:</span>
              <span className="font-bold text-foreground">{currentTimeEAT || "08:00 - 18:00 EAT"}</span>
            </div>
          </div>

          {/* 4 Direct Desks Uniform Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIRECT_DESKS.map((desk) => {
              const isCopied = copiedEmail === desk.email;
              return (
                <div
                  key={desk.code}
                  className="p-5 rounded-xl border border-border/80 bg-card shadow-2xs space-y-3 flex flex-col justify-between hover:border-primary/50 transition-all"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/60">
                        {desk.code}
                      </span>
                      <span className={`text-[10px] font-bold ${desk.color}`}>
                        {desk.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-foreground leading-snug">
                      {desk.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {desk.description}
                    </p>

                    <div className="text-[11px] font-mono text-muted-foreground">
                      <span className="text-foreground font-semibold">Lead:</span> {desk.lead}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/60 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-muted-foreground">Response SLA:</span>
                      <span className="font-bold text-foreground">{desk.sla}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={`mailto:${desk.email}`}
                        className="flex-1 px-3 py-1.5 rounded-md bg-muted/50 hover:bg-muted border border-border/70 text-xs font-mono font-bold text-foreground hover:text-primary transition-colors truncate text-center"
                      >
                        {desk.email}
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyEmail(desk.email)}
                        title="Copy Email Address"
                        className="p-1.5 rounded-md border border-border/70 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                      >
                        {isCopied ? (
                          <Check className="size-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Headquarters Command Block */}
          <div className="p-6 sm:p-8 rounded-xl border border-border/80 bg-card shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
                <Building2 className="size-4" />
                <span>SOLE REGISTERED PHYSICAL HEADQUARTERS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                STRATUM Research Ltd — Central Operations Command
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                All research design, field enumerator deployment, plant-floor auditing protocols, and Deal Room contracts are centrally orchestrated from our registered physical headquarters in Nairobi, Kenya.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-primary shrink-0" />
                  <span>Delta Corner Tower, Westlands, Nairobi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Mon – Fri, 08:00 – 18:00 EAT (UTC+3)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-4 rounded-lg bg-muted/30 border border-border/70 space-y-2 text-xs font-mono">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-bold">
                OPERATIONAL DISPATCH HOTLINE &amp; JURISDICTION:
              </span>
              <div className="flex items-center justify-between text-foreground">
                <span>Direct Voice Line:</span>
                <a href="tel:+254207903800" className="font-bold text-primary hover:underline">
                  +254 (0) 20 790 3800
                </a>
              </div>
              <div className="flex items-center justify-between text-foreground">
                <span>Corporate Registration:</span>
                <span className="font-bold">Republic of Kenya (BGC-2024-X)</span>
              </div>
              <div className="flex items-center justify-between text-foreground">
                <span>Intake Routing Window:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">&lt; 6 Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACTIVE FIELDWORK CORRIDORS ARCHITECTURE */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              04 // ACTIVE OPERATIONAL CORRIDORS &amp; TRADE DESKS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Commercial Fieldwork Corridors Directed from Nairobi HQ
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stratum does not maintain speculative shell branch offices. Every regional corridor represents an active fieldwork deployment network directed centrally from Nairobi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REGIONAL_CORRIDORS.map((corridor, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border/70 bg-card space-y-3 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px]">
                      {corridor.region}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      Active Corridor
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      {corridor.hubCity}
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      {corridor.scope}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {corridor.capabilities}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/60 text-[10px] font-mono text-muted-foreground flex items-center justify-between">
                  <span>Audited Reach:</span>
                  <span className="font-bold text-foreground">{corridor.footprint}</span>
                </div>
              </div>
            ))}

            {/* Global Coordination Summary Card */}
            <div className="p-5 rounded-xl border border-dashed border-primary/40 bg-primary/5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-primary uppercase block">
                  CENTRALIZED OVERSIGHT
                </span>
                <h4 className="text-sm font-bold text-foreground">
                  Need Multi-Country Regional Corridors?
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our Nairobi operations nerve center coordinates synchronized field sweeps across multiple regional trading blocs simultaneously (EAC, ECOWAS, SADC, and Asia-Africa).
                </p>
              </div>

              <div className="pt-2 border-t border-primary/20">
                <a
                  href="#intake-terminal"
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-primary hover:underline"
                >
                  <span>Initiate Multi-Country Mandate</span>
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT PROTOCOLS & GOVERNANCE FAQ */}
      <section className="py-12 sm:py-16 border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              05 // ENGAGEMENT PROTOCOLS &amp; GOVERNANCE FAQ
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Frequently Addressed Engagement Questions
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Essential institutional details regarding mutual non-disclosure agreements, fieldwork deployment timeframes, empirical data auditing, and Deal Room onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="p-5 rounded-lg border border-border/70 bg-card space-y-2.5 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {item.badge}
                    </span>
                    <HelpCircle className="size-3.5 text-muted-foreground" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground leading-snug">
                    {item.question}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>ESOMAR &amp; KDPA Compliant</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Standard Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONAL ASSURANCES STRIP */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                06 // INSTITUTIONAL ASSURANCES
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Audit-Grade Standards Enforced Across Every Mandate
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum operates under institutional governance standards to protect proprietary commercial strategies and guarantee empirical rigor.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground font-semibold text-xs transition-all shrink-0 cursor-pointer"
            >
              <span>Explore Solutions Portfolio</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px]">
                  All solution scoping and Deal Room data protected under binding non-disclosure agreements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <Clock className="size-4 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Rapid 6-Hour Intake Window</h4>
                <p className="text-muted-foreground text-[11px]">
                  A specialized research lead will review your briefing and respond within 6 business hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <Building2 className="size-4 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Central Operations Command</h4>
                <p className="text-muted-foreground text-[11px]">
                  Headquartered in East Africa (Nairobi), orchestrating regional corridors globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Comprehensive Footer */}
      <Footer />

      {/* Native Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
