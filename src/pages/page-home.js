import { html } from 'lit';
import { Logo, Feature } from '../components';
import { urlForName } from '../router';
import { PageElement } from '../helpers/page-element';
import { UserLogin } from '../components/user-login';
import { MainChat } from '../components/main-chat';

export class PageHome extends PageElement {
  static get properties() {
    return {
      myUser: { type: Object }
    };
  }

  constructor() {
    super();
    this.myUser = undefined;
  }

  render() {
    return html`
      ${!this.myUser
        ? html`<user-login @joinChat=${this.myUserJoined}></user-login>`
        : html`<main-chat></main-chat>`}
    `;
  }

  myUserJoined(event) {
    this.myUser = event.detail;
  }
}

customElements.define('page-home', PageHome);
