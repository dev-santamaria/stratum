"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Building2,
  User,
  Mail,
  Phone,
  Globe2,
  Clock,
  Send,
  MessageSquare,
  Lock,
  ChevronDown,
  Check,
  Compass,
  TrendingUp,
  Search,
  Handshake,
  Layers,
  Sparkles,
} from "lucide-react";

export type CallToActionType =
  | "COMMISSION_RESEARCH"
  | "REQUEST_INTELLIGENCE"
  | "EXPLORE_INVESTMENT"
  | "DISCUSS_MARKET_ENTRY"
  | "STRATEGIC_PARTNER";

export interface ConsultationFormProps {
  initialCta?: CallToActionType;
  initialService?: string;
  className?: string;
  onServiceChange?: (serviceId: string) => void;
}

export interface DropdownItem {
  value: string;
  label: string;
  badge?: string;
  hint?: string;
}

export const OBJECTIVE_OPTIONS: DropdownItem[] = [
  {
    value: "COMMISSION_RESEARCH",
    label: "Commission a Research Study",
    badge: "01 Research",
    hint: "Quantitative & qualitative field research, retail kiosk censuses & consumer insights",
  },
  {
    value: "REQUEST_INTELLIGENCE",
    label: "Request Market Intelligence",
    badge: "02 Intelligence",
    hint: "Competitor tracking, pricing elasticity, market sizing & regulatory diagnostics",
  },
  {
    value: "EXPLORE_INVESTMENT",
    label: "Explore Investment Opportunities",
    badge: "03 Opportunity",
    hint: "Opportunity screening, sector pipeline mapping & commercial feasibility",
  },
  {
    value: "DISCUSS_MARKET_ENTRY",
    label: "Discuss Market Entry",
    badge: "05 Market Access",
    hint: "Market-entry roadmaps, regulatory clearance & distribution channel architecture",
  },
  {
    value: "STRATEGIC_PARTNER",
    label: "Become a Strategic Partner",
    badge: "04 Intermediation",
    hint: "B2B connections, distributor matching & verified supplier vetting",
  },
];

export const SERVICE_OPTIONS: DropdownItem[] = [
  { value: "01_RESEARCH", label: "01 Research Practice", badge: "Research", hint: "Consumer insights, retail audits, brand tracking" },
  { value: "02_INTELLIGENCE", label: "02 Intelligence Practice", badge: "Intelligence", hint: "Competitor intelligence, pricing models, market sizing" },
  { value: "03_OPPORTUNITY", label: "03 Opportunity Practice", badge: "Opportunity", hint: "Investment screening, sector mapping" },
  { value: "04_INTERMEDIATION", label: "04 Intermediation Practice", badge: "Intermediation", hint: "B2B connections, distributor & supplier vetting" },
  { value: "05_MARKET_ACCESS", label: "05 Market Access Practice", badge: "Market Access", hint: "Market-entry strategy, regulatory compliance" },
  { value: "06_DIGITAL_MARKET", label: "06 Digital Market Practice", badge: "Digital Market", hint: "Digital ecosystem insights, tech platform data" },
  { value: "MULTI_SERVICE", label: "Multi-Service / Integrated Scope", badge: "Integrated", hint: "Combined cross-practice commercial mandate" },
];

export const TARGET_MARKET_OPTIONS: DropdownItem[] = [
  { value: "Kenya", label: "Kenya (Domestic Market)", hint: "Urban and rural subnational corridors" },
  { value: "East Africa", label: "East Africa (Kenya, Tanzania, Uganda, Rwanda)", hint: "EAC economic community trade belt" },
  { value: "West Africa", label: "West Africa (Nigeria, Ghana, Côte d'Ivoire)", hint: "ECOWAS commercial & consumer hubs" },
  { value: "Southern Africa", label: "Southern Africa (South Africa, Zambia, Angola)", hint: "SADC industrial & retail markets" },
  { value: "Pan-African", label: "Pan-African Multi-Country Mandate", hint: "Multi-jurisdiction commercial scope" },
  { value: "International Inbound", label: "International Inbound to Africa", hint: "Entry advisory from US/Europe/Asia" },
  { value: "Other Emerging", label: "Other Emerging Markets", hint: "Custom emerging market scope" },
];

export const TIMEFRAME_OPTIONS: DropdownItem[] = [
  { value: "IMMEDIATE", label: "Immediate (< 30 Days)", hint: "Active mandate requiring urgent mobilization" },
  { value: "NEAR_TERM", label: "1 to 3 Months", hint: "Planning for the upcoming quarter" },
  { value: "STRATEGIC", label: "3 to 6 Months", hint: "Strategic market expansion project" },
  { value: "EXPLORATORY", label: "Exploratory / Planning", hint: "Early-stage feasibility and scoping" },
];

