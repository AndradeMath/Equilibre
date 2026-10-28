import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Conheça a Equilibre",
  description:
    "Conheça o propósito editorial da Equilibre e saiba como comunicamos pesquisa e tecnologias em saúde com responsabilidade.",
};

const principles = [
  {
    title: "Nosso propósito",
    description:
      "Aproximar informação sobre saúde feminina com linguagem clara, acolhedora e apoiada por fontes verificáveis.",
  },
  {
    title: "Pesquisa com contexto",
    description:
      "Explicar perguntas, etapas e limites da pesquisa sem apresentar hipóteses como resultados estabelecidos.",
  },
  {
    title: "Cuidado na comunicação",
    description:
      "Separar conteúdo educativo de orientação individual e deixar visível quando evidências ou validações ainda são necessárias.",
  },
];

export default function ConhecaEquilibrePage() {
  return (
    <>
      <section className="bg-soft-pink">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            Informação, cuidado e pesquisa
          </p>
          <h1 className="max-w-4xl font-sans text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-aubergine sm:text-7xl">
            Conheça a Equilibre
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-aubergine/80">
            Um projeto que aproxima educação em saúde feminina, histórias e
            conversas sobre inovação — com clareza sobre o que sabemos e sobre
            o que ainda precisa ser investigado.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="O que nos guia"
            title="Conhecimento para acompanhar cada pessoa e cada fase."
            description="A Equilibre é uma plataforma editorial e educativa. Este espaço institucional também explica, com transparência, as propostas de inovação associadas à marca."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article key={principle.title} className="rounded-[28px] bg-soft-coral p-6 shadow-card sm:p-7">
                <span className="text-xs font-semibold tracking-[0.16em] text-raspberry">
                  0{index + 1}
                </span>
                <h2 className="mt-4 font-sans text-2xl font-bold text-aubergine">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-aubergine/75">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-turquoise py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
              Tecnologia em contexto
            </p>
            <h2 className="font-sans text-4xl font-bold leading-tight tracking-tight text-aubergine sm:text-5xl">
              Microagulhas dissolvíveis: uma proposta em pesquisa.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-aubergine/80">
            <p>
              Microagulhas dissolvíveis são uma abordagem tecnológica
              investigada em diferentes contextos de pesquisa. O conceito
              envolve estruturas microscópicas desenvolvidas para se dissolver,
              mas a descrição de um conceito não comprova segurança, eficácia ou
              disponibilidade de uma aplicação específica.
            </p>
            <p>
              Para apresentar qualquer tecnologia associada à Equilibre,
              detalhes sobre formulação, finalidade, etapa de desenvolvimento,
              dados de estudo e situação regulatória precisam ser confirmados e
              documentados pela equipe responsável.
            </p>
            <p className="rounded-[24px] border border-aubergine/15 bg-cream p-5 text-sm leading-6 shadow-card">
              <strong className="text-aubergine">Transparência:</strong> o
              estágio de pesquisa e validação de uma proposta específica da
              Equilibre não foi informado no material disponível para este
              site. Portanto, não é apresentado aqui como validado, comprovado
              ou disponível.
            </p>
            <p className="text-sm">
              Nenhuma informação nesta página constitui promessa de resultado,
              alegação terapêutica ou recomendação médica.
            </p>
            <Link
              href="/editorias/ciencia-e-inovacao"
              className="inline-flex items-center gap-2 text-sm font-semibold text-raspberry hover:text-aubergine"
            >
              Explore ciência & inovação
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
