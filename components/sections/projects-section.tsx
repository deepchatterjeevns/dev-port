"use client";

import { useTheme } from "@/components/theme-provider";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`py-20 px-4 ${
        theme === "dark" ? "bg-neutral-900/50" : "bg-neutral-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className={`text-3xl font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Featured Projects
            </h2>
            <p className={theme === "dark" ? "text-neutral-400" : "text-neutral-600"}>
              Open-source tools and infrastructure projects
            </p>
          </div>
          <Link
            href="/projects"
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              theme === "dark"
                ? "text-emerald-400 hover:bg-emerald-500/10"
                : "text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(0, 5).map((project, index) => (
            <div
              key={project.slug}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={index === 0} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              theme === "dark"
                ? "text-emerald-400 hover:bg-emerald-500/10"
                : "text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
