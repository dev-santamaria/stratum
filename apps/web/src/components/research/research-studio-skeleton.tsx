import React from "react";
import { BarChart3, Activity } from "lucide-react";

export function ResearchStudioSkeleton() {
  return (
    <div className="space-y-8 animate-pulse" id="published-surveys">
      {/* Header Skeleton */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border/70 pb-6">
        <div className="space-y-3 max-w-3xl">
          <div className="h-6 w-72 rounded-full bg-muted/80" />
          <div className="h-9 w-96 rounded-lg bg-muted" />
          <div className="h-4 w-full max-w-xl rounded bg-muted/60" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-44 rounded-lg bg-muted" />
          <div className="h-10 w-48 rounded-lg bg-muted" />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="p-3.5 rounded-xl border border-border/60 bg-card/60 h-24 flex flex-col justify-between"
          >
            <div className="h-3 w-12 rounded bg-muted/70" />
            <div className="h-4 w-28 rounded bg-muted" />
            <div className="h-3 w-20 rounded bg-muted/60" />
          </div>
        ))}
      </div>

      {/* Main Studio Showcase Skeleton */}
      <div className="p-6 rounded-2xl border border-border/70 bg-card/80 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/60 pb-5">
          <div className="space-y-2">
            <div className="h-5 w-48 rounded-full bg-muted" />
            <div className="h-7 w-80 rounded-lg bg-muted" />
          </div>
          <div className="h-8 w-44 rounded-lg bg-muted/70" />
        </div>

        {/* Chart Canvas Placeholder */}
        <div className="h-[360px] sm:h-[400px] w-full bg-muted/30 rounded-xl border border-border/50 flex flex-col items-center justify-center gap-3 text-muted-foreground">
          <Activity className="size-6 text-primary animate-spin" />
          <span className="text-xs font-mono font-medium">Initializing empirical telemetry datasets...</span>
        </div>
      </div>
    </div>
  );
}
