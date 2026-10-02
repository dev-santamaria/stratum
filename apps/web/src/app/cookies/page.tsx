"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  Cookie,
  ShieldCheck,
  Lock,
  Sliders,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Database,
  Globe2,
  FileText,
} from "lucide-react";

export default function CookiePolicyPage() {
  const openPreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-cookie-settings"));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Header */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              <Cookie className="size-3.5" />
              <span>DATA GOVERNANCE & PRIVACY</span>
              <span className="text-border">•</span>
              <span className="text-foreground">COMPLIANCE FRAMEWORK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
              Cookie Policy & Telemetry Governance
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              This Cookie Policy explains how STRATUM Research Ltd (&ldquo;STRATUM&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) deploys cookies, local storage mechanisms, and operational telemetry when you access our platform, research directories, and confidential Deal Room services.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openPreferences}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Sliders className="size-3.5" />
                Open Cookie Preference Center
              </button>
              <span className="text-xs text-muted-foreground font-mono">
                Last Updated: October 2026 • Version 2.4
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Legal & Technical Details */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Nav Table of Contents (4 cols) */}
            <div className="lg:col-span-4 space-y-4 sticky top-24">
              <div className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Policy Navigation
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>
                    <a href="#what-are-cookies" className="hover:text-primary transition-colors">
                      1. What Are Cookies & Local Storage?
                    </a>
                  </li>
                  <li>
                    <a href="#how-stratum-uses" className="hover:text-primary transition-colors">
                      2. How STRATUM Deploys Telemetry
                    </a>
                  </li>
                  <li>
                    <a href="#cookie-categories" className="hover:text-primary transition-colors">
                      3. Detailed Cookie Classification
                    </a>
                  </li>
                  <li>
                    <a href="#legal-framework" className="hover:text-primary transition-colors">
                      4. Legal Basis (GDPR, POPIA, NDPR)
                    </a>
                  </li>
                  <li>
                    <a href="#managing-cookies" className="hover:text-primary transition-colors">
                      5. Managing & Revoking Consent
                    </a>
                  </li>
                  <li>
                    <a href="#contact-dpo" className="hover:text-primary transition-colors">
                      6. Data Protection Officer Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Settings Action Card */}
              <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5 space-y-2.5">
                <ShieldCheck className="size-5 text-primary" />
                <h4 className="text-xs font-bold text-foreground">
                  Instant Preference Control
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  You can modify or withdraw your consent for non-essential telemetry at any time.
                </p>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="w-full text-center py-2 px-3 rounded-lg bg-card border border-border text-xs font-bold text-primary hover:bg-muted transition-colors cursor-pointer"
                >
                  Adjust Preferences Now
                </button>
              </div>
            </div>

            {/* Right Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {/* Section 1 */}
              <div id="what-are-cookies" className="space-y-3 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  1. What Are Cookies and Local Storage?
                </h2>
                <p>
                  Cookies are small data files placed on your computer, tablet, or mobile phone when you visit a website. They are widely used to allow web applications to function efficiently, retain your session identity across page loads, and provide analytical telemetry to website operators.
                </p>
                <p>
                  In addition to HTTP cookies, STRATUM utilizes browser local storage (<code className="text-foreground font-mono text-xs bg-muted px-1.5 py-0.5 rounded">localStorage</code>) to record your privacy choices, corridor navigation state, and temporary offline form inputs without transmitting sensitive personal identifiers across the network.
                </p>
              </div>

              {/* Section 2 */}
              <div id="how-stratum-uses" className="space-y-3 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  2. How STRATUM Deploys Telemetry
                </h2>
                <p>
                  STRATUM operates a high-trust market intelligence platform. Our cookie deployment adheres to strict data minimization principles:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-foreground/90">
                  <li>We never sell consumer or enterprise client data to third-party data brokers.</li>
                  <li>We do not utilize invasive cross-site retargeting advertising networks.</li>
                  <li>All quantitative research panels and consumer survey intercepts are pseudonymized and decoupled from web browsing cookies.</li>
                  <li>All Deal Room interactions are governed by signed bilateral Non-Disclosure Agreements (NDAs).</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="cookie-categories" className="space-y-6 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  3. Detailed Cookie Classification
                </h2>

                {/* Table 1: Necessary */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono font-bold uppercase text-foreground">
                      Category A: Strictly Necessary Cookies (Always Active)
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                      REQUIRED
                    </span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-border/80 bg-card">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-muted/40 border-b border-border/60 text-[11px] font-mono text-muted-foreground uppercase">
                        <tr>
                          <th className="p-3">Identifier</th>
                          <th className="p-3">Provider</th>
                          <th className="p-3">Purpose</th>
                          <th className="p-3">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        <tr>
                          <td className="p-3 font-mono text-foreground font-bold">stratum_session</td>
                          <td className="p-3">Stratum</td>
                          <td className="p-3">Maintains stateful authenticated session security</td>
                          <td className="p-3">Session</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono text-foreground font-bold">stratum_csrf</td>
                          <td className="p-3">Stratum</td>
                          <td className="p-3">Protects intake forms from cross-site request forgery</td>
                          <td className="p-3">Session</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono text-foreground font-bold">stratum_cookie_preferences_v1</td>
                          <td className="p-3">Stratum (Local)</td>
                          <td className="p-3">Stores your explicit cookie consent selections</td>
                          <td className="p-3">12 Months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table 2: Analytics & Telemetry */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono font-bold uppercase text-foreground">
                      Category B: Analytics & Research Telemetry (Optional)
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-bold">
                      USER OPT-IN
                    </span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-border/80 bg-card">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-muted/40 border-b border-border/60 text-[11px] font-mono text-muted-foreground uppercase">
                        <tr>
                          <th className="p-3">Identifier</th>
                          <th className="p-3">Provider</th>
                          <th className="p-3">Purpose</th>
                          <th className="p-3">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        <tr>
                          <td className="p-3 font-mono text-foreground font-bold">_stratum_perf_metrics</td>
                          <td className="p-3">Stratum</td>
                          <td className="p-3">Monitors chart rendering and low-bandwidth network latency</td>
                          <td className="p-3">30 Days</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono text-foreground font-bold">_stratum_dossier_views</td>
                          <td className="p-3">Stratum</td>
                          <td className="p-3">Aggregates anonymized readership across sector research reports</td>
                          <td className="p-3">90 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table 3: Functional */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono font-bold uppercase text-foreground">
                      Category C: Functional & Localization (Optional)
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold">
                      USER OPT-IN
                    </span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-border/80 bg-card">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-muted/40 border-b border-border/60 text-[11px] font-mono text-muted-foreground uppercase">
                        <tr>
                          <th className="p-3">Identifier</th>
                          <th className="p-3">Provider</th>
                          <th className="p-3">Purpose</th>
                          <th className="p-3">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        <tr>
                          <td className="p-3 font-mono text-foreground font-bold">stratum_corridor_pref</td>
                          <td className="p-3">Stratum</td>
                          <td className="p-3">Remembers preferred active region (e.g. East Africa or Asia Trade Desk)</td>
                          <td className="p-3">6 Months</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono text-foreground font-bold">stratum_intake_draft</td>
                          <td className="p-3">Stratum (Local)</td>
                          <td className="p-3">Saves in-progress consultation intake drafts locally</td>
                          <td className="p-3">14 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div id="legal-framework" className="space-y-3 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  4. International Legal Frameworks & Cross-Border Compliance
                </h2>
                <p>
                  As an intelligence and trade intermediation firm operating across 54 African nations, China, India, the United Kingdom, and the European Union, STRATUM complies with statutory privacy regimes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl border border-border/80 bg-card space-y-1">
                    <span className="font-mono text-xs font-bold text-foreground">GDPR & ePrivacy (EU / UK)</span>
                    <p className="text-xs text-muted-foreground">
                      Consent obtained in accordance with Article 6(1)(a) and Article 7 of the General Data Protection Regulation.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-border/80 bg-card space-y-1">
                    <span className="font-mono text-xs font-bold text-foreground">POPIA (South Africa)</span>
                    <p className="text-xs text-muted-foreground">
                      Sections 11 and 14 of the Protection of Personal Information Act governing lawful processing and retention.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-border/80 bg-card space-y-1">
                    <span className="font-mono text-xs font-bold text-foreground">NDPR (Nigeria)</span>
                    <p className="text-xs text-muted-foreground">
                      Nigeria Data Protection Regulation data subject rights and transparency standards.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-border/80 bg-card space-y-1">
                    <span className="font-mono text-xs font-bold text-foreground">ESOMAR Corporate Code</span>
                    <p className="text-xs text-muted-foreground">
                      ICC/ESOMAR International Code on Market, Opinion and Social Research and Data Analytics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div id="managing-cookies" className="space-y-3 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  5. Managing & Revoking Consent
                </h2>
                <p>
                  You have the right to decide whether to accept or decline optional cookies. You can exercise your preferences at any time by clicking the button below:
                </p>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={openPreferences}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    <Sliders className="size-3.5" />
                    Modify Cookie Preferences
                  </button>
                </div>
                <p className="pt-2 text-xs">
                  Additionally, most browsers allow you to manage cookies via browser preferences. Please note that restricting strictly necessary cookies will degrade system functionality, preventing Deal Room authentication and CSRF token verification.
                </p>
              </div>

              {/* Section 6 */}
              <div id="contact-dpo" className="space-y-3 scroll-mt-28 border-t border-border/60 pt-6">
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  6. Contact Our Data Protection Team
                </h2>
                <p>
                  If you have inquiries regarding our cookie deployments or wish to request an audit of your telemetry records, please contact our Data Governance Officer:
                </p>
                <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1 text-xs font-mono">
                  <p className="font-bold text-foreground">Data Governance & Compliance Desk</p>
                  <p>STRATUM Research Ltd</p>
                  <p>Email: <a href="mailto:privacy@stratumresearchltd.com" className="text-primary hover:underline">privacy@stratumresearchltd.com</a></p>
                  <p>Official Communications: <a href="mailto:info@stratumresearchltd.com" className="text-primary hover:underline">info@stratumresearchltd.com</a></p>
                  <p className="text-muted-foreground">Regional Telemetry Command: Nairobi, Kenya • Cross-Border Corridors: Africa, China & India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
