import { html, css } from '../components/base';
import { urlForName } from '../router';
import { PageElementNotFound } from '../helpers/page-element-not-found';

// display 404 for desktop and mobile.
export class PageNotFound extends PageElementNotFound {
  render() {
    return html`
      <style>
        @media (min-width: 768px) {
          .not-found-mobile {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .is-only-desktop {
            display: none !important;
          }

          .not-found {
            display: flex !important;
            justify-content: center !important;
          }

          .not-found img {
            position: fixed !important;
            max-width: 75vh !important;
            height: 100% !important;
          }

          .not-found-desk {
            display: none;
          }
        }
      </style>
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
