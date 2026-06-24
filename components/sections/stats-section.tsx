"use client";

import { useTheme } from "@/components/theme-provider";
import { Cloud, Server, Shield, Zap, Clock, GitBranch, Database, Cpu } from "lucide-react";

const stats = [
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Projects Delivered", icon: Server },
  { value: "99.9%", label: "Uptime Achieved", icon: Shield },
];

const capabilities = [
  { icon: Cloud, label: "Multi-Cloud Architecture", color: "text-blue-500" },
  { icon: GitBranch, label: "CI/CD Automation", color: "text-emerald-500" },
  { icon: Shield, label: "Security & Compliance", color: "text-red-500" },
  { icon: Cpu, label: "Monitoring & Alerts", color: "text-purple-500" },
  { icon: Database, label: "Infrastructure as Code", color: "text-amber-500" },
  { icon: Zap, label: "Performance Optimization", color: "text-cyan-500" },
];

export function StatsSection() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 px-4 ${
      theme === "dark" ? "bg-neutral-900/50" : "bg-neutral-50"
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}>
            DevOps Engineer & Platform Architect
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === "dark" ? "text-neutral-400" : "text-neutral-600"
          }`}>
            I build scalable cloud infrastructure and automate deployment pipelines
            that power innovation at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex-1 min-w-[140px] p-6 rounded-xl text-center border card-glow ${
                  theme === "dark"
                    ? "bg-neutral-900 border-neutral-800"
                    : "bg-white border-neutral-200 shadow-sm"
                }`}
              >
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  theme === "dark" ? "text-neutral-400" : "text-neutral-600"
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 gap-3">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all hover:scale-[1.02] card-glow ${
                    theme === "dark"
                      ? "bg-neutral-900 border-neutral-800"
                      : "bg-white border-neutral-200 shadow-sm"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${cap.color}`} />
                  <span className={`text-sm font-medium ${
                    theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                  }`}>
                    {cap.label}
                  </span>
                </div>
              );
            })}  
          </div>
        </div>

        {/* Impact Metrics */}
        <div className={`mt-12 p-6 rounded-xl border ${
          theme === "dark" ? "bg-neutral-900/50 border-neutral-800" : "bg-white border-neutral-200 shadow-sm"
        }`}>
          <h3 className={`text-center font-semibold mb-6 ${
            theme === "dark" ? "text-neutral-300" : "text-neutral-700"
          }`}>
            Proven Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "75%", label: "Faster Deployments", color: "text-emerald-500" },
              { value: "40%", label: "Cost Reduction", color: "text-blue-500" },
              { value: "95%", label: "Fewer Incidents", color: "text-purple-500" },
              { value: "2x", label: "Team Productivity", color: "text-amber-500" },
            ].map((metric, i) => (
              <div key={i}>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                <div className={`text-xs ${
                  theme === "dark" ? "text-neutral-500" : "text-neutral-500"
                }`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
