"use client";

import React, { useState } from "react";
import { CheckCircle2, Shield, Send, Building2, User, Mail, FileText, Layers, Clock, Lock } from "lucide-react";
import { ModernSelect, ModernSelectOption } from "../ui/modern-select";

const MARKET_OPTIONS: ModernSelectOption[] = [
  {
    group: "Pan-African Core Corridors",
    value: "PAN_AFRICA_CORRIDORS",
    label: "Pan-Africa Multi-Country (All 54 AU Nations)",
    badge: "AfCFTA",
    description: "Cross-border consumer telemetry, informal kiosk trade & distribution",
  },
  {
    group: "Regional African Economic Communities",
    value: "WEST_AFRICA",
    label: "West Africa Corridor (Nigeria, Ghana, Côte d'Ivoire, Senegal, Cameroon)",
    badge: "ECOWAS",
    description: "Deep informal trade measurement, FMCG panels & coastal port hubs",
  },
  {
    group: "Regional African Economic Communities",
    value: "EAST_AFRICA",
    label: "East Africa Community (Kenya Telemetry HQ, Tanzania, Uganda, Rwanda, Ethiopia)",
    badge: "EAC",
    description: "Mobile money telemetry, peri-urban distribution & retail tracking",
  },
  {
    group: "Regional African Economic Communities",
    value: "SOUTHERN_AFRICA",
    label: "Southern African Belt (South Africa, Angola, Mozambique, Zambia, Zimbabwe)",
    badge: "SADC",
    description: "Modern trade brand tracking, wholesale audits & spaza shop networks",
  },
  {
    group: "Regional African Economic Communities",
    value: "NORTH_AFRICA",
    label: "North Africa & Maghreb (Egypt, Morocco, Algeria, Tunisia)",
    badge: "Maghreb",
    description: "Traditional souks, retail distribution & Mediterranean maritime links",
  },
  {
    group: "Regional African Economic Communities",
    value: "CENTRAL_AFRICA",
    label: "Central Africa (DRC, Republic of Congo, Gabon, Chad)",
    badge: "CEMAC",
    description: "Resource corridors, river transport logistics & fast-growing urban hubs",
  },
  {
    group: "Global Trade & Sourcing Corridors",
    value: "ASIA_AFRICA_CORRIDORS",
    label: "Asia-Africa Trade Desk (China & India to African Markets)",
    badge: "South-South",
    description: "Factory verification, supplier due diligence, pharmaceuticals, B2B trade intermediation",
  },
  {
    group: "International-To-Africa Capital Desks",
    value: "AFRICA_CAPITAL_DESK",
    label: "Global Capital Hubs Deploying Into Africa (London, NY, Dubai to Africa)",
    badge: "Deal Room",
    description: "Private equity, sovereign funds & multinationals expanding across Africa",
  },
];

