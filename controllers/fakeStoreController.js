// controllers/fakeStoreController.js
const axios = require('axios');

const getFakeStoreData = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getFakeStoreData,
};