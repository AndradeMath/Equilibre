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
      <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-yellow" : "text-raspberry"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-sans font-bold text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-aubergine"}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${centered ? "mx-auto" : ""} ${light ? "text-white/80" : "text-aubergine/75"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
