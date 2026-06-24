"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrintButton } from "@/components/print-button";
import { useTheme } from "@/components/theme-provider";
import { Briefcase, GraduationCap, Award, MapPin, Mail, Download } from "lucide-react";

const experience = [
  {
    title: "Senior DevOps Engineer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    location: "San Francisco, CA",
    highlights: [
      "Led migration of 50+ microservices to Kubernetes, reducing deployment time by 75%",
      "Implemented GitOps workflow with ArgoCD, enabling 100+ deployments per week",
      "Reduced cloud costs by 40% through rightsizing and spot instance strategies",
      "Built observability platform with Prometheus, Grafana, and custom alerting",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "CloudScale Solutions",
    period: "2018 - 2021",
    location: "Austin, TX",
    highlights: [
      "Designed and maintained CI/CD pipelines for 30+ development teams",
      "Automated infrastructure provisioning with Terraform across AWS and GCP",
      "Implemented disaster recovery procedures with 99.9% uptime SLA",
      "Mentored junior engineers on DevOps best practices",
    ],
  },
  {
    title: "Systems Administrator",
    company: "DataFlow Inc.",
    period: "2016 - 2018",
    location: "Seattle, WA",
    highlights: [
      "Managed hybrid cloud infrastructure supporting 500+ users",
      "Automated routine tasks reducing manual operations by 60%",
      "Implemented security hardening across all production systems",
    ],
  },
];

const skills = {
  cloud: ["AWS", "GCP", "Azure"],
  containers: ["Kubernetes", "Docker", "Helm", "Istio"],
  cicd: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
  iac: ["Terraform", "Pulumi", "CloudFormation", "Ansible"],
  monitoring: ["Prometheus", "Grafana", "DataDog", "ELK Stack"],
  languages: ["Python", "Go", "Bash", "TypeScript"],
};

const certifications = [
  "AWS Solutions Architect Professional",
  "Certified Kubernetes Administrator (CKA)",
  "Google Cloud Professional DevOps Engineer",
  "HashiCorp Terraform Associate",
];

const contactEmail = "hello@deepchatterjee.com";
const contactLocation = "San Francisco, CA";

export default function ResumePage() {
  const { theme } = useTheme();

  return (
    <main className={theme === "dark" ? "bg-neutral-950" : "bg-white"}>
      <Header />
      <div className="min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <h1 className={`text-4xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"
                }`}>
                Deep Chatterjee
              </h1>
              <p className={`text-xl mb-4 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                }`}>
                Senior DevOps Engineer
              </p>
              <div className={`flex flex-wrap gap-4 text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                }`}>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {contactLocation}
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={14} /> {contactEmail}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${theme === "dark"
                  ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20"
                  : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200"
                  }`}
              >
                <Download size={16} />
                Download PDF
              </a>
              <PrintButton />
            </div>
          </div>

          {/* Summary */}
          <section className={`mb-10 p-6 rounded-xl border ${theme === "dark"
            ? "bg-neutral-900 border-neutral-800"
            : "bg-neutral-50 border-neutral-200"
            }`}>
            <p className={theme === "dark" ? "text-neutral-300" : "text-neutral-700"}>
              DevOps Engineer with 8+ years of experience building and scaling cloud infrastructure.
              Passionate about automation, reliability engineering, and enabling development teams
              to ship faster. Proven track record of reducing costs, improving deployment velocity,
              and implementing robust monitoring solutions.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className={`flex items-center gap-2 text-xl font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
              <Briefcase size={20} className="text-emerald-500" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border ${theme === "dark"
                    ? "bg-neutral-900 border-neutral-800"
                    : "bg-white border-neutral-200 shadow-sm"
                    }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className={`font-semibold ${theme === "dark" ? "text-white" : "text-neutral-900"
                        }`}>
                        {job.title}
                      </h3>
                      <p className={theme === "dark" ? "text-emerald-400" : "text-emerald-600"}>
                        {job.company}
                      </p>
                    </div>
                    <div className={`text-sm text-right ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"
                      }`}>
                      <div>{job.period}</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`text-sm flex items-start gap-2 ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                          }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className={`flex items-center gap-2 text-xl font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
              <GraduationCap size={20} className="text-emerald-500" />
              Technical Skills
            </h2>
            <div className={`p-6 rounded-xl border ${theme === "dark"
              ? "bg-neutral-900 border-neutral-800"
              : "bg-white border-neutral-200 shadow-sm"
              }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className={`text-sm font-medium uppercase tracking-wider mb-2 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"
                      }`}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded text-xs font-medium ${theme === "dark"
                            ? "bg-neutral-800 text-neutral-300"
                            : "bg-neutral-100 text-neutral-700"
                            }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className={`flex items-center gap-2 text-xl font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
              <Award size={20} className="text-emerald-500" />
              Certifications
            </h2>
            <div className={`p-6 rounded-xl border ${theme === "dark"
              ? "bg-neutral-900 border-neutral-800"
              : "bg-white border-neutral-200 shadow-sm"
              }`}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
