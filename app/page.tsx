import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import StackSection from "@/components/stack/StackSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection tone="alt" />
        <StackSection />
        <ExperienceSection tone="alt" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
