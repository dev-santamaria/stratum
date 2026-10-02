import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { FileText, Scale, Handshake, AlertTriangle, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — STRATUM Market Intelligence & Intermediation",
  description:
    "Terms of Service governing market research subscriptions, Deal Room intermediation, and proprietary data access across STRATUM.",
};

export default function TermsPage() {
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
              <Scale className="size-3 text-primary" />
              <span>COMMERCIAL MASTER SERVICES AGREEMENT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
              Terms of Service & Engagement
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last updated: October 2026 • Effective for all Stratum enterprise engagements and Deal Room sessions
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {/* 1. Acceptance */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">1. Acceptance of Master Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between Stratum Platform Ltd. (&quot;STRATUM&quot;, &quot;we&quot;, &quot;us&quot;) and the organization, corporation, or entity accessing our platform, intelligence feeds, or Deal Room (&quot;Client&quot;, &quot;you&quot;).
              </p>
              <p>
                By commissioning research, accessing the Stratum Intelligence Graph, or entering a Deal Room session, you irrevocably agree to comply with and be bound by these Terms.
              </p>
            </section>

            {/* 2. Scope of Services */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">2. Scope of Intelligence & Intermediation Services</h2>
              <p>
                STRATUM delivers three core service tiers:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Custom Market Research & Panels:</strong> Qualitative focus groups, in-depth interviews (IDIs), ethnographic intercepts, concept testing, and digital panel surveys across 54 African countries.</li>
                <li><strong>Proprietary Telemetry & Datasets:</strong> Aggregated informal kiosk trade audits, FMCG retail velocity data, and price elasticity feeds delivered via our Intelligence Graph.</li>
                <li><strong>The Deal Room & B2B Intermediation:</strong> Strategic matchmaking, verified local distributor introductions, logistics partner vetting, and transaction structuring.</li>
              </ul>
            </section>

            {/* 3. The Deal Room & Non-Circumvention */}
            <section className="p-5 rounded-2xl border border-primary/30 bg-primary/5 space-y-3">
              <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                <Handshake className="size-4 text-primary" />
                3. The Deal Room: Non-Circumvention & Mutual NDA Protocols
              </h2>
              <p className="text-xs">
                To safeguard proprietary commercial relationships established by STRATUM across African trade corridors:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-foreground/80">
                <li><strong>Non-Circumvention Covenant:</strong> Client agrees that for a period of twenty-four (24) months from the date of introduction to any vetted African distributor, logistics operator, co-packer, or local partner introduced by STRATUM, Client shall not directly or indirectly negotiate, contract, or execute commercial transactions with such party without the written participation and agreement of STRATUM.</li>
                <li><strong>Success Fees & Intermediation Commissions:</strong> Specific transaction fees, retainers, and success fee schedules for commercial contracts completed via the Deal Room are defined in each bilateral Statement of Work (SOW).</li>
                <li><strong>Strict Anti-Corruption (FCPA / UKBA / AU Convention):</strong> Both parties warrant zero tolerance for commercial bribery, facilitation payments, or corrupt practices in connection with any government agency or commercial counterparty in any African market.</li>
              </ul>
            </section>

            {/* 4. Intellectual Property Rights */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">4. Proprietary Intellectual Property</h2>
              <p>
                All rights, title, and interest in and to the Stratum Intelligence Graph, telemetry pipelines, biometric voice-parsing algorithms, synthetic panelist models, and proprietary category schemas remain exclusively owned by Stratum Platform Ltd.
              </p>
              <p>
                Upon full payment of applicable fees, Client receives a perpetual, non-exclusive, internal-use license to the specific deliverables and customized research reports generated for their project brief. Client shall not publicly redistribute, sub-license, resell, or commercialize raw panel telemetry to third parties.
              </p>
            </section>

            {/* 5. Professional Disclaimer */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">5. Commercial Disclaimer & Limitation of Liability</h2>
              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-foreground space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="size-4 shrink-0" />
                  NO SECURITIES UNDERWRITING OR LEGAL ADVICE
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  STRATUM reports, telemetry feeds, and Deal Room briefings represent commercial market intelligence and empirical consumer research. They do not constitute financial underwriting, formal investment advisory, securities solicitation, tax advice, or legal opinions. Clients must conduct independent technical, accounting, and legal due diligence before deploying capital into any market.
                </p>
              </div>
              <p className="text-xs">
                To the maximum extent permitted by applicable law, STRATUM&apos;s aggregate liability arising out of or related to any research or intermediation engagement shall not exceed the total fees paid by Client under the applicable Statement of Work in the twelve (12) months preceding the incident.
              </p>
            </section>

            {/* 6. Governing Law & Arbitration */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">6. Governing Law & Bilateral Dispute Resolution</h2>
              <p>
                These Terms and any non-contractual obligations arising out of them shall be governed by and construed in accordance with <strong>English Law</strong>, without prejudice to mandatory public policy provisions in regional African jurisdictions where local fieldwork takes place.
              </p>
              <p>
                Any dispute, controversy, or claim arising out of or relating to these Terms shall be resolved by binding arbitration conducted under the Arbitration Rules of the <strong>London Court of International Arbitration (LCIA)</strong> or, at the election of STRATUM, the <strong>Kigali International Arbitration Centre (KIAC)</strong>. The seat of arbitration shall be Kigali or London, and proceedings shall be conducted in the English language.
              </p>
            </section>

            {/* 7. Contact */}
            <section className="p-5 rounded-2xl border border-border/80 bg-card space-y-2">
              <h2 className="text-base font-bold text-foreground">Legal & Contract Administration</h2>
              <p className="text-xs">
                For commercial inquiries, bespoke Statements of Work, or executed NDA copies:
              </p>
              <div className="font-mono text-xs text-foreground bg-muted/40 p-3 rounded-lg border border-border/60">
                Email: <a href="mailto:legal@stratumresearchltd.com" className="text-primary hover:underline">legal@stratumresearchltd.com</a> • Stratum Research Ltd. Legal Operations
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
