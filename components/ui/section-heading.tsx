type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-5 text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-sage" : "text-forest/65"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl ${light ? "text-cream" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${centered ? "mx-auto" : ""} ${light ? "text-cream/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
