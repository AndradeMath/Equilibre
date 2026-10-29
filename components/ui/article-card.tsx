import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articleSlug, type Article } from "@/lib/content";
import { BrandLeaf } from "@/components/ui/brand-leaf";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const articleHref = `/artigos/${articleSlug(article.title)}`;
  const imageFit = article.image.includes("quatro-contextos")
    ? "bg-contain bg-no-repeat bg-center"
    : "bg-cover bg-center";

  return (
    <article
      className={`group overflow-hidden rounded-[28px] bg-cream shadow-card ${featured ? "grid gap-6 p-4 sm:p-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8" : "p-4 sm:p-5"}`}
    >
      <Link
        href={articleHref}
        aria-label={`${article.title} — ${article.readingTime}`}
        className={`relative block overflow-hidden rounded-[24px] bg-soft-turquoise focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry ${featured ? "aspect-[1.05] md:aspect-[1.12]" : "aspect-[1.45]"}`}
      >
        <div
          role="img"
          aria-label={article.imageAlt}
          className={`absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04] ${imageFit}`}
          style={{
            backgroundImage: `url("${article.image}")`,
            backgroundColor: "var(--color-cream)",
          }}
        />
        <BrandLeaf className="absolute bottom-3 right-3 size-10 text-yellow drop-shadow sm:size-12" />
        <span className="absolute left-4 top-4 rounded-full bg-yellow px-3 py-1.5 text-[0.68rem] font-semibold tracking-wide text-aubergine">
          {article.category}
        </span>
      </Link>
      <div className={featured ? "px-2 py-2 md:px-0" : "px-1 pt-4"}>
        <p className="text-xs font-semibold text-raspberry">{article.readingTime}</p>
        <h3
          className={`mt-2 font-sans font-bold leading-tight tracking-[-0.035em] text-aubergine ${featured ? "text-3xl sm:text-4xl lg:text-[2.75rem]" : "text-[1.45rem]"}`}
        >
          <Link
            href={articleHref}
            className="rounded-sm transition-colors hover:text-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
          >
            {article.title}
          </Link>
        </h3>
        <p className={`mt-3 leading-7 text-aubergine/75 ${featured ? "max-w-xl text-base sm:text-lg" : "text-sm"}`}>
          {article.excerpt}
        </p>
        <Link
          href={articleHref}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aubergine transition-colors hover:text-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
        >
          {featured ? "Continuar explorando" : "Ler conteúdo"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
