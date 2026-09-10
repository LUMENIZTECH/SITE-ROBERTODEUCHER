import { Logo } from "@/components/Logo";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-[#eee7dc] text-navy">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid gap-14 border-b border-navy/15 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-44 w-44" />
            <span className="rule-terracotta mt-8" />
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="label-xs text-navy/50">Navegação</p>
            <ul className="mt-6 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-navy/80 transition-colors hover:text-terracotta"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label-xs text-navy/50">Contato</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-navy/80 transition-colors hover:text-terracotta"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-navy/80 transition-colors hover:text-terracotta"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="font-display max-w-xl text-xl leading-snug text-navy/90">
            Construímos os lugares onde você viverá as suas melhores histórias.
          </p>
          <p className="label-xs text-navy/40">© {new Date().getFullYear()} Roberto Deucher</p>
        </div>
      </div>
    </footer>
  );
}
