import Link from "next/link";
import { navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-aubergine text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 lg:px-12 lg:pt-16">
        <div className="grid gap-10 border-b border-white/20 pb-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Link
              href="/"
              className="font-display text-3xl tracking-[-0.07em]"
              aria-label="Equilibre — início"
            >
              equilibre<span className="text-coral">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
              Saúde, conhecimento e bem-estar para acompanhar o seu ritmo.
            </p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow">
              Explore a Equilibre
            </h2>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Equilibre. Todos os direitos reservados.</p>
          <p>Conteúdo educativo. Não substitui orientação profissional individual.</p>
        </div>
      </div>
    </footer>
  );
}
