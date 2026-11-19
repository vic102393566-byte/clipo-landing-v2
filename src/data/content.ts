/**
 * TEXTOS E DADOS DA PÁGINA
 * ---------------------------------------------------------------------------
 * Todo o conteúdo editável fica aqui. Os componentes só desenham esses dados.
 * Se mudar as perguntas do FAQ, atualize também o JSON-LD no index.html.
 */
import type { IconName } from '../components/ui/Icon';

export const NAV_LINKS = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#faq' },
];

export const PAINS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'hourglass', title: 'Horas na timeline', text: 'Cortar, ajustar, legendar, exportar. Um único vídeo pode consumir a tarde inteira.' },
  { icon: 'target', title: 'Onde está o melhor trecho?', text: 'Rever a gravação toda só para achar o momento certo é um trabalho que ninguém quer fazer.' },
  { icon: 'calendar', title: 'Postagens que falham', text: 'Sem tempo para editar, o calendário vazio vira rotina e a audiência esfria.' },
  { icon: 'share', title: 'Várias redes, vários formatos', text: 'Cada plataforma pede o seu formato. Refazer tudo à mão multiplica o esforço.' },
];

export const SOLUTION_STEPS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'upload', title: 'Envie seu vídeo', text: 'Suba a gravação completa: aula, podcast, live ou entrevista.' },
  { icon: 'scissors', title: 'Encontre os melhores momentos', text: 'O Clipo sugere trechos e gera os cortes para você escolher.' },
  { icon: 'captions', title: 'Adicione legendas', text: 'Legendas automáticas para prender quem assiste sem som.' },
  { icon: 'send', title: 'Prepare e publique', text: 'Organize seus conteúdos e publique nas redes compatíveis.' },
];

export const BEFORE_LIST = [
  'Assistir ao vídeo inteiro outra vez',
  'Cortar e exportar um trecho por vez',
  'Legendar frase por frase',
  'Adaptar o formato para cada rede',
  'Postar quando sobra tempo',
];

export const AFTER_LIST = [
  'Cortes sugeridos para você revisar e escolher',
  'Legendas geradas automaticamente',
  'Projetos organizados em um só lugar',
  'Conteúdos preparados para publicar',
  'Uma rotina de postagens mais constante',
];

/** Não liste aqui funcionalidades futuras como se já existissem. */
export const FEATURES: { icon: IconName; title: string; text: string }[] = [
  { icon: 'scissors', title: 'Cortes inteligentes', text: 'Encontre os melhores momentos do vídeo longo e escolha o que vai ao ar.' },
  { icon: 'captions', title: 'Legendas automáticas', text: 'Gere legendas prontas para prender quem assiste até sem som.' },
  { icon: 'bolt', title: 'Economia de tempo', text: 'Menos horas na edição e mais tempo para gravar e crescer.' },
  { icon: 'grid', title: 'Organização de projetos', text: 'Cada vídeo e seus cortes organizados em um só lugar.' },
  { icon: 'film', title: 'Preparação e distribuição', text: 'Conteúdos prontos para publicar sem refazer tudo por rede.' },
  { icon: 'share', title: 'Integração com redes compatíveis', text: 'Leve o projeto do corte até a publicação nas principais redes.' },
];

export const HOW_STEPS = [
  { title: 'Envie seu vídeo', text: 'Suba a gravação completa e deixe o resto com o Clipo.' },
  { title: 'Encontre os melhores momentos', text: 'Receba cortes sugeridos e escolha os que fazem sentido.' },
  { title: 'Adicione legendas', text: 'Legendas automáticas para o conteúdo funcionar até sem som.' },
  { title: 'Prepare e publique', text: 'Deixe tudo organizado e publique nas redes compatíveis.' },
];

export const AUDIENCES: { icon: IconName; title: string; text: string; gain: string; gainIcon: IconName }[] = [
  { icon: 'video', title: 'Criadores de conteúdo', text: 'Transforme cada gravação em vários vídeos curtos sem viver na edição.', gain: 'Mais consistência', gainIcon: 'calendar' },
  { icon: 'star', title: 'Influenciadores', text: 'Mantenha presença constante aproveitando melhor cada vídeo gravado.', gain: 'Mais presença', gainIcon: 'heart' },
  { icon: 'briefcase', title: 'Empreendedores', text: 'Divulgue seu negócio em vídeo sem precisar montar equipe de edição.', gain: 'Mais agilidade', gainIcon: 'bolt' },
  { icon: 'megaphone', title: 'Agências de marketing', text: 'Produza para mais clientes com projetos organizados e menos retrabalho.', gain: 'Mais escala', gainIcon: 'users' },
  { icon: 'film', title: 'Produtores digitais', text: 'Reaproveite aulas, lives, podcasts e webinars para novos públicos.', gain: 'Mais alcance', gainIcon: 'target' },
];

