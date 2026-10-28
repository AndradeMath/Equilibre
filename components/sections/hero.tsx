import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-cream pt-28 sm:min-h-[820px] lg:min-h-[790px] lg:pt-32">
      <div className="pointer-events-none absolute -left-44 top-52 size-[28rem] rounded-full border border-forest/[0.06]" />
      <div className="pointer-events-none absolute -left-28 top-72 size-[22rem] rounded-full border border-forest/[0.06]" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-0">
        <Reveal className="relative z-10 max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/55 px-4 py-2 text-xs font-medium tracking-wide text-forest">
            <Sparkles size={14} aria-hidden="true" className="text-clay" />
            <span>Seu bem-estar, no seu próprio ritmo</span>
          </div>
          <h1 className="font-serif text-[3.55rem] leading-[0.98] tracking-[-0.055em] text-ink sm:text-7xl lg:text-[5.5rem]">
            Volte para
            <br />
            <span className="italic text-forest">o seu centro.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Uma vida mais leve não começa quando tudo se acalma. Começa quando
            você encontra espaço para si, mesmo em meio a tudo.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#comece">Comece por você</Button>
            <a
              href="#essencia"
              className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-medium text-forest transition-colors hover:text-clay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
            >
              Conheça a Equilibre
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-forest/10 pt-5">
            <div className="flex -space-x-2" aria-hidden="true">
              {["M", "A", "C"].map((letter, index) => (
                <span
                  key={letter}
                  className={`flex size-9 items-center justify-center rounded-full border-2 border-cream text-xs font-medium text-white ${["bg-[#a77e6b]", "bg-[#7a8a74]", "bg-[#c39b70]"][index]}`}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="text-xs leading-5 text-muted">
              <span className="font-semibold text-ink">Um espaço seu.</span>
              <br />
              Sem pressa, sem perfeição.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14} className="relative mx-auto w-full max-w-[570px] lg:max-w-none">
          <div className="relative aspect-[0.91] overflow-hidden rounded-[48%_48%_14px_14px] bg-[#d7d9ca] shadow-card sm:aspect-[1.04] lg:aspect-[0.92]">
            <div
              role="img"
              aria-label="Mulher em momento de tranquilidade junto à natureza"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgb(29 48 40 / 0%) 45%, rgb(29 48 40 / 35%) 100%), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85')",
              }}
            />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8">
              <div className="rounded-2xl border border-white/30 bg-white/85 p-4 shadow-lg backdrop-blur-md sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest/60">
                  Um lembrete para hoje
                </p>
                <p className="mt-2 font-serif text-xl leading-tight text-forest sm:text-2xl">
                  Você também merece<br />o seu próprio cuidado.
                </p>
              </div>
              <div className="hidden size-16 items-center justify-center rounded-full border border-white/70 text-white sm:flex">
                <span className="font-serif text-lg italic">eq.</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 top-12 -z-0 size-24 rounded-full bg-sage/45 blur-2xl sm:-right-8 sm:size-36" />
          <div className="absolute -bottom-5 -left-4 -z-0 size-28 rounded-full bg-clay/25 blur-2xl sm:-left-8 sm:size-40" />
        </Reveal>
      </div>
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-forest/50 lg:flex">
        <span className="h-px w-8 bg-forest/30" />
        Deslize para descobrir
        <span className="h-px w-8 bg-forest/30" />
      </div>
    </section>
  );
}
