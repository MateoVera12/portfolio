# Portafolio — Mateo Vera Grimaldo

Portafolio personal de una sola página para Mateo Vera Grimaldo, Ingeniero de Sistemas (UIS) en búsqueda de roles Full-Stack, Backend, Systems/Infrastructure y AI/ML.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS**
- **Framer Motion** (fade-in al scroll, respeta `prefers-reduced-motion`)
- **next/font** con JetBrains Mono e Inter auto-hospedadas
- **pnpm** como gestor de paquetes

## Requisitos

- Node.js 18.17+
- pnpm 9+

## Ejecutar localmente

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción
pnpm start     # sirve el build de producción
pnpm lint      # eslint
```

## Estructura

```
app/               # layout, metadata, secciones de la página
components/
  layout/          # Header, Footer, Container, Section
  hero/            # Hero + TerminalPrompt
  projects/        # sección y card de proyectos (mini-casos)
  stack/           # grupos de tecnologías (terminal tags)
  experience/      # trayectoria
  contact/         # canales de contacto
  ui/              # Button, SkillBadge, FadeIn, SectionKicker
data/              # contenido tipado (projects, skills, experience, contact)
types/             # tipos de datos
```

Todo el contenido vive en `data/*.ts` — no hay CMS ni base de datos.

## Deploy

Proyecto Next.js estático preparado para **Vercel**. Importar desde GitHub o Vercel CLI:

```bash
pnpm dlx vercel
```

Dominio previsto: `mateovera.dev`.

## Pendientes

- Link público del repo del ERP de Ferreterías (campo `repoUrl` en `data/projects.ts`)
- Confirmar repo de la tesis ABSA antes del deploy
- Subir CV a `public/cv-mateo-vera.pdf` (habilita el botón en el hero; campo `cvUrl` en `data/contact.ts`)
- Capturas de pantalla de UISARD / ERP (campo `image` en `data/projects.ts`)
- Verificar disponibilidad y registrar el dominio
