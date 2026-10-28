import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-yellow/45">
      <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full border border-aubergine/10 sm:size-[30rem]" />
      <div aria-hidden="true" className="absolute -right-12 -top-12 size-56 rounded-full border border-aubergine/10 sm:size-[24rem]" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-12 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            Um espaço de saúde, conhecimento e acolhimento
          </p>
          <h1 className="font-display text-[3.4rem] leading-[0.98] tracking-[-0.05em] text-aubergine sm:text-7xl lg:text-[5.5rem]">
            Cuidar de você também faz parte da sua rotina.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-aubergine/80 sm:text-xl">
            Saúde, conhecimento e bem-estar para acompanhar o seu ritmo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#conteudos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-aubergine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aubergine"
            >
              Explorar conteúdos
              <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/conheca-a-equilibre"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-aubergine/30 px-6 py-3 text-sm font-semibold text-aubergine transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
            >
              Conhecer a Equilibre
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-10 flex items-center gap-2 text-xs font-medium text-aubergine/65">
            <span aria-hidden="true" className="size-2 rounded-full bg-raspberry" />
            Leia, descubra e faça novas perguntas.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[610px] lg:max-w-none">
          <div className="relative aspect-[1.08] overflow-hidden rounded-[48%_48%_1.5rem_1.5rem] bg-turquoise/30">
            <div
              role="img"
              aria-label="Mulher aproveitando a luz do sol em um momento de tranquilidade"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgb(50 23 37 / 0%) 48%, rgb(50 23 37 / 18%) 100%), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85')",
              }}
            />
          </div>
          <div className="absolute -bottom-5 -left-4 flex size-24 items-center justify-center rounded-full bg-coral text-center font-display text-sm leading-tight text-aubergine sm:size-28">
            Seu ritmo.<br />Seu cuidado.
          </div>
          <span aria-hidden="true" className="absolute -right-3 top-10 size-14 rounded-full bg-raspberry sm:size-20" />
        </div>
      </div>
    </section>
  );
}
