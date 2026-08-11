import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section
      id="proyectos"
      kicker="Proyectos"
      title="Construyo sistemas reales, no tutoriales"
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
