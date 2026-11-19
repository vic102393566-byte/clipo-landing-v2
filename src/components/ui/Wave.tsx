import { useMemo, type CSSProperties } from 'react';

interface WaveProps {
  bars: number;
  seed: number;
  /** Intervalos [início, fim] de barras destacadas (momentos encontrados). */
  highlight: [number, number][];
  className?: string;
}

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

/** Forma de onda decorativa usada nos mockups (determinística, sem áudio real). */
export default function Wave({ bars, seed, highlight, className = '' }: WaveProps) {
  const items = useMemo(() => {
    const r = rng(seed);
    return Array.from({ length: bars }, (_, i) => {
      const h = Math.min(22 + Math.round((Math.sin(i / 3.2) * 0.5 + 0.5) * 34 + r() * 40), 100);
      return { h, hl: highlight.some(([a, b]) => i >= a && i <= b) };
    });
  }, [bars, seed, highlight]);

  return (
    <div className={`wave ${className}`.trim()} aria-hidden="true">
      {items.map((it, i) => (
        <span key={i} className={it.hl ? 'hl' : undefined} style={{ '--h': `${it.h}%` } as CSSProperties} />
      ))}
    </div>
  );
}
