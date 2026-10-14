"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { MobilePwaBar } from "@/components/navigation/mobile-pwa-bar";
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
  CheckCircle2,
  ShieldCheck,
  Building2,
  FileText,
  Radio,
  Share2,
  X,
  ChevronRight,
  Bookmark,
  Layers,
  MapPin,
} from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  categoryFilter: "RETAIL" | "TRADE" | "HEALTHCARE" | "SUSTAINABILITY" | "SENSORY" | "ENTERPRISE";
  corridor: string;
  corridorFilter: "ALL" | "EAST_AFRICA" | "ASIA_AFRICA" | "REGIONAL_TRADE";
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  summary: string;
  keyTakeaway: string;
  fullBody: string[];
  image: string;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-01",
    title: "Why Supermarket Audits Miss 84% of African Retail: The Informal Kiosk Reality",
    subtitle: "Conventional retail audits focus on organized hypermarkets, ignoring the thousands of neighborhood dukas, table-top hawkers, and informal kiosks driving daily consumer liquidity.",
    slug: "why-supermarket-audits-miss-african-retail",
    category: "Retail Telemetry & FMCG",
    categoryFilter: "RETAIL",
    corridor: "East Africa Corridors (Nairobi & Regional Belts)",
    corridorFilter: "EAST_AFRICA",
    author: "Dr. Evans Ochieng & Stratum Retail Intelligence Desk",
    authorRole: "Head of Retail Intelligence • Nairobi Operations Desk",
    date: "October 2026",
    readTime: "8 min read",
    summary:
      "Multinational consumer brands routinely misjudge African market share because their syndicated retail audit partners measure barcode scanners in modern shopping centers. In East Africa, over 84% of staple FMCG purchases occur in cash-and-carry dukas where product turnover is measured in single-unit sachets. We break down the econometric reality of informal shelf velocity.",
    keyTakeaway:
      "Single-coin packaging (KES 20 / KES 50) achieves 3.8x faster inventory turns than bulk family-size SKUs across informal retail dukas.",
    fullBody: [
      "For decades, global consumer goods conglomerates entering Sub-Saharan Africa have relied on syndicated retail audit databases imported from OECD economies. These methodologies prioritize point-of-sale optical barcode scanning and modern supermarket chain reconciliations. In Western capitals, this captures the majority of household expenditure. In Nairobi and regional trading corridors, it captures less than 16%.",
      "The overwhelming preponderance of commercial velocity across African consumer markets flows through traditional trade: neighborhood dukas, open-air table-top kiosks, and morning neighborhood markets.",
      "Stratum’s continuous retail field sweeps, tracking audited retail kiosks with verified GPS geofencing, reveal that informal merchant shelf decisions are dictated by daily working capital velocity rather than long-term brand marketing. When a duka owner operates under constrained daily replenishment capital, they stock products that turn over within 36 to 48 hours. A bulk package that ties up capital for two weeks is commercially unviable.",
      "This structural constraint gives rise to the single-coin unit packaging requirement. Brands that re-engineer their pack sizes, moisture-barrier wrapping, and unit pricing into single-coin denominations (e.g., KES 20 or KES 50) unlock immediate distribution velocity. Our field telemetry demonstrates that single-serve SKUs experience 3.8x faster inventory velocity and substantially fewer stockout incidents than traditional retail pack formats.",
      "To win in East African consumer commerce, executive leadership must look beyond mall-based scanner data. Ground-truth retail intelligence requires direct human fieldwork, daily inventory sweeps at the counter, and subnational wholesale depot price tracking.",
    ],
    image: "/images/landing-kiosk.jpg",
    tags: ["Informal Trade", "FMCG Velocity", "Nairobi Duka Census", "East Africa Retail", "Coin Economy"],
  },
  {
    id: "blog-02",
    title: "The E-Waste Deficit: Unpacking the 57% Literacy Gap Across Urban Commercial Hubs",
    subtitle: "Ground-truth findings from field intercepts across hardware repair clusters, urban markets, and electronic trading corridors.",
    slug: "the-e-waste-deficit-african-megacities",
    category: "Sustainability & Circular Economy",
    categoryFilter: "SUSTAINABILITY",
    corridor: "East Africa Commercial Nodes (Nairobi & Regional Hubs)",
    corridorFilter: "EAST_AFRICA",
    author: "Environmental Governance & Materials Practice",
    authorRole: "Sustainability Research Lead • Nairobi HQ",
    date: "September 2026",
    readTime: "9 min read",
    summary:
      "Despite rapid consumer electronics uptake across regional commercial hubs, 57% of consumers rank their understanding of e-waste recycling protocols at 4 or lower on a 1-to-10 scale. Our field teams audited electronics repair clusters to map informal battery disposal, copper salvage practices, and the commercial viability of deposit-return voucher systems.",
    keyTakeaway:
      "86% of urban consumers express direct willingness to divert toxic lithium batteries to authorized collection points if trade-in discount vouchers are provided.",
    fullBody: [
      "The rapid digitization of regional commercial centers has driven a massive expansion of secondary hardware: smartphones, feature phones, laptops, and solar power packs. Yet behind this growth lies an ecological and regulatory issue that conventional reports overlook.",
      "Stratum's recent empirical fieldwork across urban electronics repair clusters revealed that 57% of consumers rank their understanding of hazardous electronic waste management at 4 or lower out of 10. The majority treat lithium-ion battery cells and obsolete circuit boards as ordinary domestic refuse.",
      "Informal street repair technicians and hardware aggregators possess higher awareness than everyday consumers, yet report lacking authorized commercial collection drop-off centers in their operational vicinity. Consequently, obsolete components risk entering unmanaged disposal channels.",
      "Our research identified the economic mechanism required for behavioral change: commercial incentive alignment. 86% of surveyed respondents stated they would actively bring obsolete electronics to formal retail drop-off points if offered a direct mobile-money deposit voucher or a trade-in discount on replacement hardware.",
      "Creating sustainable circular economies in emerging markets begins with practical economic incentives that reward collectors and consumers for safe recycling.",
    ],
    image: "/images/landing-consumer.jpg",
    tags: ["E-Waste", "Circular Economy", "Electronics Repair", "Battery Recirculation", "Urban Hubs"],
  },
  {
    id: "blog-03",
    title: "The South-South Trade Corridor: Direct Factory Sourcing from Asia Production Belts to Mombasa",
    subtitle: "Why forward-looking African wholesale importers bypass trading middlemen to audit Tier-1 production lines directly.",
    slug: "south-south-trade-china-africa-manufacturing",
    category: "Bilateral Trade & Sourcing",
    categoryFilter: "TRADE",
    corridor: "Asia-to-Africa Trade Corridor",
    corridorFilter: "ASIA_AFRICA",
    author: "Asia-Africa Bilateral Intermediation Desk",
    authorRole: "Commercial Intermediation Lead • Nairobi Operations Desk",
    date: "September 2026",
    readTime: "11 min read",
    summary:
      "The trade axis between Asian manufacturing belts and East African regional gateways is shifting toward high-spec hardware, off-grid solar equipment, and industrial packaging. We examine on-site factory verification protocols, illustrating how mutual escrow and bilateral Deal Rooms eliminate cargo variance and port demurrage bottlenecks.",
    keyTakeaway:
      "Direct factory-floor inspections reduce landed component failure rates from 14.2% down to 1.1% upon maritime container arrival at regional ports.",
    fullBody: [
      "Commercial exchange between Asian production belts and East African economies is increasingly propelled by private African wholesale importers sourcing consumer goods, hardware, and manufacturing capital equipment directly from source factories.",
      "Historically, African buyers relied on secondary trading agents or open commodity bazaars. This multi-layered intermediary chain introduced severe operational hazards: undisclosed factory subcontracting, inconsistent raw material grades, and maritime container inspection failures that resulted in costly cargo disputes.",
      "Stratum's Bilateral Intermediation Desk facilitates direct commercial verification, helping African corporate purchasers audit production facilities, verify export quality certifications, and supervise container stuffing prior to shipping.",
      "Under the framework of regional trade integration (AfCFTA), African enterprises are increasingly sourcing semi-knocked-down (SKD) component kits for local assembly. Direct factory relationships enable African manufacturers to specify tropicalized components: higher operating temperature thresholds for solar inverters and surge-protected power modules.",
      "Bilateral deal intermediation centrally directed from our Nairobi headquarters ensures transparent, verifiable cross-border trade execution.",
    ],
    image: "/images/landing-port.jpg",
    tags: ["Asia Corridor", "Direct Sourcing", "Port Logistics", "Factory Audits", "AfCFTA"],
  },
  {
    id: "blog-04",
    title: "Indian Pharmaceuticals in East Africa: Cold-Chain Integrity and API Verification",
    subtitle: "Mapping active pharmaceutical ingredient supply chains from production belts in Gujarat to regional healthcare gateways.",
    slug: "indian-pharmaceuticals-africa-cold-chain",
    category: "Healthcare & Pharmaceuticals",
    categoryFilter: "HEALTHCARE",
    corridor: "Asia-to-Africa Trade Corridor (India to East Africa)",
    corridorFilter: "ASIA_AFRICA",
    author: "Healthcare & Pharmaceutical Advisory Practice",
    authorRole: "Pharma Supply Chain Lead • Nairobi Operations Desk",
    date: "August 2026",
    readTime: "10 min read",
    summary:
      "Indian manufacturers supply the vast majority of generic essential medicines across East Africa. However, the overland transit corridor—from coastal maritime gateways to interior distribution warehouses—presents thermal stability vulnerabilities. This article explores IoT temperature logger telemetry, regulatory filing harmonization, and chemist verification protocols.",
    keyTakeaway:
      "Continuous IoT sensor monitoring and pre-aligned customs documentation eliminate thermal excursion write-offs during port-to-warehouse inland transit.",
    fullBody: [
      "Indian pharmaceutical manufacturers supply a major share of essential generic antibiotics, antiretrovirals, and antimalarials consumed across East and Central Africa.",
      "While certified manufacturers maintain rigorous WHO-GMP compliance at the factory gate, product efficacy can degrade once shipping containers arrive at regional maritime ports if refrigerated transport logistics lack continuous calibration.",
      "Stratum’s healthcare telemetry team conducted IoT temperature logger audits across regional pharmaceutical transit routes. We documented that temperature-sensitive formulations risk thermal excursion events above recommended thresholds during interior transit delays without cold plug-in power.",
      "To address this vulnerability, leading pharmaceutical distributors partner with Stratum to audit manufacturing plants on-site, verify batch assays, and implement continuous temperature logger tracking across maritime and inland transit corridors.",
      "Securing the healthcare supply chain between India and East Africa demands end-to-end verification from the API manufacturing facility through to central medical stores.",
    ],
    image: "/images/landing-breakfast.jpg",
    tags: ["Pharma Cold-Chain", "India Corridor", "Generic Formulations", "Healthcare Supply Chains"],
  },
  {
    id: "blog-05",
    title: "Sensory Testing in Local Dialects: Why Formulations Fail Without Vernacular IDIs",
    subtitle: "How conducting blind taste booths in Swahili and regional trade vernaculars uncovers palate and texture nuances.",
    slug: "sensory-testing-local-dialects-fmcg-formulation",
    category: "Sensory & Consumer Psychology",
    categoryFilter: "SENSORY",
    corridor: "East Africa Corridors (Nairobi & Regional Belts)",
    corridorFilter: "EAST_AFRICA",
    author: "Qualitative Moderation & Behavioral Insights Group",
    authorRole: "Lead Sensory Scientist • Nairobi HQ",
    date: "August 2026",
    readTime: "7 min read",
    summary:
      "Introducing a packaged food or beverage recipe without local dialect sensory testing often leads to commercial underperformance. We unpack why sweetness, viscosity, and aroma benchmarks vary across consumer cohorts, and how in-depth vernacular interviews reveal taste preferences invisible to standardized English questionnaires.",
    keyTakeaway:
      "Blind sensory testing in mother-tongue dialects yields 43% higher qualitative sentiment accuracy than standardized English focus groups.",
    fullBody: [
      "When evaluating consumer products in East African markets, standardized English surveys often fail to capture true consumer reactions. Terms describing mouthfeel, richness, sweetness, and aftertaste do not map directly into formal English corporate scales.",
      "In native dialects, respondents speak with visceral honesty about product texture, aroma, satiety, and cultural suitability. In informal settlements and peri-urban hubs, conversational interviews in Swahili reveal commercial drivers that formal surveys miss.",
      "Stratum’s qualitative moderation teams conduct blind sensory testing booths paired with vernacular in-depth interviews (IDIs). We measure calibrated sweetness-to-acidity ratios, lipid mouthfeel perceptions, and pack-in-hand tactile ergonomics across varying socio-economic classes.",
      "Product development teams must recognize that regional consumer palates are sophisticated, highly localized, and culturally anchored. Success requires formulation calibration grounded in authentic dialogue.",
    ],
    image: "/images/landing-reaction.jpg",
    tags: ["Sensory Panels", "Taste Formulations", "Vernacular IDIs", "Beverage Testing", "East Africa"],
  },
  {
    id: "blog-06",
    title: "De-Risking Cross-Border Commercial Expansion: The Architecture of Verified Deal Rooms",
    subtitle: "How bilateral non-disclosure agreements and forensic distributor due diligence replace opaque agent networks.",
    slug: "derisking-market-entry-afcfta-deal-rooms",
    category: "Commercial Intermediation & M&A",
    categoryFilter: "TRADE",
    corridor: "Regional Commercial Trade Corridors",
    corridorFilter: "REGIONAL_TRADE",
    author: "Commercial Intermediation Practice",
    authorRole: "Managing Director • Nairobi Operations Desk",
    date: "July 2026",
    readTime: "9 min read",
    summary:
      "Regional market expansion under free trade protocols promises significant commercial growth, yet entering adjacent markets without verified distributor vetting remains perilous. We illustrate how Stratum's bilateral Deal Rooms structure mutual NDAs, escrow arrangements, and commercial distributor audits to protect institutional capital.",
    keyTakeaway:
      "Pre-audited Deal Room frameworks compress distributor onboarding timelines from 9 months down to 14 business days.",
    fullBody: [
      "Expanding into adjacent regional commercial markets offers substantial commercial upside, yet enterprise leaders frequently encounter high counterparty friction when seeking reliable distribution partners.",
      "The conventional approach involves attending regional trade conferences or relying on unverified local intermediaries. Too often, foreign entrants sign distribution agreements with entities that lack physical warehousing infrastructure, working capital lines, or audited logistics fleets.",
      "Stratum’s Commercial Deal Room protocol replaces opaque middleman promises with forensic institutional verification. Before counterparties enter a transaction, both entities execute legally binding bilateral NDAs.",
      "Our field teams then conduct on-the-ground distributor due diligence: verifying physical warehouse ownership, inspecting transport fleets, checking bank references, and interviewing existing FMCG clients. Once vetted, counterparties enter a secure Deal Room where pricing formulas, minimum volume guarantees, and milestone payment terms are formalized.",
      "By replacing speculative matchmaking with audit-stamped commercial intermediation, corporate boards compress expansion timelines while safeguarding institutional balance sheets.",
    ],
    image: "/images/landing-executive.jpg",
    tags: ["Trade Corridors", "Distributor Vetting", "Deal Rooms", "Commercial Expansion", "Capital Protection"],
  },
  {
    id: "blog-07",
    title: "Informal Merchant Cashless Adoption: Mobile Tap-to-Pay Penetration in High-Density Retail",
    subtitle: "Subnational field audits across informal merchants reveal accelerating growth in mobile contactless and QR checkout.",
    slug: "township-spaza-cashless-migration",
    category: "Fintech & Retail Telemetry",
    categoryFilter: "RETAIL",
    corridor: "East & Regional Commercial Belts",
    corridorFilter: "REGIONAL_TRADE",
    author: "Fintech & Retail Telemetry Group",
    authorRole: "Retail Panel Coordinator • Nairobi Operations Desk",
    date: "July 2026",
    readTime: "8 min read",
    summary:
      "Informal retail clusters are witnessing a significant transformation in everyday transactions. While cash remains prominent, mobile money and micro-merchant tap-to-pay terminals have grown substantially. We analyze transaction ticket sizes, merchant security benefits, and wholesale distributor replenishment settlements.",
    keyTakeaway:
      "Merchants offering digital and mobile payment acceptance report 28% higher daily basket values compared to cash-only peers.",
    fullBody: [
      "In high-density commercial trading corridors, informal neighborhood retail stalls account for the majority of everyday household grocery and convenience spending.",
      "Stratum’s subnational retail censuses document an important transformation: mobile-money checkouts and micro-merchant tap-to-pay terminals are expanding rapidly. Driven by merchant cash-handling security concerns and the ubiquity of mobile wallets, cashless acceptance is reaching a significant inflection point.",
      "The economics are compelling for both consumer and merchant. Merchants who adopted digital checkout methods report a notable surge in average customer basket sizes, as shoppers are no longer strictly constrained by physical cash denominations in their pockets.",
      "Furthermore, the digital transaction records created by these terminals unlock access to formal working capital credit lines from wholesale distributors, enabling continuous stock replenishment.",
      "Consumer brand distributors that understand informal merchant payment flows gain a structural advantage in route-to-market execution.",
    ],
    image: "/images/landing-kiosk.jpg",
    tags: ["Informal Retail", "Mobile Money", "Merchant Telemetry", "Fintech", "Commercial Corridors"],
  },
  {
    id: "blog-08",
    title: "AI & Conversational Commerce: How African Enterprises Are Deploying Autonomous Mobile Agents",
    subtitle: "Empirical survey of technology executives reveals rapid conversational commerce agent adoption on WhatsApp and SMS.",
    slug: "ai-super-intelligence-african-enterprise-strategy",
    category: "Enterprise Technology & Strategy",
    categoryFilter: "ENTERPRISE",
    corridor: "East Africa Tech Hubs (Nairobi & Regional Belts)",
    corridorFilter: "EAST_AFRICA",
    author: "Stratum Technology & Econometrics Group",
    authorRole: "Principal Data Architect • Nairobi HQ",
    date: "June 2026",
    readTime: "8 min read",
    summary:
      "African mid-market enterprises are deploying conversational commerce agents directly onto WhatsApp Business and mobile messaging rails. This article reviews our executive survey, highlighting why companies report higher customer resolution rates and lower transaction drop-off when using localized natural language models.",
    keyTakeaway:
      "Conversational commerce agents on mobile messaging channels deliver a 2.4x faster payback period than traditional enterprise CRM software.",
    fullBody: [
      "In developed markets, enterprise artificial intelligence deployment is frequently entangled in complex migrations across decades-old legacy ERP systems and desktop software ecosystems. In Africa's commercial hubs, a different pattern is unfolding.",
      "Commercial mid-market enterprises in regional hubs like Nairobi are deploying autonomous conversational AI agents directly on top of mobile messaging rails: WhatsApp Business API and SMS.",
      "In Stratum's empirical survey of commercial enterprises across regional trade hubs, companies utilizing multilingual customer engagement bots and automated order-taking pipelines experienced significant improvements in customer conversion and replenishment speed.",
      "The competitive advantage lies in hyper-localization. Generic models trained exclusively on Western web corpora stumble on local commercial expressions, multi-currency mobile money references, and code-switching between English and Swahili. Enterprises fine-tuning workflows with localized ground-truth data achieve substantially higher completion rates.",
      "Conversational commerce on mobile messaging rails is rapidly becoming the standard operational interface for business-to-business customer interaction.",
    ],
    image: "/images/landing-consumer.jpg",
    tags: ["Enterprise AI", "Conversational Commerce", "Mobile Messaging", "Nairobi Tech Hub", "Automation"],
  },
];

