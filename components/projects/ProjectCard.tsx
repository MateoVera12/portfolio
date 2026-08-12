import { FileText, ExternalLink, FolderGit2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import ProjectVisual from "@/components/projects/ProjectVisual";
import TechTag from "@/components/projects/TechTag";
import Button from "@/components/ui/Button";
import { CATEGORY_LABELS } from "@/components/projects/category";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const flip = index % 2 === 1;

  return (
    <article className="group grid overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-accent lg:grid-cols-2">
      <div
        className={cn(
          "relative aspect-[16/10] border-b border-border bg-surface-raised lg:aspect-auto lg:h-full lg:border-b-0",
          flip ? "lg:order-2 lg:border-l" : "lg:order-1 lg:border-r",
        )}
      >
        <ProjectVisual project={project} />
      </div>

      <div
        className={cn(
          "flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12",
          flip ? "lg:order-1" : "lg:order-2",
        )}
      >
        <span className="w-fit rounded-sm border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-accent">
          [{CATEGORY_LABELS[project.category]}]
        </span>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>

        {project.highlights.length > 0 ? (
          <ul className="mt-6 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm text-foreground/90"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-7 flex flex-wrap gap-3">
          {project.repoUrl ? (
            <Button href={project.repoUrl} external>
              <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button href={project.demoUrl} external variant="primary">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Ver proyecto
            </Button>
          ) : null}
          {project.caseStudyUrl ? (
            <Button href={project.caseStudyUrl} external variant="primary">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Case study
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}