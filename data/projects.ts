import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "erp-ferreterias",
    name: "ERP / POS para Ferreterías",
    category: "personal",
    description:
      "Sistema de gestión comercial para una ferretería: ventas, inventario, caja y cuentas por cobrar, con visión de evolución hacia SaaS.",
    tech: ["Diseño de BD", "Agentes de IA", "Documentación técnica"],
    highlights: [
      "Modelo multi-caja y multi-rol desde el diseño inicial",
      "Suite de 9 documentos: de la visión a la especificación funcional",
      "Restricciones de MVP aisladas de la estructura de datos",
    ],
  },
  {
    slug: "uisard",
    name: "UISARD — Sistema de Reservas de Cubículos",
    category: "laboral",
    description:
      "Sistema web para gestionar reservas, disponibilidad, reglas de uso y sanciones de cubículos universitarios. Reemplaza al sistema externo ALMA.",
    tech: ["Angular", "Java", "Spring Boot", "Oracle", "REST", "Docker"],
    highlights: [
      "Gestión de reservas con sanciones automáticas",
      "Control de disponibilidad y reglas de negocio",
      "Integración frontend/backend en producción",
    ],
  },
  {
    slug: "tesis-absa",
    name: "ABSA — Análisis de Sentimiento",
    category: "academico",
    description:
      "Modelo de análisis de sentimiento basado en aspectos, aplicado a reseñas de aplicaciones móviles en español colombiano.",
    tech: ["Python", "PyTorch", "Transformers", "BETO", "NLP"],
    highlights: [
      "Clasificación multi-label de aspectos y polaridad",
      "Fine-tuning de modelos Transformer",
      "Dataset de reseñas en español colombiano",
    ],
    repoUrl:
      "https://github.com/MateoVera12/ABSA-model-for-processing-reviews-in-Spanish-from-Colombia",
  },
];