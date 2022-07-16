import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { parseUTCDate } from './Utils';

function Arrivals() {
  const { codeStation } = useParams();

  const [nextArrivals, setNextArrivals] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/arrivals`,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      .then((response) => {
        const arrivals = response.data.arrivals.map((arrival) => ({
          id: arrival.links[1].id,
          operator: '',
          code: arrival.display_informations.code,
          transportationMode: arrival.display_informations.network,
          trainNumber: arrival.display_informations.headsign,
          baseArrivalTime: parseUTCDate(
            arrival.stop_date_time.base_arrival_date_time
          ),
          realArrivalTime: parseUTCDate(
            arrival.stop_date_time.arrival_date_time
          ),
          destination: arrival.display_informations.direction.split('(')[0],
        }));
        setNextArrivals(arrivals);
      });
  }, [codeStation]);

  
  return <div />;
}

export default Arrivals;
