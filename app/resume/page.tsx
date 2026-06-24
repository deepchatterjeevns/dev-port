"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useTheme } from "@/components/theme-provider";
import { Download, Mail, MapPin, Globe, Linkedin, Github } from "lucide-react";

// Constants to avoid hydration issues
const CONTACT_EMAIL = "deep@devopsbydc.com";
const CONTACT_LOCATION = "Pune, India";
const CONTACT_WEBSITE = "deepchatterjee.com";

export default function ResumePage() {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen ${
        theme === "dark" ? "bg-neutral-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header with Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Resume</h1>
              <p className="text-muted-foreground mt-1">
                DevOps Engineer with 8+ years of experience
              </p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                theme === "dark"
                  ? "bg-emerald-500 text-black hover:bg-emerald-400"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>

          {/* Tip Box */}
          <div
            className={`mb-8 p-4 rounded-xl border ${
              theme === "dark"
                ? "bg-emerald-500/5 border-emerald-500/20"
                : "bg-emerald-50 border-emerald-200"
            }`}
          >
            <p className="text-sm text-muted-foreground">
              <strong>Tip:</strong> Keep a stable URL for recruiters. This page stays the same
              even when you update the PDF. Direct link:{" "}
              <code className="text-emerald-500">deepchatterjee.com/resume.pdf</code>
            </p>
          </div>

          {/* Contact Info */}
          <section
            className={`p-6 rounded-xl border mb-8 ${
              theme === "dark"
                ? "bg-neutral-900/50 border-neutral-800"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Deep Chatterjee</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-500" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-emerald-500">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-500" />
                <span>{CONTACT_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-emerald-500" />
                <span>{CONTACT_WEBSITE}</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-1 hover:text-emerald-500">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-emerald-500">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-8">
            <h2
              className={`text-xl font-semibold mb-4 pb-2 border-b ${
                theme === "dark" ? "border-neutral-800" : "border-gray-200"
              }`}
            >
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Results-driven DevOps Engineer with 8+ years of experience designing, implementing,
              and managing cloud infrastructure on AWS, GCP, and Azure. Expert in Kubernetes,
              Terraform, CI/CD pipelines, and GitOps practices. Proven track record of reducing
              deployment times by 75%, cutting cloud costs by 40%, and achieving 99.9% uptime
              for production systems.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2
              className={`text-xl font-semibold mb-4 pb-2 border-b ${
                theme === "dark" ? "border-neutral-800" : "border-gray-200"
              }`}
            >
              Experience
            </h2>

            <div className="space-y-6">
              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-neutral-900/30" : "bg-gray-50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold">Senior DevOps Engineer</h3>
                  <span className="text-sm text-emerald-500 font-mono">2021 - Present</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">TechCorp Inc.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Led migration of 50+ microservices to Kubernetes (EKS)</li>
                  <li>• Implemented GitOps with ArgoCD, reducing deployment time by 75%</li>
                  <li>• Built Terraform modules for multi-region AWS infrastructure</li>
                  <li>• Achieved 99.99% uptime SLA through proactive monitoring</li>
                </ul>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-neutral-900/30" : "bg-gray-50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold">DevOps Engineer</h3>
                  <span className="text-sm text-emerald-500 font-mono">2018 - 2021</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">CloudFirst Solutions</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Designed and maintained CI/CD pipelines using Jenkins/GitHub Actions</li>
                  <li>• Reduced cloud spend by 40% through cost optimization initiatives</li>
                  <li>• Implemented infrastructure as code with Terraform and CloudFormation</li>
                  <li>• Set up monitoring stack with Prometheus, Grafana, and ELK</li>
                </ul>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-neutral-900/30" : "bg-gray-50"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold">Systems Administrator</h3>
                  <span className="text-sm text-emerald-500 font-mono">2016 - 2018</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">StartupXYZ</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Managed on-premise and AWS infrastructure for 20+ applications</li>
                  <li>• Automated server provisioning with Ansible</li>
                  <li>• Implemented backup and disaster recovery solutions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2
              className={`text-xl font-semibold mb-4 pb-2 border-b ${
                theme === "dark" ? "border-neutral-800" : "border-gray-200"
              }`}
            >
              Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-emerald-500">Cloud Platforms</h4>
                <p className="text-sm text-muted-foreground">
                  AWS (EKS, EC2, Lambda, S3, RDS), GCP, Azure
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-emerald-500">Container & Orchestration</h4>
                <p className="text-sm text-muted-foreground">
                  Kubernetes, Docker, Helm, Istio
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-emerald-500">Infrastructure as Code</h4>
                <p className="text-sm text-muted-foreground">
                  Terraform, CloudFormation, Ansible, Pulumi
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-emerald-500">CI/CD & GitOps</h4>
                <p className="text-sm text-muted-foreground">
                  GitHub Actions, Jenkins, ArgoCD, GitLab CI
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-emerald-500">Monitoring & Observability</h4>
                <p className="text-sm text-muted-foreground">
                  Prometheus, Grafana, ELK Stack, Datadog
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-emerald-500">Languages & Scripting</h4>
                <p className="text-sm text-muted-foreground">
                  Python, Bash, Go, YAML, HCL
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2
              className={`text-xl font-semibold mb-4 pb-2 border-b ${
                theme === "dark" ? "border-neutral-800" : "border-gray-200"
              }`}
            >
              Certifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "AWS Solutions Architect - Associate",
                "Certified Kubernetes Administrator (CKA)",
                "HashiCorp Terraform Associate",
                "Azure DevOps Engineer Expert",
              ].map((cert, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    theme === "dark" ? "bg-neutral-900/30" : "bg-gray-50"
                  }`}
                >
                  <span className="text-emerald-500">✓</span>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
