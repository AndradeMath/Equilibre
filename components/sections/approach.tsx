import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Approach() {
  return (
    <section id="essencia" className="scroll-mt-20 bg-[#f7f5ef] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-24 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="A nossa essência"
            title="O equilíbrio não é um destino. É um jeito de se encontrar."
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:pb-1">
          <p className="text-base leading-8 text-muted sm:text-lg">
            Acreditamos que cuidar de si não precisa ser complicado, caro ou
            perfeito. É sobre escutar o que você precisa e fazer escolhas
            possíveis — uma pausa, uma respiração, um novo começo.
          </p>
          <div className="mt-8 flex items-center gap-3 border-t border-forest/15 pt-5">
            <span className="flex size-10 items-center justify-center rounded-full bg-sage/35 text-forest">
              <ArrowDownRight size={18} aria-hidden="true" />
            </span>
            <p className="text-sm font-medium text-forest">
              Um passo de cada vez já é caminho.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
