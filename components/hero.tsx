"use client";

import { ArrowDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center px-4 pt-16 ${
      theme === "dark" ? "bg-neutral-950" : "bg-gradient-to-b from-neutral-50 to-white"
    }`}>
      {/* Terminal Command */}
      <div className={`mb-6 px-4 py-2 rounded-lg text-sm font-mono ${
        theme === "dark" 
          ? "bg-neutral-900 text-emerald-400 border border-neutral-800" 
          : "bg-emerald-50 text-emerald-600 border border-emerald-200"
      }`}>
        <span className="opacity-70">$</span> DEPLOY-INFRASTRUCTURE --optimize=true --scale=auto
      </div>

      {/* Terminal Prompt */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-neutral-900"
        }`}>
          deep@devops:~$
          <span className="gradient-text"> whoami</span>
          <span className={`cursor-blink ml-1 ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-500"
          }`}>_</span>
        </h1>
        
        <p className={`text-xl sm:text-2xl mt-4 ${
          theme === "dark" ? "text-neutral-300" : "text-neutral-700"
        }`}>
          <span className="opacity-60">&gt;</span> DevOps & Cloud Engineer
        </p>
      </div>

      {/* Description */}
      <p className={`max-w-2xl text-center text-lg mb-8 ${
        theme === "dark" ? "text-neutral-400" : "text-neutral-600"
      }`}>
        Architecting cloud-native infrastructure, automating deployment pipelines,
        and building scalable systems that power modern applications with enterprise reliability.
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "CI/CD"].map((tech) => (
          <span
            key={tech}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${
              theme === "dark"
                ? "bg-neutral-900 text-emerald-400 border-emerald-500/30 hover:border-emerald-500/60"
                : "bg-white text-emerald-600 border-emerald-200 hover:border-emerald-400 shadow-sm"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href="#projects"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            theme === "dark"
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25"
          }`}
        >
          Explore My Work
          <ArrowDown size={18} />
        </a>
        <a
          href="/resume"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all ${
            theme === "dark"
              ? "border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              : "border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-400"
          }`}
        >
          View Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6">
        {[
          { icon: "github", href: "#", label: "GitHub" },
          { icon: "linkedin", href: "#", label: "LinkedIn" },
          { icon: "mail", href: "mailto:deep@devopsbydc.com", label: "Email" },
        ].map((social) => (
          <a
            key={social.icon}
            href={social.href}
            target={social.href !== "#" && !social.href.startsWith("mailto:") ? "_blank" : undefined}
            rel={social.href !== "#" && !social.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
            className={`transition-colors ${
              theme === "dark"
                ? "text-neutral-500 hover:text-emerald-400"
                : "text-neutral-400 hover:text-emerald-500"
            }`}
            aria-label={social.label}
          >
            {social.icon === "github" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            )}
            {social.icon === "linkedin" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            )}
            {social.icon === "mail" && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className={theme === "dark" ? "text-neutral-600" : "text-neutral-400"} size={24} />
      </div>
    </section>
  );
}
