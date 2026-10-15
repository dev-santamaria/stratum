"use client";

import React, { useState } from "react";
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
  ArrowRight,
  HelpCircle,
  PhoneCall,
  MapPin,
  MessageSquare,
  Copy,
  Check,
  Shield,
  Sparkles,
  Workflow,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. HERO HEADER: Minimalist Inter Typography, Sharp Edges */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-slate-50 dark:bg-card/40">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none border border-border/80 bg-background text-[11px] font-mono font-semibold text-primary shadow-2xs">
              <Workflow className="size-3 text-primary shrink-0" />
              <span>CLIENT ADVISORY DESK &bull; NAIROBI HEADQUARTERS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-tight">
              Initiate a Strategic Mandate With Stratum
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Stratum Research Ltd is a market intelligence, strategic research and business intermediation firm helping companies understand markets, identify opportunities and execute growth strategies across Africa and emerging markets.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#consultation-intake"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
              >
                <span>SUBMIT SCOPING BRIEF</span>
                <ArrowRight className="size-3.5" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>OUR 6 SERVICES</span>
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>HOW WE WORK (5 STAGES)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT WORKSPACE & CONSULTATION FORM */}
      <main id="consultation-intake" className="flex-1 py-14 sm:py-20 border-b border-border/80 bg-background scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (5 cols): Direct Corporate Contact & Governance Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-7 rounded-none border border-border/80 bg-card shadow-xs space-y-6">
                <div className="border-b border-border/60 pb-3 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    DIRECT CORPORATE OFFICE
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground uppercase">
                    Westlands, Nairobi
                  </span>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium uppercase text-[10px] font-mono">
                      Direct Line &amp; WhatsApp:
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy("+254 721 154382", "phone")}
                      className="text-[11px] font-mono text-primary hover:underline inline-flex items-center gap-1 cursor-pointer uppercase font-semibold"
                    >
                      {copiedPhone ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                      <span>{copiedPhone ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>
                  <div className="p-3.5 rounded-none bg-slate-50 dark:bg-card/40 border border-border/80 flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-semibold font-mono text-foreground">+254 721 154382</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href="tel:+254721154382"
                        className="px-3 py-1.5 rounded-none bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xs"
                      >
                        CALL
                      </a>
                      <a
                        href="https://wa.me/254721154382"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-none bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all flex items-center gap-1 shadow-xs"
                      >
                        <MessageSquare className="size-3" />
                        <span>WHATSAPP</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Corporate Email */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium uppercase text-[10px] font-mono">
                      Official Corporate Email:
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy("info@stratumresearchltd.com", "email")}
                      className="text-[11px] font-mono text-primary hover:underline inline-flex items-center gap-1 cursor-pointer uppercase font-semibold"
                    >
                      {copiedEmail ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                      <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>
                  <a
                    href="mailto:info@stratumresearchltd.com"
                    className="p-3.5 rounded-none bg-slate-50 dark:bg-card/40 border border-border/80 flex items-center justify-between text-xs font-mono font-semibold text-foreground hover:text-primary transition-colors group"
                  >
                    <span>info@stratumresearchltd.com</span>
                    <Mail className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>

                {/* Physical Location & Hours */}
                <div className="pt-2 border-t border-border/60 text-xs text-muted-foreground space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Delta Corner Tower, Westlands, Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <Clock className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Mon &ndash; Fri, 08:00 &ndash; 18:00 EAT (UTC+3)</span>
                  </div>
                </div>
              </div>

              {/* Institutional Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-none border border-border/80 bg-card space-y-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground uppercase">
                    <ShieldCheck className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Bilateral NDA</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Mutual confidentiality executed on all client briefings prior to scoping.
                  </p>
                </div>

                <div className="p-4 rounded-none border border-border/80 bg-card space-y-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground uppercase">
                    <Shield className="size-3.5 text-primary" />
                    <span>KDPA &amp; ESOMAR</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Field research conforms to international codes and privacy standards.
                  </p>
                </div>
              </div>

              {/* Dedicated FAQ Link Card */}
              <div className="p-4 rounded-none border border-border/80 bg-slate-50 dark:bg-card/40 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-foreground block uppercase text-[11px]">Have Questions Before Scoping?</span>
                  <span className="text-[11px] text-muted-foreground">View our governance, timelines, and deliverables FAQ.</span>
                </div>
                <Link
                  href="/faq"
                  className="px-3.5 py-2 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1 transition-colors"
                >
                  <span>VIEW FAQ</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Right Column (7 cols): The Consultation Form Wrapped in Sharp Container */}
            <div className="lg:col-span-7 rounded-none border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
              <ConsultationForm />
            </div>

          </div>
        </div>
      </main>

      {/* 3. SIGNATURE MIDNIGHT NAVY CORPORATE CTA BANNER (#002B49) */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-white/10 border border-white/20 text-[10px] font-mono text-white/90">
                <Sparkles className="size-3 text-sky-300" />
                <span>CENTRAL OPERATIONS COMMAND &bull; NAIROBI HQ</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                Grounded in Nairobi Operations Desk Governance
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Discuss your sector, research mandate, or commercial thesis directly with our research leads in Nairobi. We draft initial scoping memos within 6 business hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+254721154382"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-[#002B49] font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-xs"
              >
                <Phone className="size-3.5" />
                <span>CALL NAIROBI HQ</span>
              </a>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-transparent text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <span>HOW WE WORK (5 STAGES)</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 bg-transparent text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <span>OUR 6 SERVICES</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Native Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
