"use client";

import React, { useState } from "react";
import { CheckCircle2, Shield, Send, Building2, User, Mail, FileText } from "lucide-react";
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

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<string>("ENTERPRISE_BRAND");
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
      <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 text-center space-y-4 animate-in fade-in">
        <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="size-6" />
        </div>
        <h4 className="text-xl font-bold text-foreground">
          Consultation Request Dispatched
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          A STRATUM regional market director will review your brief and contact you within 6 business hours with relevant sector telemetry and preliminary scoping.
        </p>
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold text-primary underline hover:text-primary/80 pt-2"
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
        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
          I am reaching out as:
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "ENTERPRISE_BRAND", label: "Brand / FMCG" },
            { id: "INVESTOR", label: "Investor / Fund" },
            { id: "DISTRIBUTOR", label: "Local Distributor" },
          ].map((item) => (
            <button
              type="button"
              suppressHydrationWarning
              key={item.id}
              onClick={() => setRole(item.id)}
              className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                role === item.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background text-muted-foreground border-border hover:border-foreground/30 hover:bg-muted/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Email Row */}
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
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/60 transition-all"
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
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/60 transition-all"
          />
        </div>
      </div>

      {/* Company & Modern Target Market Select Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="space-y-1">
          <label className="text-xs font-medium text-foreground flex items-center gap-1.5">
            <Building2 className="size-3 text-muted-foreground" /> Organization / Firm *
          </label>
          <input
            required
            suppressHydrationWarning
            type="text"
            placeholder="e.g. Diageo / Unilever / Growth Fund"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/60 transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-foreground">
            Primary Target Market *
          </label>
          {/* Custom Modern Select replacing native dropdown */}
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
          placeholder="Briefly describe what you are looking to understand, validate, or execute (e.g. concept testing, market entry, distributor matchmaking, deal room access)..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/60 transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        suppressHydrationWarning
        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-md active:scale-[0.99]"
      >
        <Send className="size-3.5" />
        Talk to Stratum — Request Executive Briefing
      </button>

      <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
        <span className="flex items-center gap-1">
          <Shield className="size-3 text-emerald-500" />
          Strict Commercial Confidentiality & Mutual NDA
        </span>
        <span className="font-mono text-[10px]">Avg response: &lt; 6 hrs</span>
      </div>
    </form>
  );
}
