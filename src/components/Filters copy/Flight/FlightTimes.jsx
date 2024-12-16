import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDeparture, setArrival } from '../../../Redux/Slice/FlightSlice/FlightDepartureFilter';

function FlightTimes() {
  const dispatch = useDispatch();
  const { departure, arrival } = useSelector((state) => state.flightTimes);

  const formatTime = (value) => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const handleDepartureChange = (e) => {
    dispatch(setDeparture(parseFloat(e.target.value)));
  };

  const handleArrivalChange = (e) => {
    dispatch(setArrival(parseFloat(e.target.value)));
  };

  return (
    <div className="time-filter">
      <div className="filter-options">
        <div className="filter-title">Times</div>
        <label htmlFor="departure">Departure 00:00 - 24:00</label>
        <input
          type="range"
          className="form-range price-slider"
          id="departureRange"
          min="0"
          max="24"
          step="0.1" // Small step for finer granularity
          value={departure}
          onChange={handleDepartureChange}
        />
        <div className="price-range">
          <span>{formatTime(departure)}</span>
          <span>24:00</span>
        </div>
      </div>
      <div className="filter-options">
        <label htmlFor="arrival">Arrival 00:00 - 24:00</label>
        <input
          type="range"
          className="form-range price-slider"
          id="arrivalRange"
          min="0"
          max="24"
          step="0.1" // Small step for finer granularity
          value={arrival}
          onChange={handleArrivalChange}
        />
        <div className="price-range">
          <span>{formatTime(arrival)}</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
}

export default FlightTimes;
