import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const fetchCities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cities`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const fetchVehicles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vehicles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};
