import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';
import Wave from '../ui/Wave';
import Phone from '../ui/Phone';
import Arc from '../ui/Arc';

const CLIPS: { title: string; meta: string; thumb?: string }[] = [
  {
    title: 'Corte 1 · Momento forte',
    meta: 'Legenda pronta · 0:42',
    thumb: '/assets/aistudio/Design_sem_nome__1__722f9b24.png',
  },
  {
    title: 'Corte 2 · Dica prática',
    meta: 'Legenda pronta · 0:51',
    thumb: 'https://i.ibb.co/RpWwf4hw/Design-sem-nome.png',
  },
  {
    title: 'Corte 3 · Resposta rápida',
    meta: 'Legenda pronta · 0:36',
    thumb: 'https://i.ibb.co/9397CrjP/Design-sem-nome-2.png',
  },
];

const HERO_HIGHLIGHT: [number, number][] = [[9, 16], [30, 38], [50, 56]];

/** 1. Primeira dobra: promessa, dois CTAs e demonstração conceitual da interface. */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="h-hero">
      <div className="glow g1" />
      <div className="glow g2" />
      <Arc className="a1" gradientId="arc-hero" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="badge">
              <i /> Edição e distribuição inteligente de vídeos curtos
            </span>
            <h1 id="h-hero">
              Seu conteúdo. Milhares de possibilidades. <span className="grad">Menos trabalho.</span>
            </h1>
            <p className="sub">
              Transforme vídeos longos em conteúdos curtos, legendados e prontos para conquistar as redes sociais. Deixe o
              trabalho pesado com o Clipo.
            </p>
            <div className="cta-row">
              <CtaLink type="signup" where="hero" className="btn btn-primary btn-lg">
                Quero conhecer o Clipo
              </CtaLink>
              <CtaLink type="demo" where="hero" className="btn btn-ghost btn-lg" arrow={false}>
                Ver como funciona
              </CtaLink>
            </div>
            <div className="chips">
              {['Feito para quem não é editor', 'Para iniciantes, criadores e empresas', 'Tudo em um só lugar'].map((t) => (
                <span className="chip" key={t}>
                  <Icon name="check" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="stage" aria-label="Demonstração conceitual da interface do Clipo">
            <div className="app">
              <div className="app-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <b>Clipo · Projeto: Podcast, episódio 42</b>
              </div>
              <div className="app-body">
                <div className="preview">
                  <video
                    className="preview-video"
                    src="https://v1.pinimg.com/videos/iht/expMp4/1a/e6/ac/1ae6ac0954ec2f8bcc4086b1953be64e_720w.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                  />
                  <span className="tag-live">Vídeo original · 58 min</span>
                </div>
                <div className="clips">
                  {CLIPS.map((c) => (
                    <div className="clip" key={c.title}>
                      <div className="th">{c.thumb && <img src={c.thumb} alt="" />}</div>
                      <div>
                        <b>{c.title}</b>
                        <small>
                          <Icon name="check" className="ok" style={{ width: 12, height: 12 }} /> {c.meta}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="timeline">
                  <div className="row">
                    <span>0:00</span>
                    <span>Melhores momentos encontrados</span>
                    <span>58:00</span>
                  </div>
                  <Wave bars={64} seed={7} highlight={HERO_HIGHLIGHT} />
                  <div className="playhead" />
                </div>
              </div>
            </div>
            <div className="phones" aria-hidden="true">
              <Phone
                variant="p1"
                label="Corte 1"
                caption="O segredo é começar simples"
                video="https://v1.pinimg.com/videos/iht/expMp4/08/4d/3d/084d3d50879dc79ed22fa3a6663324ee_720w.mp4"
              />
              <Phone
                variant="p2"
                label="Corte 2"
                caption="Grave uma vez e publique muito"
                video="https://v1.pinimg.com/videos/mc/720p/4e/8a/98/4e8a98721f17c4d03ffef095ae604a82.mp4"
              />
              <Phone
                variant="p3"
                label="Corte 3"
                caption="Legenda automática em segundos"
                video="https://v1.pinimg.com/videos/iht/720p/40/9a/72/409a72918f29905c8f2e23f1e19fc087.mp4"
              />
            </div>
            <span className="stage-note">Ilustração conceitual da interface.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
