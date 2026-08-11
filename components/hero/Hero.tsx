import Container from "@/components/layout/Container";
import TerminalPrompt from "@/components/hero/TerminalPrompt";
import Button from "@/components/ui/Button";
import { contact } from "@/data/contact";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center pt-16"
    >
      <Container>
        <div className="max-w-2xl">
          <TerminalPrompt />
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Carlos Mateo Vera Grimaldo
          </h1>
          <p className="mt-3 font-mono text-base text-accent sm:text-lg">
            Ingeniero de Sistemas — Full-Stack Development & AI/NLP
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Construyo sistemas backend robustos y aplico NLP a problemas reales.
            Recién graduado de la UIS, Bucaramanga.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#proyectos">Ver proyectos</Button>
            <Button href="#contacto">Contacto</Button>
            {contact.cvUrl ? (
              <Button href={contact.cvUrl} external variant="primary">
                Descargar CV
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
