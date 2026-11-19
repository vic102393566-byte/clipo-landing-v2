/**
 * CONFIGURAÇÃO DA LANDING PAGE
 * ---------------------------------------------------------------------------
 * Edite só este arquivo para apontar os botões para o seu app.
 * Deixe "" para manter o comportamento padrão (rolar até a seção indicada).
 * Nenhuma alteração no backend é necessária.
 */
export type CtaType = 'signup' | 'login' | 'checkout' | 'demo';

export const CLIPO_CONFIG = {
  /** URL do vídeo da VSL (MP4 direto ou link do YouTube/Vimeo). */
  vslUrl: 'https://youtu.be/1Sa_zd3UqS4',
  links: {
    signup: '', // ex.: 'https://app.seudominio.com/cadastro'
    login: '', // ex.: 'https://app.seudominio.com/entrar'
    checkout: '', // ex.: 'https://pay.seudominio.com/clipo'
    demo: '', // ex.: '#como-funciona' ou link de um vídeo
    terms: '',
    privacy: '',
  },
  /** Link de contratação específico por plano (opcional). Chaves = id em data/content.ts */
  plans: {
    inicial: 'https://pay.cakto.com.br/efh7ycb_1329986',
    criador: 'https://pay.cakto.com.br/kbdkoea_1330050',
    equipes: 'https://pay.cakto.com.br/35we37n_1330057',
  } as Record<string, string>,
  /** true = destinos externos abrem em nova aba */
  newTab: true,
};

const FALLBACK: Record<CtaType, string> = {
  signup: '#planos',
  login: '#planos',
  checkout: '#planos',
  demo: '#como-funciona',
};

export function resolveCta(type: CtaType, plan?: string) {
  const planUrl = plan ? CLIPO_CONFIG.plans[plan] : '';
  let url = planUrl || CLIPO_CONFIG.links[type] || '';
  if (!url) return { href: FALLBACK[type], external: false };
  const isAnchor = url.startsWith('#');
  // Link único de checkout: acrescenta ?plano=<id>
  if (plan && !planUrl && !isAnchor) {
    url += (url.includes('?') ? '&' : '?') + 'plano=' + encodeURIComponent(plan);
  }
  return { href: url, external: CLIPO_CONFIG.newTab && !isAnchor };
}

export interface CtaEvent {
  cta: CtaType;
  plan: string | null;
  where: string;
}

/** Gancho de rastreamento: ouça 'clipo:cta' ou use window.dataLayer (GTM/GA4). */
export function trackCta(detail: CtaEvent) {
  try {
    window.dispatchEvent(new CustomEvent('clipo:cta', { detail }));
    const w = window as unknown as { dataLayer?: { push: (e: unknown) => void } };
    w.dataLayer?.push({ event: 'clipo_cta_click', clipo: detail });
  } catch {
    /* rastreamento nunca deve quebrar a página */
  }
}
