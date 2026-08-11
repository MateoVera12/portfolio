import Section from "@/components/layout/Section";
import FadeIn from "@/components/ui/FadeIn";
import ContactLink from "@/components/contact/ContactLink";
import { contact } from "@/data/contact";

export default function ContactSection() {
  return (
    <Section id="contacto" kicker="Contacto" title="Hablemos">
      <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        ¿Un equipo buscando un full-stack con base backend sólida e IA aplicada?
        Escríbeme por cualquiera de estos canales.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {contact.channels.map((channel, index) => (
          <FadeIn key={channel.label} delay={index * 0.06}>
            <ContactLink channel={channel} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
