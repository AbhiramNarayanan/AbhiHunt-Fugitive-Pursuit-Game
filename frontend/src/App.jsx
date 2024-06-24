import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import StartPage from './components/StartPage';
import CitySelection from './components/CitySelection';
import VehicleSelection from './components/VehicleSelection';
import ResultPage from './components/ResultPage';

const App = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [result, setResult] = useState(null);

  const handleCitySelect = (cities) => {
    setSelectedCities(cities);
  };

  const handleVehicleSelect = (vehicles) => {
    setSelectedVehicles(vehicles);
  };

  const handleGameStart = () => {
    console.log("Selected Cities:", selectedCities);
    console.log("Selected Vehicles:", selectedVehicles);
  
   
    if (selectedCities.length > 0 && Object.keys(selectedVehicles).length > 0) {
      // Randomly select one cop who has both a city and a vehicle
      const randomCop = Math.floor(Math.random() * 3) + 1;
      setResult({
        found: true,
        copName: `Cop ${randomCop}`, 
        copNumber: randomCop,
        selectedCity: selectedCities[0], 
        selectedVehicle: Object.keys(selectedVehicles)[0], 
      });
    } else {
      alert("Please select at least one city and one vehicle before starting the game.");
    }
  };
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/city-selection" element={<CitySelection onCitySelect={handleCitySelect} />} />
        <Route path="/vehicle-selection" element={<VehicleSelection onVehicleSelect={handleVehicleSelect} selectedCities={selectedCities} handleGameStart={handleGameStart} />} />
        <Route path="/result" element={<ResultPage result={result} selectedCities={selectedCities} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
