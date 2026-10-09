import React from "react";

export interface StratumLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  showSubtitle?: boolean;
  variant?: "default" | "dark" | "monochrome";
  markStyle?: "tri-strata" | "monogram-s" | "geodetic";
}

export function StratumLogo({
  className = "",
  size = "md",
  showWordmark = true,
  showSubtitle = true,
  variant = "default",
  markStyle = "tri-strata",
}: StratumLogoProps) {
  // Dimensions map with refined, elegant micro-type for executive legibility
  const dimensions = {
    sm: { icon: 22, text: "text-base font-extrabold tracking-[0.22em]", sub: "text-[6.5px] tracking-[0.24em]" },
    md: { icon: 28, text: "text-lg font-black tracking-[0.24em]", sub: "text-[7.5px] tracking-[0.26em]" },
    lg: { icon: 36, text: "text-xl font-black tracking-[0.26em]", sub: "text-[8.5px] tracking-[0.28em]" },
    xl: { icon: 44, text: "text-2xl font-black tracking-[0.28em]", sub: "text-[9.5px] tracking-[0.3em]" },
  }[size];

  // Resolve color palette based on variant
  const iconColors = {
    default: {
      tier1: "fill-foreground",
      tier2: "fill-primary",
      tier3: "fill-primary/80",
      accent: "stroke-primary/50",
    },
    dark: {
      tier1: "fill-white",
      tier2: "fill-blue-500",
      tier3: "fill-blue-400",
      accent: "stroke-blue-400/60",
    },
    monochrome: {
      tier1: "fill-foreground",
      tier2: "fill-foreground/80",
      tier3: "fill-foreground/60",
      accent: "stroke-foreground/40",
    },
  }[variant];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Institutional Vector Mark */}
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-102"
        aria-label="Stratum Corporate Mark"
      >
        {markStyle === "tri-strata" && (
          <g>
            {/* Tier 1: Apex - Strategic Intelligence & Capital Allocation */}
            <path
              d="M 36 20 H 84 L 78 34 H 30 L 36 20 Z"
              className={iconColors.tier3}
            />

            {/* Tier 2: Core - Quantitative Synthesis & Longitudinal Panels */}
            <path
              d="M 22 43 H 84 L 78 57 H 16 L 22 43 Z"
              className={iconColors.tier2}
            />

            {/* Tier 3: Bedrock - Ground-Truth Informal Retail & Factory Audits */}
            <path
              d="M 8 66 H 84 L 78 80 H 2 L 8 66 Z"
              className={iconColors.tier1}
            />

            {/* Precision Datum Verification Tick: Right Vertical Alignment Axis */}
            <line
              x1="90"
              y1="18"
              x2="90"
              y2="82"
              className={iconColors.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2 5"
            />
          </g>
        )}

        {markStyle === "monogram-s" && (
          <g>
            {/* Upper Strata Facet */}
            <path
              d="M 20 20 H 76 C 80.4 20 84 23.6 84 28 V 38 H 42 L 34 48 H 18 V 28 C 18 23.6 21.6 20 26 20 Z"
              className={iconColors.tier2}
            />
            {/* Central Diagonal Horizon */}
            <path
              d="M 24 48 H 70 L 76 56 H 20 L 24 48 Z"
              className={iconColors.tier3}
            />
            {/* Lower Bedrock Facet */}
            <path
              d="M 82 52 V 72 C 82 76.4 78.4 80 74 80 H 20 C 15.6 80 12 76.4 12 72 V 62 H 54 L 62 52 H 82 Z"
              className={iconColors.tier1}
            />
          </g>
        )}

        {markStyle === "geodetic" && (
          <g>
            {/* Geodetic Structural Boundary */}
            <path
              d="M 50 14 L 84 32 V 68 L 50 86 L 16 68 V 32 Z"
              className={iconColors.accent}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Horizon Strata 1 */}
            <line x1="28" y1="36" x2="72" y2="36" className={iconColors.tier3} strokeWidth="5" strokeLinecap="round" />
            {/* Horizon Strata 2 (Primary Center Meridian) */}
            <line x1="22" y1="50" x2="78" y2="50" className={iconColors.tier2} strokeWidth="5.5" strokeLinecap="round" />
            {/* Horizon Strata 3 */}
            <line x1="28" y1="64" x2="72" y2="64" className={iconColors.tier1} strokeWidth="5" strokeLinecap="round" />
          </g>
        )}
      </svg>

      {/* Typography Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`tracking-[0.24em] ${dimensions.text} ${
                variant === "dark" ? "text-white" : "text-foreground"
              }`}
            >
              STRATUM
            </span>
          </div>
          {showSubtitle && (
            <span
              className={`font-semibold uppercase tracking-[0.24em] text-muted-foreground/80 mt-0.5 ${dimensions.sub}`}
            >
              Market Intelligence
            </span>
          )}
        </div>
      )}
    </div>
  );
}
