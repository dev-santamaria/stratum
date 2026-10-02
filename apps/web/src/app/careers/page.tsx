import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  Briefcase,
  Users2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Compass,
  MapPin,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Careers at Stratum — Curiosity Drives Better Questions",
  description:
    "Explore career opportunities with Stratum Research Ltd. Join our community of researchers, analysts, and business strategists across Nairobi, Lagos, and global markets.",
};

const OPEN_ROLES = [
  {
    title: "Senior Consumer Research Analyst",
    department: "Quantitative & Panel Research",
    location: "Nairobi Hub (Kenya) / Hybrid",
    type: "Full-Time",
    description:
      "Design quantitative survey instruments, manage panel validation workflows, and translate raw consumer telemetry into client-ready commercial intelligence.",
  },
  {
    title: "Lead Field Operations Coordinator",
    department: "Fieldwork & Ground Telemetry",
    location: "Lagos Hub (Nigeria) / On-Site",
    type: "Full-Time",
    description:
      "Coordinate enumerator networks across informal kiosk retail hubs, ensure GPS geofence audit compliance, and oversee retail price audits.",
  },
  {
    title: "Deal Room Associate — Asia & Africa Corridors",
    department: "B2B Intermediation",
    location: "Nairobi Hub / International Desks",
    type: "Full-Time",
    description:
      "Support bilateral distributor matchmaking, facilitate commercial introductions with China and India supply partners, and maintain confidential Deal Room repositories.",
  },
  {
    title: "Qualitative Research Moderator (IDIs & Focus Groups)",
    department: "Qualitative Intelligence",
    location: "Johannesburg Hub (South Africa) / Remote",
    type: "Full-Time",
    description:
      "Moderate in-depth ethnographic interviews, sensory concept evaluations, and synthesize behavioral consumer drivers across regional markets.",
  },
];

const LIFE_AT_STRATUM = [
  {
    title: "Learn and Grow",
    description: "Continuous exposure to cutting-edge research methodologies, machine learning telemetry, and executive decision-making.",
  },
  {
    title: "Work Across Diverse Markets",
    description: "Engage with commercial ecosystems across 5+ continents, from Nairobi and Lagos to Shanghai and London.",
  },
  {
    title: "Collaborate With Multidisciplinary Teams",
    description: "Work alongside data scientists, ethnographers, trade analysts, and former corporate directors.",
  },
  {
    title: "Develop Research & Analytical Skills",
    description: "Master both quantitative panel tracking and deep qualitative behavioral inquiry with institutional rigor.",
  },
  {
    title: "Engage With Real Businesses & Consumers",
    description: "Conduct first-hand research on the ground in neighborhood kiosks, households, and multinational boardrooms.",
  },
  {
    title: "Contribute to High-Impact Projects",
    description: "Your insights directly inform multimillion-dollar investment decisions, product rollouts, and market entry strategies.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-5">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-muted/40 text-xs font-semibold text-muted-foreground font-mono">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span>CAREERS AT STRATUM</span>
              <span>•</span>
              <span className="text-foreground font-bold">CURIOSITY DRIVES BETTER INSIGHTS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
              Curiosity Drives Better Questions. Better Questions Drive Better Insights.
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Welcome to a community of researchers, analysts, field professionals, strategists, and business minds driven by curiosity and a passion for understanding people, markets, and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Life at Stratum */}
      <section className="py-12 sm:py-16 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="max-w-3xl space-y-1.5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              CULTURE & VALUES
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Life at Stratum
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              At Stratum, you will have opportunities to learn, contribute, develop new skills, work across diverse markets, and grow professionally while contributing to research that helps businesses make better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIFE_AT_STRATUM.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl border border-border/80 bg-card space-y-2 shadow-xs"
              >
                <div className="size-7 rounded-lg bg-primary/10 text-primary font-mono font-bold text-xs flex items-center justify-center border border-primary/20">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Vacancies */}
      <section id="vacancies" className="py-12 sm:py-16 bg-muted/15 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                CURRENT OPPORTUNITIES
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Open Vacancies
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                We are constantly expanding our research, analytics, and intermediation teams across our hubs.
              </p>
            </div>

            <div className="text-xs font-mono text-muted-foreground bg-card px-3 py-1.5 rounded-lg border border-border/80 shrink-0">
              REGIONAL HUB: NAIROBI, KENYA
            </div>
          </div>

          <div className="space-y-4">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card hover:border-foreground/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-primary font-semibold">{role.department}</span>
                    <span className="text-border">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="size-3" /> {role.location}
                    </span>
                    <span className="text-border">•</span>
                    <span className="text-muted-foreground font-mono">{role.type}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{role.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href="mailto:careers@stratumresearchltd.com?subject=Application:%20"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all text-center"
                  >
                    Apply for Role
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-border/80 bg-card text-center space-y-3">
            <h3 className="text-base font-bold text-foreground">
              Don&apos;t See Your Exact Role?
            </h3>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We are always excited to hear from passionate researchers, data engineers, and market specialists across Africa and globally. Send an unsolicited application and CV to our talent desk.
            </p>
            <div className="pt-1">
              <a
                href="mailto:careers@stratumresearchltd.com?subject=General%20Application"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <Mail className="size-3.5" />
                careers@stratumresearchltd.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
