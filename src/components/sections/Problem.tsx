import { PAINS } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';

/** 2. O problema + agitação (custo de continuar no manual). */
export default function Problem() {
  return (
    <section id="problema" aria-labelledby="h-prob">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">O problema</span>
          <h2 id="h-prob">Você não precisa passar o dia inteiro editando.</h2>
          <p className="lead">
            Você sabe que vídeo curto funciona. O difícil é encontrar tempo para fazer, todo dia, em todas as redes.
          </p>
        </div>
        <div className="pain-grid">
          {PAINS.map((p) => (
            <article className="card pain reveal" key={p.title}>
              <div className="icon-tile">
                <Icon name={p.icon} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <div className="agita reveal">
          <p>
            O custo de continuar no manual não aparece na fatura. Aparece na agenda: menos tempo para gravar, planejar e
            conversar com o seu público. E o vídeo longo, que levou horas para ficar pronto, acaba sendo usado uma única
            vez.
          </p>
          <CtaLink type="signup" where="problema">
            Quero produzir mais
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
