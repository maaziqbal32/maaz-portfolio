import { useState } from "react";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <SkillsMarquee />
        <AboutSection />
        <div className="section-separator" />
        <SkillsSection />
        <div className="section-separator" />
        <ExperienceSection />
        <div className="section-separator" />
        <ProjectsSection />
        <div className="section-separator" />
        <EducationSection />
        <div className="section-separator" />
        <AchievementsSection />
        <div className="section-separator" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
