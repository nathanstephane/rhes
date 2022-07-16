import React, { useState } from 'react';
import Departures from './Departures';

function TrainStation() {
  const [departureMode, setDepartureMode] = useState(true);

  return (
    <div className="train-station">
      <div className="directions">
        <button
          type="button"
          className={`directions__departures ${
            departureMode ? 'directions__departures--active' : ''
          }`}
          onClick={() => setDepartureMode(true)}
          onKeyPress={() => setDepartureMode(true)}
        >
          Departures
        </button>

        <button
          type="button"
          className={`directions__arrivals ${
            departureMode ? '' : 'directions__arrivals--active'
          }`}
          onClick={() => setDepartureMode(false)}
          onKeyPress={() => setDepartureMode(false)}
        >
          Arrivals
        </button>
      </div>

      {/* Displays Departures or Arrivals components according to departureMode */}
      {departureMode && <Departures />}
      {!departureMode && <Arrivals />}
    </div>
  );
}

export default TrainStation;
