import React from "react";

interface StratumLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  showSubtitle?: boolean;
  variant?: "default" | "dark" | "monochrome";
}

export function StratumLogo({
  className = "",
  size = "md",
  showWordmark = true,
  showSubtitle = true,
  variant = "default",
}: StratumLogoProps) {
  // Dimensions map with refined, elegant micro-type for the slogan
  const dimensions = {
    sm: { icon: 22, text: "text-base font-extrabold tracking-[0.2em]", sub: "text-[6.5px] tracking-[0.24em]" },
    md: { icon: 28, text: "text-lg font-black tracking-[0.22em]", sub: "text-[7.5px] tracking-[0.26em]" },
    lg: { icon: 36, text: "text-xl font-black tracking-[0.24em]", sub: "text-[8.5px] tracking-[0.28em]" },
    xl: { icon: 44, text: "text-2xl font-black tracking-[0.26em]", sub: "text-[9.5px] tracking-[0.3em]" },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Strata Icon */}
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="stratumGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#1E56FF" />
          </linearGradient>
          <linearGradient id="stratumGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E56FF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="stratumGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="stratumGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1E56FF" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Stratum Layer 1 (Bottom foundation: Ground-truth Research) */}
        <path
          d="M 14 68 L 52 86 L 86 70 L 48 52 Z"
          fill="url(#stratumGrad1)"
          filter="url(#stratumGlow)"
        />

        {/* Stratum Layer 2 (Middle layer: Proprietary Intelligence Graph) */}
        <path
          d="M 14 46 L 52 64 L 86 48 L 48 30 Z"
          fill="url(#stratumGrad2)"
          opacity="0.95"
        />

        {/* Stratum Layer 3 (Top apex: B2B Intermediation & Deal Room) */}
        <path
          d="M 14 24 L 52 42 L 86 26 L 48 8 Z"
          fill="url(#stratumGrad3)"
        />

        {/* Precision focal beacon node at apex */}
        <circle cx="86" cy="26" r="3.5" fill="#FFFFFF" />
        <circle cx="86" cy="26" r="6" stroke="#10B981" strokeWidth="1.5" opacity="0.8" />
      </svg>

      {/* Typography Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`tracking-[0.22em] ${dimensions.text} ${
                variant === "dark" ? "text-white" : "text-foreground"
              }`}
            >
              STRATUM
            </span>
          </div>
          {showSubtitle && (
            <span
              className={`font-semibold uppercase text-muted-foreground/75 mt-0.5 ${dimensions.sub}`}
            >
              Market Intelligence & Intermediation
            </span>
          )}
        </div>
      )}
    </div>
  );
}
