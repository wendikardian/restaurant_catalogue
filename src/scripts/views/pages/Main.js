/* eslint-disable no-unused-vars */
// import UrlParser from '../../routes/url-parser';
import dataRestaurants from '../../globals/api-endpoint';
import itemRestaurant from '../templates/itemRestaurant';
import CONFIG from '../../globals/config';

const Main = {
  async render() {
    return `
    <h1 class="title-restaurant" tabindex="0">Explore here</h1>
    <div class="restaurant-container" id="restaurant-container">
        `;
  },
  async afterRender() {
    const restContainer = document.querySelector('.restaurant-container');
    const data = await dataRestaurants.getRestaurants();
    const resData = data.restaurants;
    restContainer.innerHTML = '';
    resData.forEach((resto) => {
      console.log(resto);
      const imgPath = `${CONFIG.API_URL}${CONFIG.IMG_PATH_SMALL}`;
      const limitDesc = `${resto.description.substring(9, 100)} ... `;
      const card = itemRestaurant({
        data: resto,
        imagePath: imgPath,
        description: limitDesc,
      });
      restContainer.innerHTML += card;
    });
  },
};

export default Main;
