import { useEffect } from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Vsl from './components/sections/Vsl';
import HowItWorks from './components/sections/HowItWorks';
import Solution from './components/sections/Solution';
import Features from './components/sections/Features';
import Audience from './components/sections/Audience';
import Plans from './components/sections/Plans';
import Faq from './components/sections/Faq';
import FinalCta from './components/sections/FinalCta';
import Footer from './components/sections/Footer';
import StickyCta from './components/sections/StickyCta';

export default function App() {
  // Animação de entrada: só desloca os blocos; o conteúdo já está visível.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      <Header />
      <main id="topo">
        <Hero />
        <Vsl />
        <HowItWorks />
        <Solution />
        <Features />
        <Audience />
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
