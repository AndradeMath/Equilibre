export type Article = {
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
};

export const navigation = [
  { label: "Início", href: "/" },
  { label: "Entenda seu corpo", href: "/editorias/entenda-seu-corpo" },
  { label: "Cuidado em todas as fases", href: "/editorias/cuidado-em-todas-as-fases" },
  { label: "Bem-estar na rotina", href: "/editorias/bem-estar-na-rotina" },
  { label: "Ciência & inovação", href: "/editorias/ciencia-e-inovacao" },
  { label: "EQUILIBRE Responde", href: "/equilibre-responde" },
  { label: "Além da Receita", href: "/alem-da-receita" },
  { label: "Conheça a Equilibre", href: "/conheca-a-equilibre" },
];

export const sections = [
  {
    slug: "entenda-seu-corpo",
    title: "Entenda seu corpo",
    description:
      "Informação clara para conhecer melhor o seu corpo, compreender mudanças e fazer perguntas com confiança.",
    intro: "Conhecimento para escutar o corpo com mais atenção.",
    topics: ["Deficiência de ferro", "Anemia ferropriva", "Menstruação", "Saúde feminina"],
    image: "/equilibre/saude-feminina-editorial.webp",
    imageAlt: "Composição editorial Equilibre sobre saúde feminina e ciclo menstrual",
    articles: [
      {
        category: "Conhecimento do corpo",
        title: "Deficiência de ferro: quais perguntas levar para uma consulta?",
        excerpt:
          "Um ponto de partida para organizar dúvidas e conversar sobre saúde com um profissional.",
        readingTime: "5 min de leitura",
        image: "/equilibre/saude-feminina-editorial.webp",
        imageAlt: "Conteúdo visual Equilibre sobre ferro e saúde feminina",
        href: "/equilibre-responde",
        featured: true,
      },
      {
        category: "Ciclo menstrual",
        title: "Seu ciclo, suas perguntas: um espaço para observar sem julgamentos",
        excerpt:
          "Registrar dúvidas e mudanças pode ajudar você a preparar uma conversa informada.",
        readingTime: "4 min de leitura",
        image: "/equilibre/bem-estar-pausa.webp",
        imageAlt: "Mulher em momento de bem-estar com o adesivo Equilibre",
        href: "/equilibre-responde",
      },
      {
        category: "Saúde feminina",
        title: "Informação em saúde: como reconhecer uma fonte confiável",
        excerpt:
          "Autoria, referências e contexto fazem diferença na hora de avaliar o que você lê.",
        readingTime: "6 min de leitura",
        image: "/equilibre/rotina-cotidiana.webp",
        imageAlt: "Mulher em situação cotidiana utilizando o adesivo Equilibre",
        href: "/equilibre-responde",
      },
    ] satisfies Article[],
  },
  {
    slug: "cuidado-em-todas-as-fases",
    title: "Cuidado em todas as fases",
    description:
      "Cada fase traz perguntas e experiências próprias. Um lugar para explorar cuidado, desenvolvimento e informação.",
    intro: "Uma conversa aberta sobre as muitas fases da vida.",
    topics: ["Ciclo menstrual", "Gestação", "Desenvolvimento feminino", "Nutrição"],
    image: "/equilibre/gestacao.webp",
    imageAlt: "Mulher grávida em momento de acolhimento, usando o adesivo Equilibre",
    articles: [
      {
        category: "Fases da vida",
        title: "Cuidado não é igual em todas as fases — e tudo bem",
        excerpt:
          "Como acolher mudanças e encontrar informações que respeitam a sua experiência.",
        readingTime: "5 min de leitura",
        image: "/equilibre/quatro-contextos-equilibre.webp",
        imageAlt: "Composição Equilibre sobre ciclo menstrual, vida ativa, gestação e todas as fases",
        href: "/alem-da-receita",
        featured: true,
      },
      {
        category: "Desenvolvimento feminino",
        title: "Falar sobre o corpo também é uma forma de cuidado",
        excerpt:
          "Conversas acolhedoras ajudam a construir uma relação mais informada com a saúde.",
        readingTime: "4 min de leitura",
        image: "/equilibre/vida-ativa.webp",
        imageAlt: "Mulher aproveitando um momento de energia e bem-estar",
        href: "/alem-da-receita",
      },
      {
        category: "Nutrição",
        title: "Nutrição sem regras universais: perguntas para uma conversa melhor",
        excerpt:
          "Um convite para buscar orientação que considere suas necessidades e contexto.",
        readingTime: "6 min de leitura",
        image: "/equilibre/quatro-contextos-equilibre.webp",
        imageAlt: "Composição Equilibre com diferentes fases e contextos de cuidado",
        href: "/equilibre-responde",
      },
    ] satisfies Article[],
  },
  {
    slug: "bem-estar-na-rotina",
    title: "Bem-estar na rotina",
    description:
      "Ideias possíveis sobre hábitos, descanso e alimentação para uma rotina que respeita o seu ritmo.",
    intro: "Pequenas conversas sobre os dias como eles são.",
    topics: ["Hábitos", "Descanso", "Alimentação", "Organização da rotina"],
    image: "/equilibre/vida-ativa.webp",
    imageAlt: "Mulher aproveita um momento de bem-estar e energia",
    articles: [
      {
        category: "Autocuidado",
        title: "O que autocuidado significa quando o dia já está cheio?",
        excerpt:
          "Uma reflexão sobre expectativas, limites e gestos que cabem na vida real.",
        readingTime: "5 min de leitura",
        image: "/equilibre/autocuidado-trabalho.webp",
        imageAlt: "Mulher em momento de autocuidado e organização da rotina",
        href: "/alem-da-receita",
        featured: true,
      },
      {
        category: "Descanso",
        title: "Descanso também merece espaço na conversa sobre bem-estar",
        excerpt:
          "Sem fórmulas prontas: um ponto de partida para pensar sobre suas pausas.",
        readingTime: "4 min de leitura",
        image: "/equilibre/bem-estar-pausa.webp",
        imageAlt: "Mulher aproveita um momento de descanso e bem-estar",
        href: "/alem-da-receita",
      },
      {
        category: "Hábitos",
        title: "Menos cobrança, mais curiosidade sobre os próprios hábitos",
        excerpt:
          "Observar a rotina sem transformá-la em uma lista de desempenho.",
        readingTime: "3 min de leitura",
        image: "/equilibre/rotina-cotidiana.webp",
        imageAlt: "Mulher em movimento na rotina com o adesivo Equilibre",
        href: "/alem-da-receita",
      },
    ] satisfies Article[],
  },
  {
    slug: "ciencia-e-inovacao",
    title: "Ciência & inovação",
    description:
      "Pesquisas, tecnologias em saúde e novas perguntas — com contexto sobre o que já se sabe e o que ainda está em estudo.",
    intro: "Ideias novas, explicadas com contexto e responsabilidade.",
    topics: ["Microagulhas dissolvíveis", "Tecnologias em saúde", "Pesquisas científicas", "Inovação"],
    image: "/equilibre/adesivo-equilibre.webp",
    imageAlt: "Close do adesivo Equilibre aplicado no braço de uma mulher",
    articles: [
      {
        category: "Tecnologia em estudo",
        title: "Microagulhas dissolvíveis: o que essa tecnologia propõe investigar",
        excerpt:
          "Uma introdução ao conceito e às perguntas que pesquisas precisam responder.",
        readingTime: "6 min de leitura",
        image: "/equilibre/adesivo-equilibre.webp",
        imageAlt: "Detalhe do adesivo Equilibre em uma imagem de campanha",
        href: "/conheca-a-equilibre",
        featured: true,
      },
      {
        category: "Pesquisa científica",
        title: "Como ler uma pesquisa em saúde sem perder o contexto",
        excerpt:
          "Perguntas úteis sobre métodos, limites e o alcance dos resultados publicados.",
        readingTime: "7 min de leitura",
        image: "/equilibre/saude-feminina-editorial.webp",
        imageAlt: "Criativo Equilibre com informações sobre ferro e saúde feminina",
        href: "/equilibre-responde",
      },
      {
        category: "Inovação",
        title: "Da ideia ao estudo: etapas e perguntas no desenvolvimento de tecnologias",
        excerpt:
          "Conheça por que pesquisa e validação são etapas essenciais para falar de inovação.",
        readingTime: "5 min de leitura",
        image: "/equilibre/quatro-contextos-equilibre.webp",
        imageAlt: "Imagem institucional Equilibre em quatro contextos de vida",
        href: "/conheca-a-equilibre",
      },
    ] satisfies Article[],
  },
];

