import { createElement } from 'react';
import { render } from 'react-dom';

import App from './components/app';

(function() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  render(createElement(App), container);
})();
