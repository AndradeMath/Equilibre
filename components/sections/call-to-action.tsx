import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CallToAction() {
  return (
    <section id="comece" className="scroll-mt-20 bg-cream px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute -left-20 -top-32 size-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -left-8 -top-20 size-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-44 -right-16 size-96 rounded-full bg-sage/10 blur-2xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-sage">
              O seu momento começa aqui
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.04em] text-cream sm:text-6xl">
              E se hoje fosse o dia de voltar para você?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-cream/70 sm:text-lg sm:leading-8">
              Não precisa ter todas as respostas. Basta dar espaço para a
              primeira pergunta.
            </p>
            <Button
              href="mailto:ola@equilibre.com.br?subject=Quero%20conhecer%20a%20Equilibre"
              variant="light"
              className="mt-9"
              showArrow={false}
            >
              Vamos conversar
              <ArrowUpRight aria-hidden="true" size={16} />
            </Button>
            <p className="mt-5 text-xs text-cream/50">
              Sem compromisso. No seu tempo.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
