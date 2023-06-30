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
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

// window.addEventListener('hashchange', () => {
//   app.renderPage();
// });

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);

  // FooterToolsInitiator.init({
  //   subscribeButton: document.querySelector('#subscribePushNotification'),
  //   unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
  // });
});
