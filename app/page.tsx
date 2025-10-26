import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { LeadershipSection } from "@/components/leadership-section"
import { ProjectsSection } from "@/components/projects-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <WorkExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <LeadershipSection />
      <ProjectsSection />
      <InterestsSection />
      <ContactSection />
    </main>
  )
}
