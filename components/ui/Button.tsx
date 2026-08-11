import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">;

export default function Button({
  href,
  variant = "ghost",
  external,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 font-mono text-sm transition-colors duration-200",
        variant === "primary"
          ? "border border-accent bg-accent/10 text-accent hover:bg-accent/20"
          : "border border-border text-foreground hover:border-accent hover:text-accent",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
