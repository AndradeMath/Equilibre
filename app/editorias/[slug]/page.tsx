import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialHero } from "@/components/sections/editorial-hero";
import { ArticleCard } from "@/components/ui/article-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { sections } from "@/lib/content";

type EditorialPageProps = {
  params: Promise<{ slug: string }>;
};

const tones = ["coral", "turquoise", "yellow", "raspberry"] as const;

export function generateStaticParams() {
  return sections.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EditorialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = sections.find((entry) => entry.slug === slug);

  if (!section) return {};

  return {
    title: section.title,
    description: section.description,
  };
}

export default async function EditorialPage({ params }: EditorialPageProps) {
  const { slug } = await params;
  const index = sections.findIndex((entry) => entry.slug === slug);
  const section = sections[index];

  if (!section) notFound();

  const [featured, ...articles] = section.articles;

  return (
    <>
      <EditorialHero
        eyebrow="Explore nossas editorias"
        title={section.title}
        description={section.description}
        image={section.image}
        imageAlt={section.imageAlt}
        topics={section.topics}
        tone={tones[index]}
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Em destaque"
            title="Uma leitura para começar."
            description="Conteúdos educativos para apoiar novas conversas e descobertas."
          />
          <div className="mt-10">
            <ArticleCard article={featured} featured />
          </div>
        </div>
      </section>
      <section className="bg-coral/10 py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow={section.title}
            title="Continue explorando."
            description={`Leituras sobre ${section.topics.join(", ").toLowerCase()}.`}
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-aubergine/65">
            Pautas demonstrativas. Os conteúdos de saúde devem passar por
            revisão especializada e receber referências verificáveis antes da
            publicação.
          </p>
        </div>
      </section>
      <nav aria-label="Outras editorias" className="bg-white py-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap gap-3 px-5 sm:px-8 lg:px-12">
          {sections
            .filter((entry) => entry.slug !== slug)
            .map((entry) => (
              <a
                key={entry.slug}
                href={`/editorias/${entry.slug}`}
                className="rounded-full border border-aubergine/20 px-4 py-2.5 text-sm font-medium text-aubergine transition-colors hover:border-raspberry hover:text-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-raspberry"
              >
                {entry.title}
              </a>
            ))}
        </div>
      </nav>
    </>
  );
}
