import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "erp-ferreterias",
    name: "ERP/POS para Ferreterías",
    category: "personal",
    summary:
      "Sistema ERP/POS con documentación estructurada orientada a agentes de IA.",
    decision:
      "El modelo de datos soporta múltiples cajas y múltiples roles por usuario desde el diseño inicial. Las restricciones de MVP se aplican solo en la capa de requisitos funcionales, nunca como límites estructurales de la base de datos.",
    result:
      "Suite de 9 documentos, de la visión a la especificación funcional, listos para guiar la implementación.",
    tech: ["Diseño de BD", "Agentes de IA", "Documentación técnica"],
    highlights: [
      "Modelo multi-caja y multi-rol diseñado desde el inicio",
      "Documentación estructurada para agentes de IA",
      "MVP limitado a requisitos funcionales, no al esquema",
    ],
  },
  {
    slug: "uisard",
    name: "UISARD — Reservas de Biblioteca",
    category: "laboral",
    summary:
      "Sistema de reservas de cubículos para la UIS, reemplazando el sistema externo ALMA.",
    decision:
      "Backend en Spring Boot con servicios de cancelación automática y sanciones; frontend en Angular con estado migrado a un UiStateService para arreglar el flujo de reserva post-login.",
    result:
      "Correcciones de alto impacto: bug de encoding UTF-8 en payloads HTTP y renderizado de upcomingEvents con ID compuesto.",
    tech: ["Spring Boot", "Angular", "Oracle", "JUnit 5", "Mockito"],
    highlights: [
      "AutoCancelacionReservasService: cancelación automática y sanciones",
      "Fix de encoding UTF-8 en payloads HTTP",
      "Fix de renderizado de upcomingEvents (ID compuesto)",
      "Flujo de reserva corregido con UiStateService",
    ],
  },
  {
    slug: "tesis-absa",
    name: "Tesis — ABSA con BERT",
    category: "academico",
    summary:
      "Análisis de Sentimientos Basado en Aspectos aplicado a reseñas de apps en español colombiano.",
    decision:
      "Modelo NLP con BERT para clasificar sentimiento por aspecto, entrenado sobre reseñas en español colombiano.",
    result:
      "Tesis de grado que integra NLP/ML aplicado a un problema real de análisis de opinión.",
    tech: ["Python", "PyTorch", "Hugging Face", "BERT"],
    highlights: [
      "ABSA: clasificación de sentimiento por aspecto",
      "NLP aplicado a español colombiano",
      "Pipeline con PyTorch y Hugging Face",
    ],
    repoUrl:
      "https://github.com/MateoVera12/ABSA-model-for-processing-reviews-in-Spanish-from-Colombia",
  },
];
