import { OBJECTIONS } from '../../data/content';
import Icon from '../ui/Icon';

/** Quebra de objeções antes da oferta. */
export default function Objections() {
  return (
    <section id="objecoes" aria-labelledby="h-obj">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Sem enrolação</span>
          <h2 id="h-obj">O que costuma travar a decisão, respondido de frente.</h2>
        </div>
        <div className="obj-grid">
          {OBJECTIONS.map((o) => (
            <article className="card obj reveal" key={o.q}>
              <q>{o.q}</q>
              <div className="a">
                <Icon name="check" />
                <p>{o.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
