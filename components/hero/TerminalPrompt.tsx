export default function TerminalPrompt() {
  return (
    <p className="font-mono text-sm text-foreground sm:text-base">
      <span className="text-accent">mateo</span>
      <span className="text-muted">@</span>
      <span className="text-accent">portfolio</span>
      <span className="text-muted">:~$ </span>
      <span>whoami</span>
      <span
        className="ml-0.5 inline-block h-4 w-2 animate-blink bg-accent align-middle sm:h-5 sm:w-2.5"
        aria-hidden="true"
      />
    </p>
  );
}
