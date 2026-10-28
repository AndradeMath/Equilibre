import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredArticles } from "@/lib/content";
import { ArticleCard } from "@/components/ui/article-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedArticles() {
  const [lead, ...articles] = featuredArticles;

  return (
    <section id="conteudos" className="scroll-mt-8 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Leituras em destaque"
            title="Informação que abre novas conversas."
            description="Conteúdos editoriais para entender, perguntar e descobrir no seu tempo."
          />
          <Link
            href="/editorias/entenda-seu-corpo"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-raspberry hover:text-aubergine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
          >
            Descobrir editorias
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ArticleCard article={lead} featured />
          </Reveal>
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-1">
            {articles.map((article, index) => (
              <Reveal key={article.title} delay={index * 0.08}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs leading-5 text-aubergine/60">
          Pautas e chamadas demonstrativas. Conteúdo de saúde deve passar por revisão especializada e incluir fontes verificáveis antes da publicação.
        </p>
      </div>
    </section>
  );
}
