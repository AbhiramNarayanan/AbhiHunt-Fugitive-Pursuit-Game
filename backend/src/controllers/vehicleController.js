import * as vehicleModel from '../models/vehicleModel.js';

export const getAllVehicles = (req, res) => {
  console.log('Request received for fetching all vehicles');
  const vehicles = vehicleModel.getVehicles();
  res.json(vehicles);
};