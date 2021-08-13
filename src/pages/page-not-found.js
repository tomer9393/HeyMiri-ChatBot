import { html, css } from '../components/base';
import { urlForName } from '../router';
import { PageElementNotFound } from '../helpers/page-element-not-found';

export class PageNotFound extends PageElementNotFound {
  render() {
    return html`
      <style></style>
      <section class="not-found">
        <img
          class="not-found-desk swing-in-top-fwd"
          src="images/miri/404.jpg"
        />
        <img
          class="not-found-mobile swing-in-top-fwd"
          src="images/miri/404-mobile.jpg"
        />
      </section>
    `;
  }
}

customElements.define('page-not-found', PageNotFound);
