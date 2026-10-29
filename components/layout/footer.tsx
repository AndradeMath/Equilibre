import Link from "next/link";
import Image from "next/image";
import { BrandLeaf } from "@/components/ui/brand-leaf";
import { navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-aubergine text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-20 text-coral/25">
        <BrandLeaf className="size-64 rotate-12 sm:size-80" />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 lg:px-12 lg:pt-16">
        <div className="grid gap-10 border-b border-white/20 pb-10 md:grid-cols-[1fr_2fr]">
          <div className="relative">
            <Link
              href="/"
              className="relative block h-16 w-48 rounded-[20px] bg-cream px-3"
              aria-label="Equilibre — início"
            >
              <Image
                src="/brand-logo.png"
                alt="Equilibre"
                fill
                sizes="192px"
                className="object-contain"
              />
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
