import config from '../config';

/**
 * Update the navbar items by route
 */

function updateNavbar() {
  setTimeout(() => document.querySelector('app-index').requestUpdate(), 0);
}

/**
 * Route Config
 * @param {Route[]} route config
 */
export const routes = [
  {
    path: '/',
    name: 'home',
    component: 'page-home',
    metadata: {
      title: config.appName,
      titleTemplate: null,
      description: config.appDescription
    },
    action: async () => {
      await import('../pages/page-home');
      updateNavbar();
    }
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    metadata: {
      title: 'Error',
      description: null,
      image: null
    },
    action: async () => {
      await import('../pages/page-not-found');
      updateNavbar();
    }
  }
];
