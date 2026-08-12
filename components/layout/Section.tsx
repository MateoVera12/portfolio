import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionKicker from "@/components/ui/SectionKicker";

type SectionProps = {
  id: string;
  kicker?: string;
  title?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "base" | "alt";
};

export default function Section({
  id,
  kicker,
  title,
  description,
  children,
  className,
  tone = "base",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-14 sm:py-20",
        tone === "alt" ? "bg-surface-alt" : "bg-background",
        className,
      )}
    >
      <Container>
        <FadeIn>
          {kicker ? <SectionKicker>{kicker}</SectionKicker> : null}
          {title ? (
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          ) : null}
        </FadeIn>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}