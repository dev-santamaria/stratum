"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
import {
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Search,
  CheckCircle2,
  ChevronDown,
  Building2,
  FileText,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: "scoping" | "research" | "nda" | "intermediation";
  badge: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "scoping",
    badge: "INTAKE & REVIEW",
    question: "What happens immediately after submitting an enquiry brief?",
    answer:
      "Our team at our Nairobi headquarters reviews your target market requirements, assesses methodological feasibility, and prepares a tailored scoping memo. This memo outlines recommended sampling parameters, expected milestones, deliverable formats, and timeline considerations without obligation.",
  },
  {
    category: "scoping",
    badge: "PHASED SCOPING",
    question: "Can an organization commission a phased pilot or exploratory study?",
    answer:
      "Yes. We frequently structure engagements modularly. Phase 1 typically evaluates preliminary feasibility, market sizing, or exploratory consumer intercepts. Upon client review and sign-off, Phase 2 scales into full quantitative subnational fieldwork or direct partner intermediation.",
  },
  {
    category: "scoping",
    badge: "DELIVERABLES",
    question: "What format do Stratum project deliverables take?",
    answer:
      "Deliverables are tailored to decision-makers. Depending on the service line, they include clean microdata files (Excel/CSV/SPSS), statistical cross-tabulations, visual executive slide decks, competitor margin benchmarks, or screened distributor due-diligence dossiers.",
  },
  {
    category: "research",
    badge: "RESEARCH RIGOR",
    question: "What professional standards govern Stratum's empirical research?",
    answer:
      "Stratum enforces double-blind survey protocols, algorithmic GPS validation, and supervisory back-checks on field interviews. All survey designs and data collection conform strictly with the ESOMAR International Code on Market and Social Research and the Kenya Data Protection Act (KDPA 2019).",
  },
  {
    category: "research",
    badge: "INFORMAL TRADE",
    question: "How does Stratum capture data in informal retail channels (dukas, kiosks, and open-air markets)?",
    answer:
      "Between 70% and 85% of retail trade in Eastern Africa and emerging corridors occurs in informal trade channels that standard desk research misses. Stratum deploys native-language field enumerators directly into open-air wholesale hubs and residential neighborhood kiosks to track real shelf prices, out-of-stock frequencies, and consumer purchasing patterns.",
  },
  {
    category: "research",
    badge: "FIELD MOBILIZATION",
    question: "How quickly can field studies be mobilized in target markets?",
    answer:
      "For East African projects directed from our Nairobi headquarters, initial field reconnaissance and questionnaire piloting can typically commence within 5 to 7 business days following bilateral scoping approval. Full-scale fieldwork sweeps typically deliver validated preliminary findings within 2 to 3 weeks.",
  },
  {
    category: "nda",
    badge: "DATA PRIVACY & NDA",
    question: "How are confidentiality and intellectual property governed?",
    answer:
      "Stratum operates under strict bilateral mutual Non-Disclosure Agreements (NDAs) executed prior to sharing proprietary product formulations, pricing targets, or commercial expansion theses. All client briefings and analytical outputs are treated under strict legal privilege.",
  },
  {
    category: "nda",
    badge: "IP OWNERSHIP",
    question: "Who owns the commissioned research data and final outputs?",
    answer:
      "Upon completion and settlement of a custom commissioned research mandate, the client holds full and exclusive proprietary ownership of the customized dataset, analysis, and strategic recommendations.",
  },
  {
    category: "intermediation",
    badge: "PARTNER VETTING",
    question: "How does Stratum handle partner vetting and business intermediation?",
    answer:
      "Our commercial intermediation practice conducts multi-layered due diligence on potential local distributors, suppliers, and strategic partners. This includes corporate registry verification, physical warehouse visits, supply capacity audits, and reference checks before introductions are formalized.",
  },
  {
    category: "intermediation",
    badge: "STRATUM IDENTITY",
    question: "How does Stratum differ from traditional research agencies and general consultancies?",
    answer:
      "Traditional research agencies often deliver theoretical slides without commercial execution. General consultancies rely heavily on secondary desk research without grassroots presence in informal trade. Stratum integrates primary ground research, competitor intelligence, and direct business connections into one practical advisory model directed centrally from Nairobi.",
  },
];

