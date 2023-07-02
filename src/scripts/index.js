/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
// import webSocketInitiator from './utils/websocket-initiator';
// import FooterToolsInitiator from './utils/footer-tools-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('.header__menu'),
  drawer: document.querySelector('#mobile-menu'),
  content: document.querySelector('.restaurant-list'),
  main: document.querySelector('main'),
});

// window.addEventListener('hashchange', () => {
//   app.renderPage();
// });

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