function ModernDropdown({
  label,
  options,
  value,
  onChange,
  icon: Icon,
  required = false,
}: {
  label: string;
  options: DropdownItem[];
  value: string;
  onChange: (val: string) => void;
  icon?: React.ElementType;
  required?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-1.5" ref={dropdownRef}>
      <label className="block text-xs font-semibold text-foreground">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border text-left text-xs transition-all ${
            isOpen
              ? "border-primary ring-2 ring-primary/20 bg-background shadow-xs"
              : "border-border/80 bg-background hover:border-foreground/30 hover:bg-muted/30"
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            {Icon && <Icon className="size-3.5 text-primary shrink-0" />}
            <span className="truncate font-medium text-foreground">{selected.label}</span>
            {selected.badge && (
              <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                {selected.badge}
              </span>
            )}
          </div>
          <ChevronDown
            className={`size-3.5 text-muted-foreground shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-foreground" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1 w-full rounded-xl border border-border/80 bg-background/98 backdrop-blur-xl shadow-xl p-1 space-y-0.5 max-h-64 overflow-y-auto animate-in fade-in-50 zoom-in-98 duration-100">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-start justify-between gap-2 px-2.5 py-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-muted/70"
                  }`}
                >
                  <div className="space-y-0.5 truncate">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="truncate">{opt.label}</span>
                      {opt.badge && (
                        <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-muted text-muted-foreground shrink-0">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    {opt.hint && (
                      <p className="text-[10px] text-muted-foreground font-normal truncate">
                        {opt.hint}
                      </p>
                    )}
                  </div>
                  {isSelected && <Check className="size-3.5 text-primary shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function ConsultationFormContent({
  initialCta = "COMMISSION_RESEARCH",
  initialService = "01_RESEARCH",
  className = "",
  onServiceChange,
}: ConsultationFormProps) {
  const searchParams = useSearchParams();
  const urlCta = searchParams?.get("cta") as string | null;
  const urlService = searchParams?.get("service") as string | null;

  const [selectedObjective, setSelectedObjective] = useState<string>(
    urlCta && OBJECTIVE_OPTIONS.some((o) => o.value === urlCta) ? urlCta : initialCta
  );
  const [requiredService, setRequiredService] = useState<string>(() => {
    if (urlService && SERVICE_OPTIONS.some((s) => s.value === urlService)) {
      return urlService;
    }
    const effectiveCta = urlCta && OBJECTIVE_OPTIONS.some((o) => o.value === urlCta) ? urlCta : initialCta;
    if (effectiveCta === "COMMISSION_RESEARCH") return "01_RESEARCH";
    if (effectiveCta === "REQUEST_INTELLIGENCE") return "02_INTELLIGENCE";
    if (effectiveCta === "EXPLORE_INVESTMENT") return "03_OPPORTUNITY";
    if (effectiveCta === "DISCUSS_MARKET_ENTRY") return "05_MARKET_ACCESS";
    if (effectiveCta === "STRATEGIC_PARTNER") return "04_INTERMEDIATION";
    return initialService;
  });
  const [organisation, setOrganisation] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetMarket, setTargetMarket] = useState<string>(TARGET_MARKET_OPTIONS[0].value);
  const [expectedTimeframe, setExpectedTimeframe] = useState<string>(TIMEFRAME_OPTIONS[1].value);
  const [businessChallenge, setBusinessChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync with objective changes
  const handleObjectiveChange = (newCta: string) => {
    setSelectedObjective(newCta);
    let mappedService = "01_RESEARCH";
    if (newCta === "COMMISSION_RESEARCH") mappedService = "01_RESEARCH";
    else if (newCta === "REQUEST_INTELLIGENCE") mappedService = "02_INTELLIGENCE";
    else if (newCta === "EXPLORE_INVESTMENT") mappedService = "03_OPPORTUNITY";
    else if (newCta === "DISCUSS_MARKET_ENTRY") mappedService = "05_MARKET_ACCESS";
    else if (newCta === "STRATEGIC_PARTNER") mappedService = "04_INTERMEDIATION";

    setRequiredService(mappedService);
    if (onServiceChange) onServiceChange(mappedService);
  };

  useEffect(() => {
    if (urlCta && OBJECTIVE_OPTIONS.some((o) => o.value === urlCta)) {
      handleObjectiveChange(urlCta);
    }
    if (urlService && SERVICE_OPTIONS.some((s) => s.value === urlService)) {
      setRequiredService(urlService);
    }
  }, [urlCta, urlService]);

  const handleServiceChange = (serviceId: string) => {
    setRequiredService(serviceId);
    if (onServiceChange) onServiceChange(serviceId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedServiceObj =
    SERVICE_OPTIONS.find((s) => s.value === requiredService) || SERVICE_OPTIONS[0];

  if (submitted) {
    return (
      <div className={`p-6 sm:p-8 rounded-2xl border border-border/80 bg-card text-center space-y-4 shadow-sm ${className}`}>
        <div className="size-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
          <CheckCircle2 className="size-6" />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            BRIEF RECEIVED &bull; NAIROBI OFFICE
          </span>
          <h3 className="text-lg font-bold text-foreground">
            Thank you, {contactName || "Executive"}.
          </h3>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
            Your mandate briefing on behalf of <strong className="text-foreground">{organisation || "your organization"}</strong> regarding{" "}
            <strong className="text-foreground">{selectedServiceObj.label}</strong> has been logged for evaluation.
          </p>
        </div>

        <div className="p-3.5 rounded-xl border border-border/80 bg-muted/30 max-w-sm mx-auto text-left space-y-1.5 text-xs">
          <div className="flex items-center justify-between text-muted-foreground pb-1.5 border-b border-border/60 text-[11px]">
            <span>Practice Desk:</span>
            <span className="text-primary font-bold">{selectedServiceObj.badge}</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground text-[11px]">
            <span>Target Region:</span>
            <span className="text-foreground font-semibold">{targetMarket}</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground text-[11px]">
            <span>Direct Line:</span>
            <span className="text-foreground font-semibold">+254 721 154382</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setBusinessChallenge("");
            }}
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-border bg-background text-xs font-semibold hover:bg-muted transition-colors cursor-pointer"
          >
            Submit Another Brief
          </button>
          <a
            href="https://wa.me/254721154382"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
          >
            <MessageSquare className="size-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-border/80 bg-card p-5 sm:p-7 shadow-sm space-y-5 ${className}`}>
      {/* Header Strip */}
      <div className="flex items-center justify-between gap-3 border-b border-border/60 pb-3.5">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
            CONFIDENTIAL BRIEFING MEMO
          </span>
          <h3 className="text-base sm:text-lg font-bold text-foreground">
            Commission a Strategic Consultation Brief
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold shrink-0">
          <Lock className="size-3" />
          <span>Bilateral NDA</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Objective Selector (Modern Dropdown) */}
        <ModernDropdown
          label="Primary Strategic Objective"
          options={OBJECTIVE_OPTIONS}
          value={selectedObjective}
          onChange={handleObjectiveChange}
          icon={Compass}
          required
        />

        {/* Row 2: Contact Person & Work Email (2 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="text"
                required
                placeholder="Full Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-border/80 bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground">
              Work Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-border/80 bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Organisation & Phone (2 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground">
              Organisation Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="text"
                required
                placeholder="Company / Institution"
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-border/80 bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-foreground">
              Phone / WhatsApp <span className="text-muted-foreground font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="tel"
                placeholder="+254 721 154382 / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-border/80 bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Target Market & Timeframe (2 Modern Dropdowns side-by-side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-border/60 pt-3.5">
          <ModernDropdown
            label="Target Market / Geography"
            options={TARGET_MARKET_OPTIONS}
            value={targetMarket}
            onChange={setTargetMarket}
            icon={Globe2}
            required
          />

          <ModernDropdown
            label="Expected Timeframe"
            options={TIMEFRAME_OPTIONS}
            value={expectedTimeframe}
            onChange={setExpectedTimeframe}
            icon={Clock}
            required
          />
        </div>

        {/* Row 5: Required Service Practice Dropdown */}
        <div className="border-t border-border/60 pt-3.5">
          <ModernDropdown
            label="Assigned Practice Line"
            options={SERVICE_OPTIONS}
            value={requiredService}
            onChange={handleServiceChange}
            icon={Layers}
            required
          />
        </div>

        {/* Row 6: Business Challenge Textarea */}
        <div className="space-y-1.5 border-t border-border/60 pt-3.5">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-semibold text-foreground">
              Commercial Requirement &amp; Scope <span className="text-red-500">*</span>
            </label>
            <span className="text-[10px] text-muted-foreground">Describe your strategic challenge</span>
          </div>
          <textarea
            required
            rows={3}
            placeholder="Briefly outline your challenge: e.g., We are expanding into Kenya and require consumer price sensitivity data in informal retail kiosks, or we need screened distributor partners..."
            value={businessChallenge}
            onChange={(e) => setBusinessChallenge(e.target.value)}
            className="w-full p-3 rounded-lg border border-border/80 bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed transition-all"
          />
        </div>

        {/* Submit Bar */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border/60">
          <div className="text-[11px] text-muted-foreground">
            Direct hotline: <a href="tel:+254721154382" className="text-foreground font-semibold hover:underline">+254 721 154382</a> &bull; <a href="mailto:info@stratumresearchltd.com" className="text-foreground font-semibold hover:underline">info@stratumresearchltd.com</a>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/90 transition-all cursor-pointer active:scale-[0.99] shrink-0"
          >
            <span>Submit Brief</span>
            <Send className="size-3" />
          </button>
        </div>
      </form>
    </div>
  );
}

export function ConsultationForm(props: ConsultationFormProps) {
  return (
    <Suspense
      fallback={
        <div className="p-8 rounded-2xl border border-border/80 bg-card text-center text-xs text-muted-foreground animate-pulse">
          Loading mandate briefing workspace...
        </div>
      }
    >
      <ConsultationFormContent {...props} />
    </Suspense>
  );
}
