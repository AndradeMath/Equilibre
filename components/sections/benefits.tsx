import { benefits } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-20 bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Bem-estar que cabe na vida"
            title="O que muda quando você se escolhe."
            description="Não é sobre fazer mais. É sobre sentir mais presença no que já faz parte de você."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {benefits.map(({ number, title, description, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 0.08} className="h-full">
              <article className="group flex h-full min-h-[265px] flex-col bg-cream p-7 transition-colors duration-300 hover:bg-[#f5f2e9] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.18em] text-forest/45">
                    {number}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-full bg-sage/25 text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                    <Icon size={19} aria-hidden="true" strokeWidth={1.6} />
                  </span>
                </div>
                <h3 className="mt-10 font-serif text-2xl tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
