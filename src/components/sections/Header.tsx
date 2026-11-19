import { useState } from 'react';
import logo from '../../assets/logo-clipo.webp';
import { NAV_LINKS } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="nav">
          <a className="brand" href="#topo" aria-label="Clipo — página inicial">
            <img src={logo} alt="Clipo" width={120} height={35} />
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <CtaLink type="signup" where="header" className="btn btn-primary btn-sm">
              Começar agora
            </CtaLink>
            <button
              className="menu-btn"
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="menuPanel"
              onClick={() => setOpen((o) => !o)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
        <nav className={`menu-panel${open ? ' open' : ''}`} id="menuPanel" aria-label="Menu">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <CtaLink type="signup" where="menu-mobile" className="btn btn-primary">
            Começar agora
          </CtaLink>
        </nav>
      </div>
    </header>
  );
}
