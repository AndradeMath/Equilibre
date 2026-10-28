"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

const choices = [
  {
    label: "Quero entender melhor meu corpo",
    category: "Entenda seu corpo",
    href: "/editorias/entenda-seu-corpo",
  },
  {
    label: "Quero encontrar ideias para o dia a dia",
    category: "Bem-estar na rotina",
    href: "/editorias/bem-estar-na-rotina",
  },
  {
    label: "Quero conhecer pesquisas e novas tecnologias",
    category: "Ciência & inovação",
    href: "/editorias/ciencia-e-inovacao",
  },
  {
    label: "Quero ler sobre as diferentes fases da vida",
    category: "Cuidado em todas as fases",
    href: "/editorias/cuidado-em-todas-as-fases",
  },
];

export function SelfCareQuiz() {
  const [selected, setSelected] = useState<(typeof choices)[number] | null>(null);

  return (
    <section className="bg-turquoise/20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-12">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            Um convite à descoberta
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] text-aubergine sm:text-5xl lg:text-6xl">
            Como anda seu autocuidado?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-aubergine/80 sm:text-lg sm:leading-8">
            Não existe resposta certa. Escolha o tema que faz sentido para você
            agora e encontre uma leitura para continuar a conversa.
          </p>
          <p className="mt-5 text-xs leading-5 text-aubergine/65">
            Esta atividade não avalia sua saúde e não oferece diagnósticos ou
            recomendações médicas. Sua escolha não é armazenada.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-6 sm:p-9">
          {!selected ? (
            <fieldset>
              <legend className="font-display text-2xl leading-snug text-aubergine sm:text-3xl">
                O que você gostaria de explorar hoje?
              </legend>
              <div className="mt-6 grid gap-3">
                {choices.map((choice) => (
                  <button
                    key={choice.href}
                    type="button"
                    onClick={() => setSelected(choice)}
                    className="group flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-aubergine/15 px-5 py-4 text-left text-sm font-medium text-aubergine transition-colors hover:border-raspberry hover:bg-raspberry/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-raspberry"
                  >
                    {choice.label}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-raspberry transition-transform group-hover:translate-x-1"
                    />
                  </button>
                ))}
              </div>
            </fieldset>
          ) : (
            <div aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-raspberry">
                Um caminho para começar
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-aubergine">
                {selected.category}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-aubergine/75">
                Reunimos conteúdos para você explorar esse tema no seu tempo.
                Escolha uma leitura, sem pressa.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={selected.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-aubergine px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
                >
                  Ver conteúdos
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-aubergine hover:text-raspberry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
                >
                  <RotateCcw size={14} aria-hidden="true" />
                  Escolher outro tema
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
