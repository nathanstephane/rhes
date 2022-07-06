import React from 'react';
import propTypes from 'prop-types';

function CityCard({ city }) {
  return (
    <div
      className="city-card"
      style={{ backgroundImage: `url('./images/${city}.webp')` }}
    >
      <h3 className="city-card__name">{city}</h3>
    </div>
  );
}
CityCard.propTypes = {
  city: propTypes.string.isRequired,
};

export default CityCard;
