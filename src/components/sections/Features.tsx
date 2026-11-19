import { FEATURES } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';
import Wave from '../ui/Wave';

const FEATURE_HIGHLIGHT: [number, number][] = [[6, 12], [22, 28], [32, 36]];

/** 4. Funcionalidades (cards). O primeiro card é o destaque. */
export default function Features() {
  return (
    <section id="funcionalidades" aria-labelledby="h-feat">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Funcionalidades</span>
          <h2 id="h-feat">Tudo o que você precisa para produzir mais e editar menos.</h2>
        </div>
        <div className="feat-grid">
          {FEATURES.map((f, i) => {
            const body = (
              <>
                <div className="icon-tile">
                  <Icon name={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </>
            );
            return i === 0 ? (
              <article className="card feat big reveal" key={f.title}>
                <div>{body}</div>
                <Wave bars={40} seed={3} highlight={FEATURE_HIGHLIGHT} />
              </article>
            ) : (
              <article className="card feat reveal" key={f.title}>
                {body}
              </article>
            );
          })}
        </div>
        <div className="center-cta">
          <CtaLink type="signup" where="funcionalidades">
            Quero experimentar
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
