import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/tokens.css';
import './styles/base.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/vsl.css';
import './styles/solution.css';
import './styles/features.css';
import './styles/how.css';
import './styles/audience.css';
import './styles/plans.css';
import './styles/faq.css';
import './styles/final.css';
import './styles/footer.css';
import './styles/sticky.css';
import './styles/motion.css'; // sempre por último (prefers-reduced-motion)

// Habilita as animações de entrada (o conteúdo continua visível sem JavaScript).
document.documentElement.classList.add('js');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
