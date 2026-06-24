"use client";

import { useTheme } from "@/components/theme-provider";
import { KofiButton } from "./kofi-button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@deepchatterjee.com", label: "Email" },
  ];

  return (
    <footer
      className={`py-12 px-4 border-t ${theme === "dark"
        ? "bg-neutral-950 border-neutral-800"
        : "bg-neutral-50 border-neutral-200"
        }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className={`font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
              DevOpsbyDC
            </div>
            <p className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"
              }`}>
              © 2024 Deep Chatterjee. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.href !== "#" && !social.href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={social.href !== "#" && !social.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                  className={`p-2 rounded-lg transition-colors ${theme === "dark"
                    ? "text-neutral-500 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200"
                    }`}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Ko-fi Button */}
          <KofiButton variant="compact" />
        </div>
      </div>
    </footer>
  );
}
