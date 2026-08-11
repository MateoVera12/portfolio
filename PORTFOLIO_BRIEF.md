# Portafolio Personal — Mateo Vera Grimaldo

Brief técnico para desarrollo con asistente de IA (OpenCode). Este documento contiene todo el contexto, contenido y decisiones de diseño necesarias para construir el portafolio de principio a fin, sin necesidad de preguntar información adicional al usuario salvo lo explícitamente marcado como PENDIENTE.

---

## 0. Instrucción para OpenCode: generar un plan antes de codear

**No empieces a escribir código todavía.** Antes de tocar el proyecto, generá un plan de desarrollo a partir de este documento, que incluya:

1. **Arquitectura de la información**: qué secciones existen, en qué orden, y qué "trabajo" narrativo hace cada una (ver sección 4 — cada sección tiene un propósito específico en la historia, no es una lista arbitraria).
2. **Desglose de componentes**: qué componentes de React vas a crear, cómo se dividen (layout, secciones, componentes reutilizables como `ProjectCard`, `TerminalPrompt`, `SkillBadge`, etc.).
3. **Orden de implementación sugerido**: normalmente layout base + design tokens (Tailwind config) → Hero → Proyectos → Stack → Experiencia → Contacto → pulido de animaciones/transiciones → SEO/meta → deploy.
4. **Riesgos o ambigüedades detectadas**: si algo de este brief es insuficiente para tomar una decisión de diseño o contenido, listalo explícitamente en el plan en vez de asumir en silencio.

Presentá ese plan primero. Solo después de que el plan esté claro, pasá a la implementación sección por sección — no generes el sitio completo en un solo paso.

---

## 1. Objetivo del proyecto y criterio de éxito

Portafolio personal de una sola página (single-page, con secciones ancladas) para un Ingeniero de Sistemas recién graduado que está en búsqueda activa de empleo en roles de: Full-Stack Development, Backend, Systems/Infrastructure, y AI/ML Development.

**Criterio de éxito — el "test de 30 segundos":** un entrevistador o reclutador que abre el sitio y le dedica 30 segundos de scroll rápido debe, sin leer todo el texto, quedar con estas tres impresiones:
1. "Este desarrollador tiene nivel de frontend serio" (lo demuestra el sitio mismo, no un texto que lo diga)
2. "Construye cosas reales, con decisiones técnicas de peso, no tutoriales"
3. "Quiero ver más / contactarlo"

Esto significa que el **sitio es en sí mismo la pieza de evidencia más fuerte de capacidad frontend** — cada detalle de ejecución (transiciones, jerarquía visual, tiempos de carga, responsive) comunica tanto como el contenido escrito.

**El portafolio debe contar una historia**, no ser una lista de secciones inconexas. El arco narrativo es: *quién es → qué sabe construir (evidencia concreta) → cómo piensa (decisiones técnicas) → cómo contactarlo*. Cada sección debe sentirse como el siguiente paso lógico de esa historia, con transiciones que refuercen la continuidad (ver sección 4).

**Tono visual buscado: profesional y sobrio**, no "flashy" ni experimental. Esto significa impacto a través de precisión y ejecución impecable (tipografía, espaciado, jerarquía, timing de animaciones) — no a través de efectos llamativos, colores saturados múltiples, o gimmicks. La sobriedad ES el statement de seniority: mostrar que sabe cuándo *no* usar un efecto es tan importante como saber usarlo.

**Propuesta de valor a comunicar:** desarrollador full-stack con base sólida en sistemas backend robustos (Java/Spring, Python/FastAPI) que además integra IA aplicada de forma seria (NLP/BERT en su tesis, agentes de IA en su flujo de trabajo de desarrollo).

**Principio rector: honestidad total.** No se debe exagerar experiencia, inflar tecnologías no dominadas, ni usar lenguaje corporativo vacío ("apasionado por la tecnología", "team player", etc.). El tono debe ser directo, técnico, concreto. Importante: "impactante" y "enganchar" se logran con **ejecución visual y claridad narrativa**, nunca inflando o exagerando el contenido — la honestidad y el impacto no son opuestos aquí.

---

## 2. Stack técnico

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** para estilos
- **Framer Motion** — usar con moderación, solo para: fade-in al hacer scroll de secciones, cursor parpadeante en el hero. Nada de animaciones que distraigan del contenido.
- **next/font** con fuentes cargadas localmente (no CDN de Google Fonts):
  - Monoespaciada: **JetBrains Mono** — para labels técnicos, stack, prompt del hero, nombres de proyecto
  - Sans-serif: **Inter** — para texto de lectura (descripciones, párrafos)
- **Sin base de datos ni CMS.** Todo el contenido vive en archivos de datos tipados en `/data`:
  - `data/projects.ts`
  - `data/experience.ts`
  - `data/skills.ts`
  - `data/contact.ts`
