"use client";

import { useTheme } from "@/components/theme-provider";
import { Coffee } from "lucide-react";

interface KofiButtonProps {
  variant?: "default" | "compact";
}

export function KofiButton({ variant = "default" }: KofiButtonProps) {
  const { theme } = useTheme();

  // Update this with your Ko-fi username when ready
  const kofiUrl = "#";

  if (variant === "compact") {
    return (
      <a
        href={kofiUrl}
        target={kofiUrl !== "#" ? "_blank" : undefined}
        rel={kofiUrl !== "#" ? "noopener noreferrer" : undefined}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
          theme === "dark"
            ? "border-neutral-700 text-neutral-300 hover:border-amber-500/50 hover:text-amber-400"
            : "border-neutral-300 text-neutral-600 hover:border-amber-500 hover:text-amber-600"
        }`}
      >
        <Coffee size={16} />
        <span>Support</span>
      </a>
    );
  }

  return (
    <a
      href={kofiUrl}
      target={kofiUrl !== "#" ? "_blank" : undefined}
      rel={kofiUrl !== "#" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border transition-all ${
        theme === "dark"
          ? "bg-neutral-900 border-neutral-700 text-neutral-200 hover:border-amber-500/50 hover:bg-neutral-800"
          : "bg-white border-neutral-200 text-neutral-700 hover:border-amber-500 hover:bg-amber-50 shadow-sm"
      }`}
    >
      <div className={`p-2 rounded-lg ${
        theme === "dark" ? "bg-amber-500/10" : "bg-amber-100"
      }`}>
        <Coffee className="text-amber-500" size={20} />
      </div>
      <div className="text-left">
        <div className="font-medium">Buy me a coffee</div>
        <div className={`text-xs ${
          theme === "dark" ? "text-neutral-500" : "text-neutral-500"
        }`}>
          Support my work
        </div>
      </div>
    </a>
  );
}