export default function BlogsPage() {
  const [selectedCorridor, setSelectedCorridor] = useState<string>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeReadingModal, setActiveReadingModal] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [subscribedSuccess, setSubscribedSuccess] = useState<boolean>(false);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCorridor =
      selectedCorridor === "ALL" || post.corridorFilter === selectedCorridor;
    const matchesCategory =
      selectedCategory === "ALL" || post.categoryFilter === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCorridor && matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim().length > 3) {
      setSubscribedSuccess(true);
      setTimeout(() => {
        setSubscribedSuccess(false);
        setNewsletterEmail("");
      }, 3500);
    }
  };

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden border-b border-border/70 bg-background">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">STRATUM EDITORIAL DESK</span>
              <span className="text-border">•</span>
              <span className="text-foreground">EMERGING MARKETS INTELLIGENCE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight leading-[1.15]">
              Stratum Blogs &amp; Editorial Analysis
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Long-form analytical essays, field dispatches, and econometric perspectives exploring consumer behavior, retail velocity, and South-South bilateral trade across East Africa and Asian production corridors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#all-essays"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <BookOpen className="size-3.5" />
                <span>Explore {BLOG_POSTS.length} Published Essays</span>
                <ArrowRight className="size-3.5" />
              </a>
              <Link
                href="/research-briefs"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all cursor-pointer shadow-2xs"
              >
                <FileText className="size-3.5 text-primary" />
                <span>Sample Research Briefs</span>
              </Link>
            </div>
          </div>

          {/* Scale Metrics & Editorial Telemetry Ribbon */}
          <div className="p-3.5 rounded-xl border border-border/70 bg-muted/20 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">EDITORIAL DESK FOOTPRINT:</span>
              <span>8 Grounded Essays &bull; Primary Field Observations &bull; Bi-Weekly Publishing Cycle</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <MapPin className="size-3 text-primary" />
              <span className="text-foreground font-semibold">Central Operations Command:</span>
              <span>Nairobi, Kenya (Delta Corner Tower)</span>
            </div>
          </div>

          {/* Scale Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>ESSAYS PUBLISHED</span>
                <BookOpen className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">{BLOG_POSTS.length} Essays</div>
              <p className="text-[11px] text-muted-foreground">Original Ground-Truth Analysis</p>
            </div>

            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>TRADE CORRIDORS</span>
                <Globe2 className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">East Africa &amp; Asia</div>
              <p className="text-[11px] text-muted-foreground">Regional &amp; Bilateral Desks</p>
            </div>

            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>FIELD EMPIRICISM</span>
                <Radio className="size-3.5 text-blue-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">Primary Fieldwork</div>
              <p className="text-[11px] text-muted-foreground">Zero Synthetic Desktop Scraping</p>
            </div>

            <div className="p-4 rounded-xl border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>INTAKE SLA</span>
                <Clock className="size-3.5 text-amber-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">&lt; 6 Hours</div>
              <p className="text-[11px] text-muted-foreground">Direct Desk Lead Allocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED LEAD ESSAY */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-card">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              02 // FEATURED LEAD DISPATCH
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Selected by Editorial Board &bull; Executive Read
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/80 bg-background shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-border/70 bg-muted">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-primary text-primary-foreground shadow-xs">
                  FEATURED DISPATCH
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card/90 backdrop-blur-xs text-foreground border border-border/60">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="text-primary font-bold">{featuredPost.corridor}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" /> {featuredPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug tracking-tight">
                {featuredPost.title}
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {featuredPost.subtitle}
              </p>

              <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
                <span className="text-[10px] font-mono font-bold text-primary uppercase">
                  CORE EMPIRICAL FINDING:
                </span>
                <p className="text-xs font-semibold text-foreground">
                  {featuredPost.keyTakeaway}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-mono text-muted-foreground">
                  By {featuredPost.author}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveReadingModal(featuredPost)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALL ESSAYS INDEX WITH FILTERS */}
      <section id="all-essays" className="py-12 sm:py-16 border-b border-border/70 scroll-mt-20">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                03 // EDITORIAL ARCHIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                All Published Research Essays &amp; Dispatches
              </h3>
              <p className="text-xs text-muted-foreground">
                Filter by commercial corridor or sector practice to examine field observations.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search essays, tags, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-border/80 bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="space-y-3">
            {/* Corridor Filter */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-muted-foreground text-[11px] uppercase mr-1">Corridor:</span>
              {[
                { id: "ALL", label: "All Corridors" },
                { id: "EAST_AFRICA", label: "East Africa" },
                { id: "ASIA_AFRICA", label: "Asia-Africa Desk" },
                { id: "REGIONAL_TRADE", label: "Regional Trade" },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCorridor(c.id)}
                  className={`px-3 py-1 rounded-md text-xs transition-all cursor-pointer ${
                    selectedCorridor === c.id
                      ? "bg-primary text-primary-foreground font-bold shadow-2xs"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-muted-foreground text-[11px] uppercase mr-1">Sector:</span>
              {[
                { id: "ALL", label: "All Practices" },
                { id: "RETAIL", label: "Retail & FMCG" },
                { id: "TRADE", label: "Trade & Sourcing" },
                { id: "HEALTHCARE", label: "Healthcare" },
                { id: "SUSTAINABILITY", label: "Circular Economy" },
                { id: "SENSORY", label: "Sensory & Taste" },
                { id: "ENTERPRISE", label: "Enterprise Tech" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-md text-xs transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-foreground text-background font-bold shadow-2xs"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-border/80 bg-card overflow-hidden hover:border-primary/40 transition-all flex flex-col justify-between shadow-2xs group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-card/90 backdrop-blur-xs text-foreground border border-border/60">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                      <span className="text-primary font-semibold truncate max-w-[170px]">
                        {post.corridor}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[150px]">
                      {post.date}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveReadingModal(post)}
                      className="font-bold text-xs text-primary group-hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Essay</span>
                      <ArrowRight className="size-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="p-8 rounded-2xl border border-border/80 bg-card text-center space-y-2">
              <p className="text-sm font-bold text-foreground">No essays match your filter criteria.</p>
              <p className="text-xs text-muted-foreground">Try clearing your search query or selecting &quot;All Corridors&quot;.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCorridor("ALL");
                  setSelectedCategory("ALL");
                  setSearchQuery("");
                }}
                className="mt-2 text-xs font-bold text-primary hover:underline cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. DISPATCH NEWSLETTER SIGNUP */}
      <section className="py-12 sm:py-16 bg-muted/20 border-b border-border/70">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
            <Mail className="size-3" />
            EXECUTIVE INTELLIGENCE DISPATCH
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
            Subscribe to Bi-Weekly Market Dispatches
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Directly from our Nairobi field researchers. We deliver concise empirical data, retail price elasticity curves, and trade analysis to institutional decision-makers.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="pt-2 max-w-md mx-auto space-y-2">
            <div className="flex gap-2">
              <input
                type="email"
                required
                placeholder="corporate.email@organization.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-border/80 bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-2xs"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
              >
                Subscribe
              </button>
            </div>
            {subscribedSuccess && (
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="size-3.5" />
                <span>Subscription confirmed! Next dispatch will arrive in your inbox.</span>
              </div>
            )}
          </form>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
            <span>Executive Readership</span>
            <span>•</span>
            <span>Zero Marketing Spam</span>
            <span>•</span>
            <Link href="/contact?cta=COMMISSION_RESEARCH" className="text-primary hover:underline font-bold">
              Commission Bespoke Study &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FULL ESSAY MODAL READER */}
      {activeReadingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="bg-card border border-border/80 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
                <BookOpen className="size-4" />
                <span>STRATUM ESSAY DISPATCH // {activeReadingModal.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveReadingModal(null)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted text-xs cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="text-primary font-bold">{activeReadingModal.corridor}</span>
                <span>•</span>
                <span>{activeReadingModal.date}</span>
                <span>•</span>
                <span>{activeReadingModal.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                {activeReadingModal.title}
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed border-l-2 border-primary pl-3">
                {activeReadingModal.subtitle}
              </p>
            </div>

            {/* Key Takeaway Box */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
              <span className="text-[10px] font-mono font-bold text-primary uppercase block">
                CORE STATISTICAL FINDING:
              </span>
              <p className="text-xs font-semibold text-foreground">
                {activeReadingModal.keyTakeaway}
              </p>
            </div>

            {/* Full Body Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-foreground/90 leading-relaxed pt-2">
              {activeReadingModal.fullBody.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Author Byline & CTA Footer */}
            <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-foreground block">
                  Author: {activeReadingModal.author}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">
                  {activeReadingModal.authorRole}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveReadingModal(null)}
                  className="px-4 py-2 rounded-lg border border-border text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href="/contact?cta=COMMISSION_RESEARCH"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:bg-primary/90 transition-all cursor-pointer font-sans"
                >
                  Commission Full Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />

      {/* Native Mobile PWA Bottom Bar */}
      <MobilePwaBar />
    </div>
  );
}
