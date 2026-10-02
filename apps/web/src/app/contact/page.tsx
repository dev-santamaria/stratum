import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ConsultationForm } from "@/components/landing/consultation-form";
import {
  CheckCircle2,
  Globe2,
  Lock,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Contact STRATUM — Turn Insight Into Opportunity",
  description:
    "Connect with STRATUM directors to discuss tailored market research, brand tracking panels, proprietary datasets, and B2B distributor intermediation in emerging markets.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/80 bg-muted/40 text-xs font-semibold text-muted-foreground">
              <span className="size-1.5 rounded-full bg-blue-600" />
              <span>TALK TO STRATUM</span>
              <span className="text-border">•</span>
              <span className="text-foreground font-bold">EXECUTIVE CONSULTATION</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
              Turn Insight Into Opportunity.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                Talk to Stratum.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Whether you are entering a new market, launching a product, tracking your brand, evaluating an investment opportunity, or seeking strategic business connections, Stratum provides the intelligence and market access to help you move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Assurances Section */}
      <section className="py-20 md:py-24 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Access & Assurances (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                  DIRECT ENGAGEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  Understand the Market. Identify the Opportunity. Make Better Decisions.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every engagement is directed by experienced market intelligence directors who understand the local nuances of informal retail, subnational supply chains, and cross-border trade barriers.
                </p>
              </div>

              {/* Guarantees List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border/70 bg-card">
                  <Lock className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground">
                      Mutual NDA & Confidentiality Guaranteed
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      We execute strict bilateral NDAs prior to receiving proprietary formulation specs or investment thesis documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-border/70 bg-card">
                  <ShieldCheck className="size-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground">
                      SLA: Response Within 6 Business Hours
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Your brief is reviewed immediately by our regional directors to prepare tailored scoping notes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-border/70 bg-card">
                  <Globe2 className="size-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground">
                      Global Emerging Market Coverage
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Active fieldwork infrastructure and verified distributor networks operating across key commercial hubs worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/30 border border-border text-xs text-muted-foreground space-y-1.5 font-mono">
                <span className="font-semibold text-foreground">Direct Desk Inquiries:</span>
                <p className="text-[11px] text-foreground">General: <a href="mailto:info@stratumresearchltd.com" className="text-primary hover:underline">info@stratumresearchltd.com</a></p>
                <p className="text-[11px] text-foreground">Research: <a href="mailto:research@stratumresearchltd.com" className="text-primary hover:underline">research@stratumresearchltd.com</a></p>
                <p className="text-[11px] text-foreground">B2B Deals: <a href="mailto:partners@stratumresearchltd.com" className="text-primary hover:underline">partners@stratumresearchltd.com</a></p>
                <p className="text-[10px] text-muted-foreground pt-1">Global HQ: Nairobi, Kenya • Cross-Border: Africa, China & India</p>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Intake Form (7 cols) */}
            <div className="lg:col-span-7 bg-card border border-border/80 rounded-2xl p-6 sm:p-10 shadow-lg">
              <div className="border-b border-border/60 pb-4 mb-6">
                <h3 className="text-lg font-bold text-foreground">
                  Request a Strategic Consultation
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Tell us about your target geography and objectives. Our team will prepare preliminary market intelligence telemetry for your briefing.
                </p>
              </div>

              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
