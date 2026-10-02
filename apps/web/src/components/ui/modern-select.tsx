"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Globe2 } from "lucide-react";

export interface ModernSelectOption {
  value: string;
  label: string;
  group?: string;
  badge?: string;
  description?: string;
}

interface ModernSelectProps {
  options: ModernSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function ModernSelect({
  options,
  value,
  onChange,
  placeholder = "Select target market...",
  className = "",
  disabled = false,
}: ModernSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Group options by group property
  const groupedOptions: Record<string, ModernSelectOption[]> = {};
  options.forEach((opt) => {
    const groupName = opt.group || "All Markets";
    if (!groupedOptions[groupName]) {
      groupedOptions[groupName] = [];
    }
    groupedOptions[groupName].push(opt);
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      suppressHydrationWarning
    >
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        suppressHydrationWarning
        className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-lg border text-left text-xs transition-all duration-200 ${
          isOpen
            ? "border-primary/70 ring-2 ring-primary/20 bg-background shadow-sm"
            : "border-border bg-background hover:border-foreground/30 hover:bg-muted/30"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <div className="flex items-center gap-2 truncate">
          <Globe2 className="size-3.5 text-primary shrink-0" />
          <span className="truncate font-medium text-foreground">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.badge && (
            <span className="hidden sm:inline-block text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded bg-primary/10 text-primary border border-primary/20">
              {selectedOption.badge}
            </span>
          )}
        </div>

        <ChevronDown
          className={`size-3.5 text-muted-foreground shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-foreground" : ""
          }`}
        />
      </button>

      {/* Dropdown Floating Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-50 mt-1.5 w-full min-w-[280px] rounded-xl border border-border/80 bg-background/98 backdrop-blur-2xl shadow-2xl p-1.5 space-y-1 max-h-72 overflow-y-auto scrollbar-thin animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {Object.entries(groupedOptions).map(([groupTitle, groupItems]) => (
            <div key={groupTitle} className="space-y-1">
              <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80 font-mono">
                {groupTitle}
              </div>

              {groupItems.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    suppressHydrationWarning
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-start justify-between gap-2.5 px-2.5 py-2 rounded-lg text-left text-xs transition-colors ${
                      isSelected
                        ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                        : "text-foreground hover:bg-muted/70"
                    }`}
                  >
                    <div className="space-y-0.5 truncate">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="truncate">{opt.label}</span>
                        {opt.badge && (
                          <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-muted text-muted-foreground">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      {opt.description && (
                        <p className="text-[10px] text-muted-foreground font-normal truncate">
                          {opt.description}
                        </p>
                      )}
                    </div>

                    {isSelected && (
                      <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
