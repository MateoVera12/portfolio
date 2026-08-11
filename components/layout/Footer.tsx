import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-2 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Mateo Vera Grimaldo
        </p>
        <p className="font-mono text-xs text-muted">
          Next.js · Tailwind · Vercel
        </p>
      </Container>
    </footer>
  );
}
