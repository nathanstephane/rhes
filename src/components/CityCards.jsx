import React from 'react';
import stations from '../stations.json';
import CityCard from './CityCard';

function CityCards() {
  const cities = Object.keys(stations);
  return (
    <div className="city-cards">
      {cities.map((city) => (
        <CityCard key={city} city={city} />
      ))}
    </div>
  );
}

export default CityCards;
