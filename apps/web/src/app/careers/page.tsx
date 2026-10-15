import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  Briefcase,
  Users2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe2,
  MapPin,
  Mail,
  ShieldCheck,
  Clock,
  Building2,
  Award,
  Handshake,
  GraduationCap,
  TrendingUp,
  Zap,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "Careers & Field Fellowship at Stratum — Volunteering, Gigs & Careers",
  description:
    "Explore career, volunteering, and on-demand gig opportunities with Stratum Research Ltd. Join our grassroots field envoy fellowship, develop verified empirical research skills, and advance to permanent leadership.",
};

const OPEN_ROLES = [
  {
    title: "Senior Consumer Research Analyst",
    department: "Quantitative & Econometric Modeling",
    location: "East Africa HQ (Nairobi) / Hybrid",
    type: "Full-Time",
    experience: "5+ Years Experience",
    description:
      "Design quantitative survey instruments, manage panel validation workflows, and translate raw consumer telemetry into client-ready commercial intelligence and price elasticity models.",
    responsibilities: [
      "Develop econometric regression models on consumer price resistance and basket allocation",
      "Supervise statistical sampling power calculations across subnational demographic tiers",
      "Author executive board dossiers for Fortune 500 and regional enterprise leadership",
    ],
  },
  {
    title: "Lead Field Operations Coordinator",
    department: "Fieldwork & Ground Telemetry",
    location: "West Africa Corridor (ECOWAS Belt) / Field-Based",
    type: "Full-Time",
    experience: "4+ Years Experience",
    description:
      "Coordinate enumerator networks across informal kiosk retail hubs, ensure GPS geofence audit compliance, and oversee retail price and stockout audits across major commercial corridors.",
    responsibilities: [
      "Manage field squads conducting daily retail kiosk audits and open-air market intercepts",
      "Enforce Tier-01 GPS geofencing and Tier-02 acoustic IDI audio validation protocols",
      "Coordinate multilingual dialect translations across Pidgin, Yoruba, and Hausa",
    ],
  },
  {
    title: "Deal Room Associate — Asia & Africa Corridors",
    department: "B2B Intermediation & Sourcing",
    location: "East Africa HQ (Nairobi) & China Trade Desk",
    type: "Full-Time",
    experience: "3+ Years Experience",
    description:
      "Support bilateral distributor matchmaking, facilitate commercial introductions with China and India supply partners, and maintain confidential Deal Room repositories under bilateral NDAs.",
    responsibilities: [
      "Conduct due diligence on Tier-1 distributor warehousing, balance sheets, and distribution reach",
      "Coordinate direct factory inspections across Shenzhen, Guangzhou, and Gujarat belts",
      "Draft commercial supply agreements, escrow terms, and bilateral milestone schedules",
    ],
  },
  {
    title: "Qualitative Research Moderator (IDIs & Ethnography)",
    department: "Qualitative & Behavioral Intelligence",
    location: "Southern Africa Corridor / Field & Remote",
    type: "Full-Time",
    experience: "3+ Years Experience",
    description:
      "Moderate in-depth ethnographic interviews, sensory concept evaluations, and synthesize behavioral consumer drivers across township retail and informal trading environments.",
    responsibilities: [
      "Conduct native-vernacular qualitative depth interviews in informal retail clusters",
      "Analyze acoustic speech-to-text transcripts for unvarnished sentiment and category loyalty",
      "Translate cultural nuances and consumption rituals into concrete marketing strategies",
    ],
  },
  {
    title: "Econometric Data Scientist (Intelligence Graph)",
    department: "Data Infrastructure & Analytics",
    location: "East Africa HQ (Nairobi) / Hybrid",
    type: "Full-Time",
    experience: "4+ Years Experience",
    description:
      "Build and maintain the queryable Stratum Intelligence Graph, integrating mobile money transaction pacing, customs manifest data, and subnational inflation indicators.",
    responsibilities: [
      "Develop automated data pipelines reconciling wholesale invoices against retail shelf sweeps",
      "Engineer machine learning algorithms detecting anomalous enumerator reporting and fraud",
      "Architect client-facing interactive analytical dashboards with low-latency telemetry query",
    ],
  },
];

