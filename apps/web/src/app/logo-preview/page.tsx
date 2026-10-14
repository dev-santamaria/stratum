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
  Compass,
  ArrowRight,
} from "lucide-react";

export default function LogoPreviewPage() {
  const [selectedSize, setSelectedSize] = useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  >("md");
  const [showWordmark, setShowWordmark] = useState(true);
  const [bgMode, setBgMode] = useState<"light" | "navy" | "dark" | "gradient">(
    "light"
  );
  const [copied, setCopied] = useState(false);

  const copyImgPath = () => {
    const assetPath = showWordmark
      ? "/images/logo/stratLogo.jpeg"
      : "/images/logo/stratfavicon.png";
    navigator.clipboard.writeText(assetPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBgStyle = () => {
    switch (bgMode) {
      case "navy":
        return "bg-[#002B49] text-white border-blue-900";
      case "dark":
        return "bg-[#051424] text-white border-slate-800";
      case "gradient":
        return "bg-gradient-to-br from-[#00182E] via-[#002B49] to-[#0A3D24] text-white border-emerald-900/50";
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
            <Sparkles className="size-3.5" /> Official Brand Identity System
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            STRATUM Research Brand Identity &amp; Color Theme
          </h1>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Preview the official STRATUM Research identity system featuring the Pan-African ribbon emblem, authoritative wordmark typography, and the unified Deep Navy &amp; African Emerald color architecture.
          </p>
        </div>

        {/* Interactive Sandbox Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Sliders className="size-4 text-primary" /> Interactive Brand Studio
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* Copy Path */}
              <button
                onClick={copyImgPath}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                {copied ? (
                  <Check className="size-3.5 text-emerald-600" />
                ) : (
                  <Copy className="size-3.5" />
                )}
                {copied ? "Copied Asset Path" : "Copy Asset Path"}
              </button>

              {/* View Raw Assets */}
              <a
                href="/images/logo/stratLogo.jpeg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                <Download className="size-3.5" /> Full Logo (stratLogo.jpeg)
              </a>
              <a
                href="/images/logo/stratfavicon.png"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors font-medium"
              >
                <Download className="size-3.5" /> Transparent Favicon (stratfavicon.png)
              </a>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {/* Display Mode (Full Logo vs Mark) */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Display Variant</label>
              <div className="flex rounded-lg bg-slate-100 p-1">
                <button
                  onClick={() => setShowWordmark(true)}
                  className={`flex-1 py-1 px-2 rounded-md font-medium text-[11px] transition-all ${
                    showWordmark
                      ? "bg-white text-primary shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Full Logo
                </button>
                <button
                  onClick={() => setShowWordmark(false)}
                  className={`flex-1 py-1 px-2 rounded-md font-medium text-[11px] transition-all ${
                    !showWordmark
                      ? "bg-white text-primary shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Emblem / Mark
                </button>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-700">Scale Preset</label>
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
          </div>

          {/* Interactive Sandbox Canvas */}
          <div
            className={`min-h-[240px] rounded-xl border p-8 flex flex-col items-center justify-center transition-all ${getBgStyle()}`}
          >
            <div className="p-4 rounded-xl flex items-center justify-center">
              <StratumLogo
                size={selectedSize}
                showWordmark={showWordmark}
                variant={bgMode === "light" ? "default" : "dark"}
              />
            </div>
            <div className="text-[11px] opacity-75 font-mono mt-3">
              Preset: {selectedSize.toUpperCase()} • Mode: {showWordmark ? "Full Logo (stratLogo.jpeg)" : "Transparent Emblem (stratfavicon.png)"} • Surface: {bgMode.toUpperCase()}
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
                Light Background (Navbars, Reports, Official Documents)
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">2XL (110px)</span>
                  <StratumLogo size="2xl" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">XL (88px)</span>
                  <StratumLogo size="xl" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">LG (70px)</span>
                  <StratumLogo size="lg" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">MD (56px — Active Navbar)</span>
                  <StratumLogo size="md" variant="default" />
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-mono">SM (42px)</span>
                  <StratumLogo size="sm" variant="default" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">XS (32px)</span>
                  <StratumLogo size="xs" variant="default" />
                </div>
              </div>
            </div>

            {/* Dark Matrix */}
            <div className="bg-[#002B49] text-white rounded-xl border border-blue-900 p-6 space-y-5">
              <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                Stratum Navy Surface (Hero Cards, Executive Dark Mode)
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                  <span className="text-xs text-blue-300 font-mono">2XL (110px)</span>
                  <StratumLogo size="2xl" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                  <span className="text-xs text-blue-300 font-mono">XL (88px)</span>
                  <StratumLogo size="xl" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                  <span className="text-xs text-blue-300 font-mono">LG (70px)</span>
                  <StratumLogo size="lg" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                  <span className="text-xs text-blue-300 font-mono">MD (56px)</span>
                  <StratumLogo size="md" variant="dark" />
                </div>
                <div className="flex items-center justify-between border-b border-blue-900/60 pb-3">
                  <span className="text-xs text-blue-300 font-mono">SM (42px)</span>
                  <StratumLogo size="sm" variant="dark" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300 font-mono">XS (32px)</span>
                  <StratumLogo size="xs" variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icon-Only / App Mark Section */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Layers className="size-4 text-primary" /> Africa Ribbon Emblem &amp; Favicon (stratfavicon.png)
          </div>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
            The stylized ribbon emblem enclosing the silhouette of Africa is provided as a transparent PNG asset, functioning seamlessly as the primary browser favicon, app icon, and standalone mark across light, dark, and colored environments without any white background box.
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-2">
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                <StratumLogo size="xl" showWordmark={false} />
              </div>
              <span className="text-[11px] font-mono text-slate-500">XL Mark (88px)</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <StratumLogo size="lg" showWordmark={false} />
              </div>
              <span className="text-[11px] font-mono text-slate-500">LG Mark (70px)</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="p-2.5 rounded-xl bg-[#002B49] border border-blue-900">
                <StratumLogo size="md" showWordmark={false} variant="dark" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">Navy Surface</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="size-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1">
                <StratumLogo size="sm" showWordmark={false} />
              </div>
              <span className="text-[11px] font-mono text-slate-500">App Icon (48px)</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="size-10 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center p-0.5">
                <StratumLogo size="xs" showWordmark={false} />
              </div>
              <span className="text-[11px] font-mono text-slate-500">Favicon (24px)</span>
            </div>
          </div>
        </div>

        {/* Color Palette Specifications Directly from Logo */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <Palette className="size-4 text-primary" /> Harmonized Brand Color Architecture
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-12 rounded-lg bg-[#002B49] shadow-xs" />
              <div className="text-xs font-bold text-slate-900">Stratum Midnight Navy</div>
              <div className="text-[11px] font-mono text-slate-500">#002B49 • Logo Typography</div>
              <div className="text-[11px] text-slate-600">Institutional rigor, trust &amp; market authority</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-12 rounded-lg bg-[#004B87] shadow-xs" />
              <div className="text-xs font-bold text-slate-900">Stratum Sapphire Blue</div>
              <div className="text-[11px] font-mono text-slate-500">#004B87 • Ribbon Highlight</div>
              <div className="text-[11px] text-slate-600">Primary interactive token &amp; analytical signal</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-12 rounded-lg bg-[#167D3C] shadow-xs" />
              <div className="text-xs font-bold text-slate-900">Pan-African Emerald</div>
              <div className="text-[11px] font-mono text-slate-500">#167D3C • African Continent</div>
              <div className="text-[11px] text-slate-600">Intermediation, commercial growth &amp; deal execution</div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="h-12 rounded-lg bg-[#64748B] shadow-xs" />
              <div className="text-xs font-bold text-slate-900">Research Platinum Slate</div>
              <div className="text-[11px] font-mono text-slate-500">#64748B • Structural Divider</div>
              <div className="text-[11px] text-slate-600">Subtitles, field metrics &amp; architectural precision</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
