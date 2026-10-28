import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpenText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { questions } from "@/lib/content";

export const metadata: Metadata = {
  title: "EQUILIBRE Responde",
  description:
    "Perguntas sobre saúde feminina respondidas de forma clara, com responsabilidade editorial e referências verificáveis.",
};

export default function EquilibreRespondePage() {
  return (
    <>
      <section className="bg-soft-turquoise">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            Perguntas que merecem boas respostas
          </p>
          <h1 className="max-w-4xl font-sans text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-aubergine sm:text-7xl">
            EQUILIBRE Responde
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-aubergine/80">
            Um espaço de educação em saúde para esclarecer termos, contextualizar
            pesquisas e ajudar você a preparar perguntas para uma conversa com um
            profissional.
          </p>
        </div>
      </section>
      <section className="bg-soft-pink py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Informação clara, com o contexto que ela merece."
            description="As respostas abaixo são modelos editoriais. Ainda precisam de revisão profissional e referências verificáveis antes de serem consideradas conteúdo de saúde publicado."
          />
          <div className="mt-10 divide-y divide-aubergine/15 border-y border-aubergine/15">
            {questions.map((item, index) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded-sm font-sans text-2xl font-bold leading-snug text-aubergine marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry sm:text-3xl [&::-webkit-details-marker]:hidden">
                  <span className="flex gap-4">
                    <span className="pt-1 font-sans text-xs font-semibold text-raspberry">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>
                  <span aria-hidden="true" className="mt-1 text-2xl text-raspberry transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="ml-8 mt-5 max-w-2xl border-l-2 border-coral pl-5 sm:ml-10">
                  <p className="leading-7 text-aubergine/85">{item.answer}</p>
                  <p className="mt-5 text-sm font-semibold text-aubergine">
                    Responsável editorial: {item.editor}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-raspberry">
                    Revisão profissional: pendente antes da publicação
                  </p>
                  <div className="mt-4 flex gap-2 text-xs leading-5 text-aubergine/70">
                    <BookOpenText size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-turquoise" />
                    <span>{item.references}</span>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <p className="mt-7 text-xs leading-6 text-aubergine/65">
            Este espaço é educativo e não substitui consulta, diagnóstico ou
            orientação individual de profissionais de saúde. Se você tiver
            dúvidas sobre a própria saúde, procure atendimento qualificado.
          </p>
          <Link
            href="/editorias/entenda-seu-corpo"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-raspberry hover:text-aubergine"
          >
            Explore conteúdos sobre o corpo
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
