"use client";

import { useTheme } from "@/components/theme-provider";
import { Cpu, Database, Cloud, Shield, GitBranch, Terminal } from "lucide-react";

const skills = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Design and implement scalable cloud solutions across AWS, GCP, and Azure.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    items: ["AWS (EC2, EKS, Lambda)", "GCP (GKE, Cloud Run)", "Azure (AKS, Functions)", "Multi-cloud strategies"],
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Build automated deployment pipelines that deliver code reliably and efficiently.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
  },
  {
    icon: Terminal,
    title: "Infrastructure as Code",
    description: "Automate infrastructure provisioning with modern IaC tools and practices.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    items: ["Terraform", "Pulumi", "CloudFormation", "Ansible"],
  },
  {
    icon: Database,
    title: "Container Orchestration",
    description: "Deploy and manage containerized applications at scale with Kubernetes.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    items: ["Kubernetes", "Docker", "Helm Charts", "Service Mesh"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement security best practices and ensure regulatory compliance.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    items: ["SOC2 Compliance", "Secret Management", "Network Security", "RBAC"],
  },
  {
    icon: Cpu,
    title: "Monitoring & Observability",
    description: "Build comprehensive monitoring solutions for system reliability.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    items: ["Prometheus", "Grafana", "DataDog", "ELK Stack"],
  },
];

export function SkillsSection() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 px-4 ${
      theme === "dark" ? "bg-neutral-950" : "bg-white"
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}>
            Technical Expertise
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === "dark" ? "text-neutral-400" : "text-neutral-600"
          }`}>
            Leveraging modern DevOps practices and cloud technologies to build
            reliable, scalable infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all hover:scale-[1.02] card-glow ${
                  theme === "dark"
                    ? "bg-neutral-900 border-neutral-800"
                    : "bg-white border-neutral-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${skill.bgColor}`}>
                    <Icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-neutral-900"
                }`}>
                  {skill.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                }`}>
                  {skill.description}
                </p>
                <ul className="space-y-1">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-center gap-2 ${
                        theme === "dark" ? "text-neutral-500" : "text-neutral-500"
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full ${skill.color.replace('text-', 'bg-')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
