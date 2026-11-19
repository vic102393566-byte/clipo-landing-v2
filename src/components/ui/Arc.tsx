interface ArcProps {
  className?: string;
  gradientId: string;
}

/** Curva decorativa em laranja, inspirada nos cantos da arte da marca. */
export default function Arc({ className = '', gradientId }: ArcProps) {
  return (
    <svg className={`arc ${className}`.trim()} viewBox="0 0 420 200" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0" stopColor="#ff7a1a" />
          <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 130C120 100 270 50 345 0" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
