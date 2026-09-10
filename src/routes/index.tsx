import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/lib/contact";
import heroImg from "@/assets/hero.jpg";
import obraImg from "@/assets/obra.jpg";
import larImg from "@/assets/lar.jpg";
import negocioImg from "@/assets/negocio.jpg";
import cuidadoImg from "@/assets/cuidado.jpg";
import fundacaoImg from "@/assets/fundacao.png";
import alvenariaImg from "@/assets/alvenaria.png";
import revestimentoImg from "@/assets/revestimento.png";
import pinturaImg from "@/assets/pintura.png";
import canteiroImg from "@/assets/canteiro.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roberto Deucher — Mão de Obra e Construção Civil" },
      {
        name: "description",
        content:
          "Execução completa de obras residenciais e comerciais: fundação, estrutura, alvenaria, acabamentos e entrega, com compromisso e cuidado do início ao fim.",
      },
      { property: "og:title", content: "Roberto Deucher — Mão de Obra e Construção Civil" },
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

const SECTION = "mx-auto w-full max-w-[1400px] px-6 lg:px-10";

const AUDIENCES = [
  {
    tag: "Seu lar",
    title: "Para quem realiza um sonho",
    desc: "Para quem está construindo um lugar para viver as suas melhores histórias, do alicerce ao último acabamento.",
    img: larImg,
    alt: "Sala de estar de residência de alto padrão com pedra e madeira",
  },
  {
    tag: "Seu negócio",
    title: "Para quem faz acontecer",
    desc: "Para empreendedores que precisam transformar um projeto em um espaço comercial pronto para funcionar.",
    img: negocioImg,
    alt: "Espaço comercial contemporâneo em fase de acabamento",
  },
];

const SERVICES = [
  { cat: "Estrutura", name: "Fundação", desc: "Base executada com precisão técnica e controle de cada etapa.", img: fundacaoImg },
  { cat: "Estrutura", name: "Estrutural", desc: "Estruturas seguras, alinhadas ao projeto e ao cronograma.", img: obraImg },
  { cat: "Vedação", name: "Alvenaria", desc: "Paredes no esquadro, com prumo e nível conferidos.", img: alvenariaImg },
  { cat: "Acabamento", name: "Argamassa de acabamento", desc: "Superfícies regulares, prontas para o revestimento.", img: cuidadoImg },
  { cat: "Revestimento", name: "Cerâmica", desc: "Assentamento com paginação estudada e juntas uniformes.", img: revestimentoImg },
  { cat: "Revestimento", name: "Mármore", desc: "Pedras naturais aplicadas com encaixe e polimento cuidadosos.", img: larImg },
  { cat: "Acabamento", name: "Pintura", desc: "Preparo, cobertura e recortes com acabamento limpo.", img: pinturaImg },
  { cat: "Instalações", name: "Elétrica", desc: "Instalações organizadas, seguras e conforme o projeto.", img: negocioImg },
  { cat: "Entorno", name: "Paisagismo", desc: "O entorno tratado como parte da arquitetura.", img: heroImg },
];

const STEPS = [
  { n: "01", name: "Entendimento", desc: "Conhecemos o projeto e as suas necessidades." },
  { n: "02", name: "Planejamento", desc: "Organizamos as etapas da execução." },
  { n: "03", name: "Execução", desc: "Colocamos o projeto em prática com cuidado." },
  { n: "04", name: "Acabamento", desc: "Cuidamos dos detalhes que fazem a diferença." },
  { n: "05", name: "Entrega", desc: "Um espaço pronto para viver." },
];

