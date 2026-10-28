import type { LucideIcon } from "lucide-react";
import { Heart, Leaf, Moon, Sparkles } from "lucide-react";

export const navigation = [
  { label: "Nossa essência", href: "#essencia" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Rituais", href: "#rituais" },
  { label: "Histórias", href: "#historias" },
];

export const benefits: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Mais presença",
    description:
      "Pequenas pausas para sair do automático e voltar ao que realmente importa.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Leveza possível",
    description:
      "Bem-estar sem fórmulas rígidas — no seu ritmo, do seu jeito, na vida real.",
    icon: Leaf,
  },
  {
    number: "03",
    title: "Corpo em equilíbrio",
    description:
      "Escolhas conscientes que acolhem sua energia e respeitam seus limites.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Descanso de verdade",
    description:
      "Um convite para desacelerar, respirar fundo e criar espaço para recarregar.",
    icon: Moon,
  },
];

export const testimonials = [
  {
    quote:
      "Pela primeira vez, o autocuidado deixou de ser mais uma tarefa. Virou um momento que eu espero.",
    name: "Marina L.",
    detail: "Cliente Equilibre",
  },
  {
    quote:
      "Encontrei um jeito mais gentil de estar comigo. Pequeno no tempo, enorme na diferença.",
    name: "Ana C.",
    detail: "Cliente Equilibre",
  },
  {
    quote:
      "A Equilibre me lembrou que não preciso mudar tudo para me sentir melhor. Posso começar por hoje.",
    name: "Camila R.",
    detail: "Cliente Equilibre",
  },
];