- **Deploy:** Vercel, con dominio personalizado `mateovera.dev` (o similar disponible — ver sección 7)
- **Sin backend/API routes** salvo que se decida agregar un formulario de contacto (ver sección 6, es opcional y NO prioritario en la v1)

---

## 3. Dirección visual (dark/terminal, minimalista técnico)

### Paleta de colores
- Fondo principal: `#0a0e14` o `#0d1117` (negro azulado, NO negro puro `#000`)
- Fondo secundario/cards: un tono ligeramente más claro, ej. `#111722`
- Texto principal: gris claro cálido, ej. `#e6e6e6` (NO blanco puro `#fff`)
- Texto secundario/muted: `#8b949e`
- **Un solo color de acento** (elegir uno, no combinar los tres):
  - Opción A: verde terminal `#3fb950`
  - Opción B: ámbar `#e3b341`
  - Opción C: cyan `#58a6ff` / `#39c5cf`
  - Recomendación: verde terminal (opción A) por la estética "dev/terminal" más clásica y por contraste limpio sobre el fondo oscuro.

### Tipografía
- JetBrains Mono: hero prompt, nombres de sección, stack técnico, tags/badges, botones
- Inter: párrafos descriptivos, texto de proyectos, bio

### Micro-detalles distintivos
- Hero con formato tipo terminal: `mateo@portfolio:~$ whoami` seguido de cursor parpadeante (CSS blink, sutil, no agresivo)
- Syntax highlighting real en cualquier snippet de código que se muestre (usar `shiki` o `prism` con un tema oscuro coherente con la paleta)
- Badges de tecnologías con estilo "terminal tag" (fondo sutil, borde fino, texto mono)
- Transiciones de scroll sutiles (fade + slight translate-y, 300-400ms, easing suave) — deben sentirse pulidas y consistentes en TODAS las secciones, no solo en el hero. La consistencia de timing/easing entre secciones es en sí misma una señal de calidad frontend.
- Mucho whitespace — cada sección debe respirar, sin scroll infinito de relleno
- Jerarquía tipográfica marcada (tamaños, pesos y espaciados claramente diferenciados entre título/subtítulo/cuerpo) — es lo que hace que el sitio se "lea" en segundos sin necesidad de leer cada palabra
- Estados de interacción cuidados: hover states sutiles pero perceptibles en cards de proyectos y links, focus states visibles para navegación por teclado (accesibilidad además de pulido)

### Qué evitar explícitamente
- Plantillas genéricas de Bootstrap/Tailwind UI sin personalización
- Gradientes llamativos o efectos "glassmorphism" genéricos
- Iconografía genérica de stock (usar iconos simples tipo Lucide/Simple Icons, consistentes)
- Animaciones de scroll agresivas o parallax excesivo
- Texto largo — reclutadores escanean, no leen párrafos extensos
- Cualquier efecto o adorno que no tenga una razón funcional clara — dado el tono sobrio/profesional buscado, ante la duda de si un efecto suma o distrae, se omite

**Nota para el agente de desarrollo:** antes de escribir componentes de UI, revisar si el entorno de desarrollo tiene una skill o guía de "frontend-design" disponible (o el skill UI/UX instalado) y seguirla para decisiones de diseño consistentes.

---

## 4. Estructura de secciones (arco narrativo)

Cada sección tiene un rol específico dentro de la historia. No tratarlas como bloques intercambiables — el orden y la transición entre ellas importa tanto como el contenido de cada una.

| Sección | Rol narrativo | Debe responder en la mente del visitante |
|---|---|---|
| Hero | El gancho — primeros 5 segundos | "¿Quién es y por qué me debería importar?" |
| Proyectos | La evidencia — el cuerpo de la historia | "¿De verdad sabe construir cosas complejas?" |
| Stack técnico | El respaldo — contexto de las herramientas | "¿Con qué tecnologías puede resolver mis problemas?" |
| Experiencia | La trayectoria — breve, de apoyo | "¿Dónde ha aplicado esto en el mundo real?" |
| Contacto | El cierre — la conversión | "Quiero hablar con esta persona, ¿cómo lo hago?" |

### 4.1 Hero — el gancho de 5 segundos
- Formato terminal: `mateo@portfolio:~$ whoami`
- Nombre: **Carlos Mateo Vera Grimaldo**
- Rol/tagline (1-2 líneas, sin relleno corporativo): Ingeniero de Sistemas — Full-Stack Development & AI/NLP. Ejemplo de tono (ajustar): "Construyo sistemas backend robustos y aplico NLP a problemas reales. Recién graduado de UIS, Bucaramanga."
- CTAs: link a proyectos (scroll), link a contacto, botón de descarga de CV (PDF — placeholder por ahora, Mateo lo agregará)
- **Función narrativa:** este bloque por sí solo, sin que el visitante haga scroll, ya debe comunicar "sabe frontend" (por la ejecución del propio hero: tipografía, cursor animado, espaciado) y "sabe backend/IA" (por el contenido del tagline). Es el único lugar donde se permite un poco de "show" técnico (la animación del cursor/terminal) — el resto del sitio es más sobrio en comparación, a propósito, para que el hero destaque como la puerta de entrada.

