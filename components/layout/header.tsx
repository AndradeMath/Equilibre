"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-aubergine/10 bg-[#fff8f4]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Equilibre — início"
          className="relative z-50 block h-14 w-[164px] sm:h-16 sm:w-[190px]"
        >
          <Image
            src="/brand-logo.png"
            alt="Equilibre"
            fill
            priority
            sizes="(max-width: 640px) 164px, 190px"
            className="object-contain mix-blend-multiply"
          />
        </Link>
        <Link
          href="/#newsletter"
          className="hidden rounded-full border border-raspberry/35 px-5 py-2.5 text-sm font-semibold text-raspberry transition-colors hover:bg-raspberry hover:text-white sm:inline-flex"
        >
          Uma pausa para você
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-aubergine/20 text-aubergine transition-colors hover:bg-raspberry/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav
        aria-label="Navegação principal"
        className="mx-auto hidden max-w-[1440px] items-center justify-between gap-x-4 gap-y-3 px-5 pb-4 sm:px-8 lg:flex lg:px-12"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-[0.76rem] font-semibold text-aubergine/90 transition-colors hover:text-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-[#fff8f4] px-8 pt-20 transition duration-300 lg:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navegação móvel" className="flex flex-col items-start gap-5">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="font-display text-3xl tracking-tight text-aubergine transition-colors hover:text-raspberry sm:text-4xl"
              style={{ transitionDelay: menuOpen ? `${index * 35}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-4 text-sm font-semibold text-raspberry"
          >
            Uma pausa para você
          </Link>
        </nav>
      </div>
    </header>
  );
}
