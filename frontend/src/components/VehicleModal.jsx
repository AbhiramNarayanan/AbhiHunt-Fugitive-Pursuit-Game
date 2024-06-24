import React, { useState, useEffect } from 'react';
import "../assets/styles/VehicleModal.css";

const VehicleModal = ({ selectedVehicles, onClose, onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCloseModal = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    setModalOpen(true);
  }, []);


  const copLabels = Object.keys(selectedVehicles);

  return (
    <div className={`vehicle-modal-overlay ${modalOpen ? 'open' : 'closed'}`} onClick={handleCloseModal}>
      <div className="vehicle-modal" onClick={e => e.stopPropagation()}>
        <h2>Selected Vehicles</h2>
        <ul>
          {copLabels.map(copLabel => (
            <li key={copLabel}>
              {copLabel}: {selectedVehicles[copLabel]}
            </li>
          ))}
        </ul>
        <button onClick={handleCloseModal}>Close</button>
        <button onClick={onNavigate}>Result</button>
      </div>
    </div>
  );
};

export default VehicleModal;
