"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Equilibre — início"
          className="relative z-50 font-serif text-[1.8rem] leading-none tracking-[-0.06em] text-forest"
        >
          equilibre<span className="text-clay">.</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/75 transition-colors hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
            >
              {item.label}
            </Link>
          ))}
          <Button href="#comece" className="min-h-11 px-5 py-2.5">
            Encontre seu equilíbrio
          </Button>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-forest/15 text-forest md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-cream px-8 transition duration-300 md:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegação móvel" className="flex flex-col items-start gap-7">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="font-serif text-4xl tracking-tight text-forest"
              style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <Button
            href="#comece"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-3"
          >
            Encontre seu equilíbrio
          </Button>
        </nav>
      </div>
    </header>
  );
}
