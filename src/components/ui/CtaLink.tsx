import type { ReactNode } from 'react';
import { resolveCta, trackCta, type CtaType } from '../../config';
import Icon from './Icon';

interface CtaLinkProps {
  /** Define o destino (ver CLIPO_CONFIG em src/config.ts). */
  type: CtaType;
  /** Nome do ponto da página, usado no rastreamento (ex.: "hero"). */
  where: string;
  plan?: string;
  /** Classes de botão. Ex.: "btn btn-primary btn-lg". */
  className?: string;
  /** Mostra a seta no final. */
  arrow?: boolean;
  children: ReactNode;
}

/** Botão/link de chamada para ação com destino configurável e rastreamento. */
export default function CtaLink({ type, where, plan, className = 'btn btn-primary', arrow = true, children }: CtaLinkProps) {
  const { href, external } = resolveCta(type, plan);
  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={() => trackCta({ cta: type, plan: plan ?? null, where })}
    >
      {children}
      {arrow && <Icon name="arrow" />}
    </a>
  );
}
