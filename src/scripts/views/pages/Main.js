/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';

const Main = {
  async render() {
    return `
        <h2>Main Page</h2>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
  },
};

export default Main;
