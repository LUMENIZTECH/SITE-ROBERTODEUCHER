type Props = { className?: string; tone?: "navy" | "light" };

/**
 * Símbolo geométrico "casa + RD".
 * Substituir por arquivo oficial da logo quando disponível.
 */
export function LogoMark({ className = "h-10 w-10", tone = "navy" }: Props) {
  const stroke = tone === "light" ? "var(--offwhite)" : "var(--navy)";
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M4 28 32 6l28 22" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M11 30v28h42V30" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M22 44V26h7a7 7 0 0 1 0 14h-7l9 8" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M38 52V26h4a11 11 0 0 1 0 22h-4" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M32 6v6" stroke="var(--terracotta)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const text = tone === "light" ? "text-offwhite" : "text-navy";
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-9 w-9 shrink-0" tone={tone} />
      <span className={`flex flex-col leading-none ${text}`}>
        <span className="font-display text-[0.95rem] font-semibold tracking-[0.18em]">
          ROBERTO DEUCHER
        </span>
        <span className="mt-1 label-xs opacity-70">Mão de obras • Construção civil</span>
      </span>
    </span>
  );
}
