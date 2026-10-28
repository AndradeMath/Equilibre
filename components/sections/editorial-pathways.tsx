import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sections } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const pathways = [sections[0], sections[2], sections[3]];

export function EditorialPathways() {
  return (
    <section className="relative overflow-hidden bg-soft-coral py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Por onde você quer começar?"
          title="Conteúdos para acompanhar o seu momento."
          description="Explore temas de saúde, ciência e bem-estar com informação feita para ser lida e compartilhada."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pathways.map((section, index) => (
            <Reveal key={section.slug} delay={index * 0.08}>
              <article className="relative h-full overflow-hidden rounded-[28px] bg-cream px-7 pb-7 pt-10 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:px-8 sm:pt-12">
              <span
                aria-hidden="true"
                className={`absolute -right-8 -top-8 size-28 rounded-full ${index === 0 ? "bg-yellow/75" : index === 1 ? "bg-turquoise/35" : "bg-raspberry/20"}`}
              />
              <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-raspberry">
                Caminho 0{index + 1}
              </p>
              <h3 className="relative mt-8 font-display text-3xl leading-tight text-aubergine">
                {section.title}
              </h3>
              <p className="relative mt-3 min-h-[5rem] text-sm leading-6 text-aubergine/75">
                {section.intro}
              </p>
              <ul className="relative mt-5 flex flex-wrap gap-2" aria-label={`Temas: ${section.title}`}>
                {section.topics.slice(0, 3).map((topic) => (
                  <li key={topic} className="rounded-full bg-aubergine/5 px-3 py-1.5 text-xs text-aubergine/80">
                    {topic}
                  </li>
                ))}
              </ul>
              <Link
                href={`/editorias/${section.slug}`}
                className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-aubergine transition-colors hover:text-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
              >
                Explorar editoria
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link
            href="/editorias/cuidado-em-todas-as-fases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-aubergine underline decoration-coral decoration-2 underline-offset-4 hover:text-raspberry"
          >
            Explore também: Cuidado em todas as fases
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
