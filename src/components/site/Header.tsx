import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/contact";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-offwhite/90 backdrop-blur-sm transition-shadow duration-500 ${
        scrolled ? "shadow-header" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#inicio" aria-label="Roberto Deucher — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-xs relative py-2 text-navy/75 transition-colors hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="label-xs hidden items-center gap-3 border border-navy bg-navy px-6 py-3.5 text-offwhite transition-colors hover:bg-terracotta hover:border-terracotta sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 bg-terracotta transition-colors group-hover:bg-offwhite" />
            Falar pelo WhatsApp
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
          >
            <span className="h-px w-5 bg-navy" />
            <span className="h-px w-5 bg-navy" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-offwhite lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="label-xs border-b border-border/70 py-4 text-navy/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="label-xs mt-5 bg-navy px-6 py-4 text-center text-offwhite"
            >
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
