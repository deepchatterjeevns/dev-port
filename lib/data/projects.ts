export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  blogUrl?: string;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "eks-ci-cd-platform",
    title: "EKS CI/CD Platform (Terraform + GitOps)",
    summary:
      "Production-grade EKS platform with Terraform, GitHub Actions/Jenkins, image scanning, and GitOps deployments.",
    tech: ["AWS", "EKS", "Terraform", "GitHub Actions", "Argo CD", "Trivy"],
    repoUrl: "#", // Update with your GitHub repo
    blogUrl: "#", // Update with your blog post
    highlights: [
      "Remote state (S3 + DynamoDB)",
      "GitOps deployments via Argo CD",
      "Security scanning pipeline (Trivy/SBOM-ready)",
    ],
  },
  {
    slug: "k8s-homelab",
    title: "Kubernetes Homelab Cluster",
    summary:
      "Multi-node K8s homelab on refurbished mini PCs with monitoring, ingress, and storage.",
    tech: ["Kubernetes", "Ubuntu Server", "Ingress", "Prometheus", "Grafana"],
    repoUrl: "#",
    highlights: [
      "Cluster audit scripts",
      "Ingress + TLS with cert-manager",
      "Metrics + logs stack",
    ],
  },
  {
    slug: "terraform-aws-modules",
    title: "Terraform AWS Modules",
    summary:
      "Production-ready Terraform modules for AWS infrastructure with built-in security best practices.",
    tech: ["Terraform", "AWS", "IaC", "Security"],
    repoUrl: "#",
    highlights: [
      "Reusable VPC/EKS/RDS modules",
      "Security hardening by default",
      "CI/CD integration examples",
    ],
  },
  {
    slug: "cloud-cost-optimizer",
    title: "Cloud Cost Optimizer",
    summary:
      "Automated cost analysis tool that identifies unused resources and rightsizing opportunities.",
    tech: ["Python", "AWS", "GCP", "Boto3", "Cost Explorer API"],
    repoUrl: "#",
    highlights: [
      "Multi-cloud support",
      "Slack notifications",
      "Weekly cost reports",
    ],
  },
  {
    slug: "gitops-pipeline",
    title: "GitOps Deployment Pipeline",
    summary:
      "End-to-end GitOps deployment pipeline using ArgoCD with automatic rollback capabilities.",
    tech: ["ArgoCD", "GitOps", "Kubernetes", "Helm"],
    repoUrl: "#",
    highlights: [
      "Automated sync & rollback",
      "Multi-environment support",
      "Slack deployment notifications",
    ],
  },
];
