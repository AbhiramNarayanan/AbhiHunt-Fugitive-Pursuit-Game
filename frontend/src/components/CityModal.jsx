import React, { useState, useEffect } from 'react';
import "../assets/styles/CityModal.css";

const CityModal = ({ selectedCities, onClose, onNavigate }) => {
  
  const [modalOpen, setModalOpen] = useState(true); 

 
  const handleCloseModal = () => {
    setModalOpen(false);
    onClose();
  };

  useEffect(() => {
    setModalOpen(true); 
  }, []);

  
  const getCopLabel = (index) => {
    return `Cop${index + 1}`;
  };

  return (
    <div className={`city-modal-overlay ${modalOpen ? 'open' : 'closed'}`} onClick={handleCloseModal}>
      <div className="city-modal" onClick={e => e.stopPropagation()}>
        <h2>Selected Cities</h2>
        <ul>
          {selectedCities.map((city, index) => (
            <li key={city.name}>
              {getCopLabel(index)}: {city.name}
            </li>
          ))}
        </ul>
        <button onClick={handleCloseModal}>Close</button>
        <button onClick={onNavigate}>Select Vehicles</button>
      </div>
    </div>
  );
};

export default CityModal;
