export type Project = {
  slug: string;
  name: string;
  category: "laboral" | "personal" | "academico";
  summary: string;
  decision: string;
  result: string;
  tech: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "linkedin" | "github" | "whatsapp";
};

export type Contact = {
  cvUrl: string | null;
  channels: ContactChannel[];
};
