import * as cityModel from '../models/cityModel.js';

export const getAllCities = (req, res) => {
  console.log('Request received for fetching all cities');
  const cities = cityModel.getCities();
  res.json(cities);
};