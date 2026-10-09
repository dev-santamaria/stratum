"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ResearchStudioSkeleton } from "@/components/research/research-studio-skeleton";

const DynamicMarketResearchInsights = dynamic(
  () =>
    import("@/components/landing/market-research-insights").then(
      (mod) => mod.MarketResearchInsights
    ),
  {
    ssr: false,
    loading: () => <ResearchStudioSkeleton />,
  }
);

interface ResearchStudioWrapperProps {
  initialSurveyId?: string;
  embeddedInHub?: boolean;
}

export function ResearchStudioWrapper({
  initialSurveyId,
  embeddedInHub = true,
}: ResearchStudioWrapperProps) {
  return (
    <DynamicMarketResearchInsights
      initialSurveyId={initialSurveyId}
      embeddedInHub={embeddedInHub}
    />
  );
}