const LIFE_AT_STRATUM = [
  {
    title: "Learn and Grow",
    icon: Sparkles,
    description:
      "Continuous professional growth, formal mentorship from sector directors, and training in state-of-the-art econometric tools.",
  },
  {
    title: "Work Across Diverse Markets",
    icon: Globe2,
    description:
      "Exposure to cross-border commercial corridors spanning East, West, Southern Africa, and Asia trade gateways.",
  },
  {
    title: "Collaborate with Multidisciplinary Teams",
    icon: Users2,
    description:
      "Work alongside native dialect ethnographers, quantitative survey methodologists, supply chain operators, and legal counsel.",
  },
  {
    title: "Develop Research & Analytical Skills",
    icon: TrendingUp,
    description:
      "Master double-blind sample power calibration, GPS spatial outlet audits, and predictive pricing resistance curves.",
  },
  {
    title: "Engage with Real Businesses & Consumers",
    icon: Handshake,
    description:
      "Direct field interaction in the open-air wholesale corridors and neighborhood kiosks where real economic decisions happen.",
  },
  {
    title: "Contribute to High-Impact Projects",
    icon: Award,
    description:
      "Your research shapes million-dollar investment allocations, regional market entry roadmaps, and healthcare supply chains.",
  },
];

const ELEVATION_PATHWAYS = [
  {
    step: "01",
    stage: "VOLUNTEERSHIP & FELLOWSHIP",
    badge: "GRASSROOTS INTAKE",
    bgColor: "bg-[#002B49]",
    accentColor: "text-[#48cae4]",
    icon: GraduationCap,
    title: "Field Volunteership Fellowship",
    description:
      "The foundational entry point for local youth, university students, and community researchers. Volunteers gain hands-on training in satellite GPS geofencing, dialect interview techniques, and ESOMAR research ethics while supporting grassroots field audits.",
    benefits: [
      "Certified Training in Digital Fieldwork & Telemetry",
      "Field Logistics Allowance & Mobile Data Stipends",
      "Formal Stratum Empirical Researcher Credential",
      "Direct Mentorship from Senior Sector Directors",
    ],
    ctaText: "APPLY AS FIELD VOLUNTEER",
    ctaSubject: "Field Volunteer Fellowship Application",
  },
  {
    step: "02",
    stage: "PROJECT-BASED & GIG ROSTER",
    badge: "PAID SPRINT CONTRACTS",
    bgColor: "bg-[#167D3C]",
    accentColor: "text-emerald-200",
    icon: Zap,
    title: "On-Demand Project & Gig Enumerator",
    description:
      "Certified volunteers advance to our paid project-based gig network. Deployed on demand for commercial client sprints—including 500-kiosk retail audits, sensory consumer taste-tests, and cross-border wholesale price surveys with milestone-based pay.",
    benefits: [
      "Paid Milestone Compensation per Verified POS Audit",
      "Flexible Project Sprints (1 to 4 Weeks Duration)",
      "Automated Payouts upon Spatial & Acoustic Clearance",
      "Priority Selection for Multilateral FMCG & Fintech Audits",
    ],
    ctaText: "JOIN ON-DEMAND GIG ROSTER",
    ctaSubject: "Project Gig Enumerator Roster Application",
  },
  {
    step: "03",
    stage: "PERMANENT & CONTRACTUAL ELEVATION",
    badge: "CAREER ADVANCEMENT",
    bgColor: "bg-[#004B87]",
    accentColor: "text-sky-200",
    icon: TrendingUp,
    title: "Permanent & Full-Time Career Elevation",
    description:
      "Top-performing gig enumerators and volunteers who maintain over 99.4% audit precision are formally elevated into permanent contractual employment as Field Operations Coordinators, Data Quality Managers, and Regional Supervisors.",
    benefits: [
      "Full-Time Salaried Employment with Comprehensive Benefits",
      "Regional Team Leadership & Enumerator Squad Oversight",
      "Direct Involvement in High-Level C-Suite Dossier Synthesis",
      "Cross-Corridor Rotation (East, West & Southern Africa)",
    ],
    ctaText: "REVIEW PERMANENT ROLES",
    ctaLink: "#vacancies",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-border/80 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">CAREERS AT STRATUM</span>
              <span className="text-border">•</span>
              <span className="text-foreground">CURIOSITY DRIVES BETTER QUESTIONS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-[1.2]">
              Curiosity Drives Better Questions. Better Questions Drive Better Insights.
            </h1>

            <div className="space-y-3 text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              <p>
                <strong className="text-foreground">Do You Want to Work With Us at Stratum?</strong>
              </p>
              <p>
                Welcome to a community of researchers, analysts, field professionals, strategists, and business minds driven by curiosity and a passion for understanding people, markets, and businesses.
              </p>
              <p>
                At Stratum, you will have opportunities to learn, contribute, develop new skills, work across diverse markets, and grow professionally while contributing to research that helps businesses make better decisions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#life-at-stratum"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>LIFE AT STRATUM</span>
                <ArrowRight className="size-3.5" />
              </a>
              <a
                href="#vacancies"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Briefcase className="size-3.5 text-primary" />
                <span>VIEW OPEN OPPORTUNITIES</span>
              </a>
            </div>
          </div>

          {/* Unified Footprint Telemetry Ribbon */}
          <div className="p-3 rounded-none border border-border/80 bg-card/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-none bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">TALENT PIPELINE:</span>
              <span>1,600+ Field Network • Structured Volunteership • On-Demand Gig Sprints • Elevation to Staff</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-primary font-bold">EAST AFRICA HQ COMMAND</span>
              <span>•</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Scale Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>CENTRAL COMMAND</span>
                <Building2 className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">Nairobi HQ</div>
              <p className="text-[11px] text-muted-foreground">Operations &amp; Research Lab</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>FIELD NETWORK</span>
                <Users2 className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">1,600+ Envoys</div>
              <p className="text-[11px] text-muted-foreground">Volunteers, Gigs &amp; Full-Time</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>WORKING TONGUES</span>
                <Globe2 className="size-3.5 text-blue-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">42+ Dialects</div>
              <p className="text-[11px] text-muted-foreground">English, Swahili, French &amp; More</p>
            </div>

            <div className="p-4 rounded-none border border-border/80 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>TALENT ELEVATION</span>
                <TrendingUp className="size-3.5 text-amber-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">&gt; 60% Elevated</div>
              <p className="text-[11px] text-muted-foreground">Field Volunteers Promoted to Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE-STAGE ELEVATION LADDER (WORDPRESS COLOR CARDS) */}
      <section id="volunteering" className="py-12 sm:py-16 border-b border-border/80 bg-muted/15 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
                GRASSROOTS TALENT ARCHITECTURE • VOLUNTEERING &amp; GIGS
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                From Field Volunteering to Permanent Leadership
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum builds its 1,600+ field network from the ground up. Aspiring researchers and local community members join through structured volunteership, gain certified empirical training, earn through project gigs, and advance to permanent employment.
              </p>
            </div>
            <a
              href="mailto:careers@stratumresearchltd.com?subject=Field%20Talent%20Inquiry%20(Volunteering%20or%20Gigs)"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all shrink-0 cursor-pointer"
            >
              <HeartHandshake className="size-3.5" />
              <span>REGISTER FOR FIELD NETWORK</span>
            </a>
          </div>

          {/* 3-Stage Tall Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {ELEVATION_PATHWAYS.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.step}
                  className={`${p.bgColor} text-white p-7 sm:p-8 rounded-none border border-border/80 shadow-sm flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1 duration-200`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-none bg-white/10 text-white border border-white/20">
                        STAGE {p.step}
                      </span>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${p.accentColor}`}>
                        {p.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-none bg-white/10 text-white flex items-center justify-center border border-white/20 shrink-0">
                        <IconComp className="size-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/15">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                        Core Program Attributes:
                      </span>
                      <div className="space-y-1.5">
                        {p.benefits.map((b) => (
                          <div key={b} className="flex items-start gap-2 text-xs text-slate-100">
                            <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-tight">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    {p.ctaLink ? (
                      <a
                        href={p.ctaLink}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-none bg-white text-[#002B49] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-all text-center"
                      >
                        <span>{p.ctaText}</span>
                        <ArrowRight className="size-3.5" />
                      </a>
                    ) : (
                      <a
                        href={`mailto:careers@stratumresearchltd.com?subject=${encodeURIComponent(p.ctaSubject || "Application")}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-none bg-white text-[#002B49] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-all text-center shadow-xs"
                      >
                        <span>{p.ctaText}</span>
                        <ArrowRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LIFE AT STRATUM */}
      <section id="life-at-stratum" className="py-12 sm:py-16 border-b border-border/80 bg-background scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
              LIFE AT STRATUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
              A Community Driven by Curiosity &amp; Impact
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              At Stratum, you will have opportunities to learn, contribute, develop new skills, work across diverse markets, and grow professionally while contributing to research that helps businesses make better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIFE_AT_STRATUM.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-none border border-border/80 bg-card space-y-3 hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-9 rounded-none bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                        <Icon className="size-4.5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/60 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Stratum Culture &amp; Growth Pillar
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OPEN VACANCIES & ACTIVE MANDATES */}
      <section id="vacancies" className="py-12 sm:py-16 bg-muted/15 border-b border-border/80 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-border/80 pb-4">
            <div className="max-w-2xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
                CURRENT OPPORTUNITIES &amp; VACANCIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Open Permanent &amp; Contractual Vacancies
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We are actively recruiting quantitative analysts, field operations coordinators, and cross-border trade associates.
              </p>
            </div>

            <div className="text-xs font-mono text-muted-foreground bg-card px-3 py-1.5 rounded-none border border-border/80 shrink-0">
              <span className="text-primary font-bold">CENTRAL COMMAND:</span> NAIROBI, KENYA
            </div>
          </div>

          <div className="space-y-4">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="p-6 rounded-none border border-border/80 bg-card hover:border-primary/50 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xs"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-primary font-bold px-2 py-0.5 rounded-none bg-primary/10 border border-primary/20 uppercase">
                      {role.department}
                    </span>
                    <span className="text-border">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground font-mono">
                      <MapPin className="size-3 text-primary shrink-0" /> {role.location}
                    </span>
                    <span className="text-border">•</span>
                    <span className="text-foreground font-mono font-semibold">{role.type}</span>
                    <span className="text-border">•</span>
                    <span className="text-muted-foreground font-mono">{role.experience}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Key Mandate Responsibilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                      {role.responsibilities.map((resp) => (
                        <div key={resp} className="flex items-start gap-1.5 text-xs text-foreground/90">
                          <CheckCircle2 className="size-3 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-tight">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2">
                  <a
                    href={`mailto:careers@stratumresearchltd.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all text-center cursor-pointer"
                  >
                    <span>APPLY FOR ROLE</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                  <span className="text-[10px] font-mono text-muted-foreground text-center">
                    Direct Talent Desk Review
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Speculative Application Card */}
          <div className="p-6 rounded-none border border-border/80 bg-card text-center space-y-3 shadow-2xs">
            <div className="size-10 rounded-none bg-primary/10 text-primary mx-auto flex items-center justify-center border border-primary/20">
              <Mail className="size-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Don&apos;t See Your Exact Mandate?
            </h3>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We are always eager to review profiles from passionate quantitative researchers, data engineers, and emerging market specialists across Africa, China, India, and global hubs. Send an unsolicited application and CV to our central talent desk in Nairobi.
            </p>
            <div className="pt-1">
              <a
                href="mailto:careers@stratumresearchltd.com?subject=Unsolicited%20Application%20-%20Stratum%20Fellowship"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-muted/60 border border-border/80 text-xs font-mono font-bold text-primary hover:bg-muted transition-all uppercase"
              >
                <Mail className="size-3.5 text-primary" />
                <span>CAREERS@STRATUMRESEARCHLTD.COM</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL ASSURANCES STRIP */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-xs font-mono font-bold tracking-wider text-primary uppercase">
                INSTITUTIONAL ASSURANCES
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                Governance Standards Built for Boardrooms &amp; Capital Allocators
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Stratum combines rigorous field telemetry with legally binding bilateral NDAs and centralized command oversight.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer"
            >
              <span>LEARN ABOUT STRATUM</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-card">
              <ShieldCheck className="size-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground uppercase">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px]">
                  All solution scoping and Deal Room data protected under binding non-disclosure agreements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-card">
              <Clock className="size-5 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground uppercase">Rapid 6-Hour Intake Window</h4>
                <p className="text-muted-foreground text-[11px]">
                  A specialized research lead will review your briefing and respond within 6 business hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-card">
              <Building2 className="size-5 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground uppercase">Central Operations Command</h4>
                <p className="text-muted-foreground text-[11px]">
                  Headquartered in East Africa (Nairobi), orchestrating regional corridors globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE CORPORATE CTA BANNER */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 text-center space-y-4 max-w-4xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#48cae4] uppercase">
            JOIN OUR TALENT NETWORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
            Ready to Build Your Career at the Frontier of Market Truth?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are an aspiring grassroots researcher or an experienced econometrician, Stratum offers verified pathways to high-impact career growth.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:careers@stratumresearchltd.com?subject=Stratum%20Career%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-[#002B49] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>APPLY TO TALENT DESK</span>
              <ArrowRight className="size-3.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>CONTACT NAIROBI HQ</span>
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
