import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStop } from '../../../Redux/Slice/FlightSlice/FlightFreebee';

function AirlineStops() {
  const dispatch = useDispatch();
  const stops = useSelector((state) => state.freebiesFlight.stops);

  const handleToggle = (stop) => {
    dispatch(toggleStop({ stop })); 
    console.log(stops);
  };

  return (
    <div className="filter-options">
      <div className="filter-title">Stops</div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="frontDesk"
          checked={stops.frontDesk}
          onChange={() => handleToggle('frontDesk')}
        />
        <label className="form-check-label" htmlFor="frontDesk">24hr front desk</label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="airConditioned"
          checked={stops.airConditioned}
          onChange={() => handleToggle('airConditioned')}
        />
        <label className="form-check-label" htmlFor="airConditioned">Air-conditioned</label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="fitness"
          checked={stops.fitness}
          onChange={() => handleToggle('fitness')}
        />
        <label className="form-check-label" htmlFor="fitness">Fitness</label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="pool"
          checked={stops.pool}
          onChange={() => handleToggle('pool')}
        />
        <label className="form-check-label" htmlFor="pool">Pool</label>
      </div>

      <div className="show-more">+24 more</div>
    </div>
  );
}

export default AirlineStops;
