import { useEffect, useState } from 'react';
import CtaLink from '../ui/CtaLink';

/** Botão fixo no rodapé do celular. Some perto das seções de planos e CTA final. */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const nearOffer = ['planos', 'comecar'].some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < vh * 0.6 && r.bottom > vh * 0.2;
      });
      setShow(window.scrollY > vh * 0.7 && !nearOffer);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`sticky-cta${show ? ' show' : ''}`}>
      <CtaLink type="signup" where="sticky-mobile" className="btn btn-primary btn-block">
        Quero começar com o Clipo
      </CtaLink>
    </div>
  );
}
