/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
