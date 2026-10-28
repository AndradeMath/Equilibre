import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section id="historias" className="scroll-mt-20 bg-[#f7f5ef] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Histórias de dentro para fora"
            title="Quando o cuidado encontra espaço."
            description="Cada caminho é único. Estas são algumas das pessoas que escolheram começar."
            centered
          />
        </Reveal>
        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-forest/10 bg-cream p-7 sm:p-8">
                <div
                  className="flex gap-1 text-clay"
                  aria-label="5 de 5 estrelas"
                  role="img"
                >
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-7 flex-1 font-serif text-xl leading-8 text-ink sm:text-[1.35rem]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-forest/10 pt-5">
                  <p className="text-sm font-semibold text-forest">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-muted">{testimonial.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Depoimentos ilustrativos. Substitua por relatos autorizados de clientes.
        </p>
      </div>
    </section>
  );
}
