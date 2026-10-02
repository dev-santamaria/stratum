import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { ConsultationForm } from "@/components/landing/consultation-form";
import { GlobalFootprint } from "@/components/landing/global-footprint";
import { IndustryMatrix } from "@/components/landing/industry-matrix";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import { IntelligenceGraphChart } from "@/components/landing/intelligence-graph-chart";
import { IntelligenceMethodology } from "@/components/landing/intelligence-methodology";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Globe2,
  Handshake,
  Layers,
  Lock,
  MapPin,
  PhoneCall,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Zap,
  Target,
  FlaskConical,
  Activity,
  Boxes,
  Briefcase,
  Store,
  Compass,
  PieChart,
  MessageSquare,
  Award,
  Factory,
  Building2,
  Cpu,
  HeartPulse,
  Wheat,
  Truck,
  Flame,
  Radio,
  Building,
  Film,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      {/* 1. Global Navigation Header with Modern Dropdowns */}
      <Navbar />

      {/* 2. Hero Section: Official Stratum Value Proposition */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[380px] bg-gradient-to-tr from-blue-600/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Column (7 cols): Value Proposition */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Telemetry Hub Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-muted/40 backdrop-blur-sm text-xs font-semibold text-muted-foreground shadow-xs">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground font-bold font-mono">REGIONAL TELEMETRY COMMAND: NAIROBI, KENYA</span>
                <span className="text-border">•</span>
                <span>AFRICA, CHINA & INDIA CORRIDORS</span>
              </div>

              {/* Refined Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-extrabold text-foreground tracking-tight leading-[1.18]">
                Bridging Investment Gaps Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                  Intelligence, Insight & Intermediation
                </span>
              </h1>

              {/* Core Description */}
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl font-normal">
                Stratum is a global market intelligence and business intermediation firm helping businesses, investors, brands, and entrepreneurs make informed decisions in complex and emerging markets.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl font-normal">
                Through first-hand consumer feedback, rigorous market research, proprietary datasets, and strategic B2B connections, we turn market information into actionable intelligence and commercial opportunities.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-all active:scale-[0.99]"
                >
                  Explore Our Solutions
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted/60 text-foreground font-semibold text-xs transition-all shadow-xs"
                >
                  Talk to Stratum
                </Link>
                <Link
                  href="/why-stratum"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-primary hover:bg-primary/5 font-semibold text-xs transition-colors"
                >
                  Why Stratum? <ArrowRight className="size-3" />
                </Link>
              </div>

              {/* Official Reach Stats */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-border/60 max-w-2xl">
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-black font-mono text-foreground">5+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">Continents Active</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-black font-mono text-foreground">200+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">Businesses Engaged</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-black font-mono text-foreground">70+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">Industries Mapped</p>
                </div>
                <div className="space-y-0.5">
                  <span className="text-lg sm:text-xl font-black font-mono text-foreground">10M+</span>
                  <p className="text-[11px] text-muted-foreground font-medium">Global Respondents</p>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Ground-Truth Visual in Hero */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-card aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[450px] group">
                <Image
                  src="/images/landing-kiosk.jpg"
                  alt="Ground-truth consumer research and retail market verification across emerging markets"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Floating Telemetry Glass Card */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 p-3.5 rounded-xl bg-background/95 dark:bg-background/90 backdrop-blur-xl border border-border/80 shadow-xl text-foreground space-y-1 animate-in fade-in">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-primary font-bold flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      ON-THE-GROUND TELEMETRY
                    </span>
                    <span className="text-muted-foreground font-semibold">East Africa Operations: Nairobi, Kenya</span>
                  </div>
                  <p className="text-xs font-medium text-foreground leading-snug">
                    First-hand consumer feedback, informal retail audits, and strategic B2B connections across Africa, China, and India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT STRATUM: Intelligence That Moves Business Forward */}
      <section id="about" className="py-12 sm:py-16 border-b border-border/60 bg-muted/10">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
                <Sparkles className="size-3.5" />
                ABOUT STRATUM
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                Intelligence That Moves Business Forward
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum provides market research and business intelligence services to businesses, brands, entrepreneurs, and investors operating across diverse markets.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We combine first-hand research, real-time insights, consumer intelligence, and business-to-business intermediation to help our clients identify opportunities, understand markets, validate ideas, and make better-informed decisions.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our work spans multiple industries and markets, with research methodologies designed to capture both what consumers say and what drives the decisions they make.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-card border border-border/70 text-foreground font-semibold">
                  First-Hand Fieldwork
                </span>
                <span className="px-2.5 py-1 rounded-md bg-card border border-border/70 text-foreground font-semibold">
                  Real-Time Consumer Panels
                </span>
                <span className="px-2.5 py-1 rounded-md bg-card border border-border/70 text-foreground font-semibold">
                  Proprietary Datasets
                </span>
                <span className="px-2.5 py-1 rounded-md bg-card border border-border/70 text-foreground font-semibold">
                  B2B Intermediation
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-card rounded-2xl border border-border/80 p-5 sm:p-6 shadow-sm space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                STRATEGIC FOCUS
              </span>
              <h3 className="text-base font-bold text-foreground">
                Complex & Emerging Markets Specialist
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Where legacy multinational consultancies rely on secondary desk research, Stratum engages directly with consumers, merchants, and trade partners on the ground across 5+ continents, with our operational nerve center anchored in Nairobi, Kenya.
              </p>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground">Audit Standards:</span>
                <span className="font-mono font-bold text-foreground">ESOMAR • GDPR • NDPR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT DO YOU NEED TO KNOW? (Client Problem-First Gateway) */}
      <section id="needs" className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                WHAT DO YOU NEED TO KNOW?
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                Tell Us What You Need to Understand. We’ll Help You Find the Answer.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Select your immediate business requirement below to explore our tailored research frameworks and commercial solutions.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline shrink-0"
            >
              Explore Our Solutions <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 7-Card Problem Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Card 1 */}
            <Link
              href="/solutions#market-opportunity"
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:border-primary/50 transition-all shadow-xs space-y-2 group block"
            >
              <div className="size-8 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center">
                <Compass className="size-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Explore Market Opportunities
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Understand market dynamics, consumer demand, competitive landscapes, and emerging opportunities before entering or expanding into a market.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              href="/solutions#consumer-intelligence"
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:border-emerald-500/50 transition-all shadow-xs space-y-2 group block"
            >
              <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center">
                <Users2 className="size-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                Understand Consumer Behaviour
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Discover what consumers need, want, prefer, experience, and why they make the decisions they do.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              href="/solutions#b2b-intermediation"
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:border-amber-500/50 transition-all shadow-xs space-y-2 group block"
            >
              <div className="size-8 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center">
                <Handshake className="size-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-amber-600 transition-colors">
                Meet New Investors & Partners
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Identify relevant investors, businesses, strategic partners, suppliers, distributors, and other commercial connections.
              </p>
            </Link>

            {/* Card 4 */}
            <Link
              href="/solutions#brand-intelligence"
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:border-purple-500/50 transition-all shadow-xs space-y-2 group block"
            >
              <div className="size-8 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center">
                <Activity className="size-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-purple-600 transition-colors">
                Track Your Brand
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Monitor brand health, consumer perception, competitive performance, and key brand performance indicators.
              </p>
            </Link>

            {/* Card 5 */}
            <Link
              href="/solutions#consumer-intelligence"
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:border-cyan-500/50 transition-all shadow-xs space-y-2 group block"
            >
              <div className="size-8 rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-cyan-400 flex items-center justify-center">
                <MessageSquare className="size-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-cyan-600 transition-colors">
                Assess Consumer Satisfaction
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Hear directly from consumers and understand their experiences with your brand, products, and services.
              </p>
            </Link>

            {/* Card 6 */}
            <Link
              href="/solutions#product-testing"
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:border-rose-500/50 transition-all shadow-xs space-y-2 group block"
            >
              <div className="size-8 rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 flex items-center justify-center">
                <FlaskConical className="size-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-rose-600 transition-colors">
                Test a New Product
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Test concepts, products, flavours, packaging, positioning, and consumer reception before making major commercial decisions.
              </p>
            </Link>

            {/* Card 7 */}
            <Link
              href="/solutions#brand-intelligence"
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card hover:border-indigo-500/50 transition-all shadow-xs space-y-2 group block sm:col-span-2 lg:col-span-3 xl:col-span-2"
            >
              <div className="size-8 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 flex items-center justify-center">
                <BarChart3 className="size-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-indigo-600 transition-colors">
                Monitor Brand Performance
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Establish and utilise relevant KPIs to measure, track, and improve brand performance across target markets.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR SOLUTIONS (The 6 Structured Solutions) */}
      <section id="solutions" className="py-12 sm:py-16 border-b border-border/60 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              OUR SOLUTIONS
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Intelligence Designed Around Your Business Needs
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Tailored research and intermediation methodologies engineered to solve critical strategic and commercial challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Solution 1 */}
            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs hover:border-primary/40 transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary">
                  <span>SOLUTION 01</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Market Opportunity Intelligence
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We help clients identify and assess market opportunities by analysing consumer needs, market dynamics, competition, distribution, emerging trends, and potential demand.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs">
                <span className="font-mono text-muted-foreground">Deliverable: Opportunity Index & Scoping</span>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs hover:border-emerald-500/40 transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600">
                  <span>SOLUTION 02</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Consumer Intelligence
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Through targeted research, we identify patterns in consumer behaviour, preferences, habits, satisfaction, and consumption to help businesses and investors make informed decisions.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs">
                <span className="font-mono text-muted-foreground">Deliverable: Behavioural Archetypes & Panels</span>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs hover:border-rose-500/40 transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-rose-600">
                  <span>SOLUTION 03</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Product & Concept Testing
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We help clients explore new products and concepts by testing consumer reception, identifying opportunities for improvement, and understanding potential market response before commercialisation.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs">
                <span className="font-mono text-muted-foreground">Deliverable: Sensory & Purchase Intent Reports</span>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs hover:border-purple-500/40 transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-600">
                  <span>SOLUTION 04</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Brand Intelligence
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We help businesses track the development and reception of their brands, products, and services across diverse consumer markets. Our approach can help clients monitor brand health, consumer perception, competitive performance, and relevant KPIs.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs">
                <span className="font-mono text-muted-foreground">Deliverable: Continuous Brand Tracker Dashboards</span>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs hover:border-cyan-500/40 transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-600">
                  <span>SOLUTION 05</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Market Entry & Expansion
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We help clients practically explore new markets through research, consumer engagement, product testing, and market intelligence. Our work provides insight into market conditions, consumer demand, competitive environments, and potential opportunities.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs">
                <span className="font-mono text-muted-foreground">Deliverable: Go-To-Market Strategic Blueprint</span>
              </div>
            </div>

            {/* Solution 6 */}
            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs hover:border-amber-500/40 transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600">
                  <span>SOLUTION 06</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Business & Investment Intermediation
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We bridge investment gaps through business-to-business intermediation. We connect businesses, investors, entrepreneurs, and strategic partners with relevant opportunities and potential counterparts to support market entry, partnerships, investment, and cross-border business development.
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs">
                <span className="font-mono text-muted-foreground">Deliverable: Deal Room Introductions & NDAs</span>
              </div>
            </div>
          </div>

          {/* Dedicated Solutions Page CTA Banner */}
          <div className="pt-2">
            <div className="rounded-2xl border border-primary/20 bg-card p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-foreground">
                  Need a Customized Commercial Scope or Multi-Country Brief?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Explore our complete solutions architecture, scope blueprints, and institutional deliverables across Africa, China, and India.
                </p>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all shrink-0"
              >
                View Full Solutions Portfolio
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRATUM INTELLIGENCE (Methodology Inspector) */}
      <section id="intelligence" className="py-12 sm:py-16 border-b border-border/60 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              STRATUM INTELLIGENCE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Turning Market Information Into Actionable Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our intelligence services help businesses, brands, investors, and entrepreneurs understand markets, consumers, competitors, products, and emerging opportunities.
            </p>
          </div>

          {/* Dynamic Methodology Inspector */}
          <IntelligenceMethodology />
        </div>
      </section>

      {/* 7. STRATUM DATA & INTELLIGENCE GRAPH (Interactive Telemetry Graph) */}
      <section id="data" className="py-12 sm:py-16 border-b border-border/60 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                STRATUM DATA
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                Proprietary Datasets & Real-Time Intelligence
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our bespoke and standardised research services generate proprietary datasets covering consumer behaviour, market dynamics, consumption patterns, distribution, and related topics. Where applicable, these datasets are continuously refreshed to provide clients with relevant and timely market intelligence.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shrink-0"
            >
              Access Market Intelligence <ArrowRight className="size-3" />
            </Link>
          </div>

          {/* Recharts Analytical Intelligence Component */}
          <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm">
            <IntelligenceGraphChart />
          </div>
        </div>
      </section>

      {/* 8. HOW WE WORK (01 DEFINE to 05 ACTIVATE) */}
      <section id="how-we-work" className="py-12 sm:py-16 border-b border-border/60 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                HOW WE WORK
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                From Questions to Intelligence. From Intelligence to Opportunity.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our structured 5-stage research-to-commercialization methodology turns raw market signals into clear, actionable business outcomes.
              </p>
            </div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline shrink-0"
            >
              Explore Full 5-Stage Framework <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-primary">01 — DEFINE</span>
              <h3 className="text-sm sm:text-base font-bold text-foreground">Understand the Gap</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We begin by understanding the business question, objective, market, and information gap.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-600">02 — RESEARCH</span>
              <h3 className="text-sm sm:text-base font-bold text-foreground">Deploy Methodology</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We deploy the appropriate combination of quantitative and qualitative research methodologies.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-amber-600">03 — ANALYSE</span>
              <h3 className="text-sm sm:text-base font-bold text-foreground">Synthesize Signals</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We transform primary research, consumer feedback, and available market information into meaningful intelligence.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-cyan-600">04 — INTERPRET</span>
              <h3 className="text-sm sm:text-base font-bold text-foreground">Identify Patterns</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We identify the patterns, behaviours, opportunities, and implications that matter to the client’s objective.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-card space-y-2 shadow-xs">
              <span className="text-xs font-mono font-bold text-purple-600">05 — ACTIVATE</span>
              <h3 className="text-sm sm:text-base font-bold text-foreground">Drive Action</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We help clients translate intelligence into business decisions, market opportunities, partnerships, and action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GLOBAL FOOTPRINT & CORRIDORS (Spacious, Decongested & Segmented) */}
      <section id="footprint" className="py-12 sm:py-16 border-b border-border/60 bg-muted/10 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                GLOBAL FOOTPRINT & CORRIDORS
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                Operating Where Incumbent Giants Are Weakest On The Ground
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum combines on-the-ground consumer telemetry hubs across Africa with bilateral trade desks in China and India.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline shrink-0"
            >
              Inquire on Regional Footprint <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Interactive Global Footprint Component (East Africa, Asia Trade Desk, West Africa, Southern Africa, North Africa, Pan-Africa) */}
          <GlobalFootprint />
        </div>
      </section>

      {/* 10. INDUSTRIES & SECTORS (Cool & Innovative 4-Cluster Sector Matrix) */}
      <section id="industries" className="py-12 sm:py-16 border-b border-border/60 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              SECTOR INTELLIGENCE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Market Intelligence Across Diverse Commercial Sectors
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our telemetry and field networks span essential commercial categories, providing clients with deep vertical intelligence calibrated for emerging market realities.
            </p>
          </div>

          {/* Innovative Sector Intelligence Matrix */}
          <IndustryMatrix />
        </div>
      </section>

      {/* 11. SOUTH-SOUTH TRADE DESK & B2B INTERMEDIATION (Spotlight on Africa, China & India) */}
      <section id="deal-room" className="py-12 sm:py-16 border-b border-border/60 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                CROSS-BORDER TRADE DESK
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                From Intelligence to Opportunity: South-South Intermediation
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum goes beyond understanding markets. We connect businesses, investors, entrepreneurs, and strategic partners with vetted opportunities and potential counterparts across Africa, China, and India.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800 shrink-0 font-bold">
              ACTIVE B2B PIPELINE: $185M+
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Visual Panel */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-border/80 shadow-md min-h-[320px] flex flex-col justify-end p-5">
              <Image
                src="/images/landing-port.jpg"
                alt="Maritime container terminal logistics for cross-border trade between Africa, China and India"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              <div className="relative z-10 space-y-2 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold font-mono">
                  <Lock className="size-3" />
                  CONFIDENTIAL DEAL ROOM
                </div>
                <h4 className="text-base font-bold leading-tight">
                  South-South Corridors: Africa • China • India
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Connecting African commercial buyers and distributors directly to audited manufacturing plants in Guangdong and Zhejiang (China), and pharmaceutical and industrial partners in Mumbai and Gujarat (India).
                </p>
              </div>
            </div>

            {/* B2B Services */}
            <div className="lg:col-span-7 bg-card rounded-2xl border border-border/80 p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                <span className="text-xs font-mono font-bold uppercase text-foreground">
                  Our B2B Intermediation Framework
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">BILATERAL NDAs</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Market Entry
                  </h4>
                  <p className="text-muted-foreground text-[11px]">
                    Structured regulatory, commercial, and operational pathways into new regional markets.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Strategic Partnerships
                  </h4>
                  <p className="text-muted-foreground text-[11px]">
                    Identifying and brokering joint ventures, co-investments, and technical partnerships.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Investment Identification
                  </h4>
                  <p className="text-muted-foreground text-[11px]">
                    Vetting high-yield commercial assets, acquisition targets, and capital placement opportunities.
                  </p>
                </div>

                <div className="p-3 rounded-xl border border-border/60 bg-muted/20 space-y-1">
                  <h4 className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Supplier & Distributor Vetting
                  </h4>
                  <p className="text-muted-foreground text-[11px]">
                    Audited Tier-1 distributors, wholesalers, cold-chain operators, and factory partners.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Mutual NDA required for deal rooms.</span>
                <Link
                  href="#contact"
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Initiate Intermediation Brief <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHY STRATUM? (Institutional Comparison & Quality Assurance) */}
      <section id="why-stratum" className="py-12 sm:py-16 border-b border-border/60 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                WHY STRATUM?
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                Deep Understanding of Diverse Markets
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum combines international market research experience with on-the-ground understanding of local markets across Africa, China, and India.
              </p>
            </div>
            <Link
              href="/why-stratum"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline shrink-0"
            >
              Full Institutional Comparison <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs space-y-2.5">
              <div className="size-8 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center">
                <Globe2 className="size-4" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Deep Understanding of Diverse Markets
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum combines international market research experience with on-the-ground understanding of local markets. Our approach brings together digital research, face-to-face fieldwork, consumer engagement, and market intelligence to help clients navigate diverse commercial environments.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs space-y-2.5">
              <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="size-4" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Rigorous Quality Control
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We combine digital and face-to-face data collection with structured analysis and quality-control processes. Our field teams engage respondents directly, while our digital platforms facilitate scalable consumer research. Every stage is subjected to quality-control procedures designed to improve accuracy, consistency, and reliability.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-xs space-y-2.5">
              <div className="size-8 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 flex items-center justify-center">
                <Database className="size-4" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                Proprietary Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our research generates proprietary datasets and intelligence covering consumer behaviour, market dynamics, consumption patterns, distribution, and related topics. Where applicable, these datasets are continuously refreshed to provide clients with relevant and timely market intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. INSIGHTS PREVIEW (Links to /reports, /insights, /blogs) */}
      <section id="insights" className="py-12 sm:py-16 border-b border-border/60 bg-muted/10 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                RESEARCH & PERSPECTIVES
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                Intelligence Worth Sharing
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Explore research reports, market insights, and editorial analysis from Stratum.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-border/80 bg-card text-foreground font-semibold text-xs hover:bg-muted transition-colors shrink-0"
              >
                Reports
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shrink-0"
              >
                All Insights <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/reports"
              className="p-5 rounded-2xl border border-border/80 bg-card hover:border-primary/50 transition-all space-y-3 group block"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-primary uppercase">RESEARCH REPORTS</span>
                <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Market Reports Directory
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Deep-dive sector studies, cross-border corridor evaluations, and comprehensive market intelligence dossiers.
              </p>
            </Link>

            <Link
              href="/insights"
              className="p-5 rounded-2xl border border-border/80 bg-card hover:border-emerald-500/50 transition-all space-y-3 group block"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-emerald-600 uppercase">MARKET INSIGHTS</span>
                <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                Strategic Briefings & Telemetry
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Short-form analysis on consumer sentiment, currency impacts, inflation shifts, and retail price elasticity.
              </p>
            </Link>

            <Link
              href="/blogs"
              className="p-5 rounded-2xl border border-border/80 bg-card hover:border-cyan-500/50 transition-all space-y-3 group block sm:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-cyan-600 uppercase">EDITORIAL BLOGS</span>
                <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-cyan-600 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-cyan-600 transition-colors">
                Field Notes & Trade Corridors
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Long-form articles examining Africa-Asia trade, supply chain friction points, and retail innovation.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 14. TURN INSIGHT INTO OPPORTUNITY (Final Consultation & Intake Form) */}
      <section id="contact" className="py-12 sm:py-16 border-b border-border/60 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              TURN INSIGHT INTO OPPORTUNITY
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
              Understand the Market. Identify the Opportunity. Make Better Decisions.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Whether you are entering a new market, launching a product, tracking your brand, evaluating an investment opportunity, or seeking strategic business connections, Stratum provides the intelligence and market access to help you move forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Executive Visual & Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-2xl overflow-hidden border border-border/80 shadow-md aspect-[16/10] sm:aspect-[2/1] lg:aspect-[16/10] group">
                <Image
                  src="/images/landing-executive.jpg"
                  alt="Stratum executive reviewing strategic market intelligence and B2B trade data"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white space-y-0.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">
                    EXECUTIVE RESEARCH & ADVISORY DESK
                  </span>
                  <p className="text-xs font-semibold">
                    Operations Command: Nairobi, Kenya • Cross-Border Corridors: Africa, China & India
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border/70 bg-card">
                  <ShieldCheck className="size-5 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">Strict Bilateral NDA Protocol</h4>
                    <p className="text-muted-foreground text-[11px]">
                      All inquiries and scoping discussions are protected under legally binding non-disclosure agreements.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border/70 bg-card">
                  <PhoneCall className="size-5 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">Rapid 6-Hour Turnaround</h4>
                    <p className="text-muted-foreground text-[11px]">
                      A specialized regional lead will respond with preliminary telemetry and scoping within 6 business hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border/70 bg-card font-mono text-[11px]">
                  <Globe2 className="size-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="text-muted-foreground">Official Communications:</span>
                    <p className="font-bold text-foreground">
                      info@stratumresearchltd.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form (7 cols) */}
            <div className="lg:col-span-7 bg-card border border-border/80 rounded-2xl p-5 sm:p-7 shadow-sm">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* 15. Comprehensive Corporate Footer */}
      <Footer />

      {/* 16. Native Mobile PWA Bottom Navigation Bar */}
      <MobilePwaBar />
    </div>
  );
}
