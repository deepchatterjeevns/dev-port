"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { useTheme } from "@/components/theme-provider";
import type { Metadata } from "next";

// Note: Metadata export doesn't work with "use client" components
// Consider creating a layout.tsx or converting to server component if SEO is critical

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <main className={theme === "dark" ? "bg-neutral-950" : "bg-white"}>
      <Header />
      <div className="min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Projects
            </h1>
            <p className={theme === "dark" ? "text-neutral-400" : "text-neutral-600"}>
              Open-source tools and infrastructure projects I&apos;ve built
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
