import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpenText } from "lucide-react";
import { ArticleCard } from "@/components/ui/article-card";
import { EditorialHero } from "@/components/sections/editorial-hero";
import { sections, articleSlug, allArticles } from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const palette = ["coral", "turquoise", "yellow", "raspberry"] as const;

export function generateStaticParams() {
  return allArticles.map((article) => ({ slug: articleSlug(article.title) }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = allArticles.find((entry) => articleSlug(entry.title) === slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = allArticles.find((entry) => articleSlug(entry.title) === slug);

  if (!article) notFound();

  const sectionIndex = sections.findIndex(
    (entry) => entry.slug === article.sectionSlug,
  );
  const relatedArticles = sections[sectionIndex].articles
    .filter((entry) => entry.title !== article.title)
    .slice(0, 2);

  return (
    <>
      <EditorialHero
        eyebrow={`${article.sectionTitle} · ${article.readingTime}`}
        title={article.title}
        description={article.excerpt}
        image={article.image}
        imageAlt={article.imageAlt}
        tone={palette[sectionIndex]}
      />
      <article className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href={`/editorias/${article.sectionSlug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-raspberry hover:text-aubergine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Voltar para {article.sectionTitle}
          </Link>
          <div className="mt-10 border-y border-aubergine/15 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-raspberry">
              Conteúdo em preparação
            </p>
            <p className="mt-3 font-sans text-2xl font-bold leading-snug text-aubergine sm:text-3xl">
              Esta pauta ainda precisa de apuração, revisão especializada e
              referências antes de ser publicada como conteúdo educativo.
            </p>
            <p className="mt-4 leading-7 text-aubergine/75">
              A chamada e o resumo são demonstrativos. Para priorizar
              informação confiável, esta página não apresenta orientações de
              saúde sem conteúdo validado por profissionais e fontes
              verificáveis.
            </p>
            <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-aubergine/65">
              <BookOpenText size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-turquoise" />
              Referências e responsável pela revisão serão informados antes da
              publicação.
            </p>
          </div>
        </div>
      </article>
      {relatedArticles.length > 0 && (
        <section className="bg-soft-coral py-14 sm:py-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <h2 className="font-sans text-3xl font-bold text-aubergine sm:text-4xl">
              Continue nesta editoria
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.title} article={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
