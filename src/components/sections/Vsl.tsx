import { CLIPO_CONFIG } from '../../config';
import CtaLink from '../ui/CtaLink';

const isDirectVideo = (url: string) => /\.(mp4|webm|ogg)(\?|#|$)/i.test(url);

function resolveEmbedUrl(url: string) {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  if (yt) {
    return `https://www.youtube.com/embed/${yt[1]}?rel=0&modestbranding=1&playsinline=1&controls=1&fs=1`;
  }
  return url;
}

/** 2. Segunda dobra: VSL (Video Sales Letter) em 16:9 integrada à identidade do Clipo. */
export default function Vsl() {
  const vslUrl = CLIPO_CONFIG.vslUrl.trim();
  const embedUrl = vslUrl && !isDirectVideo(vslUrl) ? resolveEmbedUrl(vslUrl) : '';

  return (
    <section id="vsl" className="vsl-sec" aria-labelledby="h-vsl">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Veja o Clipo em ação</span>
          <h2 id="h-vsl">Você não precisa passar o dia inteiro editando vídeos.</h2>
          <p className="lead">
            Entenda em poucos minutos como transformar gravações longas em cortes prontos para publicar todos os dias.
          </p>
        </div>

        <div className="vsl-shell reveal">
          <div className="vsl-frame" data-vsl-ready={!vslUrl ? 'true' : undefined}>
            {vslUrl ? (
              isDirectVideo(vslUrl) ? (
                <video
                  className="vsl-media"
                  src={vslUrl}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <iframe
                  className="vsl-media"
                  src={embedUrl}
                  title="Apresentação oficial do Clipo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )
            ) : (
              <div className="vsl-placeholder" aria-label="Espaço preparado para o vídeo de apresentação">
                <span className="vsl-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <p className="vsl-hint">Vídeo de apresentação (16:9)</p>
                <small>Configure a URL em src/config.ts → CLIPO_CONFIG.vslUrl</small>
              </div>
            )}
          </div>
        </div>

        <div className="vsl-cta reveal">
          <CtaLink type="signup" where="vsl" className="btn btn-primary btn-lg">
            Quero automatizar meus conteúdos
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
