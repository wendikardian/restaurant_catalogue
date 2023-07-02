// import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer_utils';

class App {
  constructor({ button, drawer, content, main }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._main = main;
    this._initialAppShell();
  }

  // eslint-disable-next-line class-methods-use-this
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._main,
    });
  }

  async renderPage() {
    const url = UrlParser.withCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
