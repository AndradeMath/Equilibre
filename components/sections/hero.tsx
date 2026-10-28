import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandLeaf } from "@/components/ui/brand-leaf";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-24 hidden size-80 rounded-[44%_56%_54%_46%] bg-coral lg:block lg:size-[30rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-24 size-52 rounded-[44%_56%_54%_46%] bg-coral lg:hidden" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-24 size-72 rounded-[56%_44%_40%_60%] bg-soft-pink sm:size-[28rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[37%] top-12 hidden text-raspberry/80 lg:block">
        <BrandLeaf className="size-24 rotate-12 brand-leaf--animate" />
      </div>
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-12 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            Um espaço de saúde, conhecimento e acolhimento
          </p>
          <h1 className="max-w-[15ch] font-sans text-[3.25rem] font-bold leading-[1.02] tracking-[-0.045em] text-aubergine sm:text-7xl lg:text-[5.25rem]">
            Cuidar de você também faz parte da sua rotina.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-aubergine/80 sm:text-xl">
            Saúde, conhecimento e bem-estar para acompanhar o seu ritmo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#conteudos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-raspberry px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-aubergine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aubergine"
            >
              Explorar conteúdos
              <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/conheca-a-equilibre"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-raspberry px-6 py-3 text-sm font-semibold text-raspberry transition-colors hover:bg-raspberry hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
            >
              Conhecer a Equilibre
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-10 flex items-center gap-2 text-xs text-aubergine/65">
            <span aria-hidden="true" className="size-2 rounded-full bg-raspberry" />
            Leia, descubra e faça novas perguntas.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[610px] lg:max-w-none">
          <div className="relative aspect-[0.96] overflow-hidden rounded-[32px_32px_32px_140px] bg-soft-pink shadow-editorial sm:aspect-[1.04]">
            <div
              role="img"
              aria-label="Mulher aproveitando a luz do sol em um momento de tranquilidade"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=90')",
              }}
            />
          </div>
          <div className="absolute -bottom-5 -left-5 flex size-24 items-center justify-center rounded-full bg-yellow text-center text-xs font-bold leading-tight text-aubergine shadow-card sm:size-28">
            Seu ritmo.<br />Seu cuidado.
          </div>
          <span aria-hidden="true" className="absolute -right-3 top-10 flex size-16 items-center justify-center rounded-full bg-turquoise text-white sm:size-20">
            <BrandLeaf className="size-10 text-aubergine" />
          </span>
        </div>
      </div>
    </section>
  );
}
