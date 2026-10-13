"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { StratumLogo } from "@/components/brand/stratum-logo";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  Check,
  Copy,
  ExternalLink,
  Layers,
  Sparkles,
  Download,
  Eye,
  Sliders,
  Palette,
} from "lucide-react";

export default function LogoPreviewPage() {
  const [selectedSize, setSelectedSize] = useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  >("md");
  const [selectedFormat, setSelectedFormat] = useState<"svg" | "png" | "image">(
    "svg"
  );
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [isFitted, setIsFitted] = useState(true);
  const [bgMode, setBgMode] = useState<"light" | "navy" | "dark" | "gradient">(
    "light"
  );
  const [copied, setCopied] = useState(false);

  const copySvgCode = () => {
    const rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" width="800" height="240">
  <defs>
    <linearGradient id="gTeal" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00B4D8"/>
      <stop offset="100%" stop-color="#0077B6"/>
    </linearGradient>
    <linearGradient id="gGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="gNavy" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <g transform="translate(40, 35)">
    <rect x="40" y="0" width="100" height="24" rx="12" fill="url(#gGold)"/>
    <rect x="15" y="36" width="125" height="24" rx="12" fill="url(#gTeal)"/>
    <rect x="35" y="72" width="125" height="24" rx="12" fill="url(#gNavy)"/>
    <rect x="15" y="108" width="95" height="24" rx="12" fill="url(#gGold)"/>
    <circle cx="135" cy="120" r="12" fill="url(#gTeal)"/>
    <circle cx="15" cy="12" r="10" fill="#0F172A"/>
  </g>
  <g transform="translate(230, 0)">
    <text x="0" y="115" font-family="'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="68" font-weight="900" letter-spacing="7" fill="#0F172A">STRATUM</text>
    <text x="4" y="150" font-family="'Inter', 'Helvetica Neue', Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="8" fill="#0077B6">RESEARCH &amp; ANALYTICS</text>
    <rect x="4" y="168" width="60" height="4" rx="2" fill="#D97706"/>
    <rect x="70" y="169" width="380" height="2" rx="1" fill="#CBD5E1"/>
  </g>
</svg>`;
    navigator.clipboard.writeText(rawSvg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBgStyle = () => {
    switch (bgMode) {
      case "navy":
        return "bg-[#0F172A] text-white border-slate-700";
      case "dark":
        return "bg-black text-white border-zinc-800";
      case "gradient":
        return "bg-gradient-to-br from-[#0F172A] via-[#0284C7]/20 to-[#0F172A] text-white border-sky-900/50";
      default:
        return "bg-white text-slate-900 border-slate-200 shadow-sm";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="size-3.5" /> Brand Identity Preview
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            STRATUM Corporate Brand Logo Showcase
          </h1>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Preview the new official STRATUM Research & Analytics identity
            system across formats (pure vector SVG and retina PNG), viewport
            scales, and theme environments.
          </p>
        </div>

        {/* Interactive Sandbox Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Sliders className="size-4 text-primary" /> Interactive Logo
              Studio
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* Copy SVG code */}
              <button
                onClick={copySvgCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                {copied ? (
                  <Check className="size-3.5 text-emerald-600" />
                ) : (
                  <Copy className="size-3.5" />
                )}
                {copied ? "Copied SVG" : "Copy SVG Code"}
              </button>

              {/* View Raw Assets */}
              <a
                href="/images/logo/StratumLogo.svg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                <Download className="size-3.5" /> StratumLogo.svg
              </a>
              <a
                href="/images/logo/StratumLogo.png"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                <Download className="size-3.5" /> StratumLogo.png
              </a>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* Format Selector */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Renderer Format</label>
              <div className="flex rounded-lg bg-slate-100 p-1">
                {(["svg", "png", "image"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`flex-1 py-1 px-2 rounded-md font-medium uppercase text-[11px] transition-all ${
                      selectedFormat === fmt
                        ? "bg-white text-primary shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {fmt === "image" ? "SVG Img" : fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Size Preset</label>
              <div className="flex rounded-lg bg-slate-100 p-1">
                {(["sm", "md", "lg", "xl", "2xl"] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`flex-1 py-1 px-1.5 rounded-md font-medium uppercase text-[11px] transition-all ${
                      selectedSize === sz
                        ? "bg-white text-primary shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Selector */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Preview Surface</label>
              <div className="flex rounded-lg bg-slate-100 p-1">
                {(["light", "navy", "dark", "gradient"] as const).map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setBgMode(bg)}
                    className={`flex-1 py-1 px-1.5 rounded-md font-medium capitalize text-[11px] transition-all ${
                      bgMode === bg
                        ? "bg-white text-primary shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Display Options</label>
              <div className="flex items-center gap-3 pt-1">
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showSubtitle}
                    onChange={(e) => setShowSubtitle(e.target.checked)}
                    className="rounded text-primary focus:ring-primary size-3.5"
                  />
                  <span>Subtitle</span>
                </label>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isFitted}
                    onChange={(e) => setIsFitted(e.target.checked)}
                    className="rounded text-primary focus:ring-primary size-3.5"
                  />
                  <span>Fitted ViewBox</span>
                </label>
              </div>
            </div>
          </div>

          {/* Interactive Sandbox Canvas */}
          <div
            className={`min-h-[220px] rounded-xl border p-8 flex flex-col items-center justify-center transition-all ${getBgStyle()}`}
          >
            <div className="p-4 rounded-lg flex items-center justify-center">
              <StratumLogo
                size={selectedSize}
                format={selectedFormat}
                showSubtitle={showSubtitle}
                fitted={isFitted}
                variant={bgMode === "light" ? "default" : "dark"}
              />
            </div>
            <div className="text-[11px] opacity-60 font-mono mt-3">
              Preset: {selectedSize.toUpperCase()} • Format: {selectedFormat.toUpperCase()} • Box: {isFitted ? "Fitted (Optimal)" : "Full 800x240"}
            </div>
          </div>
        </div>

        {/* Matrix of Sizes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Eye className="size-4 text-primary" /> Visual Hierarchy &amp; Scale Presets
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Light Matrix */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Light Background (Navbars, Invoices, Reports)
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">2XL (68px)</span>
                  <StratumLogo size="2xl" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">XL (54px)</span>
                  <StratumLogo size="xl" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">LG (44px)</span>
                  <StratumLogo size="lg" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">MD (36px — Default Navbar)</span>
                  <StratumLogo size="md" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">SM (28px)</span>
                  <StratumLogo size="sm" variant="default" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">XS (22px)</span>
                  <StratumLogo size="xs" variant="default" />
                </div>
              </div>
            </div>

            {/* Dark Matrix */}
            <div className="bg-[#0F172A] text-white rounded-xl border border-slate-800 p-6 space-y-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Deep Navy Surface (Hero Cards, Dark Footers)
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">2XL (68px)</span>
                  <StratumLogo size="2xl" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">XL (54px)</span>
                  <StratumLogo size="xl" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">LG (44px)</span>
                  <StratumLogo size="lg" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">MD (36px)</span>
                  <StratumLogo size="md" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">SM (28px)</span>
                  <StratumLogo size="sm" variant="dark" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">XS (22px)</span>
                  <StratumLogo size="xs" variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icon-Only / App Mark Section */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Layers className="size-4 text-primary" /> Icon-Only &amp; Micro-Contexts (Favicons, Mobile Marks)
          </div>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
            When space is limited (such as mobile headers, collapsed sidebars, or favicons), the multi-layered strata icon mark functions independently as an unmistakable corporate signature.
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-2">
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                <StratumLogo size="xl" showWordmark={false} />
              </div>
              <span className="text-[11px] font-mono text-slate-500">XL Mark</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <StratumLogo size="lg" showWordmark={false} />
              </div>
              <span className="text-[11px] font-mono text-slate-500">LG Mark</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="p-2.5 rounded-xl bg-[#0F172A] border border-slate-800">
                <StratumLogo size="md" showWordmark={false} variant="dark" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">Dark Mark</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="size-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <StratumLogo size="sm" showWordmark={false} />
              </div>
              <span className="text-[11px] font-mono text-slate-500">App Icon (48px)</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="size-8 rounded-lg bg-[#0F172A] flex items-center justify-center shadow-xs">
                <StratumLogo size="xs" showWordmark={false} variant="dark" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">Favicon (32px)</span>
            </div>
          </div>
        </div>

        {/* Color Palette Specifications */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Palette className="size-4 text-primary" /> Brand Color Palette Reference
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-10 rounded-lg bg-gradient-to-r from-[#00B4D8] to-[#0077B6]" />
              <div className="text-xs font-bold text-slate-900">Tech Cyan / Data Teal</div>
              <div className="text-[11px] font-mono text-slate-500">#00B4D8 → #0077B6</div>
              <div className="text-[11px] text-slate-600">Modern tech telemetry &amp; quantitative synthesis</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-10 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706]" />
              <div className="text-xs font-bold text-slate-900">Warm Amber / Kenya Sun</div>
              <div className="text-[11px] font-mono text-slate-500">#F59E0B → #D97706</div>
              <div className="text-[11px] text-slate-600">Pan-African soil, energy, &amp; market opportunity</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-10 rounded-lg bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
              <div className="text-xs font-bold text-slate-900">Deep Navy / Analytical Bedrock</div>
              <div className="text-[11px] font-mono text-slate-500">#0F172A → #1E293B</div>
              <div className="text-[11px] text-slate-600">Institutional rigor, trust, &amp; executive authority</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
