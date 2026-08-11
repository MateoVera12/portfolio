import { FolderGit2, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import SkillBadge from "@/components/ui/SkillBadge";

const categoryLabel: Record<Project["category"], string> = {
  laboral: "laboral",
  personal: "personal",
  academico: "académico",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-sm border border-border bg-background px-2 py-0.5 font-mono text-xs text-accent">
          [ {categoryLabel[project.category]} ]
        </span>
        <span className="font-mono text-xs text-muted">./{project.slug}</span>
      </div>

      <h3 className="mt-4 font-mono text-xl font-semibold text-foreground sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <dl className="mt-6 space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="font-mono text-xs text-accent">$ decisión</dt>
          <dd className="mt-1 text-foreground">{project.decision}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-accent">=&gt; resultado</dt>
          <dd className="mt-1 text-foreground">{project.result}</dd>
        </div>
      </dl>

      {project.highlights.length > 0 ? (
        <ul className="mt-5 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 font-mono text-xs leading-relaxed text-muted"
            >
              <span className="text-accent" aria-hidden="true">
                +
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <SkillBadge key={tech}>{tech}</SkillBadge>
        ))}
      </div>

      {project.repoUrl || project.demoUrl ? (
        <div className="mt-6 flex flex-wrap gap-5 border-t border-border pt-5">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              Código
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Demo en vivo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
