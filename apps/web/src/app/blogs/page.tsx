import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Globe2,
  Mail,
  Search,
  Sparkles,
  Tag,
  User,
} from "lucide-react";

export const metadata = {
  title: "Blogs & Editorial Analysis — STRATUM Research Ltd",
  description:
    "Long-form articles exploring markets, brands, business, investment, and consumer behaviour across Africa, China, and India commercial corridors.",
};

const BLOG_POSTS = [
  {
    id: "blog-01",
    title: "Why Supermarket Audits Miss 80% of African Retail: The Informal Kiosk Reality",
    slug: "why-supermarket-audits-miss-african-retail",
    category: "Retail Telemetry",
    author: "Stratum Retail Intelligence Desk",
    date: "September 2026",
    readTime: "7 min read",
    summary:
      "Global FMCG multinationals frequently fail in African emerging markets because their market research relies exclusively on formal hypermarkets. In reality, over 80% of consumer spend flows through neighborhood kiosks, table-top hawkers, and spaza shops.",
    image: "/images/landing-kiosk.jpg",
    tags: ["Informal Trade", "FMCG", "Nairobi", "Lagos"],
  },
  {
    id: "blog-02",
    title: "The South-South Trade Axis: How Chinese Manufacturing Meets African Consumer Demand",
    slug: "south-south-trade-china-africa-manufacturing",
    category: "Cross-Border Trade",
    author: "Asia-Africa Trade Desk",
    date: "August 2026",
    readTime: "9 min read",
    summary:
      "Beyond resource extraction, the real trade volume between China and Africa is powered by consumer goods, solar electronics, and machinery sourced from Guangdong and Zhejiang. We examine how bilateral B2B intermediation de-risks cross-border supply chains.",
    image: "/images/landing-port.jpg",
    tags: ["China Corridor", "Manufacturing", "Trade Intermediation", "AfCFTA"],
  },
  {
    id: "blog-03",
    title: "Sensory Testing in Local Dialects: Why FMCG Formulation Fails Without Ground-Truth IDIs",
    slug: "sensory-testing-local-dialects-fmcg-formulation",
    category: "Consumer Psychology",
    author: "Qualitative Research Group",
    date: "August 2026",
    readTime: "6 min read",
    summary:
      "Translating a European or North American recipe directly into East or West Africa often leads to commercial disaster. How conducting blind sensory trials in Swahili, Pidgin, and Yoruba uncovers unspoken cultural palate nuances.",
    image: "/images/landing-reaction.jpg",
    tags: ["Sensory Panels", "Qualitative IDIs", "Product Testing"],
  },
  {
    id: "blog-04",
    title: "Indian Pharmaceuticals Across Africa: Distribution Bottlenecks & Cold-Chain Realities",
    slug: "indian-pharmaceuticals-africa-cold-chain",
    category: "Healthcare & Logistics",
    author: "Healthcare Practice Lead",
    date: "July 2026",
    readTime: "8 min read",
    summary:
      "India provides over 70% of generic essential medicines across Sub-Saharan Africa. However, the last 500 miles—from port warehouses to interior district clinics—present extreme temperature and counterfeit vulnerabilities.",
    image: "/images/landing-breakfast.jpg",
    tags: ["India Corridor", "Pharmaceuticals", "Cold-Chain Logistics"],
  },
  {
    id: "blog-05",
    title: "De-Risking Market Entry Under AfCFTA: The Power of Pre-Audited B2B Deal Rooms",
    slug: "derisking-market-entry-afcfta-deal-rooms",
    category: "B2B Strategy",
    author: "Commercial Intermediation Practice",
    date: "July 2026",
    readTime: "10 min read",
    summary:
      "The African Continental Free Trade Area creates a $3.4 trillion single market, yet entering a new country without verified distributors remains perilous. How mutual NDA Deal Rooms replace opaque middleman networks with audit-stamped contracts.",
    image: "/images/landing-executive.jpg",
    tags: ["AfCFTA", "Distributor Vetting", "Deal Room", "Private Equity"],
  },
];

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden stratum-grid-bg border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
              <BookOpen className="size-3.5" />
              <span>STRATUM EDITORIAL</span>
              <span className="text-border">•</span>
              <span className="text-foreground">MARKET PERSPECTIVES & ANALYSIS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
              Stratum{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                Blogs & Articles
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Long-form articles exploring markets, brands, business, investment, and consumer behaviour across emerging economies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Listing */}
      <section className="py-14 sm:py-18 border-b border-border/60">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-12">
          {/* Featured Post (Post 01) */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/80 bg-card shadow-sm stratum-card-hover grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-border/60">
              <Image
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-xs">
                  FEATURED EDITORIAL
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="text-primary font-bold">{BLOG_POSTS[0].category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" /> {BLOG_POSTS[0].date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" /> {BLOG_POSTS[0].readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                {BLOG_POSTS[0].title}
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {BLOG_POSTS[0].summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {BLOG_POSTS[0].tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-bold text-xs text-primary hover:underline"
                >
                  Read Full Editorial Analysis <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Remaining Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.slice(1).map((post) => (
              <div
                key={post.id}
                className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-sm flex flex-col justify-between stratum-card-hover"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-background/90 backdrop-blur-sm text-foreground border border-border/70">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      By {post.author}
                    </span>
                    <Link
                      href="/contact"
                      className="font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      Read Article <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Subscription & Insights Intake */}
      <section className="py-14 sm:py-18 bg-muted/15">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Mail className="size-3.5" />
            <span>STRATUM RESEARCH DISPATCH</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Receive Our Bi-Weekly Emerging Markets Dispatch
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Get curated consumer telemetry, wholesale pricing shifts, and cross-border trade updates delivered directly from our research desk in Nairobi, Kenya.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter institutional email..."
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Link
              href="/contact"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
