"use client";

import { useTheme } from "@/components/theme-provider";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`h-full p-6 rounded-xl border transition-all card-glow ${
        theme === "dark"
          ? "bg-neutral-900 border-neutral-800 hover:border-emerald-500/30"
          : "bg-white border-neutral-200 hover:border-emerald-300 shadow-sm hover:shadow-md"
      } ${featured ? "min-h-[200px]" : ""}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3
            className={`font-semibold ${
              featured ? "text-xl" : "text-lg"
            } ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-md transition-colors ${
                  theme === "dark"
                    ? "text-neutral-500 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <Github size={16} />
              </a>
            )}
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-md transition-colors ${
                  theme === "dark"
                    ? "text-neutral-500 hover:text-white hover:bg-neutral-800"
                    : "text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p
          className={`text-sm mb-4 flex-grow ${
            theme === "dark" ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-md text-xs font-medium ${
                theme === "dark"
                  ? "bg-neutral-800 text-neutral-400"
                  : "bg-neutral-100 text-neutral-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
