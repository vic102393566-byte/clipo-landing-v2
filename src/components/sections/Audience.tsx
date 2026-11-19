import { AUDIENCES } from '../../data/content';
import Icon from '../ui/Icon';

/** Para quem é o Clipo. */
export default function Audience() {
  return (
    <section id="para-quem" aria-labelledby="h-aud">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Para quem é o Clipo</span>
          <h2 id="h-aud">Para quem tem muito a dizer e pouco tempo para editar.</h2>
        </div>
        <div className="aud-grid">
          {AUDIENCES.map((a) => (
            <article className="card aud reveal" key={a.title}>
              <div className="icon-tile">
                <Icon name={a.icon} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <span className="gain">
                <Icon name={a.gainIcon} /> {a.gain}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
