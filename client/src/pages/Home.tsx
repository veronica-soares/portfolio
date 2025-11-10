import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioVisualSection from "@/components/PortfolioVisualSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <AboutSection />
      
      <PortfolioVisualSection />
      
      <ProjectsSection />
      
      <SkillsSection />
      
      <ContactSection />
    </div>
  );
}
