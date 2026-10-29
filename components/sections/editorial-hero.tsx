type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  topics?: string[];
  tone?: "coral" | "raspberry" | "turquoise" | "yellow";
};

const toneClasses = {
  coral: "bg-soft-coral",
  raspberry: "bg-soft-pink",
  turquoise: "bg-soft-turquoise",
  yellow: "bg-soft-yellow",
};

export function EditorialHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  topics,
  tone = "coral",
}: EditorialHeroProps) {
  return (
    <section className={`${toneClasses[tone]} overflow-hidden`}>
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:px-12 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-sans text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-aubergine sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-aubergine/80 sm:text-lg sm:leading-8">
            {description}
          </p>
          {topics && (
            <ul aria-label="Temas desta editoria" className="mt-8 flex flex-wrap gap-2.5">
              {topics.map((topic, index) => (
                <li
                  key={topic}
                  className={`rounded-full px-4 py-2 text-xs font-semibold text-aubergine ${index % 2 === 0 ? "bg-cream" : "bg-yellow/50"}`}
                >
                  {topic}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative mx-auto w-full max-w-[600px]">
          <div className="group relative aspect-[1.08] overflow-hidden rounded-[28px_28px_28px_120px] bg-cream shadow-editorial sm:aspect-[1.12]">
            <div
              role="img"
              aria-label={imageAlt}
              className={`absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03] ${image.includes("saude-feminina-editorial") ? "bg-contain bg-no-repeat bg-center" : "bg-cover bg-center"}`}
              style={{
                backgroundImage: `url("${image}")`,
                backgroundColor: "var(--color-cream)",
              }}
            />
          </div>
          <span aria-hidden="true" className="absolute -bottom-4 -left-5 size-20 rounded-full bg-yellow sm:size-24" />
          <span aria-hidden="true" className="absolute -right-3 top-8 size-12 rounded-full bg-raspberry sm:size-16" />
        </div>
      </div>
    </section>
  );
}