const GALLERY = [
  { img: heroImg, alt: "Residência contemporânea em concreto e madeira ao entardecer" },
  { img: obraImg, alt: "Estrutura de concreto de uma obra em execução" },
  { img: cuidadoImg, alt: "Mãos aplicando argamassa de acabamento com desempenadeira" },
  { img: fundacaoImg, alt: "Fundação com armação de aço e concreto fresco" },
  { img: larImg, alt: "Sala de estar de alto padrão com lareira de pedra" },
  { img: alvenariaImg, alt: "Pedreiro assentando tijolos com argamassa" },
  { img: negocioImg, alt: "Espaço comercial contemporâneo iluminado" },
  { img: pinturaImg, alt: "Pintura de parede interna em obra recém-construída" },
  { img: canteiroImg, alt: "Canteiro de obras residencial ao pôr do sol" },
];

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="label-xs text-terracotta">{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Residência contemporânea em concreto e madeira ao entardecer"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/5 to-ink/80" />
          <div className="relative z-10 flex min-h-[100svh] flex-col justify-end">
            <div className={`${SECTION} pb-4 pt-28 lg:pb-6`}>
              <p className="label-xs text-white/70">Roberto Deucher — Mão de obra & construção civil</p>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/90 sm:text-xl">
                Construímos os lugares onde você viverá as suas melhores histórias.
              </p>
            </div>
            <div className="w-full overflow-hidden px-4 lg:px-6">
              <h1 className="wordmark text-white text-[26vw] leading-[0.78] lg:text-[19vw]">
                Deucher
              </h1>
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section id="sobre" className="py-24 lg:py-36">
          <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
            <Reveal>
              <Kicker>Construção civil</Kicker>
              <h2 className="mt-8 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Da fundação aos acabamentos, com precisão e confiança.
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Uma obra envolve muito mais do que materiais e etapas. Envolve investimento,
                planejamento e um projeto que representa algo importante. Por isso assumimos a
                execução com compromisso do início ao fim.
              </p>
            </Reveal>
          </div>
        </section>

        {/* AUDIÊNCIAS — cards estilo produto */}
        <section className="pb-8 lg:pb-16">
          <div className={SECTION}>
            <div className="grid gap-5 md:grid-cols-2">
              {AUDIENCES.map((a, i) => (
                <Reveal key={a.tag} delay={i * 120}>
                  <article className="group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        src={a.img}
                        alt={a.alt}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      />
                      <span className="label-xs absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 text-ink backdrop-blur-sm">
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl sm:text-3xl">{a.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                      {a.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* QUEBRA — imagem full-bleed */}
        <section className="px-4 lg:px-6">
          <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-3xl">
            <img
              src={canteiroImg}
              alt="Canteiro de obras residencial ao pôr do sol"
              loading="lazy"
              className="h-[58vh] w-full object-cover lg:h-[78vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
              <p className="label-xs text-white/70">Confiança</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                Encontrar uma equipe de confiança não deveria ser mais uma preocupação.
              </h2>
            </div>
          </div>
        </section>

        {/* SERVIÇOS — grid de cards */}
        <section id="servicos" className="py-24 lg:py-36">
          <div className={SECTION}>
            <Reveal>
              <div className="max-w-3xl">
                <Kicker>Serviços</Kicker>
                <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Do primeiro fundamento ao último detalhe.
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.name} delay={(i % 3) * 100}>
                  <article className="group">
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={s.img}
                        alt={s.name}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <p className="label-xs mt-5 text-muted-foreground">{s.cat}</p>
                    <h3 className="mt-2 text-xl">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="border-t border-border py-24 lg:py-36">
          <div className={SECTION}>
            <Reveal>
              <div className="max-w-3xl">
                <Kicker>Processo</Kicker>
                <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Compromisso do início ao fim.
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="border-t border-border pt-6">
                    <span className="font-display block text-5xl font-extrabold leading-none text-ink/15">
                      {s.n}
                    </span>
                    <h3 className="mt-5 text-lg">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA — masonry */}
        <section id="galeria" className="py-24 lg:py-36">
          <div className={SECTION}>
            <Reveal>
              <div className="max-w-3xl">
                <Kicker>Galeria</Kicker>
                <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Obras, materiais e detalhes.
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {GALLERY.map((g, i) => (
                <div key={i} className="mb-5 break-inside-avoid overflow-hidden rounded-3xl">
                  <img
                    src={g.img}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 lg:pb-32">
          <div className={SECTION}>
            <Reveal>
              <div className="rounded-3xl bg-ink px-6 py-20 text-center lg:py-28">
                <Kicker>Vamos construir</Kicker>
                <h2 className="mx-auto mt-8 max-w-4xl text-balance text-3xl leading-[1.1] text-primary-foreground sm:text-4xl lg:text-5xl">
                  Seu projeto começa no papel. Nós ajudamos a transformá-lo em realidade.
                </h2>
                <a
                  href="#contato"
                  className="mt-12 inline-flex items-center justify-center rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-terracotta hover:text-white"
                >
                  Conversar sobre meu projeto
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="pb-24 lg:pb-32">
          <div className={SECTION}>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal>
                  <Kicker>Contato</Kicker>
                  <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
                    Vamos conversar sobre a sua obra?
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                    Conte um pouco sobre o seu projeto e agende uma conversa.
                  </p>
                  <div className="mt-10">
                    <ContactForm />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal delay={100}>
                  <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
                    <Kicker>Prefere falar agora?</Kicker>
                    <p className="mt-6 text-2xl leading-snug">
                      Atendimento direto, sem intermediários.
                    </p>
                    <span className="rule-terracotta mt-8" />
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-terracotta"
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