### 4.2 Proyectos destacados (3 proyectos, máximo) — la evidencia

**Orden de prioridad: ERP/POS Ferreterías → UISARD/ALMA → Tesis BERT/ABSA**

**Función narrativa de esta sección:** es donde se decide si el entrevistador sigue leyendo o se va. Cada proyecto debe presentarse no como una lista de features, sino como un **mini-caso**: problema → decisión técnica → resultado. Priorizar 1-2 líneas que muestren *pensamiento*, no un párrafo descriptivo largo. El diseño de las cards de proyecto debe ser el punto de mayor cuidado visual del sitio después del hero — es literalmente la prueba de "capacidades de frontend" que se pidió, así que estas cards no pueden ser genéricas (nada de card Bootstrap con sombra default).

#### Proyecto 1: ERP/POS para Ferreterías
- Tipo: proyecto personal, en desarrollo activo
- Descripción técnica: sistema ERP/POS diseñado con documentación estructurada orientada a agentes de IA (suite de 9 documentos, de visión a especificación funcional). Decisión de arquitectura destacable: el modelo de datos soporta múltiples cajas y múltiples roles por usuario desde el diseño inicial — las restricciones de MVP se aplican solo en la capa de requisitos funcionales, nunca como límites estructurales de la base de datos.
- Repo: **PENDIENTE — falta el link exacto del repositorio público en GitHub**
- Código fuente: **NO mostrar/enlazar código fuente** (según indicación explícita del usuario)
- Demo: mostrar link a demo en vivo **cuando esté desplegado** (por ahora, dejar el campo `demoUrl` vacío/condicional en `data/projects.ts` — no romper el build si aún no existe)
- Imágenes: usar capturas de pantalla cuando estén disponibles (placeholder por ahora)

#### Proyecto 2: UISARD / Sistema de Reservas (reemplazo de ALMA) — UIS
- Tipo: proyecto laboral real (Full-Stack Developer, UIS, enero–junio 2026)
- Descripción técnica: sistema de reservas de cubículos de biblioteca para la Universidad Industrial de Santander, reemplazando el sistema externo ALMA.
  - Backend: Spring Boot. Desarrollo de `AutoCancelacionReservasService` para cancelación automática y sanciones. Corrección de un bug de encoding UTF-8 en payloads HTTP. Tests con JUnit 5, Mockito y captura de logs con Logback.
  - Frontend: Angular. Corrección de renderizado de `upcomingEvents` (fix de ID compuesto). Corrección del flujo de reserva post-login migrando el estado `pendingBooking` a un `UiStateService`.
  - Base de datos: Oracle 23ai/26ai, esquema complejo (reservas, sanciones, jerarquía de políticas, horarios, alcances de operador).
- Repo: **NO disponible públicamente** — no mostrar link a código
- Mostrar: descripción técnica detallada + imágenes/capturas del sistema (si Mateo las tiene disponibles; si no, considerar mockups simples o diagramas de arquitectura como alternativa visual)
- Sin demo pública (sistema interno universitario)

#### Proyecto 3: Tesis — Clasificación de Sentimientos con BERT (ABSA)
- Tipo: proyecto académico / tesis de grado
- Descripción técnica: modelo de Análisis de Sentimientos Basado en Aspectos (ABSA) aplicado a reseñas de aplicaciones móviles en español colombiano, usando BERT y técnicas de NLP/ML.
- Repo (a confirmar con Mateo, encontrado en su GitHub público): `https://github.com/MateoVera12/ABSA-model-for-processing-reviews-in-Spanish-from-Colombia`
- **CONFIRMAR con Mateo** si este es efectivamente el repo correcto antes de enlazarlo.

### 4.3 Stack técnico — el respaldo
**Función narrativa:** después de ver la evidencia (proyectos), el visitante quiere confirmar el rango de herramientas. Esta sección es deliberadamente la más "escaneable" y menos narrativa del sitio — no necesita storytelling, necesita ser clara y rápida de leer en 3 segundos.

