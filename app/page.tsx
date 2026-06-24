import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";

// Lazy load below-fold sections for better performance
const StatsSection = dynamic(() => import("@/components/sections/stats-section").then(mod => ({ default: mod.StatsSection })), {
  loading: () => <div className="py-20" />,
});

const SkillsSection = dynamic(() => import("@/components/sections/skills-section").then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <div className="py-20" />,
});

const ProjectsSection = dynamic(() => import("@/components/sections/projects-section").then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="py-20" />,
});

const CaseStudiesSection = dynamic(() => import("@/components/sections/case-studies-section"), {
  loading: () => <div className="py-24" />,
});

const CertificationsSection = dynamic(() => import("@/components/sections/certifications-section").then(mod => ({ default: mod.CertificationsSection })), {
  loading: () => <div className="py-24" />,
});

const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="py-24" />,
});

export default function Home() {
  return (
    <main>
      <Header />
      <div id="home">
        <Hero />
        <StatsSection />
        <SkillsSection />
      </div>
      <ProjectsSection />
      <div id="case-studies">
        <CaseStudiesSection />
      </div>
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
