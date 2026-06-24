"use client";

import { useTheme } from "@/components/theme-provider";
import { projects, type Project } from "@/lib/data/projects";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, FileText } from "lucide-react";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { theme } = useTheme();

  return (
    <article
      className={`group p-6 rounded-xl border transition-all duration-300 h-full ${
        theme === "dark"
          ? "bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/30"
          : "bg-white border-gray-200 hover:border-emerald-500/50 hover:shadow-lg"
      } ${featured ? "card-glow" : ""}`}
    >
      <h3
        className={`font-semibold ${
          featured ? "text-xl" : "text-lg"
        } ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        {project.title}
      </h3>

      <p
        className={`mt-3 text-sm leading-relaxed ${
          theme === "dark" ? "text-neutral-400" : "text-gray-600"
        }`}
      >
        {project.summary}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <ul
          className={`mt-3 text-sm space-y-1 ${
            theme === "dark" ? "text-neutral-500" : "text-gray-500"
          }`}
        >
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">•</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`px-2 py-1 rounded-full text-xs font-medium border ${
              theme === "dark"
                ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                : "border-emerald-500/30 text-emerald-600 bg-emerald-50"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {project.repoUrl && project.repoUrl !== "#" && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 transition-colors ${
              theme === "dark"
                ? "text-neutral-400 hover:text-emerald-400"
                : "text-gray-600 hover:text-emerald-600"
            }`}
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 transition-colors ${
              theme === "dark"
                ? "text-neutral-400 hover:text-emerald-400"
                : "text-gray-600 hover:text-emerald-600"
            }`}
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
        {project.blogUrl && project.blogUrl !== "#" && (
          <a
            href={project.blogUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 transition-colors ${
              theme === "dark"
                ? "text-neutral-400 hover:text-emerald-400"
                : "text-gray-600 hover:text-emerald-600"
            }`}
          >
            <FileText size={14} />
            Write-up
          </a>
        )}
      </div>
    </article>
  );
}

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
            <h2
              className={`text-3xl font-bold mb-2 ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}
            >
              Featured <span className="text-emerald-500">Projects</span>
            </h2>
            <p
              className={
                theme === "dark" ? "text-neutral-400" : "text-neutral-600"
              }
            >
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