Agrupado por categoría, formato tipo terminal tags. Basado en el stack real confirmado:
- **Backend:** Java (Spring Boot), Python (FastAPI, async/await, WebSockets), .NET (ASP.NET)
- **Frontend:** JavaScript, TypeScript, React, Angular, Node.js
- **IA/ML:** PyTorch, Hugging Face, BERT
- **Bases de datos:** Oracle Database, MySQL, PostgreSQL, PL/SQL
- **DevOps/Herramientas:** Docker, CI/CD, Git, SonarQube, AWS, Azure
- **Herramientas de desarrollo con IA:** Claude Code, Codex, OpenCode (mencionar como parte del flujo de trabajo, no como "skill" técnico per se — es honesto y relevante mostrar que integra AI tooling en su proceso)


### 4.4 Experiencia (breve) — la trayectoria
**Función narrativa:** apoyo breve, no protagonista — los proyectos ya hicieron el trabajo pesado de convencer. Esta sección solo ancla esa evidencia a experiencia real y da acceso al detalle completo vía CV.
- Full-Stack Developer — UIS (junio 2025–junio 2026)
- Enlazar a CV en PDF para el detalle completo (Mateo debe subir el PDF a `/public/cv-mateo-vera.pdf`)

### 4.5 Contacto — el cierre
**Función narrativa:** es el CTA final de la historia. Debe sentirse como una invitación directa y de baja fricción, no un formulario burocrático — coherente con todo el sitio: directo, sin relleno.

Mostrar los 4 canales, con íconos simples y consistentes (estilo Lucide o Simple Icons, no stock genérico):
- Email: `mateovera6868@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/mateo-vera-772181257`
- GitHub: `https://github.com/MateoVera12`
- WhatsApp: `+57 320 481 3983` → link formato `https://wa.me/573204813983`

No usar formularios de contacto complejos en la v1 — los links directos son suficientes y más confiables.

---

## 5. Principios de contenido (aplicar en todo el sitio)

1. **Cero exageración.** No usar "experto en X" si no está confirmado. No inventar años de experiencia.
2. **Categorías claras** (aunque no se etiqueten visualmente como tal en el sitio, deben ser coherentes internamente):
   - Experiencia laboral real → UISARD/ALMA
   - Proyecto personal en desarrollo → ERP Ferreterías
   - Proyecto académico → Tesis BERT/ABSA
3. **Lenguaje directo y técnico**, evitar frases genéricas de CV corporativo ("apasionado por", "team player", "orientado a resultados" sin evidencia).
4. Priorizar explicar **decisiones técnicas** por encima de listar features. Ej: no decir "hice un sistema de reservas", decir qué problema técnico específico resolvió y cómo.

---

## 6. Fuera de alcance para v1 (no implementar salvo que se pida explícitamente)

- Formulario de contacto con backend/envío de emails
- Blog técnico
- CMS o panel de administración
- Internacionalización (i18n) — sitio en español únicamente por ahora
- Analytics avanzado (Vercel Analytics básico está bien si es trivial de agregar)

---

## 7. Pendientes antes/durante el desarrollo

- [ ] **Confirmar link del repo del ERP de Ferreterías** (no se encontró en el listado público visible de GitHub del usuario)
- [X ] **Confirmar que el repo de tesis es** `ABSA-model-for-processing-reviews-in-Spanish-from-Colombia`
- [ ] Verificar disponibilidad del dominio `mateovera.dev` (o alternativas: `.com`, `.io`, `.dev` con variaciones del nombre) — registrar en Vercel Domains o Namecheap
- [ ] Mateo debe proveer: CV en PDF actualizado, capturas de pantalla de UISARD y del ERP (cuando existan), foto de perfil si se desea incluir avatar
- [ ] Definir si se agrega demo en vivo del ERP cuando esté desplegado (el campo debe existir en la estructura de datos pero puede quedar vacío/oculto condicionalmente hasta entonces)

---

## 8. Notas para el agente de desarrollo (OpenCode)

- Priorizar una **v1 funcional y desplegable rápido** sobre features avanzadas. Estructura simple, contenido real, deploy limpio en Vercel.
- Usar TypeScript estricto, componentes tipados, sin `any`.
- Mobile-first — el sitio debe verse igual de cuidado en móvil (muchos reclutadores lo revisan desde el teléfono).
- Lighthouse: apuntar a 90+ en todas las métricas (performance, accesibilidad, SEO, best practices).
- SEO básico: meta tags, Open Graph (para que se vea bien al compartir el link en LinkedIn), favicon propio (no el default de Next.js).
- Commit inicial limpio, README del propio repo del portafolio explicando cómo correrlo localmente (esto también sirve como muestra de buenas prácticas).
- **Recordatorio del criterio de éxito (sección 1):** en cada decisión de implementación, la pregunta de referencia es "¿esto ayuda a que alguien entienda en 30 segundos de scroll que este desarrollador tiene nivel serio de frontend, construye cosas reales, y da ganas de contactarlo?". Si una feature no aporta a eso, no es prioridad para la v1.
- Recordar la instrucción de la sección 0: presentar el plan de desarrollo primero, antes de generar código.
