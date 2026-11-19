import { useEffect, useState, type KeyboardEvent } from 'react';
import { HOW_STEPS } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';
import Phone from '../ui/Phone';
import Wave from '../ui/Wave';

const CUT_HIGHLIGHT: [number, number][] = [[7, 14], [24, 33], [44, 50]];
const AUTO_MS = 5500;
const reduced = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const NOTE = <span className="note">Ilustração conceitual da interface.</span>;

/** 5. Como funciona: passo a passo interativo (avança sozinho até o visitante clicar). */
export default function HowItWorks() {
  const [cur, setCur] = useState(0);
  const [manual, setManual] = useState(reduced);

  useEffect(() => {
    if (manual) return;
    const id = window.setTimeout(() => setCur((c) => (c + 1) % HOW_STEPS.length), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [cur, manual]);

  const pick = (i: number) => {
    setManual(true);
    setCur(i);
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    let n: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % HOW_STEPS.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + HOW_STEPS.length) % HOW_STEPS.length;
    if (n !== null) {
      e.preventDefault();
      pick(n);
      document.getElementById(`t${n + 1}`)?.focus();
    }
  };

  return (
    <section id="como-funciona" aria-labelledby="h-how">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Como funciona</span>
          <h2 id="h-how">Do upload à publicação em quatro passos.</h2>
          <p className="lead">
            Clique em cada etapa para ver o que acontece. Sem curva de aprendizado complicada, sem painel cheio de botões.
          </p>
        </div>

        <div className="how">
          <div className="tabs" role="tablist" aria-label="Etapas do Clipo">
            {HOW_STEPS.map((s, i) => (
              <button
                key={s.title}
                id={`t${i + 1}`}
                className={`tab${i === cur && !manual ? ' auto' : ''}`}
                role="tab"
                aria-selected={i === cur}
                aria-controls={`p${i + 1}`}
                tabIndex={i === cur ? 0 : -1}
                onClick={() => pick(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="n">{i + 1}</span>
                <span>
                  <b>{s.title}</b>
                  <span className="d">{s.text}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="panels">
            <div className="panel" id="p1" role="tabpanel" aria-labelledby="t1" hidden={cur !== 0}>
              <span className="panel-title">Passo 1 · Envio</span>
              <div className="drop">
                <Icon name="upload" />
                <b>Arraste seu vídeo aqui</b>
                <small>ou escolha um arquivo do seu computador</small>
              </div>
              <div className="file">
                <Icon name="video" />
                <div>
                  <b>podcast-episodio-42.mp4</b>
                  <div className="bar">
                    <i />
                  </div>
                </div>
                <em>Enviando…</em>
              </div>
              {NOTE}
            </div>

            <div className="panel" id="p2" role="tabpanel" aria-labelledby="t2" hidden={cur !== 1}>
              <span className="panel-title">Passo 2 · Cortes</span>
              <Wave bars={56} seed={11} highlight={CUT_HIGHLIGHT} />
              <div className="cuts">
                {[
                  ['Momento sugerido 1', '0:42'],
                  ['Momento sugerido 2', '0:51'],
                  ['Momento sugerido 3', '0:36'],
                ].map(([t, d]) => (
                  <div className="cut" key={t}>
                    <span>
                      <Icon name="scissors" /> {t}
                    </span>
                    <small>{d}</small>
                  </div>
                ))}
              </div>
              {NOTE}
            </div>

            <div className="panel" id="p3" role="tabpanel" aria-labelledby="t3" hidden={cur !== 2}>
              <span className="panel-title">Passo 3 · Legendas</span>
              <div className="cap-demo">
                <Phone
                  variant="p1"
                  label="Corte 1"
                  caption="Legenda automática em segundos"
                  video="https://v1.pinimg.com/videos/iht/expMp4/de/5c/31/de5c31648f5ce70af77d00535feed323_720w.mp4"
                />
                <div className="styles">
                  <div className="style-opt">
                    <mark>Destaque</mark> amarelo
                  </div>
                  <div className="style-opt">
                    <mark>Destaque</mark> vermelho
                  </div>
                  <div className="style-opt">
                    <mark>Destaque</mark> branco
                  </div>
                </div>
              </div>
              {NOTE}
            </div>

            <div className="panel" id="p4" role="tabpanel" aria-labelledby="t4" hidden={cur !== 3}>
              <span className="panel-title">Passo 4 · Publicação</span>
              <div className="dest">
                {['Corte 1 · Momento forte', 'Corte 2 · Dica prática', 'Corte 3 · Resposta rápida'].map((t) => (
                  <div key={t}>
                    <span>
                      <b>{t}</b>
                      <small>Formato vertical de vídeo curto</small>
                    </span>
                    <span className="st">
                      <Icon name="check" /> Pronto para publicar
                    </span>
                  </div>
                ))}
              </div>
              {NOTE}
            </div>
          </div>
        </div>

        <div className="center-cta">
          <CtaLink type="signup" where="como-funciona" className="btn btn-primary btn-lg">
            Começar agora
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
