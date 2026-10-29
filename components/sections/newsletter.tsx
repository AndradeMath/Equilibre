"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="scroll-mt-8 bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-raspberry px-6 py-12 shadow-editorial sm:px-12 sm:py-16">
        <span aria-hidden="true" className="absolute -right-12 -top-16 size-56 rounded-full border border-white/25" />
        <span aria-hidden="true" className="absolute -right-4 -top-8 size-40 rounded-full border border-white/25" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_0.95fr] md:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow">
              Newsletter Equilibre
            </p>
            <h2 className="font-sans text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
              Uma pausa para você.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-white/85">
              Conteúdos sobre educação, bem-estar e novidades da Equilibre —
              para ler no seu tempo.
            </p>
          </div>
          <div>
            {submitted ? (
              <p role="status" className="rounded-2xl bg-white/15 p-5 text-sm leading-6 text-white">
                Obrigada pelo interesse. A newsletter ainda não está conectada
                a um serviço de envio e seu e-mail não foi armazenado.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="newsletter-email" className="mb-2 block text-sm font-semibold text-white">
                  Seu e-mail
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail
                      size={17}
                      aria-hidden="true"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-aubergine/60"
                    />
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="voce@email.com"
                      className="min-h-12 w-full rounded-full border-2 border-transparent bg-cream py-3 pl-11 pr-4 text-sm text-aubergine placeholder:text-aubergine/45 focus:border-yellow focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-aubergine px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-aubergine/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow"
                  >
                    Quero receber
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
                <label className="mt-4 flex items-start gap-2 text-xs leading-5 text-white/85">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 size-4 shrink-0 accent-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                  />
                  <span>
                    Concordo em receber a newsletter quando o serviço estiver
                    ativo. Como o formulário ainda não está integrado, meu
                    consentimento e e-mail não serão armazenados.
                  </span>
                </label>
                <p className="mt-3 text-xs leading-5 text-white/75">
                  Demonstração visual: este formulário ainda não envia nem
                  armazena dados. A integração e o consentimento deverão ser
                  configurados antes de ativar inscrições.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
