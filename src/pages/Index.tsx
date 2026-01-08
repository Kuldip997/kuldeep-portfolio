import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kuldeep – Freelance Web Developer | Portfolio & Business Websites</title>
        <meta
          name="description"
          content="I design clean, fast, and responsive portfolio websites for individuals and small businesses."
        />
      </Helmet>

      <div className="min-h-screen bg-background scroll-smooth">
        <Header />
        <main>
          <HeroSection />

          <Reveal>
            <AboutSection />
          </Reveal>

          <Reveal>
            <ServicesSection />
          </Reveal>

          <Reveal>
            <ProjectsSection />
          </Reveal>

          <Reveal>
            <SkillsSection />
          </Reveal>

          <Reveal>
            <ContactSection />
          </Reveal>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
