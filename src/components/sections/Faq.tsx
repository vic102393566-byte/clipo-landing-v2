import { FAQS } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';

/** 8. Perguntas frequentes (acessível, sem JavaScript: <details>). */
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="h-faq">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 id="h-faq">Dúvidas comuns sobre o Clipo.</h2>
        </div>
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q} <Icon name="plus" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <div className="center-cta">
          <CtaLink type="signup" where="faq">
            Escolher meu plano
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
