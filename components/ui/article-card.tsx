import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articleSlug, type Article } from "@/lib/content";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const articleHref = `/artigos/${articleSlug(article.title)}`;

  return (
    <article
      className={`group ${featured ? "grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10" : ""}`}
    >
      <Link
        href={articleHref}
        aria-label={`${article.title} — ${article.readingTime}`}
        className={`relative block overflow-hidden rounded-[48%_48%_1.25rem_1.25rem] bg-turquoise/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry ${featured ? "aspect-[1.15] md:aspect-[1.18]" : "aspect-[1.28]"}`}
      >
        <div
          role="img"
          aria-label={article.imageAlt}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ backgroundImage: `url("${article.image}")` }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-semibold tracking-wide text-aubergine">
          {article.category}
        </span>
      </Link>
      <div className={featured ? "py-2" : "pt-5"}>
        <p className="text-xs font-medium text-raspberry">{article.readingTime}</p>
        <h3
          className={`mt-2 font-display leading-tight tracking-[-0.025em] text-aubergine ${featured ? "text-3xl sm:text-4xl lg:text-5xl" : "text-[1.65rem]"}`}
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
