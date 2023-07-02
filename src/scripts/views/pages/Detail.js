/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import dataRestaurants from '../../globals/api-endpoint';

const Detail = {
  async render() {
    return `
        <div class="_detail_container">
          <div class="_detail_description">
          <h1 class="detail_text">Detail Restaurant</h1>
            <img src="https://restaurant-api.dicoding.dev/images/medium/14" >
            <h1>  Melting Pot</h1>
            <p>Jln. Pandeglang no 19 - Medan</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
            <div class="_detail_categories">
              <p>#italia</p>
              <p>#Modern</p>
            </div>
            <div class="_add_fav">
             <button class="fav" > 💓 Add to Fav</button>
            </div>
          </div>
          <div>
          </div>
        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.withoutCombiner();
    const { restaurant } = await dataRestaurants.getDetailSpecified(url.id);
    console.log(restaurant);
  },
};

export default Detail;
