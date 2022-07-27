import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { parseUTCDate, getFullMinutes, calculateDelay } from './Utils';
import Stops from './Stops';

function Departures() {
  const { codeStation } = useParams();
  const [nextDepartures, setNextDepartures] = useState([]);

  const getResponse = async () => {
    const response = await axios.get(
      `https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/departures`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    console.log(response);

    const nextDeparturesApi = response.data.departures.map((departure) => ({
      id: departure.links[1].id,
      operator: '',
      code: departure.display_informations.code,
      transportationMode: departure.display_informations.network,
      trainNumber: departure.display_informations.headsign,
      baseDepartureTime: parseUTCDate(
        departure.stop_date_time.base_departure_date_time
      ),
      realDepartureTime: parseUTCDate(
        departure.stop_date_time.departure_date_time
      ),
      destination: departure.display_informations.direction.split('(')[0],
    }));
    // console.log(nextDeparturesApi[0]);
    setNextDepartures(nextDeparturesApi);
  };

  useEffect(() => {
    getResponse();
  }, [codeStation]);

  const [isTimeDisplayed, setIsTimeDisplayed] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTimeDisplayed((prevIsTimeDisplayed) => !prevIsTimeDisplayed);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="departures">
      {nextDepartures.map((departure, index) => (
        <div
          key={departure.id}
          className={`departure ${index % 2 ? '' : 'departure--light'}`}
        >
          <p className="departure__operator">{departure.operator}</p>
          <p className="departure__train-type">
            {departure.transportationMode === 'RER'
              ? `${departure.transportationMode}  ${departure.code}`
              : departure.transportationMode}
          </p>
          <p className="departure__train-number">{departure.trainNumber}</p>
          <p
            className={`departure__time ${
              isTimeDisplayed ? '' : 'departure__time--disappear'
            }`}
          >
            {/* {console.log(departure.baseDepartureTime.getHours())} */}
            {departure.baseDepartureTime.getHours()}h
            {getFullMinutes(departure.baseDepartureTime)}min
          </p>
          <p
            className={`departure__delay ${
              isTimeDisplayed ? 'departure__delay--disappear' : ''
            }`}
          >
            {calculateDelay(
              departure.baseDepartureTime,
              departure.realDepartureTime
            )}
          </p>
          <p className="departure_destination">{departure.destination}</p>
          <Stops idDeparture={departure.id} />
        </div>
      ))}
    </div>
  );
}

export default Departures;
