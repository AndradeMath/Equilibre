import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { stories } from "@/lib/content";
import { BrandLeaf } from "@/components/ui/brand-leaf";

export const metadata: Metadata = {
  title: "Além da Receita",
  description:
    "Relatos e experiências sobre rotina, maternidade, trabalho e autocuidado, com sensibilidade e respeito.",
};

export default function AlemDaReceitaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-soft-yellow">
        <div aria-hidden="true" className="pointer-events-none absolute -right-4 top-4 text-raspberry/30">
          <BrandLeaf className="size-32 rotate-12 sm:size-44" />
        </div>
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
              Vozes, vivências e cotidiano
            </p>
            <h1 className="max-w-3xl font-sans text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-aubergine sm:text-7xl">
              Além da Receita
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-aubergine/80">
              Saúde também vive nas histórias que contamos. Um espaço para
              compartilhar experiências de rotina, maternidade, trabalho e
              autocuidado — sem fórmulas, sem julgamentos.
            </p>
          </div>
          <div className="relative aspect-[1.05] overflow-hidden rounded-[28px_28px_28px_120px] bg-soft-pink shadow-editorial sm:aspect-[1.2]">
            <div
              role="img"
              aria-label="Retrato natural de uma mulher em um momento de tranquilidade"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/equilibre/bem-estar-pausa.webp')",
              }}
            />
          </div>
        </div>
      </section>
      <section className="bg-soft-coral py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Relatos e experiências"
            title="A vida como ela acontece."
            description="Histórias sensíveis podem abrir espaço para novas conversas — sempre com contexto, autorização e cuidado com quem compartilha."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <article key={story.title}>
                <div className="relative aspect-[1.12] overflow-hidden rounded-[28px] bg-soft-turquoise shadow-card">
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
                <h2 className="mt-2 font-sans text-2xl font-bold leading-snug text-aubergine">
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
