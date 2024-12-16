import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAmenity } from '../../../Redux/Slice/HotelSlixe';

function HotelAmenities() {
  const dispatch = useDispatch();
  const amenities = useSelector((state) => state.hotelAmenities.amenities);

  const handleAmenityChange = (amenity) => {
    dispatch(toggleAmenity({ amenity }));
    console.log(amenity);
  };

  return (
    <div className="filter-options">
      <div className="filter-title">Amenities</div>
      
      {/* 24hr Front Desk */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="frontDesk"
          checked={amenities.frontDesk}
          onChange={() => handleAmenityChange('frontDesk')}
        />
        <label className="form-check-label" htmlFor="frontDesk">
          24hr front desk
        </label>
      </div>

      {/* Air-conditioned */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="airConditioned"
          checked={amenities.airConditioned}
          onChange={() => handleAmenityChange('airConditioned')}
        />
        <label className="form-check-label" htmlFor="airConditioned">
          Air-conditioned
        </label>
      </div>

      {/* Fitness */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="fitness"
          checked={amenities.fitness}
          onChange={() => handleAmenityChange('fitness')}
        />
        <label className="form-check-label" htmlFor="fitness">
          Fitness
        </label>
      </div>

      {/* Pool */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="pool"
          checked={amenities.pool}
          onChange={() => handleAmenityChange('pool')}
        />
        <label className="form-check-label" htmlFor="pool">
          Pool
        </label>
      </div>

      <div className="show-more">+24 more</div>
    </div>
  );
}

export default HotelAmenities;
