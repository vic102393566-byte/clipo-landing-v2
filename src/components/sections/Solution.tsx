import { AFTER_LIST, BEFORE_LIST } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';

/** Comparação direta: processo manual x Clipo. */
export default function Solution() {
  return (
    <section id="solucao" aria-labelledby="h-sol">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Comparativo</span>
          <h2 id="h-sol">Do jeito manual vs. com o Clipo.</h2>
          <p className="lead">
            Grave uma vez e transforme o mesmo vídeo em cortes prontos para publicar, sem repetir trabalho.
          </p>
        </div>

        <div className="vs">
          <div className="vs-col old reveal">
            <h3>
              <Icon name="clock" /> Do jeito manual
            </h3>
            <ul>
              {BEFORE_LIST.map((t) => (
                <li key={t}>
                  <Icon name="x" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="vs-col new reveal">
            <h3>
              <Icon name="spark" style={{ color: 'var(--yellow)' }} /> Com o Clipo
            </h3>
            <ul>
              {AFTER_LIST.map((t) => (
                <li key={t}>
                  <Icon name="check" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="center-cta">
          <CtaLink type="signup" where="solucao" className="btn btn-primary btn-lg">
            Transformar meus vídeos
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
