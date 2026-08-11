import type { ReactNode } from "react";

export default function SkillBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent hover:text-foreground">
      {children}
    </span>
  );
}
