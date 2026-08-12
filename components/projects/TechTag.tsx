import type { ReactNode } from "react";

export default function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] leading-5 text-muted">
      {children}
    </span>
  );
}