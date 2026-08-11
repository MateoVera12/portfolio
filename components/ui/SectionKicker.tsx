import type { ReactNode } from "react";

export default function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-sm text-muted">
      <span className="text-accent">{"// "}</span>
      {children}
    </p>
  );
}