export const OBJECTIONS = [
  { q: 'Não sei editar vídeo.', a: 'Tudo bem. O Clipo foi pensado para quem quer resultado sem virar editor. Você envia o vídeo, revisa os cortes e escolhe o que publicar.' },
  { q: 'Não tenho tempo para aprender outra ferramenta.', a: 'O caminho é direto: enviar, revisar, legendar e publicar. A ideia é gastar seu tempo com o conteúdo, não com o programa.' },
  { q: 'Será que serve para o meu tamanho?', a: 'O Clipo atende quem está começando, criadores que publicam com frequência e empresas que cuidam de vários projetos.' },
  { q: 'Vou ter resultado garantido?', a: 'Nenhuma ferramenta garante viralização, e a gente não promete isso. O Clipo tira o peso da edição para você publicar com mais constância.' },
];

/**
 * PLANOS — preencha nome, preço, período e benefícios.
 * Enquanto os valores forem placeholders, a página mostra "a definir".
 * O id precisa bater com as chaves de CLIPO_CONFIG.plans (config.ts).
 */
export interface Plan {
  id: string;
  audience: string;
  name: string;
  description: string;
  price: string;
  period: string;
  benefits: string[];
  featured?: boolean;
  flag?: string;
}

export const PLANS: Plan[] = [
  {
    id: 'inicial',
    audience: 'Para começar',
    name: 'Criador',
    description: 'Para quem posta todo dia.',
    price: 'R$ 47',
    period: '/mês',
    benefits: [
      '10 horas de vídeo por mês.',
      'Até 2 redes conectadas: publica, agenda e mede.',
      'Cortes ilimitados com nota da IA.',
      '60 legendas karaokê e 8 receitas de edição.',
      'Aprende o estilo do seu vídeo de referência.',
      "Nuvem, importação por link e 1080p sem marca d'água.",
    ],
  },
  {
    id: 'criador',
    audience: 'Para criar com frequência',
    name: 'Pro',
    description: 'Para crescer em várias redes.',
    price: 'R$ 97',
    period: '/mês',
    benefits: [
      '30 horas de vídeo por mês.',
      'Até 5 redes conectadas.',
      'Tudo do plano Criador.',
      'Ideal para um vídeo longo por dia.',
    ],
    featured: true,
    flag: 'Plano em destaque',
  },
  {
    id: 'equipes',
    audience: 'Para equipes e empresas',
    name: 'Agência',
    description: 'Para social medias e agências.',
    price: 'R$ 197',
    period: '/mês',
    benefits: [
      '100 horas de vídeo por mês.',
      'Até 15 contas conectadas (várias marcas).',
      'Tudo do plano Pro.',
      'O menor custo por hora de vídeo.',
    ],
  },
];

export const FAQS = [
  { q: 'O que é o Clipo?', a: 'O Clipo é uma plataforma de edição e distribuição inteligente de vídeos curtos. Ela ajuda você a transformar vídeos longos em cortes legendados e preparados para publicação nas redes sociais.' },
  { q: 'Como funciona?', a: 'Você envia seu vídeo, o Clipo ajuda a encontrar os melhores momentos e gerar os cortes, adiciona legendas e deixa tudo preparado para publicar nas redes compatíveis.' },
  { q: 'Preciso saber editar vídeos?', a: 'Não. O fluxo foi pensado para quem está começando. Quem já edita também ganha tempo, porque deixa o trabalho repetitivo com a plataforma.' },
  { q: 'Quais redes sociais são compatíveis?', a: 'Os conteúdos são preparados no formato de vídeo curto das principais redes. A lista de redes com integração disponível é a que aparece na plataforma.' },
  { q: 'Como funcionam os planos?', a: 'Cada plano tem seus próprios recursos e limites, descritos antes da contratação. Escolha o que combina com o seu ritmo de publicação.' },
  { q: 'Posso cancelar minha assinatura?', a: 'As condições de cancelamento são apresentadas de forma clara antes da contratação, junto com as regras do plano escolhido.' },
];
