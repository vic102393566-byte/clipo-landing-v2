import logo from '../../assets/logo-clipo.webp';
import { CLIPO_CONFIG, resolveCta, trackCta } from '../../config';

export default function Footer() {
  const login = resolveCta('login');
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <img src={logo} alt="Clipo" width={108} height={32} />
            <p>Crie, edite e publique.</p>
          </div>
          <ul>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#faq">Dúvidas</a></li>
            <li>
              <a href={login.href} onClick={() => trackCta({ cta: 'login', plan: null, where: 'footer' })}>
                Entrar
              </a>
            </li>
            <li><a href={CLIPO_CONFIG.links.terms || '#'}>Termos de uso</a></li>
            <li><a href={CLIPO_CONFIG.links.privacy || '#'}>Privacidade</a></li>
          </ul>
        </div>
        <p className="copy">© {new Date().getFullYear()} Clipo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
