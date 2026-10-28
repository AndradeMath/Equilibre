import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Além da Receita",
  description:
    "Relatos e experiências sobre rotina, maternidade, trabalho e autocuidado, com sensibilidade e respeito.",
};

export default function AlemDaReceitaPage() {
  return (
    <>
      <section className="bg-coral/15">
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_0.8fr] lg:px-12">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
              Vozes, vivências e cotidiano
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.045em] text-aubergine sm:text-7xl">
              Além da Receita
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-aubergine/80">
              Saúde também vive nas histórias que contamos. Um espaço para
              compartilhar experiências de rotina, maternidade, trabalho e
              autocuidado — sem fórmulas, sem julgamentos.
            </p>
          </div>
          <div className="relative aspect-[1.25] overflow-hidden rounded-[48%_48%_1.5rem_1.5rem] bg-turquoise/25">
            <div
              role="img"
              aria-label="Retrato natural de uma mulher em um momento de tranquilidade"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Relatos e experiências"
            title="A vida como ela acontece."
            description="Histórias sensíveis podem abrir espaço para novas conversas — sempre com contexto, autorização e cuidado com quem compartilha."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <article key={story.title}>
                <div className="relative aspect-[1.12] overflow-hidden rounded-[48%_48%_1.25rem_1.25rem] bg-turquoise/20">
                  <div
                    role="img"
                    aria-label={story.imageAlt}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("${story.image}")` }}
                  />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-raspberry">
                  {story.category}
                </p>
                <h2 className="mt-2 font-display text-2xl leading-snug text-aubergine">
                  {story.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-aubergine/75">
                  {story.excerpt}
                </p>
                <p className="mt-4 text-xs text-aubergine/60">
                  {story.author} · História demonstrativa {index + 1}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-aubergine">
                  Em preparação
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-aubergine/65">
            Os exemplos acima são demonstrativos, não relatos reais. Histórias
            pessoais só devem ser publicadas com consentimento explícito e
            possibilidade de revisão por quem as compartilha.
          </p>
        </div>
      </section>
    </>
  );
}
