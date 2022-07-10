import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function TrainStations({ stations }) {
  return (
    <div className="train-stations">
      {Object.keys(stations).map((stationName) => (
        <NavLink
          className={({ isActive }) =>
            `train-stations__link ${
              isActive ? 'train-stations__link--active' : ''
            }`
          }
          key={stationName}
          to={`${stations[stationName]}`}
        >
          {' '}
          <span>{stationName}</span>
        </NavLink>
      ))}
    </div>
  );
}

TrainStations.proptype = {
  stations: propTypes.object.isRequired,
};
export default TrainStations;
