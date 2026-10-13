"use client";

import React, { useId } from "react";
import Image from "next/image";

export interface StratumLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  showWordmark?: boolean;
  showSubtitle?: boolean;
  variant?: "default" | "dark" | "monochrome";
  format?: "svg" | "png" | "image";
  fitted?: boolean;
}

export function StratumLogo({
  className = "",
  size = "md",
  showWordmark = true,
  showSubtitle = true,
  variant = "default",
  format = "svg",
  fitted = true,
}: StratumLogoProps) {
  const uniqueId = useId().replace(/:/g, "_");
  const tealGradId = `gTeal_${uniqueId}`;
  const goldGradId = `gGold_${uniqueId}`;
  const navyGradId = `gNavy_${uniqueId}`;

  // Dimensions configuration for standard aspect ratios
  const sizeConfig = {
    xs: { h: 22, fullW: fitted ? 93 : 73, iconW: 24, class: "h-[22px]" },
    sm: { h: 28, fullW: fitted ? 118 : 93, iconW: 32, class: "h-[28px]" },
    md: { h: 36, fullW: fitted ? 152 : 120, iconW: 42, class: "h-[36px]" },
    lg: { h: 44, fullW: fitted ? 186 : 146, iconW: 52, class: "h-[44px]" },
    xl: { h: 54, fullW: fitted ? 228 : 180, iconW: 64, class: "h-[54px]" },
    "2xl": { h: 68, fullW: fitted ? 287 : 226, iconW: 80, class: "h-[68px]" },
  }[size];

  // Resolve color tokens based on color variant
  const isDark = variant === "dark";
  const isMono = variant === "monochrome";

  const textColor = isMono
    ? "currentColor"
    : isDark
      ? "#F8FAFC"
      : "#0F172A";

  const subColor = isMono
    ? "currentColor"
    : isDark
      ? "#38BDF8"
      : "#0077B6";

  const dividerDark = isDark ? "#334155" : "#CBD5E1";
  const dividerAccent = isMono ? "currentColor" : "#D97706";
  const nodeDark = isDark ? "#F8FAFC" : "#0F172A";

  // If PNG image format is explicitly requested
  if (format === "png") {
    return (
      <div
        className={`inline-flex items-center select-none transition-transform duration-200 hover:opacity-95 ${className}`}
      >
        <Image
          src="/images/logo/StratumLogo.png"
          alt="STRATUM Research & Analytics"
          width={1600}
          height={480}
          priority
          className={`${sizeConfig.class} w-auto object-contain`}
        />
      </div>
    );
  }

  // If SVG image file format is explicitly requested
  if (format === "image") {
    return (
      <div
        className={`inline-flex items-center select-none transition-transform duration-200 hover:opacity-95 ${className}`}
      >
        <Image
          src="/images/logo/StratumLogo.svg"
          alt="STRATUM Research & Analytics"
          width={800}
          height={240}
          priority
          className={`${sizeConfig.class} w-auto object-contain`}
        />
      </div>
    );
  }

  // Default: Pure Vector SVG for maximum fidelity and crisp rendering
  // Fitted viewBox trims empty perimeter whitespace for tight alignment in navbars
  const viewBox = !showWordmark
    ? "35 25 175 150"
    : fitted
      ? "35 25 655 155"
      : "0 0 800 240";

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      role="img"
      aria-label="STRATUM Research & Analytics Logo"
    >
      <svg
        viewBox={viewBox}
        className={`${sizeConfig.class} w-auto overflow-visible transition-transform duration-200 hover:scale-[1.01]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyan / Modern Tech Data Gradient */}
          <linearGradient id={tealGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>

          {/* Warm Amber / Kenya Soil & Sun Accent */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Deep Navy / Statistical Rigor & Authority */}
          <linearGradient id={navyGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor={isDark ? "#1E293B" : "#0F172A"}
            />
            <stop
              offset="100%"
              stopColor={isDark ? "#334155" : "#1E293B"}
            />
          </linearGradient>
        </defs>

        {/* ICON: Multi-Layered Symmetrical Strata with Data Points */}
        <g transform="translate(40, 35)">
          {/* Top Stratum */}
          <rect
            x="40"
            y="0"
            width="100"
            height="24"
            rx="12"
            fill={isMono ? "currentColor" : `url(#${goldGradId})`}
          />
          {/* Upper Data Stratum */}
          <rect
            x="15"
            y="36"
            width="125"
            height="24"
            rx="12"
            fill={isMono ? "currentColor" : `url(#${tealGradId})`}
          />
          {/* Core Analytical Bedrock */}
          <rect
            x="35"
            y="72"
            width="125"
            height="24"
            rx="12"
            fill={isMono ? "currentColor" : `url(#${navyGradId})`}
          />
          {/* Base Stratum */}
          <rect
            x="15"
            y="108"
            width="95"
            height="24"
            rx="12"
            fill={isMono ? "currentColor" : `url(#${goldGradId})`}
          />

          {/* Strategic Insight Nodes */}
          <circle
            cx="135"
            cy="120"
            r="12"
            fill={isMono ? "currentColor" : `url(#${tealGradId})`}
          />
          <circle
            cx="15"
            cy="12"
            r="10"
            fill={nodeDark}
          />
        </g>

        {/* TYPOGRAPHY */}
        {showWordmark && (
          <g transform="translate(230, 0)">
            {/* Company Name */}
            <text
              x="0"
              y="115"
              fontFamily="'Inter', 'Helvetica Neue', var(--font-satoshi), Arial, sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="7"
              fill={textColor}
            >
              STRATUM
            </text>

            {/* Category / Descriptor */}
            {showSubtitle && (
              <>
                <text
                  x="4"
                  y="150"
                  fontFamily="'Inter', 'Helvetica Neue', var(--font-satoshi), Arial, sans-serif"
                  fontSize="15"
                  fontWeight="700"
                  letterSpacing="8"
                  fill={subColor}
                >
                  RESEARCH &amp; ANALYTICS
                </text>

                {/* Structural Divider Accent */}
                <rect
                  x="4"
                  y="168"
                  width="60"
                  height="4"
                  rx="2"
                  fill={dividerAccent}
                />
                <rect
                  x="70"
                  y="169"
                  width="380"
                  height="2"
                  rx="1"
                  fill={dividerDark}
                />
              </>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
