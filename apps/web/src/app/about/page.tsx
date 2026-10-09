"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe2,
  Handshake,
  Layers,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Zap,
  Building2,
  MapPin,
  Lock,
  Award,
  Database,
  Briefcase,
  Compass,
  FileCheck,
  Clock,
  Radio,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">01 // INSTITUTIONAL IDENTITY</span>
              <span className="text-border">•</span>
              <span className="text-foreground">CORPORATE OVERVIEW &amp; PHILOSOPHY</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              The Market Operating System for Complex &amp; Emerging Markets
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum is an institutional market intelligence, quantitative telemetry, and commercial intermediation firm. We help enterprise brands, institutional investors, and sovereign trade operators make high-conviction decisions in high-velocity emerging markets. We bridge primary ground-truth fieldwork with econometric modeling and direct B2B transaction execution.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Commission an Intake Briefing</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                <Layers className="size-3.5 text-primary" />
                <span>Explore Solutions Portfolio</span>
              </Link>
            </div>
          </div>

          {/* Unified Footprint Telemetry Ribbon */}
          <div className="p-3 rounded-lg border border-border/70 bg-card/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">INSTITUTIONAL POSITIONING:</span>
              <span>Primary Field Telemetry • Econometric Intelligence Graph • Confidential B2B Deal Room</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-primary font-bold">EAST AFRICA COMMAND</span>
              <span>•</span>
              <span>Sole Registered Physical HQ: Nairobi, Kenya</span>
            </div>
          </div>

          {/* Scale Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>CONTINENTAL REACH</span>
                <Globe2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">54 Nations</div>
              <p className="text-[11px] text-muted-foreground">Mapped Under AfCFTA Protocols</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>CONSUMER PANELS</span>
                <Users2 className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">190,000+</div>
              <p className="text-[11px] text-muted-foreground">Verified Field Survey Panelists</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>ASIAN TRADE DESK</span>
                <Building2 className="size-3.5 text-blue-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">620+</div>
              <p className="text-[11px] text-muted-foreground">Audited Plants (China &amp; India)</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>DEAL ROOM PIPELINE</span>
                <Handshake className="size-3.5 text-amber-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">$185M+</div>
              <p className="text-[11px] text-muted-foreground">Active Intermediated Capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE STRATEGIC LOGIC: NOT JUST A REPORT */}
      <section className="py-12 sm:py-16 border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
                <Compass className="size-3.5" />
                <span>02 // THE STRATUM DIFFERENTIATOR</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight leading-snug">
                Not Just a Report. The Complete Pathway from Field Telemetry to Commercial Transactions.
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Most international market research consultancies stop when they deliver a PDF slide deck. The enterprise client is left with high-level secondary statistics, but remains completely blind to subnational retail velocity, informal wholesale markup structures, and reliable distribution counterparts on the ground.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">That is STRATUM&apos;s fundamental structural differentiator.</strong> We escort clients across the complete commercialization pathway. When our primary telemetry identifies unmet consumer demand or distributor margin distortions, our platform introduces pre-audited local distributors, facilitates warehouse due diligence, and clears bilateral commercial contracts in our confidential Deal Room.
              </p>

              <div className="p-4 rounded-lg bg-card border border-border/80 space-y-2 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                  OUR INSTITUTIONAL POSITIONING
                </span>
                <p className="text-xs text-foreground italic leading-relaxed">
                  &ldquo;We operate where legacy consultancy conglomerates are weakest on the ground: in the high-density informal retail kiosks, open-air wholesale corridors, and cross-border South-South trade routes connecting Africa with manufacturing centers in China and India.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] lg:h-[460px] rounded-lg overflow-hidden border border-border/80 shadow-md bg-card group">
              <Image
                src="/images/landing-consumer.jpg"
                alt="First-hand consumer market research and ground-truth field telemetry across African commercial centers"
                fill
                priority
                unoptimized
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Glass Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/90 dark:bg-black/75 backdrop-blur-md border border-border/60 text-xs font-mono font-bold text-foreground shadow-sm">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                GROUND-TRUTH FIELDWORK
              </div>

              {/* Bottom Compact Glass Strip */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-lg bg-background/95 dark:bg-black/90 backdrop-blur-xl border border-border/70 text-foreground flex items-center justify-between gap-3 shadow-lg">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold font-mono text-primary flex items-center gap-1.5">
                    <span>EMPIRICAL RESEARCH IN ACTION</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Capturing authentic consumer demand, informal retail pricing, and verified supplier due diligence.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    Audit-Grade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE TRIPLE-DISCIPLINE CONVERGENCE MODEL (THE STRATUM FLYWHEEL) */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              03 // THE CONVERGENCE MODEL
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Three Disciplines Engineered into a Single Operating System
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stratum bridges three historically siloed sectors into an enduring commercial flywheel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Pillar 1 */}
            <div className="p-6 rounded-lg border border-border/80 bg-card space-y-4 shadow-2xs hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-md bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-900">
                  <Users2 className="size-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-primary uppercase">
                  DISCIPLINE 01
                </span>
                <h3 className="text-base font-bold text-foreground">
                  First-Hand Consumer Fieldwork
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Direct human fieldwork capturing unvarnished consumer sentiment, purchasing habits, brand switching triggers, and retail shelf pricing across both formal hypermarkets and informal neighborhood kiosks (dukas and spazas).
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>Output Metric</span>
                <span className="font-bold text-foreground">190,000+ Panel Intercepts</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-lg border border-border/80 bg-card space-y-4 shadow-2xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-md bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-900">
                  <Database className="size-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">
                  DISCIPLINE 02
                </span>
                <h3 className="text-base font-bold text-foreground">
                  Proprietary Datasets &amp; Analytics
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Continuous econometric telemetry tracking subnational inflation velocity, currency volatility impacts, consumer twin archetypes, and distributor margin markups across 54 African economies.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>Output Metric</span>
                <span className="font-bold text-foreground">Queryable Intelligence Graph</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-lg border border-border/80 bg-card space-y-4 shadow-2xs hover:border-amber-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-md bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center border border-amber-200 dark:border-amber-900">
                  <Handshake className="size-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase">
                  DISCIPLINE 03
                </span>
                <h3 className="text-base font-bold text-foreground">
                  B2B Intermediation &amp; Deal Room
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Confidential matchmaking connecting businesses, institutional investors, and ambitious brands with vetted local distributors, factory suppliers in China/India, and co-investment partners under bilateral NDAs.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>Output Metric</span>
                <span className="font-bold text-foreground">$185M+ Active Deal Pipeline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REGIONAL OPERATIONS CORRIDORS & SPECIALIZED TRADE DESKS */}
      <section className="py-12 sm:py-16 border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              04 // REGIONAL OPERATIONS &amp; CORRIDORS
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Corporate Headquarters &amp; Active Fieldwork Corridors
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stratum operates its sole registered corporate headquarters and central operations command in East Africa (Nairobi), orchestrating quantitative field audits and bilateral trade desks across active regional corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Corridor 1: East Africa HQ */}
            <div className="p-5 rounded-lg border-2 border-primary/50 bg-card space-y-3 shadow-sm">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-primary">EAST AFRICA (HQ)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-primary text-primary-foreground font-bold">CENTRAL COMMAND</span>
              </div>
              <h4 className="text-base font-bold text-foreground">East Africa &amp; Great Lakes HQ</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Central Operations Command in Nairobi, Kenya directing all subnational research squads across Kenya, Tanzania, Uganda, Rwanda, and Ethiopia. Tracking Northern Corridor freight, mobile-money pacing, and cross-border retail flows.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Physical HQ:</span>
                <span className="font-bold text-foreground">Nairobi, Kenya (Sole Registered HQ)</span>
              </div>
            </div>

            {/* Corridor 2: West Africa */}
            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-emerald-600">WEST AFRICA</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">ECOWAS CORRIDOR</span>
              </div>
              <h4 className="text-base font-bold text-foreground">West Africa &amp; ECOWAS Zone</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Comprehensive market coverage across Anglophone and Francophone West Africa—including Nigeria, Ghana, Côte d&apos;Ivoire, and Senegal. Auditing high-volume wholesale clusters, FMCG distributor networks, and local dialect consumer intercepts.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Operational Status:</span>
                <span className="font-bold text-foreground">Centrally Directed from Nairobi HQ</span>
              </div>
            </div>

            {/* Corridor 3: Southern Africa */}
            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-amber-600">SOUTHERN AFRICA</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">SADC CORRIDOR</span>
              </div>
              <h4 className="text-base font-bold text-foreground">Southern Africa &amp; SADC Belt</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Integrated field telemetry across the Southern African Development Community—including South Africa, Zambia, Zimbabwe, Mozambique, and Angola. Bridging modern supermarket chains with high-density township spaza networks.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Operational Status:</span>
                <span className="font-bold text-foreground">Centrally Directed from Nairobi HQ</span>
              </div>
            </div>

            {/* Corridor 4: North Africa */}
            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-cyan-600">NORTH AFRICA</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">MAGHREB CORRIDOR</span>
              </div>
              <h4 className="text-base font-bold text-foreground">North Africa &amp; Mediterranean</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Strategic research and consumer telemetry across North Africa and the Mediterranean basin—including Egypt, Morocco, Algeria, and Tunisia. Linking African commerce with Mediterranean and Middle Eastern trade routes.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Operational Status:</span>
                <span className="font-bold text-foreground">Centrally Directed from Nairobi HQ</span>
              </div>
            </div>

            {/* Corridor 5: Asia Trade Desk */}
            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-rose-600">ASIA TRADE DESK</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">CHINA &amp; INDIA</span>
              </div>
              <h4 className="text-base font-bold text-foreground">Asia Trade Desk (China &amp; India)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dedicated trade desks spanning China&apos;s industrial manufacturing hubs (Guangzhou, Shenzhen, Yiwu, Shanghai) and India&apos;s production belts (Mumbai, Gujarat, Delhi NCR). Providing factory audits, packaging sourcing, and escrow support.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Operational Status:</span>
                <span className="font-bold text-foreground">Centrally Directed from Nairobi HQ</span>
              </div>
            </div>

            {/* Corridor 6: Europe & Global Capital */}
            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-3 shadow-2xs">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-purple-600">EUROPE &amp; CAPITAL</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">INSTITUTIONAL DESK</span>
              </div>
              <h4 className="text-base font-bold text-foreground">Europe &amp; Global Capital Desk</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Unifying cross-border telemetry across all 54 African Union member nations under AfCFTA protocols, connected with bilateral investment desks in London, Dubai, and Singapore facilitating private equity due diligence and deal syndication.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Operational Status:</span>
                <span className="font-bold text-foreground">Centrally Directed from Nairobi HQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTIDISCIPLINARY TALENT ARCHITECTURE */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              05 // MULTIDISCIPLINARY EXPERTISE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Field Anthropologists, Econometricians &amp; Trade Dealmakers
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our multidisciplinary teams synthesize qualitative human empathy with hard quantitative rigor and commercial legal acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-2 shadow-2xs">
              <Users2 className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Field Anthropologists &amp; IDI Masters</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Native dialect speakers who uncover real emotional purchase drivers and socio-cultural consumption rituals in open-air markets.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-2 shadow-2xs">
              <Cpu className="size-5 text-emerald-500" />
              <h4 className="text-sm font-bold text-foreground">Econometricians &amp; Data Scientists</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialists in subnational consumer price elasticity curves, market size simulation, and real-time mobile money telemetry.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-2 shadow-2xs">
              <Briefcase className="size-5 text-amber-500" />
              <h4 className="text-sm font-bold text-foreground">FMCG Route-to-Market Directors</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Former commercial heads of multinational consumer brands who understand Tier-1 distributor dynamics and cold-chain constraints.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border/80 bg-card space-y-2 shadow-2xs">
              <Lock className="size-5 text-purple-500" />
              <h4 className="text-sm font-bold text-foreground">Trade Intermediation Counsel</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialists in bilateral escrow structuring, AfCFTA tariff clearance, factory audits, and cross-border commercial joint ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONAL ASSURANCES STRIP */}
      <section className="py-12 sm:py-16 border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                06 // INSTITUTIONAL ASSURANCES
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Governance Standards Built for Boardrooms &amp; Capital Allocators
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum combines rigorous field telemetry with legally binding bilateral NDAs and centralized command oversight.
              </p>
            </div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground font-semibold text-xs transition-all shrink-0 cursor-pointer"
            >
              <span>Inspect 5-Stage Framework</span>
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

      {/* 7. HIGH-CONVERTING BOTTOM CALL TO ACTION */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
            <Sparkles className="size-3" />
            DIRECT ADVISORY DESK
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Ready to Commission Institutional Market Intelligence?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether validating a product concept, tracking subnational brand equity, or accessing audited distribution partners in Africa, China, and India, our directors are available for strategic intake.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
            >
              <span>Talk to Stratum — Book Intake Briefing</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              <span>Explore 5-Stage Framework</span>
            </Link>
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
