import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/contact";
import heroImg from "@/assets/hero.jpg";
import obraImg from "@/assets/obra.jpg";
import larImg from "@/assets/lar.jpg";
import negocioImg from "@/assets/negocio.jpg";
import cuidadoImg from "@/assets/cuidado.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roberto Deucher — Mão de Obras e Construção Civil" },
      {
        name: "description",
        content:
          "Execução completa de obras residenciais e comerciais: fundação, estrutura, alvenaria, acabamentos e entrega, com compromisso e cuidado do início ao fim.",
      },
      { property: "og:title", content: "Roberto Deucher — Mão de Obras e Construção Civil" },
      {
        property: "og:description",
        content:
          "Construímos os lugares onde você viverá as suas melhores histórias. Da fundação aos acabamentos, com precisão e confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SECTION = "mx-auto max-w-[1400px] px-6 lg:px-12";

function SectionNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-sm tracking-[0.2em] text-terracotta">{n}</span>
      <span className="h-px flex-1 bg-border" />
      <span className="label-xs text-navy/50">{label}</span>
    </div>
  );
}

const SERVICES = [
  { n: "01", name: "Fundação", desc: "Base executada com precisão técnica e controle de cada etapa.", img: obraImg },
  { n: "02", name: "Estrutural", desc: "Estruturas seguras, alinhadas ao projeto e ao cronograma.", img: obraImg },
  { n: "03", name: "Alvenaria", desc: "Paredes no esquadro, com prumo e nível conferidos.", img: obraImg },
  { n: "04", name: "Argamassa de acabamento", desc: "Superfícies regulares, prontas para receber o revestimento.", img: cuidadoImg },
  { n: "05", name: "Cerâmica", desc: "Assentamento com paginação estudada e juntas uniformes.", img: cuidadoImg },
  { n: "06", name: "Mármore", desc: "Aplicação de pedras naturais com encaixe e polimento cuidadosos.", img: larImg },
  { n: "07", name: "Pintura", desc: "Preparo, cobertura e recortes com acabamento limpo.", img: larImg },
  { n: "08", name: "Elétrica", desc: "Instalações organizadas, seguras e conforme o projeto.", img: negocioImg },
  { n: "09", name: "Paisagismo", desc: "O entorno tratado como parte da arquitetura.", img: heroImg },
];

const STEPS = [
  { n: "01", name: "Entendimento", desc: "Conhecemos o projeto e suas necessidades." },
  { n: "02", name: "Planejamento", desc: "Organizamos as etapas da execução." },
  { n: "03", name: "Execução", desc: "Colocamos o projeto em prática com cuidado." },
  { n: "04", name: "Acabamento", desc: "Cuidamos dos detalhes que fazem a diferença." },
  { n: "05", name: "Entrega", desc: "Um espaço pronto para viver." },
];

