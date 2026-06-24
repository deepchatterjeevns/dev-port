"use client";

import { useTheme } from "@/components/theme-provider";
import { Download } from "lucide-react";

export function PrintButton() {
  const { theme } = useTheme();

  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={`no-print inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
        theme === "dark"
          ? "border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
          : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
      }`}
    >
      <Download size={16} />
      Download PDF
    </button>
  );
}
