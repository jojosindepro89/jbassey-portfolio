import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TrainingSection } from "@/components/sections/training-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <div id="home">
        <Hero />
      </div>
      <AboutSection />
      <ProjectsSection />
      <TrainingSection />
      <ContactSection />
    </div>
  );
}
