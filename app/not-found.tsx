"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useTheme } from "@/components/theme-provider";
import { Home } from "lucide-react";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <main className={theme === "dark" ? "bg-neutral-950" : "bg-white"}>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className={`text-9xl font-bold mb-4 ${
            theme === "dark" ? "text-neutral-800" : "text-neutral-200"
          }`}>
            404
          </h1>
          <h2 className={`text-2xl font-semibold mb-4 ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}>
            Page not found
          </h2>
          <p className={`mb-8 ${
            theme === "dark" ? "text-neutral-400" : "text-neutral-600"
          }`}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              theme === "dark"
                ? "bg-emerald-500 text-white hover:bg-emerald-600"
                : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25"
            }`}
          >
            <Home size={18} />
            Go home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
