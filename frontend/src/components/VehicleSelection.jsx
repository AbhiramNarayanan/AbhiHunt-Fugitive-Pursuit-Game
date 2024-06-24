import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/styles/VehicleSelection.css";
import { useNavigate } from 'react-router-dom';
import VehicleModal from './VehicleModal';

const VehicleSelection = ({ onVehicleSelect, selectedCities, handleGameStart }) => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://abhihunt-fugitive-pursuit-game.onrender.com/api/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error('Error fetching vehicles:', error));
  }, []);

  const handleVehicleSelect = (vehicle) => {
    const currentCount = selectedVehicles[vehicle.kind] || 0;
    
    if (currentCount >= vehicle.count) {
      alert(`You can't select more than ${vehicle.count} ${vehicle.kind}(s).`);
      return;
    }
    
    const newSelection = { ...selectedVehicles, [vehicle.kind]: currentCount + 1 };
    setSelectedVehicles(newSelection);
    onVehicleSelect(newSelection);
  
   
    if (Object.values(newSelection).reduce((a, b) => a + b, 0) === 3) {
      setShowModal(true);
    }
  };
  

  const getVehicleImageFileKind = (vehicleKind) => {
    return vehicleKind.toLowerCase().replace(/\s+/g, '-') + '.png';
  };

  return (
    <div>
      <h2>Select a Vehicle for Each Cop (3 nos)</h2>
      <div className="vehicle-selection">
        {vehicles.map(vehicle => (
          <div key={vehicle.kind} onClick={() => handleVehicleSelect(vehicle)} className={selectedVehicles[vehicle.kind] > 0 ? 'selected' : ''}>
            <img src={`/images/${getVehicleImageFileKind(vehicle.kind)}`} alt={vehicle.kind} />
            <p>{vehicle.kind} (Range: {vehicle.range} KM, Count: {vehicle.count})</p>
          </div>
        ))}
      </div>
      {showModal && (
        <VehicleModal
          selectedVehicles={selectedVehicles}
          onClose={() => setShowModal(false)}
          onNavigate={() => {
            handleGameStart(); 
            navigate('/result');
          }}
        />
      )}
    </div>
  );
};

export default VehicleSelection;
