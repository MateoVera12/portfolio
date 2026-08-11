"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="font-mono text-sm text-foreground transition-colors hover:text-accent"
        >
          mateo<span className="text-accent">@</span>portfolio
          <span className="text-muted">:~$</span>
        </a>
        <nav aria-label="Secciones">
          <ul className="flex items-center gap-4 sm:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs text-muted transition-colors hover:text-foreground sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
