import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import StackGroup from "@/components/stack/StackGroup";
import { skillGroups } from "@/data/skills";

export default function StackSection({ tone }: { tone?: "base" | "alt" }) {
  return (
    <Section
      id="stack"
      kicker="$ cat tecnologias.md"
      title="Tecnologías"
      tone={tone}
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.category} delay={(index % 2) * 0.08}>
            <StackGroup group={group} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
