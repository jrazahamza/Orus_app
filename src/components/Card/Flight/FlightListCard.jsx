import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedFlight } from '../../../Redux/Slice/FlightSlice/SelectedFlights'; 

function FlightListCard() {
  const { freebies, stops } = useSelector((state) => state.freebiesFlight);
  const { arrival, departure } = useSelector((state) => state.flightTimes);
  const { price } = useSelector((state) => state.price);
  const dispatch = useDispatch();

  const isPriceInRange = price >= 50 && price <= 500;
  const isTravelTimeValid = Math.abs(arrival - departure) <= 12;

  if (!isPriceInRange || !isTravelTimeValid) {
    return (
      <div className="no-flights-found">
        <h3>No flights found</h3>
        <p>Please adjust your filters or search criteria.</p>
      </div>
    );
  }

  // Handle selection of flight
  const handleSelect = () => {
    const flightDetails = {
      freebies,
      stops,
      arrival,
      departure,
      price,
    };
    dispatch(setSelectedFlight(flightDetails));
  };

  return (
    <div className="card flight-card">
      {/* Airline Header Section */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://hailogics-ours.netlify.app/images/emirate.png"
            alt="Airline Logo"
            className="airline-logo"
          />
          <div className="ms-3">
            <h5 className="airline-name">Emirates Airlines</h5>
            <small className="text-muted">Operated by XYZ Airlines</small>
          </div>
        </div>
        <div className="text-end d-flex">
          <p className="m-0 stops-info">
            2 Stops <span className="travel-time">{Math.abs(arrival - departure)}h</span>
          </p>
          {freebies?.economy && <span className="badge fastest-badge">Economy Freebie</span>}
        </div>
      </div>

      {/* Route Section */}
      <div className="route-section mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <p className="city-name m-0">
              Departure City<br />
              <small className="flight-time">{`${departure}:00`}</small>
            </p>
          </div>
          <div className="plane-icon flight-icon-between">
            <img
              className="line-flight-between"
              src="https://hailogics-ours.netlify.app/images/flight-between-line.png"
              alt="Flight Path"
            />
            {stops?.frontDesk && <small className="layover">Belgium - 24hr Front Desk</small>}
          </div>
          <div className="text-end">
            <p className="city-name m-0">
              Arrival City<br />
              <small className="flight-time">{`${arrival}:00`}</small>
            </p>
          </div>
        </div>
      </div>

      {/* Flight Details Section */}
      <div className="flight-price-detai-select d-flex justify-content-between align-items-center mt-4">
        <div className="flight-price">
          <h4 className="price">${price}</h4>
        </div>
        <div className="flight-detail">
          <p className="flight-details">Wed 12 | Economy | 2 seats | Round trip</p>
          {freebies?.firstClass && <p className="freebie-note"> First Class Upgrade</p>}
        </div>
        <Link to="/Testing">
          <button className="btn btn-select" onClick={handleSelect}>Select</button>
        </Link>
      </div>
    </div>
  );
}

export default FlightListCard;