function Index() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-offwhite">
      <Header />
      <main className="pt-20">
        {/* HERO */}
        <section id="inicio" className={`${SECTION} py-16 lg:py-24`}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="label-xs text-navy/55">Roberto Deucher</p>
                <p className="label-xs mt-2 text-terracotta">Mão de obras • Construção civil</p>
                <span className="rule-terracotta mt-7" />
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display mt-10 text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-[3.6rem]">
                  Construímos os lugares onde você viverá as suas{" "}
                  <span className="relative whitespace-nowrap font-semibold">
                    melhores
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-terracotta/80" />
                  </span>{" "}
                  histórias.
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-navy/70">
                  Da fundação aos acabamentos, executamos cada etapa da sua obra com compromisso,
                  cuidado e confiança.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="label-xs inline-flex items-center justify-center gap-3 border border-navy bg-navy px-8 py-4 text-offwhite transition-colors hover:border-terracotta hover:bg-terracotta"
                  >
                    Falar pelo WhatsApp
                  </a>
                  <a
                    href="#servicos"
                    className="label-xs inline-flex items-center justify-center border border-navy/25 px-8 py-4 text-navy transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    Conhecer nossos serviços
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <div className="relative">
                  <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-terracotta/50 lg:block" />
                  <img
                    src={heroImg}
                    alt="Residência contemporânea em concreto e madeira ao entardecer"
                    width={1280}
                    height={1600}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-navy/30 lg:block" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 01 CONFIANÇA */}
        <section id="sobre" className="border-t border-border bg-white">
          <div className={`${SECTION} py-24 lg:py-32`}>
            <Reveal>
              <SectionNumber n="01" label="Confiança" />
            </Reveal>
            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <img
                    src={obraImg}
                    alt="Estrutura de concreto de uma obra em execução"
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
                <Reveal delay={80}>
                  <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                    Construir é <span className="font-semibold">confiar.</span>
                  </h2>
                  <span className="rule-terracotta mt-6" />
                  <p className="mt-8 text-base leading-relaxed text-navy/70">
                    Sabemos que uma obra envolve muito mais do que materiais e etapas. Envolve
                    investimento, planejamento e um projeto que representa algo importante para cada
                    cliente.
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-navy/70">
                    Por isso, trabalhamos com compromisso do início ao fim da construção.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 02 O DESAFIO */}
        <section className="border-t border-border">
          <div className={`${SECTION} py-24 lg:py-32`}>
            <Reveal>
              <SectionNumber n="02" label="O desafio" />
            </Reveal>
            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal>
                  <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                    Encontrar uma equipe de confiança não deveria ser mais uma{" "}
                    <span className="font-semibold text-terracotta">preocupação.</span>
                  </h2>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-navy/70">
                    Uma construção envolve diferentes etapas, profissionais e decisões. Nosso
                    trabalho é assumir a execução com responsabilidade e cuidado, trazendo mais
                    tranquilidade para quem está realizando o projeto.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal delay={100}>
                  <div className="blueprint relative aspect-square w-full border border-border bg-white">
                    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
                      <rect x="60" y="80" width="150" height="120" stroke="var(--navy)" strokeWidth="1.2" />
                      <rect x="210" y="80" width="130" height="70" stroke="var(--navy)" strokeWidth="1.2" />
                      <rect x="210" y="150" width="130" height="170" stroke="var(--navy)" strokeWidth="1.2" />
                      <rect x="60" y="200" width="150" height="120" stroke="var(--navy)" strokeWidth="1.2" />
                      <path d="M60 40h280" stroke="var(--terracotta)" strokeWidth="1.5" />
                      <circle cx="60" cy="40" r="3" fill="var(--terracotta)" />
                      <circle cx="340" cy="40" r="3" fill="var(--terracotta)" />
                      <path d="M60 340h280" stroke="var(--navy)" strokeWidth="1" strokeDasharray="4 6" />
                    </svg>
                    <div className="absolute bottom-4 left-4 label-xs text-navy/45">
                      Planta • execução integrada
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 03 PARA QUEM É */}
        <section className="border-t border-border bg-white">
          <div className={`${SECTION} py-24 lg:py-32`}>
            <Reveal>
              <SectionNumber n="03" label="Para quem é" />
              <h2 className="font-display mt-12 max-w-2xl text-3xl leading-tight text-navy sm:text-4xl">
                Para quem está construindo o <span className="font-semibold">próximo capítulo.</span>
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
              {[
                {
                  n: "01",
                  title: "Seu lar",
                  desc: "Para quem está realizando o sonho de construir um lugar para viver suas melhores histórias.",
                  img: larImg,
                  alt: "Sala de estar de residência de alto padrão com pedra e madeira",
                },
                {
                  n: "02",
                  title: "Seu negócio",
                  desc: "Para empreendedores que precisam transformar um projeto em um espaço real.",
                  img: negocioImg,
                  alt: "Espaço comercial contemporâneo em fase de acabamento",
                },
              ].map((b, i) => (
                <Reveal key={b.n} delay={i * 120}>
                  <div className="group">
                    <div className="overflow-hidden">
                      <img
                        src={b.img}
                        alt={b.alt}
                        width={1024}
                        height={1280}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-7 flex items-baseline gap-4">
                      <span className="font-display text-sm tracking-[0.2em] text-terracotta">
                        {b.n}
                      </span>
                      <h3 className="label-xs text-navy">{b.title}</h3>
                    </div>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 SERVIÇOS */}
        <section id="servicos" className="border-t border-border">
          <div className={`${SECTION} py-24 lg:py-32`}>
            <Reveal>
              <SectionNumber n="04" label="Serviços" />
              <h2 className="font-display mt-12 max-w-2xl text-3xl leading-tight text-navy sm:text-4xl">
                Do primeiro fundamento ao <span className="font-semibold">último detalhe.</span>
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ul className="border-t border-border">
                  {SERVICES.map((s, i) => (
                    <li key={s.n}>
                      <div
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                        className="group flex items-center gap-6 border-b border-border py-6 transition-all duration-500 hover:pl-3"
                      >
                        <span className="font-display w-8 shrink-0 text-xs tracking-[0.2em] text-navy/40 transition-colors group-hover:text-terracotta">
                          {s.n}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-xl text-navy transition-colors group-hover:text-terracotta sm:text-2xl">
                            {s.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.desc}</p>
                        </div>
                        <span className="hidden h-px w-0 bg-terracotta transition-all duration-500 group-hover:w-10 sm:block" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
                <div className="sticky top-32 aspect-[3/4] w-full overflow-hidden border border-border bg-white">
                  {SERVICES.map((s, i) => (
                    <img
                      key={s.n}
                      src={s.img}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                        active === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      active === null ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <LogoMark className="h-20 w-20 opacity-25" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 PROCESSO */}
        <section id="processo" className="border-t border-border bg-white">
          <div className={`${SECTION} py-24 lg:py-32`}>
            <Reveal>
              <SectionNumber n="05" label="Processo" />
              <h2 className="font-display mt-12 max-w-2xl text-3xl leading-tight text-navy sm:text-4xl">
                Compromisso do <span className="font-semibold">início ao fim.</span>
              </h2>
            </Reveal>

            <div className="relative mt-20">
              <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-border lg:block" />
              <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={i * 90}>
                    <div className="relative border-l border-border pl-6 lg:border-l-0 lg:pl-0">
                      <span className="absolute -left-[3.5px] top-1.5 h-1.5 w-1.5 rotate-45 bg-terracotta lg:left-0 lg:top-1" />
                      <div className="hidden lg:block lg:h-8" />
                      <span className="font-display block text-xs tracking-[0.2em] text-terracotta">
                        {s.n}
                      </span>
                      <h3 className="label-xs mt-3 text-navy">{s.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-navy/65">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 CUIDADO */}
        <section className="border-t border-border">
          <div className={`${SECTION} py-24 lg:py-32`}>
            <Reveal>
              <SectionNumber n="06" label="Cuidado" />
            </Reveal>
            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 lg:pt-8">
                <Reveal>
                  <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                    Cada detalhe <span className="font-semibold">importa.</span>
                  </h2>
                  <span className="rule-terracotta mt-6" />
                  <p className="mt-8 text-base leading-relaxed text-navy/70">
                    Resiliência, organização e cuidado fazem parte da nossa forma de trabalhar.
                    Valorizamos o ambiente de trabalho, o projeto e, principalmente, o resultado que
                    será entregue ao cliente.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal delay={100}>
                  <div className="overflow-hidden">
                    <img
                      src={cuidadoImg}
                      alt="Mãos aplicando argamassa de acabamento com desempenadeira"
                      width={1440}
                      height={1024}
                      loading="lazy"
                      className="aspect-[7/5] w-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 07 MANIFESTO */}
        <section className="bg-navy">
          <div className={`${SECTION} py-28 lg:py-40`}>
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <LogoMark className="mx-auto h-12 w-12" tone="light" />
                <h2 className="font-display mt-12 text-3xl leading-[1.15] text-offwhite sm:text-4xl lg:text-5xl">
                  Seu projeto começa no papel.
                  <br />
                  <span className="font-semibold">Nós ajudamos a transformá-lo em realidade.</span>
                </h2>
                <span className="rule-terracotta mx-auto mt-12" />
                <div className="mt-12">
                  <a
                    href="#contato"
                    className="label-xs inline-flex items-center border border-offwhite/35 px-9 py-4 text-offwhite transition-colors hover:border-terracotta hover:bg-terracotta"
                  >
                    Conversar sobre meu projeto
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 08 CONTATO */}
        <section id="contato" className="border-t border-border bg-white">
          <div className={`${SECTION} py-24 lg:py-32`}>
            <Reveal>
              <SectionNumber n="08" label="Contato" />
            </Reveal>
            <div className="mt-14 grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
                    Vamos conversar sobre <span className="font-semibold">sua obra?</span>
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-navy/70">
                    Conte um pouco sobre o seu projeto e agende uma conversa.
                  </p>
                  <div className="mt-12">
                    <ContactForm />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal delay={100}>
                  <div className="border border-border bg-offwhite p-10">
                    <p className="label-xs text-terracotta">Prefere falar agora?</p>
                    <p className="font-display mt-6 text-2xl leading-snug text-navy">
                      Atendimento direto, sem intermediários.
                    </p>
                    <span className="rule-terracotta mt-8" />
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="label-xs mt-10 inline-flex w-full items-center justify-center border border-navy bg-navy px-8 py-4 text-offwhite transition-colors hover:border-terracotta hover:bg-terracotta"
                    >
                      Chamar no WhatsApp
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
