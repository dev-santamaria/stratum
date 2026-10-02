"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, FileText, TrendingUp, Mail, Layers } from "lucide-react";

export function MobilePwaBar() {
  const pathname = usePathname();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: Compass,
      isActive: pathname === "/",
    },
    {
      label: "Solutions",
      href: "/solutions",
      icon: Layers,
      isActive: pathname === "/solutions",
    },
    {
      label: "Reports",
      href: "/reports",
      icon: FileText,
      isActive: pathname === "/reports",
    },
    {
      label: "Insights",
      href: "/insights",
      icon: TrendingUp,
      isActive: pathname === "/insights",
    },
    {
      label: "Talk",
      href: "/contact",
      icon: Mail,
      isActive: pathname === "/contact",
      highlight: true,
    },
  ];

  return (
    <aside
      aria-label="Mobile Application Navigation"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden border-t border-border/80 bg-background/95 backdrop-blur-xl px-2 py-1.5 shadow-2xl transition-all"
    >
      <nav className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          if (item.highlight) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center px-3 py-1 rounded-xl bg-primary text-primary-foreground font-bold text-[10px] shadow-sm active:scale-95 transition-transform"
              >
                <Icon className="size-4 mb-0.5" />
                <span>{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg text-[10px] transition-colors ${
                item.isActive
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-4 mb-0.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
