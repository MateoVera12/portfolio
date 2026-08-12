import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import { CATEGORY_LABELS } from "@/components/projects/category";

type ProjectVisualProps = {
  project: Project;
  className?: string;
};

export default function ProjectVisual({
  project,
  className,
}: ProjectVisualProps) {
  if (project.image) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden", className)}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-between overflow-hidden bg-surface-raised p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted">./{project.slug}</span>
        <span className="font-mono text-xs text-accent">
          {CATEGORY_LABELS[project.category]}
        </span>
      </div>
      <div>
        <h3 className="font-mono text-xl font-semibold leading-snug text-foreground sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-3 font-mono text-xs text-muted">
          {"// screenshot pendiente"}
        </p>
      </div>
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/40"
        aria-hidden="true"
      />
    </div>
  );
}