import axios from 'axios';

//Contains functions for fetching data from an external API, including retrieving all products and product details.

const BASE_URL = 'https://tinyurl.com/vht7ah2';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
