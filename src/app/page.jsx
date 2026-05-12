import {
  AboutSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
} from "@/components/sections";
import { getPortfolioData } from "@/lib/api";

async function HomePage() {
  const { projects, services, skills } = await getPortfolioData();

  return (
    <>
      <HeroSection />

      <AboutSection />

      <ProjectsSection projects={projects} />

      <ServicesSection services={services} />

      <SkillsSection skills={skills} />
    </>
  );
}

export default HomePage;
