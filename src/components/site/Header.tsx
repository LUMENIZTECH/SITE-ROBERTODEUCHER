import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";
import { LogoMark } from "@/components/Logo";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 lg:px-6">
      <div className="shadow-pill mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-white/40 bg-paper/80 py-2 pl-5 pr-2 backdrop-blur-md">
        <a
          href="#inicio"
          aria-label="Roberto Deucher — início"
          className="flex shrink-0 items-center gap-2.5"
        >
          <LogoMark tone="navy" className="h-8 w-auto" />
          <span className="hidden font-display text-sm font-extrabold uppercase tracking-[0.12em] text-ink sm:inline">
            Roberto Deucher
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-terracotta sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/15 md:hidden"
          >
            <span
              className={`h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="shadow-pill mx-auto mt-2 max-w-4xl rounded-3xl border border-white/40 bg-paper/95 p-3 backdrop-blur-md md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-ink/80 transition-colors hover:bg-ink/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
