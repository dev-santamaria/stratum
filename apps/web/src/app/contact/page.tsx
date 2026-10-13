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

      {/* COMPACT ENTERPRISE HERO & CONTACT WORKSPACE */}
      <main className="flex-1 py-8 sm:py-12 border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          
          {/* Refined Standard Header (No huge bloated text) */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-border/80 bg-muted/40 text-[11px] font-mono font-semibold text-muted-foreground">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">CLIENT ADVISORY &bull; NAIROBI HEADQUARTERS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Initiate a Strategic Mandate With Stratum
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
              Stratum Research Ltd is a market intelligence, strategic research and business intermediation firm helping companies understand markets, identify opportunities and execute growth strategies across Africa and other emerging markets.
            </p>
          </div>

          {/* Clean 2-Column Grid: Direct Channels on Left, Form on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2">
            
            {/* Left Column (5 cols): Direct Corporate Contact Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 sm:p-6 rounded-2xl border border-border/80 bg-card shadow-sm space-y-5">
                <div className="border-b border-border/60 pb-3 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    Direct Corporate Office
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Westlands, Nairobi
                  </span>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium">Direct Line &amp; WhatsApp:</span>
                    <button
                      type="button"
                      onClick={() => handleCopy("+254 721 154382", "phone")}
                      className="text-[11px] font-mono text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      {copiedPhone ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                      <span>{copiedPhone ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold font-mono text-foreground">+254 721 154382</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href="tel:+254721154382"
                        className="px-2.5 py-1 rounded-md bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all"
                      >
                        Call
                      </a>
                      <a
                        href="https://wa.me/254721154382"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all flex items-center gap-1"
                      >
                        <MessageSquare className="size-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Corporate Email */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium">Official Corporate Email:</span>
                    <button
                      type="button"
                      onClick={() => handleCopy("info@stratumresearchltd.com", "email")}
                      className="text-[11px] font-mono text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      {copiedEmail ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                      <span>{copiedEmail ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <a
                    href="mailto:info@stratumresearchltd.com"
                    className="p-3 rounded-xl bg-muted/40 flex items-center justify-between text-xs font-mono font-semibold text-foreground hover:text-primary transition-colors group"
                  >
                    <span>info@stratumresearchltd.com</span>
                    <Mail className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>

                {/* Physical Location & Hours */}
                <div className="pt-2 border-t border-border/60 text-xs text-muted-foreground space-y-1.5">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">Delta Corner Tower, Westlands, Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <Clock className="size-3 text-emerald-500 shrink-0" />
                    <span>Mon &ndash; Fri, 08:00 &ndash; 18:00 EAT (UTC+3)</span>
                  </div>
                </div>
              </div>

              {/* Institutional Guarantees */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-border/70 bg-card space-y-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 font-bold text-foreground">
                    <ShieldCheck className="size-3.5 text-emerald-500" />
                    <span>Bilateral NDA</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Mutual confidentiality executed on all client briefings.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border/70 bg-card space-y-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 font-bold text-foreground">
                    <Shield className="size-3.5 text-primary" />
                    <span>KDPA &amp; ESOMAR</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    Field research conforms to international codes and privacy laws.
                  </p>
                </div>
              </div>

              {/* Dedicated FAQ Link */}
              <div className="p-3.5 rounded-xl border border-border/80 bg-muted/30 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-foreground block">Have Questions Before Scoping?</span>
                  <span className="text-[11px] text-muted-foreground">View our governance, timelines, and deliverables FAQ.</span>
                </div>
                <Link
                  href="/faq"
                  className="px-3 py-1.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold shrink-0 flex items-center gap-1"
                >
                  <span>View FAQ</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>

            {/* Right Column (7 cols): The Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
