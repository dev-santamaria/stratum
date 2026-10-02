"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
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
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. Hero Header */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              <Building2 className="size-3.5" />
              <span>ABOUT STRATUM</span>
              <span className="text-border">•</span>
              <span className="text-foreground">INTELLIGENCE THAT MOVES BUSINESS FORWARD</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              The Market Operating System for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                Complex &amp; Emerging Markets
              </span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum is a global market intelligence and business intermediation firm helping businesses, investors, brands, and entrepreneurs make informed decisions in complex and emerging markets. We combine first-hand consumer feedback, proprietary datasets, and strategic B2B connections to turn market information into actionable commercial opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all cursor-pointer"
              >
                Talk to Stratum — Advisory Intake
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all"
              >
                View Solutions Portfolio
              </Link>
            </div>
          </div>

          {/* Scale Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border/60">
            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">CONTINENTAL REACH</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">54 Nations</div>
              <p className="text-[11px] text-muted-foreground">Mapped under AfCFTA</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">CONSUMER PANELS</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">190,000+</div>
              <p className="text-[11px] text-muted-foreground">Verified Survey Panelists</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">ASIAN TRADE DESK</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">620+</div>
              <p className="text-[11px] text-muted-foreground">Vetted Suppliers (China/India)</p>
            </div>

            <div className="p-3.5 rounded-xl border border-border/70 bg-card/80 space-y-1">
              <div className="text-[10px] font-mono text-muted-foreground uppercase">DEAL ROOM PIPELINE</div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">$185M+</div>
              <p className="text-[11px] text-muted-foreground">Active Intermediated Capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Core Strategic Logic: Not Just a Report */}
      <section className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                <Compass className="size-3.5" />
                THE STRATUM DIFFERENTIATOR
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Not Just a Report. The Entire Pathway from Insight to Commercialization.
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Most international market research firms stop when they deliver a PDF slide deck. The client is left with high-level secondary statistics, but still lacks on-the-ground distributor connections, informal market price visibility, and execution clarity.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground font-semibold">That is STRATUM&apos;s fundamental differentiator.</strong> We walk clients all the way to commercial transactions. When our intelligence uncovers unmet consumer demand or distributor margin gaps, our platform surfaces verified regional distributors, structures due diligence in our confidential Deal Room, and facilitates executable B2B agreements.
              </p>

              <div className="p-4 rounded-2xl bg-muted/30 border border-border/80 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                  OUR INSTITUTIONAL POSITIONING
                </span>
                <p className="text-xs text-foreground italic leading-relaxed">
                  &ldquo;We operate where incumbent consultancy giants are weakest on the ground: in the high-density informal retail kiosks, open-air wholesale corridors, and cross-border South-South supply chains connecting Africa with China and India.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] lg:h-[460px] rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card group">
              <Image
                src="/images/landing-consumer.jpg"
                alt="First-hand consumer market research and ground-truth field telemetry across African commercial centers"
                fill
                priority
                unoptimized
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

              {/* Top Glass Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 dark:bg-black/70 backdrop-blur-md border border-border/60 text-xs font-mono font-bold text-foreground shadow-sm">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                GROUND-TRUTH FIELDWORK
              </div>

              {/* Bottom Compact Glass Strip */}
              <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-background/90 dark:bg-black/85 backdrop-blur-xl border border-border/70 text-foreground flex items-center justify-between gap-3 shadow-lg">
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

      {/* 3. The Triple-Discipline Convergence Model (The Stratum Flywheel) */}
      <section className="py-12 sm:py-16 border-b border-border/60 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              THE CONVERGENCE MODEL
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Three Disciplines Engineered into a Single Operating System
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stratum bridges three historically siloed sectors into an enduring commercial flywheel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-border/80 bg-card space-y-4 shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center">
                  <Users2 className="size-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-primary uppercase">
                  DISCIPLINE 01
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  First-Hand Consumer Research
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Direct human fieldwork capturing unvarnished consumer sentiment, purchasing habits, brand switching triggers, and retail shelf pricing across both formal hypermarkets and informal neighborhood kiosks.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs font-mono text-muted-foreground">
                Output: 190,000+ Panel Intercepts
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-border/80 bg-card space-y-4 shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center">
                  <Database className="size-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">
                  DISCIPLINE 02
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  Proprietary Datasets &amp; Analytics
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Continuous econometric telemetry tracking subnational inflation velocity, currency volatility impacts, consumer twin archetypes, and distributor margin markups across 54 African economies.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs font-mono text-muted-foreground">
                Output: Queryable Intelligence Graph
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-7 rounded-2xl border border-border/80 bg-card space-y-4 shadow-xs hover:border-amber-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-10 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center">
                  <Handshake className="size-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase">
                  DISCIPLINE 03
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  B2B Intermediation &amp; Deal Room
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Confidential matchmaking connecting businesses, institutional investors, and ambitious brands with vetted local distributors, factory suppliers in China/India, and co-investment partners under bilateral NDAs.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs font-mono text-muted-foreground">
                Output: $185M+ Active Deal Pipeline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Regional Operations Hubs & Specialized Trade Desks */}
      <section className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              REGIONAL OPERATIONS &amp; CORRIDORS
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Regional Operations Hubs &amp; Specialized Trade Desks
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Stratum maintains active commercial operations across virtually all countries within each major regional economic bloc, deploying specialized field squads and cross-border trade desks to ensure deep local context across Africa and Asian partner hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Corridor 1: East Africa */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-primary">EAST AFRICA</span>
                <MapPin className="size-3.5 text-primary" />
              </div>
              <h4 className="text-base font-bold text-foreground">East Africa &amp; Great Lakes</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Pan-regional commercial operations spanning all East African Community (EAC) member countries—including Kenya, Tanzania, Uganda, Rwanda, Ethiopia, and South Sudan. Tracking Northern Corridor freight, mobile-money velocity, and cross-border informal wholesale flows.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Coverage: All East African Community &amp; Great Lakes Nations
              </div>
            </div>

            {/* Corridor 2: West Africa */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-emerald-600">WEST AFRICA</span>
                <MapPin className="size-3.5 text-emerald-600" />
              </div>
              <h4 className="text-base font-bold text-foreground">West Africa &amp; ECOWAS Zone</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Comprehensive market coverage across Anglophone and Francophone West Africa—including Nigeria, Ghana, Côte d&apos;Ivoire, Senegal, Cameroon, Benin, and Togo. Auditing high-volume open-air wholesale hubs, FMCG distributor networks, and local dialect consumer intercepts.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Coverage: All ECOWAS &amp; Central West African Commercial Corridors
              </div>
            </div>

            {/* Corridor 3: Southern Africa */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-amber-600">SOUTHERN AFRICA</span>
                <MapPin className="size-3.5 text-amber-600" />
              </div>
              <h4 className="text-base font-bold text-foreground">Southern Africa &amp; SADC Belt</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Integrated field telemetry across the Southern African Development Community—including South Africa, Zambia, Zimbabwe, Mozambique, Angola, Botswana, and Namibia. Bridging formal retail supermarket chains with high-density township spaza networks and regional logistics.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Coverage: All SADC Member States &amp; Southern Trade Corridors
              </div>
            </div>

            {/* Corridor 4: North Africa */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-cyan-600">NORTH AFRICA</span>
                <MapPin className="size-3.5 text-cyan-600" />
              </div>
              <h4 className="text-base font-bold text-foreground">North Africa &amp; Mediterranean</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Strategic research and consumer telemetry across North Africa and the Mediterranean basin—including Egypt, Morocco, Algeria, Tunisia, and Libya. Linking African commerce with Mediterranean and Middle Eastern trade routes.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Coverage: All Maghreb &amp; North African Commercial Centers
              </div>
            </div>

            {/* Corridor 5: Asia Trade Desk */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-rose-600">ASIA TRADE DESK</span>
                <Globe2 className="size-3.5 text-rose-600" />
              </div>
              <h4 className="text-base font-bold text-foreground">Asia Trade Desk (China &amp; India)</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dedicated trade desks spanning China&apos;s industrial manufacturing hubs (Guangzhou, Shenzhen, Yiwu, Shanghai) and India&apos;s production belts (Mumbai, Gujarat, Delhi NCR). Providing factory due diligence, supplier audits, packaging sourcing, and escrow support for African commercial importers.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Coverage: China Industrial Centers • India Manufacturing Belts
              </div>
            </div>

            {/* Corridor 6: Pan-Africa & Global Capital */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-purple-600">PAN-AFRICA &amp; GLOBAL</span>
                <Globe2 className="size-3.5 text-purple-600" />
              </div>
              <h4 className="text-base font-bold text-foreground">Pan-Africa &amp; Global Capital Desk</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Unifying cross-border telemetry across all 54 African Union member nations under AfCFTA protocols, connected with bilateral investment desks in London, Dubai, and Singapore facilitating institutional capital deployment and cross-border commercial partnerships.
              </p>
              <div className="pt-2 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                Coverage: All 54 African Union Nations • Global Capital Desks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Multidisciplinary Talent Architecture */}
      <section className="py-12 sm:py-16 border-b border-border/60 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              MULTIDISCIPLINARY EXPERTISE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Field Anthropologists, Econometricians &amp; Trade Dealmakers
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our multidisciplinary teams synthesize qualitative human empathy with hard quantitative rigor and commercial legal acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2">
              <Users2 className="size-5 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Field Anthropologists &amp; IDI Masters</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Native dialect speakers who uncover real emotional purchase drivers and socio-cultural consumption rituals in open-air markets.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2">
              <Cpu className="size-5 text-emerald-500" />
              <h4 className="text-sm font-bold text-foreground">Econometricians &amp; Data Scientists</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialists in subnational consumer price elasticity curves, market size simulation, and real-time mobile money telemetry.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2">
              <Briefcase className="size-5 text-amber-500" />
              <h4 className="text-sm font-bold text-foreground">FMCG Route-to-Market Directors</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Former commercial heads of multinational consumer brands who understand Tier-1 distributor dynamics and cold-chain constraints.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-2">
              <Lock className="size-5 text-purple-500" />
              <h4 className="text-sm font-bold text-foreground">Trade Intermediation Counsel</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialists in bilateral escrow structuring, AfCFTA tariff clearance, factory audits, and cross-border commercial joint ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. High-Converting Call to Action */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
            <Sparkles className="size-3" />
            PARTNER WITH STRATUM
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Ready to Commission Institutional Market Intelligence?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether validating a product concept, tracking brand equity, or accessing audited distribution partners in Africa, China, and India, our directors are available for strategic intake.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all cursor-pointer"
            >
              Talk to Stratum — Book Intake Briefing
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/80 bg-background hover:bg-muted text-foreground font-semibold text-xs transition-all"
            >
              Explore 5-Stage Framework
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