export const featuredArticles: Article[] = [
  sections[0].articles[0],
  sections[2].articles[0],
  sections[3].articles[0],
];

export function articleSlug(title: string) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const allArticles = sections.flatMap((section) =>
  section.articles.map((article) => ({
    ...article,
    sectionTitle: section.title,
    sectionSlug: section.slug,
  })),
);

export const questions = [
  {
    question: "O que significa deficiência de ferro?",
    answer:
      "É uma expressão usada para descrever níveis insuficientes de ferro no organismo. Entender a causa e o significado dos exames depende de avaliação profissional e do contexto de cada pessoa.",
    editor: "Conteúdo educativo Equilibre",
    references:
      "Referências científicas e revisão profissional serão acrescentadas antes da publicação desta resposta.",
  },
  {
    question: "Como conversar sobre mudanças no ciclo menstrual?",
    answer:
      "Você pode anotar suas dúvidas e mudanças percebidas e levá-las a uma consulta. Este conteúdo é informativo e não substitui uma avaliação individual.",
    editor: "Conteúdo educativo Equilibre",
    references:
      "Referências científicas e revisão profissional serão acrescentadas antes da publicação desta resposta.",
  },
  {
    question: "O que são microagulhas dissolvíveis?",
    answer:
      "É o nome dado a uma tecnologia em pesquisa que utiliza estruturas microscópicas concebidas para se dissolver. Aplicações, segurança e eficácia dependem de estudos e validações específicos.",
    editor: "Conteúdo educativo Equilibre",
    references:
      "Referências científicas e revisão profissional serão acrescentadas antes da publicação desta resposta.",
  },
];

export const stories = [
  {
    category: "Rotina e autocuidado",
    title: "Entre um compromisso e outro, ela aprendeu a escutar as próprias pausas",
    excerpt:
      "Uma conversa sobre trabalho, expectativas e os pequenos espaços que cada pessoa inventa para si.",
    author: "Relato editorial",
    image: "/equilibre/rotina-cotidiana.webp",
    imageAlt: "Mulher em momento cotidiano usando o adesivo Equilibre",
  },
  {
    category: "Maternidade e identidade",
    title: "Redescobrir a própria rotina depois de tantas mudanças",
    excerpt:
      "Um relato sensível sobre novos ritmos e a importância de pedir acolhimento.",
    author: "Relato editorial",
    image: "/equilibre/gestacao.webp",
    imageAlt: "Mulher grávida em um momento de carinho e acolhimento",
  },
  {
    category: "Trabalho e bem-estar",
    title: "Falar sobre limites também faz parte de uma vida em movimento",
    excerpt:
      "Como uma conversa honesta abriu espaço para enxergar outras possibilidades no cotidiano.",
    author: "Relato editorial",
    image: "/equilibre/autocuidado-trabalho.webp",
    imageAlt: "Mulher conciliando a rotina e um momento de autocuidado",
  },
];
