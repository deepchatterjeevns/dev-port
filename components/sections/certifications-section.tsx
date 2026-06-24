'use client';

import { useTheme } from '@/components/theme-provider';

const certifications = [
  {
    name: 'AWS Solutions Architect - Associate',
    provider: 'Amazon Web Services',
    date: 'Jan 2024',
    credentialId: 'AWS-SAA-XXXXX',
    description: 'Designing distributed systems on AWS, covering compute, storage, databases, and networking.',
    icon: '☁️',
    color: 'orange',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    provider: 'Cloud Native Computing Foundation',
    date: 'Mar 2023',
    credentialId: 'LF-CKA-XXXXX',
    description: 'Managing Kubernetes clusters, including installation, networking, storage, and troubleshooting.',
    icon: '⚙️',
    color: 'blue',
  },
  {
    name: 'HashiCorp Terraform Associate',
    provider: 'HashiCorp',
    date: 'Jun 2023',
    credentialId: 'TERRAFORM-XXXXX',
    description: 'Infrastructure as Code principles, Terraform workflow, modules, and state management.',
    icon: '🔧',
    color: 'purple',
  },
  {
    name: 'Azure DevOps Engineer Expert',
    provider: 'Microsoft',
    date: 'Sep 2023',
    credentialId: 'AZURE-DEVOPS-XXXXX',
    description: 'CI/CD pipelines, Azure services integration, and DevOps practices on Microsoft cloud.',
    icon: '🔷',
    color: 'cyan',
  },
  {
    name: 'Docker Certified Associate',
    provider: 'Docker Inc.',
    date: 'Dec 2022',
    credentialId: 'DCA-XXXXX',
    description: 'Container fundamentals, image creation, orchestration, and enterprise Docker practices.',
    icon: '🐳',
    color: 'sky',
  },
  {
    name: 'Linux Professional Institute (LPIC-1)',
    provider: 'Linux Professional Institute',
    date: 'Aug 2021',
    credentialId: 'LPIC-1-XXXXX',
    description: 'Linux system administration, command line, file management, and basic networking.',
    icon: '🐧',
    color: 'yellow',
  },
];

const colorClasses = {
  orange: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  sky: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
};

export function CertificationsSection() {
  const { theme } = useTheme();

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-emerald-500">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl border transition-all duration-300 card-glow ${
                theme === 'dark'
                  ? 'bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/30'
                  : 'bg-white border-gray-200 hover:border-emerald-500/50 hover:shadow-lg'
              }`}
            >
              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl border ${
                    colorClasses[cert.color as keyof typeof colorClasses]
                  }`}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.name}
                    </h3>
                    <span className="text-xs font-mono text-emerald-500 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-500 mb-2">
                    {cert.provider}
                  </p>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center mt-8 text-sm ${
          theme === 'dark' ? 'text-neutral-500' : 'text-gray-500'
        }`}>
          * Credential IDs are placeholders. Update with your actual certifications.
        </p>
      </div>
    </section>
  );
}
