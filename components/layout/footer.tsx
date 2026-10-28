import Link from "next/link";
import { Instagram, MoveUpRight } from "lucide-react";
import { navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#1d3028] text-cream">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-serif text-3xl tracking-[-0.06em]"
              aria-label="Equilibre — início"
            >
              equilibre<span className="text-sage">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-cream/65">
              Um espaço para voltar a você. Bem-estar com intenção, leveza e
              presença.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              Explore
            </h2>
            <nav aria-label="Navegação do rodapé" className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-cream/75 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              Vamos conversar?
            </h2>
            <Link
              href="mailto:ola@equilibre.com.br"
              className="mt-5 inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-white"
            >
              ola@equilibre.com.br
              <MoveUpRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              aria-label="Visite o Instagram da Equilibre"
              className="mt-5 flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <Instagram size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Equilibre. Todos os direitos reservados.</p>
          <p>Feito com intenção, para a vida como ela é.</p>
        </div>
      </div>
    </footer>
  );
}
