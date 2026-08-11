import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import type { ContactChannel } from "@/types";

const iconMap = {
  mail: FaEnvelope,
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
};

export default function ContactLink({ channel }: { channel: ContactChannel }) {
  const Icon = iconMap[channel.icon];
  const isExternal = !channel.href.startsWith("mailto:");

  return (
    <a
      href={channel.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 transition-colors duration-200 hover:border-accent"
    >
      <Icon
        className="h-4 w-4 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
        aria-hidden="true"
      />
      <span className="min-w-0">
        <span className="block font-mono text-xs text-muted">
          {channel.label}
        </span>
        <span className="block truncate text-sm text-foreground">
          {channel.value}
        </span>
      </span>
    </a>
  );
}
