/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';

const detailDescription = ({ data }) => {
  if (!data) {
    return '<h2>No Data</h2>';
  }
  console.log(data);
  return `
  <h1 class="detail_text">Detail Restaurant</h1>
  <img src="${CONFIG.API_URL}${CONFIG.IMG_PATH_MEDIUM}${data.pictureId}" >
  <h1>  ${data.name}</h1>
  <p> 📌 ${data.address}- 🌆${data.city}</p>
  <p>${data.description}</p>
  <div class="_add_fav">

  </div>
  `;
};

export default detailDescription;
