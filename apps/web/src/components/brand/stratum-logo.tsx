"use client";

import React from "react";
import Image from "next/image";

export interface StratumLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  showWordmark?: boolean;
  showSubtitle?: boolean;
  variant?: "default" | "dark" | "monochrome";
  format?: "svg" | "png" | "image";
  fitted?: boolean;
  priority?: boolean;
}

export function StratumLogo({
  className = "",
  size = "md",
  showWordmark = true,
  showSubtitle = true,
  variant = "default",
  format = "image",
  fitted = true,
  priority = true,
}: StratumLogoProps) {
  // Sizing definitions matching cropped aspect ratios:
  // stratLogo.jpeg is 1316 x 360 (approx 3.65:1 ratio)
  // stratfavicon.jpeg is 962 x 1034 (approx 0.93:1 ratio)
  // Dimensions calibrated for commanding visibility and readability
  const fullLogoSizes = {
    xs: { h: 32, w: 117, class: "h-8 sm:h-9 w-auto" },
    sm: { h: 42, w: 153, class: "h-10 sm:h-11 w-auto" },
    md: { h: 56, w: 204, class: "h-12 sm:h-13 md:h-14 lg:h-[56px] w-auto" },
    lg: { h: 70, w: 255, class: "h-16 sm:h-17 md:h-[70px] w-auto" },
    xl: { h: 88, w: 321, class: "h-20 sm:h-22 md:h-[88px] w-auto" },
    "2xl": { h: 110, w: 401, class: "h-24 sm:h-28 md:h-[110px] w-auto" },
  }[size] || { h: 56, w: 204, class: "h-12 sm:h-13 md:h-14 lg:h-[56px] w-auto" };

  const markSizes = {
    xs: { h: 32, w: 30, class: "h-8 sm:h-9 w-auto" },
    sm: { h: 42, w: 39, class: "h-10 sm:h-11 w-auto" },
    md: { h: 56, w: 52, class: "h-12 sm:h-13 md:h-14 lg:h-[56px] w-auto" },
    lg: { h: 70, w: 65, class: "h-16 sm:h-17 md:h-[70px] w-auto" },
    xl: { h: 88, w: 82, class: "h-20 sm:h-22 md:h-[88px] w-auto" },
    "2xl": { h: 110, w: 102, class: "h-24 sm:h-28 md:h-[110px] w-auto" },
  }[size] || { h: 56, w: 52, class: "h-12 sm:h-13 md:h-14 lg:h-[56px] w-auto" };

  const isDark = variant === "dark";
  const isMono = variant === "monochrome";

  // If wordmark is hidden, show the official Africa Ribbon Emblem (stratfavicon.png)
  if (!showWordmark) {
    return (
      <div
        className={`inline-flex items-center justify-center select-none shrink-0 ${
          isMono ? "grayscale contrast-125" : ""
        } ${className}`}
        role="img"
        aria-label="STRATUM Emblem"
      >
        <Image
          src="/images/logo/stratfavicon.png"
          alt="STRATUM Emblem"
          width={962}
          height={1034}
          priority={priority}
          className={`${markSizes.class} object-contain transition-transform duration-200 hover:scale-[1.02]`}
        />
      </div>
    );
  }

  // Full STRATUM RESEARCH Logo (stratLogo.jpeg)
  return (
    <div
      className={`inline-flex items-center select-none shrink-0 ${
        isDark
          ? "bg-white px-3 py-1.5 rounded-xl shadow-xs"
          : "mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:px-3 dark:py-1.5 dark:rounded-xl"
      } ${isMono ? "grayscale contrast-125" : ""} ${className}`}
      role="img"
      aria-label="STRATUM Research Logo"
    >
      <Image
        src="/images/logo/stratLogo.jpeg"
        alt="STRATUM Research"
        width={1316}
        height={360}
        priority={priority}
        className={`${fullLogoSizes.class} object-contain transition-transform duration-200 hover:scale-[1.01]`}
      />
    </div>
  );
}
