import { vehicles } from '../data/index.js';

export const getVehicles = () => {
  return vehicles;
};

export const getVehicleByKind = (kind) => {
  return vehicles.find(vehicle => vehicle.kind === kind);
};