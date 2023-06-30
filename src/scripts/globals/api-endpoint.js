import CONFIG from './config';

const dataRestaurants = {
  async getRestaurants() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return response.json();
      }
      throw new Error('Error while Fetching !!');
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default dataRestaurants;
