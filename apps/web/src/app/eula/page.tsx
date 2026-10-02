import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FileCode2, Shield, Lock, Terminal, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "EULA — End User License Agreement | STRATUM Platform",
  description:
    "End User License Agreement (EULA) governing software access, API telemetry feeds, and Intelligence Graph queries on the STRATUM platform.",
};

export default function EulaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20 border-b border-border/60">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb / Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-3.5" /> Back to Home
          </Link>

          {/* Header */}
          <div className="space-y-3 border-b border-border/60 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-muted/40 text-xs font-mono font-semibold text-muted-foreground">
              <FileCode2 className="size-3 text-cyan-500" />
              <span>SOFTWARE & TELEMETRY API LICENSE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              End User License Agreement (EULA)
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last updated: October 2026 • Governs all digital platform access, API telemetry, and graph queries
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {/* 1. License Grant */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">1. Grant of Limited Platform License</h2>
              <p>
                Subject to the terms and conditions of this Agreement and payment of corresponding enterprise subscription fees, Stratum Platform Ltd. (&quot;Licensor&quot;) grants to you and your authorized employees (&quot;Licensee&quot;) a revocable, non-exclusive, non-transferable, non-sublicensable license to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Access the web portal, query consoles, and dashboard interfaces of the STRATUM Platform.</li>
                <li>Execute queries against the Stratum Intelligence Graph for internal enterprise commercial decision-making.</li>
                <li>Integrate approved API telemetry endpoints into authorized internal business intelligence software.</li>
                <li>View authorized documentation within virtual Deal Room repositories under bilateral encryption.</li>
              </ul>
            </section>

            {/* 2. Restrictions & Prohibited Uses */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">2. License Restrictions & Prohibitions</h2>
              <p>
                Licensee expressly covenants and agrees NOT to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/5 space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    No Automated Scraping or Harvesting
                  </h3>
                  <p className="text-xs">
                    Deploy automated scrapers, web spiders, or crawling agents to systematically harvest nodes, informal retail prices, or consumer transcripts from the platform.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/5 space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    No Re-Identification or Deanonymization
                  </h3>
                  <p className="text-xs">
                    Attempt to combine telemetry data with external data sources to deduce or expose the physical identities or residences of African panelists or kiosk operators.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/5 space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    No Sub-Licensing or Commercial Resale
                  </h3>
                  <p className="text-xs">
                    Resell, syndicate, lease, or sub-license raw dataset feeds to third-party research houses, consulting firms, or data aggregators without prior written approval.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/5 space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    No Reverse Engineering
                  </h3>
                  <p className="text-xs">
                    Disassemble, decompile, or attempt to derive the underlying mathematical models, synthetic twin neural architectures, or proprietary graph ontology.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. API Usage Limits & Security */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">3. API Credentials & Rate Limits</h2>
              <p>
                Access to the Stratum Intelligence Graph via programmatic API is secured by cryptographic bearer tokens and mTLS authentication. Licensee is solely responsible for maintaining the confidentiality of its API keys and credentials.
              </p>
              <p>
                Excessive querying exceeding contracted rate boundaries (expressed in Queries Per Minute or Node Traversal Depth) may be throttled or suspended automatically to protect infrastructure stability.
              </p>
            </section>

            {/* 4. Telemetry Precision Disclaimer */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">4. Telemetry Disclaimer & Audit Margins</h2>
              <p>
                While STRATUM employs rigorous triangulation (GPS verification, timestamp geofencing, acoustic voice validation, and ESOMAR survey protocols) yielding a verified 99.4% fieldwork precision rate, retail conditions in informal markets are inherently dynamic.
              </p>
              <p>
                THE SOFTWARE AND DATA FEEDS ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING UNINTERRUPTED AVAILABILITY OR SPECIFIC REVENUE ATTAINMENT.
              </p>
            </section>

            {/* 5. Termination */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">5. Term & Immediate Termination for Breach</h2>
              <p>
                This EULA remains effective until terminated. Licensor may immediately revoke access keys and terminate this license without notice if Licensee violates any restriction in Section 2 or circumvents Deal Room confidentiality agreements.
              </p>
              <p>
                Upon termination, Licensee shall promptly discontinue all use of the API, purge cached raw telemetry from its local systems, and certify compliance in writing upon request.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="p-5 rounded-2xl border border-border/80 bg-card space-y-2">
              <h2 className="text-base font-bold text-foreground">Platform Support & Enterprise Licensing</h2>
              <p className="text-xs">
                To upgrade seat tiers, request dedicated enterprise API bandwidth, or report security vulnerabilities:
              </p>
              <div className="font-mono text-xs text-foreground bg-muted/40 p-3 rounded-lg border border-border/60">
                Email: <a href="mailto:engineering@stratumresearchltd.com" className="text-primary hover:underline">engineering@stratumresearchltd.com</a> • Stratum Research Ltd. Platform Engineering
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
