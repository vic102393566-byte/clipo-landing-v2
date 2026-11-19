import mark from '../../assets/logo-mark.webp';
import Arc from '../ui/Arc';
import CtaLink from '../ui/CtaLink';

/** 9. CTA final. */
export default function FinalCta() {
  return (
    <section id="comecar" aria-labelledby="h-final" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="final reveal">
          <Arc gradientId="arc-final" />
          <img className="mark" src={mark} alt="" width={78} height={72} />
          <h2 id="h-final">Chegou a hora de produzir mais e editar menos.</h2>
          <p className="lead">
            Deixe o trabalho pesado para o Clipo e concentre sua energia no que realmente importa: crescer.
          </p>
          <CtaLink type="signup" where="cta-final" className="btn btn-primary btn-lg">
            QUERO COMEÇAR COM O CLIPO
          </CtaLink>
          <span className="micro">Escolha o plano, envie seu primeiro vídeo e veja o Clipo trabalhando por você.</span>
        </div>
      </div>
    </section>
  );
}
