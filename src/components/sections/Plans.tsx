import { PLANS } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';

/** 7. Oferta e planos. Preencha os dados em src/data/content.ts (PLANS). */
export default function Plans() {
  return (
    <section id="planos" aria-labelledby="h-plans">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Planos</span>
          <h2 id="h-plans">Escolha o plano que acompanha o seu ritmo.</h2>
          <p className="lead">
            Do primeiro vídeo curto à operação com vários projetos, existe um plano para o momento em que você está.
          </p>
        </div>
        <div className="plans">
          {PLANS.map((p, idx) => (
            <article
              className={`plan ticket-wrapper reveal${p.featured ? ' featured' : ''}`}
              key={p.id}
              data-plan={p.id}
            >
              <div className="ticket">
                {p.flag && <span className="flag">{p.flag}</span>}
                <div className="t-main">
                  <div className="t-content">
                    <div className="t-header">
                      <span className="t-logo">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M13 2L4 14h6l-1 8 11-12h-6l-1-8z" />
                        </svg>
                        CLIPO
                      </span>
                      <span className="t-type">{p.audience}</span>
                    </div>
                    <h3 className="t-title">{p.name}</h3>
                    <p className="t-subtitle">{p.description}</p>
                    <ul className="t-benefits">
                      {p.benefits.map((b, i) => (
                        <li key={i}>
                          <Icon name="check" /> <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="t-perforation" aria-hidden="true">
                  <span className="t-perf-line" />
                </div>

                <div className="t-stub">
                  <div className="t-stub-top">
                    <div className="t-barcode-container">
                      <div className="t-barcode" aria-hidden="true" />
                      <span className="t-barcode-id">CLIPO-0{idx + 1}</span>
                    </div>
                    <div className="t-admit">
                      <div className="t-admit-text">Plano {p.period}</div>
                      <div className="t-admit-num">{p.price}</div>
                    </div>
                  </div>
                  <CtaLink
                    type="checkout"
                    plan={p.id}
                    where={`plano-${p.id}`}
                    className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-block`}
                  >
                    Escolher meu plano
                  </CtaLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
