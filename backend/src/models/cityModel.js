import { cities } from '../data/index.js';

export const getCities = () => {
  return cities;
};

export const getCityByName = (name) => {
  return cities.find(city => city.name === name);
};
