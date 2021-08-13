import { LitElement, html, css } from './components/base';
import { Logo } from './components';

import config from './config';

import { attachRouter, urlForName } from './router';

// visit https://components.forter.dev for more
import '@forter/avatar';
import '@forter/button';
import '@forter/input';

import 'pwa-helper-components/pwa-install-button.js';
import 'pwa-helper-components/pwa-update-available.js';

export class App extends LitElement {
  render() {
    return html` <main role="main"></main> `;
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    attachRouter(this.querySelector('main'));
  }
}

customElements.define('app-index', App);
