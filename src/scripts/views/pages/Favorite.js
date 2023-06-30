/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';

const Favorites = {
  async render() {
    return `
        <h2>Favorites Page</h2>
        `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
  },

};

export default Favorites;
