import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection({ tone }: { tone?: "base" | "alt" }) {
  return (
    <Section
      id="proyectos"
      kicker="featured projects"
      title="Proyectos"
      description="Sistemas, aplicaciones y soluciones que he diseñado y construido."
      tone={tone}
    >
      <div className="space-y-10 sm:space-y-14">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} index={index} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}