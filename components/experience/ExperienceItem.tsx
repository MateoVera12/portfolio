import type { ExperienceItem } from "@/types";

export default function ExperienceItemComponent({
  item,
}: {
  item: ExperienceItem;
}) {
  return (
    <div className="flex flex-col gap-1 border-l border-border pl-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-mono text-base text-foreground">{item.role}</h3>
        <span className="font-mono text-xs text-muted">{item.period}</span>
      </div>
      <p className="font-mono text-sm text-accent">{item.company}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {item.description}
      </p>
    </div>
  );
}
