import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import ExperienceItem from "@/components/experience/ExperienceItem";
import { experience } from "@/data/experience";

export default function ExperienceSection({ tone }: { tone?: "base" | "alt" }) {
  return (
    <Section id="experiencia" kicker="Experiencia" title="Trayectoria breve" tone={tone}>
      <div className="space-y-10">
        {experience.map((item, index) => (
          <FadeIn key={`${item.role}-${item.period}`} delay={index * 0.08}>
            <ExperienceItem item={item} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
