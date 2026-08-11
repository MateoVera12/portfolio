import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionKicker from "@/components/ui/SectionKicker";

type SectionProps = {
  id: string;
  kicker?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  kicker,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-24 sm:py-32", className)}>
      <Container>
        <FadeIn>
          {kicker ? <SectionKicker>{kicker}</SectionKicker> : null}
          {title ? (
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
          ) : null}
        </FadeIn>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
