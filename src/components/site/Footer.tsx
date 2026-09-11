import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 pb-12 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="wordmark text-5xl text-primary-foreground sm:text-6xl">Deucher</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/60">
              Construímos os lugares onde você viverá as suas melhores histórias. Da fundação aos
              acabamentos, com compromisso e cuidado.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="label-xs text-primary-foreground/40">Navegação</p>
            <ul className="mt-6 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label-xs text-primary-foreground/40">Contato</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Roberto Deucher
          </p>
          <p className="label-xs text-primary-foreground/40">Mão de obra • Construção civil</p>
        </div>
      </div>
    </footer>
  );
}
