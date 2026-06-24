export type Project = {
  slug: string;
  title: string;
  description: string;
  summary?: string; // Alias for description for compatibility
  tags: string[];
  tech?: string[]; // Alias for tags
  github?: string;
  repoUrl?: string; // Alias for github
  link?: string;
  liveUrl?: string; // Alias for link
  blogUrl?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "kubernetes-auto-scaler",
    title: "Kubernetes Auto-Scaler",
    description: "Custom HPA controller that scales pods based on real-time metrics from Prometheus and business KPIs.",
    summary: "Custom HPA controller that scales pods based on real-time metrics from Prometheus and business KPIs.",
    tags: ["Kubernetes", "Go", "Prometheus"],
    tech: ["Kubernetes", "Go", "Prometheus"],
    github: "#",
    repoUrl: "#",
    link: "#",
  },
  {
    slug: "terraform-aws-modules",
    title: "Terraform AWS Modules",
    description: "Production-ready Terraform modules for AWS infrastructure with built-in security best practices.",
    summary: "Production-ready Terraform modules for AWS infrastructure with built-in security best practices.",
    tags: ["Terraform", "AWS", "IaC"],
    tech: ["Terraform", "AWS", "IaC"],
    github: "#",
    repoUrl: "#",
  },
  {
    slug: "gitops-pipeline",
    title: "GitOps Pipeline",
    description: "End-to-end GitOps deployment pipeline using ArgoCD with automatic rollback capabilities.",
    summary: "End-to-end GitOps deployment pipeline using ArgoCD with automatic rollback capabilities.",
    tags: ["ArgoCD", "GitOps", "Kubernetes"],
    tech: ["ArgoCD", "GitOps", "Kubernetes"],
    github: "#",
    repoUrl: "#",
  },
  {
    slug: "cloud-cost-optimizer",
    title: "Cloud Cost Optimizer",
    description: "Automated cost analysis tool that identifies unused resources and rightsizing opportunities.",
    summary: "Automated cost analysis tool that identifies unused resources and rightsizing opportunities.",
    tags: ["Python", "AWS", "GCP"],
    tech: ["Python", "AWS", "GCP"],
    github: "#",
    repoUrl: "#",
  },
  {
    slug: "incident-response-bot",
    title: "Incident Response Bot",
    description: "Slack bot that automates incident response workflows and integrates with PagerDuty.",
    summary: "Slack bot that automates incident response workflows and integrates with PagerDuty.",
    tags: ["Node.js", "Slack API", "PagerDuty"],
    tech: ["Node.js", "Slack API", "PagerDuty"],
    github: "#",
    repoUrl: "#",
  },
];
