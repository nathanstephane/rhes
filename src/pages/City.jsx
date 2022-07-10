import React from 'react';
import { useParams } from 'react-router-dom';
import stations from '../stations.json';
import TrainStations from '../components/TrainStations';

function City() {
  const { city } = useParams();
  return (
    <div className="city">
      <h2 className="city__name">{city}</h2>
      <TrainStations stations={stations[city]} />
    </div>
  );
}

export default City;
