type MarkProps = { className?: string; tone?: "navy" | "light" };

export function LogoMark({ className = "h-10 w-10", tone = "navy" }: MarkProps) {
  return (
    <img
      src={tone === "light" ? "/img/logo-mark-light.png" : "/img/logo-mark.png"}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

export function Logo({
  className = "h-10",
  tone = "navy",
}: {
  tone?: "navy" | "light";
  className?: string;
}) {
  const textColor = tone === "light" ? "text-primary-foreground" : "text-ink";
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark tone={tone} className={className + " w-auto"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-sm font-extrabold uppercase tracking-[0.14em] ${textColor}`}
        >
          Roberto Deucher
        </span>
        <span
          className={`mt-1 text-[10px] uppercase tracking-[0.18em] ${
            tone === "light" ? "text-primary-foreground/50" : "text-ink/45"
          }`}
        >
          Construção civil
        </span>
      </span>
    </span>
  );
}
