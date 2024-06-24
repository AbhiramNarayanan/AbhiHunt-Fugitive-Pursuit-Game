import React from 'react';
import "../assets/styles/ResultPage.css"

const ResultPage = ({ result, selectedCities }) => {
  return (
    <div className='result-page'>
      <h2>Result</h2>
      {result && result.found ? (
        <div>
          <h3>Fugitive Captured!</h3>
          <p>The fugitive was captured by {result.copName}</p>
          <img src={`/images/cop${result.copNumber}.png`} alt={`Cop ${result.copNumber}`} />
          <p>Captured City: {result.selectedCity.name}</p>
          <h4>Criminal Image:</h4>
          <img src="/images/fugitive.png" alt="Criminal Image" /> 
        </div>
      ) : (
        <div>
          <h3>Fugitive Not Captured</h3>
          <p>The fugitive managed to escape this time.</p>
          <h4>Criminal Image:</h4>
          <img src="/images/fugitive.png" alt="Criminal Image" /> 
        </div>
      )}

      <h3>Search Conducted Cities:</h3>
      <ul>
        {selectedCities.map(city => (
          <li key={city.name}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPage;
