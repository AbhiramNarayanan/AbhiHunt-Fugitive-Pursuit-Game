import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityModal from './CityModal';
import "../assets/styles/CitySelection.css";
import { useNavigate } from 'react-router-dom';

const CitySelection = ({ onCitySelect }) => {
  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://abhihunt-fugitive-pursuit-game.onrender.com/api/cities')
      .then(response => setCities(response.data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  const handleCitySelect = (city) => {
    if (selectedCities.includes(city)) {
      alert(`You've already selected ${city.name}.`);
      return;
    }
    if (selectedCities.length < 3) {
      const newSelection = [...selectedCities, city];
      setSelectedCities(newSelection);
      onCitySelect(newSelection);
    } else {
      alert("You can select up to 3 cities.");
      setShowModal(true);
    }
  };

  
  const getCityImageFileName = (cityName) => {
    return cityName.toLowerCase().replace(/\s+/g, '-') + '.png';
  };

  return (
    <div>
      <h2>Select a City for Each Cop (3 nos and click 4th image)</h2>
      <div className="city-selection">
        {cities.map(city => (
          <div 
            key={city.name} 
            onClick={() => handleCitySelect(city)} 
            className={selectedCities.includes(city) ? 'selected' : ''}
          >
            <img src={`/images/${getCityImageFileName(city.name)}`} alt={city.name} />
            <p>{city.name} ({city.distance} KM)</p>
          </div>
        ))}
      </div>

      {showModal && (
        <CityModal
          selectedCities={selectedCities}
          onClose={() => setShowModal(false)}
          onNavigate={() => {
            navigate('/vehicle-selection');
          }}
        />
      )}
    </div>
  );
};

export default CitySelection;