const CATEGORIES = [
  { id: "all", label: "ALL QUESTIONS" },
  { id: "scoping", label: "INTAKE & SCOPING" },
  { id: "research", label: "FIELDWORK & RIGOR" },
  { id: "nda", label: "CONFIDENTIALITY & NDAS" },
  { id: "intermediation", label: "INTERMEDIATION & PARTNERSHIPS" },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground pb-16 sm:pb-0">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-border/80 bg-background overflow-hidden">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-border/80 bg-muted/40 text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">FREQUENTLY ASKED QUESTIONS</span>
              <span className="text-border">•</span>
              <span className="text-foreground">GOVERNANCE &amp; METHODOLOGY</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground tracking-tight leading-[1.2]">
              Everything You Need to Know About Engaging Stratum
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Clear answers regarding our intake process, empirical research standards, bilateral NDAs, business intermediation protocols, and project deliverables from our Nairobi headquarters.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all"
              >
                <span>SUBMIT ENQUIRY BRIEF</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <a
                href="tel:+254721154382"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <PhoneCall className="size-3.5 text-primary" />
                <span>+254 721 154382</span>
              </a>
              <a
                href="https://wa.me/254721154382"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none border border-emerald-600/40 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-100/50 transition-all"
              >
                <MessageSquare className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WHATSAPP DESK</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER & SEARCH BAR */}
      <section className="py-6 border-b border-border/80 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-none text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground border-primary shadow-xs"
                      : "bg-background text-muted-foreground border-border/80 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-none border border-border/80 bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION GRID */}
      <section className="py-12 sm:py-16 border-b border-border/80 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center space-y-3 bg-muted/20 border border-border/80 rounded-none max-w-xl mx-auto">
              <HelpCircle className="size-8 text-muted-foreground mx-auto" />
              <h3 className="text-base font-bold text-foreground">No questions found</h3>
              <p className="text-xs text-muted-foreground">
                No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or contact our team directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="px-4 py-2 rounded-none bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider"
              >
                CLEAR SEARCH
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-none border transition-all ${
                      isOpen
                        ? "border-primary bg-primary/5 shadow-xs"
                        : "border-border/80 bg-card hover:border-primary/50 shadow-2xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-none bg-muted text-primary border border-border/80 uppercase">
                          {faq.badge}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 mt-1 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/60 space-y-3 animate-in fade-in-50">
                        <p>{faq.answer}</p>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground pt-1">
                          <CheckCircle2 className="size-3 text-emerald-500" />
                          <span>STANDARD STRATUM ENGAGEMENT PROTOCOL</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. GOVERNANCE & ETHICS ASSURANCE STRIP */}
      <section className="py-12 border-b border-border/80 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-card">
              <ShieldCheck className="size-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground uppercase">Strict Bilateral NDA Protocol</h4>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Every commercial briefing is protected under enforceable non-disclosure covenants.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-card">
              <FileText className="size-5 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground uppercase">ESOMAR &amp; KDPA Aligned</h4>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Field research conforms to international market research codes and Kenya data privacy law.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-none border border-border/80 bg-card">
              <Building2 className="size-5 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground uppercase">Nairobi Headquarters</h4>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  Centrally directed from Delta Corner Tower, Westlands, ensuring consistent quality control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE CORPORATE CTA BANNER */}
      <section className="py-12 sm:py-16 bg-[#002B49] text-white rounded-none border-b border-border/80">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 text-center space-y-4 max-w-4xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#48cae4] uppercase">
            COMMISSION A MANDATE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
            Ready to Scope Your Next Research or Intelligence Study?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Submit an intake brief or connect directly with our Nairobi advisory desk to discuss commercial scope, sample sizes, and empirical timelines.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white text-[#002B49] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>SUBMIT SCOPING BRIEF</span>
              <ArrowRight className="size-3.5" />
            </Link>
            <a
              href="tel:+254721154382"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-white/30 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <PhoneCall className="size-3.5" />
              <span>CALL +254 721 154382</span>
            </a>
            <a
              href="https://wa.me/254721154382"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-none border border-emerald-500/50 bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <MessageSquare className="size-3.5" />
              <span>WHATSAPP DESK</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