const MANDATE_TYPES = [
  { id: "FIELD_RESEARCH", label: "Field Survey / Kiosk Census" },
  { id: "BRAND_TRACKING", label: "Longitudinal Brand Tracker" },
  { id: "DEAL_ROOM", label: "B2B Deal Room / Sourcing" },
  { id: "STRATEGIC_ADVISORY", label: "Executive Scoping Brief" },
];

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<string>("ENTERPRISE_BRAND");
  const [mandateType, setMandateType] = useState<string>("FIELD_RESEARCH");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    targetMarket: "PAN_AFRICA_CORRIDORS",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-lg border border-border/80 bg-card text-center space-y-4 animate-in fade-in">
        <div className="size-12 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
          <CheckCircle2 className="size-6" />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            INTAKE MEMO REGISTERED
          </span>
          <h4 className="text-lg font-bold text-foreground">
            Consultation Briefing Dispatched
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Your commercial brief has been routed to our regional sector directors in Nairobi. A tailored scoping memo, sample power calculation, and bilateral NDA protocol will be issued within 6 business hours.
        </p>

        <div className="p-3 rounded-md bg-muted/40 border border-border/60 text-left font-mono text-[11px] space-y-1 max-w-md mx-auto">
          <div className="flex justify-between text-muted-foreground">
            <span>INTAKE DOSSIER ID:</span>
            <span className="font-bold text-foreground">STR-BRIEF-2026-X09</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>PRIMARY DESK:</span>
            <span className="font-bold text-foreground">Nairobi Operations Command</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>RESPONSE WINDOW:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">&lt; 6 Business Hours</span>
          </div>
        </div>

        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold text-primary underline hover:text-primary/80 pt-2 cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
      {/* Persona Selector Tabs */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
          <User className="size-3 text-primary" />
          <span>I AM REPRESENTING:</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "ENTERPRISE_BRAND", label: "Enterprise / Brand" },
            { id: "INVESTOR", label: "Institutional Fund / PE" },
            { id: "DISTRIBUTOR", label: "Trade / Distributor" },
          ].map((item) => (
            <button
              type="button"
              suppressHydrationWarning
              key={item.id}
              onClick={() => setRole(item.id)}
              className={`py-2 px-2 text-xs font-semibold rounded-md border text-center transition-all cursor-pointer ${
                role === item.id
                  ? "bg-card border-primary text-foreground shadow-xs ring-1 ring-primary/20"
                  : "bg-background text-muted-foreground border-border hover:border-foreground/30 hover:bg-muted/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Operational Mandate Type Selector */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="size-3 text-primary" />
          <span>PRIMARY OPERATIONAL MANDATE:</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {MANDATE_TYPES.map((m) => (
            <button
              type="button"
              suppressHydrationWarning
              key={m.id}
              onClick={() => setMandateType(m.id)}
              className={`py-1.5 px-2 text-[11px] font-medium rounded-md border text-center transition-all cursor-pointer truncate ${
                mandateType === m.id
                  ? "bg-primary/10 border-primary/60 text-primary font-bold"
                  : "bg-background text-muted-foreground border-border/80 hover:bg-muted/40"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Corporate Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="space-y-1">
          <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
            <User className="size-3 text-muted-foreground" /> Full Name *
          </label>
          <input
            required
            suppressHydrationWarning
            type="text"
            placeholder="e.g. Sarah Adebayo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
            <Mail className="size-3 text-muted-foreground" /> Corporate Email *
          </label>
          <input
            required
            suppressHydrationWarning
            type="email"
            placeholder="e.g. s.adebayo@multinational.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Company & Target Market Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="space-y-1">
          <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
            <Building2 className="size-3 text-muted-foreground" /> Organization / Firm *
          </label>
          <input
            required
            suppressHydrationWarning
            type="text"
            placeholder="e.g. Diageo / Unilever / Capital Fund"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-foreground">
            Primary Target Market *
          </label>
          <ModernSelect
            options={MARKET_OPTIONS}
            value={formData.targetMarket}
            onChange={(val) => setFormData({ ...formData, targetMarket: val })}
          />
        </div>
      </div>

      {/* Message textarea */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
          <FileText className="size-3 text-muted-foreground" /> Commercial Objective / Inquiry Scope
        </label>
        <textarea
          suppressHydrationWarning
          rows={3}
          placeholder="Briefly describe your geographic scope, research questions, or commercial objective (e.g. informal retail pricing elasticity, distributor warehouse verification, Asia factory sourcing)..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-md border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        suppressHydrationWarning
        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-sm active:scale-[0.99] cursor-pointer"
      >
        <Send className="size-3.5" />
        <span>Dispatch Briefing to Sector Directors</span>
      </button>

      <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground pt-1 gap-1">
        <span className="flex items-center gap-1">
          <Shield className="size-3 text-emerald-500" />
          Strict Bilateral Mutual NDA &amp; Data Security Protected
        </span>
        <span className="font-mono text-[10px] text-foreground font-medium flex items-center gap-1">
          <Clock className="size-2.5 text-primary" />
          SLA: &lt; 6 Business Hours
        </span>
      </div>
    </form>
  );
}
