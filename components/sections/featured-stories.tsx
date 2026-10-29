import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stories } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandLeaf } from "@/components/ui/brand-leaf";

export function FeaturedStories() {
  const [lead, ...rest] = stories;

  return (
    <section className="relative overflow-hidden bg-soft-yellow py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-6 top-8 hidden text-coral/40 lg:block">
        <BrandLeaf className="size-36 -rotate-12" />
      </div>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Além da Receita"
            title="Histórias que também falam de cuidado."
            description="Experiências reais sobre rotina, mudanças e as muitas formas de cuidar de si."
          />
          <Link
            href="/alem-da-receita"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-raspberry hover:text-aubergine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
          >
            Conheça as histórias
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="group">
            <Link
              href="/alem-da-receita"
              className="relative block aspect-[1.35] overflow-hidden rounded-[28px] bg-coral/20 shadow-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
              aria-label={`Leia: ${lead.title}`}
            >
              <div
                role="img"
                aria-label={lead.imageAlt}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url("${lead.image}")` }}
              />
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-raspberry">
              {lead.category}
            </p>
            <h3 className="mt-2 max-w-2xl font-sans text-3xl font-bold leading-tight tracking-tight text-aubergine sm:text-4xl">
              <Link href="/alem-da-receita" className="hover:text-raspberry">
                {lead.title}
              </Link>
            </h3>
            <p className="mt-3 max-w-xl leading-7 text-aubergine/75">{lead.excerpt}</p>
          </article>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((story) => (
              <article key={story.title} className="group grid grid-cols-[0.8fr_1.2fr] items-center gap-5">
                <Link
                  href="/alem-da-receita"
                  aria-label={`Leia: ${story.title}`}
                  className="relative aspect-square overflow-hidden rounded-[24px] bg-turquoise/20 shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
                >
                  <div
                    role="img"
                    aria-label={story.imageAlt}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url("${story.image}")` }}
                  />
                </Link>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-raspberry">
                    {story.category}
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-bold leading-snug text-aubergine sm:text-2xl">
                    <Link href="/alem-da-receita" className="hover:text-raspberry">
                      {story.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-aubergine/75">
                    {story.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs leading-5 text-aubergine/60">
          Histórias demonstrativas para composição editorial. Publique relatos reais somente com autorização das pessoas retratadas.
        </p>
      </div>
    </section>
  );
}
