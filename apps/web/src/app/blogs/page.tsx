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
} from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  categoryFilter: "RETAIL" | "TRADE" | "HEALTHCARE" | "SUSTAINABILITY" | "SENSORY" | "ENTERPRISE";
  corridor: string;
  corridorFilter: "ALL" | "EAST_WEST" | "SOUTHERN_AFRICA" | "ASIA_AFRICA" | "PAN_AFRICA";
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
    subtitle: "Conventional retail audits focus on organized hypermarkets, ignoring the 14,200+ neighborhood dukas, table-top hawkers, and spaza shops driving daily consumer liquidity.",
    slug: "why-supermarket-audits-miss-african-retail",
    category: "Retail Telemetry & FMCG",
    categoryFilter: "RETAIL",
    corridor: "East & West Africa Corridors (Nairobi & Lagos)",
    corridorFilter: "EAST_WEST",
    author: "Dr. Evans Ochieng & Stratum Retail Intelligence Desk",
    authorRole: "Head of Retail Intelligence • Nairobi Operations Command",
    date: "October 2026",
    readTime: "8 min read",
    summary:
      "Multinational consumer brands routinely misjudge African market share because their syndicated retail audit partners measure barcode scanners in air-conditioned malls. In Nairobi, Lagos, and Accra, over 84% of staple FMCG purchases occur in cash-and-carry dukas where product turnover is measured in single-unit sachets. We break down the econometric reality of informal shelf velocity.",
    keyTakeaway:
      "Single-coin packaging (KES 20 / NGN 200) achieves 3.8x faster inventory turns than bulk family-size SKUs across informal retail dukas.",
    fullBody: [
      "For decades, global consumer goods conglomerates entering Sub-Saharan Africa have relied on syndicated retail audit databases imported from OECD economies. These methodologies prioritize point-of-sale optical barcode scanning and modern supermarket chain reconciliations. In Paris or London, this captures 90% of household expenditure. In Nairobi, Lagos, Accra, or Kinshasa, it captures less than 16%.",
      "The overwhelming preponderance of commercial velocity across African consumer markets flows through what economists label the 'informal trade'—though to local consumers, there is nothing informal about it. It is the bedrock commercial infrastructure of everyday life: corner dukas, open-air table-top kiosks, licensed spaza stalls, and morning neighborhood wet markets.",
      "Stratum’s continuous retail census, tracking over 14,200 audited retail kiosks with sub-meter GPS precision, reveals that informal merchant shelf decisions are dictated by daily working capital velocity rather than long-term brand equity. When a duka owner has KES 5,000 ($38) of daily inventory replenishment capital, they stock products that turn over within 36 hours. A bulk 1-kilogram detergent package that ties up capital for two weeks is commercially toxic to the kiosk owner.",
      "This structural constraint gave rise to the 'sachet revolution.' Brands that re-engineered their formulations, moisture-barrier packaging, and unit pricing into single-coin denominations (e.g., KES 20 in Kenya, NGN 200 in Nigeria) unlocked explosive distribution velocity. Our field telemetry demonstrates that single-serve SKUs experience 3.8x faster inventory velocity and 62% fewer stockout incidents than traditional retail pack formats.",
      "To win in African consumer commerce, executive leadership must stop reviewing mall-based scanner data. Ground-truth retail intelligence requires direct human fieldwork, daily inventory sweeps at the kiosk counter, and subnational wholesale depot price tracking.",
    ],
    image: "/images/landing-kiosk.jpg",
    tags: ["Informal Trade", "FMCG Velocity", "Nairobi Duka Census", "Lagos Retail", "Sachet Economy"],
  },
  {
    id: "blog-02",
    title: "The E-Waste Deficit: Unpacking the 57% Literacy Gap Across African Megacities",
    subtitle: "Ground-truth findings from 4,850 field intercepts across Nairobi, Lagos, Accra, and Johannesburg hardware repair clusters.",
    slug: "the-e-waste-deficit-african-megacities",
    category: "Sustainability & Circular Economy",
    categoryFilter: "SUSTAINABILITY",
    corridor: "Pan-African Megacities (Nairobi, Lagos, Accra, Joburg)",
    corridorFilter: "PAN_AFRICA",
    author: "Environmental Governance & Materials Practice",
    authorRole: "Sustainability Research Fellow • Nairobi HQ",
    date: "September 2026",
    readTime: "9 min read",
    summary:
      "Despite unprecedented consumer electronics uptake across African commercial capitals, 57% of consumers rank their understanding of e-waste recycling protocols at 4 or lower on a 1-to-10 scale. Our field teams audited electronics clusters like Computer Village in Lagos and Luthuli Avenue in Nairobi to map informal battery smelting, copper leaching risks, and the commercial viability of deposit-return voucher systems.",
    keyTakeaway:
      "86% of urban consumers express direct willingness to divert toxic lithium batteries to authorized collection points if trade-in discount vouchers are provided.",
    fullBody: [
      "The rapid digitization of Africa's commercial hubs has unleashed an unprecedented tidal wave of secondary hardware: smartphones, feature phones, laptops, and solar power packs. Yet behind this leapfrogging lies a silent ecological emergency that conventional environmental reports routinely overlook.",
      "Stratum's recent empirical study of N = 4,850 field intercepts across Nairobi (Luthuli Ave & Industrial Area), Lagos (Computer Village Otigba & Alaba International), Accra (Agbogbloshie Legacy), and Johannesburg revealed a staggering statistic: 57% of consumers rank their understanding of hazardous electronic waste management at 4 or lower out of 10. The overwhelming majority treat lithium-ion battery cells and obsolete circuit boards as ordinary domestic municipal refuse.",
      "Informal street repair technicians and hardware aggregators possess 3.4x higher toxic disposal awareness than everyday consumers, yet 89% report lacking a single authorized commercial collection drop-off center within a 5-kilometer radius. Consequently, obsolete batteries are discarded in open drains or sold to unregulated scrap buyers who smelt copper and lead over open fires.",
      "Crucially, our study identified the economic lever required for system-level behavioral change: incentive alignment. 86% of surveyed respondents stated they would actively bring obsolete electronics to formal retail drop-off kiosks if offered a direct mobile money deposit voucher or a 10% discount on their next device battery replacement.",
      "Creating sustainable circular economies in emerging markets does not begin with Western compliance paperwork; it begins with street-level economic design that pays scrap collectors and kiosk consumers more to recycle safely than to discard dangerously.",
    ],
    image: "/images/landing-consumer.jpg",
    tags: ["E-Waste", "Circular Economy", "Computer Village", "Luthuli Ave", "Battery Recirculation"],
  },
  {
    id: "blog-03",
    title: "The South-South Trade Corridor: Direct Factory Sourcing from Guangdong to Mombasa",
    subtitle: "Why forward-looking African wholesale importers bypass trading middlemen to audit Tier-1 production lines directly.",
    slug: "south-south-trade-china-africa-manufacturing",
    category: "Bilateral Trade & Sourcing",
    categoryFilter: "TRADE",
    corridor: "Asia-Africa Trade Desk (China to Africa)",
    corridorFilter: "ASIA_AFRICA",
    author: "Asia-Africa Bilateral Intermediation Desk",
    authorRole: "Commercial Intermediation Lead • Shanghai & Nairobi",
    date: "September 2026",
    readTime: "11 min read",
    summary:
      "The bilateral trade axis between China and Africa is evolving from raw commodities toward high-spec consumer hardware, off-grid solar equipment, and industrial packaging. We examine on-site factory inspection protocols in Shenzhen, Guangzhou, and Yiwu, illustrating how mutual escrow and bilateral Deal Rooms eliminate cargo variance and customs clearance bottlenecks.",
    keyTakeaway:
      "Direct Tier-1 factory audits reduce component failure rates from 14.2% down to 1.1% upon maritime container arrival at Mombasa and Tema.",
    fullBody: [
      "The narrative of China-Africa commercial engagement is frequently depicted as sovereign-level infrastructure loans. However, the real day-to-day trade volume—exceeding $280 billion annually—is propelled by private African wholesale importers sourcing consumer goods, hardware, and manufacturing capital equipment from southern China.",
      "Historically, African buyers relied on secondary trading agents in Guangzhou or open commodity bazaars in Yiwu. This multi-layered intermediary chain introduced severe operational hazards: undisclosed factory subcontracting, inconsistent raw material grades, and maritime container inspection failures that resulted in catastrophic capital losses.",
      "Stratum's Asia-Africa Trade Desk operates directly out of manufacturing clusters in Shenzhen, Foshan, and Ningbo, conducting pre-production engineering audits on behalf of African corporate buyers. By verifying factory ISO certifications, reviewing customs export records, and supervising container stuffing on-site, our teams eliminate cargo discrepancies before maritime bills of lading are issued.",
      "Under the framework of the African Continental Free Trade Area (AfCFTA), African enterprises are increasingly sourcing semi-knocked-down (SKD) component kits for local assembly. Direct factory relationships enable African manufacturers to specify tropicalized components: higher operating temperature thresholds for solar inverters, dust-sealed micro-switches, and surge-protected power supplies.",
      "Bilateral deal intermediation that bridges Shanghai and Nairobi is no longer a luxury; it is the fundamental prerequisite for institutional supply chain resilience.",
    ],
    image: "/images/landing-port.jpg",
    tags: ["China Corridor", "Direct Sourcing", "Port Logistics", "Factory Audits", "AfCFTA"],
  },
  {
    id: "blog-04",
    title: "Indian Pharmaceuticals in Africa: Cold-Chain Integrity and API Verification",
    subtitle: "Mapping active pharmaceutical ingredient supply chains from Mumbai and Gujarat to last-mile interior district clinics.",
    slug: "indian-pharmaceuticals-africa-cold-chain",
    category: "Healthcare & Pharmaceuticals",
    categoryFilter: "HEALTHCARE",
    corridor: "Asia-Africa Trade Desk (India to Sub-Saharan Africa)",
    corridorFilter: "ASIA_AFRICA",
    author: "Healthcare & Pharmaceutical Advisory Practice",
    authorRole: "Pharma Supply Chain Lead • Mumbai & Nairobi",
    date: "August 2026",
    readTime: "10 min read",
    summary:
      "India supplies over 70% of generic essential medicines consumed across Sub-Saharan Africa. However, the last 500 miles—from coastal maritime warehouses to interior health facilities—present acute temperature excursion vulnerabilities. This article explores IoT temperature logger data, regulatory filing harmonization across EAC and ECOWAS, and chemist anti-counterfeit protocols.",
    keyTakeaway:
      "Continuous IoT sensor monitoring prevents temperature excursion write-offs exceeding $420,000 per refrigerated distribution run.",
    fullBody: [
      "India has rightfully earned the distinction as the 'pharmacy of the developing world.' Over 70% of essential generic antibiotics, antiretrovirals, and antimalarials consumed across East, West, and Central Africa originate in manufacturing facilities across Gujarat, Maharashtra, and Telangana.",
      "While Indian pharmaceutical manufacturers maintain rigorous WHO-GMP compliance at the factory gate, product efficacy degrades precipitously once shipping containers arrive at African maritime gateways like Mombasa, Dar es Salaam, or Apapa. The breakdown occurs in the overland transit corridor: refrigerated container plug-in delays at container freight stations, unpaved feeder road vibrations, and prolonged power outages at district central medical stores.",
      "Stratum’s healthcare telemetry team conducted continuous IoT temperature logger audits across 280+ healthcare importers in East and West Africa. We documented that biologics and heat-sensitive liquid antibiotics frequently experience temperature excursions above 28°C during interior overland transit—destroying potency while showing zero external package damage.",
      "To counteract this vulnerability, leading pharmaceutical distributors are partnering with Stratum to deploy solar-hybrid cold storage hubs at strategic inland transit waypoints and introducing serialized 2D datamatrix scratch-off codes that allow local chemist dispensers to verify drug authenticity via toll-free SMS.",
      "Securing the healthcare supply chain between India and Africa demands end-to-end telemetry: from API batch synthesis in Ahmedabad all the way to the dispensing pharmacy counter in Kisumu or Kaduna.",
    ],
    image: "/images/landing-breakfast.jpg",
    tags: ["Pharma Cold-Chain", "India Corridor", "Generic Formulations", "Healthcare Supply Chains"],
  },
  {
    id: "blog-05",
    title: "Sensory Testing in Local Dialects: Why Western Formulations Fail Without Vernacular IDIs",
    subtitle: "How conducting blind taste booths in Swahili, Pidgin, and Sheng uncovers unspoken palate and texture nuances.",
    slug: "sensory-testing-local-dialects-fmcg-formulation",
    category: "Sensory & Consumer Psychology",
    categoryFilter: "SENSORY",
    corridor: "East & West Africa Corridors (Nairobi & Lagos)",
    corridorFilter: "EAST_WEST",
    author: "Qualitative Moderation & Behavioral Insights Group",
    authorRole: "Lead Sensory Scientist • Nairobi HQ",
    date: "August 2026",
    readTime: "7 min read",
    summary:
      "Translating a food or beverage recipe directly into African consumer markets without local dialect sensory testing often leads to catastrophic product launches. We unpack why sweetness, viscosity, and aroma benchmarks vary drastically across socio-economic deciles, and how in-depth vernacular interviews reveal cultural food taboos invisible to English questionnaires.",
    keyTakeaway:
      "Blind sensory testing in mother-tongue dialects yields 43% higher qualitative sentiment accuracy than standardized English focus groups.",
    fullBody: [
      "A multinational beverage corporation once introduced a citrus carbonated drink into East Africa that had achieved viral acclaim across Western Europe. Six months later, the product was withdrawn from retail shelves with millions in written-off inventory. What caused the failure? The company conducted taste tests exclusively in English using formal corporate Likert scales.",
      "When Stratum was commissioned to execute an autopsy sensory evaluation, our moderators conducted blind sensory booths using Sheng in Nairobi and coastal Swahili in Mombasa. The insight was immediate: the European formulation used a high-acidity tart citrus profile that local consumers culturally associated with medicinal remedies rather than refreshing beverage treats.",
      "Language is not merely a vehicle for communication; it is the framework through which human sensory perception is encoded. Terms describing mouthfeel, richness, sweetness, and aftertaste do not have direct 1:1 translations in standard English. In vernacular dialects, respondents speak with visceral honesty about texture, aroma, and social status associations.",
      "Our sensory labs across Nairobi, Lagos, and Accra integrate controlled sensory testing booths with vernacular in-depth interviews (IDIs). We measure calibrated sweetness-to-acidity ratios, lipid mouthfeel perceptions, and pack-in-hand tactile ergonomics across varying socio-economic classes.",
      "Product development teams must recognize that African consumer palates are sophisticated, highly regionalized, and culturally anchored. Success requires formulation calibration grounded in local dialect dialogue.",
    ],
    image: "/images/landing-reaction.jpg",
    tags: ["Sensory Panels", "Taste Formulations", "Vernacular IDIs", "Beverage Testing", "Nairobi & Lagos"],
  },
  {
    id: "blog-06",
    title: "De-Risking Cross-Border Commercial Expansion: The Architecture of Verified Deal Rooms",
    subtitle: "How bilateral non-disclosure agreements and forensic distributor due diligence replace opaque agent networks.",
    slug: "derisking-market-entry-afcfta-deal-rooms",
    category: "Commercial Intermediation & M&A",
    categoryFilter: "TRADE",
    corridor: "Pan-African Trade Corridors",
    corridorFilter: "PAN_AFRICA",
    author: "Commercial Intermediation Practice",
    authorRole: "Managing Director • Nairobi Operations Command",
    date: "July 2026",
    readTime: "9 min read",
    summary:
      "The African Continental Free Trade Area (AfCFTA) represents a $3.4 trillion single trade bloc, yet entering adjacent markets without verified distributor vetting remains perilous. We illustrate how Stratum's bilateral Deal Rooms structure mutual NDAs, escrow arrangements, and commercial distributor audits to protect institutional capital.",
    keyTakeaway:
      "Pre-audited Deal Room frameworks compress distributor onboarding timelines from 9 months down to 14 business days.",
    fullBody: [
      "With 54 signatory nations, the African Continental Free Trade Area (AfCFTA) promises to dissolve border tariff barriers and unleash unprecedented intra-African commercial exchange. Yet for corporate enterprise leaders and private equity investment committees, expanding into an adjacent sovereign jurisdiction remains fraught with commercial landmines.",
      "The conventional approach involves hiring charismatic local intermediaries or attending regional trade conferences. Too often, foreign entrants sign exclusive distribution agreements with partners who boast impressive political connections but lack commercial warehousing infrastructure, working capital lines, or audited retail distribution fleets.",
      "Stratum’s Commercial Deal Room protocol replaces opaque middleman promises with forensic institutional verification. Before two counterparties enter a transaction, both entities execute legally binding bilateral NDAs governed by international arbitration covenants.",
      "Our field teams then conduct on-the-ground distributor due diligence: verifying physical warehouse ownership, inspecting transport fleets, cross-referencing bank credit standing, and interviewing existing FMCG clients. Once vetted, counterparties enter a secure Deal Room where pricing formulas, minimum volume guarantees, and escrow payment milestones are formalized.",
      "By replacing speculative matchmaking with audit-stamped commercial intermediation, corporate boards compress expansion timelines from 9 months down to 14 business days while safeguarding institutional balance sheets.",
    ],
    image: "/images/landing-executive.jpg",
    tags: ["AfCFTA", "Distributor Vetting", "Deal Rooms", "Institutional M&A", "Capital Protection"],
  },
  {
    id: "blog-07",
    title: "The Spaza Cashless Migration: Tap-to-Pay Penetration in Southern African Townships",
    subtitle: "Subnational census across 11,200+ informal spaza merchants reveals 45% annual growth in mobile contactless checkout.",
    slug: "township-spaza-cashless-migration",
    category: "Fintech & Retail Telemetry",
    categoryFilter: "RETAIL",
    corridor: "Southern Africa Corridor (SADC Belt)",
    corridorFilter: "SOUTHERN_AFRICA",
    author: "Southern Africa Consumer Telemetry Lead",
    authorRole: "Retail Panel Coordinator • Johannesburg Hub",
    date: "July 2026",
    readTime: "8 min read",
    summary:
      "South African townships are witnessing a silent revolution in everyday retail transactions. While cash was once undisputed king, micro-merchant tap-to-pay terminals and mobile QR payments have surged 45% year-on-year. We analyze transaction ticket sizes, merchant security trade-offs, and wholesale distributor rebate settlements.",
    keyTakeaway:
      "Spaza merchants offering cashless payments report 28% higher daily basket values compared to cash-only peers.",
    fullBody: [
      "In the high-density townships of Soweto, Alexandra, Umlazi, and Khayelitsha, neighborhood spaza shops account for more than 68% of everyday household grocery and convenience spending. For decades, these cash-intensive commercial enclaves operated entirely outside formal banking rails.",
      "However, Stratum’s subnational retail census of 11,200+ audited spaza merchants across South Africa documents an extraordinary transformation: tap-to-pay card terminals and mobile QR checkouts have expanded 45% year-on-year. Driven by merchant security concerns and the ubiquity of contactless debit cards, cashless penetration is reaching an irreversible tipping point.",
      "The economics are compelling for both consumer and merchant. Spaza owners operating cash-only stalls frequently suffer armed robbery risks and lose up to 6% of daily gross revenues in commercial cash-deposit transit fees. Merchants who adopted standalone tap-to-pay terminals report a 28% surge in average daily customer basket sizes, as shoppers are no longer constrained by the physical banknotes in their pockets.",
      "Furthermore, the digital transaction records created by these terminals unlock access to formal working capital credit lines from wholesale cash-and-carry distributors. Instead of having to halt trading when stock runs low, verified spaza merchants receive inventory advances settled automatically from their digital daily card receivables.",
      "Fintech innovators and consumer brand distributors who treat the township economy as an archaic informal relic are missing the most dynamic retail digitization story on the African continent.",
    ],
    image: "/images/landing-kiosk.jpg",
    tags: ["Spaza Shops", "Tap-to-Pay", "Township Economy", "Fintech", "Johannesburg"],
  },
  {
    id: "blog-08",
    title: "AI to Super Intelligence: How African Enterprises Are Bypassing Legacy Tech Stacks",
    subtitle: "Empirical survey of 1,840 technology executives across Nairobi, Lagos, and Cape Town reveals rapid agentic workflow adoption.",
    slug: "ai-super-intelligence-african-enterprise-strategy",
    category: "Enterprise Technology & Strategy",
    categoryFilter: "ENTERPRISE",
    corridor: "Pan-African Tech Hubs (Nairobi, Lagos, Cape Town)",
    corridorFilter: "PAN_AFRICA",
    author: "Stratum Technology & Econometrics Group",
    authorRole: "Principal Data Architect • Nairobi HQ",
    date: "June 2026",
    readTime: "8 min read",
    summary:
      "African enterprises are not merely adopting artificial intelligence; they are leapfrogging legacy SaaS stacks by deploying conversational commerce agents directly onto WhatsApp and SMS networks. This article reviews our cross-continental executive survey, highlighting why mid-market firms report 54% conversion rate surges and 47% net margin expansions.",
    keyTakeaway:
      "Conversational commerce agents on mobile channels deliver a 2.4x faster payback period than traditional enterprise CRM platforms.",
    fullBody: [
      "In developed markets, enterprise artificial intelligence deployment is frequently entangled in complex migrations across decades-old legacy ERPs, mainframe databases, and sprawling desktop software ecosystems. In Africa's commercial hubs, a radically different pattern is unfolding.",
      "Much like the mobile money revolution skipped branch-banking landline infrastructure twenty years ago, African commercial mid-market enterprises are bypassing heavy Western desktop CRM systems altogether. Instead, companies in Nairobi, Lagos, and Cairo are orchestrating autonomous conversational AI agents directly on top of mobile messaging rails: WhatsApp Business API, Telegram, and SMS.",
      "In Stratum's empirical survey of 1,280 audited commercial enterprises across five African nations, 81% reported positive financial ROI within 12 months of deploying AI automation. Mid-market firms utilizing multilingual customer engagement bots and automated lead-scoring pipelines experienced an average 54% sales conversion lift and a 47% net margin expansion.",
      "The competitive moat lies in hyper-localization. Generic large language models trained exclusively on North American web corpora stumble on African commercial colloquiums, multi-currency mobile money references, and code-switching between English, Swahili, and Pidgin. Enterprises fine-tuning agentic workflows with proprietary ground-truth telemetry achieve 3.4x higher customer resolution completion rates.",
      "The transition from simple automation toward autonomous task execution is not a speculative future for African commerce; it is an active, margin-generating reality deployed at scale today.",
    ],
    image: "/images/landing-consumer.jpg",
    tags: ["Enterprise AI", "Conversational Commerce", "Fintech Automation", "Nairobi Tech Hub", "Lagos"],
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
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden stratum-grid-bg border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-border/70 bg-card text-xs font-mono font-semibold text-muted-foreground shadow-2xs">
              <span className="text-primary font-bold">01 // STRATUM EDITORIAL DESK</span>
              <span className="text-border">•</span>
              <span className="text-foreground">EMERGING MARKETS INTELLIGENCE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Stratum Blogs &amp; Editorial Analysis
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl font-normal">
              Long-form analytical essays, field dispatches, and econometric perspectives exploring consumer behavior, retail velocity, and South-South bilateral trade across Africa, China, and India commercial corridors.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#all-essays"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <BookOpen className="size-3.5" />
                <span>Explore {BLOG_POSTS.length} Published Essays</span>
                <ArrowRight className="size-3.5" />
              </a>
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold transition-all cursor-pointer"
              >
                <FileText className="size-3.5 text-primary" />
                <span>Browse Empirical Research Reports</span>
              </Link>
            </div>
          </div>

          {/* Scale Metrics & Editorial Telemetry Ribbon */}
          <div className="p-3 rounded-lg border border-border/70 bg-card/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-bold">EDITORIAL DESK FOOTPRINT:</span>
              <span>8 Deep-Dive Essays • 4 Corridors • 14,200+ Audited Outlets • Bi-Weekly Publishing Cycle</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="text-primary font-bold">CENTRAL COMMAND</span>
              <span>•</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          {/* Scale Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>ESSAYS PUBLISHED</span>
                <BookOpen className="size-3.5 text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">{BLOG_POSTS.length} Essays</div>
              <p className="text-[11px] text-muted-foreground">Original Ground-Truth Analysis</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>ACTIVE CORRIDORS</span>
                <Globe2 className="size-3.5 text-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">4 Desks</div>
              <p className="text-[11px] text-muted-foreground">East, West, Southern &amp; Asia</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>FIELD EMPIRICISM</span>
                <Radio className="size-3.5 text-blue-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">100% Primary</div>
              <p className="text-[11px] text-muted-foreground">Zero Synthetic Desktop Scraping</p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/70 bg-card space-y-1">
              <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
                <span>DISPATCH CYCLE</span>
                <Clock className="size-3.5 text-amber-500" />
              </div>
              <div className="text-xl sm:text-2xl font-black font-mono text-foreground">Bi-Weekly</div>
              <p className="text-[11px] text-muted-foreground">Subscribed Executive Readers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE FEATURED LEAD ESSAY */}
      <section className="py-12 sm:py-16 border-b border-border/70">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
              02 // FEATURED LEAD EDITORIAL
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Selected by Editorial Board • Executive Read
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/80 bg-card shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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

              {/* Empirical Finding Callout */}
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 space-y-1">
                <span className="text-[10px] font-mono font-bold text-primary uppercase block">
                  KEY EMPIRICAL TAKEAWAY:
                </span>
                <p className="text-xs font-semibold text-foreground">
                  {featuredPost.keyTakeaway}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {featuredPost.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-border/60">
                <span className="text-xs font-mono text-muted-foreground">
                  By {featuredPost.authorRole}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveReadingModal(featuredPost)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ESSAYS DIRECTORY & FILTERING */}
      <section className="py-12 sm:py-16 border-b border-border/70 scroll-mt-20" id="all-essays">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                03 // DIRECTORY OF PUBLISHED ESSAYS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Showing {filteredPosts.length} Editorial Analysis Dossiers
              </h2>
            </div>

            {/* Keyword Search & Corridor Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search essays by keyword, author, tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-md border border-border bg-card text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-56 sm:w-64"
                />
              </div>

              {/* Corridor Filter Pills */}
              <div className="flex flex-wrap items-center gap-1 font-mono text-[11px]">
                {[
                  { id: "ALL", label: "ALL CORRIDORS" },
                  { id: "EAST_WEST", label: "EAST & WEST AFRICA" },
                  { id: "SOUTHERN_AFRICA", label: "SOUTHERN AFRICA" },
                  { id: "ASIA_AFRICA", label: "ASIA-AFRICA DESK" },
                  { id: "PAN_AFRICA", label: "PAN-AFRICA" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedCorridor(item.id)}
                    className={`px-2.5 py-1.5 rounded-md border text-[11px] font-bold transition-all cursor-pointer ${
                      selectedCorridor === item.id
                        ? "bg-primary text-primary-foreground border-primary shadow-2xs"
                        : "bg-card text-muted-foreground border-border/80 hover:bg-muted/60 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Category Topic Filter Rail */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-muted-foreground font-semibold flex items-center gap-1">
              <Tag className="size-3 text-primary" /> Sector Filter:
            </span>
            {[
              { id: "ALL", label: "All Sectors" },
              { id: "RETAIL", label: "Retail & FMCG" },
              { id: "TRADE", label: "Bilateral Trade" },
              { id: "HEALTHCARE", label: "Healthcare & Cold-Chain" },
              { id: "SUSTAINABILITY", label: "Sustainability & E-Waste" },
              { id: "SENSORY", label: "Sensory & Taste" },
              { id: "ENTERPRISE", label: "Enterprise AI & Strategy" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-full border text-[11px] font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-foreground text-background border-foreground font-bold"
                    : "bg-muted/40 text-muted-foreground border-border/70 hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Uniform 2x2 Boardroom Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl border border-border/80 bg-card overflow-hidden shadow-2xs flex flex-col justify-between hover:border-primary/50 transition-all group"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-card/90 backdrop-blur-xs text-foreground border border-border/70">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary text-primary-foreground font-bold">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-muted-foreground">
                      <span className="text-primary font-bold">{post.corridor}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" /> {post.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {post.subtitle}
                    </p>

                    {/* Key Empirical Takeaway Snippet */}
                    <div className="p-3 rounded-md bg-muted/40 border border-border/70 text-xs space-y-1">
                      <span className="text-[10px] font-mono font-bold text-primary uppercase block">
                        KEY EMPIRICAL TAKEAWAY:
                      </span>
                      <p className="text-[11px] font-medium text-foreground leading-snug">
                        {post.keyTakeaway}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {post.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-muted-foreground truncate max-w-[200px]">
                      {post.author}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveReadingModal(post)}
                      className="inline-flex items-center gap-1.5 font-bold text-xs text-primary hover:underline cursor-pointer"
                    >
                      <span>Read Full Essay</span>
                      <ArrowRight className="size-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL BOARD & GROUND-TRUTH STANDARDS */}
      <section className="py-12 sm:py-16 border-b border-border/70 bg-muted/15">
        <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8 xl:px-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-4">
            <div className="max-w-3xl space-y-1.5">
              <div className="text-[11px] font-mono font-bold tracking-wider text-primary uppercase">
                04 // EDITORIAL STANDARDS &amp; RESEARCH PROTOCOLS
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Authentic Field Telemetry. Zero Ghostwritten Desk Scraping.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every Stratum editorial briefing is authored by specialized practice leads actively directing on-the-ground fieldwork across our commercial corridors.
              </p>
            </div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-border/80 bg-card hover:bg-muted text-foreground font-semibold text-xs transition-all shrink-0 cursor-pointer"
            >
              <span>Inspect Field Audit Protocol</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Verified Primary Data Sources</h4>
                <p className="text-muted-foreground text-[11px]">
                  All statistical claims tied to verifiable panel intercepts, POS sweeps, or customs manifests.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <Building2 className="size-4 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">Central Command Oversight</h4>
                <p className="text-muted-foreground text-[11px]">
                  Curated and fact-checked by our central research and econometric team in Nairobi, Kenya.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border/70 bg-card">
              <Radio className="size-4 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-foreground">ESOMAR &amp; KDPA Governed</h4>
                <p className="text-muted-foreground text-[11px]">
                  Compliant with international market research codes and bilateral data protection mandates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL SUBSCRIPTION & COMMISSION BANNER */}
      <section className="py-14 sm:py-18 bg-card border-b border-border/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary">
            <Mail className="size-3.5" />
            05 // BI-WEEKLY EDITORIAL DISPATCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Receive Our Bi-Weekly Emerging Markets Dispatch
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Get curated consumer telemetry, wholesale pricing shifts, and cross-border trade updates delivered directly from our central operations command in Nairobi, Kenya.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="pt-2 max-w-md mx-auto space-y-2">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter institutional email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
            {subscribedSuccess && (
              <div className="p-2.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="size-3.5" />
                <span>Subscription verified! Next dispatch arriving in your inbox.</span>
              </div>
            )}
          </form>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-muted-foreground">
            <span>Executive Readership</span>
            <span>•</span>
            <span>Zero Commercial Spam</span>
            <span>•</span>
            <Link href="/contact" className="text-primary hover:underline font-bold">
              Commission Bespoke Study →
            </Link>
          </div>
        </div>
      </section>

      {/* FULL ESSAY MODAL READER */}
      {activeReadingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="bg-card border border-border/80 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
                <BookOpen className="size-4" />
                <span>STRATUM RESEARCH ESSAY // {activeReadingModal.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveReadingModal(null)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted text-xs cursor-pointer"
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
            <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
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
                  className="px-4 py-2 rounded-md border border-border text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:bg-primary/90 transition-all cursor-pointer font-sans"
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
