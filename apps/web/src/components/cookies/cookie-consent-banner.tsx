"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Cookie,
  Sliders,
  Check,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "stratum_cookie_preferences_v1";

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    functional: true,
    marketing: false,
    timestamp: "",
  });

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPreferences(JSON.parse(saved));
        setShowBanner(false);
      } else {
        // Show after a subtle delay for smooth initial load
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setShowBanner(true);
    }

    // Listen for custom trigger to open settings from footer or cookie policy page
    const handleOpenSettings = () => {
      setShowModal(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const updated = { ...prefs, necessary: true, timestamp: new Date().toISOString() };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
      timestamp: "",
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
      timestamp: "",
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. Floating Bottom Cookie Consent Banner */}
      {showBanner && !showModal && (
        <aside
          aria-label="Cookie consent banner"
          className="fixed bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-auto sm:right-6 sm:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="rounded-2xl border border-border/80 bg-card/95 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                <Cookie className="size-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-foreground">
                    Cookie & Telemetry Governance
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-muted text-muted-foreground">
                    GDPR • POPIA • NDPR
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Stratum uses necessary cookies to secure platform operations, and optional telemetry to analyze emerging market research engagement and optimize user workflows.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 border-t border-border/60">
              <div className="flex items-center gap-3 text-xs text-muted-foreground w-full sm:w-auto">
                <Link
                  href="/cookies"
                  className="underline hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  <Sliders className="size-3" />
                  Customize Settings
                </button>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="w-1/2 sm:w-auto px-3.5 py-1.5 rounded-lg border border-border/80 hover:bg-muted text-xs font-semibold text-foreground transition-all"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-1/2 sm:w-auto px-4 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition-all shadow-sm"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Interactive Cookie Settings Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-border/60 pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                  <ShieldCheck className="size-3.5" />
                  PRIVACY PREFERENCE CENTER
                </div>
                <h2 id="cookie-settings-title" className="text-xl sm:text-2xl font-bold text-foreground">
                  Cookie & Telemetry Settings
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Choose which cookies and data telemetry frameworks you permit Stratum to utilize during your platform sessions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Close Modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-3.5">
              {/* Category 1: Strictly Necessary */}
              <div className="p-4 rounded-xl border border-border/80 bg-muted/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="size-4 text-emerald-500" />
                    <span className="text-xs font-bold text-foreground">
                      Strictly Necessary Cookies
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    ALWAYS ACTIVE
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Essential for platform security, authenticated sessions, CSRF validation, and fundamental system routing. Cannot be disabled.
                </p>
              </div>

              {/* Category 2: Analytics & Research Telemetry */}
              <div className="p-4 rounded-xl border border-border/80 bg-card hover:border-primary/40 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">
                    Analytics & Research Telemetry
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Allows Stratum to analyze aggregate platform usage, evaluate which research dossiers and interactive charts perform effectively, and enhance system stability across African network latencies.
                </p>
              </div>

              {/* Category 3: Functional & Localization */}
              <div className="p-4 rounded-xl border border-border/80 bg-card hover:border-primary/40 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">
                    Functional & Localization Preferences
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({ ...preferences, functional: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Stores your corridor preferences (East Africa, West Africa, Asia Trade Desk), custom currency preferences, and active research category filter settings.
                </p>
              </div>

              {/* Category 4: Deal Room & Tailored Communications */}
              <div className="p-4 rounded-xl border border-border/80 bg-card hover:border-primary/40 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">
                    Deal Room Matchmaking & Notifications
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Enables personalized notifications regarding newly cleared Deal Room counterpart opportunities, trade briefings, and invitation-only investor roundtables.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-border/60">
              <Link
                href="/cookies"
                onClick={() => setShowModal(false)}
                className="text-xs text-muted-foreground hover:text-foreground underline"
              >
                Read Full Cookie Disclosure
              </Link>
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="w-1/2 sm:w-auto px-4 py-2 rounded-xl border border-border/80 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Reject All Optional
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="w-1/2 sm:w-auto px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Save My Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
