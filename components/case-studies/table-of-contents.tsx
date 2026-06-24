"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import type { Heading } from "@/lib/mdx";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const { theme } = useTheme();
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // Close on mobile after clicking
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed top-20 right-4 z-40 p-2 rounded-lg border transition-colors ${
          theme === "dark"
            ? "bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800"
            : "bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50"
        }`}
        aria-label="Toggle table of contents"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* TOC Container */}
      <nav
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        } fixed lg:sticky top-24 right-0 lg:right-auto h-[calc(100vh-8rem)] overflow-y-auto z-30 transition-transform duration-300 lg:transition-none ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        } lg:bg-transparent border-l lg:border-l-0 border-t lg:border-t-0 lg:border-r border-border lg:pr-6 w-64 lg:w-auto`}
      >
        <div className="p-4 lg:p-0">
          <h2
            className={`text-sm font-semibold mb-4 ${
              theme === "dark" ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            Table of Contents
          </h2>
          <ul className="space-y-1">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHeading(heading.id);
                  }}
                  className={`block py-1 text-sm transition-colors ${
                    heading.level === 1
                      ? "pl-0 font-semibold"
                      : heading.level === 2
                      ? "pl-4"
                      : "pl-8"
                  } ${
                    activeId === heading.id
                      ? "text-emerald-500"
                      : theme === "dark"
                      ? "text-neutral-400 hover:text-neutral-200"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
