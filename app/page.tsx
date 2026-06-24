import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

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
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
