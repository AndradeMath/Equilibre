import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  ["Pare por um instante", "Não precisa de muito. Só um momento que seja seu."],
  ["Escute o que precisa", "Sem julgamento, sem lista de tarefas. Apenas presença."],
  ["Escolha o próximo passo", "Pequeno, possível e gentil com o seu momento."],
];

export function Ritual() {
  return (
    <section id="rituais" className="scroll-mt-20 overflow-hidden bg-[#e8ebe1] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
        <Reveal className="relative">
          <div className="relative aspect-[0.92] overflow-hidden rounded-[180px_180px_24px_24px] bg-[#bdc4b5]">
            <div
              role="img"
              aria-label="Ritual de autocuidado em um ambiente calmo e natural"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgb(29 48 40 / 5%), rgb(29 48 40 / 15%)), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1100&q=85')",
              }}
            />
          </div>
          <div className="absolute -bottom-6 -right-2 max-w-[210px] rounded-2xl bg-cream p-5 shadow-card sm:-right-7 sm:p-6">
            <p className="font-serif text-3xl tracking-tight text-forest">5 min</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              podem ser o começo de um dia diferente.
            </p>
          </div>
          <div className="absolute -left-4 top-12 hidden size-20 rounded-full border border-forest/15 sm:block" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-forest/65">
            Um ritual só seu
          </p>
          <h2 className="max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-6xl">
            Comece pequeno.<br />
            <span className="italic text-forest">Sinta a diferença.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Não existe um jeito certo de cuidar de si. Existe o seu jeito — e
            ele pode começar com três passos simples.
          </p>
          <ol className="mt-9 grid gap-6">
            {steps.map(([title, description], index) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-forest/20 text-xs text-forest">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button href="#comece" variant="outline" className="mt-9" showArrow={false}>
            Descubra seu próximo passo
            <Check aria-hidden="true" size={16} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
