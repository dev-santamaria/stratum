import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Shield, Lock, FileText, CheckCircle2, ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — STRATUM Market Intelligence & Intermediation",
  description:
    "STRATUM Privacy Policy detailing compliance with NDPR, POPIA, KDPA, GDPR, and African data sovereignty principles.",
};

export default function PrivacyPage() {
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
              <Shield className="size-3 text-emerald-500" />
              <span>REGULATORY PROTOCOL: NDPR • POPIA • KDPA • GDPR</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              Privacy Policy & Data Sovereignty
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last updated: October 2026 • Effective across all 54 African Union jurisdictions
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {/* 1. Introduction & Scope */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">1. Commitment to African Data Sovereignty</h2>
              <p>
                Stratum Platform Ltd. (&quot;STRATUM&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates a high-precision market intelligence and commercial intermediation ecosystem across Africa. We are committed to safeguarding the privacy, dignity, and rights of our 190,000+ consumer panelists, informal retail merchants, and institutional client partners.
              </p>
              <p>
                Our data processing operations are strictly benchmarked against the continent&apos;s leading regulatory standards: the <strong>Nigeria Data Protection Act (NDPA 2023 / NDPR)</strong>, the <strong>South Africa Protection of Personal Information Act (POPIA 2013)</strong>, the <strong>Kenya Data Protection Act (KDPA 2019)</strong>, Egypt&apos;s Law No. 151/2020, and the European Union General Data Protection Regulation (GDPR) for cross-border bilateral flows.
              </p>
            </section>

            {/* 2. Categories of Information Processed */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">2. Information We Collect and Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    Consumer Panelist Telemetry
                  </h3>
                  <p className="text-xs">
                    Demographic indicators, purchase frequency, FMCG brand sentiment, localized survey responses, and verified audio/video focus group recordings captured strictly under prior written or recorded biometric consent.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    Informal Kiosk & Merchant Audits
                  </h3>
                  <p className="text-xs">
                    Point-of-sale SKU velocity, off-shelf availability, price point resistance, and wholesale restock cycles. All merchant data is aggregated and anonymized; individual spaza shops or kiosks are never identified by owner names.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    Institutional & Deal Room Inquiries
                  </h3>
                  <p className="text-xs">
                    Corporate names, executive emails, targeted commercial corridors, and distributor matching briefs submitted via our intake portal under bilateral Non-Disclosure Agreements (NDAs).
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border/80 bg-card space-y-1.5">
                  <h3 className="font-bold text-foreground text-xs uppercase tracking-wider font-mono">
                    Sensor & Geofencing Verifications
                  </h3>
                  <p className="text-xs">
                    GPS metadata used solely to certify that field enumerators were physically inside retail clusters. Coordinates are permanently truncated into 500-meter cluster centroids to guarantee individual household anonymity.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Legal Basis for Processing */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">3. Legal Basis for Processing</h2>
              <p>
                We process personal information under the following recognized legal grounds:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Explicit Informed Consent:</strong> All panelists opt into research panels with full transparency regarding survey objectives and digital honoraria compensation.</li>
                <li><strong>Contractual Performance:</strong> Processing required to provide intelligence feeds and execute bilateral deal room intermediation agreements.</li>
                <li><strong>Legitimate Commercial Interest:</strong> Publishing anonymized, macro-economic, and sectoral market intelligence indexes across the AfCFTA zone.</li>
                <li><strong>Statutory Compliance:</strong> Compliance with trade, tax, and anti-money laundering regulations across member states.</li>
              </ul>
            </section>

            {/* 4. Anonymization & Synthetic Twin Modeling */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">4. Anonymization & Machine Learning Protections</h2>
              <p>
                When consumer feedback is synthesized into the Stratum Intelligence Graph, differential privacy algorithms are applied. Personal identifiers (names, phone numbers, precise geocodes) are permanently uncoupled and replaced by cryptographic hash tokens.
              </p>
              <p>
                Synthetic consumer twins generated for category concept testing are mathematically derived from macro distributions; they cannot be reverse-engineered to reconstruct any individual citizen&apos;s identity.
              </p>
            </section>

            {/* 5. International Transfers & Data Residency */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">5. In-Continent Data Residency & Cross-Border Transfers</h2>
              <p>
                Primary consumer telemetry is stored on certified tier-3 data infrastructure within Africa (including South Africa, Kenya, and Nigeria). Where data is transferred cross-border for institutional client reporting, transfers are governed by Standard Contractual Clauses (SCCs) and Pan-African data protection authority authorizations.
              </p>
            </section>

            {/* 6. Panelist and User Rights */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">6. Your Rights as a Data Subject</h2>
              <p>
                Under NDPR, POPIA, KDPA, and GDPR, all participants possess inviolable rights to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Request access to all personal data held concerning them.</li>
                <li>Request immediate rectification of inaccurate demographic or commercial records.</li>
                <li>Withdraw consent and request erasure (&quot;Right to be Forgotten&quot;) from our active panel database.</li>
                <li>Lodge a complaint with their national supervisory authority (e.g., NDPC Nigeria, Information Regulator South Africa, ODPC Kenya).</li>
              </ul>
            </section>

            {/* 7. Contact Data Protection Officer */}
            <section className="p-5 rounded-2xl border border-border/80 bg-card space-y-3">
              <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                Contact the STRATUM Data Protection Officer (DPO)
              </h2>
              <p className="text-xs">
                For regulatory inquiries, rights requests, or verification of mutual NDA protocols, please contact our Office of Data Governance:
              </p>
              <div className="font-mono text-xs text-foreground space-y-1 bg-muted/40 p-3 rounded-lg border border-border/60">
                <div>Email: <a href="mailto:privacy@stratumresearchltd.com" className="text-primary hover:underline">privacy@stratumresearchltd.com</a></div>
                <div>Attention: Lead Data Protection Officer & Corporate Counsel</div>
                <div>Jurisdiction: Lagos • Nairobi • Johannesburg • London</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
